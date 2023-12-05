<template>
  <div>
    <h3>{{title}}</h3>
    <p>저자 : {{author.name}}</p>
        <template v-if="isWrited">
            <p :key="idx" v-for="(info,idx) in author.books">
                {{info}}
            </p>
      </template>
  <p v-else>아직 출간한 책이 없습니다.</p>
 <button @click="plusBookInfo">정보 업데이트</button>
</div>
</template>

<script setup>
import { reactive, ref, computed, watch } from "vue";
//이런방식이 있다는것 정도만 알기
// data 옵션 담당 : reactive,ref
//computed 옵션 : computed
//watch 옵 : watch
//methods 옵션 : 내부에 함수로 선언

const author = reactive({ //reactive : 반응형// data(){return{author : ..,..,..,}} 과 같다
    name : 'John Doe',
    books : [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

const title = ref('제목을 입력해주세요'); //title.value

const isWrited = computed(()=>{
    return author.books.length > 0 ? 'Yes' : "No";

});
watch(author.books, (info)=>{
    console.log(info[info.length-1]);
});


const plusBookInfo = () => {
    let info = 'Node.js - Javascript Runtime'
    author.books.push(info);
}

</script>

<style>

</style>