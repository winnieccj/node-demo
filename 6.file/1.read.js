//File System文件系统
//fs文件模块
var fs = require('fs');

function afterRead(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data.toString());  //buffer转字符串
    }
}
fs.readFile('./index.txt',afterRead);//基于事件驱动回调
console.log( 'b' );
console.log( 'c' );  //先输出b,c再执行异步