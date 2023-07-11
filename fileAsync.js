const { readFile, writeFile } = require('fs')
const path = require('path')
const file = path.join(__dirname, 'files', 'write.txt')
let i = 0
const p = setInterval(() => readFile(file, 'utf-8', (err, res) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(res)
    i++
    if (i == 5) {
        clearInterval(p)
    }
}), 5000)

