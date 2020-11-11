const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (!message.guild) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ban"){
        const user = message.mentions.users.first();
        if (user){
            const member = message.guild.member(user);
            if (member){
                member
                    .kick()
                    .then(() => {
                        const embed = new Discord.MessageEmbed()
                            .setColor("#FF0000")
                            .setTitle("Banned Member")
                            .setDescription(`Banned ${user.tag}`);
                        message.reply(embed);
                    })
                    .catch(error => {
                        const embed = new Discord.MessageEmbed()
                            .setColor("#FF0000")
                            .setTitle("Error")
                            .setDescription(`${error}`);
                        message.reply(embed);
                    });
            }
            else{
                const embed = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("Error")
                    .setDescription("User not in Guild");
                message.reply(embed);
            }
        }
        else{
            const embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Error")
                .setDescription("Incorrect Command Ussage");
            message.reply(embed);
        }
    }

    else if (command === "kick"){
        const user = message.mentions.users.first();
        if (user){
            const member = message.guild.member(user);
            if (member){
                member
                    .kick()
                    .then(() => {
                        const embed = new Discord.MessageEmbed()
                            .setColor("#FF0000")
                            .setTitle("Kicked Member")
                            .setDescription(`Kicked ${user.tag}`);
                        message.reply(embed);
                    })
                    .catch(error => {
                        const embed = new Discord.MessageEmbed()
                            .setColor("#FF0000")
                            .setTitle("Error")
                            .setDescription(`${error}`);
                        message.reply(embed);
                    });
            }
            else{
                const embed = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle("Error")
                    .setDescription("User not in Guild");
                message.reply(embed);
            }
        }
        else{
            const embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Error")
                .setDescription("Incorrect Command Ussage");
            message.reply(embed);
        }
    }
});

client.login(token);