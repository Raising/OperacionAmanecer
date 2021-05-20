import { ENUM } from '@COMMONS/constants';
import Resource, { fullProperty } from '@COMMONS/utils/conectivity/resource';
import { config } from '@vue/test-utils';
import { CodeNode } from 'source-list-map';
import { ThrowError } from '../main/error-handler';
import { ERROR } from '@COMMONS/constants';

const defaultFilterToQueryParser = function(url: string, queryData: resourceParam.locationQuery) {
  let firstElement = url.indexOf('?') === -1 ? true : false;

  let ret = Object.keys(queryData.resource.filters).reduce((acc: string, filterPropName: string) => {
    if (queryData.resource.filters[filterPropName].get() === undefined) return acc;
    if (firstElement === true) {
      firstElement = false;
      acc += '?';
    } else {
      acc += '&';
    }
    let value = queryData.resource.filters[filterPropName].get();
    if (Array.isArray(value)) {
      value = encodeURIComponent(`[${value.toString()}]`);
    }
    acc += `${filterPropName}=${value}`;
    return acc;
  }, url);
  return ret;
};

const defaultPropsToQueryParser = function(url: string, queryData: resourceParam.locationQuery) {
  return Object.keys(queryData.resource.refProps).reduce((acc: string, propName: string) => {
    acc = acc.replace(`/:${propName}`, '/' + String(queryData.resource.refProps[propName].get()));
    return acc;
  }, url);
};

type mockFunction = (param: { resource: Resource; data: any; url: string }) => any;
export namespace resourceParam {
  export type propType = 'props' | 'filters';
  export interface mappingFunctions {
    queryFilterParser?: { (url: string, param: resourceParam.locationQuery): string };
    pathPropsParser?: {
      (url: string, param: resourceParam.locationQuery): string;
    };

    formatSendData?: (resource: Resource) => (data: any) => any;
    mapResult?: (resource: Resource) => (result: any, xhttp?: XMLHttpRequest) => any;
  }
  export interface locationConfig extends mappingFunctions {
    path: string;
    mock?: mockFunction | { [prop: string]: any } | any[] | string | boolean;
    initialLoad?: boolean;
    conectionVerb?: ENUM.ConectionVerb;
    xhttpProperties?: { [prop: string]: any };
    propNameCamelType?: 'upper' | 'lower';
  }
  export interface property {
    property: string;
    value?: any;
    operator?: ENUM.FilterOperator;
    validation?: any;
    forceUpdate?: boolean;
  }

  export interface locationQuery {
    resource: Resource;
    data?: any;
    verb: ENUM.ConectionOperation;
  }
}

const defaultGridMapping: (config: { mapResultToStandard?: Function }) => resourceParam.mappingFunctions = ({
  mapResultToStandard,
}) => ({
  pathPropsParser: (url, { resource, data }) => {
    let orderingObject = resource.refProps.ordering.get();
    return `${url}?page=${resource.refProps.page.get()}&ordering=${JSON.stringify(orderingObject)}`;
  },

  queryFilterParser: (url, { resource, data }) => {
    let filtersObject: { [prop: string]: any } = {};

    // resource.fullFilters.map((filter) => {
    //   filtersObject[filter.config.property] = filter.get();
    // });

    return `${url}&filters=${JSON.stringify(filtersObject)}`;
  },

  mapResult: (resource: Resource) => (result: any) => {
    let firstLevel = result[Object.keys(result)[0]];
    let itemsKey: string = Object.keys(firstLevel).filter((key) => Array.isArray(firstLevel[key]))[0];
    let configKey: string = 'ConfigurationGrid';
    let GroupedDataKey: string = 'GroupedData';

    return {
      config: firstLevel[configKey],
      items: mapResultToStandard !== undefined ? firstLevel[itemsKey].map(mapResultToStandard) : firstLevel[itemsKey],
      groupedData: firstLevel[GroupedDataKey],
    };
  },
});

const defaultGetGridMapping: resourceParam.mappingFunctions = {
  pathPropsParser: (url, { resource, data }) => {
    return `${url}?page=${resource.refProps.page.get()}`;
  },

  queryFilterParser: (url, { resource, data }) => {
    let urlParams = '';
    for (let filter in resource.filters) {
      urlParams += `&${filter}=${resource.filters[filter].get()}`;
    }
    return `${url}${urlParams}`;
  },

  mapResult: (resource: Resource) => (result: any) => {
    let firstLevel = result[Object.keys(result)[0]];
    let itemsKey: string = Object.keys(firstLevel).filter((key) => Array.isArray(firstLevel[key]))[0];
    let configKey: string = 'ConfigurationGrid';
    let GroupedDataKey: string = 'GroupedData';
    return {
      config: firstLevel[configKey],
      items: firstLevel[itemsKey],
      groupedData: firstLevel[GroupedDataKey],
    };
  },
};

const defaultPostGridMapping: resourceParam.mappingFunctions = {
  mapResult: (resource: Resource) => (result: any) => {
    let firstLevel = result[Object.keys(result)[0]];
    let resultKeys: string[] = Object.keys(firstLevel).filter((key: string) => firstLevel[key] !== null);

    let itemsKey: string = resultKeys.filter((key) => Array.isArray(firstLevel[key]))[0];
    let configKey: string = resultKeys.filter(
      (key) => typeof firstLevel[key] === 'object' && firstLevel[key].Columns !== undefined,
    )[0];

    let GroupedDataKey: string = 'GroupedData';

    let config = firstLevel[configKey];

    config.Columns = config.Columns.map((column: any) => ({
      ...column,
      ColumnId: column.ColumnId + (column.IsCustomFieldColumn ? '_CORP' : ''),
    }));

    config.Columns = config.Columns.filter((column: any, index: number) => {
      return (
        index ===
        config.Columns.findIndex((obj: any) => {
          return obj.ColumnId === column.ColumnId;
        })
      );
    });

    return {
      config,
      items: firstLevel[itemsKey],
      groupedData: firstLevel[GroupedDataKey],
    };
  },

  formatSendData: (resource: Resource) => (data: any) => {
    let filtersObject: { [prop: string]: any } = {};
    resource.filters.$map((filter: fullProperty) => {
      filtersObject[filter.config.property] = filter.get();
    });
    return {
      activeTrackingValue: true,
      filter: { CustomfieldFilter: [] },
      //filter: filtersObject,
      gridCode: 2,
      ordering: resource.refProps.ordering.get(),
      page: resource.refProps.page.get(),
    };
  },
};

const expansibleGridMapping: resourceParam.mappingFunctions = {
  pathPropsParser: (url, { resource, data }) => {
    return `${url}?EntityId=${resource.refProps.EntityId.get()}`;
  },

  mapResult: (resource: Resource) => (result: any) => {
    let firstLevel = result[Object.keys(result)[0]];
    return {
      items: firstLevel,
    };
  },
};

const toSelectItem = (param: { value: string; text: string }) => (resource: Resource) => (result: any) => {
  if (result === undefined) {
    return undefined;
  }
  try {
    return result.map((item: any) => Object.assign(item, { text: item[param.text], value: item[param.value] }));
  } catch (e) {
    ThrowError(ERROR.Code.NOT_EXPECTED_VALUE, e);
  }
};

export {
  defaultFilterToQueryParser,
  defaultPropsToQueryParser,
  defaultGridMapping,
  defaultGetGridMapping,
  expansibleGridMapping,
  defaultPostGridMapping,
  toSelectItem,
};
