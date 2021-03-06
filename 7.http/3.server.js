//导入核心模块http
var http = require('http');

/**
 *
 * 创建一个服务器
 * 指定监听 函数 每当有客户端请求到来的时候执行的
 * request 代表客户端的请求，可以从中获取请求过来的信息
 * response 代表向客户端发的响应，可以通过它向客户端发响应
 */
var server = http.createServer(function(request,response){
    var now = new Date();
    //设置内容类型的响应头
    response.setHeader('Content-Type','text/html;charset=utf-8');
    //response.end(JSON.stringify(now));//end之后就不能在write
    //response.end( now.toLocaleString() );//end之后就不能在write
    response.end( now.toString() );//end之后就不能在write
});

//在8080端口上进行监听，主机名是localhost
//端口号范围： 0~ 65535
server.listen(8080,'localhost');

//默认是80端口，将服务器启动起来，然后访问host文件里的域名
//Error: listen EADDRINUSE 表示端口号已被占用
