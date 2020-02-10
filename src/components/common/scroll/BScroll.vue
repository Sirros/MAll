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
  props:{},
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true,
      pullUpLoad: true
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