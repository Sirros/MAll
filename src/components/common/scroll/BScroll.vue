<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  components: {},
  props:{
    probeType:{
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    // 1.创建实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    })
    
    // 2.监听滚动位置
    this.scroll.on('scroll', position=>{
      // 把位置传到外面
      this.$emit('scroll', position)
    })

    // 3.监听上拉事件
    this.scroll.on('pullingUp', ()=>{
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollToTop(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    // finishPullUp(){
    //   this.scroll && this.scroll.finishPullUp()
    // },
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>
<style scoped>
</style>