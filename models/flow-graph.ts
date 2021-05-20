export interface FlowGraph{
    name: string;
    id:string;
    inputs:{[name:string]:Port};
    dataNodes : {[name:string]:DataNode};
    flowNodes : {[name:string]:FlowNode};
};

export interface NodeDescription{
    id : string;
    nodeProto: string;
    custom?:boolean;
    position:Vector2;
    inputConection:{[inputId:string]:ConnectionPort};
}

export interface Vector2{
    x:number;
    y:number;
}

export enum DataMode{
    value = 'value',
    reference = 'reference'
}

export enum NodeType{
    Flow = 'Flow',
    Data = 'Data',
}

export interface ConnectionPort{
    nodeId:string;
    nodePort:string;
} 
export interface Variable{

}

export enum ValueType {
    string = 'string',
    int = 'int',
    collection = 'collection',
    flow = 'flow',
    number = "number",
    entityCollection = "entityCollection", 
}
export interface Port{
    id:string;
    name:string;
    valueType: ValueType;
    dataMode: DataMode;
}

export interface FlowNode extends NodeDescription{
    continueFlowId?:string; //flowNodeId
};

export interface DataNode extends NodeDescription{
  //  output:{[id:string]:ConnectionPort};
}

export interface GraphDirectory {
    name:string,
    path:string,
    id:string,
    children: (GraphDirectory | FlowGraph)[],
}