import '@COMMONS/utils/main/js-enchancement';
import Vue from 'vue';
import App from './App.vue';
import router from '@COMMONS/utils/main/router';
import store from '@COMMONS/utils/main/store';
import { sync } from 'vuex-router-sync';
import BootstrapVue from 'bootstrap-vue';
import i18n from '@COMMONS/utils/form/i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = true;
Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const initializedStore = store(true);
sync(initializedStore, router);

new Vue({
  router,
  store: initializedStore,
  i18n,
  render: function(h) {
    return h(App);
  },
}).$mount('#app');
