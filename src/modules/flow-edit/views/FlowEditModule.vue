<template>
  <lx-module>
    <graph-side-menu slot="side-menu" :gameId="$route.params.gameId" :title="$route.params.gameId" />
    <router-view :key="$route.fullPath" />
  </lx-module>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';
import EditableFlowGraph from './EditableFlowGraph.vue';

export default Factory.view({
  name: 'FlowEdit',
  data() {
    return {};
  },
  components: {},
  autoRouter: {
    name: 'Flow Edit',
    path: 'flowedit/:gameId',
    children: [EditableFlowGraph],
  },
  methods: {},

  mounted() {},
});
</script>
