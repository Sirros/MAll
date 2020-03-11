<template>
  <div class="user-info">
    <nav-bar><div slot="center">我的档案</div></nav-bar>
    <div class="user-info-content">
      <div class="user-info-avatar">
        <slot><img src="~assets/images/profile/avatar-default.jpg" /></slot>
      </div>
      <div class="user-nickname">
        <slot name="nickname">
          <div>登录/注册</div>
        </slot>
        <slot name="phone">
          <div class="phone-info">
            <img src="~assets/images/profile/phone.svg" />暂无绑定手机号
            <!-- <p>暂无绑定手机号</p> -->
          </div>
        </slot>
      </div>
      <div class="right-logo">
        <img src="~assets/images/profile/right.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: '',
  components:{
    NavBar
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
  .user-info{ 
    width: 100%;
    height: 140px;
    background-color: var(--color-tint);
    text-align: center;
    color: #fff;
  }
  .user-info .user-info-content{
    display: flex;
    height: calc(100% - 44px);
    justify-content: center;
    align-items: center;
  }
  .user-info .user-info-content .user-info-avatar{
    width: 20%;
    height: 100%x;
    padding: 12px;
    margin-left: 10px;
  }
  .user-info .user-info-content .user-nickname{
    flex: 1;
    text-align: left;
  }
  .user-info .user-info-content .user-nickname .phone-info{
    margin-top: 4px;
  }
  .user-info .user-info-content .user-nickname .phone-info img{
    height: 15px;
  }
  .user-info .user-info-content .user-info-avatar img{
    width: 100%;
    border-radius: 50%;
  }
  .user-info .user-info-content .right-logo{
    width: 15%;
  }
  .user-info .user-info-content .right-logo img{
    width: 36px;
    height: 36xp;
  }
</style>