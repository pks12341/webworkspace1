const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

// application/www-form-urlencoded
const defaultParser = express.urlencoded({ extended : false });//이건 굳이 안써도됨

//application/json 이면 이런형태
const jsonParser = express.json(); //parser는 multipart 못처리함

app.use(defaultParser);

app.post('/info',(req, res) =>{
    res.send('welcome, '+ req.body.name);
});

app.post('/message', jsonParser, (req,res)=>{ //jsonParser(미들웨어) jsonparser이기 때문에 postman에서 json선택
    res.send('MSG:, ' + req.body.message);
});

app.listen(5000, ()=>{
    console.log('server start!!');
})

let sessionSetting = session({
    secret : 'secret key', //아무의미없는 값 줘도 된다
    resave : false, //변경사항이 없어도 다시 저장할건지말건지
    saveUninitialized : true, // 저장소에 강제로 값을 저장할건지말건지(지금은 저장소안쓸거라 false로해도 되긴함)
    cookie : { //
        httpOnly : true, // 통신상으로만접근가능. 자바스크립트로 접근 x
        secure : false, // http말고 https로만 쿠키정보를 주고받을수있도록(보안 강화)
        maxAge : 60000 // cookie 유효 기간
    }
});

app.use(sessionSetting);

const corsOptions = {
    origin : 'http://192.168.0.32:5500',
    OptionsSuccessStatus : 200// 옛날브라우저 지원할거면 넣고 아니면 빼면됨


}

app.use(cors(corsOptions));

app.get('/',(req,res)=>{
    res.send(req.session);
});

app.post('/login',(req, res)=>{
    const { id, pwd } = req.body;
    req.session.user = id;
    req.session.pwd = pwd;
    req.session.save(function(err){
        if(err) throw err;
        res.redirect('/');        
    })
})

app.get('/logout',(req,res)=>{
    req.session.destroy();
    req.redirect('/');
})

