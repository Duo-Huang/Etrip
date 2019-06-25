import Vue from 'vue';
import VueI18n from 'vue-i18n'
import App from './App.vue';
import store from './store';
import router from './routers';
import getLanguage from './i18n/getLanguage';
import { SET_LOCALE } from './store/types';

const language = getLanguage('locale');

Vue.config.productionTip = false;
Vue.use(VueI18n);

store.dispatch(SET_LOCALE, language).then(() => {
  console.log(store.state.locale.locale)
  console.log(store.state.locale.message)
  const i18n = new VueI18n({
    locale: store.state.locale.locale,
    messages: {
      [store.state.locale.locale]: {
        language: store.state.locale.message
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



