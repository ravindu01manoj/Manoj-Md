/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
Manoj.voicy.start = async(core) => {
	try {
		if(!core.Reply.audio) {
			return await core.send(string().download.needa)
		}

		var data = await core.download()
		fs.writeFileSync(data.buffer, './manoj1.mp3')
		mediasv('./manoj1.mp3').inputFormat('ogg').audioCodec('pcm_s16le').format('wav')
			.save('./manoj.wav')
			.on('end', async() => {
				const text = await audiototext('./manoj.wav')
				await core.send(string().voice.voi_text + '```' + text + '```')
				removefile('./manoj1.mp3')
			})
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
	if(data.type != 'audio') {
		return await core.send('*need audio*')
	}

	await core.mediasend('voice', data.buffer)
}