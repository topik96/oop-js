const ConfigFileStorage = require('./ConfigFileStorage')
const ConfigMysql = require('./ConfigMysql')
class Config{
    constructor(config){
        this.config = config
    }
    put(key,value){
        this.config.put(key,value)
    }
    get(key){
        this.config.get(key)
    }
    remove(key){
        this.config.remove(key)
    }
}
var cfs = new ConfigFileStorage('config.json')
var Conf = new Config(cfs)

Conf.remove('site_name')         // Be able to save string.




