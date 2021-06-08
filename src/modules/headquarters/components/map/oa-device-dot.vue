<template>
  <div
    class="oa-device-dot"
  >
        <div
          class="device-dot"
          :style="{ bottom: device.coords.y + '%', left: device.coords.x + '%' }"
        ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory from '@COMMONS/utils/factory/factory';
import {  ACT } from '@HQ/constants';

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
     changeZoom(event: WheelEvent) {
        this.$store.dispatch(ACT.Devices.SetMapZoom, {
            zoom: Math.max(-2000,Math.min(1500, this.mapPerspective.zoom - event.deltaY))
          });
    },
    stopDrag() {
      if (this.drag.active) {
        this.drag.active = false;
      }
    },
    startDrag(event: MouseEvent) {
      if (event.button == 0) {
        this.drag.active = true;
        this.drag.isRotation = !!event.ctrlKey;
        this.drag.mouseStartX = event.clientX;
        this.drag.mouseStartY = event.clientY;
        this.drag.rotationX = this.mapPerspective.rotation.x;
        this.drag.rotationZ = this.mapPerspective.rotation.z;
        this.drag.positionX = this.mapPerspective.position.left;
        this.drag.positionY = this.mapPerspective.position.top;

        event.stopPropagation();
        return false;
      }
    },
    doDrag(event: MouseEvent) {
      if (this.drag.active) {
        if (this.drag.isRotation) {
          this.$store.dispatch(ACT.Devices.SetMapRotation, {
            x: Math.max(0, Math.min(75, this.drag.rotationX - (event.clientY - this.drag.mouseStartY) * 0.5)),
            z: this.drag.rotationZ - (event.clientX - this.drag.mouseStartX) * 0.5,
          });
        } else {
          this.$store.dispatch(ACT.Devices.SetMapPosition, {
            left: this.drag.positionX + (event.clientX - this.drag.mouseStartX) * 1.5,
            top: this.drag.positionY + (event.clientY - this.drag.mouseStartY) * 1.5,
          });
        }

        event.stopPropagation();
        return false;
      }
    },
  },

  mounted() {},
   created() {
    window.addEventListener('mouseup', this.stopDrag);
  },
});
</script>
