<template>
<div>
    <form>
        <label>제품ID : <input type="text" v-model="productInfo.product_id"></label><br>
        <label>제품명 : <input type="text" v-model="productInfo.product_name"></label>
        <label><br>
        카테고리 : 
             <input type="radio" value="A" v-model="productInfo.category">A
             <input type="radio" value="B" v-model="productInfo.category">B</label>
        <button type ="button" @click="addCart">추가</button>
    </form>
    <table>
        <thead>
            <caption>total : {{ total }}</caption>
            <tr>
                <th>카테고리</th>
                <th>제품ID</th>
                <th>제품명</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="idx" v-for="(info, idx) in productList">
                <td>{{ info.category }}</td>
                <td>{{ info.product_id }}</td>
                <td>{{ info.product_name }}</td>
            </tr>
        </tbody>
    </table>
</div>  
</template>

<script>
//storeComponent.vue
export default {
    data(){
        return{
        productInfo : {
            product_id : "",
            product_name : "",
            category : 'A',

        }
      }
    },
    computed :{
        productList(){
            return this.$store.state.cart; //store.js에서 state()로 정의되어서 state로
        },
        total(){
            return this.$store.getters.cartCount; //store.js에서 getter로정의되서 getter로
        }
    },
    methods : {
        addCart(){
            let obj = {
                product_id : this.productInfo.product_id,
                product_name : this.productInfo.product_name,
                category : this.productInfo.category
            }
            this.$store.dispatch('addProduct',obj);
        }
    }
};
</script>

<style>

</style>