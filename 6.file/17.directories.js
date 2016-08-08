/**
 * 操作目录
 * 4. 判断一个文件(或文件夹)是否存在
 */

var fs = require('fs');
fs.exists('./book',function(exists){
   console.log( exists );
});

