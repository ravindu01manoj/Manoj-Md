/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const { XOgame, createOrUpdateXogame } = Ravindu.XO

Manoj.xo.start = async(core) => {
	if(core.input && core.input.toLowerCase() == 'bot') {
		var list = {
			title: 'Select Difficulty',
			button: 'Difficulty',
			sec: [{
				title: 'Difficulty Levels',
				text : '\n Tic Tac Toe',
				rows: [
					{
						title: 'EASY',
						rowId: 'xo easy'
					},
					{
						title: 'NORMAL',
						rowId: 'xo normal'
					},
					{
						title: 'HARD',
						rowId: 'xo hard'
					},
				]
			}]
		}
		return await core.sendlist(list)
	}

	const withAi = core.input == 'easy' || core.input == 'normal' || core.input == 'hard'
	const secondPlayer = withAi ? 'Manoj-Ai-XO' : core.Reply ? core.decodejid(core.Reply.jid) : Array.isArray(core.mention) && core.mention[0] ? core.mention[0] : ''
	if(!secondPlayer) {
		return await core.reply('*Use Bot keyword For Play Xo With Ai Or Reply Or Mention AnyOne*')
	}

	var data = {
		players: [core.sender, secondPlayer],
		state: 'playing'
	}
	if(core.isgroup) {
		data.group = core.jid
	}

	if(withAi) {
		data.difficulty = core.input
	}

	var isCreated = createOrUpdateXogame(data)
	if(isCreated == 'playing') {
		return await core.reply('*Please Finish The Old Game Before Starting A New Game*')
	}

	var xo = new XOgame(isCreated)
	var msg = await xo.createMessage()
	await core.mediasend('image', msg.image, msg.text, {
		logo: true,
		mimetype: 'image/png'
	})
	if(xo.game.turn == 'Manoj-Ai-XO') {
		await core.sleep(500)
		await core.send('*Thinking....*')
		await core.sleep(1000)
		xo.ai()
		var msg = await xo.createMessage()
		await core.mediasend('image', msg.image, msg.text, {
			logo: true,
			mimetype: 'image/png'
		})
	}

	await xo.update()
}
