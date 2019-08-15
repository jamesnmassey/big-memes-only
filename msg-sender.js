const request = require('request');
const constants = require('./constants');

function slackMsg(msg)
{
	constants.SLACK_RES.send(msg);
}

function slackMsgPost(msg)
{
	request.post(constants.SLACK_RESPONSE_URL, {
		json : msg
	}, (error, res, body) => {
		if (error) {
			console.error(error);
			return;
		}
	});
}

module.exports.slackMsg = function(msg) {
	return slackMsg(msg);
}