<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
  components:{
    TabBarItem
  },
  props:{},
  data(){
    return {
    }
  }
}
</script>
<style scoped>
 #tab-bar{
    display: flex;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.09);
    background-color: #fff;
    z-index: 10;
  }
</style>