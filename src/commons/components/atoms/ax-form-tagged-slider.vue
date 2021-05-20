<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import VueSlider from 'vue-slider-component';
import BootstrapToAxesor from '../atoms/bootstrap-wrapper.vue';

Vue.component('VueSlider', VueSlider);

export default Factory.component(`ax-form-tagged-slider`, {
  extends: BootstrapToAxesor,
  data: () => ({
    component: `VueSlider`,
    overrideListeners: ({ context, vmodelIsGetterSeter }: { context: any; vmodelIsGetterSeter: boolean }) => {
      //IMPORTANTE: Retornar un json con el listener
      return {
        change: function(newVal: any) {
          vmodelIsGetterSeter ? context.$attrs.value.set(newVal) : context.$emit('input', newVal);
        },
      };
    },
  }),
  beforeMount() {},
  mounted() {},
});
</script>
