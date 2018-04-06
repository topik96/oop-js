const fs = require('fs')

class ConfigFileStorage{
    constructor(file){
        this.file = file
    }
    readFile(){
        var data = fs.readFileSync(this.file,'utf8')
        return data? JSON.parse(data):{}
    }
    put(key,value){
        let data = this.readFile()
        data[key] = value
        fs.writeFileSync(this.file, `${JSON.stringify(data)}`)
    }
    get(key){
        let data = this.readFile()
        console.log(data[key]?data[key]:'null')
    }
    remove(key){
        let data = this.readFile()
        delete data[key]
        fs.writeFileSync(this.file, `${JSON.stringify(data)}`)
        console.log('berhasil dihapus')
    }
}
module.exports = ConfigFileStorage;