const EventEmitter = require('events')
const { emit } = require('process')

class Emitter extends EventEmitter{}
emitter = new Emitter()

emitter.on('knock', (name) => {
    console.log('There is '+name)
})

emitter.once('greet', (name, message) => {
    console.log(message +' From '+name)
})

emitter.emit('knock','Shahnavaz')
emitter.emit('knock','Rahul')
emitter.emit('greet','Shahnavaz','Hello')
emitter.emit('greet','Rahul','Hi')