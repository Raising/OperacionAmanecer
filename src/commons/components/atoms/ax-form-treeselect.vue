<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import TreeSelect from '@riophae/vue-treeselect';
import BootstrapToAxesor from '../atoms/bootstrap-wrapper.vue';

Vue.component('treeselect', TreeSelect);

export default Factory.component(`ax-form-treeselect`, {
  extends: BootstrapToAxesor,
  data: () => ({
    component: `treeselect`,
    optionsEnumMap: { key: 'id', text: 'label' },
  }),
});
</script>
