let array = [1, 2, 3];
let string = "Hello";
//[1,2,3,"H","e","l","l","o"] 이런형태로 만들고싶을때
//아래처럼해도 가능은 하다 하지만

// let newArray = [];
// for(let value of array){
//     newArray.push(value);
// }
// for(let value of string){
//     newArray.push(value);
// }
// let newArray = [array, ...string];
//[ [ 1, 2, 3 ], 'H', 'e', 'l', 'l', 'o' ]

let newArray = [...array, ...string]; // ... : 해당 변수 내부의 개별값을 복사

 console.log(newArray);

