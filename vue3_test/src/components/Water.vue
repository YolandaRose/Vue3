<template>
    <div class="water">
        <h2>需求：水温达到 60°C 或水位达到 80cm 给服务器发送请求</h2>
        <h2>水温：{{ temp }}°C</h2>
        <h2>水位：{{ height }}cm</h2>
        <button @click="riseTemp">加温1°C</button>
        <button @click="lowTemp">降温°C</button>
        <button @click="riseHeight">加高10</button>
        <button @click="lowHeight">降低10</button>
    </div>
</template>
  
<script lang="ts" setup>
  import { ref, watchEffect, defineExpose } from 'vue'
  let temp = ref(36.5)
  let height = ref(0)

  function riseTemp() {
    temp.value +=  1
  }
  function lowTemp() {
    temp.value -= 1
  }
  function riseHeight() {
    height.value += 10
  }
  function lowHeight() {
    height.value -= 10
  }

  //监视，watchEffect会自动分析监视
  watchEffect(() => {
    if(temp.value >= 38 || height.value >= 80){
        console.log('给服务器发送请求')
    }
  })

  //选择组件中可以暴露的变量:temp可以在App.vue中用ref接收，height不可见
  defineExpose({temp})

</script>
  
<style scoped>
    .water {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button{
    margin: 0 10px;
  }
</style>
  
  