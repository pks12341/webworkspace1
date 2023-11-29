const timeout = setTimeout(() => {
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2); // (today.getMonth() + 1))이것만 써도된다..포맷때문에
    let day = ('0' + today.getDay()).slice(-2);
    console.log(`${year}년${month}월${day}일`);

}, 1000);

let count = 0;
const interval = setInterval(() => {
    console.log('interval %d', count++);
    if (count == 5) {
        clearInterval(interval);
    }
}, 1000);

const immedate = setImmediate(()=>{
    console.log('즉시 실행 요청'); //우선순위낮다\.. 콜백함수중에서는 우선순위 높긴하다
})
console.log('마지막 코드');
