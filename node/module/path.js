//PATH -delimiter,dirname,extname 중요

//중요
// __filename//file 명을 포함한 절대경로
// __dirname //file 명을 제외한 절대경로

const path = require('path');

console.log('== 절대경로')
console.log('filename : ' + __filename);
console.log('dirname : '+__dirname);
console.log(path.dirname(__filename));
console.log('실제 파일명 : %s', path.basename(__filename));
console.log('확장자 : ', path.extname(__filename));

let pathList = process.env.PATH.split(path.delimiter);
console.log(path.delimiter, pathList);
console.log('');
console.log(path.sep, pathList[0].split(path.sep));