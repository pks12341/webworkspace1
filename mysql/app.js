require('dotenv').config({
    path: './db/mysql.env'
}) //환경변수에등록하는역할? 환경변수는 process.env
const express = require('express');
const app = express();
const mysql = require('./db.js'); //db.js를반환시켜서



app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, () => {
    console.log('Server Start');
})

app.get('/customers', async (req, res) => {
    let list = await mysql.query('customerList');
    res.send(list); //목록조회
})

app.post('/customers', async (req, res) => {
    let data = req.body.param;
    let result = await mysql.query('customerInsert', data); //data : insert를할때 2번째값
    res.send(result);
});

app.put('/customers/:id', async (req, res) => {
    let datas = [req.body.param, req.params.id]; //배열인 이유? sql상에서 ?가 2개이상이기 떄문.. ?두개의값을 하나의배열에담아서
    let result = await mysql.query('customerUpdate', datas); //data : insert를할때 2번째값
    res.send(result);
});

app.delete('/customers/:id', async (req, res) => { //delete는 body사용 X
    let data = req.params.id;
    let result = await mysql.query('customerDelete', data);
    res.send(result);
});

app.get('/customers/:id', async (req, res) => {
    let data = req.params.id; //경로라서 body에 붙지않는다???
    let list = await mysql.query('customerInfo', data);//result대신list쓰는이유?
    res.send(list[0]); //select문은 한건이든 여러건이든 배열로 들어온다
});