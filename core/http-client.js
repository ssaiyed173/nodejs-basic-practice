const http = require('http')
const url = 'http://nodeprogram.com'

http.get(url,(response) => {
    let rowData = ''
    response.on('data',(chunk) => {
        rowData += chunk
    })
    response.on('end',() => {
        console.log(rowData)
    })
}).on('error',(error) => {
    console.log(`Got Error: ${error.message}`)
})