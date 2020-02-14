<template>
  <div id="detail">
    <detail-nav-bar/>
      <detail-swiper :top-image="topImage"/>
      <detail-base-info :goods-detail="goodsDetail" />
      <detail-shop-info :shop-detail="shopDetail"/>
  </div>
</template>

<script>
// 导入组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'

// 导入网络请求方法
import {getDetail, GoodsDetail, ServicesInfo} from 'network/details'

export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  props:{},
  data(){
    return {
      iid: null,
      topImage: [],
      goodsDetail: {},
      shopDetail: {}
    }
  },
  computed:{},
  methods:{},
  created(){
    // 1.获取商品id
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      console.log(res)
      let result =  res.result
      // 2.获取轮播图数据
      this.topImage = result.itemInfo.topImages

      // 3.获取商品详情数据
      this.goodsDetail = new GoodsDetail(result.itemInfo, result.columns, result.shopInfo.services) 

      // 4.获取商家信息
      this.shopDetail = new ServicesInfo(result.shopInfo)
    })


  },
  mounted(){}
}
</script>
<style scoped>
</style>