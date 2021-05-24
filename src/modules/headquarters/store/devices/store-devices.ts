import actions from './act-devices';
import getters from './get-devices';
import mutations from './mut-devices';
import { SessionData } from '@HQ/device-model';


export interface deviceFilters {

}

export interface MapInfo{
  timeRange: [number,number],
  areaRange:{x:[number,number],y:[number,number]},

  currentTime: number,
  showTrail:boolean,
  filters:deviceFilters,
  rotation: {x:number,z:number},
  position: {left:number,top:number},
  zoom: number,
}

export interface DevicesState {
  sessionData : SessionData,
  mapInfo: MapInfo;
}


export default {
  state: (): DevicesState => ({
   sessionData : {
     id: '0',
     description: 'session description',
     devices: {},
     tittle: 'Session Tittle'
   },
   mapInfo:{
     timeRange: [0,0],
     currentTime: -1,
     showTrail: false,
     areaRange: {y:[36.89616,36.90616], x:[-3.563457,-3.55117]},
     rotation: {x:50,z:0},
     position: {left:0,top:0},
     zoom:0,
     filters: {
     
    }
   }
  }),
  mutations,
  actions,
  getters,
};