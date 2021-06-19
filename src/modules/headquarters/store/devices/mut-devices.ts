import Vue from 'vue';
import { MUT } from '@HQ/constants';
import { DevicesState } from './store-devices';
import { Mutation } from 'vuex';
import { Bip, DeviceType } from '@HQ/device-model';
import { SessionData, DeviceData } from 'server/devices/device-model';

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
    SetTimeRangeFromBip(state,params.bip);
    
  },

  [MUT.Devices.SET_MAP_POSITION]: (state, params: { top: number; left: number }) => {
    state.mapInfo.position.left = params.left;
    state.mapInfo.position.top = params.top;
  },
  [MUT.Devices.SET_MAP_ROTATION]: (state, params: { x: number; z: number }) => {
    state.mapInfo.rotation.x = params.x;
    state.mapInfo.rotation.z = params.z;
  },
  [MUT.Devices.SET_MAP_ZOOM]: (state, params: { zoom: number }) => {
    state.mapInfo.zoom = params.zoom;
  },
  [MUT.Devices.SET_TIME_MODE]: (state, isLive: boolean) => {
    state.mapInfo.isLive = isLive;
  },
  [MUT.Devices.SET_CURRENT_TIME]: (state,time: number) => {
    state.mapInfo.currentTime = time;
  },
  [MUT.Devices.SET_CURRENT_SESSION_DATA]: (state,data:SessionData ) => {
    Vue.set(state,'sessionData',data);
    Object.values(state.sessionData.devices).forEach( (device:DeviceData) => {
      SetTimeRangeFromBip(state,device.bips[0]);
      SetTimeRangeFromBip(state,device.bips[device.bips.length-1]);
    });
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

const SetTimeRangeFromBip = (state:DevicesState,bip:Bip) => {
  let [startTime,endTime] = state.mapInfo.timeRange;
  if (startTime == 0){
    Vue.set(state.mapInfo,"timeRange",[bip.time,bip.time]);
  }else{
    Vue.set(state.mapInfo,"timeRange",[Math.min(startTime,bip.time),Math.max(endTime,bip.time)]);
  }
}

export default mutations;
