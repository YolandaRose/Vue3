# toRef

```vue
  let person = reactive({
    name:'haha'
    age:18
  })
  
  let {name,age} = toRefs(person)//赋值给一个新的响应式对象（要用.value访问和修改）
  let nianling = toRef(person,'age')//person中的age赋值给一个新的响应式基本数据
//修改person里的数据，这些toRef toRefs的数据也会一起改变
```
