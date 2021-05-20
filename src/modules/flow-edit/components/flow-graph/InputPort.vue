<template>
  <div class="port input"> {{ port.name }} ({{ port.valueType }}) </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@COMMONS/utils/main/router';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import { ENUM, RES } from '@COMMONS/constants';
import { ACT } from '@FLOWEDIT/constants';

export default Factory.component('InputPort', {
  data() {
    return {};
  },
  props: ['port'],
  components: {},
  computed: {},
  methods: {},
  mounted() {},
});
</script>
