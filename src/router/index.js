import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Publish from '../views/Publish.vue'
import Search from '../views/Search.vue'
import Appointment from '../views/Appointment.vue'
import Contract from '../views/Contract.vue'
import Payment from '../views/Payment.vue'
import Repair from '../views/Repair.vue'
import Feedback from '../views/Feedback.vue'
import Notification from '../views/Notification.vue'
import Statistics from '../views/Statistics.vue'
import HouseDetail from '../views/HouseDetail.vue'
import AboutUs from '../views/AboutUs.vue'
import PersonalAccount from '../views/PersonalAccount.vue'
import TermService from '../views/TermService.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/personalAccount',
      name: 'personalAccount',
      component: PersonalAccount
    },
    {
      path: '/termService',
      name: 'termService',
      component: TermService
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish
    },
    {
      path: '/houseDetail',
      name: 'houseDetail',
      component: HouseDetail
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: Appointment
    },
    {
      path: '/contract',
      name: 'contract',
      component: Contract
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/repair',
      name: 'repair',
      component: Repair
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics
    }
  ]
})
