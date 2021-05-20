export interface Bip{
    deviceId: string;
    coord: {x:number,y:number};
    time: number;
    intensity:number;
  }
  
export enum DeviceType{
    Medic,
    Leutenient,
    HQ,
    Static,
    HealingZone
}

export interface DeviceData{
    id:string;
    bips: Bip[]
    type: DeviceType;
}

export interface SessionData{
    id: string;
    devices:{[deviceID:string]:DeviceData};
    tittle: string;
    description: string;

}