const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})

//by default 64kb buffer
//last buffer - remainder
// highWaterMark -  control size
//const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
//const stream = createReadStream('./content/big.txt', {encoding: 'utf-8'})

stream.on('data',(result)=>{
  console.log(result)
})

stream.on('error',(result)=>{
  console.log(result)
})