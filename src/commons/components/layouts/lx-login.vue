<template>
  <lx-empty>
    <div class="login">
      <div class="left-login">
        <div class="background-login-content">
          <BackgroundLogin />
        </div>
        <div class="content-title-icon-login">
          <div class="toolbox-icon">
            <ToolboxIcon />
          </div>
          <div class="d-flex flex-column justify-content-around">
            <p class="title-login">{{ title }}</p>
            <p class="subtitle-login">{{ subtitle }}</p>
          </div>
        </div>
      </div>
      <div class="rigth-login">
        <div class="top-rigth-login">
          <p class="title-top-rigth-login">{{ headerTitle }}</p>
          <p class="subtitle-top-rigth-login">{{ headerSubtitle }}</p>
          <lx-login-msg
            :text="msgText"
            :color="msgColor"
            class="lx-login-msg"
            :style="{ opacity: showMsg ? '100%' : '0%' }"
          />
        </div>
        <div class="center-rigth-login">
          <slot />
        </div>
      </div>
    </div>
  </lx-empty>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import LxLoginErrorMsg from './lx-loginMsg.vue';
import ToolboxIcon from '@COMMONS/components/icons/ToolboxIcon.vue';
import BackgroundLogin from '@COMMONS/components/icons/BackgroundLogin.vue';

export default Factory.component('lx-login', {
  computed: {},
  props: ['msgText', 'msgColor', 'showMsg', 'title', 'subtitle', 'headerTitle', 'headerSubtitle'],
  components: { LxLoginErrorMsg, ToolboxIcon, BackgroundLogin },
});
</script>
