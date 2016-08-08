var fs = require('fs');

//异步
fs.writeFile('./write2.txt','web前端开发2','utf8',function(err){
    if(err){
        console.log( err )
    }
});


//flag是表示要对此文件做何种类型的操作
// w: 清空并写入
// a: 在原有基础上追加
fs.writeFile('./write3.txt','web前端开发3',{flag:'a'},function(err){
    if(err){
        console.log( err )
    }
});za       

fs.appendFile('./write4.txt','web前端开发4')