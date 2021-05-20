<template>
  <div class="connector-origin flow">
    <vue-draggable-resizable
      class="lx-dragable-connector"
      ref="connector"
      :resizable="false"
      :draggable="true"
      :style="{ ...componentSize, 'z-index': isMoving ? 50 : 25 }"
      :x="0"
      :y="0"
      :onDragStart="dragStart"
      @dragging="whileMoving"
      @dragstop="dragStop"
    >
    </vue-draggable-resizable>
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

export default Factory.component('FlowConnector', {
  data() {
    return {
      isMoving: false,
    };
  },
  props: ['nodeId'],
  components: {},
  computed: {
    node: function(this: VueView) {
      return this.$store.getters.getFlowNode(this.nodeId) || {};
    },
    componentSize() {
      return { width: '10px', height: '10px' };
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
  mounted() {},
});
</script>
