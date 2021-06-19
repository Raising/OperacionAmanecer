//@ts-ignore
import SerialPort from 'serialport';
//@ts-ignore
import Readline from '@serialport/parser-readline';
import { StartMockDevices } from './console';
import { saveBip } from './data-persistence';
import { broadcastBip } from './bip-report';
import { Bip } from './device-model';


const InitSerialPortListening = () =>  {

        SerialPort.list().then((ports: any[]) => {
            if (ports.length < 1) {
                console.error("No serial port detected");
                StartMockDevices();
        }
        
        ports.forEach((portInfo) => {
            let port = new SerialPort(portInfo.path, {
                baudRate: 115200
            })
            
            const parser = port.pipe(new Readline({}))
            parser.on('data', (data: string) => {
                let bip = parseBip(data)
                if (bip.deviceId.length > 4 || !bip.coord.x || !bip.coord.y) {
                    console.error("Error Package", data) 
                    return
                }
                saveBip(bip);
                broadcastBip(bip);
            })
        });
    });
}


const BipPropTranslation = {
    lo: "longitude",
    la: "latitude",
    da: "data",
    re: "repetidores",
  }
  
  //A01/lo:-3.12345/la:36.12345/da:0000/re:0000/@-34
  const parseBip = (data: string): Bip => {
    let splitedData = data.split('/');
  
    let buffer = splitedData.reduce((acc: any, el: string) => {
      let keyValue = el.split(":");
      if (keyValue.length > 1) {
        //@ts-ignore
        acc[BipPropTranslation[keyValue[0]]] = keyValue[1];
      };
      return acc;
    },
      {});
  
    let bip: Bip = {
      deviceId: splitedData[0],
      intensity: Number(splitedData[splitedData.length - 1].split('@')[1]),
      time: new Date().getTime(),
      coord: { x: Number(buffer.longitude), y: Number(buffer.latitude) },
      data: buffer.data
    }
    return bip;
  }
  

  export {InitSerialPortListening};