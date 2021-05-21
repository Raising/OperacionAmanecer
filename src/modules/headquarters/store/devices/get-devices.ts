import { DevicesState } from './store-devices';

export default {
  getDevicesCurrentPosition: (state:DevicesState) => () => {
    let devicesPositions:any[] = [];
    for (let key in state.sessionData.devices){
      let lastBip = state.sessionData.devices[key].bips[state.sessionData.devices[key].bips.length-1];
      devicesPositions.push({
        deviceId : key,
        coords:{
          x: lastBip.coord.x.$lerp(state.areaRange.x[0],state.areaRange.x[1]) * 100,
          y: lastBip.coord.y.$lerp(state.areaRange.y[0],state.areaRange.y[1]) * 100,
        },
        time:lastBip.time
      })
    }

    return devicesPositions;
  },
  // getDashboardDimensions: (state: DashboardState) => () => {
  //   return state.dimensions;
  // },
};


