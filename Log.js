//3
const fs = require('fs')
class Log{
    constructor(string){
        this.string = string
    }
    appendFile(string,level){
        fs.appendFile('app.log',`[${new Date().toJSON()}] ${level}: ${string}\n`, (err) => {
            if (err) throw err;
            else console.log('append to app.log')
          });
    }
    info(string){
        this.appendFile(string,'INFO')
    }
    error(string){
        this.appendFile(string,'ERROR')
    }
    notice(string){
        this.appendFile(string,'NOTICE')
    }
    warning(string){
        this.appendFile(string,'WARNING')
    }
    debug(string){
        this.appendFile(string,'DEBUG')
    }
    alert(string){
        this.appendFile(string,'ALERT')
    }
    critical(string){
        this.appendFile(string,'CRITICAL')
    }
    emergency(string){
        this.appendFile(string,'EMERGENCY')
    }
    filter(filBy){
        let data = fs.readFileSync('app.log','utf8').split('\n')
        let nul = ''
        data.map(item=>{
            if(item.includes(filBy)) console.log(item)
        })
    }
}
var log = new Log
log.warning('ini error')
// log.error('An error');
 