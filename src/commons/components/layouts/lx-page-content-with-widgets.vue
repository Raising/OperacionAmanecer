<template>
  <lx-empty>
    <ax-row
      class="widget-slider"
      v-if="displayWidgets"
      v-bind:class="[{ 'widget-slider-md': size === 'md' }, { 'widget-slider-lg': size === 'lg' }]"
    >
      <ax-col
        v-for="slotName in Object.keys($slots).filter((name) => isSlotWidget(name))"
        :key="$slots[slotName].tag"
        :cols="slotsProps[slotName].col"
      >
        <slot :name="slotName" />
      </ax-col>
    </ax-row>
    <ax-row class="grid-insurable-operation">
      <slot name="content" />
    </ax-row>
  </lx-empty>
</template>

<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-page-content-with-widgets', {
  name: 'PageContentWithWidgetsLayout',

  props: {
    slotsProps: {
      type: Object,
      required: false,
    },
    displayWidgets: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: false,
    },
  },

  methods: {
    isSlotWidget: function(name: string): boolean {
      const regexp = new RegExp('^widget-[1-9]+$');
      return regexp.test(name);
    },
  },
});
</script>
