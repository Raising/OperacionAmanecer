<template>
  <div class="ax-paginacion">
    <ax-pagination
      v-if="resourcesAreReady"
      :align="align"
      :perPage="elementsPerPage"
      v-model="gridResource.refProps.page"
      :total-rows="getNumTotalEntidades"
      aria-controls="my-table"
    >
    </ax-pagination>
    <b-select :options="selectOptions" :value="elementsPerPage" @change="setElementsPerPage" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';

import { ENUM } from '@COMMONS/constants';
import Resource from '@COMMONS/utils/conectivity/resource';

export default Factory.component('ax-paginacion', {
  /**
   * @name ax-paginacion
   * @description Componente que renderiza un table de boostrap.
   * @prop { Object } resource Recibe un resource como parametro.
   * @prop { string } title titulo del componente
   * @param {  Object } resourcesLocal copia local de resource
   * //EJEMPLO USO:
   * align: 'fill', 'center','left' , 'rigth'
   * @see https://bootstrap-vue.js.org/docs/components/pagination/
   */

  data() {
    return {
      selected: undefined,
      lastClickedPage: 1,
      selectOptions: [
        { value: 25, text: '25' },
        { value: 50, text: '50' },
        { value: 100, text: '100' },
      ],
    };
  },

  resource: {
    gridConfiguration: {
      type: ENUM.CommonsResource.GRID_CONFIGURATION,
      //singleton: true,
      refProps: [
        {
          property: 'gridCode',
          value: (component: any) => {
            return component.gridCode;
          },
        },
      ],
    },
  },
  refProps: [{ name: 'localInitLoadConfig', value: {} }],
  props: ['title', 'gridResource', 'align', 'gridCode'],
  methods: {
    getConfiguration(this: VueView) {
      if (this.resource.gridConfiguration.isReady()) {
        this.refProp.localInitLoadConfig.set(this.resource.gridConfiguration.content());
      }
    },

    updateGridConfig(this: VueView, value: string) {
      this.resource.gridConfiguration.update(this.refProp.localInitLoadConfig.get()).then(() => {
        this.gridResource.refProps.elementsPerPage.set(value);
      });
    },
    setElementsPerPage(this: VueView, value: string) {
      this.refProp.localInitLoadConfig.set({ ElementsPerPage: value }, false);
      this.updateGridConfig(value);
    },
  },
  computed: {
    resourcesAreReady(this: VueView) {
      return this.resource.gridConfiguration.isReady() && this.gridResource.isReady();
    },
    getNumTotalEntidades(this: VueView) {
      return this.gridResource.content().totalElement === undefined
        ? this.gridResource.content().config
          ? this.gridResource.content().config.TotalElements
          : this.gridResource.content('Grid').TotalElements
        : this.gridResource.content().totalElement;
    },

    elementsPerPage(this: VueView) {
      let numElementos: number = this.refProp.localInitLoadConfig.get('ElementsPerPage');
      let findOptionNumPag = this.selectOptions
        ? this.selectOptions.find((option: any) => option.text == numElementos)
        : 1;
      this.selected = findOptionNumPag ? findOptionNumPag.value : this.selectOptions[0].value;
      return numElementos || this.selected;
    },
  },
  beforeMount(this: VueView) {
    this.resource.gridConfiguration.setOnFetch(() => {
      this.getConfiguration();
    });
  },
});
</script>
