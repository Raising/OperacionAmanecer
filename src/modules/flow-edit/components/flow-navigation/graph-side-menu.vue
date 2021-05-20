<template>
  <ax-nav class="side-menu-container" vertical>
    <!-- String para mostrar en la cabecera del menú a modo de título -->
    <div class="menu-header">
      <div v-if="title">{{ title }}</div>
    </div>

    <graph-menu-item-group
      v-for="(menuElement, index) in menuElements"
      :key="index"
      :id="index"
      :menuElement="menuElement"
    />
  </ax-nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import { ENUM } from '@/commons/constants';

export default Factory.component('graph-side-menu', {
  data() {
    return {};
  },
  mounted: function() {},
  computed: {
    menuElements: function(this: VueView) {
      return this.$store.getters.getGameGraphsTree();
    },
  },
  props: ['gameId', 'title'],
  methods: {},
});
</script>
