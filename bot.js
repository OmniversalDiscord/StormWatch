const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
  const user = newPresence.user;
    if (user.id === '256213318060998666') {
      if (oldPresence.status != 'online' && newPresence.status === 'online') {
            const channel = client.channels.cache.get('913633377448509481');
            channel.send(`https://imgur.com/a/wlmieyo`);
        }
        else if (oldPresence.status != 'idle' && newPresence.status === 'idle') {
            const channel = client.channels.cache.get('913633377448509481');
            channel.send(`https://tenor.com/view/stormidle-gif-27216955`);
        }
        else if (oldPresence.status != 'dnd' && newPresence.status === 'dnd') {
            const channel = client.channels.cache.get('913633377448509481');
            channel.send(`https://imgur.com/a/Bp6FLPA`);
        }
        else if (oldPresence.status != 'offline' && newPresence.status === 'offline') {
            const channel = client.channels.cache.get('913633377448509481');
            channel.send(`https://tenor.com/view/stormwavz-omniversal-discord-gif-22696441`);
        }
    }
});

require('dotenv').config()
client.login(process.env.DISCORD_TOKEN);
