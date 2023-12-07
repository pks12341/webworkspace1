<!--empinfo-->
<template>
   <div class="container" >
     <div class="row">
        <table class="table">
            <tr>
                <th class="text-right table-primary">사원번호</th>
                <td class="text-center">{{ empInfo.emp_no }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">이름</th>
                <td class="text-center">{{ empInfo.first_name }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">성</th>
                <td class="text-center">{{ empInfo.last_name }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">성별</th>
                <td class="text-center">{{ empGender }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">고용일</th>
                <td class="text-center">{{ hireDate }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">월급</th>
                <td class="text-center">{{ empInfo.salary }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">부서 번호</th>
                <td class="text-center">{{ empInfo.dept_no }}</td>
            </tr>
               <tr>
                <th class="text-right table-primary">부서명</th>
                <td class="text-center">{{ empInfo.dept_name }}</td>
            </tr>
            
        </table>
   </div>
    
  
<div class="row">
    <button class="btn btn-info" @click="updateInfo(empInfo.emp_no)">수정</button>
    <router-link to="/empList" class="btn btn-success" >목록</router-link> <!--태그 기본은 a-->
    <button class="btn btn-warning" @click="deleteInfo(empInfo.emp_no)">삭제</button><!--삭제는routerlink와 관련x-->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            serachNo : '',
            empInfo : {}
        }
    },
    computed : {
        empGender(){
            return this.empInfo.gender =='M'?'남' : '여';
        },
      
   hireDate(){
    let date = new Date(this.empInfo.hire_date);
    let year = date.getFullYear();
      let month = ('0'+(date.getMonth()+1)).slice(-2);
      let day = ('0'+date.getDate()).slice(-2)
      return `${year}-${month}-${day}`;

   },
    },
    created(){
        this.serachNo = this.$route.query.empNo;
        this.getEmpInfo();
    },
    methods : {
        async getEmpInfo(){
            let result = await axios.get(`/api/emps/${this.serachNo}`)
                                    .catch(err => console.log(err));
                                    console.log(result.data)
            this.empInfo = result.data
        },
        async deleteInfo(empNo){
            let data = {
                param : {
                    to_date : '2023-12-07'
                }
            }
            let result = await axios.delete(`/api/emps/${empNo}`, { data : data })
            .catch(err => {
                console.log(err)
        })
            let count = result.data.affectedRows;
            if(count == 0){
                alert('정상적으로 삭제되지 않았습니다');
            }else{
                alert('정상적으로 삭제되었습니다')
                this.$router.push({ name : 'empList'})
            }


    },
    updateInfo(no){
      this.$router.push({path:"/empForm",query : { empNo:no }})
    }
  }


}
</script>

<style>

</style>