<template>
    <div id="home">
      <nav-bar class='home-nav-bar'><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :title="['流行','新款','精选']" />
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
</template>

<script>
// home 子导入组件
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

// 公共组件导入
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

// 网络封装导入
import {getHomeMultiData} from 'network/home'

export default {
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,

    NavBar
  },
  props:{},
  data(){
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultiData().then(res=>{
      console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>
<style scoped>
  #home{
    padding-top: 44px;
    background-color: #fff;
  }
  .home-nav-bar{
    color: #fff;
    text-align: center;
    background-color: var(--color-tint);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>