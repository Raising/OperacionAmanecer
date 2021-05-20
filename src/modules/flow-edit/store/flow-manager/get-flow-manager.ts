import { FlowManagerState } from './store-flow-manager';
import { NodeDescription } from '@MODELS/flow-graph';
import { GetFlowNodeProtoype, GetDataNodeProtoype } from '@MODELS/node-prototypes';

export default {
  getGameGraphsTree: (state: FlowManagerState) => () => {
    if (state.gameGraphsResource.isReady()) {
      let elements = state.gameGraphsResource.content('children');
      return (elements || []).sort((a: any, b: any) => (b.path ? 1 : 0) - (a.path ? 1 : 0));
    }
    return [];
  },
  getDataNodePrototype: (state: FlowManagerState) => (node: NodeDescription) => {
    return GetDataNodeProtoype(node.nodeProto);
  },
  getFlowNodePrototype: (state: FlowManagerState) => (node: NodeDescription) => {
    if (!node.custom) {
      return GetFlowNodeProtoype(node.nodeProto);
    } else {
      let flowPath = node.nodeProto.split('.');
      flowPath.pop();
      let completeflowPath = flowPath.reduce(
        (path: string, subPath: string) => path + '.[[id||' + subPath + ']].children',
        'children',
      );

      return (state.gameGraphsResource.content(completeflowPath) || []).find((el: any) => el.id == node.nodeProto);
    }
  },
  getGameId: (state: FlowManagerState) => () => state.gameId,
};
