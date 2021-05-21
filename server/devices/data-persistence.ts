import { Bip, SessionData, DeviceType } from './device-model';
import fs from 'fs';

let CurrentSessionData:SessionData;

const saveBip = (sessionId:string,bip:Bip) => {
    if (!CurrentSessionData){
        CurrentSessionData = {
            id: sessionId,
            devices : {},
            tittle: 'Test Session',
            description: 'Base Session for development'
        };
    }
    if (!CurrentSessionData.devices[bip.deviceId]){
        CurrentSessionData.devices[bip.deviceId] = {
            bips:[],
            id:bip.deviceId,
            type: DeviceType.HQ
        }
    }
    CurrentSessionData.devices[bip.deviceId].bips.push(bip);
    persistSession(CurrentSessionData);
};

const basePath = __dirname + '\\..\\..\\data-base\\';

const persistSession = (sessionData:SessionData) => {
    fs.writeFile(basePath + sessionData.id + ".json",JSON.stringify(sessionData),(result:any) => {/*console.log(result)*/});
}

const getCurrentSession = () => {
    return CurrentSessionData;
};

export {  saveBip }