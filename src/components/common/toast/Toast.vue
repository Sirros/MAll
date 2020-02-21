<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  components:{},
  props:{},
  data(){
    return {
      isShow: false,
      message: ''
    }
  },
  methods:{
    show(message, duration=1500) {
      this.isShow = true
      this.message = message

      setTimeout(()=>{
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>
<style scoped>
  .toast{
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .75);
    color: #fff;
    padding: 8px 15px;
    border-radius: 4px;
    z-index: 99;
  }
</style>