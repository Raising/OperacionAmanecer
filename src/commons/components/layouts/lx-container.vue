<template>
  <ax-row>
    <slot />
  </ax-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-container', {
  computed: {},
});
</script>
