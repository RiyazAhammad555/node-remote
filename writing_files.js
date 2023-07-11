const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, 'files')
for (let i = 0; i < 10; i++) {
    let file_name = 'file' + i
    let data = 'this is data in ' + i + ' file'
    const p = new Promise((resolve, reject) => {
        return fs.writeFile(file + '/' + file_name, data, (err, res) => {
            resolve(data)
        })
    })
    const fun = async () => {
        if (i == 2) {
            setTimeout(() => {
                let d = p.then(res => res)
                console.log(d)
            }, 2000)
        }
        else {
            let d = await p
            console.log(d)
        }


    }
    fun()
}