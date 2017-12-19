<template>
    <div style="height: 80px;width: 100%;background: white;box-shadow: 0 -0.1px 1px 0 rgba(0,0,0,0.1);display: flex;align-items: center;justify-content:space-around">
      <div class="btn">
        <p><i class="iconfont" style="color: #e74c3c">&#xe61e;</i></p>
        <p>本周热门</p>
      </div>
      <div class="btn">
        <i class="iconfont" style="color: #16a085">&#xe67f;</i>
        <p>收藏集</p>
      </div>
      <div class="btn">
        <i class="iconfont" style="color: #e67e22">&#xe6a7;</i>
        <p>线下活动</p>
      </div>
      <div class="btn">
        <i class="iconfont" style="color: #523A66">&#xe65d;</i>
        <p>专栏</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ButtonList"
    }
</script>

<style scoped>
  i{
    font-size: 30px;
  }
  .btn{
    text-align: center;
    margin-top: 5px;
  }
  p{
    font-size: 10px;
    margin-top: 2px;
    color: rgba(0,0,0,0.8);
  }
</style>
