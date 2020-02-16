<template>
  <div class="detail-comment-info" v-if="Object.keys(goodsCommentInfo).length !== 0">
    <div class="comment-title">
      <span>用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="comment-user" >
      <img :src="goodsCommentInfo.user.avatar" alt=""/>
      <span>{{goodsCommentInfo.user.uname}}</span>
    </div>
    <div class="comment-content">
      <div class="content-text">{{goodsCommentInfo.content}}</div>
      <div class="content-params">{{goodsCommentInfo.created | formatDate}}<span>{{goodsCommentInfo.style}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCommentInfo',
  components:{},
  props:{
    goodsCommentInfo:{
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
  computed:{
    nowTime(timeVal) {
      let date = new Date(parseInt(timeVal) * 1000)
      let realtime = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
      return realtime
    }
  },
  filters:{
    // 时间戳转换
    formatDate(value) {
      if(value == null){
        return ''
      }else{
        let date = new Date(value * 1000)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        month = month > 10 ? month : ('0'+ month)
        let day = date.getDate()
        day = day > 10 ? day : ('0' + day)
        return year + '-' + month + '-' + day
      }
    }
  }
}
</script>
<style scoped>
  .detail-comment-info{
    padding: 0 15px 10px 15px;
    box-sizing: border-box;
    border-bottom: 5px solid #f2f5f8;
  }
  .comment-title{
    width: 100%;
    height: 50px;
    line-height: 40px;
    border-bottom: 3px solid #f2f5f8;
  }
  .comment-title .more{float: right;}
  .comment-title span{
    color: #333;
  }
  .comment-user{
    height: 50px;
    line-height: 50px;
  }
  .comment-user span{
    color: #333;
    margin-left: 5px;
    vertical-align: middle;
  }
  .comment-user img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .comment-content{
    width: 100%;
    margin: 6px 0;
    color: #999;
  }
  .comment-content .content-text{
    font-size: 14px;
    margin-bottom: 6px;
  }
  .comment-content .content-params{
    font-size: 12px;
  }
  .comment-content .content-params span{
    margin-left: 6px;
  }
</style>