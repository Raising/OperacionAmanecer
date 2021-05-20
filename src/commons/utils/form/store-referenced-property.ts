import { ACT, MUT } from '@COMMONS/constants';
import { GetValidateFunction } from './field-validation';
import FilterDefinitionAccess from '@COMMONS/utils/conectivity/filter-description';

interface ConnectedRefPropConfig {
  context: any;
  propConfig: any;
  path: string;
  onSetCallback?: Function;
  secondaryPathProp: string;
}

interface RefProp {
  get: (path?: string) => any;
  set: (value: any, overwrite?: boolean) => void;
  validate: () => boolean;
  subField: { [name: string]: any };
  config: ConnectedRefPropConfig;
  onSetCallback: Function[];
  addSubField: (subPath: string) => {};
}

const conectedPropPrototype = {
  addOnSetCallback: function(this: RefProp, newCallBack: Function) {
    this.onSetCallback.push(newCallBack);
  },
};

const getConnectedProp = (config: ConnectedRefPropConfig): RefProp => {
  let get = getComputedGetter(config);
  let set = getComputedSetter(config, get);
  let validate = getValidationConfig(config, get);

  let subField: { [name: string]: any } = {};
  return Object.assign(Object.create(conectedPropPrototype), {
    get: get,
    set: set,
    validate: validate,
    config: config.propConfig,
    ...(config.propConfig.type !== undefined ? { definition: FilterDefinitionAccess(config.propConfig) } : {}),
    onSetCallback: [...[config.propConfig.onSetCallback], ...[config.onSetCallback]].filter((el) => el),
    addSubField: (subPath: string) =>
      (subField[subPath] = getConnectedProp({
        ...config,
        ...{
          path:
            `${config.path}${config.secondaryPathProp ? '_' + config.context[config.secondaryPathProp] : ''}` +
            '.' +
            subPath,
        },
      })),
    subField,
  });
};

let getComputedGetter = ({ context, path, secondaryPathProp }: ConnectedRefPropConfig) => (innerPath?: string) =>
  context.$store.getters.fieldByPath(
    `${path}${secondaryPathProp ? '_' + context[secondaryPathProp] : ''}` + (innerPath ? `.${innerPath}` : ''),
  );

let getComputedSetter = (
  { context, propConfig, secondaryPathProp, path, onSetCallback }: ConnectedRefPropConfig,
  getter: Function,
) => {
  //return (value: any, overwrite: boolean = true) => {
  return function(this: RefProp, value: any, overwrite: boolean = true) {
    if (!overwrite) {
      let currentValue = getter();
      if (typeof currentValue === 'object' && typeof value === 'object') {
        value = { ...currentValue, ...value };
      }
    }
    if (propConfig.saveRequired) {
      context.$store.dispatch(ACT.Navigation.ViewEditedOn, context.viewName);
    }

    context.$store.commit(MUT.RefProp.SET_FIELD, {
      value,
      path: path + `${secondaryPathProp ? '_' + context[secondaryPathProp] : ''}`,
    });
    this.onSetCallback ? this.onSetCallback.map((callBack: Function) => callBack()) : '';
  };
};

let getValidationConfig = ({ context, propConfig }: ConnectedRefPropConfig, getter: Function) => {
  return propConfig.validation !== undefined ? GetValidateFunction(context, getter, propConfig.validation) : () => true;
};

export { getConnectedProp, conectedPropPrototype, RefProp };
