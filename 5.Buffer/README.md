## 什么是Buffer
- 缓冲区Buffer是暂时存放输入输出数据的一段**内存**。
- JS语言自身只有字符串数据类型，没有**二进制**数据类型，而在处理TCP和文件流的时候，必须要处理二进制数据
- NodeJS提供了一个Buffer对象来提供对二进制数据的操作（是一个表示**固定**内存分配的全局对象，也就是说要放到缓存区的字节数需要**提前确定**）
- Buffer由一个**八位字节**元素组成的数组，可以有效的在javascript中表示二进制数据

## 什么是字节
* 字节（Byte）是计算机存储时的一种**计量**单位，一个字节等于**8位**二进制数
* 一个位就代表一个0或1，每8个位（bit）组成一个字节（Byte）
* 字节是通过网络传输信息的单位
* 一个字节最大值十进制数是255（2的8次方-1）

>ASCII码使用指定的7位或8位二进制数组合来表示128或256种可能的字

## 定义Buffer

   ```
   new Buffer(size)
   ```

   ```
   数组创建 new Buffer(array);
   ```

   ```
   字符串创建 new Buffer(str,[encoding]);
   ```

## 字符串和Buffer转换
* Buffer转字符串  Buffer.toString([encoding[, start[, end]]])

## Buffer常用方法
- 合并Buffer Buffer.concat([buf1,buf2],length)
- 复制Buffer
    ```
    Buffer.copy(targetBuffer,targetstart,sourcestart,sourceend)
    ```
- 判断是否是Buffer.isBuffer
- 获取字节长度 Buffer.byteLength