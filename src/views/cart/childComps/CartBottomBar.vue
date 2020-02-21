<template>
  <div class="cart-bottom-bar bottom-bar">
    <div class="cart-bottom-bar all-choose">
      <check-button 
          class="button" 
          :is-selected="isAllSelected"
          @click.native="selectClick"/><span>全选</span>
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
      // isAllSelected: false
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
    // 2.计算总量
    cartListLength() {
      return this.$store.state.shopCartList.filter(item => item.selected).length
    },
    // 3.监听全选按钮
    isAllSelected() {
      if(this.$store.state.shopCartList.length === 0) return false
      // 也可以用filter，过滤找到一个 selected 属性为 false 的就返回，find 性能高
      // return !(this.$store.state.shopCartList.filter(item => !item.selected).length)
      return !(this.$store.state.shopCartList.find(item => !item.selected))
    }
  },
  methods:{
    selectClick() {
      if(this.isAllSelected) {
        this.$store.state.shopCartList.forEach(item => item.selected = false)
      } else {
        this.$store.state.shopCartList.forEach(item => item.selected = true)
      }
    }
  },
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
    font-size: 16px;
  }
  .all-choose{
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .total-price{
    flex: 1;
    font-size: 18px;
    color: #333;
  }
  .calculate{
    width: 120px;
    color: #fff;
    background-color: rgba(236, 99, 124, 0.705);
  }
</style>