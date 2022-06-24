/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const {
	WithAllModule,
	XoGame
} = Ravindu
const {
	xoturn
} = XoGame
const {
	sendReaction,
	autovoice,
	autosticker,
	AiChatBot,
	botRemove,
	groupLinkRemove,
	antiSpamRemove,
	antidelete
} = WithAllModule

WithAll.start = {
	OnlyTextForMe : async(core) => {
		await sendReaction(core)
	},
	OnlyTextForAll : async(core) => {
		await xoturn(core)
		await autovoice(core)
		await autosticker(core)
		await AiChatBot(core)
	},
	AllInputForAll: async(core) => {
		await botRemove(core)
		await groupLinkRemove(core)
		await antiSpamRemove(core)
		await antidelete(core)
	}
}