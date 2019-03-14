import Vue from 'vue'
import App from './App.vue'

import Keep from './components/index'
Vue.use(Keep)
import './assets/common.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
