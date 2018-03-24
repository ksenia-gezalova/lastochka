import Vue from 'vue'
import Router from 'vue-router'

import Pad from '@/components/Pad.vue'
import User from '@/components/User.vue'
import User2 from '@/components/User2.vue'
import Welcome from '@/components/Welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pad',
      component: Pad
    },
    {
      path: '/pad',
      name: 'Pad',
      component: Pad
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/user2',
      name: 'User2',
      component: User2
    }
  ]
})
