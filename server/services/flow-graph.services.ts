import express from "express";
import fs from 'fs';

import { FlowGraph, GraphDirectory } from "@MODELS/flow-graph";
import { rejects } from 'assert';
import { stringify } from 'querystring';


const getFlowGraphFromDB = async (direction:string) => {
    return new Promise((resolve,rejects) => {
        fs.readFile(direction, 'utf8', function (err, data) {
            console.log(direction);
            console.log(data);
            resolve(JSON.parse(data));
        });
    });
}
const recursiveGraphDirectorySearch = async (directory:string,basePath:string,name:string):Promise<GraphDirectory> => {
    let path = basePath !== "" ?basePath + "." + name : name;
    let DPromise:Promise<GraphDirectory> = new Promise((resolve,reject) => {
        let gdir:GraphDirectory = {
            path,
            name,
            id: name,
            children:[]
        };
        fs.readdir(directory, (err, files) => {
            if (err) {throw err;}
            
            Promise.all(files.map(fileName => {
                if (fileName.endsWith(".json")){
                    return getFlowGraphFromDB(directory + "/" + fileName);
                }else{
                    return recursiveGraphDirectorySearch(directory + "/" + fileName,path,fileName);
                }
            } ))
            .then( results => {
                results.forEach( (result:any) => { gdir.children.push(result);  });
                resolve(gdir);
            })
        });
        
    });
    return await DPromise;
}

const flowGraphServices = {
    activeGames : [],
    getAll : (req:express.Request,res:express.Response) => async ({gameId}:{gameId:string}) => {
        let direction =  './data-base/' + gameId ; 
        res.send( await recursiveGraphDirectorySearch(direction,"",gameId));
    },
    get : (req:express.Request,res:express.Response) =>async ({gameId,flowId}:{gameId:string,flowId:string}) => {
        let direction =  './data-base/' + gameId + '/' +  flowId.split('.').join('/') + '.json';
        res.send(await getFlowGraphFromDB(direction) );
    },
    create : (req:express.Request,res:express.Response) => (data:FlowGraph) => {
        console.log( data );
        res.send('create flow Node');
    },
    update : (req:express.Request,res:express.Response) => (id:string,data:FlowGraph) => {
        let direction =  './data-base/' + req.params.gameId + '/' +  req.params.flowId.split('.').join('/') + '.json';
        
        fs.writeFile(direction,JSON.stringify(data),() => {
            console.log( data );
            res.send(data);
         });
        
    },
    delete : (req:express.Request,res:express.Response) => (id:string) => {
        res.send('update flow Node');
    },
    
};


export default (app:express.Application ) => {
    // app.get('/flow', (req,res) => flowGraphServices.getAll(req,res)());
    app.get('/flowdefinition/game/:gameId', (req,res) => flowGraphServices.getAll(req,res)({gameId:req.params.gameId}));
    app.get('/flowdefinition/game/:gameId/flow/:flowId', (req,res) => flowGraphServices.get(req,res)({gameId:req.params.gameId,flowId:req.params.flowId}));
    app.post('/flow', (req,res) => flowGraphServices.create(req,res)(req.body));
    app.put('/flowdefinition/game/:gameId/flow/:flowId', (req,res) => flowGraphServices.update(req,res)(req.params.flowId,req.body));
    app.delete('/flow/:flowId', (req,res) => flowGraphServices.delete(req,res)(req.params.flowId));


}