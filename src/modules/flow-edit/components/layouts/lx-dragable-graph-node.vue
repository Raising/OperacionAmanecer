<template>
  <vue-draggable-resizable
    drag-handle=".tittle"
    class="lx-dragable-graph-node "
    ref="componentWrapper"
    :resizable="false"
    :draggable="isDraggable === undefined || isDraggable"
    :style="{ ...componentSize, 'z-index': isMoving ? 50 : 0 }"
    :x="node.position.x"
    :y="node.position.y"
    :onDragStart="dragStart"
    @dragging="whileMoving"
    @dragstop="dragStop"
  >
    <div class="tittle"
      ><slot name="tittle"/> {{ tittle }}
      <span v-if="toolTip" v-b-tooltip.hover :title="toolTip" class="tooltip-helper">
        <help-icon :fillColor="'white'" /> </span
    ></div>
    <div v-if="$scopedSlots.inputs" class="inputs" :class="{ full: $scopedSlots.outputs === undefined }">
      <slot name="inputs" />
    </div>

    <div v-if="$scopedSlots.outputs" class="outputs" :class="{ full: $scopedSlots.inputs === undefined }">
      <slot name="outputs" />
    </div>
    <slot />
  </vue-draggable-resizable>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import HelpIcon from '@COMMONS/components/icons/16px-AX/Help.vue';
import { nodeDimensions } from '../flow-graph/ConnectorCanvas/connection-utils/connection-definition';

export default Factory.component('lx-dragable-graph-node', {
  props: ['node', 'tittle', 'toolTip', 'rows', 'isDraggable'],
  data() {
    return {
      isMoving: false,
    };
  },
  components: { HelpIcon },
  computed: {
    componentSize() {
      let dimensions = nodeDimensions(this, this.node, this.rows);
      return { width: dimensions.x + 'px', height: dimensions.y + 'px' };
    },
  },
  methods: {
    dragStart() {
      this.isMoving = true;
      this.$emit('onStartMoving', { componentId: this.node.id });
    },
    whileMoving(x: number, y: number) {
      this.$emit('onMoving', {
        x: Math.round(x),
        y: Math.round(y),
      });
    },
    dragStop(x: number, y: number) {
      this.isMoving = false;
      this.$emit('onEndMoving', {
        x: Math.round(x),
        y: Math.round(y),
      });
    },
  },
});
</script>
