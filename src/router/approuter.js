import VueRouter from 'vue-router'
import Home from '../template/trial.vue'
import Upload from '../template/upload.vue'
import Info from '../template/info.vue'
import BankCard from '../template/bankCard'
import Apply from '../template/apply'
import Success from '../template/success'

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/upload/:id', component: Upload},
    {path: '/info', component: Info},
    {path: '/bankCard', component: BankCard},
    {path: '/apply', component: Apply},
    {path: '/success', component: Success},
    {path: '*', redirect: '/'}
  ],
  scrollBehavior (to, from, savedPosition) {    /**跳转滚动,需配置mode才可生效**/
    return savedPosition || { x: 0, y: 0 }
  }
})
