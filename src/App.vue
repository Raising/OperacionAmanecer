<template>
  <div class="h-100">
    <router-view />
    <navigation-sentinel />
    <logger-sentinel />
  </div>
</template>

<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';
import router from '@COMMONS/utils/main/router';
import store from '@COMMONS/utils/main/store';
import '@COMMONS/components/hub-component';
import '@MODELS/nodes/hub-nodes';

import Home from '@COMMONS/views/HomeView.vue';
import Login from '@COMMONS/views/LoginView.vue';

import PasswordRecovery from '@COMMONS/views/PasswordRecoveryView.vue';

const AppMain = Factory.view({
  name: 'Appmain',
  autoRouter: {
    name: '',
    path: '',
    children: [Login, Home],
  },

  components: {},
  compute: {},
});

AppMain.navigation.injectInRouter(store());
export default AppMain;
</script>

<style lang="scss">
@import 'stylesheets/main.scss';
</style>
