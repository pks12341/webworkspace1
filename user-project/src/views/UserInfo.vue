<!--UserInfo.vue-->
<template>
  <div class="container" >
     <div class="row">
        <table class="table">
            <tr>
                <th class="text-right table-primary">No.</th>
                <td class="text-center">{{ userInfo.user_no }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">ID</th>
                <td class="text-center">{{ userInfo.user_id }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">Password</th>
                <td class="text-center">{{ userInfo.user_pwd }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">이름</th>
                <td class="text-center">{{ userInfo.user_name }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">성별</th>
                <td class="text-center">{{ userGender }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">나이</th>
                <td class="text-center">{{ userInfo.user_age }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">가입일자</th>
                <td class="text-center">{{ joinDate }}</td>
            </tr>
            
        </table>
   </div>
    
  
<div class="row">
    <button class="btn btn-info" @click="updateInfo(userInfo.user_no)">수정</button>
    <router-link to="/" class="btn btn-success" >목록</router-link> <!--태그 기본은 a-->
    <button class="btn btn-warning" @click="deleteInfo(userInfo.user_no)">삭제</button><!--삭제는routerlink와 관련x-->
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data(){
    return{
        searchNo : '',
        userInfo : {}
    }
  },
  computed : {
    userGender(){
        if(this.userInfo.user_gender == 'M' || this.userInfo.user_gender == 'F') {
            return this.userInfo.user_gender =='M'?'남' : '여';
        }
        else {
            return 'x';
        }
    },
    joinDate(){
     let date = new Date(this.userInfo.join_date);
      let year = date.getFullYear();
      let month = ('0'+(date.getMonth()+1)).slice(-2);
      let day = ('0'+date.getDate()).slice(-2)
      return `${year}-${month}-${day}`;
    }
  },
  created(){
    this.searchNo = this.$route.query.userNo; //index.js에 있는 route를동작시킨다..//작동원리//
    this.getUserInfo();
  },
  methods : {
    async getUserInfo(){
        let result = await axios.get(`/api/users/${this.searchNo}`)
                                .catch(err => console.log(err));
                                
    this.userInfo = result.data;
    },
   async deleteInfo(userNo){
        let result = await axios.delete(`/api/users/${userNo}`)
                                .catch(err => console.log(err));
        console.log(result.data)
        let count = result.data.affectedRows; //삭제는affectedRows 수정은 chagedRows 
        if(count == 0){
            alert('정상적으로 삭제되지 않았습니다.');
        }else{
            alert('정상적으로 삭제되었습니다.')
            this.$router.push({ name : 'userList' }) // 지우고 목록으로.. path 혹은 name사용
        }


    },
    updateInfo(no){
      this.$router.push({path:"/userUpdate",query : { userNo:no }})
    }
  }


}
</script>

<style>

</style>