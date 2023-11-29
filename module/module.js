//import or require 차이?

//'calculator'이라 쓰면안됨 같은폴더 안이라도 ./ 붙음 상위폴더에 있을떄는 ../
const { add, minus } = require('./calculator');

console.log(add(10,25));

console.log(minus(25,3));