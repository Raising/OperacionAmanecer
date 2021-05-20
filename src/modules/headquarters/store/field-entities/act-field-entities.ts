import { FieldEntitiesState} from './store-field-entities';

import { ACT, MUT } from '@HQ/constants';
import { Action } from 'vuex';

const actions: { [key in ACT.FieldEntities]: Action<FieldEntitiesState, any> } = {
  // [ACT.DynamicDashboard.addDynamicComponent]: async (
  //   { commit },
  //   params: { position: { x: number; y: number }; schema: DynamicComponentSchema },
  // ) => {
  //   let component = { position: params.position, ...params.schema };
  //   return commit(MUT.DynamicDashboard.ADD_DYNAMIC_COMPONENT, { component });
  // },
  // [ACT.DynamicDashboard.removeDynamicComponent]: async ({ commit }, params: { id: string }) => {
  //   return commit(MUT.DynamicDashboard.REMOVE_DYNAMIC_COMPONENT, params);
  // },
  // [ACT.DynamicDashboard.modifyDynamicComponent]: async (context, params: { component: DynamicComponent }) => {
  //   if (context.getters.canPlaceDynamicComponentInPosition(params.component))
  //     return context.commit(MUT.DynamicDashboard.MODIFY_DYNAMIC_COMPONENT, params);
  // },
};

export default actions;
