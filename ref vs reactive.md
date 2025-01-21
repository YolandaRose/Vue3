# ref vs reactive

## 使用原则

- 基本类型响应式，必须`ref`
- 响应式对象，层级不深，`ref` `reactive`都可以
- 响应式对象，层级深， 使用`reactive`

## 区别

- `ref` 创建的变量必须使用 `.value`
- `reactive` 重新分配一个新对象，会失去响应式
  ----> Object.assign(game,{id:01,name:Infinity Nikki})整体替换
