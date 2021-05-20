<template>
  <div class="h-100 w-100">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-empty', {
  computed: {},
});
</script>
