import Vue from 'vue';
import VueI18n from 'vue-i18n'
import App from './App.vue';
import store from './store';
import router from './routers';
import getLanguage from './i18n/getLanguage';
import { SET_LOCALE } from './store/types';
import Http from './global/http';
import * as api from './global/http/api';

const language = getLanguage('locale');

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.prototype.$http = new Http({
  baseUrl: process.env.VUE_APP_BASE_URL,
  timeout: 60000
});
Vue.prototype.$api = api;

store.dispatch(SET_LOCALE, language).then(() => {
  const i18n = new VueI18n({
    locale: store.state.locale.locale,
    messages: {
      [store.state.locale.locale]: {
        lang: store.state.locale.message
      }
    }
  });
  new Vue({
    store,
    router,
    i18n,
    render: h => h(App)
  }).$mount('#app')
})



