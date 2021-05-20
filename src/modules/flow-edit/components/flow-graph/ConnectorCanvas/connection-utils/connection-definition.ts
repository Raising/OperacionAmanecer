import { VueView } from '@/commons/utils/factory/factory';
import { FlowNode, Vector2, NodeDescription, Port } from '@MODELS/flow-graph';
import { NodePrototype, DataNodePrototype } from '@MODELS/node-prototypes';

export interface ConnectionMeta {
  nodeId: string;
  [name: string]: any;
}

export interface Connection {
  origin: Vector2;
  destiny: Vector2;
  meta: ConnectionMeta;
  connected: boolean;
}

const flowConnections = function(view: VueView): Connection[] {
  let flowConnections: Connection[] = view.flowNodes.map((node: FlowNode) => {
    let dimensions = nodeDimensions(view, node);
    let destiny;
    let origin = {
      x: node.position.x + dimensions.x / 2,
      y: node.position.y + dimensions.y,
    };
    if (node.continueFlowId === undefined) {
      destiny = origin;
    } else {
      let target = view.flowNodes.find((targetNode: FlowNode) => targetNode.id === node.continueFlowId);
      destiny = {
        x: target.position.x + dimensions.x / 2,
        y: target.position.y,
      };
    }
    return {
      origin,
      destiny,
      meta: { nodeId: node.id },
      connected: node.continueFlowId !== undefined,
    };
  });
  return flowConnections;
};
const dataConnections = function(view: VueView): Connection[] {
  let dataConnections: Connection[] = [];
  let flowConnectors = view.dataNodes.map((node: FlowNode) => {
    let nodePrototype: DataNodePrototype = view.$store.getters.getDataNodePrototype(node);
    Object.values(nodePrototype.inputs).forEach((port: Port, index: number) => {
      let destiny, origin: Vector2;
      origin = { x: node.position.x, y: node.position.y + headerSize + rowSize * (index + 1) - rowSize / 2 };
      destiny = origin;
      dataConnections.push({
        origin,
        destiny,
        meta: { nodeId: node.id, port },
        connected: false,
      });
    });
  });

  return dataConnections;
};

const headerSize = 29;
const rowSize = 21;

const nodeDimensions = (view: VueView, node: NodeDescription, rows?: number) => {
  let slots = 0;
  if (rows !== undefined) {
    slots = rows;
  } else {
    let proto: NodePrototype = view.$store.getters.getFlowNodePrototype(node);
    if (proto === undefined) {
      debugger;
    }
    slots = Object.values(proto.inputs).length;
  }

  return {
    x: 150,
    y: headerSize + rowSize * slots,
  };
};
nodeDimensions.headerSize = headerSize;
nodeDimensions.rowSize = rowSize;

export { nodeDimensions, flowConnections, dataConnections };
