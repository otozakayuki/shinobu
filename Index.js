const Discord = require('discord.js');
const client = new Discord.Client();
const random = require('something-random-on-discord').Random;
const Canvas = require('canvas');
const { prefix, token } = require('./config.json');
const fs = require('fs');
const { CanvasSenpai } = require('canvas-senpai');
const canva = new CanvasSenpai();
const { config } = require('dotenv');
const akaneko = require('akaneko');

const actvs = [
    'D4DJ Goovy Mix JP',

    'ZZzz',

    '命に嫌われる',

    'PUBG',

    'Haiya',

    '看今天谁有直播的'
];

client.on('ready', () => {
    client.user.setActivity(
        actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)]
    );

    setInterval(() => {
        client.user.setActivity(
            actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)]
        );
    }, 60000);
});

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(
        ch => ch.name === '⭐欢迎和再见'
    );
    if (!channel) return;

    let data = await canva.welcome(member, {
        link: 'https://w.wallhaven.cc/full/3z/wallhaven-3z32j3.jpg',
        blur: false
    });

    const attachment = new Discord.MessageAttachment(data, 'welcome-image.png');

    channel.send(`歡迎你${member},来到狗蛙群！很高兴认识你！汪呱！`);
});
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;

    let data = await canva.welcome(member, {
        link: 'https://w.wallhaven.cc/full/3z/wallhaven-3z32j3.jpg',
        blur: false
    });

    const attachment = new Discord.MessageAttachment(data, 'welcome-image.png');

    channel.send(`Hey ${member},welcome to Justin Chuen's Server!`);
});

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(
        ch => ch.name === 'welcome！欢迎！'
    );
    if (!channel) return;

    let data = await canva.welcome(member, {
        link: 'https://w.wallhaven.cc/full/3z/wallhaven-3z32j3.jpg',
        blur: false
    });

    const attachment = new Discord.MessageAttachment(data, 'welcome-image.png');

    channel.send(
        `歡迎你 ${member},來到魔王城Devil Castle ,请去看 <#806196781847150627>\n Welcome ${member}, to the devil Castle, please go to <#806196781847150627> see`,
        attachment
    );
});
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '欢迎！');
    if (!channel) return;

    let data = await canva.welcome(member, {
        link: 'https://w.wallhaven.cc/full/3z/wallhaven-3z32j3.jpg',
        blur: false
    });

    const attachment = new Discord.MessageAttachment(data, 'welcome-image.png');

    channel.send(
        `歡迎你 ${member},來到動漫後宮,请去看<#852020103679311884>\n Welcome ${member} to the 動漫後宮, please go to <#852020103679311884> see`,
        attachment
    );
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', message => {
    if (message.content === `${prefix}ayane`) {
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Ayane nakiri百鬼あやね')
            .setImage(
                'https://cdn.discordapp.com/attachments/787623194142965820/849892249882198046/Screenshot_2021-02-18-15-02-01_1.jpg'
            );
        message.channel.send(embed);
    }
    if (message.content === `${prefix}命に嫌われる`) {
        message.reply(
            '僕らは命に嫌われている。,幸福の意味すらわからず、生まれた環境ばかり憎んで,簡単に過去ばかり呪う。'
        );
    }
    if (message.content === `${prefix}cute girl`) {
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(
                'https://cdn.discordapp.com/attachments/787623194142965820/850257961258844190/FB_IMG_1618675297823.jpg'
            );

        message.channel.send(embed);
    }
    if (message.content === `${prefix}hina`) {
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Hina')
            .setImage(
                'https://i.pinimg.com/originals/a7/53/5b/a7535bd81b0299dfaf11357adfefd0d4.gif'
            );

        message.channel.send(embed);
    }
    if (message.content === `${prefix}hololive`) {
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('hololive')
            .setImage(
                'https://cdn.discordapp.com/attachments/828891648046006283/850797032243200011/IMG_20210602_093331.jpg'
            );

        message.channel.send(embed);
    }
    if (message.content === `${prefix}yostar`) {
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('(-_-)')
            .setImage(
                'https://cdn.discordapp.com/attachments/828891648046006283/850902876615737364/Screenshot_20210606-084918.jpg'
            );
        message.channel.send(embed);
    }
    if (message.content === `${prefix}server`) {
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage('https://w.wallhaven.cc/full/6o/wallhaven-6ol8q7.png')
            .setTitle(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
        message.channel.send(embed);
    }
    if (message.content === `${prefix}help`) {
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('我希望你們會多用指令')
            .setDescription('現在有奇奇怪怪指令')
            .setThumbnail(
                'https://cdn.discordapp.com/attachments/828891648046006283/851850339127918592/IMG_20210602_222929.jpg'
            )
            .addField(
                'image照片',
                'ayane,anime,cute girl,yostar,smug,\nwaifu,hololive,neko,meme,pat,kiss'
            )
            .addField('GIF', 'hina,punch,slap,hug,cry')
            .addField('chat文字', '命に嫌われる,invite')
            .addField(
                '這個機器人的重要連結',
                ':link:[官方服務器](https://discord.gg/QsD52U8Dag)|[動漫服務器](https://discord.gg/hk3y2FRhv7)|[邀請機器人](https://discord.com/api/oauth2/authorize?client_id=844477151314313236&permissions=8&scope=bot)'
            )
            .setImage('https://w.wallhaven.cc/full/0p/wallhaven-0pj1gj.jpg')
            .setFooter(
                'otozka yuki',
                'https://cdn.discordapp.com/attachments/816909563261091852/821246270295113728/15.png'
            );
        message.channel.send(embed);
    }
    if (message.content === `${prefix}invite`) {
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .addField(
                '邀請機器人',
                ':link:[官方服務器](https://discord.gg/QsD52U8Dag)|[動漫服務器](https://discord.gg/hk3y2FRhv7)|[邀請機器人](https://discord.com/api/oauth2/authorize?client_id=844477151314313236&permissions=8&scope=bot)'
            )
            .setFooter('製作者:音坂ゆき(otozka yuki)')
            .setTimestamp();
        message.channel.send(embed);
    }
    if (message.content === `${prefix}anime`) {
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('anime name:jujutsu kaisen')
            .setAuthor('Character name:satoru gojo')
            .setImage(
                'https://media.comicbook.com/2021/03/jujutsu-kaisen-satoru-gojo-anime-1259613-1280x0.jpeg'
            );
        message.channel.send(embed);
    }
});

