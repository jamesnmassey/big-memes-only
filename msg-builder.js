const constants = require('./constants');

function buildBigMemeSlackMsg(meme) {
	var msg = {
		response_type: constants.RESPONSE_TYPE_IN_CHANNEL,
		attachments: [
			{
				fallback: meme.filename + '.' + meme.format,
				color: "#36a14f",
				title: meme.filename + '.' + meme.format,
				image_url: meme.url
			}
		]
	}
	return msg;
}

function buildDankMemeSlackMsg(meme) {
	var msg = {
		response_type: constants.RESPONSE_TYPE_IN_CHANNEL,
		attachments: [
			{
				fallback: meme.title,
				color: "#36a14f",
				title: meme.title,
				title_link: `${constants.REDDIT_URL}${meme.permalink}`,
				image_url: meme.url,
				thumb_url: meme.thumbnail
			}
		]
	}
	return msg;
}

function noParamsMsg(responseType)
{
	return buildSimpleMsg('Typing /bmo [search term] will look up your search term in the Big Meme Directory', responseType);
}

function noResultsMsg(req, responseType)
{
	return buildSimpleMsg(`No memes found for search term: ${req.body.text}`, responseType);
}

function buildSimpleMsg(text, responseType)
{
	var msg = {
		"response_type": responseType,
		"text": text
	}
	return msg;
}

module.exports.buildBigMemeSlackMsg = function(meme) {
	return buildBigMemeSlackMsg(meme);
}
module.exports.buildDankMemeSlackMsg = function(meme) {
	return buildDankMemeSlackMsg(meme);
}
module.exports.noParamsMsg = function(responseType) {
	return noParamsMsg(responseType);
}
module.exports.noResultsMsg = function(req, responseType) {
	return noResultsMsg(req, responseType);
}