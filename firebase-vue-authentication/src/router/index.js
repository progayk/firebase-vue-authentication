import Vue from 'vue'
import Router from 'vue-router'
import 'semantic-ui-css/semantic.min.css'
import HelloWorld from '@/components/HelloWorld'
import AppLogin from '@/components/AppLogin'
import AppSignup from '@/components/AppSignup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/signup',
      name: 'AppSignup',
      component: AppSignup
    }
  ]
})
