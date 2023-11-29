let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1
let day = date.getDay();

let msg = `${year}년
${month}월
${day}일;` //``안은 문자와 ${}혼용이 가능하다! 정해진 템플릿 안에서 변경값을 처리할때 쓴다, 줄바꿈도 인식된다

console.log(msg);
