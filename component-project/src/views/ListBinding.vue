<template>
  <div>
    <button v-on:click="addData">+</button><!--특정이벤트에 대한 처리(클릭이벤트)-->
    <table>
        <thead>
            <tr>
                <th>제품명</th>
                <th>가격</th>
                <th>카테고리</th>
                <th>배송료</th>
            </tr>
        </thead>
        <tbody>
            <tr v-bind:key="idx" v-for="(product, idx) in productList"><!--product는 임시변수라 아무거나해도됨 //key가 꼭 있어야한다-->
                <td>{{product.product_name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.category}}</td>
                <td>{{product.delivery_price}}</td>

            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
let data =[
    {
        "product_name" : "기계식키보드",
        "price" : 25000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000 
    },
    {
        "product_name" : "무선마우스",
        "price" : 12000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000 
    },
    {
        "product_name" : "아이패드",
        "price" : 725000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000 
    },
    {
        "product_name" : "태블릿거치대",
        "price" : 32000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000 
    },
    {
        "product_name" : "무선충전기",
        "price" : 42000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000 
    }
]
export default {
    data(){
        return{
            productList : data
        }
    },
    methods :{
        /*addData:function(){} <-이 표기법을 간략하게 표시한게  addData(){} 이거다 함수를 객체에 등록할 때 사용하는 표기법*/
        addData(){
            let obj ={
        "product_name" : "무선충전기",
        "price" : 42000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000
    };
    let index = this.productList.length;
    this.productList[index] = obj;

    },     
  }
}
</script>

<style>

</style>