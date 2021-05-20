<template>
  <ax-row class="h-100">
    <ax-col class="h-100">
      <div class="marco">
        <slot name="content" />
      </div>
    </ax-col>
  </ax-row>
</template>

<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-page-content', {
  name: 'PageContentLayout',
});
</script>
