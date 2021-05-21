import actions from './act-devices';
import getters from './get-devices';
import mutations from './mut-devices';
import { SessionData } from '@HQ/device-model';

export interface DevicesState {
  sessionData : SessionData,
  dysplayedTime: number,
  timeRange: [number,number],
  areaRange:{x:[number,number],y:[number,number]}
}

export default {
  state: (): DevicesState => ({
   sessionData : {
     id: '0',
     description: 'session description',
     devices: {},
     tittle: 'Session Tittle'
   },
   timeRange: [0,0],
   dysplayedTime: new Date().getTime(),
   areaRange: {y:[36.89616,36.90616], x:[-3.563457,-3.55117]},
  }),
  mutations,
  actions,
  getters,
};
