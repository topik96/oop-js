const connection = {username:'root',password:'',db:'config'}
class ConfigMysql{
    constructor(){
    this.connection = connection
    }
}
module.exports = ConfigMysql;