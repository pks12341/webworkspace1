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
                <td class="text-center">{{ empInfo.gender }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">입사일자</th>
                <td class="text-center">{{ hireDate }}</td>
            </tr>
             <tr>
                <th class="text-right table-primary">급여</th>
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
            if(this.empInfo.emp_gender == 'M' || this.empInfo.emp_gender == 'F') {
            return this.empInfo.emp_gender =='M'?'남' : '여';
        }
        else {
            return 'x';
        }
        },

},
 created(){
        this.serachNo = this.$route.query.eno;
        this.getEmpInfo();
    },
    methods : {
        async getEmpInfo(){
            let result = await axios.get(`/api/emps/${this.serachNo}`)
                                    .catch(err => console.log(err));
                                    console.log(result.data)
            this.empInfo = result.data
        },
        async deleteInfo(){
            const result = await axios.delete(`/api/emps/${this.empInfo.emp_no}`)
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
      this.$router.push({path:"/empForm",query : { eno:no }})
    }
  }


}
</script>

<style>

</style>