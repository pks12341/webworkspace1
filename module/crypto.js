const crypto = require('crypto');
const data = 'pw1234';

let encData = crypto.createHash('sha512')
                    .update(data)
                    .digest('base64'); //digest : 표현방식.base64 혹은 hex 사용할건지

console.log('B64 : '+encData);

encData = crypto.createHash('sha512')
                .update(data)
                .digest('hex');
console.log('Hex : '+encData);

const createSalt = ()=>{
    return new Promise((resolve,reject)=>{
        crypto.randomBytes(64,(err,buf)=>{
            if(err) reject(err);
                resolve(buf.toString('base64'));
                
        })
    })
}

const createCryptoPassword = async (plainPassword)=>{
    const salt = await createSalt();
    
    return new Promise((resolve,reject)=>{
        crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err,key)=>{ //복호화 할때 귀찮게 할수있다
            if(err) reject(err);
            resolve({password : key.toString("base64"), salt});
        })
    })
}

const CryptoPassword = async() => {
    encData = await createCryptoPassword(data)
    console.log(encData);
}
CryptoPassword();
