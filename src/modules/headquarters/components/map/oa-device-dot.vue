<template>
  <div class="oa-device-dot">
    <div
      class="device-dot"
      :class="teamClass"
      :style="{ bottom: device.coords.y + '%', left: device.coords.x + '%' }"
    >
      {{device.deviceId}}
      <div class="flag-stick" :style="reverseMapRotationStyle">
        <div class="flag-info">{{alias}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory from '@COMMONS/utils/factory/factory';
import { ACT } from '@HQ/constants';

export default Factory.component('oa-device-dot', {
  data() {
    return {
      drag: {
        isRotation: false,
        active: false,
        mouseStartX: 0,
        mouseStartY: 0,
        rotationX: 0,
        rotationZ: 0,
        positionX: 0,
        positionY: 0,
      },
    };
  },
  props: ['device'],
  components: {},
  computed: {
    alias() {
      return aliases[this.device.deviceId];
    },
    teamClass() {
      if (['A01', 'A02', 'A03'].indexOf(this.device.deviceId) !== -1) {
        return 'team-a';
      }
      if (['A05', 'A04'].indexOf(this.device.deviceId) !== -1) {
        return 'team-b';
      }
      return 'team-no';
    },
    mapPerspective() {
      return this.$store.getters.getMapPerspective();
    },
    mapSize() {
      return this.$store.getters.getMapSize();
    },
    reverseMapRotationStyle() {
      return this.$store.getters.getReverseMapPerspectiveStyle();
    },
  },
  methods: {},

  mounted() {},
  created() {
    window.addEventListener('mouseup', this.stopDrag);
  },
});

const aliases: { [key: string]: string } = {
  A01: 'A_Alfa',
  A02: 'A_Bravo',
  A03: 'A_Delta',
  A04: 'B_Alfa',
  A05: 'B_Bravo',
  A06: 'Cuervos',
};
</script>


<style lang="scss">
$dotSize: 20px;
$dotSizeExpanded: $dotSize * 2;

.device-dot {
  color: white;
  padding-top: 5px;
  text-align: center;
  position: absolute;
  color: white;
  text-align: center;
  width: $dotSize;
  height: $dotSize;
  padding-top: $dotSize/7;
  font-size: $dotSize/3;
  margin-left: $dotSize/-2;
  margin-bottom: $dotSize/-2;
  border-radius: 50%;
  background: rgb(51, 13, 8);
  box-sizing: border-box;
  border: solid rgb(239, 255, 10) 2px;
  box-shadow: 0 0 0px 1px white, 0 0 6px 4px black;
  transition: 0.1s;
  &.team-a {
    border: solid rgb(21, 216, 31) 4px;
    .flag-info {
      background: rgb(21, 216, 31) !important;
    }
  }
  &.team-b {
    border: solid rgb(7, 22, 238) 4px;
    .flag-info {
      background: rgb(7, 22, 238) !important;
    }
  }

  &:hover {
    padding-top: $dotSizeExpanded/5;
    font-size: $dotSizeExpanded/3;
    margin-left: $dotSizeExpanded/-2;
    margin-bottom: $dotSizeExpanded/-2;
    width: $dotSizeExpanded;
    height: $dotSizeExpanded;
  }

  .flag-stick {
    z-index: 200;
    position: absolute;
    bottom: 50%;
    left: 43%;
    transform-origin: 50% 100%;
    height: 70px;
    width: 0px;
    border-left: solid rgb(255, 255, 255) 2px;
    box-shadow: 0 0 0px 1px black;

    .flag-info {
      z-index: 300;
      position: absolute;
      top: 0x;
      // width: 45px;
      height: 30px;
      font-size: 22px;
      background: red;
      padding: 2px;
      border-radius: 0 4px 4px 0;
    }
  }
}
</style>