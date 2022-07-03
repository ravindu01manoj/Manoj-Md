/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const { EphotoBest, emojimix, ph, emojiToPng, attplist, toAttp, fancy, RGBTEXT } = Ravindu

Manoj.logoA.start = async(core) => {
	if(!core.text) {
		return await core.send(string().logo.logoA.need)
	}

	var ephoto = new EphotoBest(core)
	if(ephoto.istext()) {
		var len = '',
			tot = 0,
			counts = ephoto.lengths(),
			list = {}
		counts.lista.map(a => {
			len += '*' + a.name + ': ' + a.len + '*\n'
			tot += a.len
		})
		len += '\n*Total: ' + tot + '*'
		list.title = string().logo.logoA.title
		list.text = string().logo.logoA.msg.bind(core.text, len)
		list.button = string().logo.logoA.sel
		list.sec = ephoto.listone()
		return await core.sendlist(list)

	}

	var res = await ephoto.CreateImageFromData()
	var filepath = '/root/temp/' + randomName() + '.jpg'
	await core.downloadAndStream(res, filepath, async() => {
		await core.mediasend('image', filepath, dataDb.caption.setup(core))
		removefile(filepath)
	})

}

Manoj.logoB.start = async(core) => {
	if(!core.text) {
		return await core.send(string().logo.logoB.need)
	}

	var ephoto = new EphotoBest(core)
	if(ephoto.istext()) {
		text = ephoto.cutter()
		if(!text.b) {
			return await core.send(string().logo.logoB.need)
		}

		var len = '',
			tot = 0,
			counts = ephoto.lengths(),
			list = {}
		counts.listb.map(a => {
			len += '*' + a.name + ': ' + a.len + '*\n'
			tot += a.len
		})
		len += '\n*Total: ' + tot + '*'
		list.title = string().logo.logoA.title
		list.text = string().logo.logoB.msg.bind(text.a, text.b, len)
		list.button = string().logo.logoA.sel
		list.sec = ephoto.listtwo()
		return await core.sendlist(list)
	}

	var res = await ephoto.CreateImageFromData()
	var filepath = '/root/temp/' + randomName() + '.jpg'
	await core.downloadAndStream(res, filepath, async() => {
		await core.mediasend('image', filepath, dataDb.caption.setup(core))
		removefile(filepath)
	})
}

Manoj.logoC.start = async(core) => {
	if(!core.text) {
		return await core.send(string().logo.logoA.need)
	}

	var ephoto = new EphotoBest(core)
	if(ephoto.istext()) {

		var len = '\n*Total: ' + ephoto.lengths().listc + '*',
			list = {}
		list.title = string().logo.logoA.title
		list.text = string().logo.logoA.msg.bind(core.text, len)
		list.button = string().logo.logoA.sel
		list.sec = ephoto.listthree()
		return await core.sendlist(list)
	}

	var res = await ephoto.CreateImageFromdata()
	var filepath = '/root/temp/' + randomName() + '.jpg'
	await core.downloadAndStream(res, filepath, async() => {
		await core.mediasend('image', filepath, dataDb.caption.setup(core))
		removefile(filepath)
	})
}

Manoj.attpA.start = async(core) => {
	try {
		if(!core.text) {
			return await core.send(string().attp.attpB.need)
		}

		var attp = attplist(core.text)
		if(attp?.list) {
			var len = '*Total: ' + attp.count + '*', list = {}
			list.title = string().attp.attpB.title
			list.text = string().attp.attpB.msg.bind(core.text, len)
			list.button = string().attp.attpB.sel
			list.sec = attp.list
			return await core.sendlist(list)
		}

		var res = await toAttp(core.text)
		var filepath = '/root/temp/' + randomName() + res.sticktype === 'image' ? '.jpg' : '.gif'
		await core.downloadAndStream(res.url, filepath, async() => {
			await core.mediasend('sticker', filepath, { type:res.sticktype })
			removefile(filepath)
		})
	} catch{
		return await core.send('*Can not upload*')
	}
}

Manoj.attpB.start = async(core) => {
	if(!core.text) {
		return await core.send(string().attp.attpB.need)
	}

	var ephoto = new EphotoBest(core)
	if(ephoto.istext()) {
		var len = '',
			tot = 0,
			counts = ephoto.lengths(),
			list = {}
		counts.lista.map(a => {
			len += '*' + a.name + ': ' + a.len + '*\n'
			tot += a.len
		})
		len += '\n*Total: ' + tot + '*'
		list.title = string().attp.attpB.title
		list.text = string().attp.attpB.msg.bind(core.text, len)
		list.button = string().attp.attpB.sel
		list.sec = ephoto.listone('attpB')
		return await core.sendlist(list)

	}

	var res = await ephoto.CreateImageFromData()
	var filepath = '/root/temp/' + randomName() + '.jpg'
	await core.downloadAndStream(res, filepath, async() => {
		await core.mediasend('sticker', filepath, { type:'image' })
		removefile(filepath)
	})

}

