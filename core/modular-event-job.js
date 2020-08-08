const EventEmitter = require('events')
class Job extends EventEmitter{

    constructor(ops){
        super(ops)
        this.on('start',function(){
            console.log('start emitted')
            this.process()
        })
    }
    process(){
        setInterval(() =>{
            this.emit('done',{completedOn : new Date()})
        },2000)
    }
}
module.exports = Job