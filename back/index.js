var app = require('express')();
var server = require('http').createServer(app)
var io = require('socket.io')(server)

var helper_status = false;
var help_needed = false;

app.get('/helper_call', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.send({"status":helper_status});
})

app.get('/helper_ready', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	helper_status = true;
	res.send('truc');
})

app.get('/help_needed', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.send({"status":help_needed});
})

app.get('/help_request', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	help_needed = true;
	res.send('truc');
})

server.listen(3000, () => console.log('Example app listening on port 3000!'))
