// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/reset.css' 
import axios from 'axios';

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$axios=axios;

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/loginCloud') {
    sessionStorage.removeItem('user');
  }

  //let user = JSON.parse(sessionStorage.getItem('user'));
  let user = sessionStorage.getItem("user")
  if (!user && to.path != '/loginCloud') {
    next({ path: '/loginCloud' });
  } else {
    next();
  }
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
