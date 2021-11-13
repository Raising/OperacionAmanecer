import { axViewDescription } from '@COMMONS/utils/factory/factory';
import { ENUM, ACT, MUT } from '@COMMONS/constants';

import { resourceParam } from '@COMMONS/utils/conectivity/location-tools';
import { GetValidateFunction } from '@COMMONS/utils/form/field-validation';
import { RES } from '@COMMONS/constants';
import FilterDefinitionAccess, { FilterConfig, FilterDefinition } from './filter-description';
import { getConnectedProp, RefProp } from '../form/store-referenced-property';
import { config } from '@vue/test-utils';
import { __values } from 'tslib';

export type modelPath =
  | string
  | {
      path: string;
      requiered?: boolean;
    };
interface resourceConfig {
  mainProperty?: string;
  refProps?: resourceParam.property[];
  type: string; // :RES
  name?: string;
  filters?: FilterConfig[];
  mode?: ENUM.ResourceMode;
  singleton?: boolean;
  preventInitialLoad?: boolean;
  wildcard?: boolean;
  cacheExpiration?: boolean | number;
  localMapping?: Function;

  onError?: ((value?: any) => any)[];
  onFetch?: ((value?: any) => any)[];
  keepAlive?: boolean;
}
interface originalSource {
  original?: boolean;
}

interface fullProperty extends RefProp, originalSource {
  config: resourceParam.property & FilterConfig & originalSource & any;
  definition?: FilterDefinition;
}

const createdResources: { [resourceId: string]: Resource } = {};
const reloadResources = (resourcesIds: string[]) => {
  resourcesIds.map((resourceId) => createdResources[resourceId].load());
};

class Resource {
  static currentId: number = 0;
  type: RES;
  id: string;

  filters: { [name: string]: fullProperty };
  refProps: { [name: string]: fullProperty };

  localMapping?: Function;

  context: any;
  //requireActualization: boolean;
  mode: ENUM.ResourceMode;
  onError: ((value?: any) => any)[];
  onFetch: ((value?: any) => any)[];
  onFilterReset: Function[];
  keepAlive: boolean;
  waitingResponse: boolean;
  mainProperty: string;
  cacheExpiration: boolean | number;
  expirationTime: number;

  constructor(config: resourceConfig, context: any, name?: string, id?: string) {
    //@ts-ignore
    this.type = config.type;
    this.id = id !== undefined ? id : (!config.singleton ? ++Resource.currentId + '_' : '') + String(config.type);
    this.context = context;
    this.localMapping = config.localMapping;
    this.keepAlive = config.keepAlive || false;
    //default no collection
    this.mode = config.mode || ENUM.ResourceMode.ENTITY;
    this.onFilterReset = [];
    this.mainProperty = config.mainProperty !== undefined ? config.mainProperty : '';
    this.cacheExpiration = config.cacheExpiration !== undefined ? config.cacheExpiration : false;
    this.expirationTime = 0;
    context.resources = { ...(context.resources || {}), [name || this.id]: this };

    this.addDefaultRefProps(config);

    [this.refProps, this.filters] = this.initRefProps(
      (config.filters || []).map((conf) => ({ ...conf, original: true })),
      (config.refProps || []).map((conf) => ({ ...conf, original: true })),
    );

    // this.requireActualization = config.preventInitialLoad === true ? false : true;
    this.onError = config.onError || [() => {}];
    this.onFetch = config.onFetch || [() => {}];

    this.waitingResponse = false;
    createdResources[this.id] = this;
  }

  addDefaultRefProps(config: resourceConfig) {
    config.refProps = config.refProps || [];

    if (this.mode !== ENUM.ResourceMode.STATIC) {
      config.refProps.push({
        property: 'requireActualization',
        forceUpdate: false,
        value: config.preventInitialLoad === true ? false : true,
      });
    }

    if (this.mode === ENUM.ResourceMode.GRID) {
      if (config.refProps.find((prop) => prop.property === 'page') === undefined) {
        config.refProps.push({ property: 'page', value: 1 }); // default Page is 1
      }
      if (config.refProps.find((prop) => prop.property === 'elementsPerPage') === undefined) {
        config.refProps.push({ property: 'elementsPerPage', value: 25 }); // default number per page is 25
      }
      if (config.refProps.find((prop) => prop.property === 'ordering') === undefined) {
        config.refProps.push({ property: 'ordering', value: [] });
      }
      if (config.refProps.find((prop) => prop.property === 'localMappingCache') === undefined) {
        config.refProps.push({ property: 'localMappingCache', value: [], forceUpdate: false });
      }
    }
  }
  initRefProps(filtersDescription: resourceParam.property[], refPropsDescription: resourceParam.property[]): any[] {
    this.setDefaultValues(filtersDescription, refPropsDescription);

    return [
      this.createPropsAccesors('props', refPropsDescription),
      this.createPropsAccesors('filters', filtersDescription),
    ];
  }

