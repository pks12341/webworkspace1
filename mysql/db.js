//db와연결
//require('dotenv').config({ path : './db/mysql.env' }) //환경변수에등록하는역할? 환경변수는 process.env -> app.js로 이동
const mysql = require('mysql'); //모듈만들고
const sql = require('./db/sql.js'); //파일 불러오기(같은폴더가 아니라)


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST, //or localhost       host: 172.0.0.1 이렇게 대신 host: process.env.MYSQL_HOST
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB, //오라클이랑 다른점 어떤 데이터베이스에 접근할지
    connectionLimit: process.env.MYSQL_LIMIT //다른사이트에서 접근못할수도있다
})

// pool.query('sql문', '값', (err, results) => { //내가 사용하고자하는 쿼리를 전달하는 메소드

// })

const query = async (alias, values) => {//`SELECT * FROM customers`에는 물음표가 없기때문에 values에 값을보내든안보내든상관X
    return new Promise((resolve, reject) => {
        pool.query(sql[alias], values, (err, results) => { //sql[alias]뜻 : 필드명을 내가 주는대로 하겠다customerList,customerInsert 이런거..sql문은 4개인데 쿼리문 1개만써도 괜찮은 이유
            if (err) {
                console.log(err);
                reject({
                    err
                }); //reject에 err를 전달
            } else {
                resolve(results);
            }
        })
    })
}
// const getData = async () => {
//     console.log(await query('customerList'));
// };

// getData();

module.exports = {
    query
}