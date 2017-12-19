<template>
    <div style="height: 60px;position: fixed;bottom: 0;width: 100%;background-color: white;box-shadow: 0 -0.1px 0.1px 0 rgba(0,0,0,0.1)">
      <div style="height: inherit;width: inherit;display: flex;align-items: center;justify-content: space-around">
        <i @click="changeColor('home')" class="iconfont" :class="{icolor:this.$store.state.tab_home}">&#xe617;</i>
        <i @click="changeColor('search')" class="iconfont" :class="{icolor:this.$store.state.tab_search}">&#xe777;</i>
        <i @click="changeColor('bell')" class="iconfont" :class="{icolor:this.$store.state.tab_bell}">&#xe616;</i>
        <i @click="changeColor('people')" class="iconfont" :class="{icolor:this.$store.state.tab_people}">&#xe6b3;</i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabNavBar",
        data(){
          return{

          }
        },
        methods:{
          changeColor:function (val) {
            switch (val){
              case 'home':
                this.$store.commit('tab_home',true)
                this.$store.commit('tab_search',false)
                this.$store.commit('tab_bell',false)
                this.$store.commit('tab_people',false)
                break;
              case 'search':
                this.$store.commit('tab_search',true)
                this.$store.commit('tab_home',false)
                this.$store.commit('tab_bell',false)
                this.$store.commit('tab_people',false)
                break;
              case 'bell':
                this.$store.commit('tab_bell',true)
                this.$store.commit('tab_search',false)
                this.$store.commit('tab_home',false)
                this.$store.commit('tab_people',false)
                break;
              case 'people':
                this.$store.commit('tab_people',true)
                this.$store.commit('tab_bell',false)
                this.$store.commit('tab_search',false)
                this.$store.commit('tab_home',false)
                break;
            }
          }
        }
    }
</script>

<style scoped>
  i{
    color: rgba(189, 195, 199,1.0);
    font-size: 25px;
  }
  .icolor{
    color: rgba(52, 152, 219,1);
  }
</style>