  setDefaultValues(
    filterDescriptions: resourceParam.property[] = [],
    refPropsDescription: resourceParam.property[] = [],
  ): void {
    if (filterDescriptions.length + refPropsDescription.length > 0) {
      this.context.$store.commit(MUT.RefProp.SET_PROPS_COLLECTION, {
        path: this.id,
        props: {
          ...this.extractDefaultValues(filterDescriptions),
          ...this.extractDefaultValues(refPropsDescription),
        },
        overwrite: !this.keepAlive,
      });

      filterDescriptions.map((filter: FilterConfig) => {
        if (typeof filter.renderParam === 'function') {
          filter.parsedRenderParam = filter.renderParam.call(this.context);
        } else {
          filter.parsedRenderParam = filter.renderParam;
        }
      });
    }
  }

  addFilters(filtersDescription: FilterConfig[] = []) {
    this.setDefaultValues(filtersDescription);
    const filters = this.createPropsAccesors('filters', filtersDescription);
    this.filters = { ...this.filters, ...filters };
  }

  setFilters(filtersDescription: FilterConfig[] = []) {
    this.setDefaultValues(filtersDescription);
    const filters = this.createPropsAccesors('filters', filtersDescription);
    //redefine the filters but keep the original ones.
    this.filters = { ...this.filters.$filter((el: fullProperty) => el.config.original), ...filters };
  }

  /**
   * this create accesors for query props and filters, the simple version of getter seter to be used as
   * a in any custom function and the complete version to be passed to components
   * @param propsType filters | props
   * @param propsDescriptions collection of resource properties.
   */
  createPropsAccesors(propsType: resourceParam.propType, propsDescriptions: resourceParam.property[]): any {
    const resource = this;
    const propertyAccesors = propsDescriptions.reduce(
      (acc: any, prop: resourceParam.property) => {
        const propertySignature = { type: propsType, resourceId: resource.id, property: prop.property };
        acc.fullProperties[prop.property] = getConnectedProp({
          path: `${resource.id}.${prop.property}`,
          secondaryPathProp: '',
          context: resource.context,
          propConfig: prop,

          onSetCallback:
            prop.forceUpdate !== false
              ? () => {
                  if (
                    resource.mainProperty &&
                    prop.property == resource.mainProperty &&
                    this.context.$store.getters.resourceContent(this) !== undefined
                  ) {
                    this.resetLocalMappingCache();
                  } else {
                    this.scheduleActualization();
                  }
                }
              : prop.property !== 'localMappingCache'
              ? () => this.resetLocalMappingCache()
              : () => {},
        });

        return acc;
      },
      { fullProperties: {} },
    );

    return propertyAccesors.fullProperties;
  }

  resetLocalMappingCache() {
    if (this.refProps.localMappingCache !== undefined) {
      this.refProps.localMappingCache.set(undefined);
    }
  }

  resetFilters() {
    this.filters.$map((filter: fullProperty) => filter.set(filter.config.value));
    this.onFilterReset.map((callBack: Function) => callBack());
  }

  setOnFilterReset(callBack: Function): Function {
    this.onFilterReset.push(callBack);
    return () => this.onFilterReset.splice(this.onFilterReset.indexOf(callBack), 1);
  }

  //Update Filters Values and return true if there has been any change
  content(path?: modelPath) {
    this.load();
    let content = this.context.$store.getters.resourceContent(this);

    if (content !== undefined && this.localMapping !== undefined && this.isReady(content)) {
      if (this.refProps.localMappingCache.get() === undefined) {
        this.refProps.localMappingCache.set(this.localMapping(content));
      }
      content = this.refProps.localMappingCache.get();
    }

    return content !== undefined && content !== null
      ? content.$getPropertyByPath(path)
      : !path
      ? ENUM.ResourceState.NOT_REQUESTED
      : undefined;
  }

  setOnFetch(callBack: () => any) {
    this.onFetch.push(callBack);
    if (this.isReadyNoLoad()) {
      callBack();
    }
  }

  setOnError(callBack: () => any) {
    this.onError.push(callBack);
  }

  //standarisation of the properies to be displayed as options in a selector component.
  asEnum({ key = 'value', text = 'text' }: { key: string; text: string }) {
    const content = this.content();
    if (Array.isArray(content)) {
      return content.map((el) => ({
        [text]: [el.text, el.Label].$firstDefined(),
        [key]: [el.value, el.key, el.Value].$firstDefined(),
      }));
    }
  }
  scheduleActualization() {
    this.refProps.requireActualization.set(true);
    setTimeout(this.load.bind(this), 0);
  }
  fetchCollection({ data }: { data?: any }): Promise<any> {
    this.refProps.requireActualization.set(false);
    return this.context.$store.dispatch(ACT.Resource.FetchResourceCollection, { resource: this, data });
  }

