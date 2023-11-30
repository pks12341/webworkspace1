let names = ["Hong","Kang","Adward","Lee"];
names.sort();
console.log(names);
names.reverse();
console.log(names);

// D:\Dev\webWorkspace\javascript>node sort.js
// [ 'Adward', 'Hong', 'Kang', 'Lee' ] -> sort->오름차순이 됨
// [ 'Lee', 'Kang', 'Hong', 'Adward' ] -> reverse

let nums =[40,100,1,5,25,10];
nums.sort();
console.log(nums); //->유니코드기준이라 순서가 이상..sort는 문자배열에 최적화
nums.sort((a,b)=>{
    return a-b;//음수면 두번째 매개변수가 크다고 판단.양수면 첫번째가 크다고판단
});//[1,10]이 넘어오면 음수라 안바뀜 , [100,25] 는 양수라 순서바뀜 ->오름차순 됨
console.log(nums);


