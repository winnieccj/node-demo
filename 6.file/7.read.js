//File System�ļ�ϵͳ
//fs�ļ�ģ��
var fs = require('fs');

//ͬ��
try{
    var data = fs.readFileSync('./index.txtg','utf8');
}catch(err){
    console.log(err);
};
console.log( data );  //ͬ������
console.log( 'b' );
console.log( 'c' );  //�����b,c��ִ���첽