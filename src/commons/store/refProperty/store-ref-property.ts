import actions from './act-ref-property';
import getters from './get-ref-property';
import mutations from './mut-ref-property';

export type RefPropState = any;

export default {
  state: (): RefPropState => ({}),
  mutations,
  actions,
  getters,
};
