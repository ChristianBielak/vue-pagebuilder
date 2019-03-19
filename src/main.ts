import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import {i18n} from "@/i18n/i18n";

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app');
