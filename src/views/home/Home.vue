<template>
    <div id="home">
      <nav-bar class='home-nav-bar'><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners" />
    </div>
</template>

<script>
// 导入组件
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'


// 网络封装导入
import {getHomeMultiData} from 'network/home'

export default {
  components:{
    NavBar,
    HomeSwiper
  },
  props:{},
  data(){
    return {
      banners: [],
      recommend: []
    }
  },
  created() {
    getHomeMultiData().then(res=>{
      console.log(res)
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  }
}
</script>
<style scoped>
  .home-nav-bar{
    color: #fff;
    text-align: center;
    background-color: var(--color-tint);
  }
</style>