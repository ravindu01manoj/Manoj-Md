/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const { scamloop } = Ravindu
Manoj.scam.start = async(core) => {
	var list = {}
	list.title = 'SCAM ACTIONS'
	list.text = '\nAvailable Fake Actions'
	list.button = 'Select!'
	list.sec = [{
		title: 'Scamming Options',
		rows: [{
			title: 'TYPING',
			rowId: 'scam typing'
		},
		{
			title: 'ONLINE',
			rowId: 'scam online'
		},
		{
			title: 'RECORDING',
			rowId: 'scam recording'
		},
		{
			title: 'STOP',
			rowId: 'scam stop'
		}
		]
	}]
	if(!core.text) {
		return await core.sendlist(list)
	}

	var callback
	if(core.text === 'typing') {
		await core.send(string().scam.scam_s.bind('TYPING'))
		scamming = true
		callback = async() => {
			await core.manoj.sendPresenceUpdate('composing', core.jid)
			await core.sleep(11000)
		}
	} else if(core.text === 'online') {
		await core.send(string().scam.scam_s.bind('ONLINE'))
		scamming = true
		callback = async() => {
			await core.manoj.sendPresenceUpdate('available', core.jid)
			await core.sleep(11000)
		}
	} else if(core.text === 'recording') {
		await core.send(string().scam.scam_s.bind('RECORDING'))
		scamming = true
		callback = async() => {
			await core.manoj.sendPresenceUpdate('recording', core.jid)
			await core.sleep(11000)
		}
	}

	if(callback?.constructor?.name === 'AsyncFunction') {
		await scamloop(callback)
	}

	if(core.text === 'stop') {
		scamming = false
		await core.send(string().scam.scam_s.bind('STOPED'))
		await core.manoj.sendPresenceUpdate('paused', core.jid)
	}
}