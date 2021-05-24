//请求页面
const http = require('http')
const fs = require('fs')
const path = require('path')
const port = 8081

const server = http.createServer((req,res)=>{

    //获取文件路径
    let filePath = path.join(__dirname,'post.html')  

    //同步读取文件内容
    content = fs.readFileSync(filePath)  

    //这里用于设置响应编码，如果输出的是纯中文文本则需要设置
    //如果输出的页面中自带，就不是必要
    res.setHeader('Content-type','text/html;charset=utf-8')  

    //将页面内容输出
    res.end(content) 
})

server.listen(port,err=>{
    console.log(`正在监听${port}端口`)
})