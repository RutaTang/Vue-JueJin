<template>
    <div>
      <div v-if="this.$store.state.tab_home" class="content" :style="{height:homeheight}">
      <HomeNavBar></HomeNavBar>
        <div style="padding-bottom: 60px;padding-top: 60px">
          <div v-if="this.$store.state.nav_home">
            <HotCommand></HotCommand>
            <CardsList :cards="homeCards"></CardsList>
          </div>
          <div v-if="this.$store.state.nav_prd">
            <CardsList :cards="prdCards"></CardsList>
          </div>
          <div v-if="this.$store.state.nav_front">
            <CardsList :cards="frontCards"></CardsList>
          </div>
          <div v-if="this.$store.state.nav_ios">
            <CardsList :cards="iosCards"></CardsList>
          </div>
        </div>
      <TabNavBar></TabNavBar>
      </div>
      <div v-if="this.$store.state.tab_search" class="content" :style="{height:height}">
        <SearchNavBar></SearchNavBar>
        <div style="margin-top: 60px;">
          <Carousel></Carousel>
          <ButtonList></ButtonList>
          <Boil></Boil>
          <HotArticle></HotArticle>
        </div>
        <TabNavBar></TabNavBar>
      </div>
      <div v-if="this.$store.state.tab_bell" class="content" :style="{height:height}">
        <CommonHeader title="消息"></CommonHeader>
        <Message></Message>
        <TabNavBar></TabNavBar>
      </div>
      <div v-if="this.$store.state.tab_people" class="content" :style="{height:height}">
        <CommonHeader title="我"></CommonHeader>
        <PeopleCenter></PeopleCenter>
        <TabNavBar></TabNavBar>
      </div>
      <div>
        <ReadArticle :seen="this.$store.state.isReadArticle"></ReadArticle>
      </div>
    </div>
</template>

