/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const { Rate, GetDB, GroupSetting } = Ravindu
const { setlistgen, stringChange, changeChange, changelistgen, chatsettings, removechatslist, removestickercmdlist, addStickerCommand, removestickercmd } = GetDB
const { rateus, addRate } = Rate
const { isValidObject } = GroupSetting
const msgs = ['TEXT KEYWORDS\n' + readmore + '\n#group_name\n#member_count\n#group_description\n#group_owner\n#group_id\n#added_by\n#removed_by\n#joined_number\n#left_user\n#admin', 'Text Message Example ' + readmore + '\n{type:text}\n\n{text:Hello Example Text\n#group_owner}', 'Image Message Example' + readmore + '\n{type:img}\n\n{img:https://example.com/example.jpg}\nuse direct url or gp_dp or my_dp or user_dp\n\n{text:Hello Example Text\n#group_name}', 'Video Message Example' + readmore + '\n{type:video}\n\n{video:https://example.com/example.mp4}\nuse direct url or gpdp or mydp or userdp\n\n{text:Hello Example Text\n#group_name}', 'Button Image Message Example' + readmore + '{type:button}\n\n{text:Hello Example Text\n#group_name}\n\nUrl Buttons\n{url:GO TO URL|https://github.com/ravindu01manoj}\n{url:SUBSCRIBE YOUTUBE|https://youtube.com/c/TechToFuture}\n\nButtons\n{button:RATE US|rate}\n{button:NOTES|notes}\n{button:COMMANDS|help}\n\nImage (Use Direct Url Or user_dp Or my_dp Or group_dp)\n{img:https://telegra.ph/file/1d7da58e35215ed3336c5.jpg}\n']

Manoj.cmd.start = async(core) => {
	var {
		text,
		img,
		emoji,
		button
	} = patchAtext(dataDb.MenuHead || string().menu.header)
	if(!core.input) {
		var category = []
		Commands.map(command => {
			if(command.category && command.category !== 'non') {
				category.push(command.category)
			}
		})
		category = category.fix().fixDuplicate()
		var list = {}
		list.title = ''
		list.text = text.setup(core)
		list.button = 'Select'
		list.sec = makemenulist(category)
		return await core.sendlist(list)
	} else {
		var command_list = text.setup(core) + '\n\n\n'
		emoji = emoji.cut('/')
		command_filter = (Commands.map(command => {
			if(command.category === core.input) {
				return command
			}
		})).fix()
		command_filter.map(cmd => {
			command_list += cmd.command[0] ? emoji[0] + string().menu.command + Pfix + cmd.command[0] + '\n' + (cmd.desc ? emoji[1] + string().menu.desc + cmd.desc + '\n' : '') + (cmd.help ? emoji[2] + string().menu.help + cmd.help + '\n\n' : '\n') : ''
		})
		var msg = {}
		msg.img = img
		msg.text = command_list
		var dbtn = await core.buttongen(button)
		msg.button = dbtn.button
		if(dbtn.type) {
			return await core.sendbuttonimg(msg)
		}

		return await core.sendButtonimg(msg)
	}
}

