const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

const actvs = [
	'D4DJ Goovy Mix JP',

	'Yuki你在哪裡',

	'命に嫌われる',

	'PUBG',

	'Haiya'
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
			.setTitle(
				`Server name: ${message.guild.name}\nTotal members: ${
					message.guild.memberCount
				} `
			);

		message.channel.send(embed);
	}

	if (message.content === `${prefix}help`) {
		let embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setAuthor(
				'我只是個新手程序員，但是不是很厲害的',
				'https://cdn.discordapp.com/attachments/816909563261091852/821246270295113728/15.png'
			)
			.setDescription('現在有的指令多種類command')
			.setThumbnail('https://w.wallhaven.cc/full/eo/wallhaven-eo7p9o.jpg')
			.addField('image照片', 'ayane,cute girl,anime,yostar,hololive')
			.addField('GIF', 'hina')
			.addField('chat文字', '命に嫌われる')
			.addField(
				'這個機器人的重要連結',
				':link:[官方服務器](https://discord.gg/QsD52U8Dag)|[邀請機器人](https://discord.com/api/oauth2/authorize?client_id=844477151314313236&permissions=8&scope=bot)'
			)
			.setImage('https://w.wallhaven.cc/full/o3/wallhaven-o353qp.png')
			.setFooter(
				'otozka yuki',
				'https://cdn.discordapp.com/attachments/816909563261091852/821246270295113728/15.png'
			);
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

client.login(token);
