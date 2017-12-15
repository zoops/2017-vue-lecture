import Vue from 'vue'
import Router from 'vue-router'
import INUTodoMain from '@/components/INUTodoMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'INUTodoMain',
      component: INUTodoMain
    }
  ]
})
