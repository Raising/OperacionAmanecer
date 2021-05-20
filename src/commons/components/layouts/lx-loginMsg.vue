<template>
  <div
    class="d-flex justify-content-center align-items-center position-relative"
    :style="{ border: `1px solid ${validColor}`, 'z-index': 25, 'border-radius': '8px', overflow: 'hidden' }"
  >
    <p class="textMsgLogin m-0" :style="{ color: validColor }">{{ text }}</p>

    <div class="position-absolute h-100 w-100" :style="{ 'background-color': `${validColor}`, opacity: '10%' }"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-login-msg', {
  props: ['text', 'color'],
  computed: {
    validColor() {
      return this.color ? this.color : 'black';
    },
  },
});
</script>
