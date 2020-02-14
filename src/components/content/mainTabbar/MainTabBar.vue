<template>
  <div class="">
    <tab-bar>
      <!-- 这里每个item的path，就是传路径字符串给组件 -->
      <tab-bar-item path='/home'> 
        <img slot='item-icon' src="~assets/images/tabbar/home.svg" />
        <img slot='item-active-icon' src="~assets/images/tabbar/home_active.svg" />
        <div slot='item-title'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot='item-icon' src="~assets/images/tabbar/category.svg" />
        <img slot='item-active-icon' src="~assets/images/tabbar/category_active.svg" />
        <div slot='item-title'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img slot='item-icon' src="~assets/images/tabbar/cart.svg" />
        <img slot='item-active-icon' src="~assets/images/tabbar/cart_active.svg" />
        <div slot='item-title'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img slot='item-icon' src="~assets/images/tabbar/profile.svg" />
        <img slot='item-active-icon' src="~assets/images/tabbar/profile_active.svg" />
        <div slot='item-title'>我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// import TabBar from '../../common/tabbar/TabBar'
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  },
  props:{},
  data(){
    return {
    }
  }
}
</script>
<style scoped>
</style>