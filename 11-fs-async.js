const {readFile, writeFile, write} = require('fs')
console.log('start')
// async fs has a callback function
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/first.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt',
        `Here is the result: ${first}, ${second}`,
        {flag: 'a'},
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
            console.log('done writing to the file')
        })
    })
})
console.log('starting the next task')



