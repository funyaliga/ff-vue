import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        count: 0,
        login: 0,
        logout: 0,
        token: JSON.parse(localStorage.getItem('x-auth-token')) || {},
        secret: JSON.parse(localStorage.getItem('x-auth-secret')) || {},
        login: localStorage.getItem('x-auth-secret') && localStorage.getItem('x-auth-token') ? true : false,
        userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
        timeline: {},
    },
    getters,
    actions,
    mutations,
});

export default store;