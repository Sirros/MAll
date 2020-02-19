<template>
  <div class="check-button" :class="{select: isSelect}">
    <img src="~assets/images/cart/tick.svg" alt=""/>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  components:{},
  props:{
    isSelect: {
      type: Boolean,
      default: true
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
  .check-button{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #aaa;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .check-button img{
    width: 14px;
    height: 14px;
  }
  .select{
    background-color: var(--color-tint);
    border-color: var(--color-tint);
  }
</style>