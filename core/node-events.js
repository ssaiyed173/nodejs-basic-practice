const EventEmitter = require('events')

class Job extends EventEmitter{}
job = new Job()

job.on('done',(timeDone)=>{
    console.log('Job was Done at: '+timeDone)
})

job.emit('done',new Date())
job.removeAllListeners()