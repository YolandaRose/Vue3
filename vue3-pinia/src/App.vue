<template>
  <div class="app">
    <Count /><br>
    <Poem />
  </div>  
</template>

<script setup lang="ts" name="App">
  import Count from './components/Count.vue'
  import Poem from './components/Poem.vue'
</script>

<style scoped>
  .app {
    background-color: white;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>
