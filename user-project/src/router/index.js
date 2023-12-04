//페이지 등록하는곳

import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import UserInfo from '../views/UserInfo.vue'
import UserInsert from '../views/UserInsert.vue'
import UserUpdate from '../views/UserUpdate.vue'

const routes = [
  {
    path: '/',
    name: 'userList',
    component: UserList
  },
  {
    path: '/userInfo', //userlist 71행
    name: 'userInfo',
    component: UserInfo
  },
  {
    path: '/userInsert', //userlist 71행
    name: 'userInsert',
    component: UserInsert
  },
  {
    path: '/userUpdate',
    name: 'userUpdate',
    component: UserUpdate
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
