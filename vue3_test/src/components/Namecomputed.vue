<template>
    <div class="name">
      姓：<input type="text" v-model="firstName"><br>
      名：<input type="text" v-model="lastName"><br>
      全名：<span>{{ fullName }}</span>
    </div>
</template>
  
<script lang="ts" setup name="namecomputed">
  import { ref, computed } from 'vue'
  let firstName = ref('Liu')
  let lastName = ref('Yolanda')

  let fullName = computed(() => {//计算有缓存且使只读，同一个数据只算一次，比function好
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + "-" + lastName.value
})
</script>
  
<style scoped>
    .name {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button{
    margin: 0 10px;
  }
</style>
  
  