<template>
  <div class="ax-form-date-range">
    <div class="from-date">
      <ax-form-input type="date" @input="fromSelected" :value="$attrs.value.get('from')"></ax-form-input>
    </div>
    <div class="to-date">
      <ax-form-input type="date" @input="toSelected" :value="$attrs.value.get('to')"></ax-form-input>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('ax-form-date-range', {
  data() {
    return {};
  },
  mounted: function() {},
  methods: {
    fromSelected: function(value: any) {
      this.$attrs.value.set({ from: value }, false);
    },
    toSelected: function(value: any) {
      this.$attrs.value.set({ to: value }, false);
    },
  },
});
</script>
