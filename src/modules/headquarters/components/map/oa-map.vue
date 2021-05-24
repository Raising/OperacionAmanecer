<template>
  <div class="map-frame">
    <div class="map-holder"
      :style="mapPosition"
    >
    
      <div class="map-terrain" :style="mapSize">
        <div class="device-dot"
          v-for="device in devices"
          :key="device.deviceId"
          :style="{bottom:device.coords.y + '%',left:device.coords.x + '%'}"
        ></div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';

export default Factory.component('oa-map', {
  data() {
    return {};
  },
  props: ['devices','mapSize','mapPosition'],
  components: {},
  computed: {
    
  },
  methods: {
    

      

  },

  mounted() {},
});
</script>
