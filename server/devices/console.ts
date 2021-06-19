import { initSession } from "./data-persistence";
import { MockDevices } from './mock';


const consoleQueu:Function[] = [];


const NextInQueu = () => {
    consoleQueu.shift();
    if(consoleQueu[0]){
        consoleQueu[0]();
    }
}

const RequestSessionName = () => {
    initSession('marcus19');
    // consoleQueu.push(() => {

        
    //     const readline = require('readline').createInterface({
    //         input: process.stdin,
    //         output: process.stdout
    //     });
        
    //     setTimeout(() => {
    //         readline.question('Set Session Name: ', (name:string) => { 
    //         initSession(name);
    //         console.log("Session Started with sessionId = '" + name + "'");
    //         readline.close();
    //         NextInQueu();
    //     });
    // },10);
    // });

    // if (consoleQueu.length == 1){
    //     consoleQueu[0]();
      
    // }
}
  
const StartMockDevices = () => {
    consoleQueu.push(() => {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    setTimeout(() => {
        readline.question('Mock Devices= Y/N: ', (input:string) => { 
            if (input === 'Y' || input === 'y' ){
                MockDevices()
                console.log("Mocking Devices ");
            }
            readline.close();
        });
    },10);
  });

  if (consoleQueu.length == 1){
    consoleQueu[0]();
    
  }
}

export {RequestSessionName,StartMockDevices}