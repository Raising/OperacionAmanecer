import { saveBip } from "./data-persistence";
import { broadcastBip } from './bip-report';
import { Bip } from './device-model';


const MockDevices = () => {
    const moveStep = 0.00015;
    let devices: { [name: string]: any } = {
      M01: { "coord": { "y": 36.9038478, "x": -3.55469184 }, "deviceId": "M01", "time": 0, "intensity": -34, direction: [-moveStep / 2, -moveStep / 2] },
      M02: { "coord": { "y": 36.9038478, "x": -3.55489184 }, "deviceId": "M02", "time": 0, "intensity": -34, direction: [-moveStep / 2, -moveStep / 2] },
      M03: { "coord": { "y": 36.9038478, "x": -3.5559184 }, "deviceId": "M03", "time": 0, "intensity": -34, direction: [-moveStep / 2, -moveStep / 2] },
      K01: { "coord": { "y": 36.8981569, "x": -3.5625983 }, "deviceId": "K01", "time": 0, "intensity": -34, direction: [moveStep / 2, moveStep / 2] },
      K02: { "coord": { "y": 36.8981569, "x": -3.5624983 }, "deviceId": "K02", "time": 0, "intensity": -34, direction: [moveStep / 2, moveStep / 2] },
      K03: { "coord": { "y": 36.8981569, "x": -3.5623983 }, "deviceId": "K03", "time": 0, "intensity": -34, direction: [moveStep / 2, moveStep / 2] },
    }
    setInterval(() => {
      for (let deviceId in devices) {
        if (Math.random() > 0.8) {
          devices[deviceId].direction = devices[deviceId].direction.map((speed: number) => (speed + ((Math.random() - 0.5) * moveStep)) / 2);
        }
        devices[deviceId].coord.x += devices[deviceId].direction[0];//ROUND
        devices[deviceId].coord.y += devices[deviceId].direction[1];//ROUND
        devices[deviceId].time = new Date().getTime();
        let bip: Bip = {
          coord: devices[deviceId].coord,
          time: devices[deviceId].time,
          deviceId,
          intensity: -34,
        }
        saveBip( bip);
        broadcastBip(bip);
      }
    }, 2000)
  
  }

  export {MockDevices};