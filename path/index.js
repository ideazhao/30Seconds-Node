const path = require('path')

// __dirname  当前文件的文件路径
console.log(__dirname)

// 包含文件名的路径
console.log(__filename)

// 文件扩展名
const extname = path.extname('test.txt')
console.log('扩展名',extname)

// 全名
const basename = path.basename('test.txt')
console.log('全名',basename)

// 文件信息对象
const fileObj = path.parse('test.txt')
console.log('文件信息对象',fileObj)

// 拼接路径
const pathJoin = path.join(__dirname,'test.txt')
console.log('拼接路径',pathJoin)