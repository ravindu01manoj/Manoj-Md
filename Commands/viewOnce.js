/*
Manoj Md Whatsapp Bot

website: https://ravindumanoj.ml
Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/


Manoj.antivo.start = async(core) => {
	var data = await core.download()
	if(data.buffer && (data.type == 'image' || data.type == 'video') && core.moredata.isviweOnce) {
		await core.reply(string().viweOnce.doing)
		return await core.mediasend(data.type, data.buffer, '' + data.cap)
	}

	return await core.reply(string().viweOnce.need)
}