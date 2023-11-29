//구조 분해 할당 destructing assigment

let obj = {
    id : 100,
    name : 'Hong',
    birth : '1999-12-25'
}
let { id, name, age } = obj;
console.log(id, name, age);

// module.export ={
//     object : {},
//     method : function(){}
// }
// let {object, method }= module;

let array = ['Hello','Nice','Monday'];
let [x, y] = array;//array 배열순서대ㅗㄹ x,y,z에 들어감 z없으면 2개만 들어감
console.log(x,y)