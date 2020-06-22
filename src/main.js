import Vue from 'vue';
import App from './App.vue';

import router from './components/router';
import store from './components/store';
import pinDirective from './components/shared/pin-directive';
import currencyFilter from './components/shared/currency-filter';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirective);
Vue.filter('currency', currencyFilter);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
