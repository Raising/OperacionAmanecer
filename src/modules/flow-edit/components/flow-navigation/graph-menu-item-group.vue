<template>
  <li class="nav-item vertical-menu-item block" :class="{ active: isMenuElementActive }" :id="id">
    <ax-row>
      <!-- Contenedor que contiene el icono, el enlace del menú y el botón para mostrar el contendor hijo -->
      <ax-col class="vertical-menu-item-parent-container clearfix">
        <div class="vertical-menu-button-toggle float-left"
          ><font-awesome-icon v-if="hasChildren()" :icon="['fas', 'chevron-down']" />
        </div>
        <div class="link vertical-menu-item-link" v-on:click="onClick($event)" v-b-toggle="toggleId">
          <span class="vertical-menu-icon-slot">
            <font-awesome-icon :icon="['fas', hasChildren() ? 'folder' : 'project-diagram']" />
          </span>
          <span class="vertical-menu-text-slot" :class="{ 'slot-active': isMenuElementActive }">
            {{ menuElement.name }}
          </span>
        </div>
        <div v-if="!hasChildren()" class="vertical-menu-add-to-graph-slot">
          <font-awesome-icon :icon="['fas', 'arrow-circle-right']" />
        </div>
        <ax-badge variant="primary" v-if="menuElement.badge" v-bind:class="[isBackgroundBadge]">{{
          menuElement.badge()
        }}</ax-badge>
      </ax-col>
    </ax-row>
    <!-- Collapsable que contiene los elementos (se genera de manera recursiva mientras haya elementos hijos) -->
    <ax-collapse
      v-if="hasChildren()"
      :visible="isMenuElementActive"
      class="vertical-menu-item-childs-container"
      :id="toggleId"
    >
      <ul>
        <graph-menu-item-group
          v-for="(menuElement, index) in childrens"
          :key="index"
          :id="index"
          :menuElement="menuElement"
        />
      </ul>
    </ax-collapse>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import ChevronDownIcon from '@COMMONS/components/icons/16px-AX/ChevronDown.vue';

export default Factory.component('graph-menu-item-group', {
  components: {
    ChevronDownIcon,
  },

  data() {
    return {};
  },
  mounted: function() {},
  computed: {
    childrens: function() {
      if (this.menuElement.children) {
        return this.menuElement.children;
      }
      return [];
    },
    isParentNodeOfActualRoute: function() {
      return this.menuElement.path === '' ? false : this.$route.path.includes(this.menuElement.path);
    },
    isBackgroundBadge: function() {
      return `${this.menuElement.badgeVariant}`;
    },

    isMenuElementInPath: function() {
      return this.menuElement.path === this.$route.path;
    },
    isMenuElementActive: function() {
      if (this.menuElement.path !== undefined) {
        let breakPath = this.menuElement.path.split('.');
        let gameId = breakPath.shift();
        let directory = breakPath.join('.');
        return (
          this.$route.params.gameId === gameId &&
          this.$route.params.flowGraphId &&
          this.$route.params.flowGraphId.startsWith(directory)
        );
      } else {
        return this.$route.params.flowGraphId === this.menuElement.id;
      }
    },

    //Para evitar conflictos y generar siempre un id único para los 'collapses' se hace uso del campo computado al que se le concatena '-collapsable' a el id pasado por parámetro
    toggleId: function() {
      return `${this.id}-collapsable`;
    },
    //Funciona de igual forma que toggleId. Este campo computado se emplea como id del contenedor hijo llamado de forma recursiva
    childId: function() {
      return `${this.id}-child`;
    },
    onClick: function(this: VueView) {
      if (this.menuElement.path === undefined) {
        return () => {
          if (this.menuElement.id !== this.$route.params.flowGraphId)
            this.$router
              .push(`/home/flowedit/${this.$route.params.gameId}/flowgraph/${this.menuElement.id}`)
              .catch((err: any) => {});
        };
      } else {
        return () => {};
      }
    },
  },
  props: ['menuElement', 'id'],
  methods: {
    //Función que devuelve un booleano en función de si la propiedad menuElement cuenta con componentes hijos.
    hasChildren() {
      return this.childrens.length > 0;
    },
  },
});
</script>
