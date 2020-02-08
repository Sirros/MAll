<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  }
}
</script>
<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
  }
  .center{
    flex: 1;
  }
  .left, .right{
    width: 55px;
  }
</style>