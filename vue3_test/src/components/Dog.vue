<template>
    <div class="dog">
      <!-- 导航区 -->
       <ul>
        <li v-for="dog in dogList" :key="dog.id">
          <RouterLink :to="`/dog/detail?id=${ dog.id }&name=${ dog.name }&pic=${ dog.pic }`">{{ dog.name }}</RouterLink>
        </li>
       </ul>
      <!-- 图片区 -->
       <div class="dog-pic">
        <RouterView></RouterView>
       </div>
      
    </div>
</template>
  
<script lang="ts" setup name="randomdog">
  import { reactive } from 'vue'
  import {RouterView, RouterLink} from 'vue-router'

  let dogList = reactive([
    {id:'1', name:'边牧', pic:'https://dog.ceo/api/breed/collie/border/images/random'},
    {id:'2', name:'比格', pic:'https://dog.ceo/api/breed/beagle/images/random'},
    {id:'3', name:'金毛', pic:'https://dog.ceo/api/breed/dachshund/images/random'},
    {id:'3', name:'腊肠', pic:'https://dog.ceo/api/breed/retriever/golden/images/random'}
  ])
  
</script>
  
<style scoped>
    .dog {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    }
    button {
        margin-top: 10px;
    }
    li {
        font-size: 20px;
    }
    img {
        height: 200px;
        margin-right: 10px;
    }
</style>
  
  