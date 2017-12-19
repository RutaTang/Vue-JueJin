<template>
    <div style="width: 100%;height: 60px;background: #3498db;display: flex;align-items: center;justify-content: center">
      <h4 style="color: white;font-weight: 400">{{title}}</h4>
    </div>
</template>

<script>
    export default {
        name: "CommonHeader",
        props:['title']
    }
</script>

<style scoped>

</style>
