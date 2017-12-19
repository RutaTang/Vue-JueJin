<template>
    <div style="height: 160px;width: 100%;background: white;box-shadow: 0 0.1px 1px 0 rgba(0,0,0,0.1);margin-top: 10px;padding-top: 10px">
      <div>
        <div style="display: flex;align-items: center;justify-content: space-between;margin-top: 5px;">
          <p style="margin-left: 10px"><i class="iconfont" style="color: #f39c12">&#xe6b0;</i><span style="font-weight: 400;font-size: 15px;margin-left: 10px">沸点</span></p>
          <p style="margin-right: 10px"><i class="iconfont" style="color: rgba(0,0,0,0.4)">&#xe690;</i></p>
        </div>
        <hr style="margin-top: 5px">
      </div>
      <div class="boilContainer" style="width: 100%;overflow: scroll;white-space: nowrap;padding-top: 5px">
        <div style="position: relative;width: 180px;height: 100px;margin-left: 5px;margin-right:5px;display: inline-block" v-for="boil in boilList">
          <p style="position: absolute;z-index: 2;width: 150px;text-align: center;color: white;top: 30px;overflow: hidden;padding:10px;text-overflow: revert">{{boil.title}}</p>
          <div style="width: inherit;height: inherit;background: rgba(0,0,0,0.2);position: absolute;z-index: 1;border-radius: 5px">
          </div>
          <img style="width: inherit;height: inherit;border-radius: 5px;position: absolute" :src="boil.img" alt="">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Boil",
        data(){
          return{
            boilList:[
              {
                title: '沸点：说说你目前在学习什么？',
                img: 'https://img1.mukewang.com/szimg/59eeb022000162bc05400300.jpg',
              },
              {
                title: '沸点：从面试到跳槽',
                img: 'https://img3.mukewang.com/szimg/59897b1600011ec805400300.jpg',
              },
              {
                title: '沸点：UI动效设计',
                img: 'https://img4.mukewang.com/5a2f45cb0001cfd606000338-240-135.jpg',
              }

            ]
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
  .boilContainer::-webkit-scrollbar{
    display: none;
  }
</style>
