<template>
  <div class="recommends">
    <div class="recommends-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt=""/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  components:{},
  props:{
    recommends: Array,
    default(){
      return []
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
  .recommends{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 10px 0 30px;
    border-bottom: 8px solid #eee;
    font-size: 12px;
  }
  .recommends-item{
    flex: 1;
  }
  .recommends-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 2px;
  }
</style>