/*
Manoj Md Whatsapp Bot

website: https://ravindumanoj.ml
Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
var { ravindumanoj_api_key } = require('../Details.js')
var Api_url = 'https://api-ravindumanoj.ml/'
Manoj.voicy.start = async(core) => {
	try {
		if(!core.Reply.audio) {
			return await core.send(string().download.needa)
		}

		var data = await core.download()
		var text = await VoiceToText(data.buffer)
		await core.send(string().voice.voi_text + '```' + text + '```')
	} catch(err) {
		return core.send(string().voice.voi_err)
	}
}

Manoj.tovoice.start = async(core) => {
	if(!core.Reply.audio) {
		return await core.send(string().download.needa)
	}

	await core.reply(string().editor.cnvt)
	var data = await core.download()

	await core.mediasend('voice', data.buffer)
}