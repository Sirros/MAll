<template>
  <div class="cart-list-item">
    <span>{{product}}</span>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  components:{},
  props:{
    product:{
      type: Object,
      default(){
        return {}
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