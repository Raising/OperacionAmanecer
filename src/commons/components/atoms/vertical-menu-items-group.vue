<template>
  <li class="nav-item vertical-menu-item block" :class="{ active: isMenuElementActive }" :id="id">
    <ax-row>
      <!-- Contenedor que contiene el icono, el enlace del menú y el botón para mostrar el contendor hijo -->
      <ax-col class="vertical-menu-item-parent-container clearfix">
        <div class="link vertical-menu-item-link" v-on:click="!menuElement.disabled ? onClick($event) : undefined">
          <span v-if="menuElement.icon" class="vertical-menu-icon-slot">
            <component v-bind:is="menuElement.icon" />
          </span>
          <span class="vertical-menu-text-slot" :class="{ 'slot-active': isMenuElementActive }">
            <!-- {{ isMenuElementDebug }} -->
            {{ $t(menuElement.name) }}
          </span>
        </div>
        <ax-badge variant="primary" v-if="menuElement.badge" v-bind:class="[isBackgroundBadge]">{{
          menuElement.badge()
        }}</ax-badge>

        <ax-button
          class="vertical-menu-button-toggle float-right"
          v-if="hasChildren() && !menuElement.staticShowChildren"
          v-b-toggle="toggleId"
          ><chevron-right-icon class="chevron-icon"
        /></ax-button>
      </ax-col>
    </ax-row>
    <!-- Collapsable que contiene los elementos (se genera de manera recursiva mientras haya elementos hijos) -->
    <ax-collapse
      v-if="hasChildren()"
      :visible="menuElement.staticShowChildren || isMenuElementActive"
      class="vertical-menu-item-childs-container"
      :id="toggleId"
    >
      <ul>
        <vertical-menu-items-group
          v-for="(menuElement, index) in menuElement.childrenLinkNodes.filter((el) => el.showInMenu)"
          :key="index"
          :id="childId + '-' + index"
          :menuElement="menuElement"
        />
      </ul>
    </ax-collapse>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import ChevronRightIcon from '@COMMONS/components/icons/24px-AX/ChevronRight.vue';

export default Factory.component('vertical-menu-items-group', {
  components: {
    ChevronRightIcon,
  },

  data() {
    return {};
  },
  mounted: function() {},
  computed: {
    // activeClass: function() {
    //   this.$store.getters.getRoute();
    //   return this.menuElement.isSelected === undefined ? '' : this.menuElement.isSelected() ? 'active' : '';
    // },
    // slotActiveClass: function() {
    //   this.$store.getters.getRoute();
    //   return this.menuElement.isSelected === undefined ? '' : this.menuElement.isSelected() ? 'slot-active' : '';
    // },
    isParentNodeOfActualRoute: function() {
      return this.menuElement.path === '' ? false : this.$route.path.includes(this.menuElement.path);
    },
    isBackgroundBadge: function() {
      return `${this.menuElement.badgeVariant}`;
    },
    isMenuElementSelected: function() {
      return this.menuElement.isSelected === undefined ? false : this.menuElement.isSelected();
    },
    isMenuElementInPath: function() {
      return this.menuElement.path === this.$route.path;
    },
    isMenuElementActive: function() {
      this.$store.getters.getRoute();
      return this.isMenuElementSelected || this.isMenuElementInPath || this.isParentNodeOfActualRoute;
    },
    isMenuElementDebug() {
      return `${this.isMenuElementSelected} || ${this.isMenuElementInPath} || ${this.isParentNodeOfActualRoute}`;
    },
    //Para evitar conflictos y generar siempre un id único para los 'collapses' se hace uso del campo computado al que se le concatena '-collapsable' a el id pasado por parámetro
    toggleId: function() {
      return `${this.id}-collapsable`;
    },
    //Funciona de igual forma que toggleId. Este campo computado se emplea como id del contenedor hijo llamado de forma recursiva
    childId: function() {
      return `${this.id}-child`;
    },
    onClick: function() {
      return this.menuElement.onClick !== undefined
        ? () => {
            this.menuElement.onClick();
            if (this.menuElement.path !== this.$route.path)
              this.$router.push(this.menuElement.path).catch((err: any) => {});
          }
        : () => {
            if (this.menuElement.path !== this.$route.path)
              this.$router.push(this.menuElement.path).catch((err: any) => {});
          };
    },
  },
  props: ['menuElement', 'id'],
  methods: {
    //Función que devuelve un booleano en función de si la propiedad menuElement cuenta con componentes hijos.
    hasChildren() {
      return this.menuElement.childrenLinkNodes !== undefined && this.menuElement.childrenLinkNodes.length > 0;
    },
  },
});
</script>
