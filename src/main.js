import Vue from 'vue'
// import Cube from 'cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'common/toast/index.js'
import  FastClick  from  'fastclick'
import VueLazyLoad from 'vue-lazyload'
// import 'amfe-flexible'

(function setRem() {
  document.documentElement.style.fontSize = window.innerWidth / 10 + 'px'
  console.log(document.documentElement.style.fontSize);
}())

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)

FastClick.attach(document.body)


Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})

const app = new Vue({
  router,
  render: (h) => {console.log(h);return h(App)},   //h返回一个createElement（）的结果,二createElement的结果就是VNode
  store
})
app.$mount('#app')



