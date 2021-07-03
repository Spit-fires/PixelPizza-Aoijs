const dotenv = require("dotenv"), 
	{Bot} = require("aoi.js");

dotenv.config();

const client = new Bot({
	token: process.env.BOT_TOKEN,
	prefix: "!pp"
});

client.onMessage();
client.loadCommands("./commands/");