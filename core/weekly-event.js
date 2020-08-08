var Job = require('./modular-event-job')
var job = new Job()

job.on('done', (details) => {
    console.log('Job Emitted at: '+ details.completedOn)
})
job.emit('start')
