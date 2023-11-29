//db와연결
const mysql = require('mysql'); //모듈만들고
const sql = require('./db/sql.js'); //파일 불러오기(같은폴더가 아니라)

const pool = mysql.createPool({
    host: `127.0.0.1`, //or localhost
    port: 3306,
    user: `dev`,
    password: `1234`,
    database: `dev`, //오라클이랑 다른점 어떤 데이터베이스에 접근할지
    connectionLimit: 10 //다른사이트에서 접근못할수도있다
})

// pool.query('sql문', '값', (err, results) => { //내가 사용하고자하는 쿼리를 전달하는 메소드

// })

const query = async (alias, values) => {
    return new Promise((resolve, reject) => {
        return pool.query(sql[alias], values, (err, results) => {
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