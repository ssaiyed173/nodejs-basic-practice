const https = require('https')
const url = 'https://raw.githubusercontent.com/ssaiyed173/nodejs-basic/master/user.json'

https.get(url, (response) => {

    let rowData = ''
    response.on('data', (chunk) => {
        rowData += chunk
    })
    response.on('end',()=> {
        user = JSON.parse(rowData)
        console.log(user)
    })
}).on('error',(error) => {
    console.error(error)
})