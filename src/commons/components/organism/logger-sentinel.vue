<template>
  <div class="d-none">{{ errorLogList + serverLogList }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import { ErrorLogEntry, ServerLogEntry } from '@COMMONS/store/logger/store-logger';
import { ACT } from '@COMMONS/constants';

export default Factory.component('logger-sentinel', {
  data() {
    return {};
  },
  mounted: function() {},
  computed: {
    errorLogList: function(): ErrorLogEntry[] {
      return this.$store.getters.getNotDisplayedErrorLogs();
    },
    serverLogList: function(): ServerLogEntry[] {
      return this.$store.getters.getNotDisplayedServerLogs();
    },
  },
  props: [],
  methods: {},
  updated: function() {
    if (process.env.VUE_APP_NAME == 'DEV') {
      if (this.errorLogList.length > 0) {
        this.errorLogList.map((entry: ErrorLogEntry) => {
          this.$bvToast.toast(entry.error.message, {
            title: entry.type,
            // href: 'enviar Informe',
            autoHideDelay: 10000,
            variant: 'danger',
          });
        });
        this.$store.dispatch(ACT.Logger.CleanErrorsLog);
      }
      if (this.serverLogList.length > 0) {
        this.serverLogList.map((entry: ServerLogEntry) =>
          this.$bvToast.toast('' /*entry.type*/, {
            title: `[${entry.verb}] ${entry.resourceId}`.toUpperCase(),
            toaster: 'b-toaster-bottom-right',
            autoHideDelay: 2000,
            variant: 'info',
          }),
        );
        this.$store.dispatch(ACT.Logger.CleanServerLog);
      }
    }
  },
});
</script>
