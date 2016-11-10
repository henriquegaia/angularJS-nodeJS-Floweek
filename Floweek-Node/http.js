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

app.get('/players', function(req, res){
	res.write(JSON.stringify(players));
	res.end();
});

app.get('/levels', function(req, res){
	res.write(JSON.stringify(levels));
	res.end();
});

var players = [
	{
		name: "Cristiano Ronaldo",
		active: true,
		c20: "100",
		c18: "400",
	},
	{
		name: "Messi",
		active: true,
		c20: "90",
		c18: "350",
	},
	{
		name: "Pelé",
		active: false,
		c20: "0",
		c18: "0",
		c17: "0",
		c16: "12",
		c15: "0",
		c14: "0",
		c12: "34",
		c10: "17",
		c9: "0",
		c1: "694",//757-12-34-17
	},
	{
		name: "Romário",
		active: false,
		c20: "50",
		c18: "20000",
	},
	{
		name: "Gerd Müller",
		active: false,
		c20: "50",
		c18: "20000",
	},
	{
		name: "Eusébio",
		active: false,
		c20: "50",
		c18: "20000",
	},
];

var levels = [
	{
		code: "c20",
		weight: 20,
		competitions: ["Champions League"],
	},
	{
		code: "c18",
		weight: 18,
		competitions: ["SA", "ENG"]
	},
	{
		code: "c17",
		weight: 17,
		competitions: ["Euro"],
	},
	{
		code: "c16",
		weight: 16,
		competitions: ["World Cup"]
	},
	{
		code: "c15",
		weight: 15,
		competitions: ["Europa League", "DE", "IT"],
	},
	{
		code: "c14",
		weight: 14,
		competitions: ["PT", "FR"]
	},
	{
		code: "c12",
		weight: 12,
		competitions: ["NL", "AR", "BR"]
	},
	{
		code: "c10",
		weight: 10,
		competitions: ["Copa America", "Copa Libertadores"]
	},
	{
		code: "c9",
		weight: 9,
		competitions: ["Africa Cup of Nations"]
	},
	{
		code: "c1",
		weight: 1,
		competitions: ["Other Official"]
	},	
];

