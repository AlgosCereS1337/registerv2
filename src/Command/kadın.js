const { settings } = require('cluster');
const { dc, MessageEmbed } = require('discord.js');
const db = require('quick.db');
const Main = require('../../src/Settings/Settings.json');
const Settings = require('../../src/Settings/Config.json');

exports.beta = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.cache.has(Settings.Roles.Registerer)) return message.channel.send(new MessageEmbed().setAuthor("Yetersiz Yetki").setDescription(`**\`»\`** Bu komutu kullanabilmek için \`Admin\` veya \`Kayıt Sorumlusu\` yetkisine sahip olman gerekmekte.`).setColor(Settings.Colors.Red)).then(x => x.delete({ timeout: 6500 }));

  const sıra = await db.fetch('case')
  const reglog = message.guild.channels.cache.find(r => r.id === (Settings.Channels.RegisterLog))



user.roles.add(Settings.Roles.GirlRole1)
user.roles.remove(Settings.Roles.Unregister)

db.add(`sayı.${user.id}`, +1)
await db.push(`isimler.${user.id}`, {
  Registerer: message.author.id,
  Rol: Settings.Roles.GirlRole1
})

db.add(`${message.author.id}.toplam`, +1)
db.add(`${message.author.id}.kadın`, +1)
db.add('case', 1)

let embed = new MessageEmbed()
  .setColor('BLUE')
  .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true}))
  .setDescription(`${user} Adlı kişi ${message.author} tarafından <@&${Settings.Roles.GirlRole1}> Rolü verilerek kayıt edildi.`)
message.channel.send(embed);

const log = new MessageEmbed()
  .setAuthor(message.member.nickname, message.author.avatarURL())
  .setColor("#f06bc9")
  .setTitle("KAYIT [KADIN]")
  .setDescription(`• Yetkili: ${message.author} (\`${message.author.id}\`) \n • Kullanıcı: ${user}(\`${user.id}\`) \n • Verilen Roller: <@&${Settings.Roles.GirlRole1}>, <@&${Settings.Roles.GirlRole2}>`)
await reglog.send(log)
};

module.exports.config = { 
  name: 'kadın',
  aliases: ['kadın', 'k', 'woman']
};
