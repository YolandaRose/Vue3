<template>
  <div class="count">
    <h2>Count: {{ sum }}</h2>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increse">加</button>
    <button @click="decrese">减</button>
  </div>  
</template>

<script setup lang="ts" name="Count">
 import { ref } from 'vue'
 import { storeToRefs } from 'pinia'
 //引入useCountStore
 import {useCountStore} from '../store/count'
//数据
 const countStore = useCountStore()
 let n = ref(1)//用户选择数字
 //storeToRefs 只会关注store 中数据，不会对方法进行ref包裹
 const { sum } = storeToRefs(countStore)

//方法
 function increse() {
    useCountStore().increment(n.value)
 }
 function decrese() {
    useCountStore().decrement(n.value)
 }

</script>

<style scoped>
  .count {
    background-color: pink;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select, button {
    margin: 0 5px;
    height: 25px;
  }
</style>
