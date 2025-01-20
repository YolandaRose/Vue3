<template>
  <div class="app">
    <h1>Welcome</h1>
    <Person/>
    <Car/>
  </div>
</template>

<script lang="ts">
  import Person from './components/Person.vue'
  import Car from './components/Car.vue'
  export default {
    name: 'App',//组件名
    components: {Person,Car}//注册组件
  }
</script>

<style scoped>
  .app {
    background-color: #ede2ec;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>

