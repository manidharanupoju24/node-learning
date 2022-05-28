const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
readFile('../content/second.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting second task')