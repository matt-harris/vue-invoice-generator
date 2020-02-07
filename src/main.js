// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate';

import App from './App';

Vue.use(VeeValidate);

// Create global filter
Vue.filter('money', value => `${value.toLocaleString(undefined,
  { minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'GBP' },
)}`);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
