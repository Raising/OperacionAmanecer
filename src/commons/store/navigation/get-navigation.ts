import { NavigationState, ViewEdited } from './store-navigation';

export default {
  getRoute: (state: any, getters: any, rootState: any) => () => {
    return rootState.route.path;
  },
  getNavigationWait: (state: NavigationState) => () => {
    return state.mainWaitingEnabled;
  },
  getViewEditStatus: (state: any) => (view: string) => {
    return state[view] !== undefined ? state[view].viewEdited : false;
  },
  getShowWarningWS: (state: NavigationState) => () => {
    return state.showWarningWithoutSaved;
  },
  getcurrentView: (state: NavigationState) => () => {
    return state.viewToCheck;
  },
  getPathToGo: (state: NavigationState) => () => {
    return state.pathToGo;
  },

  getPostLoginPath: (state: NavigationState) => () => {
    return state.postLoginPath;
  },
  getSideMenuState: (state: NavigationState) => () => {
    return state.sideMenuCollapsed;
  },
};
