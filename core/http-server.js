const http = require('http')
const port = 80

http.createServer((req, res) => {
    console.log(`Request Method ${req.method}`)
    console.log(`Request Headers ${JSON.stringify(req.headers)}`)
    console.log(`Request Url ${req.url}`)
    res.end('Hello: ')
}).listen(port)

console.log(`Server is running at http://localhost:${port}`)