/*
Manoj Md Whatsapp Bot

website: https://ravindumanoj.ml
Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const { XOgame, createOrUpdateXogame } = Ravindu.XO
const { ChessGame, getScore, getGamePosition, createOrUpdateChessgame } = Ravindu.chess

Manoj.dice.start = Manoj.shells.start = async(core) => {
	const process = await core.reply(string().game[core.command.toLowerCase()].process)
	const files = {
		dice: ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'],
		shells: ['shell1.jpg', 'shell2.jpg', 'shell3.jpg', 'shell4.jpg', 'shell5.jpg', 'shell6.jpg', 'shell7.jpg']
	}
	const delay = [400, 600, 800, 1000, 1200, 1400]
	await core.sleep(delay.sample())
	const data = await core.bufferType('/root/image/' + files[core.command.toLowerCase()].sample())
	await core.mediasend('sticker', data.buffer, {
		type: 'image'
	})
	await core.delete(process)
}

Manoj.xo.start = async(core) => {
	if(core.input && core.input.toLowerCase() == 'bot') {
		var list = {
			text: '\n Tic Tac Toe',
			title: 'Select Difficulty',
			button: 'Difficulty',
			sec: [{
				title: 'Difficulty Levels',
				rows: [{
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
	const secondPlayer = withAi ? 'Manoj-Ai-XO' : core.isgroup ? (core.Reply ? core.decodejid(core.Reply.jid) : Array.isArray(core.mention) && core.mention[0] ? core.decodejid(core.mention[0]) : '') : core.sender === core.me ? core.jid : core.me
	if(!secondPlayer) {
		return await core.reply('*Use Bot keyword For Play Xo With Ai Or Reply Or Mention AnyOne*')
	}

	var data = {
		players: [core.sender, secondPlayer],
		group: core.jid,
		state: 'playing'
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

	 xo.update()
}

Manoj.chess.start = async(core) => {
	if(core.command == 'move') {
		var gamePosition = getGamePosition(core)
		if(gamePosition === false) {
			return await core.reply('*You Are Not Playing A Game*\n*Create New Game Using chess command*')
		}

		var chess = new ChessGame(gamePosition)
		var user = core.fromMe ? core.me : core.sender
		if(chess.turnPlayer() != user) {
			return await core.reply('*Please Wait For Your Turn*')
		}

		if(!core.input || !core.input.have('-')) {
			return await core.reply('Invalid Place.. Use Like "move from-to"\nEx: .move a2-a4')
		}

		var movement = chess.move(core.input)
		if(movement == 'Invalid') {
			return await core.reply('Invalid Movement. Use Like "move from-to"\nEx: .move a2-a4')
		}

		if(movement == 'Promotion') {
			var list = {
				title: 'Select Promotion',
				text: '\nChess Game',
				button: 'Promotion',
				sec: [{
					title: 'Promotion pieces',
					rows: ['queen', 'rook', 'bishop', 'knight'].map(piece => {
						return {
							title: piece.toUpperCase(),
							rowId: 'move ' + core.input + '-' + piece
						}
					})
				}]
			}
			return await core.sendlist(list)
		}

		if(movement == true) {
			var state = chess.checkstate()
			var message = await chess.createMessage(state)
			await core.mediasend('image', message.image, message.text, {
				logo: true,
				mimetype: 'image/png',
				thumb:true
			})
			if(state.state == 'Checkmate') {
				chess.gameover({
					winner: core.sender
				})
				return await core.send('*Game Is Over*\n\n_*Currunt Result : {} Win The Game*_\n\n*Total Result*\n```{} : {}\n{} : {}\nTie : {}```'.bind(core.sender, chess.chess.players[chess.chess.b].name.trim().replace(/\n/g, ' '), chess.chess.players[chess.chess.b].win, chess.chess.players[chess.chess.w].name.trim().replace(/\n/g, ' '), chess.chess.players[chess.chess.b].win, chess.chess.tie))

			} else if(state.state && state.state != 'Check') {
				chess.gameover({
					tie: true
				})
				return await core.send('*Game Is Over*\n\n_*Currunt Result : {}*_\n\n*Total Result*\n```{} : {}\n{} : {}\nTie : {}```'.bind('Draw', chess.chess.players[chess.chess.b].name.trim().replace(/\n/g, ' '), chess.chess.players[chess.chess.b].win, chess.chess.players[chess.chess.w].name.trim().replace(/\n/g, ' '), chess.chess.players[chess.chess.b].win, chess.chess.tie))
			}

			if(chess.turnPlayer() == 'Manoj-Ai-Chess') {
				await core.send('*Thinking....*')
				await core.sleep(1300)
				var movement = chess.Ai()
				await core.send('*Moving From ' + movement.from + ' To ' + movement.to + '*')
				var state = chess.checkstate()
				var message = await chess.createMessage(state)
				await core.mediasend('image', message.image, message.text, {
					logo: true,
					mimetype: 'image/png',
					thumb:true
				})
				if(state.state == 'Checkmate') {
					chess.gameover({
						winner: core.sender
					})
					return await core.send('*Game Is Over*\n\n_*Currunt Result : {} Win The Game*_\n\n*Total Result*\n```{} : {}\n{} : {}\nTie : {}```'.bind(core.sender, chess.chess.players[chess.chess.b].name.trim().replace(/\n/g, ' '), chess.chess.players[chess.chess.b].win, chess.chess.players[chess.chess.w].name.trim().replace(/\n/g, ' '), chess.chess.players[chess.chess.b].win, chess.chess.tie))

				} else if(state.state && state.state != 'Check') {
					chess.gameover({
						tie: true
					})
					return await core.send('*Game Is Over*\n\n_*Currunt Result : {}*_\n\n*Total Result*\n```{} : {}\n{} : {}\nTie : {}```'.bind('Draw', chess.chess.players[chess.chess.b].name.trim().replace(/\n/g, ' '), chess.chess.players[chess.chess.b].win, chess.chess.players[chess.chess.w].name.trim().replace(/\n/g, ' '), chess.chess.players[chess.chess.b].win, chess.chess.tie))
				}
			}

			return chess.update()
		}
	}

	if(core.input && core.input.toLowerCase() == 'bot') {
		var list = {
			text: '\n Chass Game',
			title: 'Select Difficulty',
			button: 'Difficulty',
			sec: [{
				title: 'Difficulty Levels',
				rows: [{
					title: 'VERY EASY',
					rowId: 'chess veasy'
				}, {
					title: 'EASY',
					rowId: 'chess easy'
				},
				{
					title: 'NORMAL',
					rowId: 'chess normal'
				},
				{
					title: 'HARD',
					rowId: 'chess hard'
				}
				]
			}]
		}
		return await core.sendlist(list)
	}

	if(core.input == 'exit') {
		var gamePosition = getGamePosition(core)
		if(gamePosition === false) {
			return await core.reply('*Game Not Found*')
		}

		var chess = new ChessGame(gamePosition)
		chess.gameover({
			lose: core.sender
		})
		return await core.reply(core.name + ' *is Left The Game*')
	}

	if(core.input == 'score') {
		var scoreMessage = getScore(core)
		return await core.reply(scoreMessage)
	}

	if(core.input == 'help') {
		return await core.reply(
			`*Chess Game Guidline*\n\n\`\`\`If We Think The Prefix Is .\n
.chess - Reply Someone To Start A New Game
.chess bot - Play Chess With Ai Bot
.chess exit - If You Need To Exit The Game Use This Command.. But Opponent is win the game
.chess score - It's Will Shows Your Full Score Sheet\n
Movement \n
.move - Use This Command For Move Pieces
usage : .move From currunt Place- New Place.. 
ex : .move a2-a4\n
How To Identify A Place\n
Watch The Board its named a-h(columns) And 1-8(rows)
1 White Pown place is a2(frist column is 'a' And Second row is '2')
\`\`\`\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀɴᴏᴊ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡᴀ-ʙᴏᴛ*`)
	}

	const withAi = core.input == 'veasy' || core.input == 'easy' || core.input == 'normal' || core.input == 'hard'
	const secondPlayer = withAi ? 'Manoj-Ai-Chess' : core.isgroup ? (core.Reply ? core.decodejid(core.Reply.jid) : Array.isArray(core.mention) && core.mention[0] ? core.decodejid(core.mention[0]) : '') : core.sender === core.me ? core.jid : core.me
	if(!secondPlayer) {
		return await core.reply('*Reply Or Mention AnyOne To Play Chess or Use (.chess bot) For Play With Ai Bot*')
	}

	var data = {
		players: [core.sender, secondPlayer],
		group: core.jid,
		state: 'playing'
	}
	if(withAi) {
		data.difficulty = core.input
	}

	var isCreated = createOrUpdateChessgame(data)
	if(isCreated == 'playing') {
		return await core.reply('*Please Finish The Old Game Before Starting A New Game*\n_If You Need To exit Old Game It use_ *chess exit*\nOr Continue the game using *move* command')
	}

	var chess = new ChessGame(isCreated)
	var state = chess.checkstate()
	var msg = await chess.createMessage(state)
	await core.mediasend('image', msg.image, msg.text, {
		logo: true,
		mimetype: 'image/png',
		thumb:true
	})
	return chess.update()
}
