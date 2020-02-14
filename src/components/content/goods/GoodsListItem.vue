<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodsItem.show.img" @load="imageLoad"/>
    <div class="goods-list-item-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    goodsItem: {
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
  methods:{
    imageLoad() {
      // 事件总线
      this.$bus.$emit('itemImageLoad')
      // console.log('*******************')
    },
    itemClick() {
      this.$router.push('/detail' + this.goodsItem.iid)
      // console.log('****123')
    }
  }
}
</script>
<style scoped>
  /* item 的大小 */
  /* 用相对定位把info定位到img下面 */
  .goods-list-item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 3%;
  }
  .goods-list-item-info{
    font-size: 12px;
    position: absolute;
    text-align: center;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .goods-list-item-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-list-item-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-list-item-info .collect{
    position: relative;
  }
  /* 伪元素 */
  /* 用相对定位，相对于collect */
  .goods-list-item-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
  }
</style>