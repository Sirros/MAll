<template>
  <div class="">
    <swiper>
        <swiper-item v-for="item in banners" :key="item">
          <a :href="item.link">
            <img :src="item.image" alt=""/>
          </a>
        </swiper-item>
      </swiper>
  </div>
</template>

<script>
// 导入轮播图组件
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners: Array,
    default(){
      return []
    }
  },
  data(){
    return {
    }
  }
}
</script>
<style scoped>
</style>