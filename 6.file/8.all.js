//同时读取两个文件
var fs = require('fs');
var name = fs.readFileSync('./8.name.txt','utf8');
var age = fs.readFileSync('./8.age.txt','utf8');
console.log( name, age );