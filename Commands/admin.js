/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
Manoj.kick.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	if(core.input && (core.input === 'all' || core.input.have('comm') || core.input.have('diff'))) {
		var wh = core.input.cut('/').fix(),
			mem, i = 0,
			sec, count,
			main = await core.groupUpdate('metadata')
		main = (main.members.map(m => {
			if(!m.admin) {
				return m.id
			}
		})).fix()
		if(wh[0] === 'all') {
			mem = main
			count = (mem.length - 3)
		} else {
			try {
				sec = await core.groupUpdate('metadata', wh[1])
				sec = (sec.members.map(m => {
					if(!m.admin) {
						return m.id
					}
				})).fix()
			} catch(e) {
				return await core.send(string().admin.kick.join)
			}
		}

		if(wh[0] === 'comm') {
			mem = main.common(sec)
			count = (mem.length + 1)
		}

		if(wh[0] === 'diff') {
			mem = main.diff(sec)
			count = (mem.length + 1)
		}

		mem = mem.fix()
		if(mem && mem.length !== 0) {
			await core.send(string().admin.kick.all)
			await core.sleep(2000)
			do {
				await core.groupUpdate({
					dothis: 'remove',
					user: mem[i].cut('#').fix()
				})
				await core.sleep(1000)
				i++
			} while(count > i)

			return await core.send(string().admin.kick.all_r)
		}
	}

	var user = core.Reply ? core.Reply.jid : core.mention ? core.mention.fix()[0] : false
	if(!user) {
		return await core.send(string().admin.need_us)
	}

	await core.send('@' + user.cut('@')[0].cut(':')[0] + ', ' + (dataDb.Kick || string().admin.kick.kicked).setup(core), false, {}, {
		mentions: [user]
	})
	await core.groupUpdate({
		dothis: 'remove',
		user: [user]
	})
}

Manoj.add.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	if(!core.text) {
		return await core.send(string().admin.need_us)
	}

	var users = ((toNumber(core.text).cut('/').fix().join('@s.whatsapp.net=')) + '@s.whatsapp.net').cut('=').fix()
	try {
		var dataaaa = await core.groupUpdate({
			dothis: 'add',
			user: users
		})
		//console.log(JSON.stringify(dataaaa,null,4))
		await core.send(users.join(',').replace(/@s.whatsapp.net/gi, '') + (dataDb.GroupAdd || string().admin.add.added), false, {}, {
			mentions: users
		})
	} catch(e) {
		await core.send(string().admin.add.invalid + e)
	}
}

Manoj.promote.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	var user = core.Reply?.jid || (core.mention ? core.mention[0] : false) || false
	if(!user) {
		return await core.send(string().admin.need_us)
	}

	if(await core.usAdmin(user)) {
		return await core.send(string().admin.promote.admin)
	}

	await core.groupUpdate({
		dothis: 'promote',
		user: [user]
	})
	return await core.send(('@' + user.cut('@')[0] + dataDb.Promote) || string().admin.promote.done.bind(user.cut('@')[0]), false, {}, {
		mentions: [user]
	})
}

Manoj.demote.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	var user = core.Reply?.jid || (core.mention ? core.mention[0] : false) || false
	if(!user) {
		return await core.send(string().admin.need_us)
	}

	if(!await core.usAdmin(user)) {
		return await core.send(string().admin.demote.admin)
	}

	await core.groupUpdate({
		dothis: 'demote',
		user: [user]
	})
	return await core.send(('@' + user.cut('@')[0] + dataDb.Demote) || string().admin.demote.done.bind(user.cut('@')[0]), false, {}, {
		mentions: [user]
	})
}

Manoj.gpdesc.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	if(!core.text) {
		return await core.send(string().admin.gpdesc.need)
	}

	var up = await core.send(string().admin.gpdesc.up)
	await core.groupUpdate({
		dothis: 'update-desc',
		name: core.text
	})
	await core.send(string().admin.gpdesc.upd.bind(core.text))
	return await core.delete(up)
}

Manoj.gpsub.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	if(!core.text) {
		return await core.send(string().admin.gpsub.need)
	}

	var up = await core.send(string().admin.gpsub.up)
	await core.groupUpdate({
		dothis: 'update-sub',
		name: core.text
	})
	await core.send(string().admin.gpsub.upd.bind(core.text))
	return await core.delete(up)
}

Manoj.gpdp.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	var dl = await core.download()
	if(dl.type !== 'image') {
		return await core.send(string().admin.gpdp.need)
	}

	var up = await core.send(string().admin.gpdp.up)
	fs.writeFileSync('./manoj-group.jpg', dl.buffer)
	await core.profileUpdate({
		dothis: 'up-dp',
		url: './manoj-group.jpg',
		user: core.jid
	})
	await core.send(string().admin.gpdp.upd)
	removefile('./manoj-group.jpg')
	return await core.delete(up)
}

Manoj.invite.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	var code = await core.groupUpdate('invite-code')
	return await core.send(string().admin.invite.link.bind(code))
}

Manoj.mute.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	await core.groupUpdate('announcement')
	return await core.send((dataDb.Mute || string().admin.mute.done).setup(core))
}

Manoj.unmute.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	await core.groupUpdate('not_announcement')
	return await core.send((dataDb.Unmute || string().admin.unmute.done).setup(core))
}

Manoj.lock.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	await core.groupUpdate('locked')
	return await core.send((dataDb.Lock || string().admin.lock.done).setup(core))
}

Manoj.unlock.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	await core.groupUpdate('unlocked')
	return await core.send((dataDb.Unlock || string().admin.unlock.done).setup(core))
}

Manoj.revoke.start = async(core) => {
	if(!await core.amAdmin()) {
		return await core.send(string().admin.need_admin)
	}

	var code = await core.groupUpdate('revoke'),
		data = core.input === 'link' ? ('https://chat.whatsapp.com/' + code) : 'Hidden'
	return await core.send(string().admin.revoke.done.bind(data))
}