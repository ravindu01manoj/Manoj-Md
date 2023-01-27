/*
Manoj Md Whatsapp Bot

website: https://ravindumanoj.ml
Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/

Manoj.backup.start = async(core) => {
	if(core.input == 'key') {
		var msg_1 = await core.send('test')
		return await core.send(JSON.stringify(msg_1.key, null, 4))
	}

	if(core.input == 'test' && core.Reply?.text) {
		return await core.relay(JSON.parse(core.Reply?.text))
	}

	await core.send('*Generating Backup File...*')
	var buffer = await Backup({ create:true })
	await core.mediasend('document', buffer, 'application/octet-stream', {}, false, 'Backup.manoj', 'Manoj Multi Device Whatsapp Bot')
}

Manoj.restore.start = async(core) => {
	var data = await core.download()
	if(!data.buffer) {
		return await core.reply('*Please Reply To Backup File !*')
	}

	var bot_data = await Backup({ decode:true, buffer:data.buffer })
	if(bot_data === false) {
		return await core.reply('*Your backup file is corrupt :(*')
	}

	var is_done = await Backup({ save:true, data:bot_data })
	if(is_done === true) {
		return await core.reply('*Restored successfully !*')
	}

	return await core.reply('*Recovery failed!*')
}