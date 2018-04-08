var app = require('express')();
var server = require('http').createServer(app)
var io = require('socket.io')(server)

var helper_status = false;
var help_needed = false;
var description = "";

app.get('/helper_call', (req, res) => {
	help_needed = true;
	res.set('Access-Control-Allow-Origin', '*');
	help_needed = true;
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

app.get('/set_description', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	description = req.query.description
	res.send("truc");
})

app.get('/get_description', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.send(description);
})

server.listen(3000, () => console.log('Example app listening on port 3000!'))
