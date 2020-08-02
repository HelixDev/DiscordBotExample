const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
	console.log("READY");
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'with your heart <3',
            type: "PLAYING",
        }
    });
});
//The code above makes the bot go online. if you dont put this in, your bot will not work. (the client.user.setPresence is optional, it only makes the bot look cooler :D )

client.on('message', message => {
	if(message.content === `${config.prefix}ping`) {
		message.channel.send("Pong!")
	}})
	//the first command! this command will reply when you say [prefix]ping, you can make awesome things with commands like these!
client.login(config.token);
//this needs to be on the bottom, or else your bot will not work