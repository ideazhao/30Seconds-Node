// 引入express
const express = require('express')
const path = require('path')
const fs = require('fs')

// 创建app
const app = express()
//处理请求
app.get('/',(req,res)=>{
    res.send('欢迎使用express框架搭建服务器！')
})
app.get('/register',(req,res)=>{
    let filePath = path.join(__dirname,'register.html')
    let content = fs.readFileSync(filePath,'utf-8')
    res.send(content)
})
// 监听请求
app.listen(3000,()=>{
    console.log("web is running at port 3000")
})