/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const {
	Readimage
} = require('../store/manoj/')

/*
Manoj.ocr.start = async(core) => {
	var load = await core.download()
	if(load.type !== 'image') {
		return await core.send(string().download.needi)
	}

	await core.reply(string().ocr.geting)
	var language = core.input && searchlanguage(core.input).data2 ? searchlanguage(core.input).data2 : 'eng'
	try {
		var {
			data: {
				text
			}
		} = await Readimage.recognize(load.buffer, language)
		if(!text || text === '  ') {
			return await core.reply(string().ocr.err.bind(' Empty text'))
		}

		return await core.reply(string().ocr.data.bind(language, text))
	} catch(e) {
		return await core.reply(string().ocr.err.bind(e))
	}
}*/