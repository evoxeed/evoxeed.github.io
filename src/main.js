import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import './plugins/bootstrap-vue'
import VideoBackground from 'vue-responsive-video-background-player'
import './registerServiceWorker'

Vue.component('video-background', VideoBackground);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
