<template>
  <lx-empty class="">
    <oa-map :devices="devicePositions"/>
  </lx-empty>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';
import DashboardDynamicComponentWrapper from '../components/DashboardDynamicComponentWrapper.vue';
import DashboardDynamicComponentWrapperShadow from '../components/DashboardDynamicComponentWrapperShadow.vue';

import { ACT } from '@HQ/constants';

export default Factory.view({
  components: { DashboardDynamicComponentWrapper, DashboardDynamicComponentWrapperShadow },
  name: 'LiveMap',
  autoRouter: {
    name: 'LiveMap',
    path: 'live',
    children: [],
  },
  data() {
    return {};
  },
  resources: {
    dataLoads: {
      type: ENUM.CommonsResource.DATA_LOAD,
      filters: [{ property: 'country' }],
      mode: ENUM.ResourceMode.COLLECTION,
    },
  },
  computed: {
    devicePositions(){    
      let devices =this.$store.getters.getDevicesCurrentPosition();
      
      return devices;
    }
  },
  methods: {},

  mounted() {},

  beforeDestroy() {},
});
</script>
