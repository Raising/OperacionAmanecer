import express from "express";
import fs from 'fs';

import { rejects } from 'assert';
import { stringify } from 'querystring';
import { getCurrentSession } from '../devices/data-persistence';



// const recursiveGraphDirectorySearch = async (directory:string,basePath:string,name:string):Promise<GraphDirectory> => {
//     let path = basePath !== "" ?basePath + "." + name : name;
//     let DPromise:Promise<GraphDirectory> = new Promise((resolve,reject) => {
//         let gdir:GraphDirectory = {
//             path,
//             name,
//             id: name,
//             children:[]
//         };
//         fs.readdir(directory, (err, files) => {
//             if (err) {throw err;}
            
//             Promise.all(files.map(fileName => {
//                 if (fileName.endsWith(".json")){
//                     return getFlowGraphFromDB(directory + "/" + fileName);
//                 }else{
//                     return recursiveGraphDirectorySearch(directory + "/" + fileName,path,fileName);
//                 }
//             } ))
//             .then( results => {
//                 results.forEach( (result:any) => { gdir.children.push(result);  });
//                 resolve(gdir);
//             })
//         });
        
//     });
//     return await DPromise;
// }

const sessionServices = {
    activeGames : [],
    // getAll : (req:express.Request,res:express.Response) => async ({gameId}:{gameId:string}) => {
    //     let direction =  './data-base/' + gameId ; 
    //     res.send( await recursiveGraphDirectorySearch(direction,"",gameId));
    // },
    // get : (req:express.Request,res:express.Response) =>async ({sessionId}:{sessionId:string}) => {
    //     let direction =  './data-base/' + gameId + '/' +  flowId.split('.').join('/') + '.json';
    //     res.send(await getFlowGraphFromDB(direction) );
    // },
    getCurrent : (req:express.Request,res:express.Response) =>async () => {
       
        res.send(getCurrentSession() );
    },
    

    // create : (req:express.Request,res:express.Response) => (data:FlowGraph) => {
    //     console.log( data );
    //     res.send('create flow Node');
    // },
    // update : (req:express.Request,res:express.Response) => (id:string,data:FlowGraph) => {
    //     let direction =  './data-base/' + req.params.gameId + '/' +  req.params.flowId.split('.').join('/') + '.json';
        
    //     fs.writeFile(direction,JSON.stringify(data),() => {
    //         console.log( data );
    //         res.send(data);
    //      });
        
    // },
    // delete : (req:express.Request,res:express.Response) => (id:string) => {
    //     res.send('update flow Node');
    // },
    
};


export default (app:express.Application ) => {
    // app.get('/flow', (req,res) => sessionServices.getAll(req,res)());
    app.get('/session/current', (req,res) => sessionServices.getCurrent(req,res)());
    // app.get('/session/:sessionId', (req,res) => sessionServices.get(req,res)({sessionId:req.params.sessionId}));
    // app.get('/flowdefinition/game/:gameId/flow/:flowId', (req,res) => sessionServices.get(req,res)({gameId:req.params.gameId,flowId:req.params.flowId}));
    // app.post('/flow', (req,res) => sessionServices.create(req,res)(req.body));
    // app.put('/flowdefinition/game/:gameId/flow/:flowId', (req,res) => sessionServices.update(req,res)(req.params.flowId,req.body));
    // app.delete('/flow/:flowId', (req,res) => sessionServices.delete(req,res)(req.params.flowId));


}