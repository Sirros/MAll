<template>
    <div id="home">
      <nav-bar class='home-nav-bar'>
        <div slot="center">购物街</div>
      </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  components:{
    NavBar
  },
  props:{},
  data(){
    return {
    }
  }
}
</script>
<style scoped>
  .home-nav-bar{
    color: #fff;
    text-align: center;
    background-color: var(--color-tint);
  }
</style>