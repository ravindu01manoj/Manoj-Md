/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const { WithAllModule, XoGame, GroupSetting } = Ravindu
const { GroupSendMessage, textmodify, imgload, isValidObject } = GroupSetting
const { xoturn } = XoGame
const { sendReaction, autovoice, autosticker, AiChatBot, botRemove, groupLinkRemove, antiSpamRemove, antidelete, autobadwordkick, autoinboxblock } = WithAllModule

Manoj.z_note.start = async(core) => {
	if(core.data.message) {
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

	if(core.messageStubType === false) {
		return
	}

	switch (core.messageStubType.type) {
	case 'add-update':
		if(dataDb.WelcomeMessageGroups && dataDb.WelcomeMessageGroups.have(core.jid)) {
			if(dataDb.WelcomeMessage) {
				var config = patchAtext(dataDb.WelcomeMessage)
				if(isValidObject(config)) {
					await GroupSendMessage(core, config)
				}
			}
		}

		break
	case 'kick-update':
	case 'left-update':
		if(dataDb.GoodByeMessageGroups && dataDb.GoodByeMessageGroups.have(core.jid)) {
			if(dataDb.GoodByeMessage) {
				var config = patchAtext(dataDb.GoodByeMessage)
				if(isValidObject(config)) {
					await GroupSendMessage(core, config)
				}
			}
		}

		break
	case 'subject-update':
		if(dataDb.SubjectUpdateMessageGroups && dataDb.SubjectUpdateMessageGroups.have(core.jid)) {
			if(dataDb.GroupSubjectUpdateMessage) {
				var config = patchAtext(dataDb.GroupSubjectUpdateMessage)
				if(isValidObject(config)) {
					await GroupSendMessage(core, config)
				}
			}
		}

		break
	case 'edit-update':
		if(dataDb.EditUpdateGroups && dataDb.EditUpdateGroups.have(core.jid)) {
			if(core.messageStubType.about === 'only-admin' && dataDb.GroupLockUpdateMessage) {
				var config = patchAtext(dataDb.GroupEditUpdateMessage)
				if(isValidObject(config)) {
					await GroupSendMessage(core, config)
				}
			}

			if(core.messageStubType.about === 'all-participant' && dataDb.GroupUnLockUpdateMessage) {
				var config = patchAtext(dataDb.GroupUnLockUpdateMessage)
				if(isValidObject(config)) {
					await GroupSendMessage(core, config)
				}
			}
		}

		break
	case 'mute-update':
		if(dataDb.MuteUpdateGroups && dataDb.MuteUpdateGroups.have(core.jid)) {
			if(core.messageStubType.about === 'only-admin' && dataDb.GroupMuteUpdateMessage) {
				var config = patchAtext(dataDb.GroupMuteUpdateMessage)
				if(isValidObject(config)) {
					await GroupSendMessage(core, config)
				}
			}

			if(core.messageStubType.about === 'all-participant' && dataDb.GroupUnMuteUpdateMessage) {
				var config = patchAtext(dataDb.GroupUnMuteUpdateMessage)
				if(isValidObject(config)) {
					await GroupSendMessage(core, config)
				}
			}
		}

		break
	case 'promote-update':
		if(dataDb.PromoteUpdateGroups && dataDb.PromoteUpdateGroups.have(core.jid)) {
			if(dataDb.GroupUserPromoteMessage) {
				var config = patchAtext(dataDb.GroupUserPromoteMessage)
				if(isValidObject(config)) {
					await GroupSendMessage(core, config)
				}
			}
		}

		break
	case 'demote-update':
		if(dataDb.DemoteUpdateGroups && dataDb.DemoteUpdateGroups.have(core.jid)) {
			if(dataDb.GroupUserDemoteMessage) {
				var config = patchAtext(dataDb.GroupUserDemoteMessage)
				if(isValidObject(config)) {
					await GroupSendMessage(core, config)
				}
			}
		}

		break
	default:
		return
	}
}