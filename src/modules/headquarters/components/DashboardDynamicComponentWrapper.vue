<template>
  <vue-draggable-resizable
    class="dashboard-dynamic-component-wrapper overflow-hidden"
    ref="componentWrapper"
    :resizable="false"
    :draggable="editable"
    :style="{ ...componentSize, 'z-index': isMoving ? 50 : 0 }"
    :x="componentPosition.x"
    :y="componentPosition.y"
    :onDragStart="dragStart"
    @dragging="whileMoving"
    @dragstop="dragStop"
  >
    <component :is="dynamicComponent.refComponent.name" :dashboardResources="dashboardResources" />
  </vue-draggable-resizable>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';

export default Factory.component('DashboardDynamicComponentWrapper', {
  data() {
    return {
      isMoving: false,
    };
  },
  props: ['dynamicComponent', 'dashboardFrameSize', 'editable', 'dashboardResources'],
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
        x: this.dashboardTileSize.x * this.dynamicComponent.position.x,
        y: this.dashboardTileSize.y * this.dynamicComponent.position.y,
      };
    },
    componentSize() {
      return {
        width: `${this.dashboardTileSize.x * this.dynamicComponent.dimensions.x}px`,
        height: `${this.dashboardTileSize.y * this.dynamicComponent.dimensions.y}px`,
      };
    },
  },
  methods: {
    dragStart() {
      this.isMoving = true;
      this.$emit('onStartMoving', { componentId: this.dynamicComponent.id });
    },
    whileMoving(x: number, y: number) {
      this.$emit('onMoving', {
        component: this.dynamicComponent,
        x: Math.round(x / this.dashboardTileSize.x),
        y: Math.round(y / this.dashboardTileSize.y),
      });
    },
    dragStop(x: number, y: number) {
      this.isMoving = false;
      this.$emit('onEndMoving', {
        component: this.dynamicComponent,
        x: Math.round(x / this.dashboardTileSize.x),
        y: Math.round(y / this.dashboardTileSize.y),
      });
    },
  },

  mounted() {},
});
</script>
