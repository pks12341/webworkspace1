const url = require('url');
//parse 밑줄떄문에 사용 안하는게 좋을듯
let legacy = url.parse('httpS://user:pass@Wsub.example.com:8080/p/a/t/h?query=string#hash');
console.log(legacy);


//아래방식이 좀더 편하게 사용가능(자유롭게 데이터를 다룰수있도록 기본제공되는 메소드가많다)
let whatwg = new URL('httpS://user:pass@Wsub.example.com:8080/p/a/t/h?query=string#hash');
console.log(whatwg);
console.log(whatwg.searchParams.get('query'));

