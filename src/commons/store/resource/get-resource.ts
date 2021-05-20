import { resourceParam } from '@COMMONS/utils/conectivity/location-tools';
import Resource from '@COMMONS/utils/conectivity/resource';

let initialLoadBackup: any;
export default {
  resourceContent: (state: any) => (resource: Resource) => {
    let storedValue = state.loaded[resource.id];
    if (resource.mainProperty !== '') {
      let propValue = resource.refProps[resource.mainProperty].get() || 'NoValue';
      return storedValue !== undefined ? storedValue[propValue] : undefined;
    }
    return storedValue;
  },

  resourceProp: (state: any) => (
    {
      type,
      resourceId,
      property,
    }: {
      type: resourceParam.propType;
      resourceId: string;
      property: string;
    },
    path?: string,
  ) => {
    if (state[type][resourceId] === undefined) return undefined;
    let value = state[type][resourceId][property];
    if (path !== undefined && typeof value === 'object') {
      return value.$getPropertyByPath(path);
    }
    return value;
  },
};
