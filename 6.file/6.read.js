//File System�ļ�ϵͳ
//fs�ļ�ģ��
var fs = require('fs');

//ͬ��
var data = fs.readFileSync('./index.txt','utf8');
console.log( data );
console.log( 'b' );
console.log( 'c' );  //�����b,c��ִ���첽