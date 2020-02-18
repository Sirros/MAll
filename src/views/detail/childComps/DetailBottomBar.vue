<template>
  <div class="detail-bottom-bar">
    <div class="bar-item bar-left">
      <div class="icon_text">
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="add-shopcart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
    addCart() {
      this.$emit('addCart')
    }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
  .detail-bottom-bar{
    height: 49px;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
  }
  .bar-item{
    height: 49px;
    width: 50%;
  }
  .bar-left{
    display: flex;
    justify-content: space-around;
    font-size: 14px;
  }
  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 3px;
    background: url("~assets/images/detail/detail_bottom.png") 0 0/100%;
  }
  .bar-right{
    display: flex;
    text-align: center;
    font-size: 15px;
  }
  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }
  .bar-right .add-shopcart{
    width: 55%;
    line-height: 49px;
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy{
    flex: 1;
    line-height: 49px;
    background-color: #f69;
    color: #fff;
  }
</style>