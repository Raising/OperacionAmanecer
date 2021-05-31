<template>
  <div
    class="devices-filter"
  >
    Filters
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory from '@COMMONS/utils/factory/factory';
import {  ACT } from '@HQ/constants';

export default Factory.view( {
  name:"DeviceFilters",
  
  data() {
    return {
      
    };
  },
  props: [],
  components: {},
  computed: {
     mapPerspective() {
      return this.$store.getters.getMapPerspective();
    },
    mapSize() {
      return this.$store.getters.getMapSize();
    },
    mapPositionStyle() {
      return this.$store.getters.getMapPerspectiveStyle();
    },
  },
  methods: {
   
  },

  mounted() {},
  
});
</script>
