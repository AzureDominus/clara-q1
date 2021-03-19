import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')