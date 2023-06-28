const lodash=require('lodash')
const arr=[1,2,[3,4],[5,[6],[9]],[99,[9,[10]]]]
const new_arr=lodash.flattenDeep(arr)
console.log(new_arr)