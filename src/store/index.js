import Vue from 'vue';
import Vuex from 'vuex';
import { menuModule } from './menu';
import { snackBar } from './snackbar';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        snackbarModule: snackBar,
        menuModule: menuModule
    }
});
