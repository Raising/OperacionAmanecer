<!-- 
nombre: 'lx-business-units'
descripción: 


 -->
<template>
  <div>
    <ax-button v-on:click="businessUnits()">
      <company-icon />
    </ax-button>

    <ax-row>
      <ax-col v-show="showBusinessUnits">
        <div class="business-units">
          <div class="marco">
            <div class="header-treeselect">
              <h6>{{ $t('BusinessUnit') }}</h6>
              <div class="pointer" v-on:click="businessUnits()">
                <close-icon />
              </div>
            </div>
            <div class="d-flex align-items-center">
              <slot name="treeselectBusinessUnits" />
              <ax-button v-on:click="doSearch"><magnify-icon /></ax-button>
            </div>
          </div>
        </div>
      </ax-col>
    </ax-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

import CompanyIcon from '@COMMONS/components/icons/24px-AX/Company.vue';
import MagnifyIcon from '@COMMONS/components/icons/24px-AX/Magnify.vue';
import CloseIcon from '@COMMONS/components/icons/24px-AX/Close.vue';

export default Factory.component('lx-business-units', {
  computed: {
    hasTreeselectBusinessUnits() {
      return !!this.$slots.treeselectBusinessUnits;
    },
  },

  components: {
    CompanyIcon,
    MagnifyIcon,
    CloseIcon,
  },
  data() {
    return {
      showBusinessUnits: false,
    };
  },

  methods: {
    businessUnits() {
      this.showBusinessUnits = !this.showBusinessUnits;
    },
    doSearch(value: string) {
      this.$emit('doSearch', value);
      if (this.showBusinessUnits) this.showBusinessUnits = !this.showBusinessUnits;
    },
  },
});
</script>
