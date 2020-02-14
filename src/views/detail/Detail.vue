<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'

export default {
  components:{
    DetailNavBar
  },
  props:{},
  data(){
    return {
      iid: null
    }
  },
  computed:{},
  methods:{},
  created(){
    this.iid = this.$route.params.iid
  },
  mounted(){}
}
</script>
<style scoped>
</style>