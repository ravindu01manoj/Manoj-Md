/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
const { load } = require('../store/manoj/')
const { ipDetect } = Ravindu

Manoj.news.start = async(core) => {
	if(!core.text) {
		return await core.reply(string().news.news.need)
	}

	try {
		const web = await core.webdata(string().news.news.api.replace('{a}', core.text))
		if(web) {
			let msg = string().news.news.title.bind(core.text)
			web.data.map(async news => {
				if(news.title && news.content && news.readMoreUrl) {
					msg += string().news.news.msg.bind(news.title, news.content, news.readMoreUrl)
				}
			})
			return await core.reply(msg)
		}
	} catch{
		return await core.reply(string().news.news.err)
	}
}

Manoj.show.start = async(core) => {
	if(!core.text) {
		return await core.reply(string().news.show.need)
	}

	try {
		const web = await core.webdata(string().news.show.api.replace('{a}', core.text))
		const sw = web[0].show
		await core.mediasend('image', sw.image.original, string().news.show.msg.bind(sw.name, sw.type, sw.status, sw.summary, sw.officialSite))
	} catch{
		await core.reply(string().news.show.err)
	}
}

Manoj.movie.start = async(core) => {
	if(!core.text) {
		return await core.reply(string().news.film.need)
	}

	const web = await core.webdata(string().news.film.api.replace('{a}', core.text))
	if(!web) {
		return await core.reply(string().news.show.err)
	}

	await core.reply(string().news.film.msg.bind(
		web.Title, web.Year, web.Rated, web.Released, web.Runtime, web.Genre, web.Director,
		web.Writer, web.Actors, web.Plot, web.Language, web.Country, web.Awards, web.BoxOffice,
		web.Production, web.imdbRating, web.imdbVotes))
}

Manoj.ip.start = async(core) => {
	if(!core.input) {
		return await core.reply(string().news.ip.need)
	}

	const web = await ipDetect(core.input)
	if(web) {
		return core.reply(string().news.ip.msg.bind(web.ip.ip, web.ip.version, web.ip.continent_code, web.ip.country_name, web.ip.country_code, web.ip.country_code_iso3, web.ip.country_capital, web.ip.country_tld, web.ip.country_area, web.ip.country_population, web.ip.region, web.ip.region_code, web.ip.city, web.ip.postal, web.ip.languages, web.ip.currency, web.ip.currency_name, web.network.name, web.network.net_set[0], web.network.website, web.network.created.cut('T')[0]))
	}

	return await core.reply(string().news.show.err)
}

Manoj.neko.start = async(core) => {
	if(!core.text) {
		return await core.reply(string().download.needt)
	}

	try {
		const response = await load.post(string().nekobin.site, { json: { content: core.text } })
		data = JSON.parse(response.body)
		await core.reply(string().nekobin.msg.bind(data.result.key))
	} catch(err) {
		await core.reply(string().nekobin.err)
	}
}

Manoj.weather.start = async(core) => {
	if(!core.text) {
		return await core.reply(string().weather.need)
	}

	try {
		const web = await core.webdata(string().weather.api.replace('{c}', core.text))
		if(web) {
			return await core.send(string().weather.text
				.replace('{a}', core.text + ' - ' + web.sys.country)
				.replace('{b}', web.main.temp_max)
				.replace('{c}', web.weather[0].description)
				.replace('{d}', web.main.humidity)
				.replace('{e}', web.wind.speed)
				.replace('{f}', web.clouds.all))
		}
	} catch{
		return await core.send(string().weather.err)
	}
}


