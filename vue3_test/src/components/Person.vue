<template>
    <div class="person">
      <h2>姓名：{{ name }}</h2>
      <h2>年龄：{{ age }}</h2>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="showTel">查看联系方式</button>
    </div>
</template>
  
<script lang="ts" setup name="Person1">
  import { ref } from 'vue' //使数据变为响应式
  //数据
  let name = ref('Yolanda')//此时的name是响应式的
  let age = ref(18)//此时的age是响应式的
  let tel = '1234567890'//tel是非响应式的

  //方法
  function changeName() {
      name.value = 'Rose'//这样修改name页面不会变化，因为name不是响应式的
  }
  function changeAge() {
      age.value += 1
  }
  function showTel() {
      alert(tel)
  }
</script>
  
<style scoped>
    .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button{
    margin: 0 10px;
  }
</style>
  
  