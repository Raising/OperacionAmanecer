import Vue from 'vue';
import { ENUM, MUT } from '@COMMONS/constants';
import { NavigationState, ViewEdited } from './store-navigation';
import { Mutation } from 'vuex';

const mutations: { [mutation in MUT.Navigation]: any } = {
  [MUT.Navigation.TOGGLE_WAITING]: (state: NavigationState) => {
    state.mainWaitingEnabled = !state.mainWaitingEnabled;
  },
  [MUT.Navigation.WAITING_ON]: (state: NavigationState) => {
    state.mainWaitingEnabled = true;
  },
  [MUT.Navigation.WAITING_OFF]: (state: NavigationState) => {
    state.mainWaitingEnabled = false;
  },
  [MUT.Navigation.EDITED_ON]: (state: NavigationState, view: string) => {
    Vue.set(state, view, { viewEdited: true });
  },
  [MUT.Navigation.EDITED_OFF]: (state: NavigationState, view: string) => {
    Vue.set(state, view, { viewEdited: false });
  },
  [MUT.Navigation.CHANGE_WARNINGWS]: (state: NavigationState, EditedSatus: NavigationState) => {
    Vue.set(state, 'showWarningWithoutSaved', EditedSatus.showWarningWithoutSaved);
    Vue.set(state, 'pathToGo', EditedSatus.pathToGo);
    Vue.set(state, 'viewToCheck', EditedSatus.viewToCheck);
  },
  [MUT.Navigation.INIT_EDITSTATUSBYVIEW]: (state: NavigationState, valueViewDefinitions: ViewEdited) => {
    Vue.set(state, valueViewDefinitions.viewName, {
      viewEdited: valueViewDefinitions.viewEdited,
    });
  },
  [MUT.Navigation.SET_POSTLOGIN_NAVIGATION]: (state: NavigationState, path: string) => {
    state.postLoginPath = path;
  },
  [MUT.Navigation.SET_SIDE_MENU_STATE]: (state: NavigationState, newState: boolean) => {
    Vue.set(state, 'sideMenuCollapsed', newState);
  },
};

export default mutations;
