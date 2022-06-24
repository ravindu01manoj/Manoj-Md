/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
Manoj.info.start = async(core) => {
	if(core.Reply || !core.isgroup || core.mention) {
		user = core.Reply ? core.Reply.jid : core.mention ? core.mention.fix()[0] : core.jid
		var bisdata = await core.profileUpdate({
			dothis: 'profile-more',
			user
		})
		var about = await core.profileUpdate({
			dothis: 'about',
			user
		})
		var pic = await core.profileUpdate({
			dothis: 'profile-pic',
			user
		})
		var msg = string().info.user.bind(user, about)
		if(bisdata) {
			msg += string().info.bis.bind(bisdata.adr || 'non', bisdata.desc || 'non', bisdata.web[0] || 'non', bisdata.mail || 'non', bisdata.cat || 'non')
		}

		await core.mediasend('image', pic, msg)
	} else {
		var pic = await core.profileUpdate({
			dothis: 'profile-pic',
			user: core.jid
		})
		var invite = string().info.per
		if(await core.amAdmin()) {
			invite = await core.groupUpdate('invite-code')
		}

		var metadata = await core.groupUpdate('metadata')
		var adminc = 0,
			userc = 0,
			sri = 0,
			usa = 0,
			ru = 0,
			ind = 0,
			uk = 0,
			idn = 0,
			pak = 0,
			ukr = 0,
			mar = 0,
			bgd = 0,
			aze = 0
		metadata.members.map(async a => {
			userc++, a.admin && adminc++, a.id.start('94') && sri++, a.id.start('1') && usa++, a.id.start('7') && ru++, a.id.start('91') && ind++, a.id.start('44') && uk++, a.id.start('62') && idn++, a.id.start('92') && pak++, a.id.start('212') && mar++, a.id.start('880') && bgd++, a.id.start('994') && aze++
		})

		var totalc = (sri + usa + ru + ind + uk + idn + pak + ukr + mar + bgd + aze)
		var msgc = string().info.userc.bind(userc, adminc, sri, usa, ru, ind, uk, idn, pak, ukr, mar, bgd, aze, (userc - totalc))
		var msg = string().info.groupc.bind(metadata.sub, metadata.id || core.jid, metadata.owner || 'No Data', invite, msgc, metadata.desc)

		await core.mediasend('image', pic, msg)
	}
}

Manoj.jid.start = async(core) => {
	var jid = core.Reply ? core.Reply.jid : core.mention ? core.mention.fix()[0] : core.jid
	await core.reply(string().info.jid.msg.bind(jid))
}

Manoj.wame.start = async(core) => {
	if(core.Reply || !core.isgroup || core.mention) {
		jid = core.Reply ? core.Reply.jid : core.mention ? core.mention.fix()[0] : core.jid
		return await core.send(string().info.wame.msg.bind(jid.cut('@')[0].cut(':')[0], jid.cut('@')[0].cut(':')[0]), false, {
			mentions: [jid]
		})
	}

	return await core.send(string().info.wame.need)
}