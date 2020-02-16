<template>
  <div class="detail-param-info" v-if="Object.keys(goodsParam).length !== 0">
    <!-- 尺码表 -->
    <table class="info-size" v-for="(table, index) in goodsParam.sizes" :key="index">
      <tr class="info-size-item" v-for="(tr, indexy) in table" :key="indexy">
        <td v-for="(td, indexz) in tr" :key="indexz">{{td}}</td>
      </tr>
    </table>
    <!-- 参数表：生产信息等 -->
    <table class="info-param">
      <tr v-for="(item, index) in goodsParam.infos" :key="index">
        <td class="info-param-key">{{item.key}}</td>
        <td class="info-param-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsParam.image.length !== 0">
      <img :src="goodsParam.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  components:{},
  props:{
    goodsParam: {
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
  .detail-param-info{
    padding: 10px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  
  .info-size{
    width: 100%;
  }
  .info-size table{
    width: 100%;
    border-collapse: collapse;
  }
  .detail-param-info table tr{
    height: 42px;
  }
  .info-size tr td{
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .info-param{
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .info-param .info-param-key{
    width: 95px;
  }
 
  .info-param .info-param-value{
    color: #eb4868
  }
  .info-img img {
    width: 100%;
  }
</style>