<template>
  <div class="category-content">
    <!-- 左边分类 -->
    <category-left-bar class="category-conten left-bar"/>
    <!-- 右边列表 -->
    <category-list class="category-conten right-list"/>
  </div>
</template>

<script>
import CategoryLeftBar from './CategoryLeftBar'
import CategoryList from './CategoryList'

export default {
  name: 'CategoryContent',
  components:{
    CategoryLeftBar,
    CategoryList
  },
  props:{},
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
  .category-content{
    display: flex;
  }
  .left-bar{
    width: 30%;
    text-align: center;
  }
  .right-list{
    flex: 1;
  }
</style>