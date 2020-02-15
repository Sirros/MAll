<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
  name:'TabBar',
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
    
    height: 49px;
    
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.09);
    background-color: #f6f6f6;
    /* z-index: 10; */
  }
</style>