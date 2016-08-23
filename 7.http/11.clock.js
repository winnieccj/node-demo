var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var url = require('url');
var server = http.createServer(function(request,response){
    //把URL转换成url对象
    var urlObj = url.parse(request.url,true); //得到一个对象,第二个参数true把num=7变成了一个对象  query: { num: '7' }
    console.log( urlObj );
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

    //pathname 指的是路径名，问号和端口号中间的那一部分
    if( urlObj.pathname == '/apple' ){
        //query 查询字符串，true转成对象
        response.end( urlObj.query.num + '个苹果');
    }else if( urlObj.pathname == '/clock' ){
        response.end( new Date().toLocaleString() );
    }
});

server.listen(9000,'localhost');
