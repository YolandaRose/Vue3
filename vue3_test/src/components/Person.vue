<template>
    <div class="person">
      <ul>
        <li v-for="p in list" :key="p.id">
          {{ p.name }} -- {{ p.age }}
        </li>
      </ul>

      <h2>姓名：{{ person.name }}</h2>
      <h2>年龄：{{ person.age }}</h2>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="showTel">查看联系方式</button>
      <button @click="changePerson">修改整个人</button>

      
    </div>
</template>
  
<script lang="ts" setup name="Person">
  // /*导入接口
  // import {type Persons} from '@/types'
  // let personList:Persons = [
  //   {id:'1',name:'Yolanda',age:18},
  //   {id:'2',name:'Rose',age:20},
  //   {id:'3',name:'Lily',age:22}
  // ]*/

  //接收父组件传的Props
  defineProps(['list'])
  //接受并保存Props
  //let x = defineProps(['a','list'])
  //console.log(x.a)
  //接受并限制类型
  //defineProps<{list:Persons}>()

  import { ref, watch } from 'vue' //使数据变为响应式
  //数据
  let person = ref({
    name:'Yolanda',
    age:18
  })

  let tel = '1234567890'//tel是非响应式的

  //方法
  function changeName() {
      person.value.name = 'Rose'//这样修改name页面不会变化，因为name不是响应式的
  }
  function changeAge() {
      person.value.age += 1
  }
  function showTel() {
      alert(tel)
  }
  function changePerson() {
    person.value = {name:'Lily',age:20}//这样修改整个person页面会变化
  }

  //监视，情况一：监视ref定义的对象类型数据，监视的是对象的地址值；
  //若想监视对象内部属性的变化，需要手动开启深度监视{deep:true}
  //watch第一个参数：被监视的数据
  //watch第二个参数：监视的回调（新值，旧值）
  //watch第三个参数：监视选项，deep:true开启深度监视
  watch(person,(newValue,oldValue)=>{
    console.log('监视到数据变化了',newValue,oldValue)
  },{deep:true})
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
  
  