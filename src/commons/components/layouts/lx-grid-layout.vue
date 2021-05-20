<template>
  <div class="lx-grid-layout">
    <div>
      <div class="grid-controls">
        <ax-button class="btn-filters-toggle" v-b-toggle.filters-content>{{ $t('openFilters') }}</ax-button>
      </div>
      <ax-collapse id="filters-content" class="mt-2">
        <slot name="filters-content" />
        <!-- <ax-filter-form
          :resource="resource"
          :filterFlag="customFieldsFilterFlag"
          :itemsPerRow="4"
          :requireSubmit="true"
        >
          <div slot="links">
            <a href="#">Ayuda</a>
          </div>
        </ax-filter-form> -->
      </ax-collapse>
    </div>
    <div class="grid-content">
      <slot name="grid-content" />
      <!-- <ax-grid :resource="resource" title="grid" :gridCode="gridCode" :textLoader="textLoader" />
      <ax-paginacion :resource="resource" :gridCode="gridCode" title="paginacion" :align="'center'" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-grid-layout', {
  // props: ['resource', 'resourceChild', 'gridCode', 'customFieldsFilterFlag', 'textLoader'],
  props: [],
});
</script>
