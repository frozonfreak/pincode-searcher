// Core Components
import Vue from 'vue'
import Router from 'vue-router'

// General
import Home from '@/components/Home'
import Store from '@/components/Store'

// Errors
import NotFound from '@/components/Errors/404'

// Progress bar
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

NProgress.configure({ showSpinner: false })

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
    {
      path: '/',
      component: Home,
      iconCls: 'fa fa-circle-thin',
      children: [
        { path: '/', component: Store, name: 'Store' }
      ]
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})

// Set progress bar for every route.
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  NProgress.done()
})

export default router
