/*
Manoj Md Whatsapp Bot

Telegram: https://t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Youtube: https://youtube.com/c/TechToFuture

Coded By Ravindu Manoj
*/
var string = {
	manoj: {
		Status: 200,
		Code: 'Ravindu Manoj',
		lang: {
			code: 'SI',
			Author: 'Ravindu Manoj'
		},
		file: 'Sinhala',
		Country: 'Sri Lanka',
		FileSize: '*මෙම ගොනුවේ ප්‍රමාණය 100 mb ට වඩා වැඩි බැවින් මට මෙම ගොනුව උඩුගත කල නොහැක* {}',
		admin: {
			need_admin: '*මම මෙම සමූහයේ පරිපාලක නොවේ!️*',
			need_us: '*සාමාජිකයෙකු අවශ්‍යයි...!*',
			kick: {
				desc: 'කණ්ඩායමේ සිටින කෙනෙකු, සියලු, පොදු සහ වෙනස් සාමාජිකයන් ඉවත් කරන්න',
				help: '.kick all හෝ .kick comm/දෙවන කණ්ඩායම් jid හෝ .kick diff/දෙවන කණ්ඩායම් jid හෝ සාමාජිකයෙකුට .kick සමඟින් පිළිතුරු දෙන්න',
				all: '*සාමාජිකයින් ඉවත් කිරීම...!*',
				all_r: '*සාමාජිකයින් සාර්ථකව ඉවත් කර ඇත...*',
				kicked: ' *මෙම කණ්ඩායමෙන් ඉවත්කර ඇත!*',
				join: '*මට දෙවන කණ්ඩායමේ දත්ත වලට ප්‍රවේශ විය නොහැක...බොට් දෙවන කණ්ඩායමේ සිටීද?*'
			},
			add: {
				desc: 'කණ්ඩායමට කෙනෙකු එකතු කරයි.',
				invalid: '*කරුණාකර වලංගු Whatsapp අංකය ඇතුළත් කරන්න!*',
				added: ' *සමූහයට එකතු කළා!*'
			},
			promote: {
				desc: 'ඕනෑම පුද්ගලයෙක් පරිපාලකයෙකු කරයි.',
				admin: '*දැනටමත් පරිපාලකයෙකු වන කෙනෙකුව මම පරිපාලක කරන්නේ කෙසේද?*',
				done: '*{}, පරිපාලක භූමිකාව ලබා දී ඇත!*'
			},
			demote: {
				desc: 'ඕනෑම පරිපාලකයෙකුගේ බලය ගනී.',
				admin: '*අවශ්‍ය නොවේ...දැනටමත් ඔහු පරිපාලකයෙක් නොවේ*',
				done: '*{}, පහත හෙළා ඇත!*'
			},
			gpdesc: {
				desc: 'සමූහ විස්තරය යාවත්කාලීන කරන්න',
				need: '*විස්තරය සඳහා ඇතුලත් කිරීමක් අවශ්‍යයි*',
				up: '*සමූහ විස්තරය යාවත්කාලීන කිරීම*',
				upd: '*සාර්ථකව යාවත්කාලීන කරන ලදී:*\n{}'
			},
			gpsub: {
				desc: 'කණ්ඩායම් මාතෘකාව යාවත්කාලීන කරන්න',
				need: '*මාතෘකාව සඳහා ඇතුලත් කිරීමක් අවශ්‍යයි*',
				up: '*කණ්ඩායම් මාතෘකාව යාවත්කාලීන කිරීම*',
				upd: '*සාර්ථකව යාවත්කාලීන කරන ලදී:*\n{}'
			},
			gpdp: {
				desc: 'සමූහ සංදර්ශක පින්තූරය යාවත්කාලීන කරන්න',
				need: '*ප්‍රදර්ශණ පින්තූරය සඳහා රූපයක් අවශ්‍යයි*',
				up: '*සමූහ සංදර්ශක පින්තූරය යාවත්කාලීන කිරීම*',
				upd: '*සාර්ථකව යාවත්කාලීන කරන ලදී*'
			},
			invite: {
				desc: 'කණ්ඩායමේ ආරාධනා සබැඳිය සපයයි.',
				link: '*ආරාධනා සබැඳිය: https://chat.whatsapp.com/{}*'
			},
			mute: {
				desc: 'සමූහ කතාබස් නිශ්ශබ්ද කරන්න. පණිවිඩයක් යැවිය හැක්කේ පරිපාලකයින්ට පමණි.',
				done: '*සමූහ කතාබස් නිහඬ කර ඇත!*'
			},
			unmute: {
				desc: 'සමූහ කතාබස් විවෘත කරන්න. ඕනෑම කෙනෙකුට පණිවිඩයක් යැවිය හැක.',
				done: '*සමූහ කතාබස් විවෘත කර ඇත!*'
			},
			lock: {
				desc: 'සමූහය අගුළු දමන්න. සමූහ තොරතුරු සංස්කරණය කළ හැක්කේ පරිපාලකයින්ට පමණි',
				done: '*සමූහය අගුළු දමා ඇත!*'
			},
			unlock: {
				desc: 'සමූහය අගුළු හරින්න. ඕනෑම කෙනෙකුට කණ්ඩායම් තොරතුරු සංස්කරණය කළ හැක',
				done: '*සමූහය අගුලු හරින ලදී!*'
			},
			revoke: {
				desc: 'සමූහ සබැඳිය වෙනස් කරන්න',
				help: '.revoke හෝ .revoke link',
				done: '*කණ්ඩායම ලින්කුව වෙනස් කරන ලදී*\n*නව සබැඳිය: {}*'
			}
		},
		age : {
			desc: 'උපන් දිනයේ සිට ඔබේ වයස ගණනය කරන්න',
			need: '*ඔබේ උපන්දිනය සමඟ ඇතුළත් කරන්න*',
			future: '*අනාගත බබෙකුගේ වයස මම ගණනය කරන්නේ කෙසේද..?*',
			wrong: '*වැරදි වයස(yyyy-mm-dd) ආකෘතිය...*',
			msg: '*වයස ගණනය කිරීම*\n\n*වයස:- අවුරුදු {}, මාස {}, සහ දින {}*\n*මාස:- ඔබේ උපතේ සිට මාසය {}*\n*දින:- ඔබේ උපන් දින සිට දින {}*\n*පැය:- ඔබේ උපතේ සිට පැය {}*\n*මිනිත්තු:- ඔබේ උපතේ සිට මිනිත්තු {}*\n*තත්පර:- ඔබේ උපතේ සිට තත්පර {}*\n\n*ඊළඟ:- ඔබේ ඊළඟ උපන්දිනයට {} දින ඉතිරිව ඇත*'
		},
		alive : {
			desc: 'බොට්ගෙ Alive පණිවිඩය',
			msg : 'ආරම්බය\n{start:alive}\n\nපණිවිඩය ඇතුලත් කරන්න..(මූලපද: #rate #device #rule)\n'
                   + '{text:*Hi! #user*\n\nI Am #myname\n\nBot Status: Alive\n\n}\n\n'
                   + 'Url බොත්තම්\n'
                   + '{url:GO TO URL|https://github.com/ravindu01manoj}\n'
                   + '{url:SUBSCRIBE YOUTUBE|https://youtube.com/c/TechToFuture}\n\n'
                   + 'බොත්තම්\n'
                   + '{button:RATE US|rate}\n'
                   + '{button:NOTES|notes}\n'
                   + '{button:COMMANDS|help}\n\n'
                   + 'රූපයයක් ඇතුලත් කරන්න (සෘජු Url හෝ pp හෝ my_dp හෝ group_dp භාවිතා කරන්න)\n'
                   + '{img:https://telegra.ph/file/1d7da58e35215ed3336c5.jpg}\n',
		},
		antispam: {
			text: 'ᴀɴᴛɪ ꜱᴘᴀᴍ ᴄʟᴇᴀʀ ʀᴇʙᴀɴ',
			reply: '❉ ආරක්ෂක ප්‍රකාරය සක්‍රිය කරමින්........'
		},
		apk: {
			desc: 'Playstore වෙතින් Apk ඩවුන්ලෝඩ් කරගන්න',
			used: 'apk https://play.google.com/store/apps/details?id=com.whatsapp',
			need: '*Playstore යෙදුම් Url අවශ්‍යයි*',
			novalid: '*කරුණාකර වලංගු Url ඇතුලත් කරන්න!*',
			notfound: '*අයදුම්පත් බාගත කිරීමේ Url හමු නොවීය..!*',
			download: '*ඔබේ APK ඩවුන්ලෝඩ් කෙරේ!*',
			upload: '*ඔබගේ APK අප්ලෝඩ් කෙරේ!*',
			info: '*නම: {}*\n\n*ගැන: {}*\n\n*අනුවාදය: {}*\n\n*වර්ගය: {}*\n\n*ශ්‍රේණිගත කිරීම: {}*\ n\n*ශ්‍රේණිගත කිරීම්: {}*\n\n*අන්තර්ගත ඇගයීම: {}*\n\n*සංවර්ධක: {}*\n\n*ස්ථාපන: {}*\n\n*අලුත් දේ: {} *\n\n*විස්තරය:* ```{}```'
		},
		apks: {
			desc: 'Playstore වෙතින් Apk සොයන්න',
			used: 'playstore whatsapp',
			need: '*ඕනෑම අයදුම්පත් නමක් අවශ්‍යයි*',
			sec: 'සියලු ප්‍රතිඵල!*',
			notfound: '*යෙදුම් දත්ත හමු නොවිණි..!*',
			load: '*APK දත්ත රැස් කෙරේ...!*',
			search: '*සෙවීම් යෙදුම්..!*',
			list: '\n\n*සෙවුම් හැඳුනුම්පත* : {}\n\n',
			info: '*සබැඳිය:* {} \n\n*නම: {}*\n\n*ගැන: {}*\n\n*අනුවාදය: {}*\n\n*වර්ගය: {}*\ n\n*ශ්‍රේණිගත කිරීම: {}*\n\n*ශ්‍රේණිගත කිරීම්: {}*\n\n*අන්තර්ගත ඇගයීම: {}*\n\n*සංවර්ධක: {}*\n\n*ස්ථාපන: {}* \n\n*අලුත් දේ: {}*\n\n*විස්තරය:* ```{}```'
		},
		attp: {
			attpB: {
				desc: 'වචනයක් ස්ටිකරයක් බවට පත් කිරීමේ විදාන',
				used: 'attpB example',
				need: '*කරුණාකර වචනයක් ඇතුලත් කරන්න*',
				title: 'TEXT TO STICKER CONVERTING COMMANDS',
				sel: 'ස්ටිකරය තෝරන්න!',
				msg: '\n\n*ආදානය:* {}\n\n{}\n\n'
			},
			attpC: {
				used: 'attpC example1/example2',
				need: '*කරුණාකර වචන දෙකක් ඇතුළත් කරන්න example1/example2*',
				msg: '\n\n*වචනය 1:* {}\n*වචනය 2:* {}\n\n{}\n\n'
			},
			emojimix: {
				desc: 'ඉමෝජි දෙකක් මිශ්‍ර කරන්න',
				need: '*ඉමෝජි දෙකක් අවශ්‍යයි*',
				mix: '*{} සහ {} මිශ්‍ර කෙරේ*',
				error: '*{} සහ {} මිශ්‍ර කළ නොහැක :(*'
			}
		},
		bcope: {
			desc: 'baiscopelk භාවිතයෙන් සිංහල උපසිරැසි සොයන්න සහ බාගන්න',
			need: '*චිත්‍රපටයේ නම හෝ බයිස්කෝප් සබැඳිය අවශ්‍යයි*',
			download: '*උපසිරැසි බාගත කරමින්...*',
			upload: '*උපසිරැසි උඩුගත කරමින්...*',
			notfound: '*මට කිසිවක් සොයාගත නොහැක :(*',
			cap: '*නම:* {}\n\n*කර්තෘ:* {}',
			search: '*සිංහල උපසිරැසි සොයමින්..*',
			title: 'සිංහල උපසිරැසි බාගත කිරීම',
			desc_a: '\n\nSearchId: {}'
		},
		boom: {
			desc: 'Boom ලෙස පණිවිඩයක් යවන්න',
			help: 'boom 25',
			need: '*කරුණාකර පණිවිඩයකට පිළිතුරු දෙන්න!*',
			boom: '*Boom කිරීම ආරම්භ විය! මෙම ක්‍රියාව නැවැත්වීමට .boom stop භාවිතා කරන්න*',
			suc: '*සාර්ථකව නතර විය*'
		},
		cal: {
			desc: 'ගණකය',
			need: '*ගණිතයක් ඇතුළත් කරන්න*'
		},
		converter: {
			mp4audio_desc: 'වීඩියෝව ශබ්දයට පරිවර්තනය කරයි.',
			mp4audio_need: '*ඔබ වීඩියෝවකට පිළිතුරු දිය යුතුය!*',
			mp4audio: '```වීඩියෝව ශ්‍රව්‍ය බවට පරිවර්තනය කෙරේ..```',
			sticker_desc: 'ස්ටිකරය ඡායාරූපයකට පරිවර්තනය කරයි.',
			sticker_need: '*ඇනිමේටඩ් ස්ටිකරයකට පිළිතුරු දෙන්න!*',
			sticker_need_n: '*ඇනිමේටඩ් නොවන ස්ටිකරයකට පිළිතුරු දෙන්න!*',
			animstick: 'ස්ටිකරය වීඩියෝවක් බවට පරිවර්තනය කරයි.',
			anim: '```මාධ්‍ය බාගත කිරීම සහ පරිවර්තනය කිරීම...```',
			sticker: '```මාධ්‍ය බාගත කිරීම සහ පරිවර්තනය කිරීම...```',
			bland_err: '``` වැරදි මිශ්‍ර ප්‍රයෝගයක් ඇතුළත් කර ඇත!```\n```🔎 පවතින විධාන:```\n\n*$dodge* - වීඩියෝවට රෝස වර්ණ පෙරහනක් යොදයි.\n*$multiply * - වීඩියෝවට හරිත වර්ණ පෙරහනක් යොදයි.\n*$grainmerge* - වීඩියෝවේ වෙනස වැඩි කරයි.\n*$සහ* - වීඩියෝවේ වේගය අනුව කළු අකුණු ආචරණය යොදයි.\n*$or* - වීඩියෝවේ වේගය අනුව සුදු අකුණු ආචරණයක් යොදයි.\n*$burn* - වීඩියෝවට හරිත වෙනස යොදයි.\n*$වෙනස* - වීඩියෝවට හරිත සහන යෙදීමෙන් වෙනස්කම් පෙන්වයි.\n*$grainextract * - වීඩියෝවට අළු සහන යෙදීමෙන් වෙනස්කම් පෙන්වයි.\n*$divide* - වීඩියෝවට රෝස පැහැති සහනයක් යෙදීමෙන් වෙනස්කම් පෙන්නුම් කරයි.\n*$xor* - වීඩියෝවට හරිත සහන සහ අකුණු ආචරණය යන දෙකම යොදයි.\n*$hardmix* - වීඩියෝවේ වර්ණ කහ සහ රතු තානයකට මිශ්‍ර කරයි.\n*$negation* - වීඩියෝවේ ගතිකත්වය රෝස පැහැයට හරවයි.',
			bland_need: '``` ඔබට ඕනෑම මිශ්‍ර ප්‍රයෝගයක් ඇතුළත් කිරීමට අවශ්‍ය වේ!\n```🔎 පවතින විධාන:```\n\n*$dodge* - වීඩියෝවට රෝස වර්ණ පෙරහනක් යොදයි.\n*$multiply * - වීඩියෝවට හරිත වර්ණ පෙරහනක් යොදයි.\n*$grainmerge* - වීඩියෝවේ වෙනස වැඩි කරයි.\n*$සහ* - වීඩියෝවේ වේගය අනුව කළු අකුණු ආචරණය යොදයි.\n*$or* - වීඩියෝවේ වේගය අනුව සුදු අකුණු ආචරණයක් යොදයි.\n*$burn* - වීඩියෝවට හරිත වෙනස යොදයි.\n*$වෙනස* - වීඩියෝවට හරිත සහන යෙදීමෙන් වෙනස්කම් පෙන්වයි.\n*$grainextract * - වීඩියෝවට අළු සහන යෙදීමෙන් වෙනස්කම් පෙන්වයි.\n*$divide* - වීඩියෝවට රෝස පැහැති සහනයක් යෙදීමෙන් වෙනස්කම් පෙන්නුම් කරයි.\n*$xor* - වීඩියෝවට හරිත සහන සහ අකුණු ආචරණය යන දෙකම යොදයි.\n*$hardmix* - වීඩියෝවේ වර්ණ කහ සහ රතු තානයකට මිශ්‍ර කරයි.\n*$negation* - වීඩියෝවේ ගතිකත්වය රෝස පැහැයට හරවයි.',
			bland_desc: 'තෝරාගත් Blend ආචරණය වීඩියෝ සඳහා යොදයි.'
		},
		crypt: {
			endesc: 'මුරපද සමඟ ඕනෑම පණිවිඩයක් ගුප්තකේතනය කරන්න',
			enneed: '. mencrypt & your password සමග පණිවිඩයකට පිළිතුරු දෙන්න \n\n.encrypt pasword1234',
			dedesc: 'මුරපද සමඟ ඕනෑම පණිවිඩයක් විකේතනය කරන්න',
			deneed: '.decrypt & your password \n\n.decrypt pasword1234 සමඟ ගුප්තකේතන පණිවිඩයකට පිළිතුරු දෙන්න',
			erren: '*මට මෙය ගුප්තකේතනය කළ නොහැක*',
			errde: '*මට මෙය විකේතනය කළ නොහැක*',
			wrong: '*ඔබේ මුරපදය වැරදියි.. කරුණාකර නිවැරදි මුරපදය භාවිතා කරන්න*',
			inval: '*මෙය වලංගු ගුප්තකේතයක් නොවේ*'
		},
		database: {
			nologin: 'ඔබ Sew Queen හි ලියාපදිංචි පරිශීලකයෙක් නොවේ ... කරුණාකර *.register* හෝ *.login* භාවිතා කරන්න',
			success: '```දත්ත සාර්ථකව යාවත්කාලීන කරන ලදී```',
			err: '```පිවිසීම අසාර්ථකයි\nඔබගේ Database Url වලංගු නොවේ\nකරුණාකර ඔබගේ Database Url Update කරන්න.. .register mongodb url භාවිතා කරන්න```'
		},
		dict: {
			desc: 'ශබ්දකෝෂය.\nඋදා: .dict car',
			title: '*ඔබේ සෙවුම සඳහා ප්‍රතිඵලය* \n\n\n',
			eg: '*උදාහරණ:* ',
			def: '*අර්ථ දැක්වීම:* ',
			need: 'කරුණාකර වචනයක් ඇතුලත් කරන්න',
			gen: 'පූරණය වෙමින් පවතී... කරුණාකර රැඳී සිටින්න...'
		},
		download: {
			needi: '*ඕනෑම රූපයකට පිළිතුරු දෙන්න!*',
			needv: '*ඕනෑම වීඩියෝවකට පිළිතුරු දෙන්න!*',
			needa: '*ඕනෑම ශ්‍රව්‍යයකට පිළිතුරු දෙන්න!*',
			needt: '*ඕනෑම පෙළකට පිළිතුරු දෙන්න!*',
			needat: '*කරුණාකර පෙළ ඇතුළත් කරන්න!*',
			needrep: '```ඕනෑම පණිවිඩයකට පිළිතුරු දෙන්න!```',
			lang: 'භාෂාව',
			from: 'පරිවර්තන භාෂාව',
			result: 'පරිවර්තනය',
			err: {
				tik: '*සමාවෙන්න මට මෙම ටික්ටොක් වීඩියෝව සොයාගත නොහැකිය!*',
				fb: '*කණගාටුයි මට මෙම ෆේස්බුක් වීඩියෝව සොයාගත නොහැකිය!*',
				yt: '*සමාවෙන්න මට මෙම Youtube වීඩියෝව සොයාගත නොහැකිය!*',
				insta: '*සමාවෙන්න මට මෙම ඉන්ස්ටග්‍රෑම් වීඩියෝව සොයාගත නොහැකිය!*',
				github_p: '*සමාවෙන්න මට මෙම Github පැතිකඩ සොයා ගැනීමට නොහැකිය!*',
				mfire: '*සමාවෙන්න මට මෙම Mediafire ගොනුව සොයාගත නොහැකිය!*',
				iurl: '```මෙතන බොට් භාවිතා නොකරන්න.. මේ ඔබේ ලොග් අංකය```',
				song: '*සමාවෙන්න මට මේ ගීතය සොයාගත නොහැකිය!*',
				twt: '*සමාවෙන්න මට එය සොයා ගැනීමට නොහැකිය!*',
				site: '*සමාවෙන්න මට මෙම වෙබ් අඩවිය සොයා ගැනීමට නොහැකිය!*',
				sapk: '*සමාවෙන්න මට ඔබේ සෙවුම සොයා ගැනීමට නොහැකිය!*',
				git: '*සමාවෙන්න මට මෙම Repo හි ප්‍රධාන ශාඛාව සොයාගත නොහැකිය!*\n\n මෙලෙස භාවිතා කරන්න\n.gitclone RepoUrl/Branch',
				apk: '*සමාවෙන්න මට මෙම apk සොයාගත නොහැකිය!*',
				translate: 'සමාවෙන්න මට මෙම පෙළ පරිවර්තනය කිරීමට නොහැකිය!*'
			}
		},
		editor: {
			wait: '_මෙම ක්‍රියාවලියට යම් කාලයක් ගත විය හැක.._',
			meme_desc: 'මෙමස් වෙත පිළිතුරු දුන් රූපය',
			meme_set: '```ඔබේ රූපයෙන් Meme සෑදීම...```',
			noapi: '*DeepAI API යතුර හමු නොවීය!*',
			edit: '```සංස්කරණය කිරීම.... කරුණාකර රැඳී සිටින්න..```',
			cnvt: '```පරිවර්තනය වෙමින්.... කරුණාකර රැඳී සිටින්න..```',
			qr_desc: 'දී ඇති පෙළ qr කේත රූපයක් බවට පරිවර්තනය කරයි.'
		},
		err: '*දෝෂයක් අනාවරණය විය*\n\nදෝෂය : *{}*\n\n*පණිවිඩය: {}*\n\nදෝෂයක් සිදුවී ඇත!\n\nඔබට අපගේ telegram ගෲපයට සම්බන්ධ විය හැක ( *t.me/SewQueen* ) සමූහය හෝ Whatsapp (Sew Queen helping group ==> https://chat.whatsapp.com/BOATClyaTDkF7R0B2aUxq3)\n\nබොට් මෙහි භාවිතා නොකරන්න',
		exet: {
			sterr: 'මට මෙම ස්ටේටස් එක පළ කළ නොහැක'
		},
		fb: {
			desc: 'ෆේස්බුක් වීඩියෝ බාගන්න',
			need: '*ෆේස්බුක් වීඩියෝ ලින්කුවක් අවශ්‍යයි*',
			dload: '*ඔබේ ෆේස්බුක් වීඩියෝව බාගත කිරීම*',
			uload: '*ඔබේ ෆේස්බුක් වීඩියෝව උඩුගත කිරීම*',
			error: '*මට ඔබේ ෆේස්බුක් වීඩියෝව බාගත කළ නොහැක :(*'
		},
		ffmpeg: {
			desc: 'වීඩියෝවට අවශ්‍ය ffmpeg පෙරහන යොදයි.\n⌨️ උදාහරණය: .ffmpeg fade=in:0:30',
			edit: 'ප්‍රයෝගය යොදමින්.. කරුණාකර රැඳී සිටින්න',
			need: 'මාධ්‍ය සහ පෙරහන් නම අවශ්‍යයි!\nℹ️ උදා: ```.ffmpeg fade=in:0:30```\nℹ️ උදා: ```.ffmpeg curves=vintage, fps=fps=25```'
		},
		gdrive: {
			desc: 'ගූගල් ඩ්‍රයිව් සබැඳියෙන් අන්තර්ගතය බාගන්න',
			need: '*ගූගල් ඩ්‍රයිව් ලින්ක් අවශ්‍යයි*',
			dload: '* ගූගල් ඩ්‍රයිව් සබැඳියෙන් අන්තර්ගතය බාගත කිරීම*',
			uload: '* ගූගල් ඩ්‍රයිව් සබැඳියෙන් අන්තර්ගතය උඩුගත කිරීම*',
			error: '*මට ඔබගේ ගූගල් ඩ්‍රයිව් අන්තර්ගතය බාගත නොහැක :(*'
		},
		gitdl: {
			desc: 'Github Repos බාගන්න',
			need: '*භාවිතා කරන්න :- .gitdl githublink/branch*',
			dload: '*ඔබේ Github Repo බාගත කිරීම*',
			uload: '*ඔබේ Github Repo උඩුගත කිරීම*',
			error: '*මට ඔබගේ Github Repo බාගත කළ නොහැක :(*'
		},
		gimg: {
			desc: 'Google වෙතින් පින්තූර බාගන්න (ප්‍රතිඵල 95+)',
			need: '*සෙව්මක් ඇතුළත් කරන්න*',
			dload: '*පින්තූර සොයමින්...*',
			title: '*Google රූප සෙවුම් ප්‍රතිඵල*',
			msg: '\n\n*සෙවුම් හැඳුනුම්පත:-* {}\n\n',
			error: '*මට කිසිවක් සොයාගත නොහැක :(*'
		},
		info: {
			desc: 'කණ්ඩායම් හෝ පුද්ගලයාගේ පාරදත්ත දත්ත පෙන්වයි.',
			user: '*පුද්ගල පාර දත්ත*\n\n*පුද්ගලයාගෙ JID:* {} \n*පුද්ගලයාගෙ status:* {}',
			bis: '\n\n*ලිපිනය :* {}\n\n*විස්තරය :* {}\n\n*වෙබ් අඩවිය :* {}\n\n*ඊමේල් :* {}\n\n*ප්‍රවර්ගය :* {}\n\n',
			err: 'පෙරදසුන නොමැත',
			done: 'සාර්ථකය',
			per: '*අවසර නැත*',
			userc: '*කණ්ඩායම් සාමාජිකයින් ගණන*\n\n*සියලු සාමාජිකයින් :* {}\n*සියලු පරිපාලකයින්:* {}\n\n\n*රට සමඟ සාමාජිකයින් ගණන*\n\n```ශ්‍රී ලංකාව(94) : {}\nඑක්සත් ජනපදය(1) : {}\nරුසියාව(7) : {}\nඉන්දියාව(91) : {}\nඑක්සත් රාජධානිය(44) : {}\nඉන්දුනීසියාව(62) : {}\nපකිස්තානය(92) : {}\nමොරොක්කෝව(212) : {}\nබංගලාදේශය(880) : {}\nඅසර්බයිජානය(994) : {}\nවෙනත් : {}```',
			groupc: '*කණ්ඩායම් නම:* {}\n*කණ්ඩායම් හැඳුනුම:* {}\n*ආරම්භකයා:* {}\n*ආරාධනා සබැඳිය:* https://chat.whatsapp.com/{}\n\n {}\n\n*විස්තර:* {}',
			jid: {
				desc: 'Group Jid පෙන්වයි',
				msg: '{}'
			},
			wame: {
				desc: 'පරිශීලක කතාබස් වෙත සබැඳියක් ලබා ගන්න.',
				msg: '```චැට් ලින්ක් එක``` @{} : https://wa.me/{}',
				need: '*මට පරිශීලකයෙකු දෙන්න!*'
			}
		},
		insta: {
			desc: 'Instagram වීඩියෝ බාගන්න',
			need: '* Instagram වීඩියෝ Url අවශ්‍යයි*',
			story: '*මෙම සබැඳිය .iguser හෝ .instastory Cammand සමඟ භාවිතා කරන්න*',
			dload: '*Instagram සබැඳියෙන් අන්තර්ගතය බාගත කිරීම*',
			uload: '*Instagram සබැඳියෙන් අන්තර්ගතය උඩුගත කිරීම*',
			error: '*මට ඔබගේ Instagram වීඩියෝව බාගත නොහැක :(*'
		},
		instastory: {
			desc: 'Instagram Story බාගත කිරීම',
			need: '* Instagram Story Url අවශ්‍යයි*',
			notfound: '*Story ලබා ගත නොහැක*',
			load: '* Instagram කතන්දර දත්ත ප්‍රශංසා කිරීම*',
			error: '*පරිශීලකයා හමු නොවීය කරුණාකර නැවත උත්සාහ කරන්න :(*'
		},
		joke: {
			joke: {
				desc: 'අහඹු විහිළුවක් ලබා ගන්න.',
				msg: '😹 විහිළුව : {}',
				err: 'සමාවෙන්න මම කාර්යබහුලයි, මට දැන් විහිළුවක් හිතන්න බැහැ!'
			},
			quote: {
				desc: 'එය අහඹු ලෙස උපුටා ගැනීම ලබා දෙයි',
				msg: '*📌 උපුටා ගැනීම :* ```{}```\n\n*✒️ කර්තෘ :* ```{}```\n',
				err: '```සමාවෙන්න, මට උපුටාගැනීමක් සොයාගත නොහැකි විය.```'
			}
		},
		link: {
			desc: 'ඕනෑම සෘජු සබැඳියකින් ගොනුව ලබාදෙයි',
			need: '*කරුණාකර මට සෘජු සබැඳියක් දෙන්න*',
			err: '*මට එය බාගත නොහැක :(*',
			up: '*URL වෙතින් බාගත කර උඩුගත කරමින්...*'
		},
		loc: {
			desc: 'එය ඔබගේ ස්ථානය යවයි.',
			msg: 'මගේ ස්ථානය! {}',
			seta: 'degreesLatitude: 24.121231, degreesLongitude: 55.1121221',
			setb: 'degreesLatitude: 8.838637, degreesLongitude: -13.721434'
		},
		log: {
			desc: 'ඔබ පිළිතුරු දෙන පණිවිඩය ඔබගේ පුද්ගලික අංකයට සුරකියි.',
			done: '*පණිවිඩය LOG වෙත සාර්ථකව සුරකින ලදී!🎲👑*',
			need: '*කරුණාකර ඕනෑම පණිවිඩයකට පිළිතුරු දෙන්න!*',
			err: '*ඔබේ පණිවිඩය සුරැකිය නොහැක!*',
			msg: '```🎯[LOGGED පණිවිඩය]🎯```\n\n{} \nID සහිත කණ්ඩායමෙන්,\n\nwa.me/{} \nපරිශීලක අංකයෙන් \n\nපණිවිඩය: \n\n {}'
		},
		logo: {
			logoA: {
				desc: 'වචනයක් පින්තූරයක් බවට පත් කිරීමේ විදාන',
				used: 'logoA example',
				need: '*කරුණාකර වචනයක් ඇතුලත් කරන්න*',
				title: 'TEXT TO IMAGE CONVERTING COMMANDS',
				sel: 'ලාංඡනය තෝරන්න!',
				msg: '\n\n*ආදානය:* {}\n\n{}\n\n'
			},
			logoB: {
				used: 'logoB example1/example2',
				need: '*කරුණාකර වචන දෙකක් ඇතුළත් කරන්න example1/example2*',
				msg: '\n\n*වචනය 1:* {}\n*වචනය 2:* {}\n\n{}\n\n'
			},
			png: {
				desc: 'Emoji To Png : 15+ Png එකක් සඳහා Emoji',
				help: 'png💖',
				need: '*ඉමොජියක් අවශ්‍යයි*',
				err: '*මට මෙම ඉමොජිය සොයාගත නොහැක :(*',
				title : 'Png වෙත ඉමොජි වර්ගය තෝරන්න',
				msg: '*EMOJI TO PNG*\n\nනම : {}\nයුනිකෝඩ්: {}\nDesc : {}\n\nවර්ගය තෝරන්න',
				sel : 'තෝරන්න'
			},
			fancy: {
				desc:'පෙළ විසිතුරු පෙළ බවට පරිවර්තනය කරන්න',
				need:'*වචන ඇතුළු කරන්න..!*',
				msg: '*FANCY text GENERATER*\n\n*Input:-* {}\n\n'
			}
		},
		menu: {
			header: 'ආරම්බය\n{start:menu_header}\n\nමෙනු හෙඩර් එකක් ඇතුලත් කරන්න (මූලපද: #rate #device #rule යොදාගත හැකිය)\n'
                   + '{text:┏━━━━━━━━━━━━━━━━━━━━━━━━━\n┃   *MANOJ-MD WHATSAPP BOT*\n┗━━━━━━━━━━━━━━━━━━━━━━━━━\n\n*👨‍💻 විධාන ලැයිස්තුව👨‍💻*}\n\n*'
                   + 'ලැයිස්තුව සඳහා ඉමොජි 3ක් එක් කරන්න\n'
                   + '{emoji:👨‍💻/🕊️/🌳}\n\n'
                   + 'Url බොත්තම්\n'
                   + '{url:URL වෙත යන්න|https://github.com/ravindu01manoj}\n'
                   + '{url:SUBSCRIBE YOUTUBE|https://youtube.com/c/TechToFuture}\n\n'
                   + 'බොත්තම්\n'
                   + '{button:RATE US|rate}\n'
                   + '{button:PROPERTY|alive}\n'
                   + '{button:NOTES|note}\n\n'
                   + 'රූපයයක් ඇතුලත් කරන්න (සෘජු Url හෝ pp හෝ my_dp හෝ group_dp භාවිතා කරන්න)\n'
                   + '{img:https://telegra.ph/file/1d7da58e35215ed3336c5.jpg}\n',
			command: ' *විධානය:-* ',
			desc: ' *විස්තරය:-* ',
			help: ' *උදව්:-* ',
		},
		mfire: {
			desc: 'මීඩියාෆයර් සබැඳියෙන් අන්තර්ගතය බාගන්න',
			need: '*මීඩියාෆයර් ලින්ක් අවශ්‍යයි*',
			dload: '* Mediafire සබැඳියෙන් අන්තර්ගතය බාගත කිරීම*',
			uload: '* Mediafire සබැඳියෙන් අන්තර්ගතය උඩුගත කිරීම*',
			error: '*මට ඔබගේ Mediafire අන්තර්ගතය බාගත නොහැක :(*'
		},
		nekobin: {
			desc: 'පිළිතුරු දුන් පණිවිඩ nekobin.com සටහන් වෙත එක් කෙරෙනු ඇති අතර ඔබට ඔබගේ සටහන සඳහා සබැඳිය ලබා ගත හැක',
			site: 'https://nekobin.com/api/documents',
			msg: '*ඔබේ සටහන් සබැඳිය: https://nekobin.com/{}*',
			err: '```මට nekobin ප්‍රධාන අඩවියට පිවිසිය නොහැක..```'
		},
		news: {
			news: {
				desc: 'දින ප්‍රවෘත්ති ලබා ගන්න, .news පසු ප්‍රවර්ගයක් එක් කරන්න.',
				need: '*කරුණාකර ප්‍රවර්ගයක් ලියන්න!*\n*උදාහරණ:* ```.news sports```',
				title: '*📁 ප්‍රවර්ගය:* ```{}```\n\n\n',
				msg: '*🎯 පුවත් මාතෘකාව:* ```{}```\n*📰 පුවත් අන්තර්ගතය:* ```{}```\n*🌐 තව කියවන්න:* ```{}```\n\n',
				err: '```මට මෙම නම සහිත ප්‍රවර්ගයක් සොයාගත නොහැකිය.```'
			},
			show: {
				desc: 'රූපවාහිනී කතා මාලා සහ සංදර්ශන සම්බන්ධ තොරතුරු ලබා ගන්න',
				need: '*මට පෙන්වන්න නම දෙන්න..!*',
				msg: '*නම*: {}\n*වර්ගය*: {}\n*වර්ගය*: {}\n*සාරාංශය*: {}\n*නිල අඩවිය*: {}',
				err: 'මට කිසිවක් සොයාගත නොහැකිය'
			},
			film: {
				desc: 'චිත්රපට සම්බන්ධ තොරතුරු ලබා ගන්න',
				need: '*මට චිත්‍රපටයේ නම දෙන්න..!*',
				msg: "*📽️ චිත්‍රපට තොරතුරු*\n\n```මාතෘකාව : {}\nවසර : {}\nශ්‍රේණිගත කිරීම : {}\nනිකුත් කළ: {}\nධාවන කාලය : {}\nප්‍රභේදය : {}\nඅධ්‍යක්ෂක : {} \nලේඛකයා : {}\nනළුවන් : {}\nකථා නිර්මාණය : {}\nභාෂාව : {}\nරට : {}\nසම්මාන : {}\nBoxOffice : {}\nනිෂ්පාදනය : {}\nimdbRating : {}\nimdbVotes : {} ''''"
			},
			ip: {
				desc: 'ඔබේ IP පිළිබඳ විස්තර ඔබට ලබා දෙයි',
				need: '*ඔබගේ IP ලිපිනය ඇතුලත් කරන්න..!*',
				msg: '*🔴 IP :* ```{}```\n\n*⚙️ අනුවාදය :* ```{}```\n*🌐 මහාද්වීපය :* ```{}```\n\n*🗺 රට :* ```{}```\n*🔢 රටේ කේතය :* ```{}```\n*✈️ රටේ කේතය ISO :* ```{}```\n*🏙️ රටේ අගනුවර :* ```{}```\n*🔗️ COUNTRY DOMAIN :* ```{}```\n*🏖️️ රට ප්‍රදේශය :* ```{}```\n*🏕️️ ජනගහනය :* ```{}```\n\n*🌍 කලාපය :* ```{}```\n*♦️ කලාප කේතය :* ```{}```\n*🚩 නගරය :* ```{}```\n*🏛 ZIP :* ```{}```\n*🚀 භාෂාව :* ```{}```\n*💸 මුදල් :* ```{}```\n*💸 මුදල් නම :* ```{}```\n\n*📡 ISP :* ```{}```\n*🛡 ප්‍රොක්සි :* ```{}```\n*🔗️ වෙබ් අඩවිය :* ```{}```\n*🧬 ආරම්භය :* ```{}```\n'
			}
		},
		notes : {
			desc: 'අයිතිකරු විසින් ඇතුලත් කල මැසේජ්',
			start : '*The Saved Message By Owner..*',
			msg : 'Start\n{start:notes}\n\nපණිවිඩය ඇතුලත් කරන්න..(මූලපද: #rate #device #rule)\n'
                   + '{text:*Hi! #user*\n\n*කිසිදු පණිවිඩයක් තබා නොමැත..*\n\n}\n\n'
                   + 'Url බොත්තම්\n'
                   + '{url:GO TO URL|https://github.com/ravindu01manoj}\n'
                   + '{url:SUBSCRIBE YOUTUBE|https://youtube.com/c/TechToFuture}\n\n'
                   + 'බොත්තම්\n'
                   + '{button:RATE US|rate}\n'
                   + '{button:PROPERTY|alive}\n'
                   + '{button:COMMANDS|help}\n\n'
                   + 'රූපයයක් ඇතුලත් කරන්න (සෘජු Url හෝ pp හෝ my_dp හෝ group_dp භාවිතා කරන්න)\n'
                   + '{img:https://telegra.ph/file/1d7da58e35215ed3336c5.jpg}\n',
		},
		novel: {
			desc: 'සිංහල නවකතා 1000+ බාගත කර කියවන්න',
			error: '*මට නවකතා දත්ත පැච් කළ නොහැක :(*',
			dl: '*නවකතාව බාගත කිරීම*',
			up: '*නවකතාව උඩුගත කිරීම*',
			head: '*සිංහල නවකතා බාගත කරන්න*',
			body: '\n\n*තෝරාගත් ප්‍රවර්ගය :-* {}\n\n',
			body2: '\n\n*1000+ සිංහල නවකතා*\n\n'
		},
		ocr: {
			desc: 'ඔබ පිළිතුරු දුන් ඡායාරූපයේ පෙළ කියවයි.',
			geting: '```ඔබේ රූපය බාගත කිරීම සහ කියවීම...```',
			err: '```මට මෙය කියවිය නොහැකි විය :/```\n*දෝෂය:*```{}```',
			data: '*භාෂාව:* ```{}```\n*මෙන්න මම කියවන දේ:* ```{}```'
		},
		own: {
			dp: {
				desc: 'බොට් ප්‍රදර්ශණ පින්තූරය යාවත්කාලීන කරන්න',
				need: '*ප්‍රදර්ශණ පින්තූරය සඳහා රූපයක් අවශ්‍යයි*',
				up: '*බොට් ප්‍රදර්ශණ පින්තූරය යාවත්කාලීන කිරීම*',
				upd: '*සාර්ථකව යාවත්කාලීන කරන ලදී*'
			},
			comm: {
				desc: 'ගෲප් දෙකක පොදු නොවන සාමාජිකයන් පෙන්වයි',
				help: '.comm exsample1@g.us/exsample2@g.us',
				need: '*/ බෙදීම සහිත කණ්ඩායම් jid දෙකක් අවශ්‍යයි*',
				join: '*මට කණ්ඩායම් දත්ත වලට ප්‍රවේශ විය නොහැක...බොට් කණ්ඩායම් වල සිටීද?*',
				done: '*{} සහ {} හි පොදු සාමාජිකයින්\n\n{}*',
				make: '\n⚈ @'
			},
			diff: {
				desc: 'ගෲප් දෙකක පොදු නොවන සාමාජිකයන් පෙන්වයි',
				help: '.diff exsample1@g.us/exsample2@g.us',
				done: '*{} සහ {} හි වෙනස් සාමාජිකයන්\n\n{}*'
			},
			block: {
				desc: 'පරිශීලකයෙකු අවහිර කරන්න',
				done: '*Blocked!*'
			},
			unblock: {
				desc: 'පරිශීලකයෙකු අවහිර කිරීම ඉවත් කරන්න',
				done: '*Unblocked!*'
			},
			join: {
				desc: 'කණ්ඩායම් සබැඳිය භාවිතයෙන් කණ්ඩායමකට සම්බන්ධ වන්න',
				need: '*කරුණාකර වලංගු කණ්ඩායම් සබැඳියක් ඇතුළත් කරන්න*',
				done: '*සාර්ථකව සම්බන්ධ විය*'
			},
			about: {
				desc: 'අබවුට් සකසන්න',
				need: '*වදනක් ඇතුලත් කරන්න*',
				done: '*සාර්තකව සකසන ලදි*'
			},
			left: {
				desc: 'කණ්ඩායමෙන් ඉවත් වීම සිදු වේ',
				left: '*බායි බායි! මම යනවා ✈️!*'
			}
		},
		pdf: {
			desc: 'පින්තූර සමඟ නව Pdf සාදන්න',
			newpdf : '*ක්‍රමය*\n\n *pdf සඳහා නව පිටුවක් එක් කිරීමට {}page සමග රූපයක් භාවිතා කරන්න*\n *ඔබ එකතු කළ පින්තූර සමඟ නව pdf සෑදීම සඳහා ගොනු නාමය සමඟ {}topdf භාවිතා කරන්න*',
			srch: '*PDF සොයමින්...!*',
			upload: '*Pdf උඩුගත කරමින්...*',
			notFound: '*Pdf සෑදීම සඳහා පින්තූර හමු නොවීය.*\n*{}pdf විස්තර ලබා ගැනීමට..*',
			newimg : '*නව Pdf ආරම්භය... 1 රූපය එකතු කරන ලදී*',
			imgadd : '*{} රූපය එකතු කරන ලදී*',
			needimg : '*පින්තූරයක් සමඟ භාවිතා කරන්න...!*'
		},
		poll: {
			need: '*ඡන්ද විමසීම් හැඳුනුම්පත අවශ්‍ය නැතහොත් නව ඡන්ද විමසීමක් සාදන්න ==> උදාහරණය මෙන් ඇති මැසේජයකට .poll ලෙස reply කරන්න*\nඋදා:: {මාතෘකාව},{බටනය},{දත්ත මාතෘකාව},{1 දත්තය,2 දත්තය,3 දත්තය,...}',
			non: '*මත විමසුම වසා ඇත හෝ මෙම හැඳුනුම සඳහා ඡන්ද දත්ත වලංගු නොවේ*',
			getc: 'ප්‍රතිඵල ලබා ගන්න',
			closec: 'මත විමසුම වසා ප්‍රතිඵල ලබා ගන්න',
			rest: 'ඡන්ද ප්‍රතිඵල',
			test: '*ඔබ දැනටමත් ඡන්දය දී ඇත..*',
			done: '*ඔබේ ඡන්දය සාර්ථකව එකතු කරන ලදී..*',
			needg: 'ජනමත විමසුම සඳහා කණ්ඩායමක් භාවිතා කරන්න',
			needo: 'තවත් ඡන්ද විකල්ප අවශ්‍යයි',
			loadid: '*ඔබගේ ඡන්ද විමසීම් හැඳුනුම්පත ජනනය කෙරේ.....*\nමෙවැනි ඡන්ද විමසීම් හැඳුනුම්පත භාවිතා කර ඕනෑම කණ්ඩායමක ඔබේ මත විමසුම සක්‍රිය කළ හැක\n\n.poll rgms_91938678912',
			clpoll: 'ඡන්ද විමසීම අවසන් විය',
			endpoll: '*සාර්ථකව මකා දැමුවා..!*',
			respoll: '\n\n*--මත විමසුමේ ප්‍රතිඵලය--*\n\n```',
			fullres: '```\n\n සම්පූර්ණ විස්තර\n\n\n'
		},
		rate: {
			done: '*ස්තූතියි අපව ශ්‍රේණිගත කිරීම සඳහා..*',
			msg: '\n┏━━━━━━━━━━━━━━━━\n┃  ❖❖ ශ්‍රේණිගත කිරීම් ❖❖\n┃\n┃  ✭✭✭✭✭ = {}\n┃  ✭✭✭✭✩ = {}\n┃  ✭✭✭✩✩ = {}\n┃  ✭✭✩✩✩ = {}\n┃  ✭✩✩✩✩ = {}\n┃\n┗━━━━━━━━━━━━━━━━',
			need: 'මට හොඳම ශ්‍රේණිගත කිරීම දෙන්න'
		},
		removebg: {
			desc: 'ඡායාරූපවල පසුබිම ඉවත් කරයි.',
			needapi: '*Remove Bb Api යතුර අවශ්‍යයි*\n```Removebg Site (remove.bg) භාවිතා කරමින් Api යතුර එක් කරන්න```',
			edit: '*පසුබිම ඉවත් කිරීම...*'
		},
		report: {
			desc: 'අසාමාන්‍ය නොමනා ක්‍රියාකාරකම් වාර්තා කරන්න',
			msg: '╔═══════════oo═══════════╗\n╠ *නොමනා ක්‍රියාකාරකම් අනාවරණය*\n\n{a}\n╚═══════════════════════╝\n\n_*කරුණාකර පරිපාලකයින් ප්‍රතිචාර දක්වන්න,*_',
			done: '*⚠⚠වාර්තාව පිළිගත්තා⚠⚠*\n✔'
		},
		set: {
			desc : 'දත්ත සමුදායේ පෙරනිමි පෙළ වෙනස් කරන්න',
			need : '*කරුණාකර පණිවිඩයකට පිළිතුරු දෙන්න*',
			done : '*සාර්ථකව වෙනස් කරන ලදී {}*',
			error : '*මෙවැනි තන්තුවක් හමු නොවීය*',
			listT : '*Manoj Multi-device Database Editor*\n\n*ඔබට සෑම තන්තු සඳහාම මෙම මූල පද භාවිතා කළ හැක*\n\n*KeyWords*\n\n```#user :- UserName\n#rate :- ශ්‍රේණිගත කිරීමේ විස්තර\n#device :- පරිශීලක උපාංගය\n#ram :- Server Ram\n#storage :- Server Storage\n#my_name :- Bot Number User Name```',
			wrong : '*ඔබේ පිළිතුර විකේතනය කළ නොහැක පණිවිඩය... කරුණාකර උදාහරණයක් ලෙස පිළිතුරු දෙන්න...*'
		},
		scam: {
			desc: 'ව්‍යාජ ක්‍රියා නිර්මාණය කරයි.',
			need: '*ඔබ ව්‍යාජ ක්‍රියාවක් ඇතුළත් කළ යුතුය!*\nපවතින වර්ග: ```typing & recording & online & stop``',
			scam_s: '*ව්‍යාජ ක්‍රියාව : --{}--*',
			err: '```වැරදි ක්‍රියාවක් ඇතුළත් කර ඇත! කරුණාකර පවතින වර්ග භාවිතා කරන්න.: typing & recording & online & stop```'
		},
		start: {
			shutdown: {
				desc: 'බොට්ව ක්‍රියාවිරහිත කරන්න',
				done: '*⛔ Manoj Multi-device Whatsapp Bot ක්‍රියාවිරහිත වේ..*',
			},
			start: {
				desc: 'බොට්ව නැවත පනගන්වන්න',
				boot: '```බූට් කිරීම...```',
				done: '*Manoj Multi-device Whatsapp Bot සාර්ථකව පනගැන්වින.!*'
			}
		},
		sticker: {
			desc: 'එය ඔබගේ පිළිතුරු දුන් හෝ භාවිතා කළ ඡායාරූපයක් හෝ වීඩියෝ හෝ gif ස්ටිකරයක් බවට පරිවර්තනය කරයි.',
			help: '.sticker packname/author',
			get_desc: 'එය ස්ටිකරයේ packname සහ author වෙනස් කරයි.',
			get_help: '.stickget packname/author',
			need: '*පිළිතුරු දෙන්න හෝ ඡායාරූපයකට හෝ වීඩියෝවකට හෝ gif සමඟ භාවිතා කරන්න!*',
			download: '*මාධ්‍ය බාගත කර ස්ටිකරය සෑදේ...*',
			change: '*මෙම ස්ටිකරයේ packname සහ author වෙනස් කෙරේ...*',
			get_need: '*කරුණාකර ස්ටිකරයකට පිළිතුරු දෙන්න!*'
		},
		tag: {
			admin_desc: 'සමූහයේ පරිපාලකයින් ටැග් කරයි.',
			err: '*මම මෙම සමූහයේ පරිපාලක නොවේ!*',
			scan: '*අංකය Whatsapp හි තිබේදැයි පරීක්ෂා කරන්න*',
			need: '*කරුණාකර අංකයක් ඇතුළත් කරන්න!*',
			suc: '*අංකය Whatsapp හි ඇත*',
			unsuc: '*අංකය Whatsapp හි නොමැත*',
			mem: '\n\n ❄ සමූහ සාමාජිකයින්❄\n\n',
			list: '💠 @{a}\n▫️👑 wa.me/{b}\n\n',
			tlist: '▫️💠 @{a} 💠\n',
			title: '\n\n◻ 🔱 *👑 සමූහ පරිපාලකයින් 👑* 🔱 ◻\n\n\n'
		},
		time: {
			hour: 'පැය',
			minute: 'මිනිත්තු',
			sec: 'තත්පර'
		},
		tiktok: {
			desc: 'ටික්ටොක් ලින්ක් එකෙන් අන්තර්ගතය බාගන්න',
			need: '*ටික්ටොක් සබැඳිය අවශ්‍යයි*',
			img: 'https://telegra.ph/file/b22a8781022d815fb4bcd.png',
			dload: '*ටික්ටොක් සබැඳියෙන් අන්තර්ගතය බාගත කිරීම*',
			uload: '*ටික්ටොක් සබැඳියෙන් අන්තර්ගතය උඩුගත කිරීම*',
			error: '*මට ඔබගේ ටික්ටොක් අන්තර්ගතය බාගත නොහැක :(*'
		},
		truecaller: {
			desc: 'truecaller අඩවියේ අංකය සොයන්න',
			need: '*අංකයක් අවශ්‍යයි*',
			img: 'https://telegra.ph/file/36d84d5183984bc7b3bdc.jpg',
			load: '*සොයමින්...*',
			error: '*අංකය හමු නොවීය :(*'
		},
		twitter: {
			desc: 'ඕනෑම අන්තර්ගතයක් ට්විටර් TWITTER බාගන්න',
			need: '*TWITTER සබැඳිය අවශ්‍යයි*',
			text: '*TWITTER අන්තර්ගත බාගත කරන්නා*\n\n*පරිශීලකයා:- {}*\n\n*අන්තර්ගත වර්ගය:- {}*\n\n*TEXT:- {}*',
			dload: '*Twitter සබැඳියෙන් අන්තර්ගතය බාගත කිරීම*',
			uload: '*Twitter සබැඳියෙන් අන්තර්ගතය උඩුගත කිරීම*',
			error: '*මට ඔබගේ TWITTER සබැඳියෙන් අන්තර්ගතය බාගත නොහැක :(*'
		},
		url : {
			desc: 'Image or video to a link',
			need: '*Use With Image Or Video*',
			dop: '*Converting to Link*'
		},
		unit: {
			unit_desc: 'ඒකක පරිවර්තනය කරයි.',
			unit_use: '.unit 50',
			need_n: '*කරුණාකර වලංගු අගයක් භාවිතා කරන්න*',
			doing: '*පරිවර්තනය කරේ...*',
			list_m_t: 'ඒකක පරිවර්තකය',
			list_m_b: '\n\nවරණය කිරීමට ආදාන ඒකකය තෝරන්න',
			list_m_k: 'තෝරන්න!',
			list_t: ['දිග පරිවර්තනය', 'ප්‍රදේශ පරිවර්තනය', 'වේග පරිවර්තනය', 'බර පරිවර්තනය', 'පරිමා පරිවර්තනය', 'උෂ්ණත්ව පරිවර්තනය'],
			res_len: '*පරිවර්තිත දිග*\n\n*මිලිමීටර :* {}\n*සෙන්ටිමීටර :* {}\n*මීටර් :* {}\n*කිලෝමීටර් :* {}\n*අඟල් :* {}\n*අඩි :* {}\n*යාර :* {}\n*සැතපුම් :* {}\n*නාවික සැතපුම් :* {}\n*Smoots :* {}\n',
			res_area: '*පරිවර්තිත ප්‍රදේශය*\n\n*වර්ග මිලිමීටර :* {}\n*වර්ග සෙන්ටිමීටර :* {}\n*වර්ග මීටර් :* {}\n*වර්ග කිලෝමීටර් :* {}\n*වර්ග අඟල් :* {}\n*වර්ග අඩි :* {}\n*වර්ග යාර :* {}\n*වර්ග සැතපුම් :* {}\n*හෙක්ටයාර :* {}\n*අක්කර :* {}\n',
			res_speed: '*පරිවර්තිත වේගය*\n\n*මිලිමීටර් / තත්පර :* {} \n*කිලෝමීටර / පැය :* {}\n*අඟල් / තත්ත්පර :* {}\n*අඩි / තත්ත්පර :* {}\n*යාර / තත්ත්පර :* {}\n*සැතපුම් / තත්ත්පර :* {}\n*සැතපුම්/පැය :* {}\n*ගැට :* {}\n',
			res_weight: '*පරිවර්තිත බර*\n\n*ග්‍රෑම් :* {}\n*කිලෝග්‍රෑම් :* {}\n*කින්ටල් :* {}\n*ටොන් :* {}\n*අවුන්ස :* {}\n*පවුම් :* {}\n',
			res_volume: '*පරිවර්තිත පරිමාව*\n\n*මිලිල්ටරය :* {}\n*ලීටර් :* {}\n*ඝන මීටර :* {}\n*ඝන අඟල් :* {}\n*ඝන අඩි :* {}\n*ඝන යාර :* {}\n*අවුන්ස :* {}\n*ගැලුම් :* {}\n*පයින්ට්:* {}\n*ක්වාර්ට්ස් :* {}\n*මේස හැඳි :* {}\n*තේ හැඳි :* {}\n',
			res_temp: '*පරිවර්තිත උෂ්ණත්වය*\n\n*සෙල්සියස් :* {}\n*ෆැරන්හයිට් :* {}\n*කෙල්වින් :* {}\n'
		},
		update: {
			alive_desc: 'Bot Status ලබා දෙයි( ජීවමානද?)',
			updating: '*Sew Queen දැන් යාවත්කාලීන වෙමින් පවතී...*',
			update: '*යාවත්කාලීනයක් නොමැත..*\n*ඔබේ බොට් එක සම්පූර්ණයෙන්ම යාවත්කාලීනයි!*',
			updated: '*Sew Queen සාර්ථකව යාවත්කාලීන කර ඇත..*',
			restart: 'දත්ත නැවුම් කිරීම සහ නැවත ආරම්භ කිරීම...'
		},
		voice: {
			tovoice_desc: 'ශ්‍රව්‍යය ශබ්ද පටිගත කිරීමකට පරිවර්තනය කරයි.',
			voi_err: 'මට මෙම මෙය පරිවර්තනය කළ නොහැක',
			voi_desc: 'ශබ්දයක් හදුනාගත හැක.',
			voi_text: '*ඒයි! මම මේ කටහඬට රහසින් සවන් දී අසා සිටියෙමි. එය:* \n\n'
		},
		viweOnce: {
			desc: 'ViweOnce Message Decrypt',
			need: '*කරුණාකර View Once පණිවිඩයට පිළිතුරු දෙන්න*',
			doing: '*මෙම View Once පණිවිඩය විකේතනය වේ..!*'
		},
		warn: {
			need: '*මට පරිශීලකයෙකු දෙන්න*',
			reset: '*සාර්ථකව ඉවත්කරන ලදි*',
			warn: '@{} , *⚠️ඔබට අනතුරු අඟවා ඇත⚠️*\n\n*නුසුදුසු ක්‍රියාවක් ගෙන ඇත*\n\n*ඔබ භාවිතා කළේ:-* {}\n*අවවාදාත්මක අවස්තා:-* {}\n*ඉතුරු:-* {}'
		},
		weather: {
			desc: 'කාලගුණය පෙන්වයි.',
			need: '*කරුණාකර ස්ථානයක් ලියන්න!*\n*උදාහරණය:* ```.කාලගුණය පොළොන්නරුව```',
			text: '*📍 ස්ථානය:* ```{a}```\n\n*☀ උෂ්ණත්වය:* ```{b}°```\n*ℹ විස්තර:* ```{c}` ``\n*☀ ආර්ද්‍රතාවය:* ```{d}%```\n*💨 සුළගේ වේගය:* ```{e}m/s```\n*☁ වලාකුළු:* ```{f}%```\n',
			err: '```මට මෙම නම ඇති නගරයක් සොයාගත නොහැකිය!```',
		},
		web: {
			speed_desc: 'බාගැනීම් සහ උඩුගත කිරීමේ වේගය මැනීම.',
			speed_help: '.speedtest user හෝ .speedtest server',
			ping_desc: 'ඔබේ ping මැනීම.',
			tiny_desc: 'දිගු link කෙටි කරන්න.',
			cal_desc: 'Powerfull Calculater With > - + * / × ÷ π e ( ) pie pi log lg ^ 1-9',
			cal_need: '*ඕනෑම ඇතුලත්කිරීමක් අවශ්‍යයි! ==> - + * / × ÷ π e ( ) Pie pi log lg ^ 1-9 වලංගු වේ*',
			needurl: 'කරුණාකර link එකක් ඇතුලත් කරන්න!',
			short_e: 'මට ඔබ ඇතුලත් කල link එක කෙටි කල නොහැක',
			short_d: '*මුල් සබැඳිය:* {a}\n*කෙටි සබැඳිය:* {b}',
		},
		youtube: {
			song: {
				desc: 'Youtube සමඟ ගීත බාගත කිරීම',
				need: '*කරුණාකර ගීතයේ නමක් ඇතුළත් කරන්න*',
				data: '*URL: {}*\n\n*මාතෘකාව: {}*\n\n*චැනලය: {}*\n\n*දර්ශන: {}*\n\n*ප්‍රවර්ගය: {}*\ n\n*කැමති : {}*\n\n*විස්තරය : {}*\n\n',
				download: '*මම ඔබේ ගීතය සොයමි*',
				upload: '*මම ඔබේ ගීතය උඩුගත කරමි*'
			},
			video: {
				desc: 'Youtube සමඟ වීඩියෝ බාගත කිරීම',
				need: '*කරුණාකර Youtube Url එකක් ඇතුලත් කරන්න*',
				දත්ත: '*URL: {}*\n\n*මාතෘකාව: {}*\n\n*චැනලය: {}*\n\n*දර්ශන: {}*\n\n*ප්‍රවර්ගය: {}*\ n\n*කැමති : {}*\n\n*විස්තරය : {}*\n\n',
				download: '*මම ඔබේ වීඩියෝව සොයමි*',
				upload: '*මම ඔබේ වීඩියෝව උඩුගත කරමි*'
			},
			yts: {
				desc: 'YouTube වීඩියෝ සොයන්න සහ බාගත කරන්න',
				need: '*කරුණාකර පෙළක් ඇතුළත් කරන්න*',
				err: '* ධාවන ලැයිස්තුව හමු නොවීය :(*',
				search: '*සොයමින්...!*',
				error: '*මට කිසිවක් සොයාගත නොහැක :(*',
				title: '*YOUTUBE සෙවුම් ප්‍රතිඵල*',
				descl: '\n\n*Playlistහි නම: {}*\n*චැනලය: {}*\n*වීඩියෝ: {}*\n\n',
				desc_b: '\n\n*සෙවුම් හැඳුනුම: {}*\n\n'
			},
			YTD: {
				desc: 'විවිද ප්‍රමාණයන්ගෙන් Youtube වීඩියෝ ඩවුන්ලෝඩ් කිරීම',
				need: '*කරුණාකර Youtube Url එකක් ඇතුලත් කරන්න*',
				title: '*YOUTUBE DOWNLOADER WITH ADVANCE SIZE*\n\n'
			},
			error: '*උඩුගත කිරීම අසාර්තකයි.. නැවත උත්සහ කරන්න :(*'
		}
	}
}
module.exports = string