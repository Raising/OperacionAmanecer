import Vue from 'vue';
import { MUT } from '@HQ/constants';
import { DevicesState } from './store-devices';
import { Mutation } from 'vuex';
import { Bip, DeviceType } from '@HQ/device-model';

const mutations: { [mutation in MUT.Devices]: Mutation<DevicesState> } = {
  [MUT.Devices.PUSH_BIP]: (state, params: { bip: Bip }) => {
    if (state.sessionData.devices[params.bip.deviceId] === undefined) {
      
      Vue.set(state.sessionData.devices, params.bip.deviceId, {
        id: params.bip.deviceId,
        type: DeviceType.Leutenient,
        bips: [],
      });
    }

    state.sessionData.devices[params.bip.deviceId].bips.push(params.bip);
  },

  [MUT.Devices.SET_MAP_POSITION]: (state, params: { top: number,left:number }) => {
    state.mapInfo.position.left = params.left;
    state.mapInfo.position.top = params.top;
  },
  [MUT.Devices.SET_MAP_ROTATION]: (state, params: { x: number,z:number }) => {
    state.mapInfo.rotation.x = params.x;
    state.mapInfo.rotation.z = params.z;
  },
  [MUT.Devices.SET_MAP_ZOOM]: (state, params: { zoom:number }) => {
    state.mapInfo.zoom = params.zoom;
  },
  // [MUT.Devices.SET_MAP_RANGE]: (state, params: { x: [number,number],y:[number,number] }) => {
  //   if (state.sessionData.devices[params.bip.deviceId] === undefined) {
      
  //     Vue.set(state.sessionData.devices, params.bip.deviceId, {
  //       id: params.bip.deviceId,
  //       type: DeviceType.Leutenient,
  //       bips: [],
  //     });
  //   }

  //   state.sessionData.devices[params.bip.deviceId].bips.push(params.bip);

  // },

  // [MUT.DynamicDashboard.REMOVE_DYNAMIC_COMPONENT]: (state, params: { id: string }) => {
  //   delete state.items[params.id];
  // },
  // [MUT.DynamicDashboard.MODIFY_DYNAMIC_COMPONENT]: (state, params: { component: DynamicComponent }) => {
  //   Vue.set(state.items, params.component.id, params.component);
  // },
};

export default mutations;
