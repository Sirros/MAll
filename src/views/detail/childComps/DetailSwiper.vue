<template>
  <!-- <div class="wrapper"> -->
    <swiper :options="swiperOption" class="swiper-container detail-swiper">
      <!-- slides -->
      <swiper-slide class="swiper-item" v-for='(item, index) of topImage' :key='index'>
        <a :href="item.link">
          <img class='swiper-img' :src='item' alt="" @load="imageLoad"/>
        </a>
      </swiper-slide>
      <!-- Optional controls ,显示小点-->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  <!-- </div> -->
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name:'DetailSwiper',
  components:{
    swiper,
    swiperSlide
  },
  props:{
    topImage: Array,
    default(){
      return []
    }
  },
  data(){
    return {
      swiperOption:{
        // 参数选项,显示小点
        pagination: '.swiper-pagination',
        //循环
        loop: true,
        //每张播放时长2秒，自动播放
        autoplay: 2000,
        // 操作swiper后，还会继续播放
        autoplayDisableOnInteraction: false,
        
        // //滑动速度
        speed: 800,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      isLoad: false
    }
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>
<style>
    .detail-swiper{
      height: 300px;
      overflow: hidden;
    }
    .detail-swiper img{
      width: 100%;
    }
    .detail-swiper .swiper-pagination{
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
      bottom: 8px;
    }
    .detail-swiper .swiper-pagination-bullet{
      box-sizing: border-box;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: #fff;
      line-height: 8px;
      text-align: center;
      font-size: 12px;
      margin: 0 5px;
    }
    .detail-swiper .swiper-pagination-bullet-active{
      background-color: rgba(212,62,46,1.0);
    }
</style>