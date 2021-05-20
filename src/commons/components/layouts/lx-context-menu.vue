<template>
  <div class="contextMenu">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-context-menu', {
  computed: {},
});
</script>
