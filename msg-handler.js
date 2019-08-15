const request = require('request');
var cloudinary = require('cloudinary').v2;

const constants = require('./constants');
const msgBuilder = require('./msg-builder');
const msgSender = require('./msg-sender');

cloudinary.config({
	cloud_name: constants.CLOUDINARY_CLOUD_NAME,
	api_key: constants.CLOUDINARY_API_KEY,
	api_secret: constants.CLOUDINARY_API_SECRET
});

function noParams() {
	var msg = msgBuilder.noParamsMsg(constants.RESPONSE_TYPE_EPHEMERAL);
	msgSender.slackMsg(msg);
}

function noResults(req) {
	var msg = msgBuilder.noResultsMsg(req, constants.RESPONSE_TYPE_EPHEMERAL);
	msgSender.slackMsg(msg);
}

function bigMeme(req) {
	var tag = req.body.text.toLowerCase();
	cloudinary.search
		.expression('tags=' + tag)
		.sort_by('public_id','desc')
		.execute().then(result => {
			if (result.resources.length === 0) {
				noResults(req);
				return;
			} else {
				var meme = result.resources[getRandomInt(result.resources.length)];
				msgSender.slackMsg(msgBuilder.buildBigMemeSlackMsg(meme));
			}
	});
}

function dankMeme() {
	request.get(constants.REDDIT_REQ_URL, function (error, res, body) {
		if (error) {
			console.error(error);
			return;
		} else {
			var meme = JSON.parse(body).data.children[getRandomInt(constants.REDDIT_LIMIT)].data;
			msgSender.slackMsg(msgBuilder.buildDankMemeSlackMsg(meme));
		}
	});
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

module.exports.noParams = function() {
	return noParams();
}
module.exports.bigMeme = function(res, req) {
	return bigMeme(res, req);
}
module.exports.dankMeme = function() {
	return dankMeme();
}