<template>
  <div>
    <main-tab-bar/>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  /* 路径使用了别名 */
  @import "assets/css/base.css";
</style>
