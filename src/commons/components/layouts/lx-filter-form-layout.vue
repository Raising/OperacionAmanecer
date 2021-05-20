<template>
  <div>
    <ax-row>
      <ax-col sm="12">
        <label>{{ name }}:</label>
      </ax-col>
    </ax-row>
    <ax-row>
      <ax-col sm="12">
        <slot />
      </ax-col>
    </ax-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-filter-form-layout', {
  props: ['name'],
});
</script>
