<template>
  <div class="profile">
    <user-info></user-info>

    <!-- 会员信息下的横向三列表 -->
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
  </div>
</template>

<script>
import UserInfo from './childComps/UserInfo'

export default {
  name:'Profile',
  components:{
    UserInfo
  },
  props: {
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
  .profile{
    height: 100vh;
    background-color: #e4e4e4;
  }
  .account{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-size: 18px;
    text-align: center;
    background-color: #ffff;
    margin-bottom: 20px;
  }
  .account-item{
    width: 33.33%;
    border-right: solid 1px #e4e4e4;
  }
  .account-item .number .balance{
    color: orangered;
    font-weight: 700;
  }
</style>