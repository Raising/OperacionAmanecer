import { DevicesState } from './store-devices';

import { ACT, MUT } from '@HQ/constants';
import { Action } from 'vuex';
import { Bip } from '@HQ/device-model';
import { promises } from 'fs';
import { SessionData } from 'server/devices/device-model';

const actions: { [key in ACT.Devices]: Action<DevicesState, any> } = {
  [ACT.Devices.AddBip]: async ({ commit }, params: { bip: Bip }) => {
    return commit(MUT.Devices.PUSH_BIP, { bip: params.bip });
  },
  [ACT.Devices.SetMapPosition]: async ({ commit }, params: { left: number; top: number }) => {
    return commit(MUT.Devices.SET_MAP_POSITION, params);
  },
  [ACT.Devices.SetMapRotation]: async ({ commit }, params: { x: number; z: number }) => {
    return commit(MUT.Devices.SET_MAP_ROTATION, params);
  },
  [ACT.Devices.SetMapZoom]: async ({ commit }, params: { zoom: number }) => {
    return commit(MUT.Devices.SET_MAP_ZOOM, params);
  },
  [ACT.Devices.ToggleTimeMode]: async ({ commit,getters }, params: {}) => {
    return commit(MUT.Devices.SET_TIME_MODE, !(getters.getTimeIsLive));
  },

  [ACT.Devices.SetCurrentTime]: async ({ commit,getters }, params: {time:number}) => {
    return commit(MUT.Devices.SET_CURRENT_TIME, params.time);
  },

  [ACT.Devices.FetchCurrentSession]: async ({ commit,getters }, params: {}) => {
    
    fetch("http://localhost:8083/session/current",{})
    .then((response:any) => {
      return response.json();
    }) 
    .then((data:any) => {
      console.log(data)
      return commit(MUT.Devices.SET_CURRENT_SESSION_DATA, data);

    })

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
