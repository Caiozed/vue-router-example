
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'bulma';

import routes from './routes/routes';

const router = new VueRouter({
  routes, // short for `routes: routes`
})

Vue.use(VueRouter);

new Vue({
  /**
   * Bind the Vue instance to the HTML.
   */
  el: '#app',
  router,
  render: h => h(App),
});
