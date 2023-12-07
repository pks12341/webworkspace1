<template>
  <div class = "container">
    <table>
        <thead>
            <tr>
                <th>사번</th>
                <th>이름</th>
                <th>입사일</th>
                <th>소속부서</th>
                
              
            </tr>
        </thead>
        <tbody>
            <tr :key="idx" v-for="(info,idx) in empList" @click="goToEmpInfo(info.emp_no)">
                <td>{{ info.emp_no }}</td>
                <td>{{ `${info.first_name}, ${info.last_name}` }}</td>
                <td>{{ info.hire_date }}</td>
                <td>{{ info.dept_name }}</td>

            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            empList : [] 
        }
    },
    created(){
        this.getEmpList();
    },
    methods : {
       async getEmpList(){
            let result = await axios.get('/api/emps') //
                            .catch(err => console.log(err))
            this.empList = result.data
        },
         goToEmpInfo(eno){
             this.$router.push({ name : 'empInfo', query : {eno : eno} }); // path or name 사용가능 path가길면name으로
      
    },
    }
}
</script>

<style>

</style>