//File System文件系统
//fs文件模块
var fs = require('fs');

function afterRead(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
}

fs.readFile('./index.txt','utf8',afterRead);//不用toString()，自动转成字符串数据
console.log( 'b' );
console.log( 'c' );  //先输出b,c再执行异步