/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const key = 'RavinduManoj'
const {
	cryptdata
} = Ravindu

Manoj.joke.start = async(core) => {
	var res, data, all, msg = ''
	try {
		if(!core.text) {
			res = await core.webdata(string().joke.joke.api)
		}

		if(core.text) {
			data = await core.webdata(string().joke.joke.api.replace(/random/g, 'search?query=' + core.text))
		}

		if(res) {
			msg += string().joke.joke.msg.bind(res.value.replace('Chuck Norris', core.my_name))
		} else {
			data.result.map(async joke => {
				if(joke?.value) {
					msg += string().joke.joke.msg.bind(joke.value.replace('Chuck Norris', core.my_name)) + '\n\n'
				}
			})
		}

		if(msg) {
			await core.reply(msg)
		}
	} catch{
		return await core.reply(string().joke.joke.err)
	}
}

Manoj.quote.start = async(core) => {
	const web = await core.webdata(string().joke.quote.api)
	if(web?.content) {
		return await core.reply(string().joke.quote.msg.bind(web.content, web.author))
	}

	return await core.reply(string().joke.quote.err)
}

Manoj.encrypt.start = async(core) => {
	if(!core.Reply.text || !core.input) {
		return await core.send(string().crypt.enneed)
	}

	var enc = await cryptdata(key, 'encrypt', core.input, core.Reply.text)
	await core.reply(enc)
}

Manoj.decrypt.start = async(core) => {
	if(!core.Reply.text || !core.input) {
		return await core.send(string().crypt.deneed)
	}

	var dnc = await cryptdata(key, 'decrypt', core.input, core.Reply.text)
	await core.reply(dnc)
}

Manoj.dict.start = async(core) => {
	if(!core.text) {
		return await core.send(string().dict.need)
	}

	await core.send(string().dict.gen)
	var res = await core.webdata(string().dict.api + core.text)
	var msg = string().dict.title;
	(res.data[0].meanings[0].definitions).map(async dictrs => {
		if(dictrs.definition && dictrs.example) {
			msg += string().dict.def + dictrs.definition + '\n' + string().dict.eg + dictrs.example + '\n\n'
		} else if(dictrs.definition) {
			msg += string().dict.def + dictrs.definition + '\n\n'
		}
	})
	await core.reply(msg)
}