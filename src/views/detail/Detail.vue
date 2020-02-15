<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" />
    <b-scroll class="content" ref="scroll">
      <detail-swiper :top-image="topImage"/>
      <detail-base-info :goods-detail="goodsDetail" />
      <detail-shop-info :shop-detail="shopDetail"/>
      <detail-goods-info :detail-info="DetailInfo" @imageLoad="imageLoad"/>
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

import BScroll from 'components/common/scroll/BScroll'

// 导入网络请求方法
import {getDetail, GoodsDetail, ServicesInfo} from 'network/details'

export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    BScroll,
    DetailGoodsInfo
  },
  props:{},
  data(){
    return {
      iid: null,
      topImage: [],
      goodsDetail: {},
      shopDetail: {},
      DetailInfo: {}
    }
  },
  computed:{},
  methods:{
    imageLoad() {
      this.$refs.scroll.refresh()
    }
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
    })


  },
  mounted(){}
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