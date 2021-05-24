import { DevicesState } from './store-devices';
import { Devices } from '../hub-action';

export default {
  getDevicesCurrentPosition: (state:DevicesState) => () => {
    let devicesPositions:any[] = [];
    for (let key in state.sessionData.devices){
      let lastBip = state.sessionData.devices[key].bips[state.sessionData.devices[key].bips.length-1];
      devicesPositions.push({
        deviceId : key,
        coords:{
          x: lastBip.coord.x.$lerp(state.mapInfo.areaRange.x[0],state.mapInfo.areaRange.x[1]) * 100,
          y: lastBip.coord.y.$lerp(state.mapInfo.areaRange.y[0],state.mapInfo.areaRange.y[1]) * 100
          ,
        },
        time:lastBip.time
      })
    }

    return devicesPositions;
  },

  getMapSize: (state:DevicesState) => () => {
    let middleLong =(state.mapInfo.areaRange.x[0] + state.mapInfo.areaRange.x[1]) /2 
    let middleLat = (state.mapInfo.areaRange.y[0] + state.mapInfo.areaRange.y[1]) /2
    let mapWidth = geoDistance(middleLat,state.mapInfo.areaRange.x[0],middleLat,state.mapInfo.areaRange.x[1]);
    let mapHeight = geoDistance(state.mapInfo.areaRange.y[0],middleLong,state.mapInfo.areaRange.y[1],middleLong);
    return {
      width:Math.floor(mapWidth*10)/10 + "px",
      height:Math.floor(mapHeight*10)/10 + "px",
      "margin-left":Math.floor(mapWidth*10)/-20 + "px",
      "margin-top":Math.floor(mapHeight*10)/-20 + "px"
    };
  },
  getMapPosition: (state:DevicesState) => () => {
    let middleLong =(state.mapInfo.areaRange.x[0] + state.mapInfo.areaRange.x[1]) /2 
    let middleLat = (state.mapInfo.areaRange.y[0] + state.mapInfo.areaRange.y[1]) /2
    let mapWidth = geoDistance(middleLat,state.mapInfo.areaRange.x[0],middleLat,state.mapInfo.areaRange.x[1]);
    let mapHeight = geoDistance(state.mapInfo.areaRange.y[0],middleLong,state.mapInfo.areaRange.y[1],middleLong);
    return {
      transform: `translateZ(${state.mapInfo.zoom}px) rotateX(${state.mapInfo.rotation.x}deg) rotateZ(${state.mapInfo.rotation.z}deg)`,
      "margin-left":state.mapInfo.position.left + "px",
      "margin-top":state.mapInfo.position.top + "px"
    };
  },
  
  getMapPerspective: (state:DevicesState) => () => {
    return {
      rotation: state.mapInfo.rotation,
      position: state.mapInfo.position,
      zoom: state.mapInfo.zoom,
      
    }
  }
};


function geoDistance(lat1:number, lon1:number, lat2:number, lon2:number){  // generally used geo measurement function
  var R = 6378.137; // Radius of earth in KM
  var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
  var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
  Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d * 1000; // meters
}