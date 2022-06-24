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
		desc: string().admin.add.desc
	},
	age: {
		command: [ 'age' ],
		type: type_bot,
		category: 'main',
		desc: string().age.desc
	},
	alive: {
		command: [ 'alive' ],
		type: type_bot,
		category: 'main',
		desc: string().alive.desc
	},
	antispam: {
		command: [ 'antispam' ],
		type: 'dual',
		category: 'profile'
	},
	antivo: {
		command: [ 'antivo' ],
		desc: string().viweOnce.desc,
		category: 'main',
		type: type_bot
	},
	apk: {
		command: [ 'apk' ],
		type: type_bot,
		category: 'download',
		desc: string().apk.desc,
		help: string().apk.used
	},
	apks: {
		command: [ 'playstore' ],
		type: type_bot,
		category: 'download',
		desc: string().apks.desc,
		help: string().apks.used
	},
	attpA: {
		command: [ 'attpA' ],
		type: type_bot,
		category: 'sticker',
		desc: string().attp.attpB.desc,
		help: 'attpA example'
	},
	attpB: {
		command: [ 'attpB' ],
		type: type_bot,
		category: 'sticker',
		desc: string().attp.attpB.desc,
		help: string().attp.attpB.used
	},
	attpC: {
		command: [ 'attpC' ],
		type: type_bot,
		category: 'sticker',
		desc: string().attp.attpB.desc,
		help: string().attp.attpC.used
	},
	attpD: {
		command: [ 'attpD' ],
		type: type_bot,
		category: 'sticker',
		desc: string().attp.attpB.desc,
		help: 'attpD example'
	},
	block: {
		command: [ 'block' ],
		type: 'private',
		category: 'profile',
		desc: string().own.block.desc
	},
	boom: {
		command: [ 'boom' ],
		type: 'private',
		category: 'profile',
		desc: string().boom.desc,
		help: string().boom.help
	},
	cal: {
		command: [ 'cal' ],
		type: type_bot,
		category: 'main',
		desc: string().web.speed_desc
	},
	change: {
		command: [ 'change' ],
		type: 'private',
		category: 'profile',
		desc: string().set.desc
	},
	cmd: {
		command: [ 'cmd', 'menu', 'help', 'list', 'මෙනු', 'ලිස්ට්', 'උදව්', 'කමාන්ඩ්' ],
		type: type_bot,
		category: 'non'
	},
	comm: {
		command: [ 'comm' ],
		type: 'private',
		category: 'profile',
		desc: string().own.comm.desc,
		help: string().own.comm.help
	},
	decrypt: {
		command: [ 'decrypt' ],
		type: type_bot,
		category: 'main',
		desc: string().crypt.dedesc
	},
	del: {
		command: [ 'del' ],
		type: type_bot,
		category: 'profile',
		react: '🍻'
	},
	demote: {
		command: [ 'demote' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.demote.desc
	},
	dict: {
		command: [ 'dict' ],
		type: type_bot,
		category: 'main',
		desc: string().dict.desc
	},
	diff: {
		command: [ 'diff' ],
		type: 'private',
		category: 'profile',
		desc: string().own.diff.desc,
		help: string().own.diff.help
	},
	dp: {
		command: [ 'dp', 'ඩීපි' ],
		type: 'private',
		category: 'profile',
		desc: string().own.dp.desc
	},
	emojimix: {
		command: [ 'emojimix' ],
		type: type_bot,
		category: 'sticker',
		desc: string().attp.emojimix.desc,
		help: 'emojimix 😍💖'
	},
	encrypt: {
		command: [ 'encrypt' ],
		type: type_bot,
		category: 'main',
		desc: string().crypt.endesc
	},
	fancy: {
		command: [ 'fancy' ],
		type: type_bot,
		category: 'logo',
		desc: string().logo.fancy.desc,
		help: string().logo.fancy.help
	},
	fb: {
		command: [ 'fb', 'facebook' ],
		type: type_bot,
		category: 'download',
		desc: string().fb.desc
	},
	ffmpeg: {
		command: [ 'ffmpeg' ],
		type: type_bot,
		category: 'main',
		desc: string().ffmpeg.desc
	},
	gdrive: {
		command: [ 'gdrive' ],
		type: type_bot,
		category: 'download',
		desc: string().gdrive.desc
	},
	gimg: {
		command: [ 'img', 'image' ],
		type: type_bot,
		category: 'download',
		desc: string().gimg.desc
	},
	gitdl: {
		command: [ 'gitclone', 'gitdl' ],
		type: type_bot,
		category: 'download',
		desc: string().gitdl.desc
	},
	gpdesc: {
		command: [ 'gpdesc', 'ගෲප්ඩිස්' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.gpdesc.desc
	},
	gpdp: {
		command: [ 'gpdp', 'ගෲප්ඩීපි' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.gpdp.desc
	},
	gpsub: {
		command: [ 'gpsub', 'ගෲප්සබ්' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.gpsub.desc
	},
	info: {
		command: [ 'info' ],
		type: 'private',
		category: 'main',
		desc: string().info.desc
	},
	insta: {
		command: [ 'instagram', 'igdl' ],
		type: type_bot,
		category: 'download',
		desc: string().insta.desc
	},
	install: {
		command: [ 'install' ],
		type: 'private',
		category: 'profile'
	},
	instastory: {
		command: [ 'instastory', 'igstory' ],
		type: type_bot,
		category: 'download',
		desc: string().instastory.desc
	},
	invite: {
		command: [ 'invite', 'ගෲප්ලින්ක්' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.invite.desc
	},
	ip: {
		command: [ 'ip' ],
		desc: string().news.ip.desc,
		category: 'main',
		type: type_bot
	},
	jail: {
		command: [ 'jail' ],
		type: type_bot,
		category: 'sticker',
		desc: string().sticker.desc
	},
	jid: {
		command: [ 'jid' ],
		type: 'private',
		category: 'main',
		desc: string().info.jid.desc
	},
	join: {
		command: [ 'join' ],
		type: 'private',
		category: 'profile',
		desc: string().own.join.desc
	},
	joke: {
		command: [ 'joke' ],
		type: type_bot,
		category: 'main',
		desc: string().joke.joke.desc
	},
	kick: {
		command: [ 'kick', 'ඩෝං' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.kick.desc,
		help: string().admin.kick.help
	},
	left: {
		command: [ 'left' ],
		type: 'private',
		category: 'profile',
		desc: string().own.left.desc
	},
	link: {
		command: [ 'link' ],
		type: type_bot,
		category: 'download',
		desc: string().link.desc
	},
	lock: {
		command: [ 'lock', 'ලොක්' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.lock.desc
	},
	log: {
		command: [ 'tolog' ],
		type: 'private',
		category: 'profile',
		desc: string().log.desc,
		onlyGrpSew: true
	},
	logoA: {
		command: [ 'logoA' ],
		type: type_bot,
		category: 'logo',
		desc: string().logo.logoA.desc,
		help: string().logo.logoA.used
	},
	logoB: {
		command: [ 'logoB' ],
		type: type_bot,
		category: 'logo',
		desc: string().logo.logoA.desc,
		help: string().logo.logoB.used
	},
	logoC: {
		command: [ 'logoC' ],
		type: type_bot,
		category: 'logo',
		desc: string().logo.logoA.desc,
		help: 'logoC example'
	},
	mfire: {
		command: [ 'mediafire', 'mfire' ],
		type: type_bot,
		category: 'download',
		desc: string().mfire.desc
	},
	movie: {
		command: [ 'movie' ],
		type: type_bot,
		category: 'main',
		desc: string().news.film.desc
	},
	mp3a: {
		command: [ 'mp3' ],
		type: type_bot,
		category: 'audio',
		desc: string().converter.mp4audio_desc
	},
	mute: {
		command: [ 'mute' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.mute.desc
	},
	mycmd: {
		command: [ 'mycmd' ],
		type: 'private',
		category: 'profile'
	},
	neko: {
		command: [ 'neko' ],
		type: type_bot,
		category: 'main',
		desc: string().nekobin.desc
	},
	news: {
		command: [ 'news' ],
		type: type_bot,
		category: 'main',
		desc: string().news.news.desc
	},
	notes: {
		command: [ 'notes' ],
		type: type_bot,
		category: 'main',
		desc: string().notes.desc
	},
	novel: {
		command: [ 'novel' ],
		type: type_bot,
		category: 'download',
		desc: string().novel.desc
	},
	ocr: {
		command: [ 'ocr' ],
		type: type_bot,
		category: 'main',
		desc: string().ocr.desc
	},
	passed: {
		command: [ 'passed' ],
		type: type_bot,
		category: 'sticker',
		desc: string().sticker.desc
	},
	pdf: {
		command: [ 'pdf', 'page', 'topdf' ],
		type: type_bot,
		category: 'download',
		desc: string().pdf.desc
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
		desc: string().converter.sticker_desc
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
		help: string().logo.png.help
	},
	poll: {
		command: [ 'poll' ],
		type: type_bot,
		category: 'main'
	},
	promote: {
		command: [ 'promote' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.promote.desc
	},
	quote: {
		command: [ 'quote' ],
		type: type_bot,
		category: 'main',
		desc: string().joke.quote.desc
	},
	rate: {
		command: [ 'rate' ],
		type: 'public',
		category: 'main',
		desc: string().rate.desc
	},
	react: {
		command: [ 'react' ],
		type: 'private',
		category: 'profile',
		react: '🍻'
	},
	remove: {
		command: [ 'remove' ],
		type: 'private',
		category: 'profile'
	},
	removebg: {
		command: [ 'removebg' ],
		type: type_bot,
		category: 'main',
		desc: string().removebg.desc
	},
	report: {
		command: [ 'report' ],
		type: 'dual',
		category: 'main',
		desc: string().report.desc
	},
	revoke: {
		command: [ 'revoke', 'රිවෝක්' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.revoke.desc
	},
	scam: {
		command: [ 'scam' ],
		type: 'private',
		category: 'profile',
		desc: string().scam.desc
	},
	scan: {
		command: [ 'scan' ],
		type: type_bot,
		category: 'main',
		desc: string().tag.scan
	},
	set: {
		command: [ 'set' ],
		type: 'private',
		category: 'profile',
		desc: string().set.desc
	},
	setabout: {
		command: [ 'aboutset' ],
		type: 'private',
		category: 'profile',
		desc: string().own.about.desc
	},
	short: {
		command: [ 'short' ],
		type: type_bot,
		category: 'main',
		desc: string().web.tiny_desc
	},
	show: {
		command: [ 'show' ],
		type: type_bot,
		category: 'main',
		desc: string().news.show.desc
	},
	shutdown: {
		command: [ 'shutdown', 'ශට්ඩවුන්' ],
		type: 'private',
		category: 'profile',
		desc: string().start.shutdown.desc
	},
	song: {
		command: [ 'song', 'සින්දු' ],
		type: type_bot,
		category: 'download',
		desc: string().youtube.song.desc
	},
	speedtest: {
		command: [ 'speedtest' ],
		type: 'private',
		category: 'profile',
		desc: string().web.speed_desc,
		help: string().web.speed_help
	},
	start: {
		command: [ 'start', 'ස්ටාට්' ],
		type: 'private',
		category: 'profile',
		desc: string().start.start.desc
	},
	sticker: {
		command: [ 'sticker', 'ස්ටිකර්', 'stikar' ],
		type: type_bot,
		category: 'sticker',
		desc: string().sticker.desc,
		help: string().sticker.help,
		react: '😍'
	},
	stickget: {
		command: [ 'stickget' ],
		type: type_bot,
		category: 'sticker',
		desc: string().sticker.get_desc,
		help: string().sticker.get_help
	},
	sub: {
		command: [ 'sub' ],
		type: type_bot,
		category: 'download',
		desc: string().bcope.desc
	},
	tag: {
		command: [ 'tag' ],
		type: 'private',
		category: 'profile'
	},
	tagadmin: {
		command: [ 'tagadmin' ],
		type: 'dual',
		category: 'main',
		desc: string().tag.admin_desc
	},
	tiktok: {
		command: [ 'tiktok' ],
		type: type_bot,
		category: 'download',
		desc: string().tiktok.desc
	},
	tiny: {
		command: [ 'tiny' ],
		type: type_bot,
		category: 'main',
		desc: string().web.tiny_desc
	},
	tovoice: {
		command: [ 'tovoice' ],
		type: type_bot,
		category: 'audio',
		desc: string().voice.tovoice_desc
	},
	triggered: {
		command: [ 'triggered' ],
		type: type_bot,
		category: 'sticker',
		desc: string().sticker.desc
	},
	truecaller: {
		command: [ 'truecaller' ],
		type: type_bot,
		category: 'download',
		desc: string().truecaller.desc
	},
	twitter: {
		command: [ 'twitter', 'tweet' ],
		type: type_bot,
		category: 'download',
		desc: string().twitter.desc
	},
	unblock: {
		command: [ 'unblock' ],
		type: 'private',
		category: 'profile',
		desc: string().own.unblock.desc
	},
	unit: {
		command: [ 'unit' ],
		type: type_bot,
		category: 'main',
		desc: string().unit.unit_desc,
		help: string().unit.unit_use
	},
	unlock: {
		command: [ 'unlock', 'අන්ලොක්' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.unlock.desc
	},
	unmute: {
		command: [ 'unmute' ],
		type: 'admin',
		category: 'admin',
		desc: string().admin.unmute.desc
	},
	update: {
		command: [ 'update' ],
		type: 'private',
		category: 'profile'
	},
	updatenow: {
		command: [ 'update now' ],
		type: 'private',
		category: 'profile'
	},
	url: {
		command: [ 'tourl', 'url' ],
		type: type_bot,
		category: 'download',
		desc: string().url.desc
	},
	video: {
		command: [ 'video', 'වීඩියෝ' ],
		type: type_bot,
		category: 'download',
		desc: string().youtube.video.desc
	},
	voicy: {
		command: [ 'voicy' ],
		desc: string().voice.voi_desc,
		category: 'audio',
		type: type_bot
	},
	vsticker: {
		command: [ 'vsticker' ],
		desc: string().converter.animstick,
		category: 'video',
		type: type_bot
	},
	wame: {
		command: [ 'wame' ],
		type: type_bot,
		category: 'main',
		desc: string().info.wame.desc
	},
	wasted: {
		command: [ 'wasted' ],
		type: type_bot,
		category: 'sticker',
		desc: string().sticker.desc
	},
	weather: {
		command: [ 'weather' ],
		desc: string().weather.desc,
		category: 'main',
		type: type_bot
	},
	xo: {
		command: [ 'xo', 'tictactoe' ],
		type: type_bot,
		category: 'main',
		desc: 'XO game'
	},
	ytd: {
		command: [ 'ytd' ],
		type: type_bot,
		category: 'download',
		desc: string().youtube.video.desc
	},
	yts: {
		command: [ 'yts' ],
		type: type_bot,
		category: 'download',
		desc: string().youtube.yts.desc
	}
}