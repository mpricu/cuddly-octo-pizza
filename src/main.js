import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('currency', function(value){
  return parseFloat(value).toFixed(2) + ' RON'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
