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
//请求文件
app.get('/register',(req,res)=>{
    let filePath = path.join(__dirname,'register.html')
    let content = fs.readFileSync(filePath,'utf-8')
    res.send(content)
})
// get获取参数  query属性是查询参数的对象
app.get('/list',(req,res)=>{
    let id = req.query.id
    res.send(id)
})
// 监听请求
app.listen(3000,()=>{
    console.log("web is running at port 3000")
})