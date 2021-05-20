<template>
  <div class="ax-form-numeric">
    <div class="form-numeric-operator">
      <ax-form-select @input="changeOperator" :options="options" :value="$attrs.value.get('operator')" />
    </div>
    <div class="form-numeric-value">
      <ax-form-input @input="changeValue" :value="$attrs.value.get('value')" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM } from '@COMMONS/constants';

export default Factory.component('ax-form-numeric', {
  data() {
    return {
      options: [
        { value: ENUM.FilterOperator.LESS, text: '<' },
        { value: ENUM.FilterOperator.LESSOREQUAL, text: '≤' },
        { value: ENUM.FilterOperator.EQUAL, text: '=' },
        { value: ENUM.FilterOperator.GREATEROREQUAL, text: '≥' },
        { value: ENUM.FilterOperator.GREATER, text: '>' },
      ],
    };
  },
  mounted: function() {},
  methods: {
    changeOperator: function(value: any) {
      this.$attrs.value.set({ operator: Number(value) }, false);
    },
    changeValue: function(value: any) {
      this.$attrs.value.set({ value: Number(value) }, false);
    },
  },
});
</script>
