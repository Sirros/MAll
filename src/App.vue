<template>
  <div>
    <main-tab-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  /* 路径使用了别名 */
  @import "assets/css/base.css";
</style>
