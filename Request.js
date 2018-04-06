const { URL } = require('url')
const http = require('http')
const querystring = require('querystring')
class Request {
    constructor(urlName){
        this.urlName = urlName
    }
    optionRequest(){
        let url = new URL(this.urlName)
        var options = {
            hostname: url.hostname,
            path: url.pathname + url.search,
            port:url.port,
            method:'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
          }
          return options
        }
    get(){
        let opts = this.optionRequest()
        oR.headers['Content-Type'] = 'text/html'
        let req = http.request(opts,(res)=>{
            console.log('HEADERS :'+res.headers)
            res.setEncoding('utf8')
            res.on('data',function(chunk){
                console.log('BODY: '+chunk)
            })
        })
        req.end()
    }
    post(key,value){
        let opts = this.optionRequest()
        const postData = querystring.stringify({[key]:value})
        opts.method = 'POST'
        opts.headers['Content-Length']= Buffer.byteLength(postData)
          let req = http.request(opts, function(res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
             console.log('Body: ' + chunk);
            });
            res.on('end',()=>{
                console.log('data has saved')
            })
          })
          req.write(postData);
          req.end();
          return req
    }
    put(id,key,value){
    let url = new URL(this.urlName)
    let opts = this.optionRequest()
    let putData = querystring.stringify({[key]:value})
    opts.method = 'PUT'
    opts.path = url.pathname+`/${id}`+url.search
    opts.headers['Content-Length'] = Buffer.byteLength(putData)
    let req = http.request(opts,function(res){
        res.setEncoding('utf8')
        res.on('data',function(chunk){
            console.log(chunk)
        })
         res.on('end',()=>{
             console.log('data is uptated')
         })
    })
    req.write(putData);
    req.end();
    }
    delete(id){
    let url =  new URL(this.urlName)
    let opts = this.optionRequest()
    opts.method = 'DELETE'
    opts.path = url.pathname+`/${id}`+url.search
    console.log(opts.path)
    let req = http.request(opts,function(res){
        res.setEncoding('utf8')
        res.on('data',function(chunk){
        })
        res.on('end',()=>{
             console.log('data has removed')
        })
    })
    req.end();
    }

    head(){
        let opts = this.optionRequest()
        opts.headers['Content-Type'] = 'text/html'
        let req = http.request(opts,res=>{
            console.log(res.headers)
        })
        req.end()
    }
    options(){
        let opts = this.optionRequest()
        opts.headers['Content-Type'] = 'text/html'
        opts.method = 'OPTIONS'
        let req = http.request(opts,res=>{
            console.log(res.headers)
        })
        req.end()
    }
}
var a = new Request('http://localhost:3000/posts')
a.options()
//.options()
