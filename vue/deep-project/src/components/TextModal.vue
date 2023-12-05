<template>
  <Layout>
    <template v-slot:header>
        <h1>팝업 제목</h1> <!--슬롯을 대체한다-->
    </template>
    
    <template v-slot:default><!--이름이 없는 슬롯-->
        <p>팝업 컨텐츠1</p>
        <p>팝업 컨텐츠2</p>
    </template>
    
    <template v-slot:footer>
        <button type="button">닫기</button>
    </template>
  </Layout> <!--slot이 있으면 <Layout />이렇게안하고 여닫는태그로-->
</template>

<script>
import Layout from './ModalLayout.vue'

export default {
    components : {
        Layout,

    }
}
</script>

<style>

</style>