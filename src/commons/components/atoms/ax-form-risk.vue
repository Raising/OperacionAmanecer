<template>
  <div class="ax-form-risk" v-bind:class="{ 'render-inline': renderInline && !textInside }">
    <div v-if="showRiskStringOutside" class="progress-text">{{ label }}</div>
    <div v-if="showPercentOutside" class="progress-text">{{ `${((currentValue / max) * 100).toFixed(0)}%` }}</div>
    <ax-progress
      :label="label"
      class="risk-bar"
      :class="label.replace(' ', '-').toLowerCase() + ' val-' + this.value"
      :value="currentValue"
      :max="Number(max)"
    >
      <ax-progress-bar v-if="showRiskStringInside" :value="currentValue" :max="Number(max)">
        <div class="text-inside" v-bind:class="{ 'text-dark': currentValue === 0 }">{{ label }}</div>
      </ax-progress-bar>
      <ax-progress-bar class="text-inside" v-if="showPercentInside" :value="currentValue">
        {{ `${((currentValue / max) * 100).toFixed(0)}%` }}
      </ax-progress-bar>
    </ax-progress>
  </div>
</template>

<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';

export default Factory.component('ax-form-risk', {
  data() {
    return {
      relationRiskDegreeTranslationKey: {},
      localValue: undefined,
    };
  },
  props: {
    // resource: {},
    value: {
      type: [Number, Object, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 100,
    },
    renderInline: {
      type: Boolean,
      default: false,
    },
    textInside: {
      type: Boolean,
      default: false,
    },
    displayText: {
      type: Boolean,
      default: true,
    },
    showValueAsPercent: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    // translation: {
    //   type: Object,
    //   default: () => {
    //     return {};
    //   },
    // },
  },
  mounted: function() {},
  computed: {
    currentValue: function() {
      let val = undefined;

      if (this.$props.value === null) {
        val = 0;
      } else {
        typeof this.$props.value === 'object' ? (val = this.$props.value.get()) : (val = this.$props.value);
      }

      return Number(val);
    },
    // currentLabel: function() {
    //   if (this.resource !== undefined) {
    //     if (this.resource.isReady()) {
    //       let response = this.resource.asEnum();
    //       let matched = response.find((el: any) => el.value == this.value);
    //       if (matched !== undefined) {
    //         return matched.text;
    //       }
    //     }
    //     return '';
    //   }
    //   return this.$t('notDefined');
    // },
    // maximum: function() {
    //   let max = this.max;
    //   if (this.resource !== undefined) {
    //     if (this.resource.isReady()) {
    //       let response = this.resource.asEnum();
    //       max = response.length - 1;
    //     }
    //   }
    //   return max;
    // },
    showRiskStringOutside: function() {
      return !this.$props.textInside && this.$props.displayText && !this.$props.showValueAsPercent;
    },
    showRiskStringInside: function() {
      return this.$props.textInside && this.$props.displayText && !this.$props.showValueAsPercent;
    },
    showPercentOutside: function() {
      return !this.$props.textInside && this.$props.displayText && this.$props.showValueAsPercent;
    },
    showPercentInside: function() {
      return this.$props.textInside && this.$props.showValueAsPercent && this.$props.displayText;
    },
    // riskString: function() {
    //   return this.$props.translation[this.relationRiskDegreeTranslationKey[this.infoIndex()]];
    // },
  },
  watch: {
    // translation: function() {
    //   this.loadTranslations();
    // },
  },
  methods: {
    // isTranslationPropEmpty: function() {
    //   return Object.keys(this.translation).length;
    // },
    // infoIndex: function() {
    //   let numberOfRiskDegreeSectors = Object.keys(this.relationRiskDegreeTranslationKey).length;
    //   let sectorDegreeSize = Number(this.$props.max) / numberOfRiskDegreeSectors;
    //   let infoIndex = Math.floor(this.currentValue / sectorDegreeSize);
    //   if (infoIndex >= numberOfRiskDegreeSectors) infoIndex = numberOfRiskDegreeSectors - 1;
    //   //console.log("infoIndex", numberOfRiskDegreeSectors, sectorDegreeSize, infoIndex);
    //   return infoIndex;
    // },
    // loadTranslations: function() {
    //   Object.keys(this.$props.translation).forEach((translationKey: string, index: number) => {
    //     this.relationRiskDegreeTranslationKey[index] = translationKey;
    //   });
    // },
  },
});
</script>
