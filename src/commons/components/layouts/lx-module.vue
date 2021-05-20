<template>
  <div class="wrapper">
    <div class="sideMenu" v-bind:class="{ toggled: sideMenuToggled }">
      <div @click="toggleSideMenu" class="toggle-menu">
        <chevron-left-icon class="chevron-icon" />
      </div>
      <slot name="side-menu" test="test" />
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import ChevronLeftIcon from '@COMMONS/components/icons/24px-AX/ChevronLeft.vue';
import { MUT, RES } from '@COMMONS/constants';

export default Factory.component('lx-module', {
  name: 'ModuleLayout',

  components: {
    ChevronLeftIcon,
  },
  data() {
    return {};
  },
  computed: {
    sideMenuToggled() {
      return this.$store.getters.getSideMenuState !== undefined ? this.$store.getters.getSideMenuState() : false;
    },
  },
  props: ['displaySideMenu'],
  methods: {
    toggleSideMenu: function() {
      this.$store.commit(MUT.Navigation.SET_SIDE_MENU_STATE, !this.sideMenuToggled);
    },
  },
});
</script>
