import Vue from 'vue';
import Router from 'vue-router';
import InputFormat from './components/InputFormat.vue';
import Questions from './components/Questions.vue';
import FreeFormat from './components/FreeFormat.vue';
import AllData from './components/AllData.vue';

Vue.use(Router);

export default new Router ({
  routes: [
     {path: '/InputFormat', component: InputFormat}, 
     {path: '/Questions', component: Questions},
     {path: '/FreeFormat', component: FreeFormat},
     {path: '/AllData', component: AllData},
  ]
})