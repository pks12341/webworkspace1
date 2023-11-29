const fs = require('fs'); //file system약어
const { Console } = require('console') //클래스여서 대문자로 시작

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout : output, stderr : errorOutput }); //로그를호출할땐 stdout,에러호출시엔 stderr경로 사용

const count = 5;
logger.log('count : %d', count);
logger.error('count : ' + count);
