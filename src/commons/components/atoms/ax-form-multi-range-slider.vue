<template>
  <div class="ax-form-multi-range-slider">
    <div v-if="showInfo" class="selected-info d-flex justify-content-between">
      <div class="lower">
        {{ `${$t('Between-slider')} ` }}
        <span v-if="this.$attrs.value.get('lower') !== undefined">{{ lowerValue }}</span>
      </div>
      <div class="higher">
        {{ `${$t('and')} ` }}
        <span v-if="this.$attrs.value.get('higher') !== undefined">{{ higherValue }}</span>
      </div>
    </div>
    <!-- Se usa una variable local en el v-model para no saturar la Store -->
    <ax-form-tagged-slider v-model="localValue" :min="min" :max="max" :lazy="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('ax-form-multi-range-slider', {
  data() {
    return {
      localValue:
        this.$attrs.value !== undefined
          ? [this.$attrs.value.get('lower'), this.$attrs.value.get('higher')]
          : [this.min, this.max],
    };
  },
  props: ['min', 'max', 'showInfo'],
  watch: {
    localValue: function() {
      this.updateValue();
    },
  },
  mounted: function() {},
  methods: {
    updateValue: function() {
      this.$attrs.value.set({
        lower: Number(this.localValue[0]),
        higher: Number(this.localValue[1]),
      });
    },
  },
  computed: {
    lowerValue: function() {
      return this.$attrs.value.get('lower') < this.$attrs.value.get('higher')
        ? this.$attrs.value.get('lower')
        : this.$attrs.value.get('higher');
    },
    higherValue: function() {
      return this.$attrs.value.get('lower') >= this.$attrs.value.get('higher')
        ? this.$attrs.value.get('lower')
        : this.$attrs.value.get('higher');
    },
  },
});
</script>
