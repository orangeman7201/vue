import Vue from 'vue'
import App from './App.vue'
import InputFormat from './components/InputFormat.vue';
import Questions from './components/Questions.vue';
import FreeFormat from './components/FreeFormat.vue';
import router from './router';



Vue.config.productionTip = true
Vue.component('InputFormat', InputFormat);
Vue.component('Questions', Questions );
Vue.component('FreeFormat', FreeFormat);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
