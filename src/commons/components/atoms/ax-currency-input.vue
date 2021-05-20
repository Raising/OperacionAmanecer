<script lang="ts">
import Vue from 'vue';
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import { CurrencyInput } from 'vue-currency-input';
import BootstrapToAxesor from '../atoms/bootstrap-wrapper.vue';

Vue.component('currencyInput', CurrencyInput);

export default Factory.component(`ax-currency-input`, {
  extends: BootstrapToAxesor,
  data: () => ({
    component: `currency-input`,
    overrideAttrs: {
      locale: undefined,
    },
  }),
  beforeMount(this: VueView) {
    let currentLocale = navigator.languages ? navigator.languages[0] : '';
    if ((this.$attrs.locale !== undefined && this.$attrs.locale === 'es-ES') || this.$attrs.locale === 'es')
      this.overrideAttrs.locale = 'de-DE';
    else if (this.$attrs.locale === undefined && currentLocale === 'es-ES') this.overrideAttrs.locale = 'de-DE';
    else this.overrideAttrs.locale = this.$attrs.locale;
  },
});
</script>
