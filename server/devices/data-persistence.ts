import { Bip, SessionData, DeviceType } from './device-model';
import fs from 'fs';

let CurrentSessionData:SessionData;
const basePath = __dirname + '\\..\\..\\data-base\\';


const saveBip = (bip:Bip) => {
    if (!CurrentSessionData ) return;
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

const initSession = (name:string) => {
    fs.readFile(basePath + name + ".json",'utf8', function(err, data){
        if(data){
            CurrentSessionData = JSON.parse(data);
            console.log("Continue with old session")
        }else{
            CurrentSessionData = {
                id: name,
                date: new Date().toDateString(),
                devices : {},
                tittle: 'Test Session',
                description: 'Base Session for development'
            };
            console.log("created a new session")
        }
    });
};

const persistSession = (sessionData:SessionData) => {
    fs.writeFile(basePath + sessionData.id + ".json",JSON.stringify(sessionData),(result:any) => {/*console.log(result)*/});
}

const getCurrentSession = () => {
    return CurrentSessionData;
};

export {  saveBip ,initSession,getCurrentSession}