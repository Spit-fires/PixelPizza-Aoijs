module.exports = {
	name: "vote",
	code: `
		$apiMessage[;
			{newEmbed:
				{color:#0000ff}
				{title:Vote}
				{description:
					[top.gg](https://top.gg/bot/$clientID/vote)
					[discordbotlist.com](https://discordbotlist.com/bots/pixel-pizza/upvote)
				}
			};
			{actionRow:top.gg,2,5,https\\://top.gg/bot/$clientID/vote:discordbotlist.com,2,5,https\\://discordbotlist.com/bots/pixel-pizza/upvote}
		]
	`
}