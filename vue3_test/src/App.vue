<template>
  <div class="app">
    <h1 ref="title">Welcome</h1>
    <button @click="showLog">显示标题元素</button>
    <Person/>
    <Namecomputed/>
    <Car/>
    <Water ref="shui"/>
    <button @click="showWater">显示Water可见元素</button>
  </div>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import Car from './components/Car.vue'
  import Namecomputed from './components/Namecomputed.vue';
  import Water from './components/Water.vue';

  //创建一个title用于存储ref标记的内容
  import { ref } from 'vue'
  let title = ref()
  function showLog() {
    console.log(title.value)
  }

  //创建一个shui用于存储ref标记的内容，并显示water组件通过defineExpose暴露的水的属性
  let shui = ref()
  function showWater() {
    console.log(shui.value)
  }
</script>

<style scoped>
  /* 加scoped只代表这个局部，不加可能会影响全局的同名样式*/
  .app {
    background-color: #ede2ec;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>

