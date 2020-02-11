<template>
    <div class="wrapper">
        <swiper :options="swiperOption" class="swiper-container" >
        <!-- slides -->
        <swiper-slide class="swiper-item" v-for='(item, index) of banners' :key='index'>
          <a :href="item.link">
            <img class='swiper-img' :src='item.image' alt="去哪儿门票" />
          </a>
        </swiper-slide>
        <!-- Optional controls ,显示小点-->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeSwiper',
  components:{
    
  },
  props:{
    banners: Array,
    default(){
      return []
    }
  },
  data(){
    return {
      swiperOption:{
                // 参数选项,显示小点
                pagination:'.swiper-pagination',
                //循环
                loop:true,
                //每张播放时长2秒，自动播放
                autoplay:2000,
                //滑动速度
                speed:800,
                // delay:1000

            },
            pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
    }
  }
}
</script>
<style scoped>
    .swiper-item img{
      width: 100%;
    }
    
</style>