<template>
  <div class="tab-control">
    <div class="tab-control-item" 
    v-for="(item, index) in title"
    :class="{active: index === currentIndex}"
    @click="tabControlClick(index)" 
    :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    title: Array,
    default(){
      return []
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods:{
    // 点击的时候把index传到home实现数据切换显示功能
    tabControlClick(index){
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>
<style scoped>
  .tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text)
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>