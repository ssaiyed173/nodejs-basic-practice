const express = require('express')
const mongodb = require('mongodb')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const { response } = require('express')

const url = 'mongodb://localhost:27017'
const port = 80
let app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

mongodb.MongoClient.connect(url, (error, client) => {

    if(error)
        return process.exit(1)
    let db =client.db('mydb')
    app.get('/accounts', (req, res) => {
        db.collection('accounts')
        .find({})
        .toArray((error, accounts) => {
            if(error)
                return next(error)

            res.status(200).send(accounts)
        })
    })

    app.get('/accounts/:id', (req, res) => {
        db.collection('accounts')
        .find({_id: mongodb.ObjectID(req.params.id)})
        .toArray((error, account) => {
            if(error)
                return next(error)

            res.status(200).send(account)
        })
    })
    app.post('/accounts/add', (req, res) => {
        let newAccount = req.body
        db.collection('accounts')
        .insertOne(newAccount, (error, result) => {
            if(error)
                return next(error)
            
            res.status(204).send(result)
        })

    })
    app.put('/accounts/update/:id', (req, res) => {
        db.collection('accounts')
        .updateOne({_id : mongodb.ObjectID(req.params.id)}, {$set: req.body}, (error, result) => {
            if(error)
                return next(error)
            res.status(204).send(result)
        })
    })
    app.delete('/accounts/delete/:id', (req, res) => {
        db.collection('accounts')
        .deleteOne({_id: mongodb.ObjectID(req.params.id)}, (error, result)=> {
            if(error)
                next(error)
            res.status(204).send(result)
        })
    })
    app.use(errorhandler())
    app.listen(port)
    console.log('Server started on http://localhost/')
    console.log('Use below routes for different operations')
    console.log('for get all accounts(GET): http://localhost/accounts/')
    console.log('for get one account(GET): http://localhost/accounts/:id')
    console.log('for add one account(POST): http://localhost/accounts/add')
    console.log('for update one account(PUT): http://localhost/accounts/update/:id')
    console.log('for delete one account(DELETE): http://localhost/accounts/delete/:id')

})