<template>
  <ax-container fluid>
    <ax-col xs="12" class="standar-annual-report-test">
      <template v-for="(group, index) in elements">
        <ax-annual-report-header
          v-if="group.label"
          :label="group.label"
          :level="group.level"
          :key="`header-content-${index}`"
        />
        <template v-for="(detail, index2) in group.reports">
          <slot name="asd" />
          <ax-annual-report-detail
            v-if="detail.details"
            :detail="detail"
            :key="`detail-content-${index}${index2}`"
            @click="clickHandler"
            @link="$emit('link', $event)"
            :level="group.level"
            :keyPrefix="`${index}${index2}`"
            :memoryAvailable="group.label ? true : false"
          />
        </template>
      </template>
    </ax-col>
    <ax-modal :hide-footer="true" size="lg" :title="'Contenido de PDF'" :id="'standar-anual-report-modal'">
      <object class="w-100 pdf-viewer-content" :data="href" type="application/pdf">
        <embed :src="href" type="application/pdf" />
      </object>
    </ax-modal>
  </ax-container>
</template>

<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('ax-standar-annual-report', {
  mounted() {},
  data() {
    return {
      href: '',
    };
  },
  props: {
    reportsGroup: {
      type: Array,
      required: true,
    },
    maxElements: {
      type: [Number, String],
      default: 4,
      validator: (val: any) => {
        return !isNaN(val);
      },
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    showInfoInModal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    elements() {
      let result = this.reportsGroup;
      if (!this.expanded) {
        result = this.reportsGroup.reduce(
          (acc: any, el: any) => {
            let currentLimint = this.maxElements - acc.el;
            if (currentLimint > 0) {
              let element: any = {};
              Object.assign(element, el);
              if (element.reports.length > currentLimint) {
                element.reports = el.reports.slice(0, currentLimint);
                acc.el += currentLimint;
              } else {
                acc.el += el.reports.length;
              }
              acc.acc.push(element);
            }
            return acc;
          },
          { acc: [], el: 0 },
        ).acc;
      }
      return result;
    },
  },
  watch: {},
  methods: {
    clickHandler(event: any) {
      if (this.showInfoInModal) {
        this.href = event.href || '';
        this.$bvModal.show('standar-anual-report-modal');
      }
      this.$emit('click', event);
    },
  },
});
</script>
