const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')

let csvFile = path.join(__dirname,'files','customers.csv')
csv().fromFile(csvFile).then((jsonObject) => {
    fs.writeFile(path.join(__dirname,'files','customers.json'),JSON.stringify(jsonObject),(error) => {
        if(error)
            return console.error(error)
        console.log('JSON file created')
    })
})