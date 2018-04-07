var app = require('express')();
var server = require('http').createServer(app)
var io = require('socket.io')(server)

app.get('/seeker', (req, res) => {
	res.sendFile(__dirname + '/seeker.html')
})

app.get('/helper', (req, res) => {
	res.sendFile(__dirname + '/helper.html')
})

var helpers = [
	{
		"id" : 0,
		"firstname" : "Léna",
		"lastname" : "Giacalone",
		"ETA" : "42 min",
		"photo" : "https://cdn.intra.42.fr/users/medium_lgiacalo.jpg"
	},
	{
		"id" : 4,
		"firstname" : "Victor",
		"lastname" : "Four",
		"ETA" : "42 min",
		"photo" : "https://cdn.intra.42.fr/users/medium_vfour.jpg"
	},
	{
		"id" : 2,
		"firstname" : "Martin",
		"lastname" : "Hammerchmidt",
		"ETA" : "42 min",
		"photo" : "https://cdn.intra.42.fr/users/medium_mhammerc.jpg"
	},
	{
		"id" : 3,
		"firstname" : "Ornella",
		"lastname" : "Razafinony Robinson",
		"ETA" : "42 min",
		"photo" : "https://cdn.intra.42.fr/users/medium_orazafin.jpg"
	}
]

var seekers = [
	{
		"id" : 1,
		"firstname" : "Lara",
		"lastname" : "Ramirez",
		"ETA" : "42 min",
		"photo" : "https://cdn.intra.42.fr/users/medium_lramirez.jpg"
	}
]


var available_helpers = []

var seeker_i = 0;
var helper_i = 0;

io.sockets.on('connection', (socket) => {
	console.log('a user connected')
	socket.on('whoami-seeker', () => {
		console.log('whoami-seeker');
		socket.emit('whoami-seeker', seekers[0]);
	});

	socket.on('whoami-helper', () => {
		helpers[helper_i]["socket"] = socket.id;
		socket.emit('whoami-helper', helpers[helper_i++]);
		helper_i = helper_i % helpers.length;
	});

	socket.on('seeker', (req) => {
		switch(req.category) {
			case 'list_helpers':
				socket.emit('seeker', helpers)
				break;
			case 'call_helpers':
				io.sockets.connected[helpers[0].socket].emit("helper", helpers[0]);
		}
	})
});

/*
req:
{
	"category": "call_helpers",
	"seeker": {
		"firstname" : "truc",
		"lastname" : "machin",
		"photo" : "https://cdn.intra.42.fr/users/medium_lramirez.jpg"
		"location": {}
	},
	"helpers" : [0,3],
	"problem":{
		"help_type" : "truc",
		"description": "my problem",
		"photo": base64encoded_photo,
	}
}
//request helpers
{
	"categoy": "seek_help",
	"seeker": {
		"firstname" : "Lara",
		"lastname" : "Ramirez",
		"photo" : "https://cdn.intra.42.fr/users/medium_lramirez.jpg"
		"location": {}
	},
	"problem":{
		"help_type" : "truc",
		"description": "my problem",
		"photo": base64encoded_photo,
	}
}

*/
server.listen(3000, () => console.log('Example app listening on port 3000!'))


/*
http:
/ : envoyer le html + le js react

websockets:
req:
{
	"category": "list_helpers"
	//"geoloc_seeker" : lon, lat
}
res:
{
	"category": "list_helpers",
	"helpers":[
		{
			"id": "id",
			"firstname" : "truc",
			"lastname" : "machin",
			"ETA" : "42 min",
			"photo" : base64encoded_photo,
		}
		//....
	]
}

//coté client on choisit les helpers
req:
{
	"category": "call_helpers",
	"seeker": {
		"id": "id",
		"firstname" : "truc",
		"lastname" : "machin",
		"ETA" : "42 min",
		"photo" : base64encoded_photo,
		"location": {
			"lon": lon,
			"lat": lat
		}
	},
	"helpers" : [id1, id2, id3],
	"problem":{
		"help_type" : "truc",
		"description": "my problem",
		"photo": base64encoded_photo,
	}
}
>>> requete vers helpers
res:
{
	"category": "call_helpers",
	"helper": {
		"id": "id",
		"firstname" : "truc",
		"lastname" : "machin",
		"ETA" : "42 min",
		"photo" : base64encoded_photo,
		"messenger_login": trucmachin,
		"location": {
			"lon": lon,
			"lat": lat
		}
	}
}


//requete vers helper
req:
{
	"categoy": "seek_help",
	"seeker": {
		"id": "id",
		"firstname" : "truc",
		"lastname" : "machin",
		"ETA" : "42 min",
		"photo" : base64encoded_photo,
		"location": {
			"lon": lon,
			"lat": lat
		}
	},
	"problem":{
		"help_type" : "truc",
		"description": "my problem",
		"photo": base64encoded_photo,
	}
}
res:
{
	"category": "seek_help",
	"accept": true,
	"helper": {
		"id": "id",
		"firstname" : "truc",
		"lastname" : "machin",
		"ETA" : "42 min",
		"photo" : base64encoded_photo,
		"messenger_login": trucmachin,
		"location": {
			"lon": lon,
			"lat": lat
		}
	}
}
*/
