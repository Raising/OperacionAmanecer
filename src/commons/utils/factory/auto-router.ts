import Vue, { VueConstructor, Component } from 'vue';

import router from '@COMMONS/utils/main/router';
import { getPermission } from '@COMMONS/utils/main/permission';
import { axViewDescription, VueView } from './factory';

import { ENUM, ACT, MUT } from '@COMMONS/constants';
import { Store } from 'vuex';

interface RoutableVueConstructor extends VueConstructor {
  navigation: NavigationBeacon;
}

interface autoRouterCallbackConfig extends autoRouterConfig {
  navigation?: navigationInjectable;
}

interface routerNode {
  path: string;
  beforeEnter: any;
  children?: Array<routerNode>;
  component?: VueConstructor;
}

interface navigationNode {
  getNavigationInjectable: Function;
  getChildrenLinks: Function;
}

interface navigationLink {
  childrenLinkNodes: navigationLink[];
  staticShowChildren: boolean;
  path: string;
  name?: string | (() => string);
  paramPath: Function;
  showInMenu?: boolean;
  disabled?: boolean;
  onClick?: Function;
  icon?: any;
  badge?: Function;
  isSelected: () => boolean;
}

interface childrenLinks {
  collection: navigationLink[];
  instance: { [name: string]: navigationLink };
}

interface navigationInjectable {
  injectInRouter: Function;
  getLink: Function;
  getName: Function;
  getRouterConfigAsChild: Function;
  calculateChildrenLinks: Function;
  calculateModuleChildrenLinks: Function;
}

interface GenericNavigationConfig {
  name: string | (() => string);
  badge?: Function;
  showInMenu?: boolean;
  disabled?: boolean;
  icon?: any;
  permissionCode?: number | string | number[] | string[];
  onClick?: Function;
  staticShowChildren?: boolean;
}

interface autoRouterConfig extends GenericNavigationConfig {
  name: string;
  basePath?: string;
  children?: Array<RoutableVueConstructor | autoRouterCallbackConfig>;
  defaultChildren?: RoutableVueConstructor;
  path: string;
}

const parametrizedPath = (path: string) => (parameters: any, previousNavParameters: any) => {
  const allParam = Object.assign({}, previousNavParameters, parameters);
  return Object.keys(allParam).reduce((acc, key) => acc.replace(`/:${key}`, `/${allParam[key]}`), path);
};

class NavigationGenericNode {
  name: string | (() => string);
  permissionCode?: number | string | number[] | string[];
  icon: any;
  badge?: Function;
  badgeVariant: string = '';
  childrenLinkNodes?: Array<navigationLink> = undefined;
  viewInstance: any = undefined;
  isSelected: () => boolean;
  staticShowChildren: boolean;

  constructor(config: GenericNavigationConfig) {
    this.name = config.name || 'NAME_IS_MISSING';
    this.icon = config.icon;
    this.permissionCode = config.permissionCode;
    this.badge = config.badge;
    this.staticShowChildren = config.staticShowChildren !== undefined ? config.staticShowChildren : false;
    this.isSelected = () => false;
  }

  setViewInstance = function(this: NavigationGenericNode, viewInstance: any) {
    this.viewInstance = viewInstance;
  };

  getName = function(this: NavigationGenericNode) {
    return this.name;
  };
}

class NavigationBeacon extends NavigationGenericNode {
  //properties
  children: Array<NavigationBeacon> = [];
  path: string;
  basePath: string;
  viewConstructor?: VueConstructor;
  extraLinks: number = 0;
  link?: navigationLink;
  defaultChildren?: NavigationBeacon;
  //constructor

  constructor(config: autoRouterConfig) {
    super(config);
    //@ts-ignore
    this.children = (config.children || [])
      .filter((child) => child.navigation !== undefined)
      .map((child) => child.navigation);

    this.path = config.path;
    this.defaultChildren = config.defaultChildren ? config.defaultChildren.navigation : undefined;
    this.basePath = '';
  }

  setviewConstructor = function(this: NavigationBeacon, viewConstructor: VueConstructor) {
    this.viewConstructor = viewConstructor;
  };

  injectInRouter = function(this: NavigationBeacon, store: Store<any>, basePath: string = '') {
    this.basePath = basePath;
    const currentPath = this.basePath + this.path;

    router.addRoutes([
      {
        beforeEnter: checkRerouting(store),
        path: currentPath,
        component: this.viewConstructor,
        children: this.children.map((child) => child.getRouterConfigAsChild(store, currentPath)),
      },
      {
        beforeEnter: checkRerouting(store),
        path: '*',
        component: this.viewConstructor,
      },
    ]);
  };

  getRouterConfigAsChild = function(this: NavigationBeacon, store: Store<any>, basePath: string): routerNode {
    this.basePath = basePath;
    return {
      path: this.path,
      beforeEnter: checkRerouting(store),
      component: this.viewConstructor,
      children: this.children.map((child) => {
        return child.getRouterConfigAsChild(store, `${basePath}/${this.path}`);
      }),
    };
  };
}

export default (viewDescription: axViewDescription) => {
  if (viewDescription.autoRouter) {
    viewDescription.autoRouter.name = viewDescription.autoRouter.name || viewDescription.name;
  }
  if (viewDescription.autoRouter === undefined) {
    return undefined;
  }

  const navigationBeacon = new NavigationBeacon(viewDescription.autoRouter);
  return navigationBeacon;
};

const lastVisitedPageInModule: any = {};
let lastVisitedPageOrder = '';
const checkRerouting = (store: Store<any>) => (to: any, from: any, next: Function) => {
  const moduleTravelNext = (path?: string) => {
    if (path) {
      next(path);
    } else if (lastVisitedPageOrder !== to.path) {
      let fromBase = from.path.match(/\/home\/\w+/);
      fromBase = fromBase ? fromBase[0] : undefined;
      let toBase = to.path.match(/\/home\/\w+/);
      toBase = toBase ? toBase[0] : undefined;

      if (toBase && fromBase === toBase) {
        lastVisitedPageOrder = to.path;
        lastVisitedPageInModule[toBase] = to.path;
        next();
      } else if (toBase) {
        if (to.path.endsWith(toBase) && lastVisitedPageInModule[toBase]) {
          lastVisitedPageOrder = lastVisitedPageInModule[toBase];
          next(lastVisitedPageInModule[toBase]);
        } else {
          lastVisitedPageOrder = to.path;
          lastVisitedPageInModule[toBase] = to.path;
          next();
        }
      } else {
        next();
      }
    } else {
      next();
    }
  };

  checkSession(store, to, from, moduleTravelNext);
};

const checkSession = (store: Store<any>, to: any, from: any, next: Function) => {
  if (to.path !== '/login') {
    if (to.path.endsWith('/ext')) {
      store.dispatch(ACT.Navigation.SetPostLoginNavigation, { path: to.path.substring(0, to.path.length - 4) });
    }
  }
  if ((false && store.getters.getToken() == ENUM.AppState.NO_TOKEN) || store.getters.getToken() == undefined) {
    if (to.path !== '/login') {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
};

export { autoRouterConfig, navigationNode, navigationInjectable, navigationLink, childrenLinks };
