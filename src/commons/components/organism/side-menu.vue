<template>
  <ax-nav class="side-menu-container" vertical>
    <!-- String para mostrar en la cabecera del menú a modo de título -->
    <!--<div class="menu-header">
      <div v-if="title">{{ title }}</div>
    </div>-->
    <!-- 
      -Se llama al módulo vertical-menu-items-group para poder renderizar cada grupo de elementos del menú.
      -Un grupo de elementos es un wrapper de un 'div' a modo cabecera que contiene toda la información de los elementos del menú y de un wrapper a modo de 'collapsable'
      que muestra u oculta los enlaces hijos.
      -Se crea un vertical-menu-items-group por cada elemento contenido en 'collection' dentro de los menuElements
    -->
    <vertical-menu-items-group
      v-for="(menuElement, index) in menuElements.collection.filter((el) => el.showInMenu)"
      :key="index"
      :id="id + '-' + index"
      :menuElement="menuElement"
    />
  </ax-nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('side-menu', {
  data() {
    return {};
  },
  mounted: function() {},
  computed: {},
  props: ['menuElements', 'id', 'title'],
  methods: {},
});
</script>
