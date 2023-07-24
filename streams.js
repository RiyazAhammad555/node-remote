// readable -- used to read data sequentially
// writable -- used to write data sequentially
// duplex -- used to read and write data sequentially
// transform -- data can be modified when writing or reading 
let arr = ['car', 'bike']
for (let i = 0; i < 11; i++) {
    if (i != 0) {
        arr.push(i)
    }
}
console.log(arr)

let s=arr.toString()
console.log(s)
let arr2=s.split(',')
console.log(arr2)
