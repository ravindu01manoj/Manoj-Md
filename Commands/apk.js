/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const {
	ApplicationDownload
} = Ravindu
const playstore_regex = /https:\/\/play.google.com\/store\/apps\/details\?id=?(.*)/

Manoj.apk.start = async(core) => {
	try {
		if(core.text && core.text.have('screenshot/-/')) {
			var ss = core.text.replace('screenshot/-/').cut('/=/').fix()
			for(i = 0; i < ss.length; i++) {
				await core.mediasend('image', ss[i])
			}

			return
		}

		var apkdownlod = new ApplicationDownload(core, playstore_regex)
		if(!apkdownlod.text || !apkdownlod.isPlaystoreUrl()) {
			return await core.send(string().apk.need)
		}

		var appId = apkdownlod.getApplicationId()
		if(!appId) {
			return await core.send(string().apk.novalid)
		}

		await core.send(string().apk.download)
		var application = await apkdownlod.getApplicationBuffer(appId)
		if(!application.buffer) {
			return await core.send(string().apk.notfound)
		}

		await core.send(string().apk.upload)
		var FileName = application.name.cut('APK')[0].replace(/ /g, '+') + 'by+manoj+md.apk'
		await core.downloadUrl(application.buffer, FileName, async() => {
			await core.mediasend('document', FileName, mimetype.apk, {}, false, FileName)
			return removefile(FileName)
		}, async() => {
			await core.reply(string().apk.notfound)
			return removefile(FileName)
		})
		var appInfo = await apkdownlod.getAppInfo(appId)
		var msg = {}
		msg.img = appInfo.icon
		msg.text = string().apk.info.bind(appInfo.title, appInfo.summary, appInfo.version, appInfo.genre, appInfo.scoreText, appInfo.ratings, appInfo.contentRating, appInfo.developer, appInfo.installs, appInfo.recentChanges, appInfo.description)
		var dbtn = await core.buttongen([{
			urlButton: {
				displayText: 'Go To Playstore',
				url: `https://play.google.com/store/apps/details?id=${appId}`
			}
		}, {
			quickReplyButton: {
				displayText: 'Screenshots',
				id: 'apk screenshot/-/' + appInfo.screenshots.join('/=/')
			}
		}, {
			quickReplyButton: {
				displayText: 'Background',
				id: 'link' + appInfo.headerImage
			}
		}])
		msg.button = dbtn.button
		if(dbtn.type) {
			return await core.sendbuttonimg(msg)
		}

		return await core.sendButtonimg(msg)
	} catch(e) {
		return await core.send(string().apk.notfound)
	}
}

Manoj.apks.start = async(core) => {
	try {
		if(!core.text) {
			return await core.send(string().apks.need)
		}

		var apkdownlod = new ApplicationDownload(core, playstore_regex)
		if(apkdownlod.isPlaystoreUrl()) {
			var appId = apkdownlod.getApplicationId()
			await core.send(string().apks.load)
			var appInfo = await apkdownlod.getAppInfo(appId)
			var msg = {}
			msg.img = appInfo.icon
			msg.text = string().apks.info.bind(appInfo.url, appInfo.title, appInfo.summary, appInfo.version, appInfo.genre, appInfo.scoreText, appInfo.ratings, appInfo.contentRating, appInfo.developer, appInfo.installs, appInfo.recentChanges, appInfo.description)
			var dbtn = await core.buttongen([{
				urlButton: {
					displayText: 'Go To Playstore',
					url: `https://play.google.com/store/apps/details?id=${appId}`
				}
			}, {
				quickReplyButton: {
					displayText: 'Screenshots',
					id: 'apk screenshot/-/' + appInfo.screenshots.join('/=/')
				}
			}, {
				quickReplyButton: {
					displayText: 'Background',
					id: 'link' + appInfo.headerImage
				}
			}])
			msg.button = dbtn.button
			if(dbtn.type) {
				return await core.sendbuttonimg(msg)
			}

			return await core.sendButtonimg(msg)
		} else {
			await core.send(string().apks.search)
			var res = await apkdownlod.searchInfo()
			if(res) {
				var text = {}
				text.title = string().apks.desc
				text.text = string().apks.list.bind(core.text)
				text.button = 'Results'
				text.sec = await apkdownlod.tolist(res)
				return await core.sendlist(text)
			} else {
				await core.send(string().apks.notfound)
			}
		}
	} catch(e) {
		return await core.send(string().apks.notfound)
	}
}