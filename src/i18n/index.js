

import Vue from 'vue';
import VueI18n from 'vue-i18n'
import getLanguage from './getLanguage';

Vue.use(VueI18n);

const language = getLanguage('locale');

const i18n = new VueI18n({
    locale: language,
    messages: {
        [language]: require(`./${language}`).default
    }
});
console.log(i18n.t('global.loginTip'));
export default i18n;

