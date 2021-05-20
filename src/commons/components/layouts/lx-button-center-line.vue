<!-- 
nombre: 'lx-button-center-line'
descripción: 


 -->
<template>
  <ax-row class="button-center-line">
    <ax-col class="line"></ax-col>
    <ax-col cols="auto"><slot name="button"/></ax-col>
    <ax-col class="line"></ax-col>
  </ax-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-button-center-line', {
  computed: {
    hasButton() {
      return !!this.$slots.button;
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
});
</script>
