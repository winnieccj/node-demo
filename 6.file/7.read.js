//File System�ļ�ϵͳ
//fs�ļ�ģ��
var fs = require('fs');

//ͬ��
//����ʹ��try...catchȥ�����첽�쳣
try{
    var data = fs.readFileSync('./index.txtg','utf8');
}catch(err){
    //console.log(err);
    console.error(err);
};
console.log( data );  //ͬ������
console.log( 'b' );
console.log( 'c' );  //�����b,c��ִ���첽