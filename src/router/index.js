import Vue from 'vue'
import Router from 'vue-router'
import SlideLayout from '@/views/SlideLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Slide',
      component: SlideLayout
    }
  ]
})
