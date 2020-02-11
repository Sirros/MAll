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
      pullUpLoad: true
    })
    // 监听滚动位置
    this.scroll.on('scroll', position=>{
      // 把位置传到外面
      this.$emit('scroll', position)
      // console.log(position)
    })
  },
  methods:{
    scrollToTop(x, y, time) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>
<style scoped>
</style>