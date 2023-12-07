<template>
  <div class="container">
    <table class ="table">
      <caption>Total : {{ count }}</caption> <!--전체게시글 몇개인지-->
    <thead>
        <tr>
            <th>사원번호</th>
            <th>이름</th>
            <th>성</th>
            <th>성별</th>
            <th>고용일</th>
            <th>월급</th>
            <th>부서 번호</th>
            <th>부서명</th>
           
            
        </tr>
    </thead>
    <tbody>
      <tr :key="idx" v-for="(emp, idx) in empList" @click="goToEmpInfo(emp.emp_no)"> <!--v-on:click="" 혹은 @ 사용가능-->
        <td>{{ emp.emp_no }}</td><!-- user_no db에서도 가급적 소문자로 하기-->
        <td>{{ emp.first_name }}</td>
        <td>{{ emp.last_name }}</td>
        <td>{{ emp.gender }}</td>
        <td>{{ $dateFormat(emp.hire_date , 'yyyy년 MM월 dd일') }}</td>
        <td>{{ emp.salary }}</td>
        <td>{{ emp.dept_no }}</td>
        <td>{{ emp.dept_name }}</td>

      </tr>
    </tbody>
    </table>
      <button class="btn btn-warning" @click="insertInfo">등록</button>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            empList:[] //''으로 주지않기///20행 in empList와연결
        }
    },
    computed : {
        count(){
            return this.empList.length; //length를 그대로 쓰지않고 count로 감싸줌 computed에 쓴 이유 : 수정되면안돼서
        }
    },
    created(){
        // 컴포넌트가 초기화할 데이터 관련 진행
        this.getEmpList();
    },
    methods : {
       async getEmpList(){ // http://localhost:8080/api/emps 를 3000으로바꾸고 api없애주는걸 vueconfig에서
         let result = await axios.get('/api/emps') //앞부분 시작부분을 프록시서버에등록함 vue.config.js에? //fetch써도 되긴되는데 별로
                                .catch(err=>{
                                 console.log(err);
                                })
            let list = result.data;
            console.log(list);
        

            this.empList = list;

        },
    goToEmpInfo(empNo){
      console.log(empNo);
      this.$router.push({ path : '/empInfo', query : {empNo : empNo} }); // path or name 사용가능 path가길면name으로
      //name : route로 등록할 때 사용한 name 속성
      //params : path 속성이 '/target/:id' 일 때 {'id' : 100} query,params 모두 객체로넘김
    },
    // dateFormat(value){


    //   let date = new Date(value);
    //   let year = date.getFullYear();
    //   let month = ('0'+(date.getMonth()+1)).slice(-2);
    //   let day = ('0'+date.getDate()).slice(-2)



    // return `${year}년 ${month}월 ${day}일`
    // },
    insertInfo(){
      this.$router.push({path:"/empInsert"})
    }
  }
  
}

</script>

<style>

</style>