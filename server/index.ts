import express from  'express';
import cors from 'cors';

import flowServices from './services/flow-graph.services';
import gameServices from './services/game.services';
import bodyParser from 'body-parser';
//@ts-ignore
import SerialPort from 'serialport';
//@ts-ignore
import Readline from '@serialport/parser-readline';
//@ts-ignore
import WebSocket from 'ws';
import { Bip } from './operation/interfaces';
import { saveBip } from './operation/data-persistence';
import { broadcastBip } from './operation/bip-report';


let sockets:any[] = [];
let SessionId = "Session_Test";// + new Date().toLocaleString().split(" ").join("_").split(":").join("-"); 

console.log("Server Started with sessionId = '" + SessionId + "'");
SerialPort.list().then((ports:any[])=>{
  if (ports.length < 1){
    console.error("No serial port detected");
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


const parseBip = (data:string):Bip => { 
  let splitedData = data.split('/');
      let bip :Bip = {
        coord: {x : Number(splitedData[1]),y : Number(splitedData[2])},
        deviceId: splitedData[0],
        time: new Date().getTime(),
        intensity: Number(splitedData[3].split('@')[1])
  } 
  return bip;
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