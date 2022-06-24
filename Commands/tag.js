/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
Manoj.scan.start = async(core) => {
	if(!core.input) {
		return await core.send(string().tag.need)
	}

	var result = await core.profileUpdate({
		dothis: 'on-wa',
		user: core.text
	})
	if(result.jid) {
		return await core.send('```' + core.input + '``` \n' + string().tag.suc + '\n' + result.jid)
	}

	await core.send('```' + core.input + '``` \n' + string().tag.unsuc)
}

Manoj.tag.start = async(core) => {
	if(!core.isgroup || core.input == 'admin') {
		return
	}

	const data = await core.groupUpdate('metadata')
	var jids = [],
		taglist = data.sub + string().tag.mem
	data.members.map(async mem => {
		mem && (taglist += string().tag.tlist.replace('{a}', mem.id.split('@')[0]), jids.push(mem.id))
	})
	const msg = core.text ? core.text : taglist
	await core.send(msg, false, {}, {
		mentions: jids
	})
}

Manoj.tagadmin.start = async(core) => {
	if(!core.isgroup) {
		return
	}

	const data = await core.groupUpdate('metadata')
	var jids = [],
		taglist = data.sub + string().tag.title
	data.members.map(async admin => {
		admin.admin && (taglist += string().tag.list.replace('{a}', admin.id.split('@')[0]).replace('{b}', admin.id.split('@')[0]), jids.push(admin.id))
	})
	const msg = core.text ? core.text : taglist
	await core.send(msg, false, {}, {
		mentions: jids
	})
}