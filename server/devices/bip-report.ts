//@ts-ignore
import WebSocket from 'ws';
import { Bip } from './device-model';

let sockets: WebSocket.socket[] = [];



const server = new WebSocket.Server({
    port:8082
});

console.info("WebSocket server listening at port: " + 8082)

server.on('connection', function(socket:any) {
    console.log('Client Conected')
sockets.push(socket);

// When you receive a message, send that message to every socket.
socket.on('message', function(msg:any) {
    sockets.forEach((s:any) => s.send(msg));
});

// When a socket closes, or disconnects, remove it from the array.
socket.on('close', function() {
    sockets = sockets.filter((s:any) => s !== socket);
});
});
  
const broadcastBip = (bip:Bip) => {
    sockets.forEach((s:any) => s.send(JSON.stringify(bip)));
}


export {broadcastBip};
