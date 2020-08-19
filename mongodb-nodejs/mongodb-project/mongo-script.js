const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


const insertDocuments = (db) => {
    var collection = db.collection('user')

    collection.insertMany([
        {name: 'Sufiyan',age:19, email: 'sufi@gmail.com'},
        {name: 'Mahir',age:19, email: 'mahir@gmail.com'}
    ], (error, result ) => {
        if(error)
            return process.exit(1)

        console.log('Inserted '+ result.result.n+ ' Documents in user Collection')
    })
}
const updateDocument = (db) => {
    var collection = db.collection('user')
    collection.updateOne({name : 'Shahnavaz'}, {$set: {name: 'Shahnavaz Saiyad'} }, (error, result) => {
        if(error)
            return process.exit(1)

        console.log(result.result.n + ' Documents Updated in user Collection')
    })
}
const deleteDocument = (db) => {
    var collection = db.collection('user')
    collection.deleteMany({age : {$lt: 20}}, (error, result) => {
        if(error)
            return process.exit(1)

        console.log(result.result.n + ' Documents Removed in user Collection')
    })
}
const findDocuments = (db) => {
    var collection = db.collection('user')

    collection.find({}).toArray((error, docs) => {
        if(error)
            return process.exit(1)
        console.log(docs.length+ ' Documents found.')
        console.log(JSON.stringify(docs))
    })
}
const url = 'mongodb://localhost:27017/'
MongoClient.connect(url, (err, client) => {
    if(err)
        return process.exit(1)

    console.log('Connected to the Mongodb Database')
    var db = client.db('mydb')
    insertDocuments(db)
    updateDocument(db)
    deleteDocument(db)
    findDocuments(db)
    client.close()
})