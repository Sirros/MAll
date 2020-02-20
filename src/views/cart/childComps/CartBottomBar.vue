<template>
  <div class="cart-bottom-bar bottom-bar">
    <div class="cart-bottom-bar all-choose">
      <check-button class="button"/><span>全选</span>
    </div>
    <div class="cart-bottom-bar total-price">{{totalPrice}}</div>
    <div class="cart-bottom-bar calculate">去结算({{+cartListLength}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'CartBottomBar',
  components:{
    CheckButton
  },
  props:{},
  data(){
    return {
    }
  },
  computed:{
    // 1.计算总价
    // 选出selected是true的，然后用reduce计算总和
    totalPrice() {
      return '￥' + this.$store.state.shopCartList.filter(item => {
        return item.selected
      }).reduce((preVal, item) => {
        return preVal + item.price * item.count
      }, 0).toFixed(2)
    },
    cartListLength() {
      return this.$store.state.shopCartList.filter(item => item.selected).length
    }
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
  .bottom-bar{
    position: relative;
    display: flex;
    height: 45px;
    width: 100%;
    line-height: 45px;
    background-color: #e4e4e4;
    border-top: 1px solid #e5e5e59d;
    box-sizing: border-box;
    text-align: center;
  }
  .all-choose{
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .all-choose .button{
    /* margin-right: 5px; */
  }
  .total-price{
    flex: 1;
    background-color: aqua;
  }
  .calculate{
    width: 120px;
    background-color: aquamarine;
  }
</style>