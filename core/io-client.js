const io = require('./io')

let isWritten = io.write('test.txt','Hello JS World')

io.read('test.txt')