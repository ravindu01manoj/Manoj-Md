/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const { WithAllModule, XoGame } = Ravindu
const { xoturn } = XoGame
const { sendReaction, autovoice, autosticker, AiChatBot, botRemove, groupLinkRemove, antiSpamRemove, antidelete, autobadwordkick, autoinboxblock } = WithAllModule

Manoj.z_note.start = async(core) => {
	if(core.fromMe || owner.have(core.sender.cut('@')[0])) {
		await Try(sendReaction, core)
	}

	if(!core.fromMe) {
		await Try(botRemove, core)
		await Try(groupLinkRemove, core)
		await Try(antiSpamRemove, core)
		await Try(antidelete, core)
		if(core.message) {
			await Try(xoturn, core)
			await Try(autobadwordkick, core)
			await Try(autoinboxblock, core)
			await Try(autovoice, core)
			await Try(autosticker, core)
			await Try(AiChatBot, core)
		}
	}
}