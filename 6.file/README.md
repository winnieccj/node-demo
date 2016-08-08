## 读取文件
- 异步读取文件 readFile

- 同步
```
fs.readFileSync(filename,[options])
```
    - 每一个同步方法和异步方法都是成对出现的
    - 同步方法会阻塞主线程的执行，在数据没有返回之前不能执行后续代码
    - 它不需要传递回调函数，通过函数返回值接受结果
- 异步
```
fs.readFile(filename,[options],callback)
```
    - 异步方法需要把回调函数传入
    - 回调函数会在同步方法执行完毕后才执行异步回调
    - 异步方法不会阻塞主线程，不会影响后续代码的执行

## 写文件
- 同步
```
fs.writeFileSync(filename,data,[options])
```
- 异步
```
fs.writeFile(filename,data,[options],callback)
```
## 实现拷贝文件的方法function copy(src,target)

## 操作目录
- 创建文件夹
```
fs.mkdir()
```
- 读取目录下所有的文件
```
fs.readdir()
```
- 获取一个文件或目录详情
- 判断一个文件(或文件夹)是否存在
```
fs.exists()
```
## 路径