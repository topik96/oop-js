//1
const crypto = require('crypto')
class Hash {
    constructor(string){
        this.string = string
    }
    md5(){
        return crypto.createHash('md5').update(this.string).digest('hex')
    }
    sha1(){
      return crypto.createHash('sha1').update(this.string).digest('hex')
    }
    sha256(){
      return crypto.createHash('sha256').update(this.string).digest('hex')
    }
    sha512(){
      return crypto.createHash('sha512').update(this.string).digest('hex')
    }
}

let hash = new Hash('Topik Mujianto')
console.log(hash.md5())
