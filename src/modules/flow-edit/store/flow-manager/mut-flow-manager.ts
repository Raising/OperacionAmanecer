import Vue from 'vue';
import { MUT } from '@FLOWEDIT/constants';
import { FlowManagerState } from './store-flow-manager';
import { Mutation } from 'vuex';
import { FlowGraph, NodeDescription } from '@MODELS/flow-graph';
import Resource from '@/commons/utils/conectivity/resource';

const mutations: { [mutation in MUT.FlowManager]: Mutation<FlowManagerState> } = {
  [MUT.FlowManager.SET_GAME_GRAPHS_RESOURCE]: (state, params: { res: Resource }) => {
    Vue.set(state, 'gameGraphsResource', params.res);
  },
};

export default mutations;
