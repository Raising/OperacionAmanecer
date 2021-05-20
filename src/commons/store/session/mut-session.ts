import Vue from 'vue';
import { MUT } from '@COMMONS/constants';
import { SessionState, UserSesion } from './store-session';
import { Mutation } from 'vuex';

const mutations: { [mutation in MUT.Session]: Mutation<SessionState> } = {
  [MUT.Session.SET_SESSION]: function(state, userSesion: UserSesion) {
    Vue.set(state, 'currentSession', userSesion);
    return state;
  },
  [MUT.Session.DELETE_SESSION]: function(state) {
    Vue.set(state, 'currentSession', {});
    return state;
  },
};

export default mutations;
