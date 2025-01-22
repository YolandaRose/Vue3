# 父传子

- App.vue

```vue
<template>
  <Person a='Rose' b='Lily'/>
 </template>
```

- Person.vue

```vue
<template>
  <div class="person'>
    <h2>{{a}}</h2>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { defineProps } from 'vue'
  //只接收a。不保存
  defineProps(['a'])
  //接收a,同时保存Props
  let x = defineProps(['a','b'])
  console.log(x)
```
