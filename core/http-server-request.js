const http = require('http')
const port = 80

http.createServer((request, response) => {
  
    if(request.method == 'POST'){
        let buffer = ''
        request.on('data', (chunk) => {
            buffer += chunk
        })
        request.on('end',() => {
            response.writeHead(200,{'Content-Type': 'text/plain'})  
            console.log(buffer)
            response.end('Data Accessed')
        })
    }else{
        response.writeHead(200,{'Content-Type': 'text/plain'})  
        response.end(`${request.method} is not supported`)
    }
}).listen(port)
console.log(`Server running at http://localhost:${port}`)