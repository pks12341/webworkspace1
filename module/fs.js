const fs = require('fs');

const data = 'Hello, World!!';
fs.writeFileSync('./sample.txt', data, 'utf8');

// fs.writeFile('./sample/txt', data, 'utf8', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('파일쓰기완료')
// })

fs.readFile('./sample.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

