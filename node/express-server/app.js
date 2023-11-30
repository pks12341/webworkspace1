const fs = require('fs');
const express = require('express');
const userRouter = require('./user.js')
const app = express();

app.use('/user', userRouter);
app.use('/public', express.static('images'))
//http://localhost:3000/user 들어가도 전체조회가뜬다?
app.use(function (err, req, res, next) {
    res.status(500).json({
        statusCode: res.statusCode,
        errMessage: err.message
    });
});

//8-13행은 안해도되긴함
app.get('/error', (req, res, next)=>{
    next(new Error('Process Fail! Check Data!')); //에러형태를 우리가 원하는대로보낼수있따..
});


const jsonFile = fs.readFileSync('db.json');
const jsonData = JSON.parse(jsonFile);

//sql문(select) 역할 //where이 있으면 그걸 출력, where이 없ㄷ으면 전체를 출력 그래서 단건조회도 되고 전체조횓조 되는듯
//http://localhost:3000/posts/3 여기서 끝에 3은 경로가 아니라 id로 인식..전통적 방식 (?id=1) 이런거랑은 다르다
const getData = (target, where) => {
    let data = jsonData[target];
    if (Array.isArray(data)) { //배열을확인할때사용
        let list = data;
        for (let obj of list) {
            if (obj.id == where) {
                data = obj;
            }
        }
    }
    return data;
}

// const getData = async () => {
//     return await fetch('db.json')
//         .then(res => res.json());

// }
// let db = getData();
//=>fetch가 안된 이유?실행환경이 부적합해서..


//--------------------------------------------------------------------------posts조회
//--------------------------------------------------------------------------


app.get('/', (req, res) => { //매개변수 2가지는 필수로 넘어온다 ('/') : 엔드포인트 // '/'(루트)로 넘어오면 이렇게 처리하겠다
    res.send('Server Connect');
});

app.get('/posts', (req, res) => { //posts로 넘어오면 이렇게 처리하겠다
    let data = getData('posts');
    res.send(data);
});
app.get('/posts/:id', (req, res) => { //경로에 붙어서 넘어오는 값? //posts:id로 넘어오면 이렇게 처리하겠다
    let data = getData('posts', req.params.id)
    res.send(data);
})
// app.get('/posts', (req, res) => {
//     res.send(db['posts']);
// });

//--------------------------------------------------------------------------코멘트조회
//--------------------------------------------------------------------------

app.get('/comments', (req, res) => { //comments 넘어오면 이렇게 처리하겠다
    let data = getData('comments');
    res.send(data);
});
app.get('/comments/:id', (req, res) => { //comments만 넘어오는게 아니라 comments:id 로 값이 따로 넘어오면 이렇게 처리하겠다(특정 대상 조회한다는ㅅ뜻)[req.params.id]
    let data = getData('comments', req.params.id)
    res.send(data);
})

//--------------------------------------------------------------------------프로필조회
//--------------------------------------------------------------------------

app.get('/profile', (req, res) => { //하나만 있으면 된다. 조건을 걸수없다
    let data = getData('profile');
    res.send(data);
});

app.route('/emps') // 한 경로에 대해 따로 메소드가 들어오면 각각 처리 /route의 역할// /emps/:id 라면 get이면단건조회, delete면 삭제 이렇게 2개 같이 움직이기도가능?
    //http://localhost:3000/emps 들어가보기 => 전체조회가 뜸.메소드 지정 안하는 이상 모든 통신은 default가 get이다(조회)
    .get((req, res) => {
        res.send('사원 전체조회');
    })

    .post((req, res) => {
        res.send('사원 등록');
    })

    .put((req, res) => {
        res.send('사원 수정');
    })

    .delete((req, res) => {
        res.send('사원 삭제');
    })

//서버를 동작시키는 부분(밑에있어도되고 위에있어도됨)
app.listen(3000, () => { //3000번이라는 번호로 서버를 오픈하겠다
    console.log('서버가 실행됩니다..');
    console.log('http://localhost:3000');
});