<!-- 
nombre: 'lx-search-company'
descripción: 


 -->
<template>
  <div class="search-company">
    <ax-col class="p-0">
      <slot name="searchCompany" />
    </ax-col>
    <ax-col class="p-0" cols="2">
      <ax-button id="search-button" v-on:click="doSearch">
        <magnify-icon />
      </ax-button>
      <ax-tooltip target="search-button" triggers="hover">{{ $t('search') }}</ax-tooltip>
    </ax-col>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

import MagnifyIcon from '@COMMONS/components/icons/24px-AX/Magnify.vue';

export default Factory.component('lx-search-company', {
  computed: {},
  components: {
    MagnifyIcon,
  },
  data() {
    return {};
  },

  methods: {
    doSearch(value: string) {
      this.$emit('doSearch', value);
    },
  },
});
</script>
