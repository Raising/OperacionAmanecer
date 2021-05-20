import { ACT, MUT } from '@COMMONS/constants';
import { Action } from 'vuex';
import { NavigationState, ViewEdited } from './store-navigation';

const actions: { [mutation in ACT.Navigation]: Action<NavigationState, any> } = {
  [ACT.Navigation.SetPostLoginNavigation]: async ({ commit }, { path }) => {
    return commit(MUT.Navigation.SET_POSTLOGIN_NAVIGATION, path);
  },
  [ACT.Navigation.ToggleWaiting]: async ({ commit, state }) => {
    return commit(MUT.Navigation.TOGGLE_WAITING);
  },
  [ACT.Navigation.WaitingOn]: async ({ commit, state }) => {
    return commit(MUT.Navigation.WAITING_ON);
  },
  [ACT.Navigation.WaitingOff]: async ({ commit, state }) => {
    return commit(MUT.Navigation.WAITING_OFF);
  },
  [ACT.Navigation.ViewEditedOn]: async ({ commit }, cuView: string) => {
    return commit(MUT.Navigation.EDITED_ON, cuView);
  },
  [ACT.Navigation.ViewEditedOff]: async ({ commit }, cuView: string) => {
    return commit(MUT.Navigation.EDITED_OFF, cuView);
  },
  [ACT.Navigation.Change_WarningWS]: async ({ commit }, cuView: NavigationState) => {
    return commit(MUT.Navigation.CHANGE_WARNINGWS, cuView);
  },
  [ACT.Navigation.InitEditStatusByView]: async ({ commit }, viewStatus: ViewEdited) => {
    return commit(MUT.Navigation.INIT_EDITSTATUSBYVIEW, viewStatus);
  },
};
export default actions;
