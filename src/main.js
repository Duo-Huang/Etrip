import Vue from 'vue';
import VueI18n from 'vue-i18n'
import App from './App.vue';
import store from './store';
import router from './routers';
import getLanguage from './i18n/getLanguage';
import { SET_LOCALE } from './store/types';
import Http from './global/http';
import { BASE_URL } from './global/constants';

const language = getLanguage('locale');

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.prototype.$http = new Http({
  baseUrl: process.env.BASE_URL,
  timeout: 60000
});

store.dispatch(SET_LOCALE, language).then(() => {
  const i18n = new VueI18n({
    locale: store.state.locale.locale,
    messages: {
      [store.state.locale.locale]: store.state.locale.message
    }
  });
  new Vue({
    store,
    router,
    i18n,
    render: h => h(App)
  }).$mount('#app')
})



