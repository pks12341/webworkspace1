<template>
  <div>
    <input type = "number" v-model="price"> 원
    <br>
    <input type = "number" v-model="count"> 개
    <p> 과세 금액 : {{ amount }} </p>
    <p> 부가세 10% : {{ tax }} </p>
    <p> 결제 금액 : {{ total }} </p>
  </div>
</template>
<script>
const computed = {

    data(){
      return{
        price : 0,
        count : 0
      }
    },
    computed : { //computed에 정의된 데이터는 불러올떄만..readonly다
      amount(){
        // 
        return this.price * this.count;
      },
      tax(){
        return this.amount * 0.1;
      },
      total(){
        return this.amount + this.tax;
      }
    }
}

const watch = {
    data(){
        return{
            price : 0,
            count : 0,
            amount : '',
            tax : '',
            total : ''
        }
    },
    watch : { //데이터가 아니어서 return구문이 빠짐
        price(){
            this.amount = this.price * this.count;
        },
        count(){
            this.amount = this.price * this.count;
        },
        amount(){
            this.tax = this.amount * 0.1;
            this.total = this.amount + this.tax;
        }
    }
}
export default watch
//export default computed
</script>

<style>

</style>
