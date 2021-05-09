const str = "hello world"
const buf = Buffer.from(str)
// console.log(buf)
const buf2 = Buffer.alloc(10)
buf2[0] = 1
buf2[1] = 50
buf2[2] = 0x01
// console.log(buf2[2])

for( value of buf2){
    // console.log(value)
}

const buf3 = Buffer.allocUnsafe(10)
// console.log("不安全的buffer",buf3)


const buf4 = Buffer.from('我是一段文本')
console.log("buf4",buf4)
console.log("buf转字符串",buf4.toString())