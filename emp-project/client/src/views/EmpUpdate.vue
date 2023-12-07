<template>
  <div class="container" >
     <div class="row">
        <table class="table">
            <!-- <tr>
                <th class="text-right table-primary">No.</th>
                <td class="text-center"></td>
            </tr>  등록시는 no필요없다 자동이라서-->
             <tr>
                <th class="text-right table-primary">사원번호</th>
                <td class="text-center">
                    <input type="number" v-model="empInfo.emp_no" readonly>
                </td>
            </tr>
             <tr>
                <th class="text-right table-primary">이름</th>
                <td class="text-center"><input type="text" v-model="empInfo.first_name"></td>
                
            </tr>
             <tr>
                <th class="text-right table-primary">성</th>
                <td class="text-center"> <input type="text" v-model="empInfo.last_name"></td>
               
            </tr>
             <tr>
                <th class="text-right table-primary">성별</th> <!--라디오버튼-->
                <td class="text-center">
                    <input type = "radio" value="M" v-model="empInfo.gender">남자
                    <input type = "radio" value="F" v-model="empInfo.gender">여자
                </td>
            </tr>
             <tr>
                <th class="text-right table-primary">고용일</th>
                <td class="text-center"><input type="date" v-model="empInfo.hire_date"></td>
                
            </tr>
             <tr>
                <th class="text-right table-primary">급여</th>
                <td class="text-center"><input type="number" v-model="empInfo.salary"></td>
            </tr>
             <tr>
                <th class="text-right table-primary">출근일</th>
                <td class="text-center"><input type="date" v-model="empInfo.from_date"></td>
            </tr>
             <tr>
                <th class="text-right table-primary">부서번호</th>
                <td class="text-center"><input type="text" v-model="empInfo.dept_no"></td>
            </tr>
            <tr>
                <th class="text-right table-primary">부서명</th>
                <td class="text-center"><input type="text" v-model="empInfo.dept_name"></td>
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
            empInfo : {}
            
        }
    },
    created(){
        this.searchNo = this.$route.query.empNo; //index.js에 있는 route를동작시킨다..//작동원리//
        this.getEmpInfo()    
    },
    methods : {
    async getEmpInfo(){
        let result = await axios.get(`/api/emps/${this.searchNo}`)
                                .catch(err => console.log(err));
                                
        this.empInfo = result.data;
        this.empInfo.join_date = $dateFormat(this.empInfo.join_date);
    },
     

   async updateInfo(){
    let newDate = {
        birth_date:this.empInfo.birth_date,
        first_name : this.empInfo.first_name,
        last_name : this.empInfo.last_name,
        gender : this.empInfo.gender,
        hire_date : this.empInfo.hire_date

    } 
    

     let data = {
                param : this.empInfo,
            };
        let result = await axios.put(`/api/emps/${this.empInfo.emp_no}`,data)//put으로 변경
                                .catch(err => console.log(err));
        console.log(result.data)
        let count = result.data.chagedRows; 
        if(count == 0){
            alert(`정상수정x`);
        }else{
            alert('정상수정')
            this.$router.push({ name : 'empList' }) // 지우고 목록으로.. path 혹은 name사용
        }

    }
  }

}
</script>

<style>

</style>