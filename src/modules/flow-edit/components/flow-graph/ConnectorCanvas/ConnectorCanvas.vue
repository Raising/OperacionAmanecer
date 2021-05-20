<template>
  <div class="connector-canvas" :class="isMoving ? 'high-light' : ''">
    <!-- Connectors for flow -->
    <connector
      v-for="(connection, index) in flowConnections"
      :key="reseting ? 'flowConector-' + index : connection.nodeId"
      :connection="connection"
      :origin="connection.origin"
      :destiny="connection.destiny"
      :connected="connection.connected"
      @onStartMoving="setIsMoving"
      @onEndMoving="setFlowConnection"
      :vertical="true"
    />

    <!-- Connectors for data -->
    <connector
      v-for="(connection, index) in dataConnections"
      :key="reseting ? 'dataConector-' + index : connection.nodeId"
      :connection="connection"
      :origin="connection.origin"
      :destiny="connection.destiny"
      :connected="connection.connected"
      @onStartMoving="setIsMoving"
      @onEndMoving="setDataConnection"
      :vertical="false"
    />

    <!-- <div class="shadow-node" v-for="(fShadowNode,index) in flowShadowNodes"
      :key="index"
      :style="fShadowNode.style"
    /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';
import { ACT } from '@FLOWEDIT/constants';
import { GetFlowNodeProtoype, NodePrototype, DataNodePrototype } from '@MODELS/node-prototypes';
import { NodeType, FlowNode, NodeDescription, Vector2, DataNode, Port } from '@MODELS/flow-graph';
import {
  ConnectionMeta,
  Connection,
  nodeDimensions,
  flowConnections,
  dataConnections,
} from './connection-utils/connection-definition';

export default Factory.component('ConnectorCanvas', {
  data() {
    return {
      isMoving: false,
      reseting: false,
    };
  },
  props: [],
  components: {},
  computed: {
    node: function(this: VueView) {
      return this.$store.getters.getFlowNode(this.nodeId) || {};
    },
    flowNodes: function(this: VueView) {
      return this.$store.getters.getFlowNodes();
    },
    dataNodes: function(this: VueView) {
      return [];// this.$store.getters.getDataNodes();
    },
    flowConnections: flowConnections,
    dataConnections: dataConnections,
    flowHitBoxes: function(this: VueView) {
      return this.flowNodes.map((node: FlowNode) => {
        let dimensions = nodeDimensions(this, node);
        return {
          node,
          x1: dimensions.x + node.position.x,
          y1: dimensions.y + node.position.y,
          x0: node.position.x,
          y0: node.position.y,
        };
      });
    },
    flowShadowNodes: function(this: VueView) {
      return this.flowNodes.map((node: FlowNode) => {
        let dimensions = nodeDimensions(this, node);
        return {
          style: {
            width: dimensions.x + 'px',
            height: dimensions.y + 'px',
            left: node.position.x + 'px',
            top: node.position.y + 'px',
          },
        };
      });
    },
  },
  methods: {
    setIsMoving() {
      this.isMoving = true;
    },
    removeIsMoving() {},
    setDataConnection(this: VueView, param: { meta: ConnectionMeta; coord: Vector2 }) {
      this.resetConectors();
    },
    setFlowConnection(this: VueView, param: { meta: ConnectionMeta; coord: Vector2 }) {
      this.isMoving = false;
      let coord = param.coord;
      let result: string | undefined = '';
      this.flowHitBoxes.forEach((hitBox: any) => {
        if (coord.x >= hitBox.x0 && coord.x <= hitBox.x1 && coord.y >= hitBox.y0 && coord.y <= hitBox.y1) {
          result = hitBox.node.id;
        }
      });
      if (result !== '') {
        if (result === param.meta.nodeId) {
          result = undefined;
        }
        this.$store.dispatch(ACT.FlowEdit.setFlowNodeContinuePortConnection, {
          nodeId: param.meta.nodeId,
          targetNodeId: result,
        });
      }
      this.resetConectors();
    },
    resetConectors(this: VueView) {
      this.reseting = true;
      Vue.nextTick(() => {
        this.reseting = false;
      });
    },
  },
  mounted() {},
});
</script>
