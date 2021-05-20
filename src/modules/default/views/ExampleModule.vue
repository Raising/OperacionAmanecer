<template>
  <lx-module>
    <side-menu slot="side-menu" id="recovery-side-menu" :menuElements="childrenLinks" :title="$t('recovery')" />
    <router-view :side-menu-links="childrenLinks" />
  </lx-module>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';

export default Factory.view({
  name: 'Recoveries',
  data() {
    return {};
  },
  components: {},
  autoRouter: {
    name: 'example',
    path: 'example',
    children: [],
  },
  methods: {},

  mounted() {},
});
</script>
