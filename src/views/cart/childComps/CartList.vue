<template>
  <div class="cart-list">
    <b-scroll class="content" ref="scroll">
      <cart-list-item 
          v-for="(item,index) in cartList" 
          :key="index" 
          :product="item"/>
    </b-scroll>
  </div>
</template>

<script>
import BScroll from 'components/common/scroll/BScroll'

import CartListItem from './CartListItem'

// vuex 自带的
import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  components:{
    BScroll,
    CartListItem
  },
  props:{
    
  },
  data(){
    return {
    }
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  methods:{},
  created(){},
  mounted(){},
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>
<style scoped>
  .cart-list{
    height: calc(100% - 44px - 49px - 45px);
    width: 100%;
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>