<template>
  <lx-form class="w-header">
    <ax-col>
      <img src="img/login/logo-trinios.png" />
    </ax-col>
    <ax-nav pills nav-pills class="navegator">
      <li class="with-icon exit">
        <ax-button v-on:click="doLogOut">
          <power-off-icon />
        </ax-button>
      </li>
    </ax-nav>
  </lx-form>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM, ACT, RES } from '@COMMONS/constants';

import PowerOffIcon from '@COMMONS/components/icons/24px-AX/PowerOff.vue';

//Properties Order:  name, autoRouter, lifeCicle Functions, methods, computed, computedformfields, resources
export default Factory.view({
  mixins: [],
  name: 'HomeHeader',

  autoRouter: {
    name: 'HomeHeader',
    path: 'home',
  },

  components: {
    PowerOffIcon,
  },

  data() {
    return {};
  },

  resources: {},

  computed: {},

  created: function() {},

  methods: {
    doLogOut: function() {
      this.$store.dispatch(ACT.Session.LogOut);
      this.$bvToast.toast(`logOut`, { title: 'Session', message: 'session cerrada', autoHideDelay: 2000 });
      router.push('/login');
    },
  },
});
</script>
