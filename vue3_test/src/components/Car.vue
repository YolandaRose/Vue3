<template>
    <div class="car">
      <h2>汽车信息：一辆{{ car.brand }}车， 价值{{ car.price }}万元</h2>
      <button @click="changePrice">加价</button>
      <button @click="changeCar">换车</button>

      <br>
      <h2>游戏列表:</h2>
      <ul>
        <li v-for="g in games" :key="g.id">{{ g.name }}</li>
      </ul>
      <button @click="changeFirstGame">改第一个游戏</button>
      <button @click="changeSecondGame">改第二个游戏</button>
      <button @click="changethirdGame">改第三个游戏</button>

      <h2>当前求和为:{{ sum }}</h2>
      <button @click="changeSum">点我加1</button>
      <br>
      <h2>reactive对象:{{ Obj.a.b.c }}</h2>
      <button @click="changeObj">改变Obj</button>
    </div>
</template>
  
<script lang="ts" setup name="Car">
  import { ref, reactive, watch } from 'vue'//使对象变为响应式
  //对象
  let car = reactive({brand:'benz',price:100})
  let games = reactive([
    {id:'01',name:'Infinity Nikki'},
    {id:'02',name:'overcooked 2'},
    {id:'03',name:'untouchable'}])
  let sum = ref(0)
  let Obj = reactive({a:{b:{c:123}}})

  //方法
  function changePrice() {
    car.price += 10
  }
  function changeCar() {
    //car = reactive({brand:'bmw',price:200}) 页面不更新
    //car = {brand:'bmw',price:200} 重新分配对象失去响应式，页面不更新
    Object.assign(car,{brand:'bmw',price:200})//页面更新
  }
  function changeFirstGame() {
    games[0].name = 'The Last of Us'
  }
  function changeSecondGame() {
    games[1].name = 'The Witcher 3'
  }
  function changethirdGame() {
    games[2].name = 'God of War'
  }
  function changeSum() {
    sum.value += 1
  }
  function changeObj() {
    Obj.a.b.c = 456
  }

  //监视,情况二：监视reacitive定义的对象类型数据，默认开启深度监视(无法取消)
  watch(car, (newValue,oldValue)=> {
    console.log('car变化了',newValue,oldValue)
  })
  watch(Obj,(newValue,oldValue)=> {
    console.log('Obj变化了',newValue,oldValue)
  })

  //监视，情况三，监视ref、reactive定义的对象中某个属性，默认浅监视
  //要把该属性写成函数式getter：()=>{ return games[0].name }，而不是games[0].name
  watch(()=>{ return games[0].name },(newValue,oldValue)=> {
    console.log('第一个游戏name变化了',newValue,oldValue)
  }, {deep:true}
  )
  watch(()=>{ return games[1].name },(newValue,oldValue)=> {
    console.log('第二个游戏name变化了',newValue,oldValue)
  }, {deep:true}
  )
  watch(()=>{ return games[2].name },(newValue,oldValue)=> {
    console.log('第三个游戏name变化了',newValue,oldValue)
  }, {deep:true}
  )

  //监视，情况四，监视多个数据(把多个数据当成一个数组，用[]包裹，getter函数)
  watch([()=>car.price,()=>games[0].name,()=>sum],(newValue,oldValue)=> {
    console.log('数据组变化了',newValue,oldValue)
  }, {deep:true}
  )
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
  
  