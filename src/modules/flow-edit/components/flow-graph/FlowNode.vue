<template>
  <lx-dragable-graph-node
    :node="node"
    :tittle="nodePrototype.name"
    :toolTip="nodePrototype.description"
    :rows="inputPorts.length"
    @onEndMoving="savePosition"
  >
    <template v-slot:inputs>
      <input-port v-for="iport in inputPorts" :key="iport.id" :port="iport" />
    </template>
  </lx-dragable-graph-node>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';
import { ACT } from '@FLOWEDIT/constants';
import { GetFlowNodeProtoype } from '@MODELS/node-prototypes';
import { NodeType } from '@MODELS/flow-graph';

export default Factory.component('FlowNode', {
  data() {
    return {};
  },
  props: ['nodeId'],
  components: {},
  computed: {
    node: function(this: VueView) {
      return this.$store.getters.getFlowNode(this.nodeId) || {};
    },
    nodePrototype: function(this: VueView) {
      let prototypeNode = this.$store.getters.getFlowNodePrototype(this.node);
      if (prototypeNode === undefined) {
        debugger;
      }
      return prototypeNode;
    },
    inputPorts: function(this: VueView) {
      return Object.values(this.nodePrototype.inputs);
    },
  },
  methods: {
    savePosition(this: VueView, coords: { x: number; y: number }) {
      this.$store.dispatch(ACT.FlowEdit.setNodePosition, { type: NodeType.Flow, nodeId: this.nodeId, ...coords });
    },
  },
  mounted() {},
});
</script>
