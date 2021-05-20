<template>
  <splitpanes class="horizontal-resizable-layout" horizontal>
    <pane :size="topPaneSize" min-size="10">
      <slot name="horizontal-resizable-top" />
    </pane>
    <pane v-if="showBottomPane" min-size="20">
      <slot name="horizontal-resizable-bottom" />
    </pane>
  </splitpanes>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import { Splitpanes, Pane } from 'splitpanes';

export default Factory.component('lx-horizontal-resizable', {
  components: { Splitpanes, Pane },
  computed: {
    topPaneSize() {
      return this.showBottomPane ? 10 : 100;
    },
  },
  props: {
    showBottomPane: {
      default: true,
    },
  },
});
</script>
