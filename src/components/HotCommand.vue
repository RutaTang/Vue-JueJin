<template>
  <transition name="fade">
    <div id="HotCommand" v-if="show">
      <div style="padding-top: 15px;">
        <div style="display: flex;justify-content: space-between">
          <h5 style="margin-left: 15px;color: rgba(52, 152, 219,1.0);font-weight: 400"><i class="iconfont">&#xe729;</i><span style="margin-left: 5px">热门推荐</span></h5>
          <i @click="show=false" class="iconfont" style="color: rgba(0,0,0,0.1);margin-right: 20px">&#xe63c;</i>
        </div>
        <hr>
        <div v-for="hot in hots">
          <div style="display: flex;padding-left: 20px;justify-content: space-between;align-items: center">
            <div>
              <p style="font-size: 15px">{{hot.title}}</p>
              <div>
                <span style="font-size: 12px;color: rgba(0,0,0,0.3)"><i class="iconfont">&#xe751;</i>&nbsp;{{hot.love}}</span>
                <span style="margin-left: 5px;font-size: 12px;color: rgba(0,0,0,0.3)"><i class="iconfont">&#xe77f;</i>&nbsp;{{hot.auth}}</span>
                <span style="margin-left: 5px;font-size: 12px;color: rgba(0,0,0,0.3)"><i class="iconfont">&#xe621;</i>&nbsp;{{hot.time}}天前</span>
              </div>
            </div>
            <img style="margin-right: 30px;width: 80px;height: 80px" :src="hot.image" alt="">
          </div>
          <hr>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "HotCommand",
        data(){
          return{
            hots: [
              {
                title:'如何从x书搬家到掘金',
                love: '213',
                auth: 'jokerman',
                time: '2',
                image: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=4002154263,2861169958&fm=202&mola=new&crop=v1',
              },
              {
                title:'前端代码异常监控实战',
                love: '274',
                auth: 'Lindz',
                time: '2',
                image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3278560024,2349980304&fm=58&s=9B83136E0E48EF340B0601580300C0BB&bpow=121&bpoh=75',
              },
              {
                title:'基于node.js的脚手架工具开发经历',
                love: '208',
                auth: '张国逾',
                time: '1',
                image: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1841004364,244945169&fm=58&bpow=121&bpoh=75',
              }
            ],
            show: true
          }
        }
    }
</script>

<style scoped>
  .fade-leave-active{
    transition: opacity .5s;
  }
  .fade-leave-to{
    opacity: 0;
  }
  #HotCommand{
    width: 100%;
    background: white;
    margin-top: 0;
    box-shadow: 0 0.1px 1px 0 rgba(0,0,0,0.4);
  }
  hr{
    border: none;
    height: 1px;
    background: rgba(189, 195, 199,0.3);
  }

</style>
