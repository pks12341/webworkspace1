<template>
<div>
  <Header /> <!--headervue 부분 head가 가지고있는 템플릿부분이 이걸대체-->
  <router-view/>
</div>
</template>
<script>
import Header from './layouts/Header.vue'

export default{
  components : {
   Header  // Header : Header를 Header로 간단히 표현
  }
}
</script>