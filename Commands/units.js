/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const {
	button,
	convertunit,
	getnum
} = Ravindu.units

Manoj.unit.start = async(core) => {
	var text = {}
	text.title = string().unit.list_m_t
	text.text = string().unit.list_m_b
	text.button = string().unit.list_m_k
	if(core.text) {
		var a = getnum(core.text)
	}

	if(!a) {
		return await core.send(string().unit.need_n)
	}

	text.sec = button(a)
	if(!('' + core.text).have('==')) {
		return await core.sendlist(text)
	}

	var data = await core.send(string().unit.doing)
	var un = core.text.cut('==').fix()
	var msg = convertunit(un[0] || 'non', un[1] || 'non')
	await core.reply(msg)
	await core.delete(data)
}