export enum MutationName {
  LOAD_FLOW_GRAPH = 'LOAD_FLOW_GRAPH',
  SET_CURRENT_FLOW_GRAPH = 'SET_CURRENT_FLOW_GRAPH',
  UPDATE_NODE = 'UPDATE_NODE',
  CREATE_NODE = 'CREATE_NODE',
  SET_FLOW_GRAPH_RESOURCE = 'SET_FLOW_GRAPH_RESOURCE',
  INSERT_NODE = 'INSERT_NODE',
}

export enum ActionName {
  setNodePosition = 'setNodePosition',
  createDataNode = 'createDataNode',
  setDataNodeInputPortConnection = 'setDataNodeInputPortConnection',
  setDataNodeName = 'setDataNodeName',
  createFlowNode = 'createFlowNode',
  setFlowNodeInputPortConnection = 'setFlowNodeInputPortConnection',
  setFlowNodeName = 'setFlowNodeName',
  setFlowNodeContinuePortConnection = 'setFlowNodeContinuePortConnection',
  addGraphInput = 'addGraphInput',
  updateGraphInput = 'updateGraphInput',
  initFlowGraphResource = 'initFlowGraphResource',
  setCurrentFlowGraph = 'setCurrentFlowGraph',
  updateFlowGraph = 'updateFlowGraph',
  insertFlowNode = 'insertFlowNode',
}
