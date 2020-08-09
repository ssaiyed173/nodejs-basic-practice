const express = require('express')
const app = express()

app.get('/hello',(request, response) => {
    response.send('Hello World')
})

app.listen(80)
console.log('Server is runnung on http://localhost/hello')