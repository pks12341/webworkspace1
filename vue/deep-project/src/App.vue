<template>
<div>
  <input type="text" v-model.lazy="selected" v-focus="isFocused"/><!--입력 지연-->
  <component v-bind:is="selected"></component> <!--동적 컴포넌트 부여시 사용// is => 넘어온문자열기반 불러오기SlotCom같은-->
</div>
</template>

<script>
import PropsCom from './components/PropsComponent.vue'
import SlotCom from './components/TextModal.vue';
import Composition from './components/CompositionInterface.vue';
import StoreCom from './components/StoreComponent.vue';

export default {
  name : 'app',
  data(){
    return{
      selected : 'PropsCom',
      isFocused : false,
    }
  },
  components : {
    PropsCom, //'PropsCom' : {} <= 이거랑 같음 즉 PropsCom은 객체
    SlotCom,
    Composition,
    StoreCom
  },
}
</script>

<style>

</style>