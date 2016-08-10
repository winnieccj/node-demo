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
    //write方法可以向客户端发送响应，向客户端说话
    response.write('hello');
    response.write('world');
    response.end();//end之后就不能在write
});

//在8080端口上进行监听，主机名是localhost
server.listen(8080,'localhost');