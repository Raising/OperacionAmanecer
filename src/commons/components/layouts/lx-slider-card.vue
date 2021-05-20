<template>
  <div class="lx-card">
    <ax-row>
      <div class="card-title">{{ title }}</div>
      <button name="Ver" value="Ver">Ver</button>
    </ax-row>

    <ax-row>
      <div class="card-container">
        <div class="card-values-with-graphic-bar">
          <div>{{ value }}</div>
        </div>
        <div class="card-graphic">
          <img src="/img/examples/graph.JPG" />

          <slot />
        </div>
      </div>
    </ax-row>

    <div class="card-description">
      <div class="icon-card-description"><img :src="icon" /> </div>
      <div class="text-card-description">{{ description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-slider-card', {
  /* name: 'lx-slider-card', */
  name: 'lx-slider-card',
  props: ['title', 'value', /*'bar-proportion',*/ 'icon', 'description', 'danger-level'],
  data() {
    return {};
  },
});
</script>
