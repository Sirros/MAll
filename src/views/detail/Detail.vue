<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" />
    <b-scroll class="content" ref="scroll">
      <detail-swiper :top-image="topImage"/>
      <detail-base-info :goods-detail="goodsDetail" />
      <detail-shop-info :shop-detail="shopDetail"/>
      <detail-goods-info :detail-info="DetailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :goods-param="goodsParam" />
      <detail-comment-info :goods-comment-info="goodsCommentInfo"/>
      <goods-list :goods="recommendsList"/>
    </b-scroll>
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

import BScroll from 'components/common/scroll/BScroll'
import GoodsList from 'components/content/goods/GoodsList'

// 导入网络请求方法
import { getDetail, GoodsDetail, ServicesInfo, GoodsParam, getRecommend } from 'network/details'
import {debounce} from 'common/utils'
import {itemListenerMixin} from 'common/mixin'

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
    BScroll
  },
  props:{},
  // 这里使用混入
  mixins: [itemListenerMixin],
  data(){
    return {
      iid: null,
      topImage: [],
      goodsDetail: {},
      shopDetail: {},
      DetailInfo: {},
      goodsParam: {},
      goodsCommentInfo: {},
      recommendsList: []
    }
  },
  computed:{},
  methods:{
    imageLoad() {
      this.$refs.scroll.refresh()
    },

  },
  created(){
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

    // 获取推荐商品数据
    getRecommend().then(res => {
      console.log(res)
      this.recommendsList = res.data.list
    })

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
    bottom: 0;
  }

</style>