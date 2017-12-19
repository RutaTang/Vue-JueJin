<template>
    <div class="HomeNavBar">
      <ul>
        <li id="homeref" @click="home">首页</li>
        <li @click="android">产品</li>
        <li @click="frontend">前端</li>
        <li @click="ios">iOS</li>
      </ul>
     <div id="indicator" :style="{left:left}"></div>
    </div>

</template>

<script>
    export default {
      name: "HomeNavBar",
      mounted(){
        this.init()
      },
      data(){
        return{
          left: '',

        }
      },
      methods:{
        init:function () {
          this.left = document.getElementById('homeref').offsetLeft+3+'px'
        },
        home:function(){
          this.left = event.currentTarget.offsetLeft+3+'px'
          this.$store.commit('changeNav','nav_home')
        },
        android:function(){
          this.left = event.currentTarget.offsetLeft+3+'px'
          this.$store.commit('changeNav','nav_prd')
        },
        frontend:function(){
          this.left = event.currentTarget.offsetLeft+3+'px'
          this.$store.commit('changeNav','nav_front')
        },
        ios:function(){
          this.left = event.currentTarget.offsetLeft+3+'px'
          this.$store.commit('changeNav','nav_ios')
        }
      }
    }
</script>

<style scoped>
  .HomeNavBar{
    width: 100%;
    height: 60px;
    background-color: #3498db;
    font-size: 14px;
    font-weight: 400;
    position: fixed;
  }
  #indicator{
    width:60px;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding-left: 20px;
  }
  ul li {
    display: inline-block;
    margin-top: 20px;
    padding: 0 20px;
    color: white;
  }
</style>
