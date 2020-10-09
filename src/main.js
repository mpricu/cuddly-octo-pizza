import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';

Vue.config.productionTip = false;

Vue.filter('currency', function(value) {
    return parseFloat(value).toFixed(2) + ' RON';
});

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app');
