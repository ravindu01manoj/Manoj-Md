/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const { Rate, GetDB } = Ravindu
const { setlistgen, stringChange, changeChange, changelistgen } = GetDB
const { rateus, addRate } = Rate
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
	if(savedata[0] === 'AliveMsg' || savedata[0] === 'Notes' || savedata[0] === 'MenuHead') {
		var rmn = patchAtext(savedata[1])
		if(!rmn.text || !rmn.img || !rmn.button || rmn.button.length == 0 || (savedata[0] == 'MenuHead' && !rmn.emoji)) {
			await core.reply(string().set.wrong)
			return await core.send(savedata[0] === 'AliveMsg' ? string().alive.msg : savedata[0] === 'Notes' ? string().notes.msg : string().menu.header)
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