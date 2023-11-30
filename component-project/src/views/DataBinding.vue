<template> <!--template안에 있는건 dom에 렌더링안됨 // template 내부에서 가벼운 연산을 할수있다-->
  <div>
    <h1>{{ title + '!!!' }}</h1><!--태그 사이에 이중 중괄호가 있으면 자바스크립트 영역이 된다-->
    <h2 v-bind:name = "'sample'" v-text = "title" /><!--내부에 '안들어가면 변수를 호출할수있다-->
    <p v-html="tagList"/>
    <p v-text="tagList"/>
    <hr>
    <input type = "text" v-model="valueModel">
    <p>{{ typeof valueModel }}</p>
    <input type ="number" v-model.lazy ="numberModel"> <!--lazy : 실시간 반영을 지연시킨다 엔터를 친다던가 하기전...-->
    <p>{{ numberModel + 10000 }}</p>
    <select v-model = "selectModel">
      <option value = "summer">여름</option>
      <option value = "winter">겨울</option>
    </select>
    <p> {{ selectModel }} </p>
    <textarea v-model="textModel"/>
    <hr>
    <input type = "checkbox" v-model="chData" true-value = "여" false-value = "부">
    <p>{{ chData }}</p>
    <div>
        <input type = "checkbox" value = "서울" v-model = "city">서울
        <input type = "checkbox" value = "대구" v-model = "city">대구
        <p> {{ city }} </p>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
      title : 'Hello, Vue.js' ,
      tagList : '<strong>Today is ...</strong>',
      valueModel : 'Korea',
      numberModel : '0',
      selectModel : 'winter', //default값을 설정할수도 있다..
      textModel : 'ㅋㅋㅇㅅㅇ',
      chData : '',
      city : ''
    }
  }
}
</script>

<style>

</style>