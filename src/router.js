import Vue from 'vue';
import Router from 'vue-router';
import InputFormat from './components/InputFormat.vue';
import Questions from './components/Questions.vue';
import freeFormat from './components/freeFormat.vue';

Vue.use(Router);

export default new Router ({
  routes: [
     {path: '/InputFormat', component: InputFormat}, 
     {path: '/Questions', component: Questions},
     {path: '/freeFormat', component: freeFormat},
  ]
})