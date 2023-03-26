/*
Manoj Md Whatsapp Bot

website: https://ravindumanoj.ml
Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
var Api_url = 'https://api-ravindumanoj.ml/'

var Url_Regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
const { calAge, calculater, translate } = Ravindu
Manoj.del.start = async(core) => {
	if(!core.Reply) {
		return
	}

	if(!core.Reply_key.fromMe) {
		if(!await core.amAdmin()) {
			return
		}
	}

	if(!core.fromMe && !core.checkload(core.Reply_key)) {
		return await core.reply('*Do Not Try To Play With Artificial Intelligence...!*')
	}

	await core.delete({ key:core.Reply_key })
}

Manoj.react.start = async(core) => {
	if(!core.Reply) {
		return
	}

	await core.reaction(core.input, core.Reply_key)
}

Manoj.link.start = async(core) => {
	if(!core.input || !Url_Regex.test(core.input)) {
		return await core.reply(string().link.need)
	}

	var redar = urlTester(core.input)
	if(redar) {
		await activeCommand(redar, core)
		return
	}

	try {
		var dl = await core.send(string().link.up)
		var linkdata = await linkPreview(core.input)

		linkdata.fileName = linkdata.fileName ? linkdata.fileName : ('upload-from-url.' + (linkdata.ext || 'bin'))
		var FileName = randomName() + (linkdata.ext || '.bin')
		await core.delete(dl)
		await core.downloadUrl(core.input, FileName, async() => {
			if(linkdata.mime.cut('/')[0] == 'image') {
				return await core.mediasend('image', FileName, dataDb.caption.setup(core))
			}

			if(linkdata.mime.cut('/')[0] == 'video') {
				return await core.mediasend('video', FileName, dataDb.caption.setup(core))
			}

			await core.mediasend('document', FileName, linkdata.mime, {}, false, linkdata.fileName)
			return removefile(FileName)
		}, async() => {
			await core.reply(string().link.err)
			return removefile(FileName)
		})

	} catch(e) {
		console.log(e)
		return await core.reply(string().link.err)
	}
}

Manoj.url.start = async(core) => {
	var data = await core.download()
	if(data.type !== 'image' && data.type !== 'video') {
		return core.reply(string().url.need)
	}

	var filepath = './temp/urlaimg.' + (data.type === 'image' ? 'png' : 'mp4')
	fs.writeFileSync(filepath, data.buffer)
	var up = await core.send(string().url.dop)
	await core.reply(await TelegraPh(filepath))
	await core.delete(up)
	removefile(filepath)
}

Manoj.age.start = async(core) => {
	if(!core.text) {
		return await core.reply(string().age.need)
	}

	var data = calAge(core.text)
	if(!data.min || data.notdate) {
		return await core.reply(string().age.wrong)
	}

	if(data.future) {
		return await core.reply(string().age.future)
	}

	return await core.reply(string().age.msg.bind(data.age[0], data.age[1], data.age[2], data.months, data.daa, data.hours, data.min, data.sec, data.nbday))
}

Manoj.cal.start = async(core) => {
	var out = core.text ? await calculater(core.text) : false
	if(!out) {
		return await core.reply(string().cal.need)
	}

	return await core.reply(out)
}

Manoj.readmore.start = async(core) => {
	if(!core.text) {
		return await core.reply(string().readmore.need)
	}

	const text = core.text.cut('/')
	return await core.reply(text[0] + readmore + (text[1] || ''))
}

Manoj.trt.start = async(core) => {
	if(!core.Reply || !core.Reply.text) {
		return await core.reply(string().trt.need_r)
	}

	if(!core.input || !core.input.cut('/')[1]) {
		return await core.reply(string().trt.needlang)
	}

	var langs = core.input.cut('/')
	const from = searchlanguage(langs[0]).data1
	const to = searchlanguage(langs[1]).data1 || langs[1]
	try {
		var msg = await translate(core.Reply.text, { from, to })
		if(!msg) {
			throw new Error('false')
		}

		await core.reply(string().trt.done.bind(from, to, msg))
	} catch{
		await core.reply(string().trt.err)
	}
}

Manoj.screenshot.start = async(core) => {
	try {
		if(!core.input || !Url_Regex.test(core.input)) {
			return await core.reply(string().screenshot.need)
		}

		var url = 'https://api-ravindumanoj.ml/?code=screenshot&api=' + process.env.Ravindu_Manoj_Api + '&site=' + encodeURIComponent(core.input)

		return await core.mediasend('image', url, dataDb.caption.setup(core))
	} catch(e) {
		return await core.reply(string().screenshot.error)
	}
}

function urlTester(outurl) {
	if(outurl.have('play.google.com/store/apps')) {
		return 'apk'
	}

	if(outurl.have('www.baiscopelk.com')) {
		return 'sub'
	}

	if(/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(outurl)) {
		return 'insta'
	}

	if(outurl.have('www.mediafire.com')) {
		return 'mfire'
	}

	if(outurl.have('drive.google.com/file')) {
		return 'gdrive'
	}

	if(outurl.have('twitter.com')) {
		return 'twitter'
	}

	if(/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(outurl)) {
		return 'ytd'
	}

	if(outurl.have('tiktok.com')) {
		return 'tiktok'
	}

	if(outurl.have('github.com/')) {
		return 'gitdl'
	}

	return false
}
