<template>
  <div class="app">
    <h1 ref="title">Welcome</h1>    
    <!-- 导航区 -->
     <div class="navigate">
      <RouterLink to="/Dog" active-class="active">Dog</RouterLink>
      <RouterLink to="/Namecomputed" active-class="active">Namecomputed</RouterLink>
      <RouterLink to="/Person" active-class="active">Person</RouterLink>
      <RouterLink to="/Car" active-class="active">Car</RouterLink>
      <RouterLink to="Water" active-class="active">Water</RouterLink>
     </div>

     <!-- 组件区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
    
  </div>
</template>

<script lang="ts" setup name="App">
  import {RouterView, RouterLink} from 'vue-router'
</script>

<style scoped>
  /* 加scoped只代表这个局部，不加可能会影响全局的同名样式*/
  .app {
    background-color: #ede2ec;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  .navigate {
    display: flex;
    justify-content: space-between; 
    margin-bottom: 20px;
  }
  .navigate a {
    color: #333;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  .navigate a.active {
    background-color: #4541b8;
    color: #fff;
  }
  .main-content {
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
  }
</style>

