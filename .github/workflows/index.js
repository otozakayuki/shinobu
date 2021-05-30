const Discord = require('discord.js');

const client = new Discord.Client();

const { prefix, token } = require('./config.json');

const actvs = [

	'D4DJ Goovy Mix JP',

	'Yuki你在哪裡',

	'命に嫌われる',

	'zzZZ',

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

	console.log(message.content);

});

client.on('message', message => {

	if (message.content === `${prefix}covid-19`) {

		message.channel.send('Haiyaa');

	}

	if (message.content === `${prefix}命に嫌われる`) {

		message.reply(

			'僕らは命に嫌われている。,幸福の意味すらわからず、生まれた環境ばかり憎んで,簡単に過去ばかり呪う。'

		);

	}

	if (message.content === `${prefix}server`) {

		let embed = new Discord.MessageEmbed()

			.setColor('RANDOM')

			.setImage('https://w.wallhaven.cc/full/6o/wallhaven-6ol8q7.png')

			.setTitle(

				`Server name: ${message.guild.name}\nTotal members: ${

					message.guild.memberCount

				}`

			);

		message.channel.send(embed);

	}

	if (message.content === `${prefix}help`) {

		let embed = new Discord.MessageEmbed()

			.setColor('RANDOM')

			.setTitle('魔王城的discord連結邀請')

			.setAuthor(

				'我只是個新手程序員，但是不是很厲害的',

				'https://cdn.discordapp.com/attachments/816909563261091852/821246270295113728/15.png'

			)

			.setDescription('現在有的指令多種類')

			.setURL('https://discord.gg/QsD52U8Dag')

			.setThumbnail('https://w.wallhaven.cc/full/eo/wallhaven-eo7p9o.jpg')

			.addField('指令列表', 's!Hi，s!hi，s!anime', true)

			.setImage('https://w.wallhaven.cc/full/4o/wallhaven-4oyl99.jpg')

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

	if (message.content === '${prefix}emoji') {

		const reactionEmoji = message.guild.emojis.cache.find(

			emoji => emoji.name === 'Miku03'

		);

		message.react(reactionEmoji);

	}

});

client.login(TOKEN);
