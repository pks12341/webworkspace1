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

app.get('/api/boards',async (req,res)=>{ 
    let list = await mysql.query('boardList');
    res.send(list);
})

app.post('/api/boards', async(req,res)=>{
    let data = req.body.param;
    let result = await mysql.query('boardInsert',data);
    res.send(result);
});
app.put('/api/boards/:board_no',async (req,res)=>{
    let datas = [req.body.param, req.params.board_no];
    let result = await mysql.query('boardUpdate',datas);
    res.send(result);
})

app.delete('/api/boards/:board_no',async (req,res)=>{
    let data = req.params.board_no;
    let result = await mysql.query('boardDelete',data);
    res.send(result);
})

app.get('/api/boards/:board_no', async (req,res)=>{
    let data = req.params.board_no;
    let list = await mysql.query('boardInfo',data);
    console.log(list);
    res.send(list[0]);//
});