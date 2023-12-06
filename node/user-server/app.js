require('dotenv').config({
    path : './db/mysql.env'
})
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.use(express.static('dist'));

app.listen(3000,() =>{
    console.log('Server Start');
})

app.get('/',(req,res)=>{
    res.sendFile('/dist/index.html');
});

app.get('/api/users',async (req,res)=>{ //users는 db와상관없다..(경로에 언더바 혹은 특문을 쓰는일은 없다)
    let list = await mysql.query('usersList');
    res.send(list);
})

app.post('/api/users', async(req,res)=>{
    let data = req.body.param;
    let result = await mysql.query('usersInsert',data);
    res.send(result);
});
app.put('/api/users/:user_no',async (req,res)=>{
    let datas = [req.body.param, req.params.user_no];
    let result = await mysql.query('usersUpdate',datas);
    res.send(result);
})

app.delete('/api/users/:user_no',async (req,res)=>{
    let data = req.params.user_no;
    let result = await mysql.query('usersDelete',data);
    res.send(result);
})

app.get('/api/users/:user_no', async (req,res)=>{
    let data = req.params.user_no;
    let list = await mysql.query('usersInfo',data);
    res.send(list[0]);
});