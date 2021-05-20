import { ACT, MUT } from '@FLOWEDIT/constants';
import { Action } from 'vuex';
import { FlowManagerState } from './store-flow-manager';
import { FlowGraph, NodeDescription, Vector2, FlowNode } from '@MODELS/flow-graph';
import { Node } from 'webpack';
import Resource from '@/commons/utils/conectivity/resource';
import { ENUM } from '@/commons/constants';

const actions: { [key in ACT.FlowManager]: Action<FlowManagerState, any> } = {
  [ACT.FlowManager.initGameGraphsResource]: async (context) => {
    let newGameGraphsResource = new Resource(
      {
        type: ENUM.CommonsResource.FLOW_GRAPH,
        refProps: [{ property: 'gameId', value: context.getters.getGameId() }],
        mode: ENUM.ResourceMode.COLLECTION,
      },
      { $store: context },
    );
    context.commit(MUT.FlowManager.SET_GAME_GRAPHS_RESOURCE, { res: newGameGraphsResource });
  },
};

export default actions;
