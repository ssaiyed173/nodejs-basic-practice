const http = require('http')
const fs = require('fs')
const path = require('path')
const uuid = require('uuid')

const downloadPage = ( (url) => {
    http.get(url, (response) => {
        let webPageCode = ''
        response.on('data',(chunk) => {
            webPageCode += chunk
        })
        response.on('end',() => {
            let folder = uuid.v4()
            fs.mkdirSync(folder)
            let file = path.join(__dirname,folder,'file.html')
            fs.writeFile(file,webPageCode,(error) => {
                if(error)
                    return console.error(error.message)

                console.log(`page is downloaded at ${file}`)
            })
        })
    })
})

downloadPage(process.argv[2])