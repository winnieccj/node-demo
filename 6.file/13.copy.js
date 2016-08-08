//实现拷贝文件的方法 function copy(src,target)

'use strict'

var fs = require('fs');

function copy(src,target){
    //fs.readFile(src,'binary',function(err,data){  //binary二进制
    fs.readFile(src,function(err,data){  //默认buffer
        fs.writeFile(target,data,function(err){
            console.log( "copy success from" + src + "to" + data );
        })
    })
}

copy('./wirte4.txt','./wirte5.txt')