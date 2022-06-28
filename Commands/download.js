/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/

const { Facebook, Twitter, Instagram, mediafire, gitclone, googleImage, tiktoklink, tiktokDownload, truecaller, googleDrive, PDFMaker, patchNovels } = Ravindu

Manoj.insta.start = async(core) => {
	var instavid = /(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/, instastory = /\/stories\/([^\s&]+)/
	var { url, type } = core.input && instavid.test(core.input) ? { url:core.input, type:'vid' } : core.input && instastory.test(core.input) ? { url:core.input, type:'story' } : { url:false, type:false }
	if(!url) {
		return await core.reply(string().insta.need)
	}

	if(type == 'story') {
		return await core.reply(string().insta.story)
	}

	try {
		await core.send((dataDb.InstaDownload || string().insta.dload).setup(core))
		var data = await Instagram.downloader(url)
		await core.send((dataDb.InstaUplaod || string().insta.uload).setup(core))
		var datas = await core.bufferType(data.result.link)
		await core.mediasend(datas.type, datas.buffer, data.result.desc || dataDb.caption.setup(core))
	} catch(e) {
		await core.reply(string().insta.error)
	}
}

Manoj.gimg.start = async(core) => {
	if(!core.input) {
		return await core.reply(string().gimg.need)
	}

	try {
		if(core.input.have('/-/')) {
			return await core.mediasend('image', core.input.cut('/-/')[1])
		}
	} catch(e) {
		return await core.send('*Can not upload*')
	}

	try {
		await core.send(string().gimg.dload)
		var images = await googleImage.download(core.input.replace(/ /g, '+'))
		if(images.length < 2) {
			return await core.send(string().gimg.error)
		}

		var text = {}
		text.title = string().gimg.title
		text.text = string().gimg.msg.bind(core.input)
		text.button = 'Results'
		text.sec = googleImage.imagemap(images, core.input)
		return await core.sendlist(text)
	} catch(e) {
		return await core.send(string().gimg.error)
	}
}

Manoj.instastory.start = async(core) => {
	if(core.input && core.input.have('/%-/')) {
		core.input.cut('/%-/').fix().map(async a => {
			await core.mediasend(a.cut('/%=/')[0], a.cut('/%=/')[1])
		})
	} else {
		var a = core.input ? core.input.cut('/')[2] == 'stories' ? core.input.cut('/')[3] : core.input.replacer('https://instagram.com/%', 'instagram.com/%', '@%').cut('?')[0] : false
		if(!a) {
			return await core.reply(string().instastory.need)
		}

		try {
			await core.send(string().instastory.load)
			var n = await Instagram.userdata(a)
			if(!n.story) {
				return await core.reply(string().instastory.notfound)
			}

			var r = ''
			n.story.map(async t => {
				t.type && t.url && (r += t.type + '/%=/' + t.url + '/%-/')
			})
			var s = {}
			s.img = n.user.profilePicUrl, s.text = `*INSTAGRAM STORY DOWNLOADER*\n\n*USER NAME : ${n.user.username}*\n\n*USER ID : ${n.user.id}*\n\n*FULL NAME : ${n.user.fullName}*\n\n*FOLLIWERS : ${n.user.followers}*\n\n*FOLLOWING : ${n.user.following}*\n\n*BIO* :` + ' ```' + n.user.biography + '```'
			var i = await core.buttongen([{
				urlButton: {
					displayText: 'Go To Instagram',
					url: 'https://instagram.com/' + a
				}
			}, {
				quickReplyButton: {
					displayText: 'STORIES',
					id: 'instastory' + r
				}
			}])
			return s.button = i.button, i.type ? await core.sendbuttonimg(s) : await core.sendButtonimg(s)
		} catch(a) {
			await core.reply(string().instastory.error)
		}
	}
}

Manoj.fb.start = async(core) => {
	var url = Facebook.urlvalidate(core.input)
	if(!url) {
		return await core.reply(string().fb.need)
	}

	try {
		await core.send((dataDb.FbDownload || string().fb.dload).setup(core))
		var buffer = await Facebook.downloader(url)
		var FileName = randomName() + '.mp4'
		await core.send((dataDb.FbUplaod || string().fb.uload).setup(core))
		await core.downloadUrl(buffer, FileName, async() => {
			await core.mediasend('video', FileName, dataDb.caption.setup(core))
			return removefile(FileName)
		}, async() => {
			await core.reply(string().fb.error)
			return removefile(FileName)
		})
	} catch(e) {
		await core.reply(string().fb.error)
	}
}

Manoj.mfire.start = async(core) => {
	var url = core.input && /https:\/\/www.mediafire.com/.test(core.input) ? core.input : false
	if(!url) {
		return await core.reply(string().mfire.need)
	}

	try {
		await core.send((dataDb.MfireDownload || string().mfire.dload).setup(core))
		var data = await mediafire(url)
		await core.send((dataDb.MfireUplaod || string().mfire.uload).setup(core))
		var linkdata = await linkPreview(data.link)
		var FileName = randomName() + linkdata.ext
		await core.downloadUrl(data.link, FileName, async() => {
			await core.mediasend('document', FileName, linkdata.mime, {}, false, linkdata.fileName)
			return removefile(FileName)
		}, async() => {
			await core.reply(string().mfire.error)
			return removefile(FileName)
		})
	} catch(e) {
		await core.reply(string().mfire.error)
		return removefile(FileName)
	}
}

Manoj.gdrive.start = async(core) => {
	var url = core.input && /https:\/\/drive.google.com\/file/.test(core.input) ? core.input : false
	if(!url) {
		return await core.reply(string().gdrive.need)
	}

	try {
		await core.send((dataDb.GdriveDownload || string().gdrive.dload).setup(core))
		var data = await googleDrive(url)
		await core.send((dataDb.GdriveUpload || string().gdrive.uload).setup(core))
		var linkdata = await linkPreview(data)
		var FileName = randomName() + linkdata.ext
		await core.downloadUrl(data, FileName, async() => {
			await core.mediasend('document', FileName, linkdata.mime, {}, false, linkdata.fileName)
			return removefile(FileName)
		}, async() => {
			await core.reply(string().gdrive.error)
			return removefile(FileName)
		})
	} catch(e) {
		await core.reply(string().gdrive.error)
		return removefile(FileName)
	}
}

Manoj.tiktok.start = async(core) => {
	var url = tiktoklink(core.input)
	if(!url) {
		return await core.reply(string().tiktok.need)
	}

	try {
		if(url == 'download') {
			await core.send((dataDb.TiktokDownload || string().tiktok.dload).setup(core))
			await core.send((dataDb.TiktokUplaod || string().tiktok.uload).setup(core))
			await core.mediasend(core.input.cut('/-/')[0], core.input.cut('/-/')[1])
		} else if(url == 'get') {
			var data = await tiktokDownload(core.input)
			var s = {}
			s.img = string().tiktok.img, s.text = '*TIKTOK CONTENT DOWNLOADER*\n\n*URL : ' + core.input + '*\n\n'
			var i = await core.buttongen([{
				urlButton: {
					displayText: 'Go To TikTok',
					url: core.input
				}
			}, {
				quickReplyButton: {
					displayText: 'WATERMARK',
					id: 'tiktokvideo/-/' + data.wm
				}
			}, {
				quickReplyButton: {
					displayText: 'NO-WATERMARK',
					id: 'tiktokvideo/-/' + data.nowm
				}
			}, {
				quickReplyButton: {
					displayText: 'ONLY-AUDIO',
					id: 'tiktokaudio/-/' + data.audio
				}
			}])
			return s.button = i.button, i.type ? await core.sendbuttonimg(s) : await core.sendButtonimg(s)
		}
	} catch(e) {
		return await core.reply(string().tiktok.error)
	}
}

Manoj.gitdl.start = async(core) => {
	var url = core.input && /https:\/\/github.com/.test(core.input) ? core.input : false
	if(!url) {
		return await core.reply(string().gitdl.need)
	}

	try {
		await core.send((dataDb.GithubDownload || string().gitdl.dload).setup(core))
		var newurl = url.cut('/')
		var data = await gitclone(url.replace('.git', ''), newurl[4] || '')
		await core.send((dataDb.GithubUplaod || string().gitdl.uload).setup(core))
		var linkdata = await linkPreview(data)
		var FileName = randomName() + linkdata.ext
		await core.downloadUrl(data, FileName, async() => {
			await core.mediasend('document', FileName, linkdata.mime, {}, false, linkdata.fileName)
			return removefile(FileName)
		}, async() => {
			await core.reply(string().gitdl.error)
			return removefile(FileName)
		})
	} catch(e) {
		await core.reply(string().gitdl.error)
		return removefile(FileName)
	}
}

Manoj.truecaller.start = async(core) => {
	var n = getNumber(core.input)
	if(!n) {
		return await core.reply(string().truecaller.need)
	}

	try {
		var r = await truecaller(n)
		if(!r) {
			return await core.reply(string().truecaller.error)
		}

		var a = 'No-Data',
			t = '*NUMBER INFO FROM TRUECALLER SITE*\n\n*NAME:- {}*\n\n*ABOUT:- {}*\n\n*SCORE:- {}*\n\n*NUMBER:- {}*\n\n*NUMBER TYPE:- {}*\n\n*NATIONAL FORMAT:- {}*\n\n*DIAL CODE:- {}*\n\n*COUNTRY CODE:- {}*\n\n*CARRIER :- {}*\n\n*ADDRESS:- {}*\n\n*ZIP CODE:- {}*\n\n*CITY:- {}*\n\n*TIME ZONE:- {}*'.bind(r.name || a, r.about || a, r.score || a, r.phones[0].e164Format || a, r.phones[0].numberType || a, r.phones[0].nationalFormat || a, r.phones[0].dialingCode || a, r.phones[0].countryCode || a, r.phones[0].carrier || a, r.addresses[0].address || a, r.addresses[0].zipCode || a, r.addresses[0].city || a, r.addresses[0].timeZone || a)
		await core.send(string().truecaller.load), await core.mediasend('image', r.image ? r.image : string().truecaller.img, t)
	} catch(n) {
		await core.reply(string().truecaller.error)
	}
}

Manoj.twitter.start = async(core) => {
	var id = Twitter.getID(core.input)
	if(!id) {
		return await core.reply(string().twitter.need)
	}

	try {
		await core.send((dataDb.TwitterDownload || string().twitter.dload).setup(core))
		var data = await Twitter.download(id)
		await core.send((dataDb.TwitterUplaod || string().twitter.uload).setup(core))
		var text = string().twitter.text.bind(core.input.getbetween('com/', '/')[0], data.type, data.text)
		if(data.type == 'image') {
			data.urls.map(async url => {
				await core.mediasend('image', url, text)
			})
			return
		}

		if(data.type == 'video') {
			return await core.mediasend('video', data.url, text)
		}

		if(data.type == 'text') {
			return await core.reply(text)
		}

		throw new Error('Content Not Found')
	} catch(e) {
		await core.reply(string().twitter.error)
	}
}

Manoj.pdf.start = async(core) => {
	var pdf = new PDFMaker(core)
	switch (core.command) {
	case 'page':
		var data = await core.download()
		if(data.type != 'image') {
			return await core.reply(string().pdf.needimg)
		}

		var need_new = pdf.searchPDF()
		if(need_new) {
			pdf.newPDF(data.buffer)
			return await core.reply(string().pdf.newimg)
		} else {
			var imc = pdf.addImage(data.buffer)
			return await core.reply(string().pdf.imgadd.bind(imc))
		}

		break
	case 'topdf':
		await core.send(string().pdf.srch)
		var haveimg = pdf.searchPDF()
		var pdfFile = pdf.createPDF()
		if(haveimg && pdfFile) {
			pdfFile.on('finish', async() => {
				await core.send(string().pdf.upload)
				await core.mediasend('document', './New-Pdf-From-Image.pdf', mimetype.pdf, {}, false, (core.input || core.name || 'New-Pdf-From-Image') + '.pdf')
				return pdf.clearTemp()
			})
		} else {
			return await core.reply(string().pdf.notFound.bind(Pfix))
		}

		break
	default:
		return await core.reply(string().pdf.newpdf.bind(Pfix, Pfix))
	}
}

Manoj.novel.start = async(core) => {
	var getNovels = await patchNovels(core.input)
	if(!getNovels.type) {
		return await core.reply(string().novel.error)
	}

	if(getNovels.type == 'download') {
		try {
			await core.mediasend('image', getNovels.image, '\n```' + getNovels.text + '```\n')
		} catch{}

		await core.send(string().novel.dl)
		await core.send(string().novel.up)
		var linkdata = await linkPreview(getNovels.download)
		var FileName = randomName() + linkdata.ext
		await core.downloadUrl(getNovels.download, FileName, async() => {
			await core.mediasend('document', FileName, linkdata.mime, {}, false, linkdata.fileName)
			return removefile(FileName)
		}, async() => {
			return removefile(FileName)
		})
	}

	var list = {}
	list.title = string().novel.head
	list.text = getNovels.type == 'main' ? string().novel.body2 : string().novel.body.bind(getNovels.select)
	list.button = 'Select'
	list.sec = getNovels.list
	return await core.sendlist(list)
}