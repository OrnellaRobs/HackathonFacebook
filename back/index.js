var app = require('express')();
var server = require('http').createServer(app)
var io = require('socket.io')(server)


io.sockets.on('connection', (socket) => {
	socket.on('seeker', (req) => {
		switch(req.category) {
			case 'call_helpers':
				//socket.emit('helper', req);
				socket.emit('seeker', 'hello');
				break;
			case 'cancel_request':
				//send all helpers that help is no longer needed
				break;
		}
	})

	socket.on('helper', (req) => {
		switch(req.category) {
			case 'helper_answer':
				if(req.answer == 'yep'){
					//signal other helpers that seeker found help
				} else {
					//remove helper from helper list
					//if there is no helpers in the helper list, send seeker that they are fucked
				}
				break;
		}
	});
});
