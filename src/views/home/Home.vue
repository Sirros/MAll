<template>
    <div id="home">
      <nav-bar class='home-nav-bar'><div slot="center">购物街</div></nav-bar>

      <tab-control 
          :title="['流行','新款','精选']"  
          @tabClick="tabClick" 
          ref="tabControlTop"
          v-show="isTabFix"
          class="tab-control-top"/>

      <b-scroll 
          class="content" 
          ref="scroll" 
          :probe-type="3" 
          @scroll="backTopLogoShow"
          :pull-up-load="true"
          @pullingUp="loadMore" >  

        <home-swiper 
          :banners="banners" 
          ref="swiper"
          @swiperImageLoad="swiperImageLoad"/>

        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control 
          :title="['流行','新款','精选']"  
          @tabClick="tabClick" 
          ref="tabControlBottom"
          :class="{Fixed: isTabFix}" />
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

// 公共方法导入
import {debounce} from 'common/utils'
import {itemListenerMixin} from 'common/mixin'

export default {
  name:'Home',
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
  mixins: [itemListenerMixin],
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
      isShow: false,
      offsetTop: 0,
      isTabFix: false,
      saveY: 0
    }
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
      this.$refs.tabControlTop.currentIndex = index
      this.$refs.tabControlBottom.currentIndex = index
    },
    backTop(x, y, time){
      // this.$refs.scroll.scrollTo(0, 0, 600)
      console.log("backtop")
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    backTopLogoShow(position){
      // console.log(position)
      // 1.监听回到顶部图表是否显示
      this.isShow = (-position.y) > 1000

      // 2.监听是否吸顶
      this.isTabFix = (-position.y) > this.offsetTop
    },
    loadMore(){
      console.log("上拉加载更多")
      this.HomeTotalGoodsData(this.currentType)
    },
    swiperImageLoad(){
    // 2.获取tabcontrol的offsetTop
    // 如果只是用this.$refs.tabControl获取到的是组件，组件是没有offsetTop属性的
    // this.$refs.tabControl.$el可以获取到组建里的html元素
      this.offsetTop = this.$refs.tabControlBottom.$el.offsetTop
      console.log(this.offsetTop)
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

        this.$refs.scroll.finishPullUp()
      })
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
  mounted(){
    
  },
  destroy(){
    console.log('destroy')
  },
  activated(){
    // 再次进入的时候回到上次退出的时候那个位置
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // 这里进行一次刷新以防无法滑动
    this.$refs.scroll.refresh()
  },
  deactivated(){
    // 1.离开的时候保存当前的位置
    this.saveY = this.$refs.scroll.getScrollY()

    // 2.离开的时候取消全局事件监听
    this.$bus.$off('itemImageLoad', this.itemImageListener)
  }
}
</script>
<style scoped>
  #home{
    background-color: #fff;
    height: 100vh;
    /* position: relative; */
  }
  .home-nav-bar{
    color: #fff;
    text-align: center;
    background-color: var(--color-tint);
   
    /* 在原生滚动采用 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 8; */
  }

  /* 用定位实现 */
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }
  .tab-control-top{
    position: relative;
    z-index: 10;
    background-color:#fff;
  }
  /* 用计算实现 */
  /* .content{
    height: calc(100vh - 93px);    
  } */
</style>
