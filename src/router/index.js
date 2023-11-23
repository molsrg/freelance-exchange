import { createRouter, createWebHashHistory } from 'vue-router'
import NewApp from './../views/NewApp.vue'
import HomeApp from './../views/HomeApp.vue'
import Task from './../views/TaskApp.vue'
const routes = [
  {
    path: '/',
    name: 'homeApp',
    component: HomeApp
  },
  {
    path: '/newTask',
    name: 'newTask',
    component: NewApp
  },
  {
    path:'/task/:idx?',
    name:'Task',
    component: Task,
    props: true 
}, 

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