<script>
  import HomeNavBar from '../components/HomeNavBar'
  import HotCommand from '../components/HotCommand'
  import CardsList from '../components/CardsList'
  import TabNavBar from '../components/TabNavBar'
  import SearchNavBar from '../components/SearchNavBar'
  import Carousel from '../components/Carousel'
  import ButtonList from '../components/ButtonList'
  import Boil from '../components/Boil'
  import HotArticle from '../components/HotArticle'
  import CommonHeader from '../components/CommonHeader'
  import Message from '../components/Message'
  import PeopleCenter from '../components/PeopleCenter'
  import ReadArticle from '../components/ReadArticle'
  export default {
      name: "Home",
      components:{
        HomeNavBar,
        HotCommand,
        CardsList,
        TabNavBar,
        SearchNavBar,
        Carousel,
        ButtonList,
        Boil,
        HotArticle,
        CommonHeader,
        Message,
        PeopleCenter,
        ReadArticle
      },
      data(){
        return{
          homeheight:window.innerHeight+'px',
          height:window.innerHeight - 60+'px',
          homeCards: [
              {
                image: 'https://dn-simplecloud.shiyanlou.com/gravatarPWAUVKJLMF8C.jpg?imageView2/1/w/200/h/200',
                auth: 'mymdeep',
                title: '推荐一个好用的数据库SDK-deepsql',
                category: '数据库 / JSON',
                description: '好吧，说是推荐，其实这是我写的一个数据库组件，介绍给大家，这是第一版。希望大家在使用的同时能够提出意见，或者提出需求。第一个参数是Application第二个参数是',
                love: '2',
              },
              {
                image: 'https://img4.mukewang.com/577baef700019c4501400140-40-40.jpg',
                auth: '小芋头君',
                title: '数据模拟神器 easy-mock 正式开源',
                category: '数据库 / 模拟器',
                description: '大搜车无线团队出品的 easy-mock 在线数据模拟服务上线至今已经有几个月时间了，近期网站刚更新了焕然一新的 2.0 版本，与此同时，我们还带来一个更重磅的消息：',
                love: '5',
              },
              {
                image: 'https://img.mukewang.com/57f3cfe40001091204000400-40-40.jpg',
                auth: '卡巴拉的树',
                title: '面试官最爱的volatile关键字',
                category: '产品 / 面试',
                description: '在Java相关的岗位面试中，很多面试官都喜欢考察面试者对Java并发的了解程度，而以volatile关键字作为一个小的切入点，往往可以一问到底，把Java内存模型（JMM），Java并发编程的一些特性都牵扯出来，深入地话还可以考察JVM底层实现以及操作系统的相关知识。',
                love: '1',
              }
            ],
          prdCards:[
            {
              image: 'http://img.woshipm.com/WD_U_201611_20161128152402_9211.jpg?imageView2/1/w/42/h/42/q/100',
              auth: '耳洞',
              title: '2018年用户体验设计趋势',
              category: '产品 / 设计',
              description: '导航体验是2017年设计师中的热门话题。设计师殚精竭虑，拿出熬秃少年头的精神，就是为了创造更易用的用户体验，而导航设计在其中作用重大。',
              love: '10',
            },
            {
              image: 'https://static.woshipm.com/WX_U_201707_20170722215059_5644.jpg?imageView2/1/w/42/h/42/q/100',
              auth: 'lighting',
              title: 'B端产品需求分析的实践与思考',
              category: '产品 / 交互',
              description: '本人认为这是从宏观方向的解释，若从软件或互联网产品这个微观角度解释的话：需求是在特定的角色特定的场景想要达成某种目的内心的渴望。也就是在研究需求的时候，不可将角色、场景和内心渴望分开来讨论，否则就容易导致需求不满足的情况。',
              love: '8',
            },
            {
              image: 'https://img.mukewang.com/57f3cfe40001091204000400-40-40.jpg',
              auth: '卡巴拉的树',
              title: '面试官最爱的volatile关键字',
              category: '产品 / 面试',
              description: '在Java相关的岗位面试中，很多面试官都喜欢考察面试者对Java并发的了解程度，而以volatile关键字作为一个小的切入点，往往可以一问到底，把Java内存模型（JMM），Java并发编程的一些特性都牵扯出来，深入地话还可以考察JVM底层实现以及操作系统的相关知识。',
              love: '1',
            }
          ],
          frontCards:[
            {
              image: 'http://img5.imgtn.bdimg.com/it/u=3107943997,3178152266&fm=27&gp=0.jpg',
              auth: 'liusong',
              title: '使用VUE分分钟写一个验证码输入组件',
              category: '前端 / Vue',
              description: '输入时，给输入框赋一次值，是为了解决android端上输入框失焦后重新聚焦，输入光标会定在第一位的前面，经过赋值再聚焦，光标的位置就会显示在最后一位后面。',
              love: '3',
            },
            {
              image: 'http://img2.imgtn.bdimg.com/it/u=2053368419,1320690363&fm=27&gp=0.jpg',
              auth: '守候i',
              title: 'JavaScript 实用技巧和写法建议',
              category: '前端 / JS',
              description: '从大学到现在，接触前端已经有几年了，感想方面，就是对于程序员而言，想要提高自己的技术水平和编写易于阅读和维护的代码，我觉得不能每天都是平庸的写代码，更要去推敲，去摸索和优化代码，总结当中的技巧，积极听取别人的建议，这样自己的技术水平会提高的更快。',
              love: '5',
            },
            {
              image: 'https://img.mukewang.com/57f3cfe40001091204000400-40-40.jpg',
              auth: 'nekron',
              title: 'web知识进阶——字符编解码',
              category: '前端 / Web',
              description: '、因为中文的博大精深，以及早期文件编码的不统一，造成了现在可能碰到的文件编码有GB2312、GBk、GB18030、UTF-8、BIG5等。因为编解码的知识比较底层和冷门，一直以来我对这几个编码的认知也很肤浅，很多时候也会疑惑编码名到底是大写还是小写，英文和数字之间是不是需要加“-”，规则到底是谁定的等等。',
              love: '1',
            }
          ],
          iosCards:[
            {
              image: 'https://dn-simplecloud.shiyanlou.com/gravatarPWAUVKJLMF8C.jpg?imageView2/1/w/200/h/200',
              auth: 'mymdeep',
              title: '推荐一个好用的数据库SDK-deepsql',
              category: '数据库 / JSON',
              description: '好吧，说是推荐，其实这是我写的一个数据库组件，介绍给大家，这是第一版。希望大家在使用的同时能够提出意见，或者提出需求。第一个参数是Application第二个参数是',
              love: '2',
            },
            {
              image: 'https://img4.mukewang.com/577baef700019c4501400140-40-40.jpg',
              auth: '小芋头君',
              title: '数据模拟神器 easy-mock 正式开源',
              category: '数据库 / 模拟器',
              description: '大搜车无线团队出品的 easy-mock 在线数据模拟服务上线至今已经有几个月时间了，近期网站刚更新了焕然一新的 2.0 版本，与此同时，我们还带来一个更重磅的消息：',
              love: '5',
            },
            {
              image: 'https://img.mukewang.com/57f3cfe40001091204000400-40-40.jpg',
              auth: '卡巴拉的树',
              title: '面试官最爱的volatile关键字',
              category: '产品 / 面试',
              description: '在Java相关的岗位面试中，很多面试官都喜欢考察面试者对Java并发的了解程度，而以volatile关键字作为一个小的切入点，往往可以一问到底，把Java内存模型（JMM），Java并发编程的一些特性都牵扯出来，深入地话还可以考察JVM底层实现以及操作系统的相关知识。',
              love: '1',
            }
          ],
        }
      }
  }
</script>

<style scoped>
  .content{
      overflow-y: scroll;
  }
  .content::-webkit-scrollbar{
    display: none;
  }
</style>
