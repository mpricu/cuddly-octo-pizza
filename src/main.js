import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.filter('currency', function(value) {
    return parseFloat(value).toFixed(2) + ' RON';
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
