<template> <!--template 태그는 자식역할하는 태그가 1개여야한다..-->
<div>
  <button type ="button" v-on:click="increaseCounter">Add 1</button><!--이벤트객체가 자동으로 넘어옴-->
  <input v-model.number="num">
  <button type ="button" @click="setCount(num, $event), msg()">Add {{ num }}</button><!--얘는 이벤트객체가 아니다? 임의값을 줄수있음?-->
    <p>The Counter is : {{ counter }}</p>
    <hr>
    <form @click.self="msg('form')"><!--self : target, current target이 같을때만 동작하게//stop.prevent, self.prevent 처럼 섞어 쓸 수도 있다-->
        Form
        <div @click="msg('div')">
            Div
            <p @click.stop="msg('p')"><!--stop : p 태그에서 더이상 버블링을 진행하지 않겠다-->
                p<a  @click.prevent="msg('a')" href = "http://www.naver.com">네이버</a> <!--이벤트 버블링--><!--prevent : 일시적 무력화(네이버 들어가지지않음)-->
            </p>
        </div>
    </form>
</div>
</template>

<script>
export default {
    data(){
        return{
            counter : 0,    
            num : 7
        }
    },
    methods : {
        increaseCounter(e){
            console.log(e);
            this.counter++; //this가없으면 일반변수로인식
        },
        setCount(value, event){
            console.log('setCount',event);
            this.counter = this.counter + value;
        },
        msg(msg){
            alert(`${msg} 선택!`)
        }
    }
};
</script>

<style>
form, form *{
    margin : 10px;
    border : 1px solid blueviolet
}
</style>