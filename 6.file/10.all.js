//同时读取两个文件
var fs = require('fs');

//计数器
var person = {};
function show(){
    if(Object.keys(person).length == 2){
        console.log( person );
    }
}

fs.readFile('./8.name.txt','utf8',function(err,name){
    person.name = name;
    show();
});

fs.readFile('./8.age.txt','utf8',function(err,age){
    person.age = age;
    show();
});

//同时读取多个文件还有一个重要方法： promise


