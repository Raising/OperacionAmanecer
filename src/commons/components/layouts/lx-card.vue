<template>
  <lx-empty>
    <ax-row class="lx-card" :class="{ big: big === true }">
      <b-card no-body>
        <b-card-header header-tag="nav" v-if="hasTitle || hasHeader || hasExtraSlot">
          <ax-row class="flex-total" v-if="!big">
            <ax-col class="title-lx-card text-ellipsis">
              <slot name="title" />
            </ax-col>
            <ax-col sm="auto" class="h-100" v-if="hasHeader">
              <b-nav card-header tabs justified>
                <slot name="header" />
              </b-nav>
            </ax-col>
            <ax-col sm="auto" v-if="hasExtraSlot">
              <slot name="extraSlot" />
            </ax-col>
          </ax-row>
          <ax-row v-else class="w-100">
            <ax-col>
              <ax-row>
                <ax-col class="title-lx-card text-ellipsis pb-1">
                  <slot name="title" />
                </ax-col>
              </ax-row>
              <ax-row class="justify-content-flex-end">
                <ax-col sm="auto" class="h-100" v-if="hasHeader">
                  <b-nav card-header tabs justified>
                    <slot name="header" />
                  </b-nav>
                </ax-col>
                <ax-col sm="auto" v-if="hasExtraSlot">
                  <slot name="extraSlot" />
                </ax-col>
              </ax-row>
            </ax-col>
          </ax-row>
        </b-card-header>

        <b-card-body>
          <ax-col class="h-100">
            <slot name="body" />
          </ax-col>
        </b-card-body>
      </b-card>
    </ax-row>
  </lx-empty>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';

export default Factory.component('lx-card', {
  props: {
    big: { type: Boolean, default: false },
  },
  computed: {
    hasTitle() {
      return !!this.$slots.title;
    },
    hasExtraSlot() {
      return !!this.$slots.extraSlot;
    },
    hasHeader() {
      return !!this.$slots.header;
    },
  },
});
</script>
