/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
Manoj.ffmpeg.start = async(core) => {
	var data = await core.download()
	if(!data.buffer || data.type == 'sticker' || data.type == 'document') {
		return await core.send(string().ffmpeg.need)
	}

	if(data.type == 'audio') {
		fs.writeFileSync(data.buffer, './manoj1234.mp3')
		mediasv('./manoj1234.mp3')
			.audioFilters(core.input)
			.save('manoj.mp3')
			.on('error', err => {
				return
			})
			.on('end', async() => {
				await core.mediasend(data.type, './manoj.mp3')
				removefile('./manoj1234.mp3')
			})
	}

	if(data.type == 'video') {
		fs.writeFileSync(data.buffer, './manoj1234.mp4')
		mediasv('./manoj1234.mp4')
			.videoFilters(core.input)
			.format('mp4')
			.save('manoj.mp4')
			.on('error', err => {
				return
			})
			.on('end', async() => {
				await core.mediasend(data.type, './manoj.mp4', dataDb.caption.setup(core))
				removefile('./manoj1234.mp4')
			})
	}

	if(data.type == 'image') {
		fs.writeFileSync(data.buffer, './manoj1234.jpg')
		mediasv('./manoj1234.jpg')
			.videoFilters(core.input)
			.save('manoj.jpg')
			.on('error', err => {
				return
			})
			.on('end', async() => {
				await core.mediasend(data.type, './manoj.jpg', dataDb.caption.setup(core))
				removefile('./manoj1234.jpg')
			})
	}
}