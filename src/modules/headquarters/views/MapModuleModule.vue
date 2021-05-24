<template>
  <lx-module>
    <!-- <side-menu slot="side-menu" id="recovery-side-menu" :menuElements="childrenLinks" :title="$t('recovery')" /> -->
    <router-view />
  </lx-module>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory from '@COMMONS/utils/factory/factory';
import { ACT } from '@HQ/constants';
import LiveMap from './LiveMapView.vue';

export default Factory.view({
  name: 'Map',
  data() {
    return {};
  },
  components: {},
  autoRouter: {
    name: 'map',
    path: 'map',
    children: [LiveMap],
  },
  methods: {
    connectToLiveDeviceData() {
      let socket = new WebSocket('ws://localhost:' + 8082);

      socket.onmessage = (event) => {
        this.$store.dispatch(ACT.Devices.AddBip, { bip: JSON.parse(event.data) });
      };
    },
  },

  mounted() {
    this.connectToLiveDeviceData();
  },
});
</script>
