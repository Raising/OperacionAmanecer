//Importación de las acciones, getters y mutaciones
import actions from './act-navigation';
import getters from './get-navigation';
import mutations from './mut-navigation';
import { defaultPath } from '@SOLUTION/definitions/navigation';

export interface NavigationState {
  mainWaitingEnabled: boolean;
  showWarningWithoutSaved: boolean;
  pathToGo: string;
  viewToCheck: string;
  postLoginPath: string;
  sideMenuCollapsed: boolean;
}
export interface ViewEdited {
  viewName: string;
  viewEdited: boolean;
}

export default {
  state: (): NavigationState => ({
    mainWaitingEnabled: false,
    showWarningWithoutSaved: false,
    pathToGo: '',
    viewToCheck: '',
    postLoginPath: defaultPath,
    sideMenuCollapsed: false,
  }),
  mutations,
  actions,
  getters,
};
