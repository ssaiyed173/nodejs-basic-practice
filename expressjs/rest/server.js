const express = require('express')
const bodyParser = require('body-parser')
const users = require('./users')
const port = 80

const app = express()
app.use(bodyParser.json())
app.post('/rest/users/add', (request, response) =>{
    users.add(request.body)
    response.send({message: 'User Added'})
})
app.get('/rest/users',(request, response)=>{
    response.send(users.getUsers())
})
app.listen(port)
console.log('Server running http://localhost/')