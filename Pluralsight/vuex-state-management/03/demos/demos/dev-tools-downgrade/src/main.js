import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import routes from './routes';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
