<template>
  <transition name="slide">
    <div v-if="seen" class="ReadArticle" :style="{height:height}">
      <div class="header">
        <div style="display: flex;align-items: center">
          <i class="iconfont" style="font-size: 25px;margin-left: 15px" @click="hidePage()">&#xe62e;</i>
          <img style="width: 40px;height: 40px;border-radius: 20px;margin-left: 30px" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3743909004,3340426306&fm=27&gp=0.jpg" alt="">
          <span style="font-size: 14px;font-weight: 300;margin-left: 8px">风青杨ELSE</span>
        </div>
        <div style="font-size: 25px;margin-right: 10px;color: rgba(0,0,0,0.6)">
          <i class="iconfont" style="margin-right: 10px;font-size: 23px">&#xe612;</i>
          <i class="iconfont">&#xe600;</i>
        </div>
      </div>
      <div class="content">
        <iframe src="https://mp.weixin.qq.com/s/PUdfChwnon4hAZGTUvR8Qw" frameborder="0" width="100%" :style="{height:iframeHeight}"></iframe>
      </div>
      <div class="footer">
        <i class="iconfont" style="margin-left: 20px;color: #2ecc71">&#xe791;</i>
        <i class="iconfont">&#xe659;</i>
        <i class="iconfont">&#xe643;</i>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "ReadArticle",
        props:["seen"],
        data(){
          return{
            height: window.innerHeight+'px',
            iframeHeight: window.innerHeight-110+'px'
          }
        },
        methods:{
          hidePage:function () {
            this.$store.commit('showReadArticle',false)
          }
        }
    }
</script>

<style scoped>
  .footer{
    width: 100%;
    height: 50px;
    background: white;
    box-shadow: 0 -0.1px 1px 0 rgba(0,0,0,0.4);
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: 25px;
  }
  .footer i{
    margin: 0 12px;
    color: rgba(0,0,0,0.6);
  }
  .content{
    margin-top: 62px;
    padding-bottom: 46px;
  }
  .header{
    width: inherit;
    height: 60px;
    box-shadow: 0 0.1px 1px 0 rgba(0,0,0,0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 2;
    background: white;
  }
  @keyframes slideIn {
    from {left: 100%}
    to {left:  0}
  }
  @keyframes slideOut {
    from {left: 0}
    to {left:  100%}
  }
  .ReadArticle{
    box-shadow: -0.1px 0.1px 2px 0 rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
    z-index: 100;
  }
  .slide-enter-active{
    -webkit-animation: slideIn .5s;
    -o-animation: slideIn .5s;
    animation: slideIn .5s;
  }
  .slide-leave-active{
    -webkit-animation: slideOut .5s;
    -o-animation: slideOut .5s;
    animation: slideOut .5s;
  }
</style>
