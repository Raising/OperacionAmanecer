import actions from './act-resource';
import getters from './get-resource';
import mutations from './mut-resource';

export interface ResourceState {
  loaded: any;
  filters: any;
  props: any;
}

export default {
  state: (): ResourceState => ({
    loaded: {},
    filters: {},
    props: {},
  }),
  mutations,
  actions,
  getters,
};
