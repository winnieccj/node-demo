//Buffer;(类似数组，里面只能放字节)
//Buffer 里面只能放字节 0-255

//指定大小，确定完就不能改了
var buffer = new Buffer(1);  //表示最大存一个字节
console.log( buffer );  //<Buffer 02> 02是随机数
buffer[0] = 10;

console.log( buffer );  //<Buffer 0a>

//通过字符串创建buffer
console.log( new Buffer("蔡") );

//通过数组来创建
console.log( new Buffer([1,2,3]) );
console.log( new Buffer(["w","cdsvc",3]) );//<Buffer 00 00 03> 里面只能是数字或者八进制等，不能放字符串，会被自动转换成00
