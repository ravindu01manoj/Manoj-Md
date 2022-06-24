/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const {
	load,
	FormData,
	stream,
	promisify
} = require('../store/manoj/')
const pipeline = promisify(stream.pipeline)


Manoj.removebg.start = async(core) => {
	if(!string().rbgapi) {
		return await core.send(string().removebg.needapi)
	}

	var data = await core.download()
	if(data.type !== 'image') {
		return await core.send(string().download.needi)
	}

	fs.writeFileSync('./manoj123.png', data.buffer)
	await core.reply(string().removebg.edit)
	var form = new FormData()
	form.append('image_file', fs.createReadStream('./manoj123.jpg'))
	form.append('size', 'auto')
	var rbg = await load.stream.post('https://api.remove.bg/v1.0/removebg', {
		body: form,
		headers: {
			'X-Api-Key': string().rbgapi
		}
	})
	await pipeline(rbg, fs.createWriteStream('manoj.png'))

	await core.mediasend('document', 'manoj.png', 'image/png', {}, 'background-removed-manoj-md.png')
	removefile('manoj.png')
	removefile('./manoj123.jpg')
}