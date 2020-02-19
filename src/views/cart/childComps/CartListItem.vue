<template>
  <div class="cart-list-item item">
    <div class="cart-list-item select-status">
      <check-button class="check-button"/>
    </div>
    <div class="cart-list-item good-image">
      <img :src="product.image" alt=""/>
    </div>
    <div class="cart-list-item good-param">
      <div class="param-title">{{product.title}}</div>
      <div class="param-desc">{{product.desc}}</div>
      <div class="good-price">
        <div class="price">￥{{product.price}}</div>
        <div class="count">X{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'CartListItem',
  components:{
    CheckButton
  },
  props:{
    product:{
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
  .item{
    width: 100%;
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }
  .select-status{
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .good-image{
    width: 25%;
  }
  .good-image img{
    width: 70px;
    display: block;
    border-radius: 5px;
  }
  .good-param{
    font-size: 15px;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .good-param .param-title, .good-param .param-desc{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .good-param .param-desc{
    font-size: 14px;
    color: #666;
    margin-top: 20px;
  }
  .good-param .good-price{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
  }
  .good-param .good-price .price{
    color: orangered;
  }
</style>