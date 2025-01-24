import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    //actions 放置方法，用于响应组件中的动作
    actions: {
        increment(value:number) {
            //修改数据
            if(this.sum < 10 ){
                this.sum += value
            }
        },
        decrement(value:number) {
            //修改数据
            if(this.sum > 0 ){
                this.sum -= value
            }
        }
    },
    //真正存储数据的地方
    state() {
        return {
            sum:1
        }
    },
    getters: {
        bigSum(state) {
            return state.sum * 100
        }
    }
})