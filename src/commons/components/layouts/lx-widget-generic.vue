<template>
  <ax-container fluid class="marco" v-bind:class="{ 'flex-for-column': notComment }">
    <ax-row class="widget-header">
      <ax-col>
        <slot name="header" />
      </ax-col>
    </ax-row>
    <ax-row class="widget-body" v-bind:class="{ 'resize-canvas': resizeCanvas }">
      <slot name="body" />
    </ax-row>
    <ax-row v-if="!notComment" class="widget-info">
      <slot name="footer" />
    </ax-row>
  </ax-container>
</template>

<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-widget-generic', {
  name: 'WidgetGenericLayout',

  props: {
    notComment: {
      type: Boolean,
      default: false,
    },
    resizeCanvas: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
