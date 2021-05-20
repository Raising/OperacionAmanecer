import Vue from 'vue';
import { MUT } from '@HQ/constants';
import { FieldEntitiesState} from './store-field-entities';
import { Mutation } from 'vuex';

const mutations: { [mutation in MUT.FieldEntities]: Mutation<FieldEntitiesState> } = {
  // [MUT.DynamicDashboard.ADD_DYNAMIC_COMPONENT]: (state, params: { component: DynamicComponent }) => {
  //   if (params.component.id === undefined) {
  //     params.component.id = params.component.$id;
  //   }
  //   Vue.set(state.items, params.component.id, params.component);
  // },
  // [MUT.DynamicDashboard.REMOVE_DYNAMIC_COMPONENT]: (state, params: { id: string }) => {
  //   delete state.items[params.id];
  // },
  // [MUT.DynamicDashboard.MODIFY_DYNAMIC_COMPONENT]: (state, params: { component: DynamicComponent }) => {
  //   Vue.set(state.items, params.component.id, params.component);
  // },
};

export default mutations;
