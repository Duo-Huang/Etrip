import * as types from '../types';

const state = {
    locale: 'en',
    message: {}
}

const mutations = {
    [types.SET_LOCALE](state, payload) {
        state.locale = payload.locale;
        state.message = payload.message;
    }
}

const actions = {
    async [types.SET_LOCALE]({ commit }, locale) {
        commit(types.SET_LOCALE, { locale, message: await getMessages(locale) });
    }
}

const getMessages = (locale) => {
    return new Promise((resolve, reject) => {
        setMessages(locale, (msg) => {
            resolve(msg);
        }, reject);
    });
}

const setMessages = (locale, callback, errhandle) => {
    let message;
    require.ensure([], (require) => {
        switch (locale) {
            case 'zh':
                message = require('../../i18n/zh');
                break;
            case 'en':
                message = require('../../i18n/en');
                break;
            default:
                message = require('../../i18n/zh');
        }
        callback(message.default);
    }, err => { errhandle(err) }, 'locale');
}

export default { state, mutations, actions }