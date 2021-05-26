// 引入express
const express = require('express')
// 创建app
const app = express()
//处理请求
app.get('/',(req,res)=>{
    res.send('欢迎使用express框架搭建服务器！')
})
// 监听请求
app.listen(3000,()=>{
    console.log("web is running at port 3000")
})