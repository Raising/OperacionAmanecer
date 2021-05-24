import { DevicesState } from './store-devices';

import { ACT, MUT } from '@HQ/constants';
import { Action } from 'vuex';
import { Bip } from '@HQ/device-model';

const actions: { [key in ACT.Devices]: Action<DevicesState, any> } = {
  [ACT.Devices.AddBip]: async ({ commit }, params: { bip: Bip }) => {
    return commit(MUT.Devices.PUSH_BIP, { bip: params.bip });
  },
  [ACT.Devices.SetMapPosition]: async ({ commit }, params: { bip: Bip }) => {
    return commit(MUT.Devices.SET_MAP_POSITION, params);
  },
  [ACT.Devices.SetMapRotation]: async ({ commit }, params: { bip: Bip }) => {
    return commit(MUT.Devices.SET_MAP_ROTATION, params);
  },
  [ACT.Devices.SetMapZoom]: async ({ commit }, params: { zoom: number }) => {
    return commit(MUT.Devices.SET_MAP_ZOOM, params);
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
