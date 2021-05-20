import actions from './act-flow-edit';
import getters from './get-flow-edit';
import mutations from './mut-flow-edit';
import { FlowGraph } from '@MODELS/flow-graph.ts';
import { ACT } from '@FLOWEDIT/constants';
import Resource from '@/commons/utils/conectivity/resource';

export interface FlowEditState {
  flowEditionWorkspace: { [id: string]: FlowGraph };
  currentFlowGraph: string;
  flowGraphResource: Resource;
}

export default {
  state: (): FlowEditState => ({
    flowEditionWorkspace: {
      Unselected: {
        dataNodes: {},
        flowNodes: {},
        inputs: {},
        name: 'Unselected',
        id: 'Unselected',
      },
    },
    //@ts-ignore
    flowGraphResource: undefined,
    currentFlowGraph: 'Unselected',
  }),
  mutations,
  actions,
  getters,
  init: (context: any) => {
    context.dispatch(ACT.FlowEdit.initFlowGraphResource);
  },
};
