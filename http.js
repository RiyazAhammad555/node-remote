const http=require('http')
const server=http.createServer((req,res)=>{
    //console.log(req.url)
    if(req.url==='/'){
        //res.write('<h1>welcome to our home page</h1>')
        res.write(`<h1>welcome to our page</h1> <a href="/">go back to home</a>`)
        res.end()
    }
    else if(req.url==='/about'){
        res.write('<h2>Thanks for choosing a way to know about us. We have been awaiting for you. Cheers</h2>')
        res.end()
    }
    else{
    res.write(`<h2> you are messed up</h2> \n <a href="/">go back to home</a> `)  
    res.end()
}
})
server.listen(5000,(err,data)=>console.log(data))