//File System�ļ�ϵͳ
//fs�ļ�ģ��
var fs = require('fs');

//�����ص�����
fs.readFile('./index.txt',function afterRead(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data.toString());  //bufferת�ַ���
    }
});//�ļ�����

console.log( 'b' );
console.log( 'c' );  //�����b,c��ִ���첽