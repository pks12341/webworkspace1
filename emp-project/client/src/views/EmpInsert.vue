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
                    <input type="number" v-model="empInfo.emp_no">
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
    <button class="btn btn-success" @click="insertInfo">저장</button>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            empInfo :{
                emp_no : "",
                first_name : "",
                last_name : "",
                gender : null,
                hire_date : "2023-12-07",
                salary : "0",
                from_date : "2023-12-07",
                dept_no : "",
                dept_name : ""


            }
        }
    },
    // created(){
    //     this.empInfo.from_date = this.getToday();
    //     this.empInfo.hire_date = this.getToday();
    // },
    methods : {
        async insertInfo(){
            if(!this.validation()) return;

            let data = {
                param : this.empInfo
            };
            let result = await axios   
                              .post('/api/emps', data)
                              .catch((err)=> console.log(err))
                              console.log(result);
            
            if(result.data.affectedRows == 1) {
                alert('등록에 성공함')
                this.$router.push({path : '/empList'})
            }
        },
        validation(){
            if(this.empInfo.emp_no == ''){
                alert('사원번호가 입력되지 않았습니다')
                return false;
            }
             if(this.empInfo.fisrt_name == '' || this.empInfo.last_name == ''){
                alert('이름이 입력되지 않았습니다')
                return false;
             }if(this.empInfo.dept_no == ""){
                alert('부서번호가 입력되지 않았습니다')
                return false;
            }
            if(this.empInfo.dept_name == ""){
                alert('부서이름이 입력되지 않았습니다')
                return false;
            }
          return true;
        }
}
}
</script>

<style>

</style>