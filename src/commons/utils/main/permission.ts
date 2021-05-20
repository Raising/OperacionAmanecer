import { ENUM } from '@COMMONS/constants';
import Resource from '@COMMONS/utils/conectivity/resource';
import { ActionContext } from 'vuex';

let permisionResource: Resource;
let modAccessResources: Resource;

const resetPermisionResources = () => {
  if (permisionResource !== undefined) {
    permisionResource.refProps.requireActualization.set(true);
    modAccessResources.refProps.requireActualization.set(true);
  }
};

const initPermisionResource = (context: any) => {
  if (permisionResource === undefined) {
    permisionResource = new Resource({ type: ENUM.CommonsResource.PERMISSION }, context);
  } else if (permisionResource.refProps.requireActualization.get() === undefined) {
    permisionResource.refProps.requireActualization.set(true);
  }

  if (modAccessResources === undefined) {
    modAccessResources = new Resource({ type: ENUM.CommonsResource.MODULE_ACCESS }, context);
  } else if (modAccessResources.refProps.requireActualization.get() === undefined) {
    modAccessResources.refProps.requireActualization.set(true);
  }
};

const getPermisionResource: (context: any, isModule?: boolean) => Resource = (context, isModule) => {
  initPermisionResource(context);
  if (isModule) {
    return modAccessResources;
  } else {
    return permisionResource;
  }
};

const calculatePermisions = (context: ActionContext<any, any>) => {};

const getPermission = (context: any, code: ENUM.Permission | string | string[] | ENUM.Permission[]): boolean => {
  if (Array.isArray(code)) {
    //@ts-ignore
    return code.reduce((acc: boolean, code: ENUM.Permission | string) => {
      acc = acc || getPermission(context, code);
      return acc;
    }, false);
  }

  let isModule = false;
  if (typeof code == 'string' && code.startsWith('MODULE')) {
    isModule = true;
    code = code.substr(6);
  }

  let permisions = getPermisionResource(context, isModule);
  if (isModule) {
    if (permisions.isReady()) {
      return permisions.content(`${code}.Access`) === true;
    } else {
      return false;
    }
  } else {
    if (permisions.isReady()) {
      return permisions.content(`[[Key||${code}]]`) !== undefined;
    } else {
      return false;
    }
  }
};

export { getPermission, resetPermisionResources };
