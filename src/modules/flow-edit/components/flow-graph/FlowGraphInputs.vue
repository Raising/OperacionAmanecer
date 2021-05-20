<template>
  <lx-dragable-graph-node
    :node="node"
    :tittle="'Grap Inputs'"
    :toolTip="'Parameters Accepted by this graph'"
    :isDraggable="false"
    :rows="graphInputs.length"
  >
    <template v-if="graphInputs.length > 0" v-slot:outputs>
      <output-port v-for="giport in graphInputs" :key="giport.id" :port="giport" />
    </template>
  </lx-dragable-graph-node>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';

export default Factory.component('FlowGraphInputs', {
  data() {
    return {};
  },
  props: [],
  components: {},
  computed: {
    node() {
      return {
        id: 'graphInputs',
        nodeProto: 'Inputs',
        position: { x: 0, y: 0 },
        inputConection: {},
      };
    },
    flowGraph: function(this: VueView) {
      return this.$store.getters.getFlowGraph();
    },
    graphInputs: function(this: VueView) {
      return Object.values(this.flowGraph.inputs);
    },
  },
  methods: {},

  mounted() {},
});
</script>
