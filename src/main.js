import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './routers';
import i18n from './i18n';
import Http from './global/http';
import { BASE_URL } from './global/constants';

Vue.config.productionTip = false;
Vue.prototype.$http = new Http({
  baseUrl: BASE_URL,
  timeout: 60000
});

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')