client.on('message', message => {
    if (message.content === `${prefix}anime`) {
        message.react('806897785752387599');
    }
    if (message.content === `${prefix}emoji`) {
        const reactionEmoji = message.guild.emojis.cache.find(
            emoji => emoji.name === 'Miku03'
        );
        message.react(reactionEmoji);
    }
});
client.on('message', async message => {
    if (message.content === `${prefix}meme`) {
        let data = await random.getMeme();
        message.channel.send(data);
    }
    if (message.content === `${prefix}kiss`) {
        let data = await random.getAnimeImgURL('kiss');
        message.channel.send(data);
    }
    if (message.content === `${prefix}waifu`) {
        let data = await random.getAnimeImgURL('waifu');
        message.channel.send(data);
    }
    if (message.content === `${prefix}cry`) {
        let data = await random.getAnimeImgURL('cry');
        message.channel.send(data);
    }
    if (message.content === `${prefix}pat`) {
        let data = await random.getAnimeImgURL('pat');
        message.channel.send(data);
    }
    if (message.content === `${prefix}punch`) {
        let data = await random.getAnimeImgURL('punch');
        message.channel.send(data);
    }
    if (message.content === `${prefix}slap`) {
        let data = await random.getAnimeImgURL('slap');
        message.channel.send(data);
    }
    if (message.content === `${prefix}smug`) {
        let data = await random.getAnimeImgURL('smug');
        message.channel.send(data);
    }

    if (message.content === `${prefix}neko`) {
        let data = await random.getNeko();
        message.channel.send(data);
    }
    if (message.content === `${prefix}hug`) {
        let data = await random.getAnimeImgURL('hug');
        message.channel.send(data);
    }
});

client.login(token);
