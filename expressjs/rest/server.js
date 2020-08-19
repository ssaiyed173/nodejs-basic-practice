const express = require('express')
const bodyParser = require('body-parser')
const users = require('./users')
const validation = require('./validation')
const port = 80

const app = express()
app.use(bodyParser.json())

app.delete('/rest/users/delete/:id', (request, response) => {
    users.delete(request.params.id)
    response.send({message: 'User Deleted'})
})
app.put('/rest/users/update/:id',(request, response) => {
    user = request.body
    if(user.email && !validation.validateEmail(user.email)){
        message = {error : 'Email is invalid, Cant update user!'}
    }else{
        users.update(request.params.id,user)
        message = {message: 'User Updated.'}
    }
    response.send(message)
})
app.post('/rest/users/add', (request, response) =>{
    user = request.body
    if(!user.userName || !user.age || !user.email){
        message = {error: 'Some information is missing, Cant add user!'}
    }else if(!validation.validateEmail(user.email)){
        message = {error: 'Email is invalid, Cant add user!'}
    }else{
        users.add(user)
        message = {message: 'User Added'}
    }
    response.send(message)
})
app.get('/rest/users',(request, response)=>{
    response.send(users.getUsers())
})
app.get('/rest/users/:id',(request, response)=>{
    response.send(users.getUser(request.params.id))
})
app.listen(port)
console.log('Server running http://localhost/')