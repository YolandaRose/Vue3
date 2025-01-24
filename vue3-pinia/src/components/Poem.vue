<template>
  <div class="poem">
    <button @click="addPoem">获取一句诗</button>
    <ul>
        <li v-for="poem in poemList" :key="poem.id">{{poem.title}}</li>
    </ul>
  </div>  
</template>

<script setup lang="ts" name="Poem">
    import { usePoemStore } from '../store/poem'
    import { storeToRefs } from 'pinia';
    const poemStore = usePoemStore()
    const { poemList } = storeToRefs(poemStore)
   function addPoem() {
      poemStore.getPoem()
    }
</script>

<style scoped>
  .poem {
    background-color: aliceblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>
