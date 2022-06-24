/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
Manoj.report.start = async(core) => {
	if(!core.isgroup) {
		return
	}

	if(!core.Reply) {
		return await core.send(string().download.needt)
	}

	const data = await core.groupUpdate('metadata')
	var jids = [],
		list = ''
	data.members.map(async admin => {
		admin.admin && (list += '👮‍♂️ @' + admin.id.split('@')[0] + '\n', jids.push(admin.id))
	})
	await core.send(string().report.done)
	await core.reply(string().report.msg.replace('{a}', list), false, {
		mentions: jids
	})
}
