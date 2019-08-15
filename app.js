const port = process.env.PORT || 3000;
const express = require('express');
var bodyParser = require('body-parser');

const constants = require('./constants');
const msgHandler = require('./msg-handler');

const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/slack/slash-commands/bmo', urlencodedParser, (req, res) => {
	constants.SLACK_RES = res;
	constants.SLACK_RESPONSE_URL = req.body.response_url;
	if (!req.body.text) {
		msgHandler.noParams();
		return;
	} else {
		if (req.body.text === constants.DANK_MEME) {
			msgHandler.dankMeme();
		} else {
			msgHandler.bigMeme(req);
		}
	}
});