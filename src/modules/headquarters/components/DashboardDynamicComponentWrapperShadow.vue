<template>
  <vue-draggable-resizable
    class="dashboard-dynamic-component-wrapper-shadow"
    :class="isInvalidDropPosition ? { invalid: true } : { valid: true }"
    ref="componentWrapper"
    :resizable="false"
    :draggable="false"
    :style="{ ...componentSize }"
    :x="componentPosition.x"
    :y="componentPosition.y"
  >
  </vue-draggable-resizable>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';

export default Factory.component('DashboardDynamicComponentWrapperShadow', {
  data() {
    return {};
  },
  props: ['transform', 'dashboardFrameSize', 'isInvalidDropPosition'],
  components: {},
  computed: {
    dashboardDimensions() {
      return this.$store.getters.getDashboardDimensions();
    },
    dashboardTileSize() {
      const widthVal = this.dashboardFrameSize.x / this.dashboardDimensions.x;
      const heightVal = this.dashboardFrameSize.y / this.dashboardDimensions.y;
      return { x: widthVal, y: heightVal };
    },
    componentPosition() {
      return {
        x: this.dashboardTileSize.x * this.transform.position.x,
        y: this.dashboardTileSize.y * this.transform.position.y,
      };
    },
    componentSize() {
      return {
        width: `${this.dashboardTileSize.x * this.transform.dimensions.x}px`,
        height: `${this.dashboardTileSize.y * this.transform.dimensions.y}px`,
      };
    },
  },
  methods: {},

  mounted() {},
});
</script>
