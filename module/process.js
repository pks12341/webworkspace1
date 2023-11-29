const process = require('process') //사용자 환경을 포함하는 객체 반환
const os = require('os');

// console.log(process.env);
// console.log(process.env.JAVA_HOME);
// console.log(process.env.LANG);

// console.log(os);
console.log(os.cpus());//cpu 코어 정보
console.log(os.tmpdir());//임시 저장경로 확인
