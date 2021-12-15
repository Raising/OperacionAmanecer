import { DevicesState } from './store-devices';
import { Devices } from '../hub-action';
import { Bip, DeviceData } from 'server/devices/device-model';

const searchTimedBip = (bips: Bip[], time: number): Bip => {
  let timedBip = bips[0];
  let lastValidBipIndex = 0;
  bips.some((bip, index) => {
    timedBip = bip;
    lastValidBipIndex = index;
    return bip.time > time;
  })

  if (lastValidBipIndex > 0 && bips[lastValidBipIndex]) {
    const timePercentile = time.$inverseLerp(bips[lastValidBipIndex - 1].time, bips[lastValidBipIndex].time);
   
    timedBip = {
      ...timedBip,
      coord: {
        x: timePercentile.$lerp(bips[lastValidBipIndex - 1].coord.x, bips[lastValidBipIndex].coord.x),
        y: timePercentile.$lerp(bips[lastValidBipIndex - 1].coord.y, bips[lastValidBipIndex].coord.y),
      },
      time
    }
  }

  return timedBip;

  // const bipsSize = bips.length;
  // if (bipsSize <= 1){
  //    return bips[0];
  // }
  // const pivot = Math.floor((bipsSize/2));
  // if (bips[pivot].time < time){
  //   return searchTimedBip(bips.slice(pivot),time);
  // }else{
  //   return searchTimedBip(bips.slice(0,pivot),time);
  // }

}

export default {
  getDevicesCurrentPosition: (state: DevicesState) => () => {
    const devicesPositions: any[] = [];
    for (const key in state.sessionData.devices) {
      let timedBip = state.sessionData.devices[key].bips[0];
      if (state.mapInfo.isLive) {
        timedBip = state.sessionData.devices[key].bips[state.sessionData.devices[key].bips.length - 1];
      } else {
        timedBip = searchTimedBip(state.sessionData.devices[key].bips, state.mapInfo.currentTime)

      }


      devicesPositions.push({
        deviceId: key,
        coords: {
          x: timedBip.coord.x.$inverseLerp(state.mapInfo.areaRange.x[0], state.mapInfo.areaRange.x[1]) * 100,
          y: timedBip.coord.y.$inverseLerp(state.mapInfo.areaRange.y[0], state.mapInfo.areaRange.y[1]) * 100,
        },
        time: timedBip.time,
      });
    }

    return devicesPositions;
  },
  getTimeRange: (state: DevicesState) => {
    return state.mapInfo.timeRange;
  },
  getCurrentTime: (state: DevicesState) => {
    return state.mapInfo.currentTime;
  },

  getTimeIsLive: (state: DevicesState) => {
    return state.mapInfo.isLive;
  },

  getMapSize: (state: DevicesState) => () => {
    const middleLong = (state.mapInfo.areaRange.x[0] + state.mapInfo.areaRange.x[1]) / 2;
    const middleLat = (state.mapInfo.areaRange.y[0] + state.mapInfo.areaRange.y[1]) / 2;
    const mapWidth = geoDistance(middleLat, state.mapInfo.areaRange.x[0], middleLat, state.mapInfo.areaRange.x[1]);
    const mapHeight = geoDistance(state.mapInfo.areaRange.y[0], middleLong, state.mapInfo.areaRange.y[1], middleLong);
    return {
      width: Math.floor(mapWidth * 10) / 10 + 'px',
      height: Math.floor(mapHeight * 10) / 10 + 'px',
      'margin-left': Math.floor(mapWidth * 10) / -20 + state.mapInfo.position.left + 'px',
      'margin-top': Math.floor(mapHeight * 10) / -20 + state.mapInfo.position.top + 'px',
    };
  },
  getMapPerspectiveStyle: (state: DevicesState) => () => {
    return {
      transform: `translateZ(${state.mapInfo.zoom}px) rotateX(${state.mapInfo.rotation.x}deg) rotateZ(${state.mapInfo.rotation.z}deg)`,
    };
  },
  getReverseMapPerspectiveStyle: (state: DevicesState) => () => {
    const xAxisScaleProportion = Math.abs(Math.cos(state.mapInfo.rotation.z / 180 * Math.PI));
    const yAxisScaleProportion = Math.abs(Math.sin(state.mapInfo.rotation.z / 180 * Math.PI));
    const scaleAdjustement = 1 / Math.cos((state.mapInfo.rotation.x) / 180 * Math.PI) - 1;
    return {
      transform: `scaleY(${1 + (scaleAdjustement * xAxisScaleProportion)}) scaleX(${1 + (scaleAdjustement * (yAxisScaleProportion))}) rotateZ(${-1 * state.mapInfo.rotation.z}deg)`,
    };
  },

  getMapPerspective: (state: DevicesState) => () => {
    return {
      rotation: state.mapInfo.rotation,
      position: state.mapInfo.position,
      zoom: state.mapInfo.zoom,
    };
  },
};

function geoDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  // generally used geo measurement function
  const R = 6378.137; // Radius of earth in KM
  const dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180;
  const dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d * 1000; // meters
}