Manoj.attpC.start = async(core) => {
	if(!core.text) {
		return await core.send(string().attp.attpC.need)
	}

	var ephoto = new EphotoBest(core)
	if(ephoto.istext()) {
		text = ephoto.cutter()
		if(!text.b) {
			return await core.send(string().attp.attpC.need)
		}

		var len = '',
			tot = 0,
			counts = ephoto.lengths(),
			list = {}
		counts.listb.map(a => {
			len += '*' + a.name + ': ' + a.len + '*\n'
			tot += a.len
		})
		len += '\n*Total: ' + tot + '*'
		list.title = string().attp.attpB.title
		list.text = string().attp.attpC.msg.bind(text.a, text.b, len)
		list.button = string().attp.attpB.sel
		list.sec = ephoto.listtwo('attpC')
		return await core.sendlist(list)
	}

	var res = await ephoto.CreateImageFromData()
	var filepath = '/root/temp/' + randomName() + '.jpg'
	await core.downloadAndStream(res, filepath, async() => {
		await core.mediasend('sticker', filepath, { type:'image' })
		removefile(filepath)
	})

}

Manoj.attpD.start = async(core) => {
	if(!core.text) {
		return await core.send(string().attp.attpB.need)
	}

	var ephoto = new EphotoBest(core)
	if(ephoto.istext()) {
		var len = '\n*Total: ' + ephoto.lengths.listc + '*',
			list = {}
		list.title = string().attp.attpB.title
		list.text = string().attp.attpB.msg.bind(core.text, len)
		list.button = string().attp.attpB.sel
		list.sec = ephoto.listthree('attpD')
		return await core.sendlist(list)
	}

	var res = await ephoto.CreateImageFromdata()
	var filepath = '/root/temp/' + randomName() + '.jpg'
	await core.downloadAndStream(res, filepath, async() => {
		await core.mediasend('sticker', filepath, { type:'image' })
		removefile(filepath)
	})

}

Manoj.rgb.start = async(core) => {
	if(!core.input) {
		return await core.send(string().attp.attpB.need)
	}

	if(core.input.have('/-/')) {
		var a = core.input.cut('/-/')
		var data = RGBTEXT.create(a[1], a[0])
		return await core.mediasend('sticker', data, { type:'video' })
	}

	var list = {}
	list.text = '*RGB STICKER MAKER*\n\n*INPUT :* ```' + core.input + '```'
	list.button = 'SELECT FONT'
	list.sec = RGBTEXT.fontlist(core.input)
	return await core.sendlist(list)
}

Manoj.png.start = async(core) => {
	if(!core.input || !emojitoArray(core.input)[0]) {
		return await core.reply(string().logo.png.need)
	}

	var emojipng = await emojiToPng(emojitoArray(core.input)[0])
	if(!emojipng.section) {
		return await core.reply(string().logo.png.err)
	}

	var text = {}
	text.text = string().logo.png.msg.format(emojipng.name, emojipng.unicode, emojipng.description)
	text.button = string().logo.png.sel
	text.sec = emojipng.section
	return await core.sendlist(text)
}

Manoj.fancy.start = async(core) => {
	if(!core.text) {
		return core.reply(string().logo.fancy.need)
	}

	if(core.input && core.input.have('//--//')) {
		return await core.reply(fancy.text(core.input.cut('//--//')[1])[core.input.cut('//--//')[0]].replace(/:=:=;/g, '\n'))
	}

	var list = {}
	list.text = string().logo.fancy.msg.bind(core.text)
	list.button = 'Select'
	list.sec = fancy.list(core.text)
	return await core.sendlist(list)
}

Manoj.emojimix.start = async(core) => {
	var emo = emojitoArray(core.input)
	if(!emo[0] || !emo[1]) {
		return await core.reply(string().attp.emojimix.need)
	}

	await core.send(string().attp.emojimix.mix.bind(emo[0], emo[1]))
	try {
		var data = await emojimix(emo[0] + '_' + emo[1])
		if(data) {
			return await core.mediasend('sticker', data, { type:'image' })
		}

		throw new Error('false')
	} catch{
		return await core.reply(string().attp.emojimix.error.bind(emo[0], emo[1]))
	}
}
//Manoj.ph.start = async (core) => {await ph(core)}