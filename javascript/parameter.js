function printMsg(msg = '메세지를 입력해주세요', to = 'zz') {
    console.log(msg);
    console.log(to);
}

//특정값을 넣었을때와 그렇지않을때 같은 함수를 호출하지만 다른결과를 출력( 기본값이 보장되어야할 때 )
printMsg('Have A Nice Day');
printMsg(); //이렇게 매개변수값이 없을때 기본값 지원

function sum(x, y, ...args) { //몇개가 들어올지 모를 때 ...args를 이용해 한꺼번에 담겠다
    let result = x + y;
    console.log('args length : ' + args.length); //0출력
    for (let num of args) {
        result += num;
    }
    return result;
}
console.log(sum(1,2)); //나머지연산자의 값이 빔
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));//변수를 추가하는게 아니고 하나의 변수에 배열의 형태로 계속 담음