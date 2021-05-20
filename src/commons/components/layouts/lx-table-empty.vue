<template>
  <h5 class="text-info">{{ text }}</h5>
</template>

<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-table-empty', {
  name: 'LxTableEmpty',
  methods: {},
  props: ['text'],
});
</script>
