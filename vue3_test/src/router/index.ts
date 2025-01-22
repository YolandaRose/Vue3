// 创建一个路由器，并暴露出去
//1.导入createRouter方法
import { createRouter,createWebHistory } from "vue-router";
//引入一个个组件
import Car from "@/components/Car.vue";
import Dog from "@/components/Dog.vue";
import Person from "@/components/Person.vue";
import Water from "@/components/Water.vue";
import Namecomputed from "@/components/Namecomputed.vue";
import Detail from '@/components/Detail.vue';


//2.创建路由器
const router = createRouter({
    history:createWebHistory(),//路由器的工作模式
    routes:[//一个个路由规则
        {
            path:"/car",
            component:Car
        },
        {
            path:"/dog",
            component:Dog,
            children:[
                {
                    path:'detail',
                    component:Detail
                }
            ]
        },
        {
            path:"/person",
            component:Person
        },
        {
            path:"/water",
            component:Water
        },
        {
            path:"/namecomputed",
            component:Namecomputed
        },
    ]
});

//3.导出路由器
export default router;