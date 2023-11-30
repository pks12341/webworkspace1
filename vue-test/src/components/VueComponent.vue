<template>
  <div>
      <label><input type="text" v-model="msg"></label>
      <p>{{ msg }}</p>
  </div>
</template>
<script>
  export default {
    name : 'VueComponent',
    data(){
      return {
        msg : '2023-11-30'
      }
    }
  }
</script>

<style scoped> /* 색 넣는영역을 제한  scoped를 빼면 전체페이지에 영향을 준다*/
  p {
    background-color: burlywood;
  }
</style>