<template>
  <div class="category">
    <!-- nav-bar -->
    <nav-bar class="category nav-bar"> <div slot="center">商品分类</div></nav-bar>
    <!-- 内容 -->
    <category-content/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CategoryContent from './childComps/CategoryContent'

export default {
  name:'Category',
  components:{
    NavBar,
    CategoryContent
  },
  props:{},
  data(){
    return {
    }
  }
}
</script>
<style scoped>
  .category{
    width: 100%;
    height: 100vh;
  }
  .nav-bar{
    text-align: center;
    height: 44px;
    background-color: var(--color-tint);
    color: #fff;
    /* position: fixed; */
  }
</style>