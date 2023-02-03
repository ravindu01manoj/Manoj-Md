/*
Manoj Md Whatsapp Bot

website: https://ravindumanoj.ml
Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
var { ravindumanoj_api_key } = require('../Details.js')
var Api_url = 'https://api-ravindumanoj.ml/'
const fs = require('fs')
var ffmpeg = require('fluent-ffmpeg')
const {
	Youtube,
	AudioFind
} = Ravindu
const audiofind = new AudioFind()
const youtube = new Youtube()

Manoj.yts.start = async(core) => {
	try {
		if(!core.input) {
			return await core.send(string().youtube.yts.need)
		}

		var type = youtube.getType(core.input)
		var st = await core.reply(string().youtube.yts.search)
		if(type.type === 'playlist') {
			try {
				var search = await youtube.SearchPlayList(type.key), list = {}
				list.title = string().youtube.yts.title
				list.text = string().youtube.yts.descl.bind(search.title, search.author.name, search.size)
				list.sec = youtube.tolist(search, 'playlist')
				list.button = 'Results'
				await core.sendlist(list)
			} catch(e) {
				return await core.send(string().youtube.yts.err)
			}
		} else {
			var search = await youtube.Search(type.key), list = {}
			list.title = string().youtube.yts.title
			list.text = string().youtube.yts.desc_b.bind(type.key)
			list.sec = youtube.tolist(search)
			list.button = 'Results'
			await core.sendlist(list)
		}

		return await core.delete(st)
	} catch(e) {
		console.log(e)
		return await core.send(string().youtube.yts.error)
	}
}

Manoj.song.start = Manoj.video.start = async(core) => {
	var cmds = core.command === 'සින්දු' ? 'song' : core.command === 'වීඩියෝ' ? 'video' : core.command.toLowerCase()
	try {
		var type = youtube.getType(core.input)
		if(!type.type) {
			return await core.reply(string().youtube[cmds].need)
		}

		var vid = type.key
		if(type.type == 'text') {
			var search = await youtube.Search(type.key)
			vid = search[0].videoId
		}

		var data = await youtube.SearchById(vid, cmds)


		var msg = {}
		msg.img = await core.image({ buffer:data.thumbnail })
		msg.text = string().youtube[cmds].data.bind(data.url, data.title, data.Channel, data.view, data.category, data.likes, data.desc)

		var dbtn = await core.buttongen(await youtube.gen(data, cmds))
		msg.button = dbtn.button
		if(dbtn.type) {
			return await core.sendbuttonimg(msg)
		}

		return await core.sendButtonimg(msg)
	} catch(e) {
		return await core.send(string().youtube.error)
	}
}

Manoj.ytd.start = async(core) => {
	try {
		if(core.input && core.input.have('/-/')) {
			var input = core.input.cut('/-/')
			if(input[0] == 'song' || input[0] == 'doc') {
				await core.send((dataDb.SongDownload || string().youtube.song.download).setup(core))
			}

			if(input[0] == 'video') {
				await core.send((dataDb.VideoDownload || string().youtube.video.download).setup(core))
			}

			await youtube.DownloadAndSend(core, input)
			return
		}

		var type = await youtube.getType(core.input)
		if(!type.type) {
			return await core.reply(string().youtube.video.need)
		}

		var vid = type.key
		if(type.type == 'text') {
			var search = await youtube.Search(type.key)
			vid = search[0].videoId
		}

		var data = await youtube.SearchById(vid, core.command.toLowerCase())
		var list = await youtube.gen(data, 'list')
		var msg = {}
		msg.title = string().youtube.ytd.title
		msg.text = string().youtube.video.data.bind(data.url, data.title, data.Channel, data.view, data.category, data.likes, data.desc)
		msg.sec = list
		msg.button = 'Results'
		return await core.sendlist(msg)
	} catch(e) {
		return await core.send(string().youtube.error)
	}
}

var Find = async(buffer, core) => {
	try {
		await core.reply('*Identifying clip, please wait...*')
		var data = await audiofind.identify(buffer)
		core.input = 'https://youtu.be/' + data[0].external_metadata.youtube.vid
		core.command = 'song'
		await await activeCommand('song', core)
	} catch{
		await core.reply('*I Can Not Identify This Clip :(*')
	}
}

Manoj.find.start = async(core) => {
	try {
		var data = await core.download()
		if(data.type === 'audio') {
			return Find(data.buffer, core)
		}

		if(data.type !== 'video') {
			return await core.send('need Audio Clip Or Video Clip')
		}

		var datas = await core.bufferType(data)
		datas.ext = datas.ext.replace('.', '')
		var ext = datas.ext === 'bin' ? 'mp4' : datas.ext
		fs.writeFileSync('./manoj.' + ext, data.buffer)

		ffmpeg('./manoj.' + ext).format('mp3').save('./manoj.mp3').on('error', async err => {
			return await core.reply('*I Can Not Find This Clip :(*')
		}).on('end', async() => {
			await Find(fs.readFileSync('./manoj.mp3'), core)
			removefile('./manoj.' + ext)
			removefile('./manoj.mp3')
		})
	} catch(e) {
		console.log(e)
		return await core.reply('*I Can Not Find This Clip :(*')
	}
}