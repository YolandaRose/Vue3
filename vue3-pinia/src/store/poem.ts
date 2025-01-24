import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

export const usePoemStore = defineStore('poem', {
    actions: {
        async getPoem() {
            // 发请求, { data: { content } } 用了连续解构 + title: content: title ---> title 重命名赋值
            let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=jason')
            //把请求回来的字符串转为对象(安装nanoid生成id)
            let obj = {id:nanoid(),title}
            //把对象添加到数组中
            this.poemList.unshift(obj)
        }
    },
    //真正存储数据的地方
    state() {
        return {
            // poemList:[
            //     {id:'1',title: '君不见黄河之水天上来，奔流到海不复回。'},
            //     {id:'2',title: '君不见高堂明镜悲白发，朝如青丝暮成雪。'},
            //     {id:'3',title: '人生得意须尽欢，莫使金樽空对月。'},
            //     {id:'4',title: '天生我材必有用，千金散尽还复来。'},
            // ]
            pormList:JSON.parse(localStorage.getItem('poemList') || '[]')  //实现刷新不丢失页面
        }
    }
})