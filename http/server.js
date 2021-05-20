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
    //获取请求路径
    const reqUrl = req.url
    console.log('请求路径',reqUrl)
    //获取请求方法
    const method = req.method
    console.log('请求方法',method)
    //拿到请求路径之后，并不能很好的拿到请求参数
    //这时候需要url模块的辅助，所以上面新增加引入了url模块
    const params = url.parse(reqUrl,true)
    console.log('请求参数',params.query)  //此处打印内容可自行改变访问的url获得

    // 当listen执行的时候，服务器监听就开始
    // 且不会自动关闭，此时需要这里有响应，否则网页就是空白
    res.end('hello nodejs')
})
//监听端口
server.listen(port,error=>{
    console.log(error)
    console.log(`listening at port:${port}`)
})