import {debounce} from './utils'

export const itemListenerMixin = {
  data(){
    return {
      itemImageListener: null
    }
  },
  mounted() {
    // 1.监听item中图片加载完成
    // 防抖操作
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemImageListener = ()=>{
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImageListener)
  }
}