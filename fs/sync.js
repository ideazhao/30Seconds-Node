const fs = require('fs');

//读取当前文件根目录
fs.readdir('././30Seconds-Node',(err,data)=>{
    console.log(data);
    return;
})

//同级目录创建文件并写入，注意需在fs下执行
// fs.mkdirSync('file')
fs.writeFileSync('file/newfile.js','你好nodejs')

const openNewFile = fs.openSync('file/newfile.js','r')
console.log(openNewFile,'打开成功')

//同步写入
// fs.writeSync(openNewFile,'新插入的内容')

// 创建后追加内容
// fs.appendFileSync('file/newfile.js','新加的\n')

//关闭文件
fs.closeSync(openNewFile)

