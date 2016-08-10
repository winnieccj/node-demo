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

//从一个相对路径解析出一个绝对路径
//以应用程序的所在目录为根起点
console.log( path.resolve() );
console.log( path.resolve('book','node.json') );

//book文件夹下node.json这个不能更改了，但是需要得到mysql.json的路径
console.log( path.resolve('book','node.json','..','mysql.json') );