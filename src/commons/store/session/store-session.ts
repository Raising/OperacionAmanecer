import actions from './act-session';
import getters from './get-session';
import mutations from './mut-session';

export interface UserSesion {
  Token: string;
  UserName: string;
}

export interface SessionState {
  currentSession?: UserSesion;
}

export default {
  state: (): SessionState => ({}),
  mutations,
  actions,
  getters,
};
