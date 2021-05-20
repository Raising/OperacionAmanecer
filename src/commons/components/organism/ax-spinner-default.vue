<template>
  <div v-if="logo" class="flex-complete-center detail-width fixed">
    <img src="img/layout/gif-logo-trinios.gif" style="height: 80px" />
  </div>
  <div v-else>
    <b-spinner class="align-middle"></b-spinner>
    <strong class="ml-2">{{ textLoader }}</strong>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import { ACT } from '@COMMONS/constants';

export default Factory.component('ax-spinner-default', {
  data() {
    return {};
  },
  computed: {},
  props: {
    logo: { type: Boolean, default: false },
  },
  methods: {},
});
</script>
