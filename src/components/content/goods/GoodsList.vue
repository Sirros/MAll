<template>
  <div class="goods-list">
    <!-- 遍历goods数组，把里面的list单个对象传给goodslistitem -->
    <goods-list-item v-for="(item, index) in goods" :key='index' :goods-item="item" />
  </div>
</template>

<script>
// 公共组件导入
import GoodsListItem from './GoodsListItem'

export default {
  components:{
    GoodsListItem
  },
  props:{
    goods: {
      type: Array,
      default(){
        return []
      }
    },
    
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){}
}
</script>
<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>