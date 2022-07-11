/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const { XoGame } = Ravindu
const { Game, getSession, buttonxo, makexobutton } = XoGame
/*
Manoj.xo.start = async(core) => {
	if(core.input && core.input.have('startgame') && core.input.have('/')) {
		var id = core.input.replace('startgame', '')
		var game = false
		var data = getSession('have', id, core.jid)
		if(data !== false && data.state === 'playing') {
			return await core.reply('*Please End The Old Game Frist...*')
		}

		if(data === false) {
			var ids = id.cut('/')
			game = new Game(ids[0], ids[1], ids[2] || 'easy', core.jid)
			game = game.updateName(core.name)
		} else {
			game = data.newGame().updateName(core.name)
		}

		if(game === false) {
			return
		}

		var xob = makexobutton({ game })
		var dbtn = await core.buttongen(buttonxo(game).end)
		xob.button = dbtn.button
		if(dbtn.type) {
			await core.sendbuttonimg(xob)
		} else {
			await core.sendButtonimg(xob)
		}

		if(game.turn === 'BOT') {
			game = game.updateDifficulty(id.cut('/')[2])
			await core.send('I Am Thinking....')
			if(game.difficulty == 'easy') {
				await core.sleep(500)
				game = game.easyAi()
			} else if(game.difficulty == 'hard') {
				await core.sleep(1500)
				game = game.manojExpertAI()
			}

			game = game.changeTurn()

			var xob = makexobutton({ game })
			var dbtn = await core.buttongen(buttonxo(game).end)
			xob.button = dbtn.button
			if(dbtn.type) {
				await core.sendbuttonimg(xob)
			} else {
				await core.sendButtonimg(xob)
			}
		}

		return getSession('set', game)
	}

	var O = core.Reply ? core.Reply.jid.cut(':')[0].cut('@')[0] : 'BOT'
	var X = core.sender.cut(':')[0].cut('@')[0]
	var data = { X, O, turn:X, ON:O, XN:core.name, board:'' }
	var xob = makexobutton({ game:data })
	var dbtn = await core.buttongen(buttonxo({ x:X, o:O }).start)
	xob.button = dbtn.button
	if(dbtn.type) {
		await core.sendbuttonimg(xob)
	} else {
		await core.sendButtonimg(xob)
	}

	return
}
*/