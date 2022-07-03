/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
return
const Analyze = require('./store/Analyze')
const Super = require('./store/base/types')
const {
	connectDb
} = require('./store/db/connect')

async function startManojMdWhatsappBot() {
	var condb = RaviCLI.loder('Loging To DataBase...'),
		isconnect = await connectDb(condb, process.env.DBURI || false),
		session_update = await decryptManojMultiDeviceSession(process.env.SESSION || false)
	await sleep()
	var condc = RaviCLI.loder('Updating DataBase...'),
		isupdated = await database.update()
	if(session_update && isupdated) {
		condc.succeed('Database Updated Successfull')
		var cm = RaviCLI.loder('Installing Commands...')
		fs.readdirSync('./Commands').forEach(m => {
			if(m.end('.js')) {
				require('./Commands/' + m)
			}
		})
		const commands = new AnalyzeCommands(Manoj)
		await commands.install()
		cm.succeed('Installation Successfull...')
		await startManojMultiDevice()
	} else {
		throw new Error('Your Session Is Invalid... Please Rescan And Update The ENV ( https://ravindu01manoj.github.io/ravindu01manoj/qr )')
	}
}

startManojMdWhatsappBot()
