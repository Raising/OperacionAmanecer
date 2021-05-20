<template>
  <ax-container>
    <div class="loading" v-if="showwaiting">
      <div class="modal-backdrop" />
      <ax-spinner class="modal" label="Loading..." variant="success" />
    </div>
    <ax-modal
      :id="'modalEditedStatus'"
      :visible="showModalEditedStatus"
      @ok="exitWithoutSAved"
      @cancel="cleanViewEditedStatus"
      @close="cleanViewEditedStatus"
      size="xs"
    >
      <p class="my-4">¿Desea abandonar la sección actual Sin Guardar?</p>
    </ax-modal>
  </ax-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import { ACT } from '@COMMONS/constants';
import router from '@COMMONS/utils/main/router';

export default Factory.component('navigation-sentinel', {
  data() {
    return {};
  },
  computed: {
    showwaiting: function(): boolean {
      return this.$store.getters.getNavigationWait();
    },
    showModalEditedStatus: function(): boolean {
      return this.$store.getters.getShowWarningWS();
    },
    currentViewName: function(): boolean {
      return this.$store.getters.getcurrentView();
    },
    currentPathTo: function(): boolean {
      return this.$store.getters.getPathToGo();
    },
  },
  props: [],
  methods: {
    exitWithoutSAved: function() {
      this.$store.dispatch(ACT.Navigation.ViewEditedOff, this.currentViewName);
      router.push(this.currentPathTo);
      this.cleanViewEditedStatus();
    },
    cleanViewEditedStatus: function() {
      this.$bvModal.hide('modalEditedStatus');
      this.$store.dispatch(ACT.Navigation.Change_WarningWS, {
        currentView: '',
        pathto: '',
        showModal: false,
      });
    },
  },
  mounted: function() {},
  updated: function() {},
});
</script>
