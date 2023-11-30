let words = ['spary', 'limit', 'elite', 'exuberant', 'parsent'];
let result = words.filter(function (word, idx, arry) {
    
 console.log('A : ' + word,idx,arry);
// let result = words.filter(function (a, b, c, d) { //임의로 변수줘서확인가능 뭔지 잘 모를때 이런식으로 확인해볼수있다. 첫번쨰는 값이고 두번쨰는 index고..
//     console.log(a, b, c, d);

});


let result1 = words.filter(function (word, idx, arry) {
    return word.length > 6;
});
console.log(words,result1);

let users = [
    {
        id : 100,
        name : 'Hong'

    },
    {
        id : 200,
        name : 'Kang'
    },
    {
        id : 300,
        name : 'Lee'
    }
]

result = users.map(function(user){
    return{
        id : user.id,
        name : user.name,
        grade : user.id == 200? 'VIP' : '일반'

    }
});
console.log(result, users)