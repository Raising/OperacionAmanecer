<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import TableTree from 'vue-ads-table-tree';
import BootstrapToAxesor from '../atoms/bootstrap-wrapper.vue';

Vue.component('TableTree', TableTree);

export default Factory.component(`ax-table-tree`, {
  extends: BootstrapToAxesor,
  data: () => ({
    component: `TableTree`,
  }),
});
</script>
