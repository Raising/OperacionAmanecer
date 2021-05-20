import { Port } from '@MODELS/flow-graph';

export interface NodePrototype {
  id: string;
  name: string;
  description?: string;
  inputs: {[portid: string]: Port };    
}

export interface FlowNodePrototype extends NodePrototype {
  execution: (inputs: {[inputId: string]: inputValue}) => void,
}

export type outputResult = any;
export type inputValue = any;

export interface DataNodePrototype extends NodePrototype {
  outputs: {[portid: string]: Port},
  execution: (inputs: {[inputId: string]: inputValue}) => {[outputId: string]: outputResult},
}


let LoadedFlowNodes: {[flowNodeId: string]: FlowNodePrototype} = {};
let LoadedDataNodes: {[flowNodeId: string]: DataNodePrototype} = {};

const NodeFactory: {
  flow: (config: FlowNodePrototype) => any;
  data: (config: DataNodePrototype) => any;
} = {
    flow:(config) => { LoadedFlowNodes[config.id] = config; },
    data:(config) => { LoadedDataNodes[config.id] = config; },
};
  
const GetFlowNodeProtoype : (id: string) => FlowNodePrototype = (nodeId) => {
    return LoadedFlowNodes[nodeId];
}
const GetDataNodeProtoype : (id: string) => DataNodePrototype = (nodeId) => {
    return LoadedDataNodes[nodeId];
}

export {GetDataNodeProtoype,GetFlowNodeProtoype};
export default NodeFactory;