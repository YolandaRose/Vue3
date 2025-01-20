<template>
    <div class="car">
      <h2>汽车信息：一辆{{ car.brand }}车， 价值{{ car.price }}万元</h2>
      <button @click="changePrice">加价</button>
      <br>
      <h2>游戏列表:</h2>
      <ul>
        <li v-for="g in games" :key="g.id">{{ g.name }}</li>
      </ul>
      <button @click="changeFirstGame">改第一个游戏</button>
    </div>
</template>
  
<script lang="ts" setup name="Car">
  import { reactive } from 'vue'//使对象变为响应式
  //对象
  let car = reactive({brand:'benz',price:100})
  let games = reactive([
    {id:'a01',name:'Infinity Nikki'},
    {id:'a02',name:'overcooked 2'},
    {id:'a03',name:'untouchable'}])
  //方法
  function changePrice() {
    car.price += 10
  }
  function changeFirstGame() {
    games[0].name = 'The Last of Us'
  }
</script>
  
<style scoped>
    .car {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button{
    margin: 0 10px;
  }
</style>
  
  