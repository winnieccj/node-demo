//File System文件系统
//fs文件模块
var fs = require('fs');

//同步
//不能使用try...catch去捕获异步异常
try{
    var data = fs.readFileSync('./index.txtg','utf8');
}catch(err){
    //console.log(err);
    console.error(err);
};
console.log( data );  //同步报错
console.log( 'b' );
console.log( 'c' );  //先输出b,c再执行异步