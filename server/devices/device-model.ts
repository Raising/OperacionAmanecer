interface Bip {
    deviceId: string;
    coord: { x: number; y: number };
    time: number;
    intensity: number;
    data?: any;
  }
  
  enum DeviceType {
    Medic,
    Leutenient,
    HQ,
    Static,
    HealingZone,
  }
  
  interface DeviceData {
    id: string;
    bips: Bip[];
    type: DeviceType;
  }
  
  interface SessionData {
    date: string;
    id: string;
    devices: { [deviceID: string]: DeviceData };
    tittle: string;
    description: string;
  }
  
  export { Bip, DeviceType, DeviceData, SessionData };
  