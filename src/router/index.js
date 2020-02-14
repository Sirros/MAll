//路由使用步骤：1导入 2注册 3使用 4导出
// 导出后在main.js中使用

// 1导入
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2注册
Vue.use(VueRouter)

// 懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

// 3路由映射关系
const routes =[
  {
    // 重定向
    path: '',
    redirect: '/home'
  },
  {
    // “首页”映射
    path:'/home',
    component: Home
  },
  {
    // “分类”映射
    path:'/category',
    component: Category
  },
  { 
    // “购物车”映射
    path:'/cart',
    component: Cart
  },
  {
    // “我的”映射
    path:'/profile',
    component: Profile
  },
  {
    // “详情页”映射
    path:'/detail:iid',
    component: Detail
  }
]

const router = new VueRouter({
  // routes:[] 把routes抽离到外面
  routes,
  mode: 'history'
})

export default router