//File System�ļ�ϵͳ
//fs�ļ�ģ��
var fs = require('fs');

function afterRead(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
}

fs.readFile('./index.txt','utf8',afterRead);//����toString()���Զ�ת���ַ�������
console.log( 'b' );
console.log( 'c' );  //�����b,c��ִ���첽