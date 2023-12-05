<template>
 <div>
   <PageTitle title ="Hello, world!"/> <!--v-bind를 안붙이면 조회수 10+1을 101로 표시한다, "안에 ' 안붙이면 자바스크립트 문법으로 인식한다-->
   <!-- <PageContent :title ="header" 
                v-bind:count="10"    
                :writer="['Adward']" 
                :regdate="'2023-12-05'" 
                :content="{ first : 'Node.js',second : 'Vue.js'}" />  -->

 <PageContent v-bind="info" @update-info="handler" /> <!--info는 객체타입//인포의 필드들이 자식에 정의되어 있어야함 Pagecontent의  props : ['title', 'count', 'writer','regdate','content'] 이부분-->
 <!--emit을 통해 자식이벤트가 부모로..-->

 <RefCom ref="child"/>
 <button @click="childHandler">자식 제어</button>

</div>
</template>
<script>
//PropsComponent.vue
import PageTitle from './PageTitle.vue' //자식컴포넌트
import PageContent from './PageContent.vue' //또다른 자식컴포넌트
import RefCom from './RefComponent.vue' //또다른 자식컴포넌트

export default {
    data(){
        return{
          header : '',
          info:{//한꺼번에 속성들 넘기기..
            title : 'Today is',
            count : 10,
            writer : 'Adward',
            regdate : '2023/04/30',
            content : '내용 없음' 
          }
        }
    },
  components : {
        PageTitle,
        PageContent,
        RefCom
 },
 methods : {
    handler(value){
        alert(value);
    },
    childHandler(){
        ////  this.$refs.child => 13행 <RefCom ref="child"/>의 child에 연결
        //this.$refs.child.content='부모가보내는데이터'; //직접적으로 접근 가능하다..
        //this.$refs.child.plusCount();
        this.$refs.child.$refs.cBtn.click();
        
    }
 },
}
</script>

<style>

</style>