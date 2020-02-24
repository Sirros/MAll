<template>
  <div class="category-left-bar left-bar">
    <b-scroll class="content" ref="scroll">
      <ul v-for="(item,index) in list" :key="index">
        <li class="item" :class="{active: isActive}">{{item}}</li>
      </ul>
    </b-scroll>
  </div>
</template>

<script>
import BScroll from 'components/common/scroll/BScroll'

export default {
  name: 'CategoryLeftBar',
  components:{
    BScroll
  },
  props:{},
  data(){
    return {
      list: ['正在流行','上衣','裤子','裙子','内衣','女鞋','男友','包包','运动','配饰','美妆','个护','家居','百货','母婴','食品'],
      isActive: false
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
  .left-bar{
    font-size: 16px;
    background-color: #efefef;
    padding: 10px 0;
  }
  .left-bar .content{
    height: calc(100vh - 44px - 49px - 20px);
    overflow: hidden;
  }
  .content ul li{
    height: 40px;
    line-height: 40px;
  }
  .active{
    border-left: 5px solid var(--color-tint);
    background-color: #fff;
    color: var(--color-high-text);
  }
</style>