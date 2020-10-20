const state = {
    snackbar: {
        show: false,
        message: `It's alive`,
        timeout: 2000,
        color: 'success'
    }
};

const actions = {
    showSuccess({ commit }, payload) {
        commit('setSuccessSnackBar', payload);
    },
    addToOrder({ commit }, payload) {
        commit('setSuccessSnackBar', payload);
    },
    showError({ commit }, error) {
        commit('showError', error.message);
    },
    showWarning({ commit }, message) {
        commit('showWarning', message);
    },
    hide({ commit }) {
        commit('hide');
    }
};

const mutations = {
    setSuccessSnackBar(state, payload) {
        state.snackbar = {
            ...state.snackbar,
            message: payload.message,
            color: 'success',
            timeout: 1500,
            show: true
        };
    },
    showWarning(state, message) {
        state.snackbar = {
            ...state.snackbar,
            message,
            color: 'warning',
            timeout: 3000,
            show: true
        };
    },
    showError(state, message) {
        state.snackbar = {
            ...state.snackbar,
            message,
            color: 'warning',
            timeout: 0,
            show: true
        };
    },

    hide(state) {
        state.snackBar = {
            ...state.snackbar,
            message: '',
            color: 'success',
            timeout: 2000,
            show: false
        };
    }
};

const getters = {};

export const snackBar = {
    state,
    actions,
    mutations,
    getters,
    namespaced: true
};
