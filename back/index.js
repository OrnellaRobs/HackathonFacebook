var app = require('express')();
var server = require('http').createServer(app)
var io = require('socket.io')(server)

var helper_status = false;

app.get('/helper_call', (req, res) => {
	res.send({"status":helper_status});
})

app.get('/helper_ready', (req, res) => {
	helper_status = true;
	res.send('truc');
})

server.listen(3000, () => console.log('Example app listening on port 3000!'))
