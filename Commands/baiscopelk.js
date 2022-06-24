/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const Bcope_reg = /https:\/\/www.baiscopelk.com/

const {
	BaiscopeLk
} = Ravindu

Manoj.sub.start = async(core) => {
	try {
		if(!core.input) {
			return await core.send(string().bcope.need)
		}

		if(Bcope_reg.have(core.input)) {
			await core.send(string().bcope.download)
			var data = await BaiscopeLk.download(core.input)
			if(!data.dl || !data.filename) {
				return await core.send(string().bcope.notfound)
			}

			await core.send(string().bcope.upload)
			await core.mediasend('document', data.dl, data.meme, {}, false, data.filename)
			if(data.img) {
				await core.mediasend('image', data.img, string().bcope.cap.bind(data.name, data.writer))
			}

			return
		}

		await core.send(string().bcope.search)
		var res = await BaiscopeLk.search(core.input)
		if(res.length === 0) {
			return await core.send(string().bcope.notfound)
		}

		var list = {}
		list.title = string().bcope.title
		list.text = string().bcope.desc_a.bind(core.text)
		list.button = 'Results'
		list.sec = res
		return await core.sendlist(list)
	} catch(e) {
		return await core.send(string().bcope.notfound)
	}
}