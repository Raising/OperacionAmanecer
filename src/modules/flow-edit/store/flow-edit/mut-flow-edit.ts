import Vue from 'vue';
import { MUT } from '@FLOWEDIT/constants';
import { FlowEditState } from './store-flow-edit';
import { Mutation } from 'vuex';
import { FlowGraph, NodeDescription, NodeType } from '@MODELS/flow-graph';
import Resource from '@/commons/utils/conectivity/resource';

const mutations: { [mutation in MUT.FlowEdit]: Mutation<FlowEditState> } = {
  [MUT.FlowEdit.LOAD_FLOW_GRAPH]: (state, params: { flowGraph: FlowGraph }) => {
    Vue.set(state.flowEditionWorkspace, params.flowGraph.id, params.flowGraph);
  },
  [MUT.FlowEdit.SET_CURRENT_FLOW_GRAPH]: (state, params: { flowGraphId: string }) => {
    Vue.set(state, 'currentFlowGraph', params.flowGraphId);
  },
  [MUT.FlowEdit.UPDATE_NODE]: (state, params: { type: NodeType; node: NodeDescription }) => {
    Vue.set(currentNodeCollection(state, params.type), params.node.id, params.node);
  },
  [MUT.FlowEdit.INSERT_NODE]: (state, params: { type: NodeType; node: NodeDescription }) => {
    Vue.set(currentNodeCollection(state, params.type), params.node.id, params.node);
  },
  [MUT.FlowEdit.CREATE_NODE]: (state, params: { type: NodeType; node: NodeDescription }) => {
    Vue.set(currentNodeCollection(state, params.type), params.node.id, params.node);
  },
  [MUT.FlowEdit.SET_FLOW_GRAPH_RESOURCE]: (state, params: { res: Resource }) => {
    Vue.set(state, 'flowGraphResource', params.res);
  },
};

export default mutations;

const currentNodeCollection = (state: FlowEditState, type: NodeType) => {
  //@ts-ignore
  return state.flowEditionWorkspace[state.currentFlowGraph][`${type.toLocaleLowerCase()}Nodes`];
};
