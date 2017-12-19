<template>
    <div>
      <el-carousel height="150px" arrow="never">
        <el-carousel-item v-for="image in images" :key="image">
          <img style="width: inherit;height: inherit" :src="image" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
      name: "Carousel",
      data(){
        return{
            images:[
              "http://wimg.huodongxing.com/logo/201712/3417245094000/772905617658290_v2.jpg@!wmlogo",
              "http://wimg.huodongxing.com/logo/201712/2417973718300/912902667738841.jpg@!wmlogo",
              "https://pub-files.jinshuju.net/hi/20171207203419_655947@hixlargeRetina"
            ]
        }
      },

    }
</script>

<style scoped>
  img{
    width: 100%;
    height: 160px;
    position: absolute;
  }

</style>
