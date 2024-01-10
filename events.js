const EventEmitter =require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response',()=>{
    console.log(`data received`)
})

customEmitter.on('response',(name,id)=>{
    console.log(`data received2 ${name} , ${id}`)
})


customEmitter.emit('response','pankaj',34) // emit with data

//always first listen and then emit