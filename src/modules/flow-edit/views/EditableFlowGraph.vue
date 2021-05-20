<template>
  <lx-empty class="container">
    <div class="row flow-graph-header"
      >{{ flowGraph.name }} ({{ flowGraph.id }})
      <b-button class="saveButton" @click="updateGraph">Save</b-button>
    </div>
    <div class="row flow-graph-canvas" @contextmenu="openContextMenu" @contextmenu.prevent>
      <data-node v-for="dnode in dataNodes" :key="dnode.id" :nodeId="dnode.id" />
      <flow-node v-for="fnode in flowNodes" :key="fnode.id" :nodeId="fnode.id" />
      <flow-graph-inputs />
      <div v-if="contextMenu.active" class="context-menu-overlay" @click="closeContextMenu" />
      <graph-context-menu v-if="contextMenu.active" :coordinates="contextMenu.coordinates" @close="closeContextMenu" />
      <connector-canvas />
    </div>
  </lx-empty>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';

import { ACT } from '@FLOWEDIT/constants';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';

export default Factory.view({
  components: {},
  name: 'GraphEdition',
  autoRouter: {
    name: 'Flow Graph Edition Tool',
    path: 'flowgraph/:flowGraphId',
    children: [],
  },
  data() {
    return {
      contextMenu: {
        active: false,
        coordinates: { y: 0, x: 0 },
      },
    };
  },
  computed: {
    flowGraph: function(this: VueView) {
      return this.$store.getters.getFlowGraph();
    },
    flowNodes: function(this: VueView) {
      return this.$store.getters.getFlowNodes();
    },
    dataNodes: function(this: VueView) {
      return this.$store.getters.getDataNodes();
    },
  },

  created(this: VueView) {
    this.$store.dispatch(ACT.FlowEdit.setCurrentFlowGraph, {
      flowId: this.$route.params.flowGraphId,
      gameId: this.$route.params.gameId,
    });
  },
  methods: {
    updateGraph(this: VueView) {
      this.$store.dispatch(ACT.FlowEdit.updateFlowGraph, {});
    },
    openContextMenu(this: VueView, event: MouseEvent) {
      this.contextMenu = {
        active: true,
        coordinates: { x: event.offsetX, y: event.offsetY },
      };
    },
    closeContextMenu(this: VueView, event: MouseEvent) {
      this.contextMenu.active = false;
    },
  },

  beforeDestroy() {
    // window.removeEventListener('resize', this.updateDashboardSize);
  },
});
</script>
