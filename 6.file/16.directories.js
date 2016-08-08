/**
 * 操作目录
 * 3.获取一个文件或目录详情
 */

var fs = require('fs');
fs.readdir('./book',function(err,files){
    //迭代数组,循环文件列表
    files.forEach(function(file){
        //获取文件的详情
        fs.stat('./book/' + file,function(err,state){
            //console.log( state );
            console.log( state.size );
            console.log( state.isDirectory() ); //是否是目录
            console.log( state.isFile() ); //是否是文件
        });
    });
});

