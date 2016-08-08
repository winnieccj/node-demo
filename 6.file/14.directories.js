/**
 * 操作目录
 */

var fs = require('fs');

//mk dir
//创建目录
//创建目录的时候，要求父目录必须存在，否则创建失败
fs.mkdir('test',function(err){
//fs.mkdir('test/cjj',function(err){  //目录下的路径
   if(err){
       console.log(err);
       console.log('目录创建失败');
   }else{
       console.log('目录创建成功');
   }
});