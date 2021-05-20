import { ACT, MUT } from '@COMMONS/constants';
import { Action, ActionContext } from 'vuex';
import { SessionState, UserSesion } from './store-session';
import cookie from '@COMMONS/utils/main/cookie';
import { resetPermisionResources } from '@COMMONS/utils/main/permission';

const actions: { [mutation in ACT.Session]: Action<SessionState, any> } = {
  [ACT.Session.LogIn]: async ({ commit, dispatch }, userSessionObject: UserSesion) => {
    localStorage.UserNameToken = userSessionObject.Token;
    sessionStorage.UserNameToken = userSessionObject.Token;

    if (
      (localStorage.ActiveSessions === undefined && localStorage.ActiveSessions === 'undefined') ||
      localStorage.ActiveSessions == 0
    ) {
      localStorage.ActiveSessions = 1;
    } else {
      localStorage.ActiveSessions++;
    }

    var expirationSessionDate = new Date().getTime() + 24 * 60 * 60 * 1000;
    cookie.set('UserNameToken', userSessionObject.Token, expirationSessionDate.toString());
    cookie.set('UserNameToken_expires', expirationSessionDate.toString(), expirationSessionDate.toString());
    resetPermisionResources();
    return commit(MUT.Session.SET_SESSION, userSessionObject);
  },

  [ACT.Session.LogOut]: async ({ commit, dispatch }) => {
    localStorage.UserNameToken = undefined;
    sessionStorage.UserNameToken = undefined;

    if (
      localStorage.ActiveSessions !== undefined &&
      localStorage.ActiveSessions !== 'undefined' &&
      localStorage.ActiveSessions > 1
    ) {
      localStorage.ActiveSessions--;
    } else {
      localStorage.ActiveSessions = undefined;
    }

    cookie.set('UserNameToken', '', '0');
    cookie.set('UserNameToken_expires', '', '0');

    commit(MUT.Session.DELETE_SESSION);
    commit(MUT.RefProp.DELETE_ALL_STATE);
    return commit(MUT.Resource.DELETE_ALL_STATE);
  },
  [ACT.Session.SaveLogInInfo]: async ({ commit }, userSessionObject: any) => {
    localStorage.UserNameToken = userSessionObject.Token;
    sessionStorage.UserNameToken = userSessionObject.Token;
    localStorage.ActiveSessions = 0;
    await commit(MUT.Session.SET_SESSION, userSessionObject);
  },
};

export default actions;
