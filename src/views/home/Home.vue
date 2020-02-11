<template>
    <div id="home">
      <nav-bar class='home-nav-bar'><div slot="center">购物街</div></nav-bar>
      <b-scroll class="content" ref="scroll" :probe-type="3" @scroll="backTopLogoShow">
        <home-swiper :banners="banners" />
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control 
          :title="['流行','新款','精选']"  
          @tabClick="tabClick" />
        <goods-list :goods="goods[currentType].list"/>
      </b-scroll>
      <!-- 组件的事件监听必须加修饰符.native -->
      <back-top @click.native="backTop" v-show="isShow"/>
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
import GoodsList from 'components/content/goods/GoodsList'
import BScroll from 'components/common/scroll/BScroll'
import BackTop from 'components/common/backtop/BackTop'

// 网络封装导入
import {getHomeMultiData , getHomeTotalGoodsData} from 'network/home'

export default {
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    NavBar,
    BScroll,
    BackTop
  },
  props:{},
  data(){
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShow: false
    }
  },
  created() {
    // 请求所有数据
    this.HomeMultiData()

    // 请求商品数据
    this.HomeTotalGoodsData('pop')
    this.HomeTotalGoodsData('new')
    this.HomeTotalGoodsData('sell')
  },
  methods:{
    // 事件监听事件
    tabClick(index){
      switch(index){
        case 0: 
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backTop(x, y, time){
      // this.$refs.scroll.scrollTo(0, 0, 600)
      console.log("backtop")
      this.$refs.scroll.scrollToTop(0, 0, 500)
    },
    backTopLogoShow(position){
      // console.log(position)
      this.isShow = (-position.y) > 1000
    },


    // 网络数据请求事件
    HomeMultiData(){
      getHomeMultiData().then(res=>{
      // console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      })
    },
    HomeTotalGoodsData(type){
      // 一页一页加载数据
      const page = this.goods[type].page + 1
      getHomeTotalGoodsData(type, page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>
<style scoped>
  #home{
    padding-top: 44px;
    background-color: #fff;
    height: 100vh;
    position: relative;
  }
  .home-nav-bar{
    color: #fff;
    text-align: center;
    background-color: var(--color-tint);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8;
  }
  .tab-control{
    position: sticky;
    background-color: #fff;
    top: 44px;
    z-index: 9;
  }

  /* 用定位实现 */
  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }

  /* 用计算实现 */
  /* .content{
    height: calc(100vh - 93px);    
  } */
</style>