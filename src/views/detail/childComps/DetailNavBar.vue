<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="back-button" @click="backClick">
        <img src="~assets/images/common/back.svg" alt=""/>
      </div>
      <div slot="center" class="title">
        <div class="title-item" 
          v-for="(item, index) in title" 
          :key='index'
          @click="detailItemClick(index)"
          :class="{isActive: currentIndex === index}">{{item}}</div>
      </div>
      <div slot="right"></div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  props:{},
  data(){
    return {
      title: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  computed:{},
  methods:{
    detailItemClick(index) {
      // this.currentIndex = index
      this.$emit('detailItemClick', index)
    },
    backClick() {
      this.$router.back()
    }
  },
  watch:{},

  created(){},
  mounted(){}
}
</script>
<style scoped>
  .title{
    display: flex;
    text-align: center;
  }
  .title-item{
    flex: 1;
    font-size: 13px;
  }
  .isActive{
    color: var(--color-high-text);
  }
  .back-button{
    height: 100%;
    position: relative;
  }
  .back-button img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>