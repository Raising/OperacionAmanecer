<template>
  <lx-widget-generic>
    <template v-slot:header>
      <slot name="header" />
    </template>
    <template v-slot:body resize-canvas>
      <template v-if="hasBodyText()">
        <ax-col sm="auto" class="p-0">
          <h4 class="value-widget">
            <slot name="body-text" />
          </h4>
        </ax-col>
        <ax-col class="p-0">
          <slot name="body-grapth" />
        </ax-col>
      </template>
      <template v-else>
        <ax-row class="widget-body">
          <ax-col class="p-0 only-graph">
            <slot name="body-grapth" />
          </ax-col>
        </ax-row>
      </template>
    </template>
    <template v-slot:footer>
      <div :class="['widget-comment', footerClass]">
        <!--<div v-if="!hasFooterIcon()">
          <span class="dot"></span>
        </div>-->
        <div v-if="hasFooterIcon()">
          <slot name="footer-icon" />
        </div>
        <div>
          <slot name="footer" />
        </div>
      </div>
    </template>
  </lx-widget-generic>
</template>

<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';
import WidgetGenericLayout from './lx-widget-generic.vue';

export default Factory.component('lx-widget-graph', {
  name: 'WidgetGraphLayout',

  data() {
    return {};
  },

  props: {
    footerClass: {
      type: String,
      required: false,
      default: 'greenborder',
    },
  },

  components: {
    WidgetGenericLayout,
  },

  methods: {
    hasFooterIcon: function(): boolean {
      return !!this.$slots['footer-icon'];
    },
    hasBodyText: function(): boolean {
      return !!this.$slots['body-text'];
    },
  },
});
</script>
