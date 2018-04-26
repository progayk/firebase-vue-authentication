import Vue from 'vue'
import Router from 'vue-router'
import 'semantic-ui-css/semantic.min.css'
import HelloWorld from '@/components/HelloWorld'
import AppLogin from '@/components/AppLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    }
  ]
})
