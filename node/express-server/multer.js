const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + path.basename(file.originalname));
    }
});

const upload = multer({
    storage: storage
});

app.post('/profile', upload.single('avatar'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
});

app.post('/photos', upload.array('photos', 12), (req, res) => { //사진을 최대 12개까지 받겠다
    for (let file of req.files) { //file과 files 이름 다르다.. single이 불러오는건 file arraysms files
        console.log(file)
    }
});

app.listen(5000, () => {
    console.log('Server Start!');
});