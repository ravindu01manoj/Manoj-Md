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
			code: 'EN',
			author: 'Ravindu Manoj'
		},
		file: 'English',
		Country: 'Sri Lanka',
		FileSize: '*File Was Downloaded.. But I Am Not Expert For Upload This File*',
		admin: {
			need_admin: '*I am not admin in this group!️*',
			need_us: '*Need a user...!*',
			kick: {
				desc: 'Remove someone,all,common and difference members in the group',
				help: '.kick all or .kick comm/second group jid or .kick diff/second group jid or reply a member  with .kick or mention',
				all: '*Removing Members...!*',
				all_r: '*Members Are Removed Successfully...*',
				kicked: ' *kicked out of this group!*',
				join: '*I can not access the second group data...is bot in second group?*'
			},
			add: {
				desc: 'Adds someone to the group.',
				invalid: '*Please Input Valid Whatsapp Number!*',
				added: ' *added to the group!*'
			},
			promote: {
				desc: 'Makes any person an admin.',
				admin: '*How can I make someone admin who is already admin?*',
				done: '*{}, admin role was given!*'
			},
			demote: {
				desc: 'Takes the authority of any admin.',
				admin: '*Not Need...already he is not a admin*',
				done: '*{}, has been demoted!*'
			},
			gpdesc: {
				desc: 'Update Group Description',
				need: '*Need text for description*',
				up: '*Updating Group Description*',
				upd: '*Successfully Uptated To:*\n{}'
			},
			gpsub: {
				desc: 'Update Group Subject',
				need: '*Need text for subject*',
				up: '*Updating Group Subject*',
				upd: '*Successfully Uptated To:*\n{}'
			},
			gpdp: {
				desc: 'Update Group Display Picture',
				need: '*Need image for display picture*',
				up: '*Updating Group Display Picture*',
				upd: '*Successfully Uptated*'
			},
			invite: {
				desc: "Provides the group's invitation link.",
				link: '*Invitation link: https://chat.whatsapp.com/{}*'
			},
			mute: {
				desc: 'Mute the group chat. Only the admins can send a message.',
				done: '*Group chat muted!*'
			},
			unmute: {
				desc: 'Unmute the group chat. Anyone can send a message.',
				done: '*Group chat unmuted!*'
			},
			lock: {
				desc: 'lock the group. Only the admins can edit the group info',
				done: '*Group locked!*'
			},
			unlock: {
				desc: 'Unlock the group. Anyone can edit the group info',
				done: '*Group unlocked!*'
			},
			revoke: {
				desc: 'Revoke The Group Link',
				help: '.revoke or .revoke link',
				done: '*Group Revoked*\n*New Link: {}*'
			}
		},
		age : {
			desc: 'Calculate Your Age From Birthday',
			need: '*Enter With Your BirthDay*',
			future: '*How I Calculate Age Of Future Baby..?*',
			wrong: '*Wrong Age(yyyy-mm-dd) Format...*',
			msg: '*AGE CALCULATION*\n\n*AGE:- {} Years, {} Months, And {} Days*\n*MONTHS:- {} Month since your birth*\n*DAYS:- {} Days since your birth*\n*HOURS:- {} Hours since your birth*\n*MINUTES:- {} Minutes since your birth*\n*SECONDS:- {} Seconds since your birth*\n\n*NEXT:- {} Days left for your next birthday*'
		},
		alive : {
			desc: 'The Alive Message',
			msg : 'Start\n{start:alive}\n\nAdd Text Message (keywords: #rate #device #rule)\n'
                   + '{text:*Hi! #user*\n\nI Am #myname\n\nBot Status: Alive\n\n}\n\n'
                   + 'Url Buttons\n'
                   + '{url:GO TO URL|https://github.com/ravindu01manoj}\n'
                   + '{url:SUBSCRIBE YOUTUBE|https://youtube.com/c/TechToFuture}\n\n'
                   + 'Buttons\n'
                   + '{button:RATE US|rate}\n'
                   + '{button:NOTES|notes}\n'
                   + '{button:COMMANDS|help}\n\n'
                   + 'Image (Use Direct Url Or pp Or my_dp Or group_dp)\n'
                   + '{img:https://telegra.ph/file/1d7da58e35215ed3336c5.jpg}\n',
		},
		antispam: {
			text: 'ᴀɴᴛɪ ꜱᴘᴀᴍ ᴄʟᴇᴀʀ ʀᴇʙᴀɴ',
			reply: '❉Safe Mode Activating....'
		},
		apk: {
			desc: 'Apk Download From Playstore',
			used: 'apk https://play.google.com/store/apps/details?id=com.whatsapp',
			need: '*Need Playstore Application Url*',
			novalid: '*Please Enter The Valid Url!*',
			notfound: '*Application Download Url Not Found..!*',
			download: '*Downloading Your APK!*',
			upload: '*Uploading Your APK!*',
			info: '*Name: {}*\n\n*About: {}*\n\n*Version: {}*\n\n*Type: {}*\n\n*Rating: {}*\n\n*Ratings: {}*\n\n*Content Rating: {}*\n\n*Developer: {}*\n\n*Installs: {}*\n\n*Whats New: {}*\n\n*Description:* ```{}```'
		},
		apks: {
			desc: 'Apk Search From Playstore',
			used: 'playstore whatsapp',
			need: '*Need Any Application Name*',
			sec: 'All Results!*',
			notfound: '*Application data Not Found..!*',
			load: '*Loding Aplication Info!*',
			search: '*Seaching Aplications..!*',
			list: '\n\n*Search Id* : {}\n\n',
			info: '*Link:* {} \n\n*Name: {}*\n\n*About: {}*\n\n*Version: {}*\n\n*Type: {}*\n\n*Rating: {}*\n\n*Ratings: {}*\n\n*Content Rating: {}*\n\n*Developer: {}*\n\n*Installs: {}*\n\n*Whats New: {}*\n\n*Description:* ```{}```'
		},
		attp: {
			rgb_desc: 'Create RBG Color Animated Sticker',
			attpB: {
				desc: 'Text to Sticker Commands',
				used: 'attpB example',
				need: '*Please Enter a Text*',
				title: 'TEXT TO STICKER CONVERTING COMMANDS',
				sel: 'SELECT STICKER!',
				msg: '\n\n*Input:* {}\n\n{}\n\n'
			},
			attpC: {
				used: 'attpC example1/example2',
				need: '*Please Enter The Two Text example1/example2*',
				msg: '\n\n*Input 1:* {}\n*Input 2:* {}\n\n{}\n\n'
			},
			emojimix : {
				desc: 'Mix Two Emojis',
				need: '*Two emojis required*',
				mix: '*Mixing {} & {}*',
				error: '*Can Not Mix {} & {} :(*'
			}
		},
		bcope: {
			desc: 'Search And Download Sinhala Subtitles using baiscopelk',
			need: '*Need Film Name Or Baiscope Link*',
			download: '*Downloading Subtitles...*',
			upload: '*Uploading Subtitles...*',
			notfound: '*I can not Find Anything :(*',
			cap: '*Name:* {}\n\n*Author:* {}',
			search: '*Searching Sinhala Subtitles..*',
			title: 'SINHALA SUBTITLE DOWNLOADER',
			desc_a: '\n\nSearchId: {}'
		},
		boom: {
			desc: 'Send a message as Boom',
			help: 'boom 25',
			need: '*Please Reply A message!*',
			boom: '*Booming started! .boom stop for stop the boom*',
			suc: '*Successfully Stoped*'
		},
		cal : {
			desc: 'The Calculater',
			need: '*Enter A Math*'
		},
		chat_settings: {
			done: '*{}, Successfully Added To {} List*',
			owner: '*Do Not Use Owners\' Numbers*',
			need: '*Please Reply To A User*',
			superchat: '*Remove This Chat From The SuperChat List Using The .remove Command And Try Again*',
			banchat: '*Remove This Chat From The BannedChat List Using The .remove Command And Try Again*',
			superchat_desc: 'Add Chat To SuperChat List',
			superuser_desc: 'Make Someone A Super User Of Bot',
			banchat_desc: 'Add Chat To BannedChat List',
			jid_set_desc : 'Add Group Jid To {} List',
			removed: '*{} Was Removed From {} List*',
			remove_desc: 'Remove Chats From SuperChats,SuperUsers,Bannedchat,WelcomeMessageGroups,GoodByeMessageGroups,SubjectUpdateMessageGroups,EditUpdateGroups,MuteUpdateGroups,PromoteUpdateGroups,DemoteUpdateGroups',
			superchat_help: 'Enter the chats into the Super Chat list using the .superchat command. Then the bot will only work in SuperChat..not applicable to private commands ... if there are no superchats the bot will work in all chats'
		},
		converter: {
			mp4audio_desc: 'Converts video to sound.',
			mp4audio_need: '*You Must Reply to a Video!*',
			mp4audio: '```Converting Video to Audio..```',
			sticker_desc: 'Converts the sticker to a photo.',
			sticker_need: '*Reply to a Animated sticker!*',
			sticker_need_n: '*Reply to a Non Animated sticker!*',
			animstick: 'Converts the sticker to a video.',
			anim: '```Media Downloading and Converting...```',
			sticker: '```Media Downloading and Converting...```',
			bland_err: '```Incorrect Blend Effect Entered!```\n```Existing Commands:```\n\n*$dodge* - Applies a pink color filter to the video.\n*$multiply* - Applies a green color filter to the video.\n*$grainmerge* - Increases the contrast of the video.\n*$and* - Applies black lightning effect according to the speed of the video.\n*$or* - Applies a white lightning effect according to the speed of the video.\n*$burn* - Applies green contrast to video.\n*$difference* - Shows the differences by applying green relief to the video.\n*$grainextract* - Shows the differences by applying gray relief to the video.\n*$divide* - Demonstrates the differences by applying a pink relief to the video.\n*$xor* - Applies both green relief and lightning effect to video.\n*$hardmix* - Mixes the colors of the video into a yellow and red tone.\n*$negation* - Turns the dynamics of the video to pink.',
			bland_need: '```You Need To Enter Any Blend Effects!\n```Existing Commands:```\n\n*$dodge* - Applies a pink color filter to the video.\n*$multiply* - Applies a green color filter to the video.\n*$grainmerge* - Increases the contrast of the video.\n*$and* - Applies black lightning effect according to the speed of the video.\n*$or* - Applies a white lightning effect according to the speed of the video.\n*$burn* - Applies green contrast to video.\n*$difference* - Shows the differences by applying green relief to the video.\n*$grainextract* - Shows the differences by applying gray relief to the video.\n*$divide* - Demonstrates the differences by applying a pink relief to the video.\n*$xor* - Applies both green relief and lightning effect to video.\n*$hardmix* - Mixes the colors of the video into a yellow and red tone.\n*$negation* - Turns the dynamics of the video to pink.',
			bland_desc: 'Applies the selected Blend effect to videos.'
		},
		crypt: {
			endesc: 'Encrypt Any Message With Password',
			enneed: 'Reply To A Message With .encrypt & your password \n\n.encrypt pasword1234',
			dedesc: 'Decrypt Any Message With Password',
			deneed: 'Reply To A Encrypted Message With .decrypt & your password \n\n.decrypt pasword1234',
			erren: '*I Cant Encript This Text*',
			errde: '*I Cant Decript This Text*',
			wrong: '*Your Password Is Incorrect.. Please Use Correct Password*',
			inval: '*This Is Not Valid Encripted Code*'
		},
		database: {
			nologin: '*You are not a registered user of Sew Queen ... Please use .register or .login*',
			success: '```Data Was Successfully Updated```',
			err: '```Login fail\nYour Database Url Is Not valid\nPlease Renew Your Database Url.. Use .register mongodb url```'
		},
		dict: {
			desc: 'The English dictionary.\nEg: .dict car',
			title: '*The Result For Your Word* \n\n\n',
			eg: '*Example:* ',
			def: '*Definition:* ',
			need: '*Enter A English Word*',
			gen: '*Loading... Please Wait...*',
			err: '*No English word like this can be found*'
		},
		download: {
			needi: '*Reply To Any Image!*',
			needv: '*Reply To Any Video!*',
			needa: '*Reply To Any Audio!*',
			needt: '*Reply To Any Text!*',
			needat: '*Please Enter The Text!*',
			needrep: '```Please reply to Any Message!```',
			lang: 'Language',
			from: 'Translated Language',
			result: 'Translate',
			err: {
				tik: '*Sorry I Could Not Find This Tiktok Video!*',
				fb: '*Sorry I Could Not Find This Facebook Video!*',
				yt: '*Sorry I Could Not Find This Youtube Video!*',
				insta: '*Sorry I Could Not Find This Instagram Video!*',
				github_p: '*Sorry I Could Not Find This Github Profile!*',
				mfire: '*Sorry I Could Not Find This Mediafire File!*',
				iurl: '```Do Not Use Bot Here.. This Is Your Log Number```',
				song: '*Sorry I Could Not Find This Song!*',
				twt: '*Sorry I Could Not Find It!*',
				site: '*Sorry I Could Not Find This Site!*',
				sapk: '*Sorry I Could Not Find Your Search!*',
				git: '*Sorry I Could Not Find master Branch Of this Repo!*\n\n Use Like This\n.gitclone RepoUrl/Branch',
				apk: '*Sorry I Could Not Find This Apk!*',
				translate: 'Sorry I Could Not Translate This Text!*'
			}
		},
		editor: {
			wait: '_This process may take a while.._',
			meme_desc: 'Replied Image To Memes',
			meme_set: '```Making Meme With Your Image...```',
			noapi: '*DeepAI API Key Not Found!*',
			edit: '```Editing.... Please wait..```',
			cnvt: '```Converting.... Please wait..```',
			qr_desc: 'Converts the given text into a qr code image.',
		},
		err: '*Error Detected*\n\nError : *{}*\n\n*Message: {}*\n\nAn error has occurred!\n\nYou Can Join our  telegrame ( *t.me/SewQueen* ) Group or Whatsapp (Sew Queen helping group ==> https://chat.whatsapp.com/BOATClyaTDkF7R0B2aUxq3)\n\nDo Not Use Bot Here',
		exet: {
			sterr: "I Can't Post This Status"
		},
		fb: {
			desc: 'Download facebook videos',
			need: '*Need FaceBook Video Url*',
			dload: '*Downloading Your FaceBook Video*',
			uload: '*Uploading Your FaceBook Video*',
			error: '*I can not download your facebook video :(*'
		},
		ffmpeg: {
			desc: 'Applies the desired ffmpeg filter to the video.\n⌨️ Example: .ffmpeg fade=in:0:30',
			edit: 'Applying Effect.. please wait',
			need: 'Need Media and Filter Name!\nℹ️ Ex: ```.ffmpeg fade=in:0:30```\nℹ️ Ex: ```.ffmpeg curves=vintage, fps=fps=25```'
		},
		game: {
			dice: {
				desc: 'Dice Rolling Game',
				process: '*Rolling*'
			},
			shells: {
				desc: 'Shelling Game',
				process: '*Shelling*'
			},
		},
		gdrive: {
			desc: 'Download Content From Google Drive Link',
			need: '*Need Google Drive Link*',
			dload: '*Downloading Content From Google Drive Link*',
			uload: '*Uploading Content From Google Drive Link*',
			error: '*I can not download your Google Drive Content :(*'
		},
		gitdl: {
			desc: 'Download Github Repos',
			need: '*Use Like :- .gitdl githublink/branch*',
			dload: '*Downloading Your Github Repo*',
			uload: '*Uploading Your Github Repo*',
			error: '*I can not download your Github Repo :(*'
		},
		gimg: {
			desc: 'Download Images From Google (95+ results)',
			need: '*Enter a text*',
			dload: '*Searchig Images...*',
			title: '*GOOGLE IMAGE SEARCH RESULTS*',
			msg: '\n\n*Search Id:-* {}\n\n',
			error: '*I can not found anything :(*'
		},
		info: {
			desc: 'Displays metadata data of group or person.',
			user: '*Person Meta Data*\n\n*Person JID:* {} \n*Person Status:* {}',
			bis: '\n\n*Address :* {}\n\n*Description :* {}\n\n*Website :* {}\n\n*Email :* {}\n\n*Category :* {}\n\n',
			err: 'Not Preview',
			done: 'Success',
			per: '*Not Permission*',
			userc: '*Count(Group Memvmbers)*\n\n*All Participants :* {}\n*All Admins:* {}\n\n\n*Member Count With Country*\n\n```Sri Lanka(94) : {}\nUnited States(1) : {}\nRusia(7) : {}\nIndia(91) : {}\nUnited Kingdom(44) : {}\nIndonesia(62) : {}\nPakistan(92) : {}\nMorocco(212) : {}\nBangladesh(880) : {}\nAzerbaijan(994) : {}\nOther : {}```',
			groupc: '*Group Name:* {} \n*Group ID:* {} \n*Founder:* {} \n*Invite Link:* https://chat.whatsapp.com/{} \n\n{}\n\n*Description:* \n\n{}',
			jid: {
				desc: 'Show The Group Jid',
				msg: '{}'
			},
			wame: {
				desc: 'Get a link to the user chat.',
				msg: '*Chat link from* @{} : https://wa.me/{}',
				need: '*Give me a user!*'
			}
		},
		insta: {
			desc: 'Download Instagram videos',
			need: '*Need Instagram Video Url*',
			story: '*Use This Link With .iguser or .instastory Cammand*',
			dload: '*Downloading Content From Instagram Url*',
			uload: '*Uploading Content From Instagram Url*',
			error: '*I can not download your Instagram video :(*'
		},
		instastory: {
			desc: 'Instagram Story Download',
			need: '*Need Instagram Story Url*',
			notfound: '*Story Not Available*',
			load: '*Prasing Instagram Story Data*',
			error: '*User Not Found Please Try Again :(*'
		},
		joke: {
			joke: {
				desc: 'Get a random joke.',
				msg: '😹 Joke : {}',
				err: "Sorry I'm busy I can not think a joke now!"
			},
			quote: {
				desc: 'It Sends Random Quote',
				msg: '*📌 Quote :* ```{}```\n\n*✒️ Author :* ```{}```\n',
				err: '```Sorry,I could not find a quote.```'
			}
		},
		link: {
			desc: 'Send File From Any Direct Link',
			need: '*Please Give Me A Direct Link*',
			err: '*I Can Not Download It :(*',
			up: '*Download From URL and Uploading...*'
		},
		loc: {
			desc: 'It send your location.',
			msg: 'My Location! {}',
			seta: 'degreesLatitude: 24.121231, degreesLongitude: 55.1121221',
			setb: 'degreesLatitude: 8.838637, degreesLongitude: -13.721434'
		},
		log: {
			desc: 'Saves the message you reply to your private number.',
			done: '*Message Successfully Saved to LOG!🎲👑*',
			need: '*Please Reply To Any Message!*',
			err: '*Can not Log This Message!*',
			msg: '```🎯[LOGGED MESSAGE]🎯```\n\n{} \nFrom the group with ID,\n\nwa.me/{} \nFrom User Number \n\nMessage: \n\n{}'
		},
		logo: {
			logoA: {
				desc: 'Text to Image And Logo Making Commands',
				used: 'logoA example',
				need: '*Please Enter a Text*',
				title: 'TEXT TO IMAGE CONVERTING COMMANDS',
				sel: 'SELECT LOGO!',
				msg: '\n\n*Input:* {}\n\n{}\n\n'
			},
			logoB: {
				used: 'logoB example1/example2',
				need: '*Please Enter The Two Text example1/example2*',
				msg: '\n\n*Input 1:* {}\n*Input 2:* {}\n\n{}\n\n'
			},
			png : {
				desc: 'Emoji To Png : 15+ Png For One Emoji',
				help: 'png💖',
				need: '*Need A Emoji*',
				err: '*I Can Not Found This Emoji :(*',
				title : 'Select The Type Of Emoji To Png',
				msg: '*EMOJI TO PNG*\n\nName : {}\nUnicode: {}\nDesc : {}\n\nSelect The Type',
				sel : 'SELECT'
			},
			fancy: {
				desc:'Convert Text To Fancy Text',
				need:'*Enter A Text..!*',
				msg: '*FANCY TEXT GENERATER*\n\n*Input:-* {}\n\n'
			},
		},
		menu: {
			header: 'Start\n{start:menu_header}\n\nAdd Text Message (keywords: #rate #device #rule)\n' + '{text:┏━━━━━━━━━━━━━━━━━━━━━━━━━\n┃   *MANOJ-MD WHATSAPP BOT*\n┗━━━━━━━━━━━━━━━━━━━━━━━━━\n\n*👨‍💻 COMMAND LIST 👨‍💻*}\n\n' + 'Add 3 Emoji For List\n' + '{emoji:👨‍💻/🕊️/🌳}\n\n' + 'Url Buttons\n' + '{url:GO TO URL|https://github.com/ravindu01manoj}\n' + '{url:SUBSCRIBE YOUTUBE|https://youtube.com/c/TechToFuture}\n\n' + 'Buttons\n' + '{button:RATE US|rate}\n' + '{button:PROPERTY|alive}\n' + '{button:NOTES|notes}\n\n' + 'Image (Use Direct Url Or pp Or my_dp Or group_dp)\n' + '{img:https://telegra.ph/file/1d7da58e35215ed3336c5.jpg}\n',
			command: ' *Command:-* ',
			desc: ' *Description:-* ',
			help: ' *Help:-* ',
		},
		mfire: {
			desc: 'Download Content From Mediafire Link',
			need: '*Need Mediafire Link*',
			dload: '*Downloading Content From Mediafire Link*',
			uload: '*Uploading Content From Mediafire Link*',
			error: '*I can not download your Mediafire Content :(*'
		},
		nekobin: {
			desc: 'Replied messages will be added to nekobin.com notes and You Can Get Link For Your Note',
			site: 'https://nekobin.com/api/documents',
			msg: '*Your Note Url: https://nekobin.com/{}*',
			err: '```I Can not access nekobin main site..```'
		},
		news: {
			news: {
				desc: 'Get the days news, add a category after .news .',
				need: '*Please write a category!*\n*Example:* ```.news sports```',
				title: '*📁 Category:* ```{}```\n\n\n',
				msg: '*🎯 News Title:* ```{}```\n*📰 News Content:* ```{}```\n*🌐 Read More:* ```{}```\n\n',
				err: "```oops...I couldn't find a category with this name.```"
			},
			show: {
				desc: 'Get info related to tv series and shows',
				need: '*Give me the show name..!*',
				msg: '*Name*: {}\n*Type*: {}\n*Type*: {}\n*Summary*: {}\n*Official Site*: {}',
				err: "I couldn't find anything"
			},
			film: {
				desc: 'Get info related to movies',
				need: '*Give me the movie name..!*',
				msg: '*📽️ The Movie Info*\n\n```Title      : {}\nYear       : {}\nRated      : {}\nReleased   : {}\nRuntime    : {}\nGenre      : {}\nDirector   : {}\nWriter     : {}\nActors     : {}\nPlot       : {}\nLanguage   : {}\nCountry    : {}\nAwards     : {}\nBoxOffice  : {}\nProduction : {}\nimdbRating : {}\nimdbVotes  : {}```'
			},
			ip: {
				desc: 'gives you the detail of your IP',
				need: '*Enter Your IP Address..!*',
				msg: '*🔴 IP :* ```{}```\n\n*⚙️ VERSION :* ```{}```\n*🌐 CONTINENT :* ```{}```\n\n*🗺 COUNTRY :* ```{}```\n*🔢 COUNTRY CODE :* ```{}```\n*✈️ COUNTRY CODE ISO :* ```{}```\n*🏙️ COUNTRY CAPITAL :* ```{}```\n*🔗️ COUNTRY DOMAIN :* ```{}```\n*🏖️️ COUNTRY AREA :* ```{}```\n*🏕️️ POPULATION :* ```{}```\n\n*🌍 REGION :* ```{}```\n*♦️ REGION CODE :* ```{}```\n*🚩 CITY :* ```{}```\n*🏛 ZIP :* ```{}```\n*🚀 LANGUAGE :* ```{}```\n*💸 CURRENCY :* ```{}```\n*💸 CURRENCY NAME :* ```{}```\n\n*📡 ISP :* ```{}```\n*🛡 PROXY :* ```{}```\n*🔗️ WEBSITE :* ```{}```\n*🧬 CREATED :* ```{}```\n'
			}
		},
		notes : {
			desc: 'Saved Message By Owner',
			start : '*The Saved Message By Owner..*',
			msg : 'Start\n{start:notes}\n\nAdd Text Message (keywords: #rate #device )\n'
                   + '{text:Hi! #user\n\n*No Saved Message*\n\n}\n\n'
                   + 'Url Buttons\n'
                   + '{url:GO TO URL|https://github.com/ravindu01manoj}\n'
                   + '{url:SUBSCRIBE YOUTUBE|https://youtube.com/c/TechToFuture}\n\n'
                   + 'Buttons\n'
                   + '{button:RATE US|rate}\n'
                   + '{button:PROPERTY|alive}\n'
                   + '{button:COMMANDS|help}\n\n'
                   + 'Image (Use Direct Url Or pp Or my_dp Or group_dp)\n'
                   + '{img:https://telegra.ph/file/1d7da58e35215ed3336c5.jpg}\n',
		},
		novel : {
			desc: '1000+ sinhala novels download and read',
			error: '*I Can Not Patch Novels Data :(*',
			dl: '*Downloading Novel*',
			up: '*Uploading Novel*',
			head: '*SINHALA NOVEL DOWNLOADER*',
			body: '\n\n*Selected Category :-* {}\n\n',
			body2: '\n\n*1000+ Sinhala Novels*\n\n'
		},
		ocr: {
			desc: 'Reads the text on the photo you have replied.',
			geting: '```Your Image downloading & reading...```',
			err: "```I couldn't read this :/```\n*Error:*```{}```",
			data: '*Language:* ```{}```\n*Here is what I read:* ```{}```'
		},
		own: {
			dp: {
				desc: 'Update Bot Display Picture',
				need: '*Need image for display picture*',
				up: '*Updating Bot Display Picture*',
				upd: '*Successfully Uptated*'
			},
			comm: {
				desc: 'Show common members in two groups',
				help: '.comm exsample1@g.us/exsample2@g.us',
				need: '*Need two group jids with spliting /*',
				join: '*I can not access the group data...is bot in groups?*',
				done: '*Common Members In {} & {}\n\n{}*',
				make: '\n⚈ @'
			},
			diff: {
				desc: 'Show common members in two groups',
				help: '.diff exsample1@g.us/exsample2@g.us',
				done: '*Difference Members In {} & {}\n\n{}*'
			},
			block: {
				desc: 'Block a user',
				done: '*Blocked!*'
			},
			unblock: {
				desc: 'Unblock a user',
				done: '*Unblocked!*'
			},
			join: {
				desc: 'Join a group using group link',
				need: '*Please enter the valid group link*',
				done: '*Successfully Joined*'
			},
			about: {
				desc: 'Upadate About',
				need: '*Please enter a text*',
				done: '*Successfully updated*'
			},
			left: {
				desc: 'Left The Group',
				left: '*Bye bye! I am going ✈️!*'
			}
		},
		pdf: {
			desc: 'Make New Pdf With Images',
			newpdf : '*Method*\n\n    *use {}page with image to add new page for pdf*\n    *use {}topdf with pdf filename for make new pdf with images you added*',
			srch: '*Searching PDF...!*',
			upload: '*Uploading Pdf...*',
			notFound: '*Not Found Images For Make Pdf.*\n*{}pdf For Get More Details..*',
			newimg : '*New Pdf Started...1 Image Added*',
			imgadd : '*{} Image Added*',
			needimg : '*Use With Image...!*'
		},
		poll: {
			need: '*Need Poll Id Or Make New Poll ==> Reply .poll to example msg *\nex: {title},{button},{option head},{options1,options2,options3,...}',
			non: '*Poll Was Closed Or Not Valid Poll Data For This Id*',
			getc: 'Get Result',
			closec: 'Close Poll And Get Result',
			rest: 'Poll Results',
			test: '*You Are Already Voted..*',
			done: '*Successfully Added Your Vote..*',
			needg: 'Use Group For Make Poll',
			needo: 'need More Poll Options',
			loadid: '*Genarating Your Poll Id.....*\nyou can active Your Poll in Any Group Using The poll Id Like This\n\n.poll rgms_91938678912',
			clpoll: 'Poll Was Closed',
			endpoll: '*Successfully Deleted..!*',
			respoll: '\n\n*--The Poll Result--*\n\n```',
			fullres: '```\n\n Full Details\n\n\n'
		},
		rate: {
			done: '*Thanks For Rate Us..*',
			msg: '\n┏━━━━━━━━━━━━━━━━\n┃  ❖❖ RATINGS ❖❖\n┃\n┃  ✭✭✭✭✭ = {}\n┃  ✭✭✭✭✩ = {}\n┃  ✭✭✭✩✩ = {}\n┃  ✭✭✩✩✩ = {}\n┃  ✭✩✩✩✩ = {}\n┃\n┗━━━━━━━━━━━━━━━━',
			need: 'Give Me The Best Rating'
		},
		readmore : {
			desc: 'Make Readmore Text',
			need: '*Reply To A Text... use / for split the text*'
		},
		removebg: {
			desc: 'Removes the background of the photos.',
			needapi: '*Need Api Key*\n```Please Add The Api Key Using Removebg Site remove.bg ```',
			edit: '*Removing Background...*'
		},
		report: {
			desc: 'Report Unusual Activity',
			msg: "╔═══════════ೋೋ═══════════╗\n╠   *Unusual Activity Detected*\n\n{a}\n╠           *Group Admins*                      \n╚═══════════ೋೋ═══════════╝\n\n_*Please Wait For Admin's Respond*_",
			done: '*⚠⚠Report Accepted⚠⚠*\n✔'
		},
		set : {
			desc : 'Change Default String In Database',
			need : '*Please Reply To A Message*',
			done : '*Successfully Changed {}*',
			error : '*Not String Found Like This*',
			listT : '*Manoj Multi-device Database Editor*\n\n*You Can use This Keywords For Every Strings*\n\n*KeyWords*\n\n```#user :- UserName\n#rate :- Rating Details\n#device :- User Device\n#ram :- Server Ram\n#storage :- Server Storage\n#my_name :- Bot Number User Name```',
			wrong : '*Canot Decrypt Your Reply Msg... Please Reply Like Example...*'
		},
		scam: {
			desc: 'Creates  fake actions.',
			need: '*You Must Enter Fake Action!*\nExisting Types: ```typing & recording & online & stop```',
			scam_s: '*Fake Action : --{}--*',
			err: '```Wrong Action Entered! Please use existing types.: typing & recording & online & stop```'
		},
		screenshot : {
			desc : 'Take a screenshot of the site',
			need : '*Please Enter A Url*',
			error : '*Not Found Site Like This :(*'
		},
		start: {
			shutdown: {
				desc: 'Shutdown Your Bot',
				done: '*⛔ Shutting Down Manoj Multi-device Whatsapp Bot*',
			},
			start: {
				desc: 'Start Your Bot',
				boot: '```Booting...```',
				done: '*Manoj Multi-device Whatsapp Bot Started Successfull!*'
			}
		},
		stick_cmd: {
			desc: 'Convert Sticker To Command',
			help: 'stickcmd mute',
			need: '*Reply To A Sticker*',
			needc: '*Use Like This => .stickcmd mute*',
			done: '*Successfully created. Now You can use sticker for active {} command*',
			rem_desc: 'Remove Sticker Command From List',
			rem_no: '*No Saved Commands!*',
			rem_done: '*Successfully Removed {} From The List!*',
		},
		sticker: {
			desc: 'It converts your replied or used photo or video or gif to sticker.',
			help: '.sticker packname/author',
			get_desc: 'It Changes packname and author name of sticker.',
			get_help: '.stickget packname/author',
			need: '*Reply or Use with to a photo or video or gif!*',
			download: '*Media downloading & converting to a sticker...*',
			change: '*Changing packname and author name of this sticker...*',
			get_need: '*Please Reply To a Sticker!*'
		},
		tag: {
			admin_desc: 'Tags admins in the group.',
			err: '*I am not admin in this group!*',
			scan: '*Check The Number Is On Whatsapp',
			need: '*Please Enter A Number!*',
			suc: '*Number Is On Whatsapp*',
			unsuc: "*Number Isn't On Whatsapp*",
			mem: '\n\n   ❄Group Members❄\n\n',
			list: '💠 @{a}\n▫️👑 wa.me/{b}\n\n',
			tlist: '▫️💠 @{a} 💠\n',
			title: '\n\n◻    🔱    *👑 Group Admins 👑*    🔱    ◻\n\n\n'
		},
		time: {
			hour: 'hour',
			minute: 'minute',
			sec: 'second'
		},
		tiktok: {
			desc: 'Download Content From Tiktok Link',
			need: '*Need Tiktok Link*',
			img: 'https://telegra.ph/file/b22a8781022d815fb4bcd.png',
			dload: '*Downloading Content From Tiktok Link*',
			uload: '*Uploading Content From Tiktok Link*',
			error: '*I can not download your Tiktok Content :(*'
		},
		trt: {
			desc: 'Language Transelate',
			used: 'trt auto/en',
			need_r : '*Reply To A Text*',
			needlang : '*Need Two Language*\n*Example: .trt auto/en or .trt si/en*',
			err : '*Can Not Translate This :(*',
			done : '*TRANSLATION SUCCESSFULL*\n*FROM : {}*\n*TO : {}*\n*TEXT :* ```{}```'
		},
		truecaller: {
			desc: 'Search Number In truecaller site',
			need: '*Need a number*',
			img: 'https://telegra.ph/file/36d84d5183984bc7b3bdc.jpg',
			load: '*Searching...*',
			error: '*The Number Not Found :(*'
		},
		twitter: {
			desc: 'Download Any Content From Twiter Link',
			need: '*Need Twitter Link*',
			text: '*TWITTER CONTENT DOWNLOADER*\n\n*USER:- {}*\n\n*CONTENT TYPE:- {}*\n\n*TEXT:- {}*',
			dload: '*Downloading Content From Twitter Link*',
			uload: '*Uploading Content From Twitter Link*',
			error: '*I can not download content from your twitter link :(*'
		},
		url : {
			desc: 'Image or video to a link',
			need: '*Use With Image Or Video*',
			dop: '*Converting to Link*'
		},
		unit: {
			unit_desc: 'Converts units.',
			unit_use: '.unit 50',
			need_n: '*Please Use Valid Value*',
			doing: '*Converting...*',
			list_m_t: 'Unit Converter',
			list_m_b: '\n\nSelect The Input Unit To Covert',
			list_m_k: 'Select!',
			list_t: ['Length Options', 'Area Options', 'Speed Options', 'Weight Options', 'Volume Options', 'Temp Options'],
			res_len: '*Converted Length*\n\n*Millimeters :* {}\n*Centimeters :* {}\n*Meters :* {}\n*Kilometers :* {}\n*Inches :* {}\n*Feet :* {}\n*Yards :* {}\n*Miles :* {}\n*Nautical Miles :* {}\n*Smoots :* {}\n',
			res_area: '*Converted Area*\n\n*Sq Millimeter :* {}\n*Sq Centimeters :* {}\n*Sq Meters :* {}\n*Sq Kilometers :* {}\n*Sq Inches :* {}\n*Sq Feet :* {}\n*Sq Yards :* {}\n*Sq Miles :* {}\n*Hectares :* {}\n*Acres :* {}\n',
			res_speed: '*Converted Speed*\n\n*Millimeters / Sec :* {}\n*Centimeters / Sec :* {}\n*Meters / Sec :* {}\n*Kilometers / Sec :* {}\n*Kilometers / Hour :* {}\n*Inches / Sec :* {}\n*Feet / Sec :* {}\n*Yards / Sec :* {}\n*Miles / Sec :* {}\n*Miles/ Hour :* {}\n*Knots :* {}\n',
			res_weight: '*Converted Weight*\n\n*Grams :* {}\n*Kilograms :* {}\n*Quintals :* {}\n*Kilometers :* {}\n*Tonnes :* {}\n*Ounces :* {}\n*Pounds :* {}\n',
			res_volume: '*Converted Volume*\n\n*Millilter :* {}\n*Litres :* {}\n*Cubic Meters :* {}\n*Cubic Inches :* {}\n*Cubic Feet :* {}\n*Cubic Yards :* {}\n*Ounces :* {}\n*Gallons :* {}\n*Pints :* {}\n*Quarts :* {}\n*Tablespoons :* {}\n*Teaspoons :* {}\n',
			res_temp: '*Converted Temp*\n\n*Celcius :* {}\n*Fahrenhite :* {}\n*Kelvin :* {}\n'
		},
		update: {
			alive_desc: 'Gives Bot Status( is alive?)',
			updating: '*Sew Queen Is Updating Now...*',
			update: '*No Update Available..*\n*Your bot is completely up-to-date!*',
			updated: '*Sew Queen Is Successfully Updated..*',
			restart: 'Refreshing Data And Restarting...'
		},
		viweOnce: {
			desc: 'Decrypt ViweOnce Message',
			need: '*Please Reply To ViweOnce Message*',
			doing: '*Decrypting This ViweOnce Message!*'
		},
		voice: {
			tovoice_desc: 'Converts audio to sound recording.',
			voi_err: 'I Can not Convert This Audio',
			voi_desc: 'Converts Audio To Text.',
			voi_text: '*Hey! I secretly listened to these voices and heard :* \n\n'
		},
		warn: {
			need: '*Give Me A User*',
			reset: '*Successfully Reset*',
			warn: '@{} , *⚠️you have been warned⚠️*\n\n*An inappropriate action has been taken*\n\n*You Used:-* {}\n*warning times:-* {}\n*Remaining:-* {}'
		},
		weather: {
			desc: 'Shows the weather.',
			need: '*Please write a location!*\n*Example:* ```.weather polonnaruwa```',
			text: '*📍 Location:* ```{a}```\n\n*☀ Temperature:* ```{b}°```\n*ℹ Description:* ```{c}```\n*☀ Humidity:* ```{d}%```\n*💨 Wind Speed:* ```{e}m/s```\n*☁ Cloud:* ```{f}%```\n',
			err: "```I couldn't find a city with this name!```",
		},
		web: {
			speed_desc: 'Measures Download and Upload speed.',
			speed_help: '.speedtest user or .speedtest server',
			ping_desc: 'Measures your ping.',
			tiny_desc: 'Shorten the long link.',
			cal_desc: 'Powerfull Calculater With >  - + * / × ÷ π e ( ) pie pi log lg ^ 1-9',
			cal_need: '*Need Any Input! Valid ==>  - + * / × ÷ π e ( ) pie pi log lg ^ 1-9*',
			needurl: 'Please Enter The link!',
			short_e: 'I Can Not Short Your Input',
			short_d: '*Original Link:* {a}\n*Short Link:* {b}',
		},
		youtube: {
			song: {
				desc: 'Downloading Songs With Youtube',
				need: '*Please Enter A Song Name*',
				data: '*URL: {}*\n\n*Title: {}*\n\n*Channel: {}*\n\n*Views: {}*\n\n*Category: {}*\n\n*Likes : {}*\n\n*Description : {}*\n\n',
				download: '*I am Searching Your Song*',
				upload: '*I am Uploading Your Song*'
			},
			video: {
				desc: 'Downloading Videos With Youtube',
				need: '*Please Enter A Youtube Url*',
				data: '*URL: {}*\n\n*Title: {}*\n\n*Channel: {}*\n\n*Views: {}*\n\n*Category: {}*\n\n*Likes : {}*\n\n*Description : {}*\n\n',
				download: '*I am Searching Your Video*',
				upload: '*I am Uploading Your Video*'
			},
			yts: {
				desc: 'Search And Download Youtube Videos',
				need: '*Please Enter A Text*',
				err: '*Playlist Not Found :(*',
				search: '*Searching...!*',
				error: '*I Can Not Find Anything :(*',
				title: '*YOUTUBE SEARCH RESULTS*',
				descl: '\n\n*Playlist Name : {}*\n*Channel: {}*\n*Videos: {}*\n\n',
				desc_b: '\n\n*Search Id: {}*\n\n'
			},
			ytd: {
				desc: 'Youtube Video With Advance Download Option',
				need: '*Please Enter A Youtube Url*',
				title: '*YOUTUBE DOWNLOADER WITH ADVANCE SIZE*\n\n'
			},
			error: '*Upload failed. Please try again :(*'
		}
	}
}
module.exports = string