/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const {
	webdl
} = require('../store/manoj/')

var ffmpeg = require('fluent-ffmpeg')

Manoj.mp3a.start = async(core) => {
	try {
		var data = await core.download()
		if(data.type !== 'video') {
			return await core.send(string().converter.mp4audio_need)
		}

		var up = await core.send(string().converter.mp4audio)
		var datas = await core.bufferType(data)
		datas.ext = datas.ext.replace('.', '')
		var ext = datas.ext === 'bin' ? 'mp4' : datas.ext
		fs.writeFileSync('./manoj.' + ext, data.buffer)

		ffmpeg('./manoj.' + ext)
			.format('mp3')
			.save('./manoj.mp3')
			.on('error', err => {
				return
			})
			.on('end', async() => {
				await core.mediasend('audio', './manoj.mp3')
				await core.delete(up)
				removefile('./manoj.' + ext)
				removefile('./manoj.mp3')
			})
	} catch(e) {
		console.log(e)
	}
}

Manoj.photo.start = async(core) => {
	var data = await core.download()
	if(data.type !== 'sticker' || core.Reply.isAnimated) {
		return await core.send(string().converter.sticker_need_n)
	}

	var up = await core.send(string().converter.sticker)
	fs.writeFileSync('./manoj.webp', data.buffer)
	mediasv('./manoj.webp')
		.fromFormat('webp_pipe')
		.save('./manoj.jpg')
		.on('error', err => {
			return
		})
		.on('end', async() => {
			await core.mediasend('image', './manoj.jpg', dataDb.caption.setup(core))
			await core.delete(up)
			removefile('./manoj.webp')
			removefile('./manoj.jpg')
		})
}

Manoj.vsticker.start = async(core) => {
	var data = await core.download()
	if(data.type !== 'sticker' || !core.Reply.isAnimated) {
		return await core.send(string().converter.sticker_need)
	}

	var up = await core.send(string().converter.anim)
	fs.writeFileSync('./manoj2.webp', data.buffer)
	var { result } = await webp2mp4File('./manoj2.webp')
	await core.mediasend('video', result, dataDb.caption.setup(core))
	await core.delete(up)
	removefile('./manoj2.webp')
}