<template>
    <div style="width: 100%">
      <div class="people">
        <div style="display: flex;align-items: center">
          <img style="width: 60px;height: 60px;border-radius: 30px;margin-left: 20px" src="http://img2.imgtn.bdimg.com/it/u=2176407858,3353543922&fm=27&gp=0.jpg" alt="">
          <div style="margin-left: 10px">
            <h4 style="font-weight: 400">喝醉的Mobile</h4>
            <p style="font-size: 12px;color: rgba(0,0,0,0.5);margin-top: 2px">添加职位 @ 添加公司</p>
          </div>
        </div>
        <i class="iconfont" style="margin-right: 15px;color: rgba(0,0,0,0.4)">&#xe690;</i>
      </div>
      <div class="manageself">
        <div style="height: 50px;">
          <div style="display: flex;justify-content: space-between;align-items: center;padding: 10px;padding-bottom: 5px">
             <div style="margin-left: 20px">
               <i class="iconfont" style="color: #2ecc71;font-size: 20px">&#xe751;</i>
               <span style="font-weight: 400;font-size: 15px;margin-left: 15px">我喜欢的</span>
             </div>
            <span style="color: rgba(0,0,0,0.4);font-size: 12px;margin-right: 15px">0篇</span>
          </div>
          <hr>
        </div>
        <div style="height: 50px;">
          <div style="display: flex;justify-content: space-between;align-items: center;padding: 10px;padding-bottom: 5px">
            <div style="margin-left: 20px">
              <i class="iconfont" style="color: #3498db; font-size: 20px">&#xe66b;</i>
              <span style="font-weight: 400;font-size: 15px;margin-left: 15px">收藏集</span>
            </div>
            <span style="color: rgba(0,0,0,0.4);font-size: 12px;margin-right: 15px">0个</span>
          </div>
          <hr>
        </div>
        <div style="height: 50px;">
          <div style="display: flex;justify-content: space-between;align-items: center;padding: 10px;padding-bottom: 5px">
            <div style="margin-left: 20px">
              <i class="iconfont" style="color: rgba(0,0,0,0.5); font-size: 20px">&#xe604;</i>
              <span style="font-weight: 400;font-size: 15px;margin-left: 15px">阅读过的文章</span>
            </div>
            <span style="color: rgba(0,0,0,0.4);font-size: 12px;margin-right: 15px">14篇</span>
          </div>
          <hr>
        </div>
        <div style="height: 50px;">
          <div style="display: flex;justify-content: space-between;align-items: center;padding: 10px;padding-bottom: 5px">
            <div style="margin-left: 20px">
              <i class="iconfont" style="color: rgba(0,0,0,0.5); font-size: 20px">&#xe61a;</i>
              <span style="font-weight: 400;font-size: 15px;margin-left: 15px">标签管理</span>
            </div>
            <span style="color: rgba(0,0,0,0.4);font-size: 12px;margin-right: 15px">8个</span>
          </div>
        </div>
      </div>
      <div class="about">
        <div style="height: 50px;">
          <div style="display: flex;justify-content: space-between;align-items: center;padding: 10px;padding-bottom: 5px">
            <div style="margin-left: 20px">
              <i class="iconfont" style="color: rgba(0,0,0,0.5); font-size: 20px">&#xe673;</i>
              <span style="font-weight: 400;font-size: 15px;margin-left: 15px">意见反馈</span>
            </div>

          </div>
          <hr>
        </div>
        <div style="height: 50px;">
          <div style="display: flex;justify-content: space-between;align-items: center;padding: 10px;padding-bottom: 5px">
            <div style="margin-left: 20px">
              <i class="iconfont" style="color: rgba(0,0,0,0.5); font-size: 20px">&#xe63d;</i>
              <span style="font-weight: 400;font-size: 15px;margin-left: 15px">夜间模式</span>
            </div>
          </div>
          <hr>
        </div>
        <div style="height: 50px;">
          <div style="display: flex;justify-content: space-between;align-items: center;padding: 10px;padding-bottom: 5px">
            <div style="margin-left: 20px">
              <i class="iconfont" style="color: rgba(0,0,0,0.5); font-size: 20px">&#xe6a2;</i>
              <span style="font-weight: 400;font-size: 15px;margin-left: 15px">设置</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "PeopleCenter"
    }
</script>

<style scoped>
  .people{
    width: inherit;
    height: 80px;
    background: white;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .manageself{
    width: inherit;
    height: 200px;
    margin-top: 10px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    background: white;
  }
  hr{
    border: none;
    height: 1px;
    background: rgba(0,0,0,0.05);
  }
  .about{
    width: inherit;
    height: 150px;
    margin-top: 10px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    background: white;
  }
</style>
