<template>
  <div class="body-lock-man">
    <img class="lock-man" src="/img/layout/lock-man-without-arm.png" />
    <img class="head-lock-man" src="/img/layout/head-lock-man.png" />
    <!-- <img class="arm-lock-man" src="/img/layout/arm-lock-man.png" /> -->
    <img class="arm-lock-man" src="/img/layout/arm-man.png" />

    <div class="lock">
      <lock-icon />
      <lock-open-icon />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import LockIcon from '@COMMONS/components/icons/24px-AX/Lock.vue';
import LockOpenIcon from '@COMMONS/components/icons/24px-AX/LockOpen.vue';

export default Factory.component('ax-move-man', {
  data() {
    return {};
  },
  computed: {},
  components: {
    LockIcon,
    LockOpenIcon,
  },
});
</script>
