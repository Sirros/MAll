import {debounce} from './utils'
import BackTop from 'components/common/backtop/BackTop';

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

export const backTopMixin = {
  components:{
    BackTop
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    backTop(x, y, time){
      console.log("backtop")
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}