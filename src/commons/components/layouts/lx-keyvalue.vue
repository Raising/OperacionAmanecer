<template>
  <ax-row class="lx-keyvalue d-flex align-items-center" :class="{ 'lx-keyvalue-left-right': horizontal }" no-gutters>
    <div v-if="horizontal" class="title d-flex align-items-center"><slot name="key" />: </div>
    <ax-col v-if="horizontal" class="value"><slot name="value"/></ax-col>
    <ax-col v-else>
      <ax-row class="title mb-1"><slot name="key"/></ax-row>
      <ax-row class="value mb-2 w-100"><slot name="value"/></ax-row>
    </ax-col>
  </ax-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-keyvalue', {
  data() {
    return {};
  },
  computed: {},
  props: {
    horizontal: { type: Boolean, default: true },
  },
});
</script>
