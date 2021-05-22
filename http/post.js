// 搭建服务器
//引入http模块
const http = require('http')
const url = require('url')

// 设置端口号
const port = '8081'

// 创建服务器
const server = http.createServer((req,res)=>{
    // 每接收到一个请求，就来这里执行一次代码

    //req对象负责请求相关的东西
    //通过事件接收post发送过来的参数，参数在回调中
    req.on('data',postData=>{
        //因为传输的数据是二进制形式，需要转成字符串才能正常显示
        console.log('服务端接收参数',postData.toString())
    })
    res.end('hello nodejs')
})
//监听端口
server.listen(port,error=>{
    console.log(`listening at port:${port}`)
})