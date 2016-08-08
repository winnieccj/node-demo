/**
 * 路径
 */

var fs = require('fs');
//处理路径
var path = require('path');
//合并 链接路径
console.log( path.join('book','mysql.json') );
//seperator 分隔符
console.log( path.sep );
//获取当前模块的绝对路径
console.log( __filename );
//获取当前模块所在的绝对目录
console.log( __dirname );

//获取一个路径里文件的名
console.log( path.basename('18.path.js') );
console.log( path.basename('18.path.js','.js') );

//获取一个路径里文件的扩展名
console.log( path.extname('18.path.js') );