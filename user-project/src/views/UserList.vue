<template>
  <div class="container">
    <table class ="table">
      <caption>Total : {{ count }}</caption> <!--전체게시글 몇개인지-->
    <thead>
        <tr>
            <th>No.</th>
            <th>ID</th>
            <th>이름</th>
            <th>성별</th>
            <th>가입날짜</th>
            
        </tr>
    </thead>
    <tbody>
      <tr :key="idx" v-for="(user, idx) in userList" @click="goToUserInfo(user.user_no)"> <!--v-on:click="" 혹은 @ 사용가능-->
        <td>{{ user.user_no }}</td><!-- user_no db에서도 가급적 소문자로 하기-->
        <td>{{ user.user_id }}</td>
        <td>{{ user.user_name }}</td>
        <td>{{ user.user_gender }}</td>
        <td>{{ dateFormat(user.join_date , 'yyyy년 MM월 dd일') }}</td>
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
            userList:[] //''으로 주지않기
        }
    },
    computed : {
        count(){
            return this.userList.length; //length를 그대로 쓰지않고 count로 감싸줌 computed에 쓴 이유 : 수정되면안돼서
        }
    },
    created(){
        // 컴포넌트가 초기화할 데이터 관련 진행
        this.getUserList();
    },
    methods : {
       async getUserList(){
         let result = await axios.get('/api/users') //앞부분 시작부분을 프록시서버에등록함 vue.config.js에? //fetch써도 되긴되는데 별로
                                .catch(err=>{
                                 console.log(err);
                                })
            let list = result.data;

          //날짜방법1-----
            // for(let i = 0; i<list.length; i++){
            //   list[i].join_date = this.dateFormat(list[i].join_date)
            // }----

            this.userList = list;
            // let list = (await axios.get('http://localhost:3000/users')
            //                     .catch(err=>{
            //                      console.log(err);
            //                     })).data;
            // this.userList = list;
                                

            // } 위와 아래코드는 같음 아래가 복잡하니 위 코드로..
        },
    goToUserInfo(userNo){
      console.log(userNo);
      this.$router.push({ path : '/userInfo', query : {userNo : userNo} }); // path or name 사용가능 path가길면name으로
      //name : route로 등록할 때 사용한 name 속성
      //params : path 속성이 '/target/:id' 일 때 {'id' : 100} query,params 모두 객체로넘김
    },
    dateFormat(value){
      //yyyy년MM월dd일
      //방법1
      // const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간

      // const date = new Date(value);

      // return new Date(date.getTime() + TIME_ZONE).toISOString().replace('T', ' ').slice(0, -5);

  //방법2

      let date = new Date(value);
      let year = date.getFullYear();
      let month = ('0'+(date.getMonth()+1)).slice(-2);
      let day = ('0'+date.getDate()).slice(-2)

      //  let result = format.replace('yyyy',year) //->안써도 됨
      //                     .replace('MM',month)
      //                     .replace('dd',day)
      //  return result; 

    return `${year}년 ${month}월 ${day}일`
    },
    insertInfo(){
      this.$router.push({path:"/userInsert"})
    }
  }
  
}

</script>

<style>

</style>