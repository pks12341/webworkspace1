//클래스와 상속..
class Human {
    // let ssn;
    // let name;
    // let age; -->자바 식인데 js에서는 문법적으로 허용 X
    //필드,생성자,메소드
    constructor() { //필드를 생성자 안에 생성 : java와다름
        this._ssn; //언더바_로 시작하는건 숨겨진 필드, 즉 건드리지 말라는 암묵적인 뜻
        this._name = 'Hong';
        this._age;
    }
    set ssn(ssn) {
        this._ssn = ssn;
    }
    get ssn() { //책이랑 문법이 좀 다르다
        return this._ssn;
    }

    set name(name) {
        this._name = name;
    }

    get name() { //붙이면 안됨 getname처럼
        return this._name;
    }

    set age(age) {
        this._age = age;
    }

    get age() {
        return this._age;
    }

    getInfo() {
        console.log(this._ssn, this._name, this._age);
    }
}

let hu = new Human();
hu.ssn = '990520';
hu.name = "Kang";
hu.age = 25;
hu.getInfo();
