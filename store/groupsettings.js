const { GroupSetting } = Ravindu
const { GroupSendMessage, textmodify, imgload, isValidObject } = GroupSetting
module.exports = async(core) => {
	if(!core.messageStubType) {
		return
	}

	const newjid = core.jid.cut('@')[0]
	switch (core.messageStubType?.type) {
	case 'add-update':
		if(dataDb.WelcomeMessageGroups && dataDb.WelcomeMessageGroups.have(newjid)) {
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
		if(dataDb.GoodByeMessageGroups && dataDb.GoodByeMessageGroups.have(newjid)) {
			if(dataDb.GoodByeMessage) {
				var config = patchAtext(dataDb.GoodByeMessage)
				if(isValidObject(config)) {
					await GroupSendMessage(core, config)
				}
			}
		}

		break
	case 'subject-update':
		if(dataDb.SubjectUpdateMessageGroups && dataDb.SubjectUpdateMessageGroups.have(newjid)) {
			if(dataDb.GroupSubjectUpdateMessage) {
				var config = patchAtext(dataDb.GroupSubjectUpdateMessage)
				if(isValidObject(config)) {
					await GroupSendMessage(core, config)
				}
			}
		}

		break
	case 'edit-update':
		if(dataDb.EditUpdateGroups && dataDb.EditUpdateGroups.have(newjid)) {
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
		if(dataDb.MuteUpdateGroups && dataDb.MuteUpdateGroups.have(newjid)) {
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
		if(dataDb.PromoteUpdateGroups && dataDb.PromoteUpdateGroups.have(newjid)) {
			if(dataDb.GroupUserPromoteMessage) {
				var config = patchAtext(dataDb.GroupUserPromoteMessage)
				if(isValidObject(config)) {
					await GroupSendMessage(core, config)
				}
			}
		}

		break
	case 'demote-update':
		if(dataDb.DemoteUpdateGroups && dataDb.DemoteUpdateGroups.have(newjid)) {
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