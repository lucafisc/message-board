
const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date()
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date()
	}
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.post('/new', (req, res, next) => {
	console.log("Got post request");
	console.log(req.body.messageText);
	messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
	res.redirect('/');
	// res.sendStatus(200); // OK
})

module.exports = router;