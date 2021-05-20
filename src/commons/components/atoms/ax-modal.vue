<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';
import BootstrapWrapper from './bootstrap-wrapper.vue';

const defaultProps = {
  centered: true,
  noCloseOnBackdrop: true,
  noCloseOnEsc: true,
};

export default Factory.component('ax-modal', {
  extends: BootstrapWrapper,
  name: 'ax-modal',
  data: () => ({
    component: 'b-modal',
    defaultProps,
    defaultAttrs: {},
  }),
});

export { defaultProps };
</script>
