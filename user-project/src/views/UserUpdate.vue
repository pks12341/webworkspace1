<!--템플릿은 userinsert 가져온다 입력을 받아야하기 떄문..info와insert를 합친다-->
<template>

  <div class="container" >
     <div class="row">
        <table class="table">
             <tr>
                <th class="text-right table-primary">No.</th>
                <td class="text-center"><input type="text" v-model="userInfo.user_no" readonly></td>
                
            </tr>
             <tr>
                <th class="text-right table-primary">ID</th>
                <td class="text-center">
                    <input type="text" v-model="userInfo.user_id" readonly>
                </td>
            </tr>
             <tr>
                <th class="text-right table-primary">Password</th>
                <td class="text-center"><input type="password" v-model="userInfo.user_pwd"></td>
                
            </tr>
             <tr>
                <th class="text-right table-primary">이름</th>
                <td class="text-center"> <input type="text" v-model="userInfo.user_name"></td>
               
            </tr>
             <tr>
                <th class="text-right table-primary">성별</th> <!--라디오버튼-->
                <td class="text-center">
                    <input type = "radio" value="M" v-model="userInfo.user_gender">남자
                    <input type = "radio" value="F" v-model="userInfo.user_gender">여자
                </td>
            </tr>
             <tr>
                <th class="text-right table-primary">나이</th>
                <td class="text-center"><input type="number" v-model="userInfo.user_age"></td>
                
            </tr>
             <tr>
                <th class="text-right table-primary">가입일자</th>
                <td class="text-center"><input type="date" v-model="userInfo.join_date"></td>
                
            </tr>
        </table>
   </div>   
  
<div class="row">
    <button class="btn btn-success" @click="updateInfo">수정</button>
    
  
    

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
    created(){
        this.searchNo = this.$route.query.userNo; //index.js에 있는 route를동작시킨다..//작동원리//
        this.getUserInfo()    
    },
    methods : {
    async getUserInfo(){
        let result = await axios.get(`/api/users/${this.searchNo}`)
                                .catch(err => console.log(err));
                                
        this.userInfo = result.data;

        let newDate = this.dateFormat(this.userInfo.join_date,'yyyy-MM-dd');
        this.userInfo.join_date = newDate;
    },
      dateFormat(value){

      let date = new Date(value);
      let year = date.getFullYear();
      let month = ('0'+(date.getMonth()+1)).slice(-2);
      let day = ('0'+date.getDate()).slice(-2)

 
    return `${year}-${month}-${day}`
    },

   async updateInfo(){
     let data = {
                param : this.userInfo,
            };
        let result = await axios.put(`/api/users/${this.userInfo.user_no}`,data)//put으로 변경
                                .catch(err => console.log(err));
        console.log(result.data)
        let count = result.data.chagedRows; 
        if(count == 0){
            alert(`정상수정x`);
        }else{
            alert('정상수정')
            this.$router.push({ name : 'userList' }) // 지우고 목록으로.. path 혹은 name사용
        }

    }
  }

}
</script>

<style>

</style>