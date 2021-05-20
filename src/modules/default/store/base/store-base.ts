import actions from './act-base';
import getters from './get-base';
import mutations from './mut-base';

export interface BaseState {
  var1: number;
}

export default {
  state: (): BaseState => ({
    var1: 5,
  }),
  mutations,
  actions,
  getters,
};
