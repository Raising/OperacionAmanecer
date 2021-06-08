// import express from  'express';
// import cors from 'cors';

// import flowServices from './services/flow-graph.services';
// import gameServices from './services/game.services';
// import bodyParser from 'body-parser';
//@ts-ignore
import SerialPort from 'serialport';
//@ts-ignore
import Readline from '@serialport/parser-readline';
//@ts-ignore

import { Bip } from './devices/device-model';
import { saveBip } from './devices/data-persistence';
import { broadcastBip } from './devices/bip-report';
import { Color } from '@progress/kendo-drawing';


let sockets:any[] = [];
let SessionId = "Session_Test";// + new Date().toLocaleString().split(" ").join("_").split(":").join("-"); 

console.log("Server Started with sessionId = '" + SessionId + "'");
SerialPort.list().then((ports:any[])=>{
  if (ports.length < 1){
    console.error("No serial port detected");
    StartMockDevices();
  }
  
  ports.forEach((portInfo)=>{
    let port = new SerialPort(portInfo.path, {
      baudRate: 115200
    })

    const parser = port.pipe(new Readline({  }))
    parser.on('data', (data :string) => {
      let bip = parseBip(data)
      saveBip(SessionId,bip) ;
      broadcastBip(bip);
    })
      
  });
});


const BipPropTranslation = {
  lo: "longitude",
  la: "latitude",
  da: "data",
  re: "repetidores",
}

//A01/lo:-3.12345/la:36.12345/da:0000/re:0000/@-34
const parseBip = (data:string):Bip => { 
  let splitedData = data.split('/');
  
  let buffer = splitedData.reduce((acc:any,el:string) => {
    let keyValue = el.split(":");
    if(keyValue.length > 1){
      //@ts-ignore
      acc[BipPropTranslation[keyValue[0]]] = keyValue[1];
    };
    return acc;
  }, 
  {});
  
  let bip :Bip = {
    deviceId: splitedData[0],
    intensity: Number(splitedData[splitedData.length-1].split('@')[1]),
    time: new Date().getTime(),
    coord: { x : Number(buffer.longitude), y: Number(buffer.latitude) } ,
    data: buffer.data
  }
  return bip;
}


const StartMockDevices = () => {
  const moveStep = 0.00015;
  let devices:{[name:string]:any} = {
    M01:{"coord":{"y":36.9038478,"x":-3.55469184},"deviceId":"M01","time":0,"intensity":-34,direction:[-moveStep/2,-moveStep/2]},
    M02:{"coord":{"y":36.9038478,"x":-3.55489184},"deviceId":"M02","time":0,"intensity":-34,direction:[-moveStep/2,-moveStep/2]},
    M03:{"coord":{"y":36.9038478,"x":-3.5559184},"deviceId":"M03","time":0,"intensity":-34,direction:[-moveStep/2,-moveStep/2]},
    K01:{"coord":{"y":36.8981569,"x":-3.5625983},"deviceId":"K01","time":0,"intensity":-34,direction:[moveStep/2,moveStep/2]},
    K02:{"coord":{"y":36.8981569,"x":-3.5624983},"deviceId":"K02","time":0,"intensity":-34,direction:[moveStep/2,moveStep/2]},
    K03:{"coord":{"y":36.8981569,"x":-3.5623983},"deviceId":"K03","time":0,"intensity":-34,direction:[moveStep/2,moveStep/2]},
  }
  setInterval(() => {
    for (let deviceId in devices) {
      if (Math.random() > 0.8){
        devices[deviceId].direction = devices[deviceId].direction.map((speed:number) => (speed +((Math.random()-0.5) * moveStep))/2 ); 
      }
      devices[deviceId].coord.x += devices[deviceId].direction[0];//ROUND
      devices[deviceId].coord.y += devices[deviceId].direction[1];//ROUND
      devices[deviceId].time = new Date().getTime();
      let bip:Bip = {
        coord:devices[deviceId].coord,
        time:devices[deviceId].time,
        deviceId,
        intensity : -34,
      }
      saveBip(SessionId,bip) ;
      broadcastBip(bip);
    }
  }, 2000)

}

// const app = express();
// const PORT = 8000;

// app.use(bodyParser.json());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "*");

//   next();
// });

// flowServices(app);
// //gameServices(app);

// app.get('/', (req,res) => res.send('Express + TypeScript Server + acho First'));
// app.listen(PORT, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
// });