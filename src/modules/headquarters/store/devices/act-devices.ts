import { DevicesState } from './store-devices';

import { ACT, MUT } from '@HQ/constants';
import { Action } from 'vuex';
import { Bip } from '@HQ/device-model';

const actions: { [key in ACT.Devices]: Action<DevicesState, any> } = {
  [ACT.Devices.AddBip]: async ({ commit }, params: { bip: Bip }) => {
    return commit(MUT.Devices.PUSH_BIP, { bip: params.bip });
  },
  // [ACT.DynamicDashboard.removeDynamicComponent]: async ({ commit }, params: { id: string }) => {
  //   return commit(MUT.DynamicDashboard.REMOVE_DYNAMIC_COMPONENT, params);
  // },
  // [ACT.DynamicDashboard.modifyDynamicComponent]: async (context, params: { component: DynamicComponent }) => {
  //   if (context.getters.canPlaceDynamicComponentInPosition(params.component))
  //     return context.commit(MUT.DynamicDashboard.MODIFY_DYNAMIC_COMPONENT, params);
  // },
};

export default actions;
