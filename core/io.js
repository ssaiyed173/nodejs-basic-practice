const fs = require('fs')
const path = require('path')

exports.write = (fileName,content) => {
    let file = path.join(__dirname,'..','resources',fileName)
    fs.writeFile(file,content, (error) =>{
        if(error)
            return console.error(error)
        console.log('Written')
    });
}

exports.read = (fileName) => {
    let file = path.join(__dirname,'..','resources',fileName)
    fs.readFile(file,{encoding : 'utf-8'},(error,data)=> {
        if(error)
            return console.error(error)
        console.log(data);
    });
}