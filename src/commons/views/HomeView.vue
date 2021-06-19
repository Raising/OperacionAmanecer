<template>
  <div class="h-100 w-100">
    <home-header />
    <header>
      <ax-navbar toggleable="xl" class="menu">
        <ax-navbar-toggle target="nav-collapse" class="menu-responsive">
          <hamburguer-menu-icon />
        </ax-navbar-toggle>
        <ax-collapse class="header-tabs" id="nav-collapse" is-nav>
          <ax-nav-item :key="'LiveMap'" :to="'/home/map/live'">{{ $t('Live Map') }}</ax-nav-item>
          <ax-nav-item :key="'history'" :to="'/home/map/history'">{{ $t('History') }}</ax-nav-item>
          <!-- <ax-nav-item
            v-for="linkNode in childrenLinks.collection.filter((link) => link.showInMenu !== false)"
            :key="linkNode.name"
            :to="linkNode.path"
            :disabled="linkNode.disabled"
            >{{ $t(linkNode.name) }}</ax-nav-item
          > -->
        </ax-collapse>
        <oa-time-manager/>
        
      </ax-navbar>
    </header>
    <div class="bg-img-body MainContent">
      <div class="ModuleFrame scroller h-100">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ENUM, ACT, RES } from '@COMMONS/constants';

import Factory from '@COMMONS/utils/factory/factory';
import router from '@COMMONS/utils/main/router';
import { getPermission } from '@COMMONS/utils/main/permission';
import { FunctionalModules } from '@SOLUTION/current-project';
import HomeHeader from '@COMMONS/views/HomeHeaderView.vue';
import HamburguerMenuIcon from '@COMMONS/components/icons/24px-AX/HamburguerMenu.vue';

export default Factory.view({
  name: 'Home',
  autoRouter: {
    name: 'Home',
    path: 'home',
    children: [...FunctionalModules],
  },
  data() {
    return {};
  },

  components: { HamburguerMenuIcon, HomeHeader },

  refProps: [],
  computed: {},
  methods: {},

  mounted() {},
});
</script>
