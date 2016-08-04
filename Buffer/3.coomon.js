var buf1 = new Buffer('蔡');
var buf2 = new Buffer('君');
var buf3 = new Buffer('君');
var buf4 = new Buffer('学');
var buf5 = new Buffer('习');
 //Buffer.concat([buf1,buf2],length)  length合并后的字节长度

var all = Buffer.concat([buf1,buf2,buf3,buf4,buf5,],15);

console.log( all.toString('utf8') );

var s = all.slice(9,12);
console.log(s.toString() );

//Buffer.copy(targetBuffer,targetstart,sourcestart,sourceend)
var buffers = new Buffer(15);
buf1.copy(buffers,0,0,3);
buf2.copy(buffers,3,0,3); //源的开始和结束不变
buf3.copy(buffers,6,0,3);
buf4.copy(buffers,9,0,3);
buf5.copy(buffers,12,0,3);

console.log( buffers.toString('utf8',0,6) );
console.log( buffers.toString('utf8') );


//获取字节长度
console.log( Buffer.byteLength("蔡君君") ); //9
console.log( Buffer.byteLength("ab蔡君君") );  //11
