<template>
  <ax-col :attrs="$attrs">
    <slot />
  </ax-col>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-horizontal-section', {
  computed: {},
});
</script>
