// readable -- used to read data sequentially
// writable -- used to write data sequentially
// duplex -- used to read and write data sequentially
// transform -- data can be modified when writing or reading 
const fs = require('fs')
const path = require('path')
const eventEmitter = require('events')
const http = require('http')
const fileloc = __dirname + '/files/stream_write.txt'
const fileloc2 = __dirname + '/files/stream_write2.txt'
//console.log(fileloc)
const res_1=fs.writeFile(fileloc, 'I am writing this in first file',(err,data)=>{
    console.log(data)
   // return data
})
const res_2=fs.writeFile(fileloc2, 'I am writing this in second file',(err,data)=>{
    console.log(data)
   // return data
})

const writing = async () => {
    const p = await res_1
    const q=await res_2
    console.log(p)
}
writing()
