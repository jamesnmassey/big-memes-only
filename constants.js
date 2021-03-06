const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'dbbc7ap8m';
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || '627314963991771';
const CLOUDINARY_API_SECRET =  process.env.CLOUDINARY_API_SECRET || 'w7DqQ2yNvswtgPVrqJ2AS3ElOVs'

const REDDIT_URL = 'https://www.reddit.com';
const REDDIT_DANK_MEMES_SUBREDDIT = '/r/dankmemes/';
const REDDIT_HOT = 'hot';
const REDDIT_LIMIT = 25;
const REDDIT_REQ_URL = `${REDDIT_URL}${REDDIT_DANK_MEMES_SUBREDDIT}${REDDIT_HOT}.json?limit=${REDDIT_LIMIT}`;

var SLACK_RES;
var SLACK_RESPONSE_URL;

const RESPONSE_TYPE_IN_CHANNEL = 'in_channel';
const RESPONSE_TYPE_EPHEMERAL = 'ephemeral';

const DANK_MEME = 'dank-meme'

module.exports.CLOUDINARY_CLOUD_NAME = CLOUDINARY_CLOUD_NAME;
module.exports.CLOUDINARY_API_KEY = CLOUDINARY_API_KEY;
module.exports.CLOUDINARY_API_SECRET = CLOUDINARY_API_SECRET;
module.exports.REDDIT_URL = REDDIT_URL;
module.exports.REDDIT_DANK_MEMES_SUBREDDIT = REDDIT_DANK_MEMES_SUBREDDIT;
module.exports.REDDIT_HOT = REDDIT_HOT;
module.exports.REDDIT_LIMIT = REDDIT_LIMIT;
module.exports.REDDIT_REQ_URL = REDDIT_REQ_URL
module.exports.SLACK_RES = SLACK_RES;
module.exports.SLACK_RESPONSE_URL = SLACK_RESPONSE_URL;
module.exports.DANK_MEME = DANK_MEME;
module.exports.RESPONSE_TYPE_IN_CHANNEL = RESPONSE_TYPE_IN_CHANNEL;
module.exports.RESPONSE_TYPE_EPHEMERAL = RESPONSE_TYPE_EPHEMERAL;
