<template>
  <div id="detail">
    <detail-nav-bar/>
      <detail-swiper :top-image="topImage"/>
  </div>
</template>

<script>
// 导入组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'

// 导入网络请求方法
import {getDetail} from 'network/details'

export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper
  },
  props:{},
  data(){
    return {
      iid: null,
      topImage: []
    }
  },
  computed:{},
  methods:{},
  created(){
    // 1.获取商品id
    this.iid = this.$route.params.iid

    // 2.获取轮播图数据
    getDetail(this.iid).then(res => {
      console.log(res)
      this.topImage = res.result.itemInfo.topImages
    })
  },
  mounted(){}
}
</script>
<style scoped>
</style>