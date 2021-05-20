<!-- 
nombre: 'lx-row-filter-grid'
descripción: 


 -->
<template>
  <ax-row class="row-filter-grid">
    <!-- Primer col -->
    <ax-col :sm="firstSlotSm" v-if="hasLeftSlot">
      <slot name="leftslot" />
    </ax-col>

    <!-- Segundo col -->
    <ax-col v-if="hasCenterSlot">
      <ax-row>
        <slot name="centerslot" />
      </ax-row>
    </ax-col>

    <!-- Tercer col -->
    <ax-col :sm="thirdSlotSm">
      <ax-row>
        <ax-col class="justify-content-flex-end p-0" v-if="hasRightSlot">
          <slot name="rightslot" />
        </ax-col>
      </ax-row>
    </ax-col>
  </ax-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-row-filter-grid', {
  computed: {
    hasLeftSlot() {
      return !!this.$slots.leftslot;
    },
    hasCenterSlot() {
      return !!this.$slots.centerslot;
    },
    hasRightSlot() {
      return !!this.$slots.rightslot;
    },
  },
  props: {
    firstSlotSm: {},
    thirdSlotSm: {},
  },
});
</script>
