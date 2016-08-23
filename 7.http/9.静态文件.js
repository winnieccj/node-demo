//重构
var http = require('http');
var fs = require('fs');
var mime = require('mime'); //本地安装才能使用,用来获取文件的mime类型
var path = require('path');

var server = http.createServer(function(request,response){
    var url = request.url;
    response.setHeader('Content-Type', mime.lookup(request.url)+';charset=utf-8');
    //指定文件路径 设置编码 得到的data就是字符串类型
    fs.readFile('.'+ url,'utf8',function(err,data){
        response.write( data );
        response.end();
    })
});

server.listen(9000,'localhost');


