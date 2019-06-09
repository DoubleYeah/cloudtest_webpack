// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/store'
import vuer from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import './css/style.css'
Vue.use(ElementUI)
Vue.use(vuer)
Vue.directive('focus', function (el, option) {
  var defClass = 'el-input',
    defTag = 'input';
  var value = option.value || true;
  if (typeof value === 'boolean')
    value = {
      cls: defClass,
      tag: defTag,
      foc: value
    };
  else
    value = {
      cls: value.cls || defClass,
      tag: value.tag || defTag,
      foc: value.foc || false
    };
  if (el.classList.contains(value.cls) && value.foc)
    el.getElementsByTagName(value.tag)[0].focus();
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
