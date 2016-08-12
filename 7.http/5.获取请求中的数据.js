//导入核心模块http
var http = require('http');

var server = http.createServer(function(request,response){

   console.log( request.method );//请求的方法
   console.log( request.url );//请求的URL
   console.log( request.headers );//请求的头

    response.statusCode = 404;//调响应码
    response.setHeader('Content-Type','text/html;charset=utf-8');//设置内容类型的响应头
    response.write('hello'); //写的响应体，在调用第一次write的时候，会发送响应头和第一个write的内容
    setTimeout(function(){
        response.write('cjj');
        response.end('over');
    },2000);

    //curl -v http:localhost:8080  命令行
});


server.listen(8080,'localhost');


