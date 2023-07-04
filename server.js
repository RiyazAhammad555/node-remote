const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        console.log('server has been created')
        res.write('im done')
        res.end('over')
    }
    else if(req.url=='/about'){
        res.write('about us ')
        res.end('about us is over')
    }
})
server.listen(8001, () => {

    console.log('listening to the server go on...')

})