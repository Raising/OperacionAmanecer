import { ACT, MUT } from '@FLOWEDIT/constants';
import { Action } from 'vuex';
import { FlowEditState } from './store-flow-edit';
import { FlowGraph, NodeDescription, Vector2, FlowNode, NodeType } from '@MODELS/flow-graph';
import Vue from 'vue';
import { ENUM } from '@/commons/constants';
import Resource from '@/commons/utils/conectivity/resource';

const actions: { [key in ACT.FlowEdit]: Action<FlowEditState, any> } = {
  [ACT.FlowEdit.initFlowGraphResource]: async (context) => {
    let newFlowGraphResource = new Resource(
      {
        type: ENUM.CommonsResource.FLOW_GRAPH,
        refProps: [
          { property: 'flowId', value: '' },
          { property: 'gameId', value: '' },
        ],
        preventInitialLoad: true,
        mode: ENUM.ResourceMode.ENTITY,
      },
      { $store: context },
    );
    newFlowGraphResource.setOnFetch(() => {
      context.commit(MUT.FlowEdit.LOAD_FLOW_GRAPH, { flowGraph: {}.$singleDeepMerge(newFlowGraphResource.content()) });
      context.commit(MUT.FlowEdit.SET_CURRENT_FLOW_GRAPH, { flowGraphId: newFlowGraphResource.refProps.flowId.get() });
    });
    context.commit(MUT.FlowEdit.SET_FLOW_GRAPH_RESOURCE, { res: newFlowGraphResource });
  },
  [ACT.FlowEdit.updateFlowGraph]: async ({ state, getters }, param: {}) => {
    state.flowGraphResource.updateEntity({ data: getters.getFlowGraph(), merge: false });
  },

  [ACT.FlowEdit.setCurrentFlowGraph]: async ({ commit, state }, param: { gameId: string; flowId: string }) => {
    state.flowGraphResource.refProps.flowId.set(param.flowId);
    state.flowGraphResource.refProps.gameId.set(param.gameId);
  },

  [ACT.FlowEdit.setNodePosition]: async (
    { commit, getters },
    param: { type: NodeType; nodeId: string; x: number; y: number },
  ) => {
    let node: NodeDescription = getters[`get${param.type}Node`](param.nodeId);
    node.position.x = param.x;
    node.position.y = param.y;
    return commit(MUT.FlowEdit.UPDATE_NODE, { type: param.type, node });
  },
  [ACT.FlowEdit.createDataNode]: async ({ commit }, param: { flowGraph: FlowGraph }) => {
    throw 'not implemented';
  },
  [ACT.FlowEdit.setDataNodeInputPortConnection]: async (
    { commit, getters },
    param: { nodeId: string; targetNodeId: string },
  ) => {
    throw 'not implemented';
  },
  [ACT.FlowEdit.setDataNodeName]: async ({ commit }, param: { flowGraph: FlowGraph }) => {
    throw 'not implemented';
  },

  [ACT.FlowEdit.insertFlowNode]: async (
    { commit, getters },
    param: { nodeProto: string; custom: boolean; position: Vector2 },
  ) => {
    let id = getFirstUnusedId(
      getters.getFlowNodes().map((el: NodeDescription) => el.id),
      param.nodeProto,
    );
    let node: FlowNode = { ...param, id, inputConection: {}, continueFlowId: undefined };

    return commit(MUT.FlowEdit.INSERT_NODE, { type: NodeType.Flow, node });
  },
  [ACT.FlowEdit.createFlowNode]: async (
    { commit, getters },
    param: { nodeProto: string; custom: boolean; position: Vector2 },
  ) => {
    throw 'not implemented';
  },
  [ACT.FlowEdit.setFlowNodeInputPortConnection]: async ({ commit }, param: { flowGraph: FlowGraph }) => {
    throw 'not implemented';
  },
  [ACT.FlowEdit.setFlowNodeName]: async ({ commit }, param: { flowGraph: FlowGraph }) => {
    throw 'not implemented';
  },
  [ACT.FlowEdit.setFlowNodeContinuePortConnection]: async (
    { commit, getters },
    param: { nodeId: string; targetNodeId: string },
  ) => {
    let node: FlowNode = getters.getFlowNode(param.nodeId);
    Vue.set(node, 'continueFlowId', param.targetNodeId);
    return commit(MUT.FlowEdit.UPDATE_NODE, { type: NodeType.Flow, node });
  },

  [ACT.FlowEdit.addGraphInput]: async ({ commit }, param: { flowGraph: FlowGraph }) => {
    throw 'not implemented';
  },
  [ACT.FlowEdit.updateGraphInput]: async ({ commit }, param: { flowGraph: FlowGraph }) => {
    throw 'not implemented';
  },
};

export default actions;

const getFirstUnusedId = (collection: string[], base: string): string => {
  let id = base;
  let idNumber = 0;
  let assigned = false;
  while (!assigned) {
    id = base + '-' + idNumber;
    if (collection.indexOf(id) === -1) {
      assigned = true;
    } else {
      idNumber++;
    }
  }
  return id;
};
