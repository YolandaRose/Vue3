<template>
    <div class="dog">
        <img v-for="dog in dogList" :src="dog" alt="dog" /><br>
        <button @click="fetchDog">Fetch Dog</button>
    </div>
</template>
  
<script lang="ts" setup name="randomdog">
  import { reactive } from 'vue'
  import axios from 'axios'
  import {useRoute} from 'vue-router'

  let route = useRoute()
    console.log(route)
  let dogList = reactive(['https://images.dog.ceo/breeds/collie-border/n02106166_135.jpg'])

  async function fetchDog() {
  // 获取查询参数，并确保它是一个字符串
  let picUrl = Array.isArray(route.query.pic) ? route.query.pic[0] : route.query.pic
  
  // 检查picUrl是否存在且为字符串
  if (picUrl && typeof picUrl === 'string') {
    try {
      let result = await axios.get(picUrl)
      dogList.push(result.data.message)
    } catch (error) {
      console.error('获取图片失败:', error)
    }
  } else {
    console.error('无效的图片URL:', picUrl)
  }
}
//     {id:'1', name:'边牧', pic:'https://images.dog.ceo/breeds/collie-border/n02106166_135.jpg'},
//     {id:'2', name:'比格', pic:'https://images.dog.ceo/breeds/beagle/n02088364_10947.jpg'},
//     {id:'3', name:'金毛', pic:'https://images.dog.ceo/breeds/retriever-golden/n02099601_3327.jpg'},
//     {id:'3', name:'腊肠', pic:'https://images.dog.ceo/breeds/dachshund/dachshund-7.jpg'}
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
  
  