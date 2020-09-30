import Vue from 'vue';
import Vuex from 'vuex';

import { snackBar } from './snackbar';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        snackbarModule: snackBar
    }
});
