<template>
    <div></div>
</template>

<script>
    // 객체 반환
export default{
    components : [], //여러개의 자식컴포넌트가 올수있으니 배열로 처리
    data(){
        return{
            today : new Date()
        }
    },
//computed에 정의된 프로퍼티는수정불가
    computed : {
        AfterYear(){
            return this.today.setFullYear(this.today.getFullYear() + 1); 
        }
    },

// export default {
//   data() {
//     return { a: 1 }
//   },
//   created() {
//     console.log(this.a) // 1
//     console.log(this.$data) // { a: 1 }
//   }
// }

    methods : {
        
        // test(){
        //     console.log(this.$data, this.testData);
        // }
    },
    watch : {},//내가 해야하는 행동들 정리 computed는 계산한 결과
    created() {},
    mounted() {}
}
</script>

<style>

</style>