<template>
  <div class="shop-info">
    <div class="top-info">
      <img :src="shopDetail.logo" />
      <span class="title">{{shopDetail.name}}</span>
    </div>
    <div class="middle-info">
      <div class="middle-info-item middle-info-left">
        <div class="middle-info-left-item middle-info-left-left">
          <div class="total-sells-val">{{shopDetail.sells | sellCountFilter}}</div>
          <div class="total-sells-text">总销量</div>
        </div>
        <div class="middle-info-left-item middle-info-left-right">
          <div class="total-goods-val">{{shopDetail.goodsCount}}</div>
          <div class="total-goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="middle-info-item  middle-info-right">
        <table>
          <tr v-for="(item, index) in shopDetail.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="level" :class="{'level-better': item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bottom-info">
      <div class="erter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  components:{},
  props:{
    shopDetail:{
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
  filters:{
    sellCountFilter(value) {
      if(value < 1000) return value
      return (value / 10000).toFixed(1) + "万"
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
  .shop-info{
    border-bottom: 5px solid #f2f5f8;
  }
  .top-info{
    text-align: center;
    height: 60px;
    margin-top: 5px;
  }
  .top-info span{
    height: 100%;
    line-height: 60px;
    vertical-align: middle;
  }
  .top-info img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
    vertical-align: middle;
  }
  .middle-info{
    height: 100px;
    display: flex;
    align-items: center;
  }
  .middle-info-item{
    flex: 1;
  }
  .middle-info-left{
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #333;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .total-sells-val, .total-goods-val{
    font-size: 18px;
  }
  .total-sells-text, .total-goods-text{
    margin-top: 10px;
    font-size: 12px;
  }
  .middle-info-right{
    font-size: 12px;
    color: #333;
  }
  .middle-info-right table{
    margin: 0 auto;
    width: 120px;
  }
  .middle-info-right table td{
    padding: 0 3px;
  }
  .middle-info-right .score{
    color: #5ea732;
  }
  .middle-info-right .score-better{
    color: #f13e3a;
  }
  .middle-info-right .level span{
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }
  .middle-info-right .level-better span{
    background-color: #f13e3a;
  }
  .bottom-info{
    text-align: center;
  }
  .bottom-info .erter-shop{
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    line-height: 30px;
    margin: 0 auto;
    display: inline-block;
    font-size: 14px;
    border-radius: 10px;
    text-align: center;
  }
</style>