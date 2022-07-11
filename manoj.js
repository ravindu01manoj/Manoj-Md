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
	console.log('🌏 Loging To DataBase...')
	var isconnect = await connectDb(process.env.DBURI || false)
	if(isconnect === true) {
		console.log('✅ Successfully Connected Your Database')
		var session_update = await decryptManojMultiDeviceSession(process.env.SESSION || false)
		console.log('📝 Updating DataBase...')
		var isupdated = await database.update()
		if(session_update && isupdated) {
			console.log('✅ Database Updated Successfull')
			console.log('🌐 Installing Commands...')
			var folder = fs.readdirSync('./Commands').fix()
			for(file of folder) {
				if(file.end('.js')) {
					require('./Commands/' + file)
				}
			}

			const commands = new AnalyzeCommands(Manoj)
			await commands.install()
			console.log('✅ Installation Successfull...')
			await startManojMultiDevice()
		} else {
			throw new Error('Your Session Is Invalid... Please Rescan And Update The ENV ( https://ravindu01manoj.github.io/ravindu01manoj/qr )')
		}
	} else {
		throw new Error('Your Database Url Is Invalid... Please Input Valid Mongodb Database Url As env [DBURI]')
	}
}

startManojMdWhatsappBot()
