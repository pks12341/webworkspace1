require('dotenv').config({ path : './db/mysql.env' })

const express = require('express');
const app = express();
const mysql = require('./db.js'); //db.js를반환시켜서

app.use(express.json({ //용량 제한
    limit : '50mb'
}));

app.listen(3000, ()=>{ //listen => 서버 실행시키는 메소드
    console.log('Server Start!, http://localhost:3000')
});

//여기까지 서버 기본 세팅임

app.get('/emps', async(req, res) => {
    let list = await mysql.query('emp','list');
    res.send(list); //목록조회
});

//단건조회
app.get('/emps/:emp_no', async (req, res) => {
    let data = req.params.emp_no; //경로라서 body에 붙지않는다???
    let list = await mysql.query('emp','info', data);//result대신list쓰는이유?
    res.send(list[0]); //select문은 한건이든 여러건이든 배열로 들어온다
});
//등록할때
//let empData = {
//    'emp_no' : empInfo.emp_no
//}; ->가장쉬운방법이지만 수정이어렵다

const empTable = ['emp_no','first_name','last_name','gender','hire_date'];

const deptEmpTable=['emp_no','dept_no','from_date','to_date']; //이거랑 set=?절 순서 같아야함 객체는 순서 별 상관없는데..

const salariesTable=['emp_no','salary','from_date','to_date'];

//등록
app.post('/emps', async (req, res) => {
    // let data = req.body.param;
    // let result = await mysql.query('emp','insert', data); //data : insert를할때 2번째값
    // res.send(result);
    let empInfo = req.body.param;

    let empData = {};
    for(let column of empTable){ // let column = 'emp_no'
        let value = empInfo[column]; //대괄호사용시 변수로 필드명사용가능
        if(value == '') continue; //공백이 있으면 생략해서 보냄
        empData[column]= value;
        //사용자가 보내준 상자안에서 내가 필요한것만 꺼내서 다른바구니에 옮기는작업 이때 새로운바구니에들어가야하는 목록을배열로담고있따
    }
    result = await mysql.query('emp','insert',empData)

    let deptEmpData = [];
    for(let column of deptEmpTable){
        let value = empInfo[column]; 
        if(value == '') continue; 
        deptEmpData.push(value); //set절에 어느칼럼 업데이트할건지 명시되어있어서 배열이다 set절 이라고 무조건 객체는 아니다
    }
    result = await mysql.query('deptEmp','insert',deptEmpData)

    let salData = {};
    for(let column of salariesTable){
        let value = empInfo[column]; 
        if(value == '') continue; 
        salData[column]= value;
    }
    salData.to_date='9999-01-01'; //고정값에 대해 변수에 담아두는것...쿼리문에 9999-01-01로 하겠다 안적어놔서 여기 담아줘야함


    result = await mysql.query('sal','insert',salData);
    res.send(result); // 결과를 돌려주면서 통신을 종료해줌 보낼게 없으면 종료라도 해야함res.end()로
});

//수정
app.put('/emps/:emp_no',async (req,res)=>{
    let data = [req.body.param, req.params.emp_no];
    let result = await mysql.query('emp','update',data);
    res.send(result);
});

//삭제
app.delete('/emps/:emp_no',async (req,res)=>{ //실행한쿼리문은 update지만 기능적으로 delete다
    let data = [req.body.param.to_date, req.params.emp_no];
    let result = await mysql.query('deptEmp','update',data);
    res.send(result);
});

//수정과삭제 배열을 보내는 이유=> 쿼리문에서 ? 개수 보면 하나가 아니기때문에 배열로(물음표 2개이상은 무조건배열)
//오브젝트인지 아닌지는 컬럼이 명시되면 객체x 명시되지않으면 객체 ..컬럼이 있냐 없냐에 따라 다름

