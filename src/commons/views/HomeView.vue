<template>
  <div class="h-100 w-100">
    <home-header />
    <header>
      <ax-navbar toggleable="xl" class="menu">
        <ax-navbar-toggle target="nav-collapse" class="menu-responsive">
          <hamburguer-menu-icon />
        </ax-navbar-toggle>
        <ax-collapse id="nav-collapse" is-nav>
          <ax-nav-item :key="'GameEditor'" :to="'/home/map/live'">{{ $t('Map') }}</ax-nav-item>
          <!-- <ax-nav-item
            v-for="linkNode in childrenLinks.collection.filter((link) => link.showInMenu !== false)"
            :key="linkNode.name"
            :to="linkNode.path"
            :disabled="linkNode.disabled"
            >{{ $t(linkNode.name) }}</ax-nav-item
          > -->
        </ax-collapse>
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
    return {
      moduleLabel: undefined,
    };
  },

  watch: {
    $route(from: any, to: any) {
      if (this.$router.getMatchedComponents().length > 2)
        this.moduleLabel = this.$router.getMatchedComponents()[2].options.autoRouter.name;
    },
  },

  components: { HamburguerMenuIcon, HomeHeader },
  refProps: ['worldEndDate'],
  computed: {},
  methods: {},

  mounted() {
    if (this.$router.getMatchedComponents().length > 2)
      //cogemos el name del autorouter del componente nº 3 de la lista (el correspondiente al móddulo)
      this.moduleLabel = this.$router.getMatchedComponents()[2].options.autoRouter.name;
  },
});
</script>
