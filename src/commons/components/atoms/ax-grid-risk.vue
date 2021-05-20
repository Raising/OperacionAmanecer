<template>
  <div class="ax-grid-risk">
    <ax-form-risk
      :value="value"
      :showValueAsPercent="showValueAsPercent"
      :displayText="displayText"
      :textInside="textInside"
      v-bind:class="classObject"
      :renderInline="renderInline"
      :max="maxValue || max"
      :label="label"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';

export enum gridRiskRenderModes {
  PBIID = 'PBIId',
  PERCENT = 'Percent',
  RIIM = 'RIIM',
  PROGRESS_GREY = 'ProgressGrey',
  PROGRESS_GREEN = 'ProgressGreen',
}

interface RenderConfig {
  showValueAsPercent: boolean;
  displayText: boolean;
  textInside: boolean;
  renderInline: boolean;
  class: string;
  maxValue?: Number;
}

const gridRiskConfigByRenderMode: { [index: string]: any } = {
  [gridRiskRenderModes.PERCENT]: {
    showValueAsPercent: true,
    displayText: true,
    textInside: false,
    renderInline: false,
    maxValue: 100,
    class: '',
  },
  [gridRiskRenderModes.PBIID]: {
    showValueAsPercent: false,
    displayText: true,
    textInside: false,
    renderInline: false,
    class: '',
  },
  [gridRiskRenderModes.RIIM]: {
    showValueAsPercent: false,
    displayText: true,
    textInside: false,
    renderInline: false,
    class: '',
  },
  [gridRiskRenderModes.PROGRESS_GREY]: {
    showValueAsPercent: false,
    displayText: false,
    textInside: false,
    renderInline: false,
    maxValue: 100,
    class: 'monocromatic blue',
  },
  [gridRiskRenderModes.PROGRESS_GREEN]: {
    showValueAsPercent: false,
    displayText: false,
    textInside: false,
    renderInline: false,
    class: 'monocromatic green',
  },
};

export default Factory.component('ax-grid-risk', {
  data() {
    return {
      showValueAsPercent: false,
      displayText: true,
      textInside: true,
      renderInline: false,
      translation: {},
      class: {},
      maxValue: undefined,
    };
  },
  props: {
    value: {
      type: [Number, Object],
      default: 0,
    },
    renderType: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    max: {
      type: [Number, String],
      default: 100,
    },
  },
  // resources: {
  //   segmentationCriteria: {
  //     type: RES.SEGMENTATION_CRITERIA,
  //     mode: ENUM.ResourceMode.COLLECTION,
  //     refProps: [
  //       {
  //         property: 'enumType',
  //         value: (component: any) => component.$props.renderType,
  //       },
  //     ],
  //   },
  // },
  computed: {
    classObject: function() {
      let classesObj: { [index: string]: boolean } = {};

      if (Object.keys(this.class).length > 0) {
        let classes = this.class.split(' ');
        classes.forEach((el: string) => {
          classesObj[el] = true;
        });
      }

      return classesObj;
    },
  },
  mounted: function() {
    this.setConfig();
    // this.loadLabel();
  },
  watch: {
    renderType: function() {
      this.setConfig();
    },
    max: function() {
      this.setConfig();
    },
  },
  methods: {
    // loadTranslations: function() {
    //   this.resources.segmentationCriterias.segmentationCriteria
    //     .fetchCollection({})
    //     .then((result: any) => {
    //       let segmentationCriteria = this.resources.segmentationCriterias.segmentationCriteria.content();
    //       let matched = segmentationCriteria.filter((el: any) => el.SourceName === this.$props.type)[0];
    //       if (matched !== undefined) {
    //         matched.SourceValues.forEach((translation: any) => {
    //           this.translation[translation.Label.toLowerCase()] = translation.Label;
    //         });
    //         this.max = Object.keys(this.translation).length - 1;
    //       } else {
    //         this.loadDefaultTranslations();
    //       }
    //     })
    //     .catch((error: Error) => {
    //       throw error;
    //     });
    // },
    // loadLabel: function() {
    //   if (this.resources.segmentationCriteria.isReady()) {
    //     this.max = this.resources.segmentationCriteria.asEnum().length;
    //     this.label = this.resources.segmentationCriteria.asEnum().find((el: any) => el.value == this.value).text;
    //   } else {
    //     this.max = 100;
    //     this.label = this.$t('notDefined');
    //   }
    // },
    // loadDefaultTranslations: function() {
    //   this.translation = this.$t('risk');
    // },
    setConfig: function() {
      let componentConfig = gridRiskConfigByRenderMode[this.$props.renderType];
      Object.keys(componentConfig).forEach((key: string) => {
        this[key] = componentConfig[key];
      });
    },
  },
});
</script>