Manoj.set.start = async(core) => {
	if(!core.input || !core.input.have('/ma-noj/')) {
		if(!core.Reply || !core.Reply.message) {
			return await core.reply(string().set.need)
		}

		var list = {}
		list.title = ''
		list.text = string().set.listT
		list.button = 'Change'
		list.sec = await setlistgen(core.Reply.message)
		return await core.sendlist(list)
	}

	var savedata = core.input.replace(/#n-#/g, '\n').cut('/ma-noj/')
	if('AliveMsg,Notes,MenuHead'.have(savedata[0])) {
		var rmn = patchAtext(savedata[1])
		if(!rmn.text || !rmn.img || !rmn.button || rmn.button.length == 0 || (savedata[0] == 'MenuHead' && !rmn.emoji)) {
			await core.reply(string().set.wrong)
			return await core.send(savedata[0] === 'AliveMsg' ? string().alive.msg : savedata[0] === 'Notes' ? string().notes.msg : string().menu.header)
		}
	}

	if('WelcomeMessage,GoodByeMessage,GroupSubjectUpdateMessage,GroupLockUpdateMessage,GroupUnLockUpdateMessage,GroupMuteUpdateMessage,GroupUnMuteUpdateMessage,GroupUserPromoteMessage,GroupUserDemoteMessage'.have(savedata[0])) {
		var config = patchAtext(savedata[1])
		if(!isValidObject(config)) {
			await core.reply(string().set.wrong)
			for(ms of msgs) {
				await core.reply(ms)
			}

			return
		}
	}

	var save = await stringChange({
		[savedata[0]]: savedata[1]
	})
	if(save === true) {
		return await core.send(string().set.done.bind(savedata[0]))
	}

	return await core.send(string().set.error)
}

Manoj.change.start = async(core) => {
	if(!core.input || !core.input.have('/ma-noj/')) {
		var list = {}
		list.title = ''
		list.text = '\n*Change Selectors Value*\n\n'
		list.button = 'Change'
		list.sec = await changelistgen()
		return await core.sendlist(list)
	}

	var savedata = core.input.cut('/ma-noj/')
	var save = await changeChange({
		[savedata[0]]: savedata[1]
	})
	if(save === true) {
		return await core.send(string().set.done.bind(savedata[0]))
	}

	return await core.send(string().set.error)
}

Manoj.welcomejid.start = Manoj.goodbyejid.start = Manoj.upsubjid.start = Manoj.upeditjid.start = Manoj.upmutejid.start = Manoj.uppromotejid.start = Manoj.updemotejid.start = Manoj.superchat.start = Manoj.banchat.start = Manoj.superuser.start = async(core) => {
	var data = await chatsettings(core)
	if(data.suc === true) {
		return await core.reply(string().chat_settings.done.bind(data.chat, data.code))
	}

	if(data.suc === false) {
		if(data.res === 'owner') {
			return await core.reply(string().chat_settings.owner)
		}

		if(data.res === 'group') {
			return await core.reply(string().chat_settings.need)
		}

		if(data.res === 'SuperChat') {
			return await core.reply(string().chat_settings.superchat)
		}

		if(data.res === 'BannedChat') {
			return await core.reply(string().chat_settings.banchat)
		}
	}
}

Manoj.remove.start = async(core) => {
	if(core.input && core.input.have('/-/')) {
		var d = core.input.cut('/-/')
		var data = await stringChange({ [d[0]]:d[1] }, 'remove')
		if(data) {
			await core.reply(string().chat_settings.removed.bind(d[1], d[0]))
		}

		return
	}

	var sec = await removechatslist()
	if(!sec) {
		return await core.reply('No-Chats')
	}

	var list = {}
	list.title = ''
	list.text = '\n*Remove Chats From,*\n\n   *SuperUser*\n   *SuperChat*\n   *BannedChat*\n   *WelcomeMessageGroups*\n   *GoodByeMessageGroups*\n   *SubjectUpdateMessageGroups*\n   *EditUpdateGroups*\n   *MuteUpdateGroups*\n   *PromoteUpdateGroups*\n   *DemoteUpdateGroups*\n\n'
	list.button = 'Remove'
	list.sec = sec
	return await core.sendlist(list)
}

Manoj.stickcmd.start = async(core) => {
	if(!core.Reply || !core.Reply.sticker) {
		return await core.reply(string().stick_cmd.need)
	}

	if(!core.input) {
		return await core.reply(string().stick_cmd.needc)
	}

	var added = await addStickerCommand(core.input, core.Reply.codeid)
	if(added) {
		return await core.reply(string().stick_cmd.done.bind('.' + core.input))
	}
}

Manoj.rmstickcmd.start = async(core) => {
	if(core.input && core.input.have('remove/-/')) {
		var d = core.input.cut('/-/')[1]
		var data = await removestickercmd(d)
		if(data) {
			await core.reply(string().stick_cmd.rem_done.bind(d))
		}

		return
	}

	var sec = await removestickercmdlist()
	if(!sec) {
		return await core.reply(string().stick_cmd.rem_no)
	}

	var list = {}
	list.title = ''
	list.text = '\n*Stricker Command List.*\n\n*Select A Row For Remove From The List*\n\n'
	list.button = 'Remove'
	list.sec = sec
	return await core.sendlist(list)
}

Manoj.alive.start = async(core) => {
	var {
		text,
		img,
		button
	} = patchAtext(dataDb.AliveMsg || string().alive.msg)
	var msg = { img, text:text.setup(core) }
	var dbtn = await core.buttongen(button)
	msg.button = dbtn.button
	if(dbtn.type) {
		return await core.sendbuttonimg(msg)
	}

	return await core.sendButtonimg(msg)
}

Manoj.notes.start = async(core) => {
	await core.reply(string().notes.start)
	var {
		text,
		img,
		button
	} = patchAtext(dataDb.Notes || string().notes.msg)
	var msg = { img, text:text.setup(core) }
	var dbtn = await core.buttongen(button)
	msg.button = dbtn.button
	if(dbtn.type) {
		return await core.sendbuttonimg(msg)
	}

	return await core.sendButtonimg(msg)
}

Manoj.rate.start = async(core) => {
	var israte = await addRate(core.input, core.fromMe)
	if(israte) {
		return core.reply(string().rate.done)
	}

	var rates = rateus()
	var list = {}
	list.title = ''
	list.text = rates.rate
	list.button = '🏆 RATE US!'
	list.sec = rates.list
	return await core.sendlist(list)
}