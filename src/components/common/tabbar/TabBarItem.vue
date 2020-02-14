<template>
    <div class="tab-bar-item" @click="itemClick">
      <!-- 预留tab-bar-item的三个插槽：未被选中状态图标、选中状态图标、标题 -->
      <!-- 注意：这里写了name，在写入插槽的时候要写上slot -->

      <!-- 不活跃就显示这个图 -->
      <div v-if="!isActive"><slot name='item-icon'></slot></div> 
      <!-- 活跃就显示这个图 -->
      <div v-else><slot name='item-active-icon'></slot></div>  
      <!-- 动态绑定样式，通过i是Active来控制 -->
      <div :class="{active: isActive}"><slot name='item-title'></slot></div>
    </div>
</template>

<script>
export default {
  name:'TabBarItem',
  components:{},
  // 父传子，传值进来
  props:{
    path: String
  },
  data(){
    return {
    }
  },
  methods:{
    itemClick(){
      // 这里如果不做判断，当连续点击同一个页面标题的时候会报错
      // 所以判断当是同一个路径的时候，就不执行
      if(this.path != this.$route.path)
        this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      // 如果当前活跃的路由与路径一致，就等于return true，样式起效果。
      return this.$route.path.indexOf(this.path) !== -1
    }
  }
}
</script>
<style scoped>
  /* tabbar样式 */
  .tab-bar-item{
    flex: 1;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }
  .active{
    color: #ff5577;
  }
</style>