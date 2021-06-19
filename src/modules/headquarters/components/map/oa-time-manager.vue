<template>
<div  class="time-manager">
  <ax-form-tagged-slider
      class="time-slider"
        :style="{  }"
        :direction="'ltr'"
        :min="timeRange[0]"
        :max="timeRange[1]"
        :value="currentTime"
        @input="setCurrentTime"
      />
<div class="time-buttons">
    <ax-button 
      @click="toggleTimeMode"
      class="timeToggler"
      :class="{live:isLiveTime,controlled:!isLiveTime}"
    >{{isLiveTime ? "LIVE" : "Controled"}}</ax-button>
</div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory from '@COMMONS/utils/factory/factory';
import {  ACT } from '@HQ/constants';

export default Factory.component('oa-time-manager', {
  data() {
    return {
   
    };
  },
  props: ['device'],
  components: {},
  computed: {
    isLiveTime(){
      return this.$store.getters.getTimeIsLive;
    },
    currentTime(){
      return this.$store.getters.getCurrentTime;
    },
    timeRange(){
      return this.$store.getters.getTimeRange;
    }

  },
  methods: {
    toggleTimeMode(){
      return this.$store.dispatch(ACT.Devices.ToggleTimeMode);
    },
    setCurrentTime(timeValue:number){
      return this.$store.dispatch(ACT.Devices.SetCurrentTime,{time:timeValue});
    }
  },

  mounted() {},
   created() {
  
  },
});
</script>

<style lang="scss">
.time-manager {
  position: absolute;
  right:0;
  height: 100%;
  width: 85%;
  top:0px;

  .time-slider{
    position:absolute;
    bottom:5px;
    left:0px;
    width: 80% !important;
  }

  .time-buttons{
    position: absolute;
    right: 0px;
    width: 20%;
    height: 100%;
    background: rgba(255, 255, 255, 0.52);
  }
}
</style>
