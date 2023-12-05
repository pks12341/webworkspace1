<template>

  <table>
    <tr>
    {{ $dateFormat('2023/12/05','yyyy-MM-dd') }} <!--템플릿안에선 $, script안에서는this.$-->
    </tr>
    <tr>
        <th>제목</th>
        <td>{{ title }}</td>
        <th>조회수</th>
        <td>{{ readInfo }}</td>
    </tr>
     <tr>
        <th>작성자</th>
        <td>{{ writer }}</td>
        <th>작성일자</th>
        <td>{{ regdate }}</td>
    </tr>
     <tr>
        <th>내용</th>
        <td>{{ content }}</td>
    </tr>
      <tr>
        <button @click="updateInfo">업데이트</button>
    </tr>
    
  </table>
</template>

<script>
//import AppMixin from '../mixin.js';

export default {
    // props : ['title', 'count', 'writer','regdate','content']
   // mixins : [AppMixin],
    props : {
        title : String, // 타입만 정의할경우 title : String 이렇게 사용 가능
        count : {
            type : Number,
            default : 0 //def도 같이 정의
        },
        writer : {
            type : [String, Object],
            default : function(){
                return{ first : 'Adward', second : 'Ian' } //object->return되는 타입이 객체 타입으로..배열이면 배열로return
            }
        },
        regdate : {
            required : true,
            validator : function(value){ //default와 다르게 값을넘겨받음 //yyyy-MM-dd 제약조건 체크
            let format = /[0-9][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]/ 
                return !(value.match(format)==null);
            }
        },
        content : String
    },
    computed : {
        readInfo(){
            return this.count +1;
            
        }
    },
    methods : {
        updateInfo(){
            //이벤트를 전달할때 많이 쓰는 방식
            this.$emit('update-info', this.readInfo);
        }
    },
    watch : {
        //특정 프로퍼티 값을 보고있다가 변경시 데이터 전달할 때
        readInfo(){
            this.$emit('update-info', this.readInfo);

        }
    }
    
}
</script>

<style>

</style>