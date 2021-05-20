<template>
  <div class="WindowsHeight">
    <div class="wrapper">
      <div class="body">
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-module-empty', {
  name: 'ModuleLayoutEmpty',
});
</script>
