// 搭建服务器

//引入http模块
const http = require('http')

// 设置端口号
const port = '8080'

// 创建服务器
const server = http.createServer((req,res)=>{
    // 每接收到一个请求，就来这里执行一次代码
    // 注意，当listen执行的时候，服务器监听就开始
    // 且不会自动关闭，此时需要这里有响应，否则网页就是空白
    res.end('hello nodejs')
})
//监听端口
server.listen(port,error=>{
    console.log(error)
    console.log("listening at port:"+port)
})