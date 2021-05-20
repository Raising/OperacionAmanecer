<template>
  <ax-row :attrs="$attrs">
    <slot />
  </ax-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-horizontal', {
  computed: {},
});
</script>
