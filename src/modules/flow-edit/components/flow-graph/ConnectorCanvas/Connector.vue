<template>
  <div class="connector" :class="vertical ? 'vertical' : 'horizontal'" :style="originPosition">
    <vue-draggable-resizable
      class="lx-dragable-connector"
      ref="connector"
      :resizable="false"
      :draggable="true"
      :style="{ ...componentSize, 'z-index': isMoving ? 50 : 25 }"
      :x="destinyOffset.x"
      :y="destinyOffset.y"
      :onDragStart="dragStart"
      @dragging="whileMoving"
      @dragstop="dragStop"
    >
    </vue-draggable-resizable>
    <div v-if="connection.connected" class="connection-line vertical" :style="conectionLineStyle">
      <div class="stage stage1" />
      <div class="stage stage2" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';
import { ACT } from '@FLOWEDIT/constants';
import { GetFlowNodeProtoype } from '@MODELS/node-prototypes';
import { NodeType } from '@MODELS/flow-graph';

export default Factory.component('Connector', {
  data() {
    return {
      isMoving: false,
    };
  },
  props: ['connection', 'vertical'],
  components: {},
  computed: {
    node: function(this: VueView) {
      return this.$store.getters.getFlowNode(this.connection.meta.nodeId) || {};
    },
    componentSize() {
      return { width: '14px', height: '14px' };
    },
    conectionLineStyle() {
      return {
        height: Math.abs(this.destinyOffset.y) + 'px',
        width: Math.abs(this.destinyOffset.x + 3) + 'px',
        transform:
          (this.destinyOffset.x < 0 ? 'scaleX(-1) ' : 'scaleX(1) ') +
          (this.destinyOffset.y < 0 ? 'scaleY(-1)' : 'scaleY(1)'),
      };
    },

    originPosition() {
      return { left: this.connection.origin.x + 'px', top: this.connection.origin.y + 'px' };
    },
    destinyOffset() {
      return {
        x: this.connection.destiny.x - this.connection.origin.x,
        y: this.connection.destiny.y - this.connection.origin.y,
      };
    },
  },
  methods: {
    dragStart() {
      this.isMoving = true;
      this.$emit('onStartMoving', { componentId: this.node.id });
    },
    whileMoving(x: number, y: number) {
      this.$emit('onMoving', {
        meta: this.connection.meta,
        coord: {
          x: Math.round(this.connection.origin.x + x),
          y: Math.round(this.connection.origin.y + y),
        },
      });
    },
    dragStop(x: number, y: number) {
      this.isMoving = false;
      this.$emit('onEndMoving', {
        meta: this.connection.meta,
        coord: {
          x: Math.round(this.connection.origin.x + x),
          y: Math.round(this.connection.origin.y + y),
        },
      });
    },
  },
  mounted() {},
});
</script>
