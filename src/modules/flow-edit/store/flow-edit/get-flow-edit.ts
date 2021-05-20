import { FlowEditState } from './store-flow-edit';

export default {
  getFlowGraph: (state: FlowEditState) => () => state.flowEditionWorkspace[state.currentFlowGraph],
  getFlowNodes: (state: FlowEditState) => () =>
    Object.values(state.flowEditionWorkspace[state.currentFlowGraph].flowNodes),
  getDataNodes: (state: FlowEditState) => () =>
    Object.values(state.flowEditionWorkspace[state.currentFlowGraph].dataNodes),
  getFlowNode: (state: FlowEditState) => (nodeId: string) =>
    state.flowEditionWorkspace[state.currentFlowGraph].flowNodes[nodeId],
  getDataNode: (state: FlowEditState) => (nodeId: string) =>
    state.flowEditionWorkspace[state.currentFlowGraph].dataNodes[nodeId],
  getGraphInputs: (state: FlowEditState) => () =>
    Object.values(state.flowEditionWorkspace[state.currentFlowGraph].inputs),
  getGraphName: (state: FlowEditState) => () => Object.values(state.flowEditionWorkspace[state.currentFlowGraph].name),
  getCurrentFlowGraph: (state: FlowEditState) => () => state.currentFlowGraph,
};
