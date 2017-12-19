<template>
    <div style="background: white;margin-top: 10px;width: 100%;height: 200px;box-shadow: 0 0.1px 1px 0 rgba(0,0,0,0.1);">
       <div>
         <div style="display: flex;align-items: center;justify-content: space-between;padding-top: 10px">
           <p style="margin-left: 10px"><i class="iconfont" style="color: #e74c3c">&#xe61e;</i><span style="font-weight: 400;font-size: 15px;margin-left: 10px">热门文章</span></p>
           <p style="margin-right: 10px;font-size: 15px;color: rgba(0,0,0,0.5)"><i class="iconfont" style="color: rgba(0,0,0,0.4)">&#xe615;</i><span style="font-size: 12px">订制热门</span></p>
         </div>
         <hr>
       </div>
       <div style="background: white">
         <div v-for="article in hotArticles" @click="showReadArtcile()">
           <div style="padding: 10px 10px;padding-bottom: 30px">
             <p style="font-size: 14px;">{{article.title}}</p>
             <p style="font-size: 10px;color: rgba(0,0,0,0.4)">{{article.love}}人喜欢 · {{article.auth}} · {{article.time}}小时前</p>
           </div>
           <hr>
         </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "HotArticle",
        data(){
          return{
            hotArticles:[
              {
                title: '前段入行两年--教会了我这些道理',
                love: '61',
                auth: '守候i',
                time: '7',
              },
              {
                title: '搭建一个前端监控系统,不再错过BUG',
                love: '73',
                auth: '蓝色的秋风',
                time: '6',
              },
              {
                title: '一起来拥抱强大的TypeScript吧--Ts+Vue完全教程（附Demo项目）',
                love: '36',
                auth: 'developHaoz',
                time: '2',
              },
              {
                title: '知乎 Matisse 源码解析，带你探究高效图片选择库的秘密',
                love: '15',
                auth: 'developHaoz',
                time: '3',
              },
              {
                title: '【只发精品】匠心打造Vue侧滑菜单组件',
                love: '45',
                auth: 'AlexanderHuang',
                time: '6',
              }
            ],
          }
        },
      methods:{
        showReadArtcile:function () {
          this.$store.commit('showReadArticle',true)
        }
      }
    }
</script>

<style scoped>
  hr{
    border: none;
    height: 1px;
    background: rgba(0,0,0,0.05);
  }
</style>
