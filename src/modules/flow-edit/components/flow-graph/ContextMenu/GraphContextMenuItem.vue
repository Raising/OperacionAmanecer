<template>
  <div class=" context-menu-item" @click="clickEvent">
    <div class="name">{{ name }}</div>
    <div v-if="hasChildren" class="add-to-path-icon float-right">
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';
import { ACT } from '@FLOWEDIT/constants';

export default Factory.component('GraphContextMenuItem', {
  data() {
    return {
      menuPath: [],
    };
  },
  props: ['item'],
  components: {},
  computed: {
    name: function(this: VueView) {
      return this.item.name;
    },
    hasChildren: function() {
      return this.item.children !== undefined;
    },
  },
  methods: {
    clickEvent(this: VueView) {
      this.$emit('click');
    },
  },
  mounted() {},
});
</script>
