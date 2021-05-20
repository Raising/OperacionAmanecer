<template>
  <ax-row>
    <ax-col :class="widthClass">
      <lx-keyvalue :horizontal="false">
        <template slot="key">
          <span v-if="toolTip" v-b-tooltip.hover :title="toolTip">
            <component v-bind:is="toolTipIcon" />
          </span>
          <label>{{ name ? name + ': ' : '' }}</label>
          <!-- <label class="form-field-label">{{ name ? name + ': ' : '' }}</label>-->
        </template>
        <template slot="value"><slot /></template>
      </lx-keyvalue>
    </ax-col>
  </ax-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import HelpIcon from '@COMMONS/components/icons/24px-AX/HelpCircleOutline.vue';

export default Factory.component('lx-form-field', {
  props: ['name', 'cols', 'toolTip'],
  data() {
    return {
      toolTipIcon: undefined,
    };
  },
  mounted: function() {
    this.toolTipIcon = HelpIcon;
  },
  computed: {
    widthClass: function() {
      //return 'xs-6 m-4 l-3';
      return 'form-field';
    },
  },
  components: {},
});
</script>
