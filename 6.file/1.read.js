//File System�ļ�ϵͳ
//fs�ļ�ģ��
var fs = require('fs');

function afterRead(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data.toString());  //bufferת�ַ���
    }
}
fs.readFile('./index.txt',afterRead);//�����¼������ص�
console.log( 'b' );
console.log( 'c' );  //�����b,c��ִ���첽