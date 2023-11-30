//계산기 구성요소들을 함수로

const defaultNum = 1;

function add(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


//내보내고자하는것을 객체형태로 정의 / exports는 객체를 요구
module.exports = {
    defaultNum,
    add,
    minus,
    multi,
    divide //divide : divide 라는뜻 {}안에선 이름자체가 key가되고 변수의값이 값으로 들어간다


}

