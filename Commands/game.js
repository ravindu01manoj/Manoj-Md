/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/

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