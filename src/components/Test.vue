<template>
    <div class="wrapper">
        <swiper :options="swiperOption" class="swiper-container" >
        <!-- slides -->
        <swiper-slide class="swiper-item" v-for='item of swiperList' :key='item.id'>
            <img class='swiper-img' :src='item.imgUrl' alt="去哪儿门票" />
        </swiper-slide>
        <!-- Optional controls ,显示小点-->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
    name:'HomeSwiper',
    //es6的写法，相当于data:function(){return{swiperOption:{}}}
    data(){
        return{
            swiperOption:{
                // 参数选项,显示小点
                pagination:'.swiper-pagination',
                //循环
                loop:true,
                //每张播放时长3秒，自动播放
                autoplay:2000,
                //滑动速度
                speed:1000,
                // delay:1000

            },
            pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
            //三张轮播，使用变量循环
            swiperList:[
                {
                    id:'001',
                    imgUrl:"https://s11.mogucdn.com/mlcdn/c45406/180926_5f854h844j5icfdg0a077jg85d9h2_750x390.jpg_700x9999.v1c7E.81.webp"
                },
                {
                    id:'002',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg"
                },
                {
                    id:'003',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg"
                }
            ],
        }
    },
      
}
</script>
<style scoped>
    .swiper-item img{
      width: 100%;
    }
</style>
