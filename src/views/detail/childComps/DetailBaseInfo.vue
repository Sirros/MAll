<template>
  <div class="detail-base-info" v-if="Object.keys(goodsDetail).length !== 0">
    <div class="detail-title">{{goodsDetail.title}}</div>
    <div class="detail-price">
      <!-- <span class="nowPrice">{{goodsDetail.nowPrice}}</span> -->
      <span class="nowPrice">$39</span>
      <span class="oldPrice">{{goodsDetail.oldPrice}}</span>
      <!-- <span class="discount">{{goodsDetail.discount}}</span> -->
      <span class="discount">优惠价</span>
    </div>
    <div class="other-info">
      <span class="other-info-item">{{goodsDetail.columns[0]}}</span>
      <span class="other-info-item">{{goodsDetail.columns[1]}}</span>
      <span class="other-info-item">{{goodsDetail.services[goodsDetail.services.length-1].name}}</span>
    </div>
    <div class="serveces-info">
      <span class="serveces-info-item" v-for="index in goodsDetail.services.length-1" :key="index">
        <img :src="goodsDetail.services[index-1].icon" />
        <span>{{goodsDetail.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  components:{},
  props:{
    goodsDetail: {
        type: Object,
        default(){
          return {}
        }
      }
  },
  data(){
    return {
      
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
  .detail-base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .detail-base-info .detail-title{
    color: #222;
  }
  .detail-base-info .detail-price{
    margin-top: 10px;
  }
  .detail-base-info .detail-price .nowPrice, 
  .detail-base-info .detail-price .oldPrice{
    font-size: 24px;
  }
  .detail-base-info .detail-price .nowPrice{
    color: var(--color-high-text);
  }
  .detail-base-info .detail-price .oldPrice{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .detail-base-info .detail-price .discount{
    color: #fff;
    background-color: var(--color-high-text);
    font-size: 12px;
    padding: 2px 4px;
    border-radius: 6px;
    /* 用相对定位让它飘上去一点 */
    position: relative;
    top: -8px;
  }
  .other-info{
    margin-top: 15px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  .serveces-info{
    height: 50px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .serveces-info-item img{
    width: 12px;
    height: 12px;
    font-size: 11px;
  }
  .serveces-info span{
    color: #222;
  }
</style>