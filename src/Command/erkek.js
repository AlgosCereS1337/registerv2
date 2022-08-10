const { dc, MessageEmbed, User } = require('discord.js');
const db = require('quick.db');
const Settings = require('../Settings/Config.json');

exports.beta = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.cache.has(Settings.Roles.Registerer)) return message.channel.send(new MessageEmbed().setAuthor("Yetersiz Yetki").setDescription(`**\`»\`** Bu komutu kullanabilmek için \`Admin\` veya \`Kayıt Sorumlusu\` yetkisine sahip olman gerekmekte.`).setColor(Settings.Colors.Red)).then(x => x.delete({ timeout: 6500 }));

const sıra = await db.fetch('case')
const reglog = message.guild.channels.cache.find(r => r.id === (Settings.Channels.RegisterLog))


user.roles.add(Settings.Roles.BoyRole1)
user.roles.remove(Settings.Roles.Unregister)
db.add(`sayı.${user.id}`, +1)
await db.push(`isimler.${user.id}`, {
    Registerer: message.author.id,
    Rol: Settings.Roles.BoyRole1
  });

  db.add(`${message.author.id}.toplam`, +1)
  db.add(`${message.author.id}.erkek`, +1)
  db.add('case', 1)

  let embed = new MessageEmbed()
  .setColor('BLUE')
  .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true}))
  .setDescription(`${user} Adlı kişi ${message.author} tarafından <@&${Settings.Roles.BoyRole1}> Rolü verilerek kayıt edildi.`)
message.channel.send(embed);

const log = new MessageEmbed()
.setAuthor(message.member.nickname, message.author.avatarURL())
.setColor('BLUE')
.setTitle("KAYIT [ERKEK]")
.setDescription(`• Yetkili: ${message.author} (\`${message.author.id}\`) \n • Kullanıcı: ${user}(\`${user.id}\`) \n • Verilen Roller: <@&${Settings.Roles.BoyRole1}>`)
await reglog.send(log)

    db.push(`isim.${user.id}`, {
        userID: user.id,
        role: `<@&${Settings.Roles.BoyRole1}>`,
        teyitciid: message.author.id,
        teyitcisim: message.author.username
    })
};

module.exports.config = { 
    name: 'erkek',  
    aliases: ['e','man']
};

module.exports.config = { 
  name: 'erkek',
  aliases: ['erkek', 'e', 'man']
};
