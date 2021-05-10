const fs = require('fs')

fs.open("file/newfile2.js",'w',(err,fd)=>{
    if(err){
        return
    }
    fs.write(fd,"文件2新加的内容",err=>{
        if(err){
            return
        }
        console.log('成功写入了内容')
    })
})