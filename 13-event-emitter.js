const EventEmitter = require('events');// EventEmitter is a class

const customEmitter = new EventEmitter()

customEmitter.emit('response')

customEmitter.on('response',()=>{
    console.log(`data recieved`)
}) //listening for an event

customEmitter.on('response',(name, age)=>{
    console.log(`some other logic here`)
    console.log(`Data recieved ${name} and ${age}`)
})

customEmitter.emit('response') // emit the response once the event is recieved

customEmitter.emit('response','Manidhar',28)
