<template>
  <h2>{{title}}</h2>
</template>

<script>
// PageTitle.vue->자식컴포넌트(부모가넘겨준title출력)
export default {
    props : ['title'] //(이게 default) 유효성검사안하고 정해진 데이터 그대로 넘어오겠다..필요하다면 required, validate등 사용가능
  
}
</script>

<style>

</style>