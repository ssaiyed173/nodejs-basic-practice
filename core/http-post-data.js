const http = require('http')
const postData = JSON.stringify({name: 'Shahnavaz'})

const options = {
    hostname : 'mockbin.com',
    port : 80,
    path : '/request?foo=bar&foo=baz',
    method : 'POST',
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Content-Length' : Buffer.byteLength(postData)
    }
}

const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`)
    })
    res.on('end',() => {
        console.log('Response End')
    })
})

req.on('error', (e) => {
    console.log(`Error ${e.message}`)
})
req.write(postData)
req.end()