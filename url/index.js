const url = require('url');

const req = "http://www.baidu.com?name=zhangsan&age=20"

let getValue = url.parse(req,true).query;

console.log(getValue)