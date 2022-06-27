/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const {
	Youtube
} = Ravindu
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
		msg.img = data.thumbnail
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