var http = require('http')

// http://10.88.8:3000/users
// http://10.88.8:3000/orders

var server = http.createServer( (req , res) => {
	res.writeHead(200,{'Content-Type' : 'application/json'});
 if(req.url === '/user')
 {

res.end("{'name':'Ankur'}")
}
else if(req.url=== '/order');
{
	res.end("{'order Id':'1123'}")
}

})
server.listen(8000)