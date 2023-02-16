const axios = require('axios')
var Api_url = 'https://api-ravindumanoj.ml/'

Manoj.chatgpt.start = async(core) => {
	if(core.text == 'new') {
		chatgpt_session(core, 'new')
		return await core.reply('New Chat Started')
	}

	var ids = chatgpt_session(core, 'get')
	try {
		var data = await axios({
			method: 'POST',
			url : Api_url,
			data : {
				api:process.env.Ravindu_Manoj_Api,
				code: 'chatgpt',
				text: core.text,
				...ids
			}
		})
		if(data.data.code != 200) {
			return await core.reply('Invalid Request ' + data.data.error)
		}

		chatgpt_session(core, 'set', data.data.results)
		await core.reply('*From OpenAi ChatGPT*\n```\n' + data.data.results.ai_respond + '\n```\n*POWERED BY MANOJ MULTI DEVICE WA_BOT*')
	} catch(e) {
		await core.reply('*I Can Not Connect With OpenAi ChatGPT*')
	}
}