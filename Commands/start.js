/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const { BootBot } = Ravindu

Manoj.shutdown.start = async(core) => {
	BootBot('shutdown')
	await core.send(string().start.shutdown.done)
}

Manoj.start.start = async(core) => {
	await core.send(string().start.start.boot)
	BootBot('start')
	await core.send(string().start.start.done)
}