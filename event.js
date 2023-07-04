// console.log('ok')
// setTimeout(()=>{
//     console.log('timeout function executed')
// },0)
// console.log('end')

// setTimeout(() => {
//     console.log('timeout 1 executed')
// }, 1000)
// setTimeout(() => {
//     console.log('timeout 2 executed')
// }, 1000)
// setTimeout(() => {
//     console.log('timeout 3 executed')
// }, 1000)
// setTimeout(() => {
//     console.log('timeout 4 executed')
// }, 1000)
const fs=require('fs')
const path=require('path')
let file=path.join(__dirname,'files','read.txt')
console.log(file)
console.log('task started')
fs.readFileSync(file,'utf-8',(err,result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
    console.log('file has been read')
})
fs.readFile(file,'utf-8',(err,res)=>{
    if(err){
        console.log(err)
    }
    console.log(res)
    console.log('async file has been read')
})
console.log('task over')