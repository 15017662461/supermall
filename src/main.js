import Vue from 'vue'
import App from './App.vue'
import router from './router'

(function setRem() {
  document.documentElement.style.fontSize = window.innerWidth / 10 + 'px'
  console.log(document.documentElement.style.fontSize);
}())

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
