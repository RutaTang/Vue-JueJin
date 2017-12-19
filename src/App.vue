<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  *{
    font-family: "华文细黑";
  }
  body{
    background: rgba(52, 73, 94,0.05);
  }
  h1,h2,h3,h4,h5{
    margin: 0;
  }
  p{
    margin: 0;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 510849 */
    src: url('//at.alicdn.com/t/font_510849_s7j489aa917fd2t9.eot');
    src: url('//at.alicdn.com/t/font_510849_s7j489aa917fd2t9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_510849_s7j489aa917fd2t9.woff') format('woff'),
    url('//at.alicdn.com/t/font_510849_s7j489aa917fd2t9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_510849_s7j489aa917fd2t9.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family: 'iconfont'!important;
    font-style: normal;
  }
</style>
