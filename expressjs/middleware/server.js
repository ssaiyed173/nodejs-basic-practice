const express = require('express')
const app = express()

app.use((request, response, next)=>{
	console.log(request.method+' '+ request.url)
	next()
})
app.use((request, response, next)=>{
	if(request.query.api_key == 123)
		next()
	else
		response.status(401).send({code:401,message: 'Not authorized! invalid api-key'})
})

app.get('/account',(request, response) => {
	response.send({account: 'Account'})
})
app.get('/transactions',(request, response,next) => {
	if(request.query.account_no)
		next()
	else
		response.status(401).send({code:401,message: 'Not authorized! Account no is mandatory'})
		
},(request, response) => {
	response.send({account_no:request.query.account_no,transactions: 'Transactions'})
})
app.get('/',(request, response) => {
	response.send('Hello World')
})

app.listen(80)