//File System文件系统
//fs文件模块
var fs = require('fs');

//同步
var data = fs.readFileSync('./index.txt','utf8');
console.log( data );
console.log( 'b' );
console.log( 'c' );  //先输出b,c再执行异步