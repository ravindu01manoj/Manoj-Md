/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const {
	Antispam
} = Ravindu

Manoj.antispam.start = async(core) => {
	var protection = new Antispam(core),
		block_sender = false
	if(!await protection.needActive()) {
		return
	}

	await protection.lockGroup()
	await core.reply(string().antispam.reply)
	await core.send(string().antispam.text)
	await protection.active()
	await core.send(string().antispam.text)
	await protection.blockSenderInInbox(block_sender)
}