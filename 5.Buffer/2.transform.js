//Buffer..toString([encoding[, start[, end]]])
//一个汉字3个字节

//字符串转buffer
var buffer = new Buffer('蔡君君','utf8');
console.log( buffer );

//buffer转字符串
console.log( buffer.toString('utf8',3,6) );
console.log( buffer.toString('utf8') );