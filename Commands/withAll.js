/*
Manoj Md Whatsapp Bot

website: https://ravindumanoj.ml
Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
var { ravindumanoj_api_key } = require('../Details.js')
var Api_url = 'https://api-ravindumanoj.ml/'
const { WithAllModule, XO } = Ravindu
const { xoturncatch } = XO
const { set_up_module, sendReaction, antiviweonce, autovoice, voiceAi, autosticker, AiChatBot, botRemove, groupLinkRemove, antiSpamRemove, antidelete, autobadwordkick, autoinboxblock } = WithAllModule

Manoj.z_note.start = async(core) => {
	if(!core.fromMe && owner.have(core.sender.cut('@')[0])) {
		await Try(sendReaction, core)
	}

	await Try(set_up_module, core)
	await Try(voiceAi, core)
	if(!core.fromMe) {
		await Try(botRemove, core)
		await Try(groupLinkRemove, core)
		await Try(antiSpamRemove, core)
		await Try(antidelete, core)
		if(core.message) {
			await Try(xoturncatch, core)
			await Try(antiviweonce, core)
			await Try(autobadwordkick, core)
			await Try(autoinboxblock, core)
			await Try(autovoice, core)
			await Try(autosticker, core)
			await Try(AiChatBot, core)
		}
	}
}