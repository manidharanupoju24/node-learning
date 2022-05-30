const {readFile, writeFile} = require('fs').promises
// await waits until the promise is fulfilled

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
const start  = async() => {
    try{
        const first = await readFile('./content/first.txt', 'utf-8',(err,result)=>{
            if(err){
                console.log(err)
            }
            return result
        })
        const second = await readFile('./content/second.txt', 'utf-8',(err,result)=>{
            if(err){
                console.log(err)
            }
            return result
        })
        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            {flag: 'a'},(err,result)=>{
                if(err){
                    console.log(err)
                }
                console.log(result)
                console.log('done writing to the file')
            }
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))