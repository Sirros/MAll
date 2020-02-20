<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{Length}})</div>
    </nav-bar>
    <!-- 内容 -->
    <cart-list></cart-list>
    <!-- 结算 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

// vuex 自带的
import { mapGetters } from 'vuex'

export default {
  name:'Cart',
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  props:{},
  data(){
    return {
    }
  },
  computed:{
    // mapGetters会把store里面的getters映射到computed方法里
    // ...mapGetters(['cartListLength'])
    // 如果想给getters取别名，如下写法
    ...mapGetters({
      Length : 'cartListLength',
    })
}
}
</script>
<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    height: 44px;
    text-align: center;
    color: #fff;
    background-color: var(--color-tint);
  }
</style>