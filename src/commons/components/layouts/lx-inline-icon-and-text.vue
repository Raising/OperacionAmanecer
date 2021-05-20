<template>
  <div class="lx-inline-icon-and-text">
    <component :is="icon" />
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-inline-icon-and-text', {
  computed: {},
  props: ['icon'],
});
</script>
