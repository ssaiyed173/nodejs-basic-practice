const express = require('express')
const bodyParser = require('body-parser')
const users = require('./users')
const port = 80

const app = express()
app.use(bodyParser.json())

app.delete('/rest/users/delete/:id', (request, response) => {
    users.delete(request.params.id)
    response.send({message: 'User Deleted'})
})
app.put('/rest/users/update/:id',(request, response) => {
    users.update(request.params.id,request.body)
    response.send({message: 'User Updated'})
})
app.post('/rest/users/add', (request, response) =>{
    users.add(request.body)
    response.send({message: 'User Added'})
})
app.get('/rest/users',(request, response)=>{
    response.send(users.getUsers())
})
app.get('/rest/users/:id',(request, response)=>{
    response.send(users.getUser(request.params.id))
})
app.listen(port)
console.log('Server running http://localhost/')