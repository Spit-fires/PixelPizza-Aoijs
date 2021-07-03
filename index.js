const dotenv = require("dotenv"), 
	{Bot} = require("aoi.js");

dotenv.config();

const client = new Bot({
	token: process.env.BOT_TOKEN,
	prefix: "!pp"
});

client.status({
	text: "pixel pizza testing",
	type: "PLAYING",
	time: 12
});
client.onMessage();
client.loadCommands("./commands/");