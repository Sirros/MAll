<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" 
        @detailItemClick="detailItemClick" 
        ref="_nav_bar"/>
    <b-scroll class="content" ref="scroll" 
        @scroll="scrollContent" 
        :probe-type="3">
      <detail-swiper :top-image="topImage"/>
      <detail-base-info :goods-detail="goodsDetail" />
      <detail-shop-info :shop-detail="shopDetail"/>
      <detail-goods-info :detail-info="DetailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :goods-param="goodsParam" />
      <detail-comment-info ref="comment" :goods-comment-info="goodsCommentInfo"/>
      <goods-list ref="recommend" :goods="recommendsList"/>
    </b-scroll>
    <detail-bottom-bar @addCart="addToShopCart"/>
    <back-top @click.native="backTop" v-show="isShow"/>
  </div>
</template>

<script>
// 导入组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import BScroll from 'components/common/scroll/BScroll'
import GoodsList from 'components/content/goods/GoodsList'

// 导入网络请求方法
import { getDetail, GoodsDetail, ServicesInfo, GoodsParam, getRecommend } from 'network/details'
import { debounce } from 'common/utils'
import { itemListenerMixin, backTopMixin } from 'common/mixin'

export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BScroll
  },
  props:{},
  // 这里使用混入
  mixins: [itemListenerMixin,backTopMixin],
  data(){
    return {
      iid: null,
      topImage: [],
      goodsDetail: {},
      shopDetail: {},
      DetailInfo: {},
      goodsParam: {},
      goodsCommentInfo: {},
      recommendsList: [],
      themeTopYs: [],
      getOffsetTopDebounce: null,
      currentIndex: 0
    }
  },
  computed:{},
  methods:{
    // 1.监听图片加载完毕
    imageLoad() {
      this.$refs.scroll.refresh()
      this.getOffsetTopDebounce()      
    },
    // 2.监听detail navbar点击
    detailItemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
      this.getOffsetTopDebounce()
    },
    // 3.监听内容滚动
    scrollContent(position) {
      let positionY = -position.y
      let len = this.themeTopYs.length
      for(let i=0; i<len-1; i++){
        if(this.currentIndex !== i &&( positionY >= this.themeTopYs[i] && positionY <= this.themeTopYs[i+1])){
          this.currentIndex = i
          // console.log(this.currentIndex)
          this.$refs._nav_bar.currentIndex = this.currentIndex
        }
      }
      this.isShow = (-position.y) > 1000
    },
    // 4.加入购物车
    addToShopCart() {
      // 1.获取购物车需要的信息：商品图片、商品标题、商品描述、商品价格
      const product = {}
      product.image = this.topImage[0]
      product.title = this.goodsDetail.title
      product.desc = this.goodsDetail.desc
      product.price = this.goodsDetail.lowNowPrice
      product.iid = this.iid 
      product.count = this.goodsDetail.count

      // 2.将商品加入购物车：利用vuex
      // this.$store.commit('addToCart', product)
      this.$store.dispatch('addToCart', product)
    }
  },
  created(){
    // 111
    // 1.获取商品id
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      console.log(res)
      let result =  res.result
      // 2.获取轮播图数据
      this.topImage = result.itemInfo.topImages

      // 3.获取商品数据
      this.goodsDetail = new GoodsDetail(result.itemInfo, result.columns, result.shopInfo.services) 

      // 4.获取商家信息
      this.shopDetail = new ServicesInfo(result.shopInfo)

      // 5.获取商品详情图片信息
      this.DetailInfo = result.detailInfo

      // 6.获取尺码等商品参数信息
      this.goodsParam = new GoodsParam(result.itemParams.info, result.itemParams.rule)

      // 7.获取商品评论数据
      this.goodsCommentInfo = result.rate.list[0]
    })

    // 222
    // 获取推荐商品数据
    getRecommend().then(res => {
      console.log(res)
      this.recommendsList = res.data.list
    })

    // 333
    // 当图片都加载完了后才赋值给各个部分的offsetTop，并且进行防抖
    this.getOffsetTopDebounce = debounce(()=>{
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Infinity)
    }, 100)

  },
  mounted(){
    // 详情看混入文件mixin.js
  },
  // 这个页面由于在路由的时候keep-alive exclude了，所以没有缓存，不会直接deactivated函数，所以用destory
  distory(){
    this.$bus.$off('itemImageLoad', this.itemImageListener)
  }
}
</script>
<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav-bar{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  /* 用计算定位 */
  /* .content{
    height: calc(100% - 44px);
  } */
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }

</style>