  fetchGrid(): Promise<any> {
    this.refProps.requireActualization.set(false);
    return this.context.$store.dispatch(ACT.Resource.FetchGrid, { resource: this });
  }

  fetchEntity({ refProps }: { refProps: resourceParam.property[] }): Promise<any> {
    //TODO Mezclar Queryprops con las actuales del recurso
    // if (refProps) {
    //   refProps.forEach((prop: any) => {
    //     this.refProps[Object.keys(prop)[0]].set(prop[Object.keys(prop)[0]]);
    //   });
    // }

    this.refProps.requireActualization.set(false);
    return this.context.$store.dispatch(ACT.Resource.FetchResourceEntity, {
      resource: this,
    });
  }

  update(data: any) {
    this.refProps.requireActualization.set(false);
    return this.context.$store.dispatch(ACT.Resource.UpdateEntity, { resource: this, data });
  }

  updateEntity({ data, merge = true }: { data: any; merge: boolean }): Promise<any> {
    this.refProps.requireActualization.set(false);
    return this.context.$store.dispatch(ACT.Resource.UpdateEntity, { resource: this, data, merge });
  }

  deleteEntity({ data }: { data: any }): Promise<any> {
    return this.context.$store.dispatch(ACT.Resource.DeleteEntity, { resource: this, data });
  }

  createEntity({ data }: { data: any }): Promise<any> {
    return this.context.$store.dispatch(ACT.Resource.CreateEntity, { resource: this, data });
  }

  post({ data }: { data: any }): Promise<any> {
    this.waitingResponse = true;
    return this.context.$store
      .dispatch(ACT.Resource.PostServerAction, { resource: this, data })
      .then((result: any) => {
        this.waitingResponse = false;
        return result;
      })
      .catch((error: any) => {
        this.waitingResponse = false;
        throw error;
      });
  }

  refresh() {
    this.scheduleActualization();
  }

  isWaitingResponse(): boolean {
    return this.waitingResponse;
  }

  // ResourceState query to be used on templates
  isLoading(): boolean {
    return this.content() === ENUM.ResourceState.LOADING;
  }
  hasError(): boolean {
    return this.content() === ENUM.ResourceState.SERVER_ERROR;
  }
  isReadyNoLoad(): boolean {
    return this.isReady(this.context.$store.getters.resourceContent(this));
  }

  isReady(content?: any): boolean {
    const currentContent = content || this.content();
    return (
      currentContent !== undefined &&
      (typeof currentContent !== 'string' || !Object.keys(ENUM.ResourceState).includes(currentContent))
    );
  }
  load(): void {
    if (this.expirationTime > 0 && new Date().getTime() > this.expirationTime) {
      this.expirationTime = 0;
      this.context.$store.commit(MUT.Resource.SET_RESOURCE_AS_LOADING, { resource: this });
      return this.scheduleActualization();
    }
    if (this.refProps.requireActualization.get()) {
      switch (this.mode) {
        case ENUM.ResourceMode.COLLECTION:
          this.fetchCollection({})
            .then((result: any) => {
              if (this.isReady(result || ENUM.ResourceState.NOT_REQUESTED)) this.onFetch.map((callBack) => callBack());
            })
            .catch((error: any) => {
              this.onError.map((callBack) => callBack(error));
            });
          break;
        case ENUM.ResourceMode.ENTITY:
          this.fetchEntity({ refProps: [] })
            .then((result: any) => {
              if (this.isReady(result || ENUM.ResourceState.NOT_REQUESTED)) this.onFetch.map((callBack) => callBack());
            })
            .catch((error: any) => {
              this.onError.map((callBack) => callBack(error));
            });
          break;
        case ENUM.ResourceMode.GRID:
          this.fetchGrid()
            .then((result: any) => {
              if (this.isReady(result || ENUM.ResourceState.NOT_REQUESTED)) this.onFetch.map((callBack) => callBack());
            })
            .catch((error: any) => {
              this.onError.map((callBack) => callBack(error));
            });
          break;
      }
    }
  }

  // used to allow a function to describe the default value of a property.
  extractDefaultValues(propsDescription: resourceParam.property[]): any {
    const propsWithDefaultValue = propsDescription.filter((field: resourceParam.property) => field.value !== undefined);
    if (propsWithDefaultValue.length === 0) {
      return undefined;
    }

    return propsWithDefaultValue.reduce(
      (acc: { [name: string]: resourceParam.property }, field: resourceParam.property) => {
        acc[field.property] = typeof field.value === 'function' ? field.value(this.context) : field.value;
        return acc;
      },
      {},
    );
  }
}

class WildcardResource extends Resource {
  mimicResource = undefined;

  load() {
    return false;
  }
  content(path: string) {
    const resourceName = path.split('@@')[1];
    // if (resourceName === RES.WILDCARD) {
    // }
  }
}
export { WildcardResource, resourceConfig, fullProperty, reloadResources };
export default Resource;
