import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import { Button, Form, Field, Toast, Icon, Grid, GridItem,AddressList } from 'vant'
import md5 from 'js-md5'


Vue.use(Form).use(Field).use(Toast).use(Button).use(Icon).use(GridItem).use(Grid).use(AddressList)
Vue.prototype.$md5 = md5

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
