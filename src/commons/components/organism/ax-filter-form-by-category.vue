<script lang="ts">
import { CreateElement } from 'vue';
import { fullProperty } from '@COMMONS/utils/conectivity/resource';
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM } from '@COMMONS/constants';
import { customFieldTypeMap } from '@COMMONS/components/organism/ax-filter-form.vue';
import { filtersDefinitions, FilterConfig } from '@COMMONS/utils/conectivity/filter-description';

export default Factory.component('ax-filter-form-by-category', {
  render: function(createElement: any) {
    let filters = this.resource.filters;

    return createElement('div', { class: { 'ax-filter-form-by-category': true } }, [
      ...Object.keys(filters)
        .filter((filterKey: string) => {
          return this.category == filters[filterKey].config.categoryId;
        })
        .map((filterKey: string) => {
          let filter = filters[filterKey];
          return this.renderModule(createElement, filter);
        }),
      createElement(
        'ax-button',
        { on: { click: this.setFilters }, class: { 'category-search button-bottom-select mt-2': true } },
        this.$t('search'),
      ),
    ]);
  },
  data() {
    return {
      localFilters: this.resource.filters.$map((filter: fullProperty) => filter.config.value),
      searchClicked: false,
    };
  },
  props: ['resource', 'extraResource', 'category'],
  mounted: function() {},
  methods: {
    localGetterSetter: function(filter: fullProperty): fullProperty {
      return {
        ...filter,
        get: () => this.localFilters[filter.config.property],
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
        validate: () => {
          let validationResult = false;

          if (this.resource.filters[filter.config.property].config.type === ENUM.FilterType.PHONE) {
            validationResult =
              (this.resource.filters[filter.config.property].config.mandatory &&
                this.localFilters[filter.config.property] === undefined &&
                this.searchClicked) ||
              (this.resource.filters[filter.config.property].config.mandatory &&
                isNaN(this.localFilters[filter.config.property]) &&
                this.localFilters[filter.config.property] !== undefined);
          } else if (this.resource.filters[filter.config.property].config.type === ENUM.FilterType.SELECT) {
            validationResult = false;
          } else {
            validationResult =
              (this.resource.filters[filter.config.property].config.mandatory &&
                this.localFilters[filter.config.property] === undefined &&
                this.searchClicked) ||
              (this.resource.filters[filter.config.property].config.mandatory &&
                this.localFilters[filter.config.property] === '' &&
                this.localFilters[filter.config.property] !== undefined);
          }

          return validationResult;
        },
      };
    },
    renderModule: function(createElement: CreateElement, filter: fullProperty) {
      if (filter.definition !== undefined && filter.definition.render !== undefined) {
        let name = filter.config.property.split('-')[1];
        return createElement('lx-filter-form-layout', { props: { name: this.$t(name) } }, [
          filter.definition.render(createElement, this.localGetterSetter(filter)),
        ]);
      }
    },
    unSetPreviusFilters: function() {
      Object.keys(this.resource.filters)
        .filter((filterKey: string) => {
          return (
            this.resource.filters[filterKey].config.categoryId !== undefined &&
            this.category != this.resource.filters[filterKey].config.categoryId
          );
        })
        .forEach((filterKey: string) => {
          this.resource.filters[filterKey].set(undefined); //OJO!! El hecho de poner 'undefined' hace que .get() devuelva un Objeto.
        });
    },
    setFilters: function() {
      this.searchClicked = true;
      let filtersToSet = Object.keys(this.resource.filters).filter((filterKey: string) => {
        return this.category == this.resource.filters[filterKey].config.categoryId;
      });
      let filtersMandatoryToSet = filtersToSet.filter((filter: any) => this.resource.filters[filter].config.mandatory);
      let mandatoriesSetted = filtersMandatoryToSet.every((filter: any) =>
        this.resource.filters[filter].config.type === ENUM.FilterType.PHONE
          ? this.localFilters[filter] !== undefined && !isNaN(this.localFilters[filter])
          : this.resource.filters[filter].config.type === ENUM.FilterType.SELECT
          ? this.localFilters[filter] !== undefined
          : this.localFilters[filter] !== undefined && this.localFilters[filter] !== '',
      );

      if (mandatoriesSetted) {
        this.unSetPreviusFilters();
        filtersToSet.forEach((filterKey: string) => {
          this.resource.filters[filterKey].set(this.localFilters[filterKey]);
        });
        this.resource.filters.categoryId.set(this.category);
        this.resource.filters.countryIso.set(this.extraResource.filters.countryIso.get());
      }
    },
  },
});
</script>
