//함수선언식 -> 외부 라이브러리 에서 사용가능 / var과 비슷 (아래 배치), 덮어쓰기 가능
function hello(name) {
    return "Hello, " + name;
}

//화살표함수
let arrHello = (name)=>{return "Hello, "+ name;}//화살표함수의 기본적인 형태
arrHello = name => "Hello, " + name ; //실행되는코드가 return 한줄이면 (){} 생략하고 이렇게표시가능

//함수표현식 -> 해당함수 사용되기전에 선언되어야함 (위에 배치)
const message = function (msg) {
    return "msg : " + msg;
}

let arrMessage = (msg) => {return "msg : " + msg;}
arrMessage = msg => "msg : " + msg;

//매개변수 2개이상일때는 괄호생략X 
arrMessage = () => {
                   let today = new Date().getDate();
                    console.log("오늘 날짜", today);
                    } 

function hello(msg) {
    return "msg, Hello : " + msg;
}

//화살표 함수는 this를 사용불가(전역 객체가 window라서?)


console.log(hello("world"));
//D:\Dev\webWorkspace>cd javascript
//D:\Dev\webWorkspace\javascript>node arrow.js

// 함수
// -내부함수
// -콜백함수 - 이벤트핸들러
// -일반함수
// -메소드


