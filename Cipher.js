const crypto = require('crypto')
//1
class Cipher{
    encrypt(string,e){
        let chiper = crypto.createCipher('aes-256-ctr',e)
        let crypted = chiper.update(string,'utf8','hex')
        crypted+=chiper.final('hex')
        return crypted
    }
    decrypt(string,d){
        var decipher = crypto.createDecipher('aes-256-ctr',d)
        var dec = decipher.update(string,'hex','utf8')
        dec += decipher.final('utf8');
        return dec
    }
}
var c = new Cipher
var mess = c.encrypt('Topik','1')
console.log(mess)