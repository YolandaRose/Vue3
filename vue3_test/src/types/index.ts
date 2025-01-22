//定义一个接口，用于限制person对象的具体属性
export interface PersonInter {
    id:string;
    name:string;
    age:number;
    x?:number;//可有可无的属性
}

//一个自定义类型 泛型
export type Persons = Array<PersonInter>;