<template>
  <div class="wrapper">
    <ax-container fluid>
      <ax-row>
        <ax-col sm="12">
          <div class="imageheader">
            <slot name="imageheader" />
          </div>
        </ax-col>
      </ax-row>

      <ax-row>
        <ax-col sm="12">
          <div class="kpisheader"
            ><div class="card-deck"> <slot name="kpisheader"/></div
          ></div>
        </ax-col>
      </ax-row>

      <ax-row>
        <ax-col sm="12">
          <div class="bodytabs">
            <slot name="bodytabs" />
          </div>
        </ax-col>
      </ax-row>
    </ax-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-globalposition', {
  /* name: 'GlobalpositionLayout', */
  props: ['imagelabel', 'kpilabel', 'bodylabel'],
  data() {
    return {};
  },
  methods: {},
});
</script>
