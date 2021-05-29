// 引入express
const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
// 创建app
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//请求文件
app.get('/register',(req,res)=>{
    let filePath = path.join(__dirname,'register.html')
    let content = fs.readFileSync(filePath,'utf-8')
    res.send(content)
})
//post请求
app.post('/register',(req,res)=>{
    console.log(req.body)
    res.send('post is ok')
})
// 监听请求
app.listen(3000,()=>{
    console.log("web is running at port 3000")
})