/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
module.exports = {
	add: {
		command: [ 'add', 'ගන්න' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.add.desc,
		react: '✅'
	},
	age: {
		command: [ 'age' ],
		type: type_bot,
		category: 'main',
		desc: string().age.desc,
		react: '🤔'
	},
	alive: {
		command: [ 'alive' ],
		type: type_bot,
		category: 'main',
		desc: string().alive.desc,
		react: '🙋‍♂️'
	},
	antispam: {
		command: [ 'antispam' ],
		type: 'dual',
		category: 'profile',
		react: '😑'
	},
	antivo: {
		command: [ 'antivo' ],
		desc: string().viweOnce.desc,
		category: 'main',
		type: type_bot,
		react: '🤫'
	},
	apk: {
		command: [ 'apk' ],
		type: type_bot,
		category: 'download',
		desc: string().apk.desc,
		help: string().apk.used,
		react: '⬇️'
	},
	apks: {
		command: [ 'playstore' ],
		type: type_bot,
		category: 'download',
		desc: string().apks.desc,
		help: string().apks.used,
		react: '🔎'
	},
	attpA: {
		command: [ 'attpA' ],
		type: type_bot,
		category: 'sticker',
		desc: string().attp.attpB.desc,
		help: 'attpA example',
		react: '🎆'
	},
	attpB: {
		command: [ 'attpB' ],
		type: type_bot,
		category: 'sticker',
		desc: string().attp.attpB.desc,
		help: string().attp.attpB.used,
		react: '🎇'
	},
	attpC: {
		command: [ 'attpC' ],
		type: type_bot,
		category: 'sticker',
		desc: string().attp.attpB.desc,
		help: string().attp.attpC.used,
		react: '🏞️'
	},
	attpD: {
		command: [ 'attpD' ],
		type: type_bot,
		category: 'sticker',
		desc: string().attp.attpB.desc,
		help: 'attpD example',
		react: '🏖️'
	},
	banchat: {
		command: [ 'banchat' ],
		type: 'private',
		category: 'profile',
		desc: string().chat_settings.banchat_desc,
		react: '👑'
	},
	block: {
		command: [ 'block' ],
		type: 'private',
		category: 'profile',
		desc: string().own.block.desc,
		react: '🔐'
	},
	boom: {
		command: [ 'boom' ],
		type: 'private',
		category: 'profile',
		desc: string().boom.desc,
		help: string().boom.help,
		react: '🧲'
	},
	cal: {
		command: [ 'cal' ],
		type: type_bot,
		category: 'main',
		desc: string().web.speed_desc,
		react: '🤔'
	},
	change: {
		command: [ 'change' ],
		type: 'private',
		category: 'profile',
		desc: string().set.desc,
		react: '📝'
	},
	cmd: {
		command: [ 'cmd', 'menu', 'help', 'list', 'මෙනු', 'ලිස්ට්', 'උදව්', 'කමාන්ඩ්' ],
		type: type_bot,
		category: 'non',
		react: '📁'
	},
	comm: {
		command: [ 'comm' ],
		type: 'private',
		category: 'profile',
		desc: string().own.comm.desc,
		help: string().own.comm.help,
		react: '🖇️'
	},
	decrypt: {
		command: [ 'decrypt' ],
		type: type_bot,
		category: 'main',
		desc: string().crypt.dedesc,
		react: '⛓️'
	},
	del: {
		command: [ 'del' ],
		type: type_bot,
		category: 'profile',
		react: '🧽'
	},
	demote: {
		command: [ 'demote' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.demote.desc,
		react: '🤫'
	},
	dice: {
		command: [ 'dice' ],
		type: type_bot,
		category: 'game',
		desc: string().game.dice.desc,
		react: '️‍🎲'
	},
	dict: {
		command: [ 'dict' ],
		type: type_bot,
		category: 'main',
		desc: string().dict.desc,
		react: '🕵️‍♂️'
	},
	diff: {
		command: [ 'diff' ],
		type: 'private',
		category: 'profile',
		desc: string().own.diff.desc,
		help: string().own.diff.help,
		react: '🎎'
	},
	dp: {
		command: [ 'dp', 'ඩීපි' ],
		type: 'private',
		category: 'profile',
		desc: string().own.dp.desc,
		react: '🌇'
	},
	emojimix: {
		command: [ 'emojimix' ],
		type: type_bot,
		category: 'sticker',
		desc: string().attp.emojimix.desc,
		help: 'emojimix 😍💖',
		react: '🤝'
	},
	encrypt: {
		command: [ 'encrypt' ],
		type: type_bot,
		category: 'main',
		desc: string().crypt.endesc,
		react: '🗿'
	},
	fancy: {
		command: [ 'fancy' ],
		type: type_bot,
		category: 'logo',
		desc: string().logo.fancy.desc,
		help: string().logo.fancy.help,
		react: '🪞'
	},
	fb: {
		command: [ 'fb', 'facebook' ],
		type: type_bot,
		category: 'download',
		desc: string().fb.desc,
		react: '⬇️'
	},
	ffmpeg: {
		command: [ 'ffmpeg' ],
		type: type_bot,
		category: 'main',
		desc: string().ffmpeg.desc,
		react: '⬇️'
	},
	gdrive: {
		command: [ 'gdrive' ],
		type: type_bot,
		category: 'download',
		desc: string().gdrive.desc,
		react: '⬇️'
	},
	gimg: {
		command: [ 'img', 'image' ],
		type: type_bot,
		category: 'download',
		desc: string().gimg.desc,
		react: '🔎'
	},
	gitdl: {
		command: [ 'gitclone', 'gitdl' ],
		type: type_bot,
		category: 'download',
		desc: string().gitdl.desc,
		react: '⬇️'
	},
	goodbyejid: {
		command: [ 'goodbyejid' ],
		type: 'admin',
		category: 'admin',
		desc: string().chat_settings.jid_set_desc.bind('GoodByeMessageGroups'),
		react: '👑'
	},
	gpdesc: {
		command: [ 'gpdesc', 'ගෲප්ඩිස්' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.gpdesc.desc,
		react: '🖨️'
	},
	gpdp: {
		command: [ 'gpdp', 'ගෲප්ඩීපි' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.gpdp.desc,
		react: '📸'
	},
	gpsub: {
		command: [ 'gpsub', 'ගෲප්සබ්' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.gpsub.desc,
		react: '🖊️'
	},
	info: {
		command: [ 'info' ],
		type: 'private',
		category: 'main',
		desc: string().info.desc,
		react: '📝'
	},
	insta: {
		command: [ 'instagram', 'igdl' ],
		type: type_bot,
		category: 'download',
		desc: string().insta.desc,
		react: '⬇️'
	},
	install: {
		command: [ 'install' ],
		type: 'private',
		category: 'profile',
		react: '⬆️'
	},
	instastory: {
		command: [ 'instastory', 'igstory' ],
		type: type_bot,
		category: 'download',
		desc: string().instastory.desc,
		react: '🚻'
	},
	invite: {
		command: [ 'invite', 'ගෲප්ලින්ක්' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.invite.desc,
		react: '🌐'
	},
	ip: {
		command: [ 'ip' ],
		desc: string().news.ip.desc,
		category: 'main',
		type: type_bot,
		react: '🌍'
	},
	jail: {
		command: [ 'jail' ],
		type: type_bot,
		category: 'sticker',
		desc: string().sticker.desc,
		react: '🏰'
	},
	jid: {
		command: [ 'jid' ],
		type: 'private',
		category: 'main',
		desc: string().info.jid.desc,
		react: '🧭'
	},
	join: {
		command: [ 'join' ],
		type: 'private',
		category: 'profile',
		desc: string().own.join.desc,
		react: '✅'
	},
	joke: {
		command: [ 'joke' ],
		type: type_bot,
		category: 'main',
		desc: string().joke.joke.desc,
		react: '🤪'
	},
	kick: {
		command: [ 'kick', 'ඩෝං' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.kick.desc,
		help: string().admin.kick.help,
		react: '👋'
	},
	left: {
		command: [ 'left' ],
		type: 'private',
		category: 'profile',
		desc: string().own.left.desc,
		react: '🙏'
	},
	link: {
		command: [ 'link' ],
		type: type_bot,
		category: 'download',
		desc: string().link.desc,
		react: '⬇️'
	},
	lock: {
		command: [ 'lock', 'ලොක්' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.lock.desc,
		react: '🔒'
	},
	log: {
		command: [ 'tolog' ],
		type: 'private',
		category: 'profile',
		desc: string().log.desc,
		react: '📝'
	},
	logout: {
		command: [ 'logout'],
		type: 'private',
		category: 'non',
		react: '🦁'
	},
	logoA: {
		command: [ 'logoA' ],
		type: type_bot,
		category: 'logo',
		desc: string().logo.logoA.desc,
		help: string().logo.logoA.used,
		react: '🌃'
	},
	logoB: {
		command: [ 'logoB' ],
		type: type_bot,
		category: 'logo',
		desc: string().logo.logoA.desc,
		help: string().logo.logoB.used,
		react: '🗼'
	},
	logoC: {
		command: [ 'logoC' ],
		type: type_bot,
		category: 'logo',
		desc: string().logo.logoA.desc,
		help: 'logoC example',
		react: '🏙️'
	},
	mfire: {
		command: [ 'mediafire', 'mfire' ],
		type: type_bot,
		category: 'download',
		desc: string().mfire.desc,
		react: '⬇️'
	},
	movie: {
		command: [ 'movie' ],
		type: type_bot,
		category: 'main',
		desc: string().news.film.desc,
		react: '🔎'
	},
	mp3a: {
		command: [ 'mp3' ],
		type: type_bot,
		category: 'audio',
		desc: string().converter.mp4audio_desc,
		react: '🎶'
	},
	mute: {
		command: [ 'mute' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.mute.desc,
		react: '🤫'
	},
	mycmd: {
		command: [ 'mycmd' ],
		type: 'private',
		category: 'profile',
		react: '🤗'
	},
	neko: {
		command: [ 'neko' ],
		type: type_bot,
		category: 'main',
		desc: string().nekobin.desc,
		react: '📝'
	},
	news: {
		command: [ 'news' ],
		type: type_bot,
		category: 'main',
		desc: string().news.news.desc,
		react: '📝'
	},
	notes: {
		command: [ 'notes' ],
		type: type_bot,
		category: 'main',
		desc: string().notes.desc,
		react: '🖋️'
	},
	novel: {
		command: [ 'novel' ],
		type: type_bot,
		category: 'download',
		desc: string().novel.desc,
		react: '📚'
	},
	ocr: {
		command: [ 'ocr' ],
		type: type_bot,
		category: 'main',
		desc: string().ocr.desc,
		react: '🔎'
	},
	passed: {
		command: [ 'passed' ],
		type: type_bot,
		category: 'sticker',
		desc: string().sticker.desc,
		react: '💍'
	},
	pdf: {
		command: [ 'pdf', 'page', 'topdf' ],
		type: type_bot,
		category: 'download',
		desc: string().pdf.desc,
		react: '📑'
	},
	ph: {
		command: [ 'ph' ],
		type: 'private',
		category: 'non'
	},
	photo: {
		command: [ 'photo' ],
		type: type_bot,
		category: 'image',
		desc: string().converter.sticker_desc,
		react: '🌉'
	},
	ping: {
		command: [ 'ping' ],
		type: 'private',
		category: 'profile',
		desc: string().web.ping_desc
	},
	png: {
		command: [ 'png' ],
		type: type_bot,
		category: 'logo',
		desc: string().logo.png.desc,
		help: string().logo.png.help,
		react: '🌠'
	},
	poll: {
		command: [ 'poll' ],
		type: type_bot,
		category: 'main',
		react: '🌛'
	},
	promote: {
		command: [ 'promote' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.promote.desc,
		react: '💂'
	},
	quote: {
		command: [ 'quote' ],
		type: type_bot,
		category: 'main',
		desc: string().joke.quote.desc,
		react: '🤓'
	},
	rate: {
		command: [ 'rate' ],
		type: 'public',
		category: 'main',
		desc: string().rate.desc,
		react: '😊'
	},
	react: {
		command: [ 'react' ],
		type: 'private',
		category: 'profile'
	},
	readmore: {
		command: [ 'readmore' ],
		type: type_bot,
		category: 'main',
		desc: string().readmore.desc,
		react: '🎊'
	},
	remove: {
		command: [ 'remove' ],
		type: 'private',
		category: 'profile',
		desc: string().chat_settings.remove_desc,
		react: '👑'
	},
	removebg: {
		command: [ 'rbg' ],
		type: type_bot,
		category: 'main',
		desc: string().removebg.desc,
		react: '⛲'
	},
	report: {
		command: [ 'report' ],
		type: 'dual',
		category: 'main',
		desc: string().report.desc,
		react: '🕵️'
	},
	revoke: {
		command: [ 'revoke', 'රිවෝක්' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.revoke.desc,
		react: '🔖'
	},
	rgb: {
		command: [ 'rgb' ],
		type: type_bot,
		category: 'sticker',
		desc: string().attp.rgb_desc,
		help: 'rgb example',
		react: '🌈'
	},
	rmstickcmd: {
		command: [ 'rmstickcmd' ],
		type: 'private',
		category: 'profile',
		desc: string().stick_cmd.rem_desc,
		react: '👑'
	},
	scam: {
		command: [ 'scam' ],
		type: 'private',
		category: 'profile',
		desc: string().scam.desc,
		react: '🙈'
	},
	scan: {
		command: [ 'scan' ],
		type: type_bot,
		category: 'main',
		desc: string().tag.scan,
		react: '🔎'
	},
	set: {
		command: [ 'set' ],
		type: 'private',
		category: 'profile',
		desc: string().set.desc,
		react: '👑'
	},
	setabout: {
		command: [ 'aboutset' ],
		type: 'private',
		category: 'profile',
		desc: string().own.about.desc,
		react: '✅'
	},
	shells: {
		command: [ 'shells' ],
		type: type_bot,
		category: 'game',
		desc: string().game.shells.desc,
		react: '️‍🐚'
	},
	short: {
		command: [ 'short' ],
		type: type_bot,
		category: 'main',
		desc: string().web.tiny_desc,
		react: '🖌️'
	},
	show: {
		command: [ 'show' ],
		type: type_bot,
		category: 'main',
		desc: string().news.show.desc,
		react: '🔎'
	},
	shutdown: {
		command: [ 'shutdown', 'ශට්ඩවුන්' ],
		type: 'private',
		category: 'profile',
		desc: string().start.shutdown.desc,
		react: '⛔'
	},
	song: {
		command: [ 'song', 'සින්දු' ],
		type: type_bot,
		category: 'download',
		desc: string().youtube.song.desc,
		react: '🎶'
	},
	screenshot: {
		command: [ 'screenshot', 'ss' ],
		type: type_bot,
		category: 'download',
		desc: string().screenshot.desc,
		react: '📸'
	},
	start: {
		command: [ 'start', 'ස්ටාට්' ],
		type: 'private',
		category: 'profile',
		desc: string().start.start.desc,
		react: '✅'
	},
	stickcmd: {
		command: [ 'stickcmd' ],
		type: 'private',
		category: 'profile',
		desc: string().stick_cmd.desc,
		react: '👑'
	},
	sticker: {
		command: [ 'sticker', 'ස්ටිකර්', 'stikar' ],
		type: type_bot,
		category: 'sticker',
		desc: string().sticker.desc,
		help: string().sticker.help,
		react: '☄️'
	},
	stickget: {
		command: [ 'stickget' ],
		type: type_bot,
		category: 'sticker',
		desc: string().sticker.get_desc,
		help: string().sticker.get_help,
		react: '🥷'
	},
	sub: {
		command: [ 'sub' ],
		type: type_bot,
		category: 'download',
		desc: string().bcope.desc,
		react: '🗒️'
	},
	superchat: {
		command: [ 'superchat' ],
		type: 'private',
		category: 'profile',
		desc: string().chat_settings.superchat_desc,
		react: '👑'
	},
	superuser: {
		command: [ 'superuser' ],
		type: 'private',
		category: 'profile',
		desc: string().chat_settings.superuser_desc,
		react: '👑'
	},
	tag: {
		command: [ 'tag' ],
		type: 'private',
		category: 'profile',
		react: '🪝'
	},
	tagadmin: {
		command: [ 'tagadmin' ],
		type: 'dual',
		category: 'main',
		desc: string().tag.admin_desc,
		react: '👑'
	},
	tiktok: {
		command: [ 'tiktok' ],
		type: type_bot,
		category: 'download',
		desc: string().tiktok.desc,
		react: '⬇️'
	},
	tiny: {
		command: [ 'tiny' ],
		type: type_bot,
		category: 'main',
		desc: string().web.tiny_desc,
		react: '🌎'
	},
	tovoice: {
		command: [ 'tovoice' ],
		type: type_bot,
		category: 'audio',
		desc: string().voice.tovoice_desc,
		react: '🔊'
	},
	triggered: {
		command: [ 'triggered' ],
		type: type_bot,
		category: 'sticker',
		desc: string().sticker.desc,
		react: '👨‍🍼'
	},
	trt: {
		command: [ 'translate', 'trt' ],
		type: type_bot,
		category: 'main',
		desc: string().trt.desc,
		help: string().trt.used,
		react: '🪄'
	},
	truecaller: {
		command: [ 'truecaller' ],
		type: type_bot,
		category: 'download',
		desc: string().truecaller.desc,
		react: '💾'
	},
	twitter: {
		command: [ 'twitter', 'tweet' ],
		type: type_bot,
		category: 'download',
		desc: string().twitter.desc,
		react: '⬇️'
	},
	unblock: {
		command: [ 'unblock' ],
		type: 'private',
		category: 'profile',
		desc: string().own.unblock.desc,
		react: '🔓'
	},
	unit: {
		command: [ 'unit' ],
		type: type_bot,
		category: 'main',
		desc: string().unit.unit_desc,
		help: string().unit.unit_use,
		react: '🎛️'
	},
	unlock: {
		command: [ 'unlock', 'අන්ලොක්' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.unlock.desc,
		react: '🔓'
	},
	unmute: {
		command: [ 'unmute' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.unmute.desc,
		react: '🔓'
	},
	update: {
		command: [ 'update' ],
		type: 'private',
		category: 'profile',
		react: '🤖'
	},
	updatenow: {
		command: [ 'update now' ],
		type: 'private',
		category: 'profile',
		react: '🤖'
	},
	updemotejid: {
		command: [ 'updemotejid' ],
		type: 'admin',
		category: 'admin',
		desc: string().chat_settings.jid_set_desc.bind('DemoteUpdateGroups'),
		react: '👑'
	},
	upeditjid: {
		command: [ 'upeditjid' ],
		type: 'admin',
		category: 'admin',
		desc: string().chat_settings.jid_set_desc.bind('EditUpdateGroups'),
		react: '👑'
	},
	upmutejid: {
		command: [ 'upmutejid' ],
		type: 'admin',
		category: 'admin',
		desc: string().chat_settings.jid_set_desc.bind('MuteUpdateGroups'),
		react: '👑'
	},
	uppromotejid: {
		command: [ 'uppromotejid' ],
		type: 'admin',
		category: 'admin',
		desc: string().chat_settings.jid_set_desc.bind('PromoteUpdateGroups'),
		react: '👑'
	},
	upsubjid: {
		command: [ 'upsubjid' ],
		type: 'admin',
		category: 'admin',
		desc: string().chat_settings.jid_set_desc.bind('SubjectUpdateMessageGroups'),
		react: '👑'
	},
	url: {
		command: [ 'tourl', 'url' ],
		type: type_bot,
		category: 'download',
		desc: string().url.desc,
		react: '🌐'
	},
	video: {
		command: [ 'video', 'වීඩියෝ' ],
		type: type_bot,
		category: 'download',
		desc: string().youtube.video.desc,
		react: '🎥'
	},
	voicy: {
		command: [ 'voicy' ],
		desc: string().voice.voi_desc,
		category: 'audio',
		type: type_bot,
		react: '📢'
	},
	vsticker: {
		command: [ 'vsticker' ],
		desc: string().converter.animstick,
		category: 'video',
		type: type_bot,
		react: '🌅'
	},
	wame: {
		command: [ 'wame' ],
		type: type_bot,
		category: 'main',
		desc: string().info.wame.desc,
		react: '🌐'
	},
	wasted: {
		command: [ 'wasted' ],
		type: type_bot,
		category: 'sticker',
		desc: string().sticker.desc,
		react: '😵'
	},
	weather: {
		command: [ 'weather' ],
		desc: string().weather.desc,
		category: 'main',
		type: type_bot,
		react: '🌥️'
	},
	welcomejid: {
		command: [ 'welcomejid' ],
		type: 'admin',
		category: 'admin',
		desc: string().chat_settings.jid_set_desc.bind('WelcomeMessageGroups'),
		react: '👑'
	},
	xo: {
		command: [ 'xo', 'tictactoe' ],
		type: type_bot,
		category: 'main',
		desc: 'XO game',
		react: '❌'
	},
	ytd: {
		command: [ 'ytd' ],
		type: type_bot,
		category: 'download',
		desc: string().youtube.video.desc,
		react: '🎞️'
	},
	yts: {
		command: [ 'yts' ],
		type: type_bot,
		category: 'download',
		desc: string().youtube.yts.desc,
		react: '🔎'
	},
	z_note: {
		withAll: true,
		type: 'dual'
	}
}