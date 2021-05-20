<template>
  <div class="ax-select">
    <ax-col class="flex-total">
      <ax-col cols="10">
        <h6
          ><small>{{ $t('records_per_page') }}:</small></h6
        >
      </ax-col>
      <ax-col cols="3" class="p-0">
        <b-form-select
          v-model="value"
          :selected="selected"
          :options="selectOptions"
          size="sm"
          @change="changeSelected"
        ></b-form-select>
      </ax-col>
    </ax-col>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('ax-select', {
  /**
   * @name ax-select

   */

  data() {
    return {
      value: this.selected,
    };
  },

  props: ['title', 'selectOptions', 'selected'],
  methods: {
    changeSelected(value: string) {
      this.$emit('change', value);
    },
  },
  computed: {},
});
</script>
