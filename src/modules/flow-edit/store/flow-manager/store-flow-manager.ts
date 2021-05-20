import actions from './act-flow-manager';
import getters from './get-flow-manager';
import mutations from './mut-flow-manager';
import { FlowGraph } from '@MODELS/flow-graph.ts';

import { ACT } from '@FLOWEDIT/constants';
import Resource from '@/commons/utils/conectivity/resource';

export interface FlowManagerState {
  gameGraphsResource: Resource;
  gameId: string;
}

export default {
  state: (): FlowManagerState => ({
    //@ts-ignore
    gameGraphsResource: undefined,
    gameId: 'strife',
  }),
  mutations,
  actions,
  getters,
  init: (context: any) => {
    context.dispatch(ACT.FlowManager.initGameGraphsResource);
  },
};
