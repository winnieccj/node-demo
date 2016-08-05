//File System文件系统
//fs文件模块
var fs = require('fs');

//同步
try{
    var data = fs.readFileSync('./index.txtg','utf8');
}catch(err){
    console.log(err);
};
console.log( data );  //同步报错
console.log( 'b' );
console.log( 'c' );  //先输出b,c再执行异步