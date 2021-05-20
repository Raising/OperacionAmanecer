<template>
  <div class="ax-form-numeric-filter">
    <div class="form-numeric-operator">
      <ax-form-select @input="changeOperator" :options="options" :value="$attrs.value.get('operator')" />
    </div>
    <div v-if="currentOperator !== operators.RANGE" class="form-numeric-value">
      <ax-form-input
        :disabled="currentOperator === operators.RANGE"
        @input="changeValue"
        :value="$attrs.value.get('value')"
      />
    </div>
    <div v-if="currentOperator === operators.RANGE" class="form-numeric-range">
      <ax-form-input @input="changeFromValue" :placeholder="$t('min')" :value="$attrs.value.get('from')" />
      <ax-form-input @input="changeToValue" :placeholder="$t('max')" :value="$attrs.value.get('to')" />
    </div>
  </div>
</template>

<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM } from '@COMMONS/constants';
import FormNumeric from './ax-form-numeric.vue';

export default Factory.component('ax-form-numeric-filter', {
  extends: FormNumeric,
  data() {
    return {
      operators: ENUM.FilterOperator,
      options: [
        { value: ENUM.FilterOperator.LESS, text: '<' },
        { value: ENUM.FilterOperator.LESSOREQUAL, text: '≤' },
        { value: ENUM.FilterOperator.EQUAL, text: '=' },
        { value: ENUM.FilterOperator.GREATEROREQUAL, text: '≥' },
        { value: ENUM.FilterOperator.GREATER, text: '>' },
        { value: ENUM.FilterOperator.RANGE, text: '[-]' },
      ],
    };
  },
  computed: {
    currentValue: function() {
      return this.$attrs.value.get();
    },
    currentOperator: function() {
      return this.$attrs.value.get('operator');
    },
  },
  mounted: function() {},
  methods: {
    changeFromValue: function(value: any) {
      this.$attrs.value.set({ from: Number(value) }, false);
      this.deleteValue();
    },
    changeToValue: function(value: any) {
      this.$attrs.value.set({ to: Number(value) }, false);
      this.deleteValue();
    },
    changeValue: function(value: any) {
      this.$attrs.value.set({ value: Number(value) }, false);
      this.deleteRange();
    },
    deleteRange: function() {
      let currentValue = this.$attrs.value.get();
      delete currentValue.from;
      delete currentValue.to;
      this.$attrs.value.get(currentValue, true);
    },
    deleteValue: function() {
      let currentValue = this.$attrs.value.get();
      delete currentValue.value;
      this.$attrs.value.get(currentValue, true);
    },
  },
});
</script>
