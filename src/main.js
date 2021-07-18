import Vue from 'vue'
import App from './App.vue'
import InputFormat from './components/InputFormat.vue';
import Questions from './components/Questions.vue';
import AllData from './components/AllData.vue';
import FreeFormat from './components/FreeFormat.vue';
import router from './router';
import store from './store';



Vue.config.productionTip = true
Vue.component('InputFormat', InputFormat);
Vue.component('Questions', Questions );
Vue.component('FreeFormat', FreeFormat);
Vue.component('AllData', AllData);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
