<template>
  <ax-row no-gutters>
    <ax-col>
      <ax-row>
        <ax-col cols="auto">
          <h5>
            <slot name="title" />
          </h5>
        </ax-col>
      </ax-row>
      <ax-row class="lx-keyvalue-frame-content">
        <slot name="content" />
      </ax-row>
    </ax-col>
  </ax-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-keyvalue-frame', {
  data() {
    return {};
  },
  computed: {},
});
</script>
