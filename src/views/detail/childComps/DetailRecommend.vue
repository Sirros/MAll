<template>
  <div class="" v-if="Object.keys(recommendsList).length !== 0">
    <goods-list>
      <goods-list-item></goods-list-item>
    </goods-list>
  </div>
</template>

<script>


export default {
  name: 'DetailRecommend',
  components:{
    GoodsList,
  },
  props:{
    recommendsList:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
</style>