import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import login from './modules/login';
import locale from './modules/locale';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    login,
    locale
  },
  plugins: process.env.NODE_ENV === 'production' ? [] : [createLogger()]
})
