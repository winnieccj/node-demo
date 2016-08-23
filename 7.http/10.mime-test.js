var fs = require('fs');
var mime = require('mime'); //本地安装才能使用,用来获取文件的mime类型
console.log( mime.lookup('index.mp3') );
console.log( mime.lookup('index.js') );
console.log( mime.lookup('index.css') );
console.log( mime.lookup('index.html') );



