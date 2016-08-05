//同时读取两个文件
var fs = require('fs');

//回调函数嵌套实现多个异步操作完成之后执行的回调
//需要的时间长，m + n
//代码可读性差
fs.readFile('./8.name.txt','utf8',function(err,name){
   fs.readFile('./8.age.txt','utf8',function(err,age){
       console.log( name, age );
   })
});



