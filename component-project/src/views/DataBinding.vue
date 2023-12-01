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
        <input type = "checkbox" value = "서울" v-model = "city">서울 <!--동적으로 값주고싶으면 v-bind : value = "서울"-->
        <input type = "checkbox" value = "대구" v-model = "city">대구
        <p> {{ city }} </p>
    </div>
    <div>
      <input type = "radio" value="독서" v-model = "hobby">독서
      <input type = "radio" value="영화" v-model = "hobby">영화
      <input type = "radio" value="운동" v-model = "hobby">운동
      <p>{{ hobby }}</p>
       </div>
      <hr>
      <img v-bind:style="styleData" v-bind:src="imgUrl"> <!--이미지를 선택하는것마다 다르게출력하려면 v-bind"-->
      <img v-bind:style="[backSetting, addStyle]" v-bind:src="imgUrl"> <!--이렇게쓸수도있지만권장X-->
    <div calss="container" 
            v-bind:class="{'active' : isActive, 'text-red' : hasError}">Class Binding First</div><!--선택 여부에 따라 달라져야하는건 bind를 쓴다? isActive : boolean타입(t or f)-->
            <div class="container" v-bind:class = "myClass">Class Binding Second</div>
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
      city : [], //체크박스 여러개 쓸때 초기값 배열로,
      hobby : '',
      imgUrl : 'https://kr.vuejs.org/images/logo.png',
      styleData : {
        backgroundColor : 'skyblue', width : '200px'
      },                
      backSetting : 'background-color:black; width : 200px;',
      addStyle : 'height : 200px;',
      isActive : false,
     // hasError : !this.isActive
     myClass : 'active'
    }
  },
  computed : { //...단순 초기값을 주는게아니라 계속 연결성을 가지고 동작하고싶으면 computed속성..
    hasError(){
      return !this.isActive;
    }
  }
}
</script>

<style scoped>
  .container{
    width : 100%;
    height : 200px;
  }
  .active{
    background-color: aquamarine;
    font-weight: bold;

  }
  .text-red{
    color : red;
    
  }
</style>