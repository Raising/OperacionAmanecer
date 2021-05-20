<template>
  <ax-row>
    <ax-col sm="2">
      <label>{{ name }}:</label>
    </ax-col>
    <ax-col sm="10">
      <slot />
    </ax-col>
  </ax-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-example-form-field', {
  props: ['name'],
});
</script>
