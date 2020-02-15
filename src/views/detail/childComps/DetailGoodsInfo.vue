<template>
  <div class="detail-goods-info" v-if="Object.keys(DetailInfo).length !== 0">
    <div class="detail-title">
      <div class="start-line"></div>
      <div class="goodsinfo-title"><span>{{DetailInfo.desc}}</span></div>
      <div class="end-line"></div>
    </div>
    <div class="detail-desc">{{DetailInfo.detailImage[0].key}}</div>
    <div class="img-detial">
      <img v-for="(item, index) in DetailInfo.detailImage[0].list" 
          :key="index" 
          :src="item" 
          @load="imageLoad"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  components:{},
  props:{
    DetailInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      imageLoadCounter: 0,
      imageLoadLength: 0
    }
  },
  watch:{
  // watch可以监听对象的变化
    DetailInfo() {
      // 先拿到所有图片的长度
      this.imageLoadLength = this.DetailInfo.detailImage[0].list.length
    }
  },
  computed:{},
  methods:{
    imageLoad() {
      // 这里判断全部图片加载完成，发射事件到父组件
      // 两种写法相等
      // this.imageLoadCounter++
      // if(this.imageLoadCounter === this.imageLoadLength){
      //   this.$emit("imageLoad")
      // }
      if(++this.imageLoadCounter === this.imageLoadLength){
        this.$emit('imageLoad')
      }
    }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
  .detail-goods-info{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  
  .detail-title .goodsinfo-title{
    margin: 0 auto;
    padding: 0 15px;
  }
  .detail-title .goodsinfo-title span{
    font-size: 13px;
  }
  .detail-title .start-line, .detail-title .end-line {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  
  .detail-title .start-line{float: left;}
  .detail-title .end-line{float: right;}

  .detail-title .start-line::before, .detail-title .end-line::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .detail-title .end-line::after {
    right: 0;
  }

  .detail-title .goodsinfo-title{
    padding: 15px 5px;
    font-size: 14px;
  }

  .detail-desc{
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .img-detial img{
    width: 100%;
  }
</style>