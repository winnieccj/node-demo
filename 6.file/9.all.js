//ͬʱ��ȡ�����ļ�
var fs = require('fs');

//�ص�����Ƕ��ʵ�ֶ���첽�������֮��ִ�еĻص�
//��Ҫ��ʱ�䳤��m + n
//����ɶ��Բ�
fs.readFile('./8.name.txt','utf8',function(err,name){
   fs.readFile('./8.age.txt','utf8',function(err,age){
       console.log( name, age );
   })
});



