<script lang="ts">
import Vue, { CreateElement } from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import Resource, { fullProperty } from '@COMMONS/utils/conectivity/resource';
import { resourceConfig } from '@COMMONS/utils/conectivity/resource';
import { ENUM, RES } from '@COMMONS/constants';
import { filtersDefinitions, customField, FilterConfig } from '@COMMONS/utils/conectivity/filter-description';
import { customFieldType } from '@COMMONS/definitions/enums/enum-customFieldsType';

export const customFieldTypeMap: {
  [index: number]: ENUM.FilterType;
} = {
  1: ENUM.FilterType.NUMERIC,
  2: ENUM.FilterType.TEXT,
  3: ENUM.FilterType.TREESELECT,
  4: ENUM.FilterType.DATE,
  5: ENUM.FilterType.SELECT,
  6: ENUM.FilterType.PHONE,
};

export default Factory.component('ax-filter-form', {
  render: function(createElement: any) {
    let filters = this.resource.filters;
    //Generación del rootElement por imposición de VUE
    return createElement('div', { class: { 'ax-filter-form-category': true } }, [
      createElement('div', { class: { row: true } }, [
        createElement('div', { class: { col: true } }, [
          createElement('div', { class: { 'row header-treeselect p-2': true } }, [
            createElement('h6', [this.$t('filters')]),
            createElement('div', { class: { links: true } }, this.$t('field'), this.$slots.links),
          ]),
        ]),
      ]),
      createElement(
        'div',
        {
          class: {
            clearfix: true,
            ['itemsPerRow-' + this.itemsPerRow]: this.itemsPerRow !== undefined,
            'filters-components': true,
          },
        },
        [
          ...Object.keys(filters)
            .filter((filterName: string) => this.omitFilters.indexOf(filterName) === -1)
            .map((filterKey: string) => {
              let filter = filters[filterKey];
              return this.renderModule(createElement, filter);
            }),
        ],
      ),
      createElement('div', { class: { 'button-bottom-select': true } }, [
        this.requireSubmit === false
          ? null
          : createElement(
              'div',
              {
                on: {
                  click: this.setFilters,
                },
              },
              this.$t('filter'),
            ),
      ]),
    ]);
  },
  data() {
    return {
      localFilters: this.resource.filters
        .$filter((filter: fullProperty, filterName: string) => this.omitFilters.indexOf(filterName) === -1)
        .$map((filter: fullProperty) => filter.config.value),
    };
  },
  mounted: function() {
    if (this.extraFilterResource) this.bindExtraFilterResourceToFilters();
    this.resource.setOnFilterReset(
      () =>
        (this.localFilters = this.resource.filters
          .$filter((filter: fullProperty, filterName: string) => this.omitFilters.indexOf(filterName) === -1)
          .$map((filter: fullProperty) => filter.config.value)),
    );
  },
  resources: {},
  //props: ['resource', 'extraFilterResource', 'itemsPerRow', 'requireSubmit', {}],
  props: {
    resource: {
      type: Resource,
    },
    extraFilterResource: {
      type: Object,
    },
    itemsPerRow: {
      type: [String, Number],
    },
    requireSubmit: {
      type: [String, Boolean],
    },
    filterFlag: {
      type: String,
      default: 'NoFilter',
    },
    omitFilters: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    bindExtraFilterResourceToFilters: function() {
      this.extraFilterResource.setOnFetch(() => {
        this.resource.setFilters(
          this.extraFilterResource
            .content()
            .filter((customField: any) => customField[this.filterFlag] === true)
            .map(this.customFieldToFilter),
        );
      });
      this.extraFilterResource.isReady();
    },
    customFieldToFilter: function(filter: customField): FilterConfig {
      let filterConfigDefinition = {
        type: customFieldTypeMap[filter.FormatFieldType],
        value: filter.DefaultValue !== null ? filter.DefaultValue : undefined,
        property: filter.CustomFieldName,
        renderParam: undefined,
        customField: filter,
      };

      if (filtersDefinitions[filterConfigDefinition.type].customFieldValueToComponentValue !== undefined) {
        // @ts-ignore
        filterConfigDefinition.renderParam = filtersDefinitions[
          filterConfigDefinition.type
        ].customFieldValueToComponentValue(filter);
      }
      return filterConfigDefinition;
    },

    renderModule: function(createElement: CreateElement, filter: fullProperty) {
      if (filter.definition !== undefined && filter.definition.render !== undefined) {
        let valueToUse = this.requireSubmit === false ? filter : this.localGetterSetter(filter);
        //para poder poner como label algo que no sea la propiedad se puede poner label en el renderparam.
        let label =
          valueToUse.config.$getPropertyByPath('parsedRenderParam.label') ||
          valueToUse.config.$getPropertyByPath('renderParam.label') ||
          filter.config.property;
        return createElement('lx-filter-form-layout', { props: { name: label } }, [
          filter.definition.render(
            createElement,
            //filter,
            valueToUse,
          ),
        ]);
        // return filter.definition.render(
        //   createElement,
        //   //filter,
        //   this.requireSubmit === false ? filter : this.localGetterSetter(filter),
        // ); //por defecto se requiere el submit
      }
    },
    localGetterSetter: function(filter: fullProperty): fullProperty {
      return {
        ...filter,
        get: (path = '') => this.localFilters.$getPropertyByPath(filter.config.property + (path ? '.' + path : '')),
        set: (newValue: any, overwrite: boolean = true) => {
          if (!overwrite) {
            let currentValue = this.localFilters[filter.config.property];
            if (typeof currentValue === 'object' && typeof newValue === 'object') {
              newValue = { ...currentValue, ...newValue };
            }
          }
          this.localFilters[filter.config.property] = newValue;
          this.onSetCallback ? this.onSetCallback.map((callBack: Function) => callBack()) : '';
        },
      };
    },
    setFilters: function() {
      Object.keys(this.localFilters).forEach((filterKey: string) => {
        this.resource.filters[filterKey].set(this.localFilters[filterKey]);
      });
    },
  },
});
</script>
