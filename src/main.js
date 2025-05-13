import Vue from 'vue';
import App from './App.vue';
import router from './router'; // This MUST be the VueRouter instance
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter); // Register router globally

new Vue({
  router, // Must be the instance created by new VueRouter()
  render: h => h(App)
}).$mount('#app');
