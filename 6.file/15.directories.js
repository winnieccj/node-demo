/**
 * 操作目录
 * 2.读取目录下面所有的文件
 */

var fs = require('fs');
fs.readdir('./book',function(err,files){
    console.log( files ); //[ 'javascript.json', 'mysql.json', 'node.json' ]
});

