let nums = [50, 15, 39, 555, 6, 804];
let a = -1000;
let total = nums.reduce((sum, num)=>{
    return sum + num;
},a);//a가 초기값

console.log(total);
//sortfiltermapreduce+foreach도 알기