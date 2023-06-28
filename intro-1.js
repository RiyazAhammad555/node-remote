const number=12
// console.log(10>number?'number is big':'number is small')
// console.log(__dirname)
// console.log(__filename)
let i=15
const p=setInterval(()=>{
    console.log(i)
    i-=1 
    if(i==0){
        clearInterval(p)
    }
},1000)
console.log('ok')