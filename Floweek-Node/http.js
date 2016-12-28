var router = require('./router.js');

var port = 3413;

var app = router(port);

if(app){
	console.log('server running on port ' + port);
}

app.interceptor(function(req, res, next){
	res.setHeader('Access-Control-Allow-Headers','Content-Type');
	res.setHeader('Access-Control-Allow-Origin','*');
	next();
});

app.interceptor(function(req, res, next){
	res.setHeader('Content-Type', 'application/json;charset=UTF-8');
	next();
});

app.get('/topScorers', function(req, res){
	res.write(JSON.stringify(topScorers));
	res.end();
});

app.get('/bestPlayers', function(req, res){
	res.write(JSON.stringify(bestPlayers));
	res.end();
});

app.get('/levels', function(req, res){
	res.write(JSON.stringify(levels));
	res.end();
});

app.post('/bestPlayerVote', function (req, res){
	var selectedPlayer = req.body;
	console.log(selectedPlayer);
	res.end();
});

// --------------------------------------------------------------
// Levels -------------------------------------------------------
// --------------------------------------------------------------

function createLevel(code, weight, competitions){
	
	var level = {
		code: code,
		weight: weight,
		competitions: competitions,
	};
	
	return level;
}

var levels = [
	createLevel('c_0', 20, ["Champions League"]),
	createLevel('c_1', 18, ["SA", "ENG"]),
	createLevel('c_2', 17, ["Euro"]),
	createLevel('c_3', 16, ["World Cup"]),
	createLevel('c_4', 15, ["Europa League", "DE", "IT"]),
	createLevel('c_5', 14, ["PT", "FR"]),
	createLevel('c_6', 12, ["NL", "AR", "BR"]),
	createLevel('c_7', 10, ["Copa America", "Copa Libertadores"]),
	createLevel('c_8', 9,  ["Africa Cup of Nations"]),
	createLevel('c_9', 1,  ["Other Official"]),
];

// --------------------------------------------------------------
// Best Players -------------------------------------------------
// --------------------------------------------------------------

function createBestPlayer(name, count){
	
	var player = {
		name	: name,
		count	: count
	};

	return player;
};

var bestPlayers = [
	createBestPlayer("Cristiano Ronaldo",0),
	createBestPlayer("Messi",0),
	createBestPlayer("Pelé",0),
	createBestPlayer("Maradonna",0),
	createBestPlayer("Zidane",0)
];

// --------------------------------------------------------------
// Top Scorers --------------------------------------------------
// --------------------------------------------------------------

function createTopScorer(name, active, goals){

	var player = {
		name 	: name,
		active 	: active,
		c_0: goals.c_0,
		c_1: goals.c_1,
		c_2: goals.c_2,
		c_3: goals.c_3,
		c_4: goals.c_4,
		c_5: goals.c_5,
		c_6: goals.c_6,
		c_7: goals.c_7,
		c_8: goals.c_8,
		c_9: goals.c_9,
	};
	
	return player;
};

var topScorers = [
	createTopScorer('Cristiano Ronaldo', true, 
	{
		c_0: "100", 
		c_1: "400"
	}),
	createTopScorer('Messi', true, 
	{
		c_0: "10", 
		c_1: "40"
	}),
	createTopScorer('Pelé', false, 
	{
		c_3: "12",
		c_6: "34",
		c_7: "17",
		c_9: "694",
	}),
	/*	
	
	createTopScorer('Romário', false, 
	{

	}),
	createTopScorer('Gerd Müller', false, 
	{

	}),
	createTopScorer('Eusébio', false, 
	{

	}),
	*/
];










