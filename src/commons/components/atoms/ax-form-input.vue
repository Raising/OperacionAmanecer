<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';
import BootstrapWrapper from './bootstrap-wrapper.vue';

// const defaultProps = {
//   centered: true,
//   noCloseOnBackdrop: true,
//   noCloseOnEsc: true,
// };

const deformatMoney = (money: string) => {
  return money.substring(8);
};

const formatMoney = (money: number) => 'formated' + money;

export default Factory.component('ax-form-input', {
  extends: BootstrapWrapper,
  name: 'ax-form-input',
  data: function() {
    return {
      component: 'b-form-input',
      valueFormat: this.$attrs.type === 'money' ? formatMoney : undefined,
      valueUnFormat: this.$attrs.type === 'money' ? deformatMoney : undefined,
      defaultAttrs: {},
    };
  },
});
</script>
