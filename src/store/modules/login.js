import * as types from '../types';

const state = {
    isLogin: false,
    userInfo: {
        id: '',
        name: '',
        avatar: {
            small: '',
            middle: '',
            large: ''
        }
    }
}

const mutations = {
    [types.SET_USER_INFO](state, payload) {
        state.isLogin = true;
        state.userInfo = { ...state.userInfo, ...payload}
    }
}

const actions = {
    async [types.LOGIN]() {
        // TODO: AJAX
    }
}

export default { state, mutations, actions }
