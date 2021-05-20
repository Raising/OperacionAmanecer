<template>
  <div class="ax-filter-form-category h-max-content">
    <ax-row class="filters-panel category-section">
      <div class="header">
        <div
          v-for="(category, index) in extraResource.content('categories')"
          v-bind:key="index"
          class="name pointer"
          @click="activeZone(index)"
          :class="{ active: index === active }"
        >
          <div v-if="index === 0" class="mr-1"><account-icon /></div>
          <div v-if="index === 1" class="mr-1"><house-icon /></div>
          <div v-if="index === 2" class="mr-1"><phone-icon /></div>

          {{ category.CategoryDescr }}
        </div>
      </div>
      <div class="field-group w-100">
        <div
          v-for="(category, index) in extraResource.content('categories')"
          v-bind:key="`${index}-${renderCount}`"
          class="field"
          :class="{ active: index === active }"
        >
          <ax-filter-form-by-category
            :resource="resource"
            :extraResource="extraResource"
            :category="category.CategoryId"
          />
        </div>
      </div>
    </ax-row>
  </div>
</template>

<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM } from '@COMMONS/constants';
import { customFieldTypeMap } from '@COMMONS/components/organism/ax-filter-form.vue';
import { filtersDefinitions, FilterConfig } from '@COMMONS/utils/conectivity/filter-description';

import AccountIcon from '@COMMONS/components/icons/24px-AX/Account.vue';
import PhoneIcon from '@COMMONS/components/icons/24px-AX/Phone.vue';
import HouseIcon from '@COMMONS/components/icons/24px-AX/House.vue';

export default Factory.component('ax-filter-form-category', {
  data() {
    return {
      active: 0,
      index: 0,
      renderCount: 0,
    };
  },
  props: ['resource', 'extraResource'],
  components: {
    AccountIcon,
    PhoneIcon,
    HouseIcon,
  },
  created: function() {
    this.bindExtraFilterResourceToFilters();
  },
  methods: {
    bindExtraFilterResourceToFilters: function() {
      this.extraResource.setOnFetch(() => {
        let currentFilters = this.extraResource.content('filters');
        if (currentFilters !== undefined) {
          this.resource.setFilters(currentFilters.map(this.customFieldToFilter));
        }
      });
      this.extraResource.isReady();
    },
    customFieldToFilter: function(filter: any): FilterConfig {
      let filterConfigDefinition = {
        categoryId: filter.CategoryId,
        fieldId: filter.FieldId,
        type: customFieldTypeMap[filter.FormatFieldType],
        value:
          (customFieldTypeMap[filter.FormatFieldType] === ENUM.FilterType.SELECT &&
            filter.DefaultValue === undefined) ||
          filter.DefaultValue === null
            ? ''
            : filter.DefaultValue !== null
            ? filter.DefaultValue
            : undefined,
        property: `${filter.FieldId}-${filter.CustomFieldName}`,
        renderParam: undefined,
        mandatory: filter.Mandatory,
      };

      if (filtersDefinitions[filterConfigDefinition.type].customFieldValueToComponentValue !== undefined) {
        filterConfigDefinition.renderParam = {
          // @ts-ignore
          ...filtersDefinitions[filterConfigDefinition.type].customFieldValueToComponentValue(filter),
        };
      }
      return filterConfigDefinition;
    },
    activeZone(index: any) {
      this.renderCount++;
      return (this.active = index);
    },
  },
});
</script>
