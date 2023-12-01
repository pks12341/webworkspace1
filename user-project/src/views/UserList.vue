<template>
  <div class="container">
    <table class ="table">
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
      <tr :key="idx" v-for="(user, idx) in userList">
        <td>{{ user.user_no }}</td>
        <td>{{ user.user_id }}</td>
        <td>{{ user.user_name }}</td>
        <td>{{ user.user_gender }}</td>
        <td>{{ user.join_date }}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            userList:[]
        }
    },
    computed : {
        count(){
            return this.userList.length;
        }
    },
    created(){
        // 컴포넌트가 초기화할 데이터 관련 진행
        this.getUserList();
    },
    methods : {
       async getUserList(){
         let result = await axios.get('/users') //앞부분 시작부분을 프록시서버에등록함 vue.config.js에?
                                .catch(err=>{
                                 console.log(err);
                                })
            let list = result.data;
            this.userList = list;
            // let list = (await axios.get('http://localhost:3000/users')
            //                     .catch(err=>{
            //                      console.log(err);
            //                     })).data;
            // this.userList = list;
                                

            // } 위와 아래코드는 같음 아래가 복잡하니 위 코드로..
        }
    }
}

</script>

<style>

</style>