<template>
  <lx-dragable-graph-node
    :node="node"
    :tittle="nodePrototype.name"
    :toolTip="nodePrototype.description"
    :rows="Math.max(outputPorts.length, inputPorts.length)"
    @onEndMoving="savePosition"
  >
    <template v-if="inputPorts.length > 0" v-slot:inputs>
      <input-port v-for="iport in inputPorts" :key="iport.id" :port="iport" />
    </template>

    <template v-if="outputPorts.length > 0" v-slot:outputs>
      <output-port v-for="oport in outputPorts" :key="oport.id" :port="oport" />
    </template>
  </lx-dragable-graph-node>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';
import { ACT } from '@FLOWEDIT/constants';
import { GetDataNodeProtoype } from '@MODELS/node-prototypes';
import { NodeType } from '@MODELS/flow-graph';

export default Factory.component('DataNode', {
  data() {
    return {};
  },
  props: ['nodeId'],
  components: {},
  computed: {
    node: function(this: VueView) {
      return this.$store.getters.getDataNode(this.nodeId);
    },
    nodePrototype: function(this: VueView) {
      return GetDataNodeProtoype(this.node.nodeProto);
    },

    inputPorts: function(this: VueView) {
      return Object.values(this.nodePrototype.inputs);
    },
    outputPorts: function(this: VueView) {
      return Object.values(this.nodePrototype.outputs);
    },
  },
  methods: {
    savePosition(this: VueView, coords: { x: number; y: number }) {
      this.$store.dispatch(ACT.FlowEdit.setNodePosition, { type: NodeType.Data, nodeId: this.nodeId, ...coords });
    },
  },
  mounted() {},
});
</script>
