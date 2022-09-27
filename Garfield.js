// Hi  I m
// Tharindu Liyanage 
// I am 16 years old developer...
// From Sri Lanka
// I am a Learning.
// Not more..
// Also I am Student
// Follow My Facebook - https://www.facebook.com/TharinduLiyanages
require('./DataFile')
require('./Buttons')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('garfield-bot-db')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const maker = require('mumaker')
const fetch = require('node-fetch')
const google = require('google-it')
const mel = require('kitsune-api')
const xa = require('xfarr-api')
const hx = require('hxz-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { mediafireDl } = require('./lib/mediafire.js')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const xmodules = require('xfarr-api')
const https = require('https');
const googleTTS = require('google-translate-tts');
//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐼','🦋','🌐']   

	// UCAPAN LEMBUT
const time2 = moment().tz('Asia/Colombo').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapannya2 = `Good Night 🌒`
}
if(time2 < "19:00:00"){
var ucapannya2 = `Good night🌙`
}
if(time2 < "18:00:00"){
var ucapannya2 = `Good afternoon 🌅`
}
if(time2 < "15:00:00"){
var ucapannya2 = `Good afternoon 🌞`
}
if(time2 < "10:00:00"){
var ucapannya2 = `Good morning 🌄`
}
if(time2 < "05:00:00"){
var ucapannya2 = `Good morning 🌅`
}
// Tim3 = Good morning
const time3 = moment().tz('Asia/Colombo').format('HH:mm:ss')
if(time3 < "23:59:00"){
var ucapannya3 = `*Are you crazy ☕*`
}
if(time3 < "19:00:00"){
var ucapannya3 = `*Are you crazy ☕*`
}
if(time3 < "18:00:00"){
var ucapannya3 = `*Are you crazy ☕*`
}
if(time3 < "15:00:00"){
var ucapannya3 = `*Are you crazy ☕*`
}
if(time3 < "12:00:00"){
var ucapannya3 = `*Good morning 🌻*`
}
if(time3 < "05:00:00"){
var ucapannya3 = `*Good morning 🌻*`
}
// Time4 = Good afafternoon
const time4 = moment().tz('Asia/Colombo').format('HH:mm:ss')
if(time4 < "23:59:00"){
var ucapannya4 = `*Are you crazy ☕*`
}
if(time4 < "19:00:00"){
var ucapannya4 = `*Are you crazy ☕*`
}
if(time4 < "4:00:00"){
var ucapannya4 = `*Good Afternoon ☀️*`
}
if(time4 < "12:00:00"){
var ucapannya4 = `*Are you crazy ☕*`
}
if(time4 < "05:00:00"){
var ucapannya4 = `*Are you crazy ☕*`
}
// Good Evening 
const time5 = moment().tz('Asia/Colombo').format('HH:mm:ss')
if(time5 < "23:59:00"){
var ucapannya5 = `*Are you crazy ☕*`
}
if(time5 < "19:00:00"){
var ucapannya5 = `*Good evening 🌻*`
}
if(time5 < "4:00:00"){
var ucapannya5 = `*Are you crazy ☕*`
}
if(time5 < "12:00:00"){
var ucapannya5 = `*Are you crazy ☕*`
}
if(time5 < "05:00:00"){
var ucapannya5 = `*Are you crazy ☕*`
}

// Good night 
const time6 = moment().tz('Asia/Colombo').format('HH:mm:ss')
if(time6 < "23:59:00"){
var ucapannya6 = `*Good Night 🌕*`
}
if(time6 < "19:00:00"){
var ucapannya6 = `*Are You Crazy ☕*`
}
if(time6 < "4:00:00"){
var ucapannya6 = `*Are you crazy ☕*`
}
if(time6 < "12:00:00"){
var ucapannya6 = `*Are you crazy ☕*`
}
if(time6 < "05:00:00"){
var ucapannya6 = `*Are you crazy ☕*`
}
var Antibd
//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []


module.exports = GarfieldNeural = async (GarfieldNeural, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await GarfieldNeural.decodeJid(GarfieldNeural.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await GarfieldNeural.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
const reply = (teks) => {
            GarfieldNeural.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./TempCloud/logo.png`),"sourceUrl": `http://Wa.me//${global.ownernomer}?text=*Hello🦋*`}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            GarfieldNeural.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./TempCloud/logo.png`),"sourceUrl": `http://Wa.me//${global.ownernomer}?text=*Hello🦋*`}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!GarfieldNeural.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
       //Remove from update
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Colombo"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await GarfieldNeural.setStatus(`${GarfieldNeural.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) { 
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await GarfieldNeural.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh}`)
        GarfieldNeural.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./TempCloud/sticker/${anji}.webp`)
					GarfieldNeural.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./TempCloud/vn/${anju}.mp3`)
					GarfieldNeural.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./TempCloud/image/${anjh}.jpg`)
					GarfieldNeural.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./TempCloud/vid/${anjh}.mp4`)
					GarfieldNeural.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: GarfieldNeural.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, GarfieldNeural.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        GarfieldNeural.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            GarfieldNeural.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GarfieldNeural.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await GarfieldNeural.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await GarfieldNeural.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    GarfieldNeural.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    GarfieldNeural.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) GarfieldNeural.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) GarfieldNeural.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) GarfieldNeural.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    GarfieldNeural.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) GarfieldNeural.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) GarfieldNeural.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    GarfieldNeural.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
switch(command){
        case 'inventori': case 'inventory': case 'profile':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var GarfieldNeural = await getBuffer(global.thumb)
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HUNT RESULT🐺 ]_\n`
     teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await GarfieldNeural.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, GarfieldNeural, [{"urlButton": {"displayText": `${global.fbt}`,"url": `${myweb}`}}])
  }
  break
        case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Fish* : ${i.ikan}\n`
     txt += `*🐔Chicken* : ${i.ayam}\n`
     txt += `*🐇Rabbit* : ${i.kelinci}\n`
     txt += `*🐑Sheep* : ${i.domba}\n`
     txt += `*🐄Cow* : ${i.sapi}\n`
     txt += `*🐘Elephant* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'mine':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     GarfieldNeural.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaction\\
 case 'beli': case 'buy':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`What Do You Want To Buy?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Potion* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Bait Food* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Incorrect Format!") }
 }
 break
 case 'sel': case 'jual':{
 if (!q) return  reply(`What Do You Want To Sell??\nExample : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`You Don't Have Enough Fish(es) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Fish(es)* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`You Don't Have Enough Chicken(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Chicken* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`You Don't Have Enough Rabbit(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Rabbit(s)* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`You Don't Have Enough Sheep(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Sheep(s)* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`You Don't Have Enough Cow(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Cow(s)* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`You Don't Have Enough Elephant(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Elephant(s)* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`You Don't Have Enough Iron(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Iron(s)* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`You Don't Have Enough Gold(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Money* : ${getMonay(m.sender)}\n*Your Remaining Gold(s)* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`You Don't Have Enough Emerald(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*You Don't Have Enough Emerald(s) For This Transaction* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Incorrect Format!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return reply('You Can Only Heal When Your Blood Is 0')
 if (isCekDarah > 100) return reply('Your Blood Is Full')
 if (isPotion < 1) return reply(`You Don't Have A Potion, Try Buying It This Way #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Your Bood Is Full')
 }
 break
 case 'hunt': case 'hunting': {
if (q.includes('--help')) return reply(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
  let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HUNT RESULT ]_\n`
     teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
     teksehmazeh += `*🐔Chicken* : ${ayam}\n`
     teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
     teksehmazeh += `*🐑Sheep* : ${domba}\n`
     teksehmazeh += `*🐄Cow* : ${sapi}\n`
     teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Location* : ${lokasinya}\n`
     teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
     teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Hunt Again️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     GarfieldNeural.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await GarfieldNeural.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await GarfieldNeural.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            GarfieldNeural.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
            } else if (!this.game) {
            reply(`TicTacToe🎮 Session Does Not Exist`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Complete Your Previous Suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who Do You Want To Challenge?_\nTag The Person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`The Person You Are Challenging Is Playing Suit With Someone Else :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} To Play Suit

Please @${m.mentionedJid[0].split`@`[0]} To Type Accept/Reject`
            this.suit[id] = {
            chat: await GarfieldNeural.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) GarfieldNeural.sendText(m.chat, `_Suit Time Out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    GarfieldNeural.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    GarfieldNeural.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    GarfieldNeural.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    GarfieldNeural.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    GarfieldNeural.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    GarfieldNeural.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    GarfieldNeural.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    reply('There Are Still Unfinished Sessions!')
                    reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await GarfieldNeural.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'guess': {
                if (!text) return replay(`Example : ${prefix + command} song\n\nOption : \n1. music\n2. picture (indo)\n3. word\n4. sentence\n5. lyrics (indo)\n6. blank (indo)`)
                if (args[0] === "song") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions`)
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await GarfieldNeural.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    GarfieldNeural.sendText(m.chat, `What Is The Name Of This Song?\n\nArtist : ${result.artist}\nTime : 60 seconds`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant To Play? Press The Button Below`, GarfieldNeural.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'picture') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendImage(m.chat, result.img, `Please Answer The Questions Above\n\nDescription : ${result.deskripsi}\nTime : 60 seconds`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'word') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/xmodules/fungames/main/GuessTheWord.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'sentence') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/xmodules/fungames/main/GuessTheSentence.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lyrics') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendText(m.chat, `These Are The Lyrics Of Which Song? : *${result.soal}*?\nTime : 60 seconds`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'blank') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldNeural.sendText(m.chat, `*Answer The Following Questions :*\n${result.soal}*\nTime : 60 seconds`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldNeural.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, GarfieldNeural.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
		
	case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                GarfieldNeural.sendMessage(m.chat, reactionMessage)
            }
            break
		
		
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                GarfieldNeural.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'mysoulmate': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Match Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, jawab, GarfieldNeural.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
ඕක සතියයි 😼`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, jawab, GarfieldNeural.user.name, m, {mentions: menst})
            }
            break
            case 'is':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
GarfieldNeural.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

					break
					            case 'what':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
GarfieldNeural.sendMessage(from, { text: `Question : What ${q}\nAnswer : ${kahk}` }, { quoted: m })

					break
case 'can':
				if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
					const bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
GarfieldNeural.sendMessage(from, { text: `Question : Can ${q}\nAnswer : ${ga}` }, { quoted: m })

					break
case 'how':
				if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
					const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
GarfieldNeural.sendMessage(from, { text: `Question : ${q}\nAnswer : How ${ya}` }, { quoted: m })

					break
case 'rate':
				if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
GarfieldNeural.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

					break
  case 'handsomecheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zenoi`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
GarfieldNeural.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zenoi`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
GarfieldNeural.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })

					break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zenoi`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
GarfieldNeural.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
					case 'me':
case 'who':
			const _0x2e96c4=_0x5817;(function(_0x5b0d5a,_0x156872){const _0x30bcf9=_0x5817,_0x557e93=_0x5b0d5a();while(!![]){try{const _0x17df7a=-parseInt(_0x30bcf9(0xe6))/0x1+parseInt(_0x30bcf9(0xe5))/0x2*(parseInt(_0x30bcf9(0xfd))/0x3)+parseInt(_0x30bcf9(0xea))/0x4*(-parseInt(_0x30bcf9(0xe2))/0x5)+-parseInt(_0x30bcf9(0xe0))/0x6+parseInt(_0x30bcf9(0xed))/0x7+-parseInt(_0x30bcf9(0xfe))/0x8*(-parseInt(_0x30bcf9(0xff))/0x9)+-parseInt(_0x30bcf9(0xfc))/0xa*(parseInt(_0x30bcf9(0xe4))/0xb);if(_0x17df7a===_0x156872)break;else _0x557e93['push'](_0x557e93['shift']());}catch(_0x4afcde){_0x557e93['push'](_0x557e93['shift']());}}}(_0x55c5,0xe1a84));function _0x5817(_0x5666a5,_0x5bea22){const _0x55c5d5=_0x55c5();return _0x5817=function(_0x581726,_0x3a5202){_0x581726=_0x581726-0xdd;let _0x8a046b=_0x55c5d5[_0x581726];return _0x8a046b;},_0x5817(_0x5666a5,_0x5bea22);}if(!text)return replay('Tag\x20Someone,\x20Example\x20:\x20'+(prefix+command));const sarcasm=new Array();function _0x55c5(){const _0x5643a3=['*අර්බුදයට\x20වගකිය\x20යුත්තා\x20👴🏻*','20ipQQWO','29769DClmyT','8qyJmVw','11109339CeMFgq','*ලිංගික\x20ව්‍යවසායකයෙක්*','floor','*පිස්සෙක\x20🌼*','627936rcaCCf','*ලිංගික\x20ව්‍යවසායකයෙක්\x20💧*','6347410XCuQgz','*තෙල්\x20නැවක\x20අයිතිකාරයෙක්\x20🐱*','3316324FQqIlN','14ugiKrw','86528ynCTqu','*Zombie\x20කෙනෙක්\x20\x20🧟‍♂️*','*HIV\x20ආසාදිතයෙක්\x20🐮*','*සමලිංගිකයෙක්\x20🏳️‍🌈*','4gnbGMO','*HIV\x20ආසාදිතයෙක්\x20💦*','*වැඩිපුර\x20පිහිටා\x20ඇති\x20ලිංගික\x20අවයව\x20නිසා\x20මානසික\x20පීඩනයෙක්\x20පෙලෙන්නෙක්\x20🐎*','11788658eCAIDy','*පෙට්‍රල්\x20ජාවාරම්කාරයෙක්\x20🐖*','*ගොනෝරියා\x20ආසාදිතයෙක්\x20💧*','*මහබැංකුව\x20හොරාකන්න\x20රනිල්ට\x20උදව්\x20කරපු\x20කෙනා\x20🐗*','*හොරෙක්\x20🎗️*','*ලිංගික\x20හැසිරීමකදි\x20හෝ\x20මුත්‍රා\x20කිරීමේදී\x20වේදනාවට\x20පත්වන්නෙක්\x20🐖*','*කුක්කු\x20පෙරේතයෙක්\x20(කිරි\x20පිටි)🐽*','*මම\x20වගේ\x20program\x20එකක්\x20👽*','\x20ඔයා*\x20','*පිරිමි\x20ගණිකාවක්\x20👤*','*බෝ\x20ගහක්\x20🦢*','*සිෆිලිස්\x20ආසාදිතයෙක්\x20(RIP)\x20💐*','*පුරුෂ\x20යට\x20ඇඳුම්\x20හොරෙක්\x20🩳','*ලිංගික\x20බෙලහීනතාවයෙන්\x20පෙලෙන්නෙක්\x20🦒*'];_0x55c5=function(){return _0x5643a3;};return _0x55c5();}sarcasm[0x0]=_0x2e96c4(0xf2),sarcasm[0x1]=_0x2e96c4(0xe8),sarcasm[0x2]=_0x2e96c4(0xdd),sarcasm[0x3]=_0x2e96c4(0xdf),sarcasm[0x4]=_0x2e96c4(0xfb),sarcasm[0x5]=_0x2e96c4(0xfa),sarcasm[0x6]=_0x2e96c4(0xe9),sarcasm[0x6]=_0x2e96c4(0xf3),sarcasm[0x7]=_0x2e96c4(0xf6),sarcasm[0x8]='*නාකි\x20මයිනගෙ\x20ලඟම\x20ඥාතියෙක්\x20🐧*',sarcasm[0xa]=_0x2e96c4(0xf1),sarcasm[0xb]='*මුට\x20රිලව\x20කිව්වත්\x20එකයි\x20රිලවට\x20මුගෙ\x20නම\x20කිව්වත්\x20එකයි\x20🐒*',sarcasm[0xc]=_0x2e96c4(0xf0),sarcasm[0xd]='*බෝම්බයක්\x20💣*',sarcasm[0xe]=_0x2e96c4(0xe1),sarcasm[0xf]=_0x2e96c4(0xee),sarcasm[0x10]='*බැසිල්ගෙ\x20කපුට\x20නාවන\x20කෙනා\x20🦨*',sarcasm[0x11]=_0x2e96c4(0xe3),sarcasm[0x14]=_0x2e96c4(0xf7),sarcasm[0x15]=_0x2e96c4(0xe1),sarcasm[0x16]='*පෙට්‍රල්\x20ජාවාරම්කාරයෙක්\x20🐖*',sarcasm[0x17]=_0x2e96c4(0xec),sarcasm[0x18]=_0x2e96c4(0xeb),sarcasm[0x19]=_0x2e96c4(0xef),sarcasm[0x1a]=_0x2e96c4(0xf8),sarcasm[0x1b]='*ට්‍රයිකොමෝනියාසිස්\x20ආසාදිතයෙක්(RIP)\x20🏳️*',sarcasm[0x1c]=_0x2e96c4(0xf9),sarcasm[0x1d]=_0x2e96c4(0xe7),sarcasm[0x1e]=_0x2e96c4(0xf4),sarcasm[0x1f]='*මැරෙන්න\x20හිතුනට\x20කවදාවත්\x20මැරෙන්න\x20එපා\x20👽*';const refi=sarcasm[Math[_0x2e96c4(0xde)](Math['random']()*sarcasm['length'])];GarfieldNeural['sendMessage'](from,{'text':'*'+pushname+_0x2e96c4(0xf5)+refi},{'quoted':m});
													break

					case 'charactercheck':
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Zenoi`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					GarfieldNeural.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
      case 'stupid':
      case 'හුත්තා':
      case 'මෝඩ':
      case 'පිස්සා':
      case 'whotto':
      case 'whotta':
      case 'mf':
      case 'හුකන්නො':
      case 'ක්ක්ක්':
      case 'fuck':
      case 'පොන්නයා':
      case 'වේසිගෙ පුතා':
      case 'amor amor':
      case 'amor':
      case 'අමර':
      case 'අමර අමර':
      case 'boto':
      case 'කැරි බොටෝ':
      case 'කැරි බොටා':
      case 'whotto':
      case 'පකෝ':
      case 'හුත්තා':
      case 'වේසියෙ':
      case 'බොටා':
      case 'gandu':
      case 'madarchod':
      case 'බොටෝ':
      case 'wesiye':
      case 'pakaya':
      case 'hutta':
      case 'ponnaya':
      case 'පොන්නයා':
      case 'හුකහන්':
      case 'වේසි':
      case 'ක්ක්ක්ක්':
      case 'වේසිගෙ':
      case 'බිජ්ජා':
      case 'පකෝ':
      case 'හුත්තො':
      case 'hutto':
      case 'hukahan':
      case 'wesi':
      case 'behenchod':
      case 'behnchoda':
      case 'whotta':
      case 'kari bota':
      case 'පොන්න බොටා':
      case 'simp':
      case 'බොටෝ':
      case 'මෝඩ බොටා':
      case 'බොටා පොන්නයා':
      case 'වේස බොටා':
      case 'පිස්සු බොටා':
      case 'ගෙරි බොටා':
      case 'sexy':
      case 'hot': { const _0x247e70=_0x13a1;function _0x13a1(_0x202023,_0x48159e){const _0x570216=_0x5702();return _0x13a1=function(_0x13a14c,_0x2facd1){_0x13a14c=_0x13a14c-0x1a8;let _0x4c1493=_0x570216[_0x13a14c];return _0x4c1493;},_0x13a1(_0x202023,_0x48159e);}(function(_0x13df6a,_0x2e66ee){const _0x3c5562=_0x13a1,_0x350d8f=_0x13df6a();while(!![]){try{const _0x46ec16=parseInt(_0x3c5562(0x1ac))/0x1+-parseInt(_0x3c5562(0x1ba))/0x2+parseInt(_0x3c5562(0x1b5))/0x3*(-parseInt(_0x3c5562(0x1bc))/0x4)+parseInt(_0x3c5562(0x1b0))/0x5*(-parseInt(_0x3c5562(0x1aa))/0x6)+parseInt(_0x3c5562(0x1ae))/0x7*(-parseInt(_0x3c5562(0x1a8))/0x8)+-parseInt(_0x3c5562(0x1b9))/0x9+parseInt(_0x3c5562(0x1b6))/0xa;if(_0x46ec16===_0x2e66ee)break;else _0x350d8f['push'](_0x350d8f['shift']());}catch(_0x4c3e2d){_0x350d8f['push'](_0x350d8f['shift']());}}}(_0x5702,0x35bab));if(!m[_0x247e70(0x1af)])return replay(''+mess[_0x247e70(0x1ab)]);let member=participants['map'](_0x4ca769=>_0x4ca769['id']),me=m['sender'],jodoh=member[Math[_0x247e70(0x1b1)](Math[_0x247e70(0x1b4)]()*member[_0x247e70(0x1bb)])],jawab=_0x247e70(0x1b3)+command+_0x247e70(0x1a9),ments=[me,jodoh],buttons=[{'buttonId':'👀','buttonText':{'displayText':_0x247e70(0x1b2)+command+_0x247e70(0x1b7)},'type':0x1}];await GarfieldNeural[_0x247e70(0x1ad)](m['chat'],buttons,jawab,_0x247e70(0x1b8),m,{'mentions':ments});function _0x5702(){const _0x55ac79=['*\x20Here\x20Is\x20Your\x20dad','12uZvQTd','group','251886egVjKf','sendButtonText','1631vwSFnD','isGroup','149095LIDoZS','floor','Yes\x20','The\x20*','random','15xmpwpz','9475420Farnsw','\x20\x20is\x20his\x20father\x20💩','Coded\x20by\x20Tharindu\x20Liyanage','2446452WIUNKP','320270ESebeO','length','91216ICqpeX','12832zGVrlv'];_0x5702=function(){return _0x55ac79;};return _0x5702();} }
            break
      case 'thanks':
      case 'tnx':
      case 'thankyou':
      case 'තෑන්ක්ස්':
      case 'බොහොම ස්තූතියි':
      case 'thank':
      case 'tnks':{ function _0x1404(_0x1dabc0,_0x3de601){const _0x516df9=_0x516d();return _0x1404=function(_0x1404e1,_0x5f3990){_0x1404e1=_0x1404e1-0x1ca;let _0x323188=_0x516df9[_0x1404e1];return _0x323188;},_0x1404(_0x1dabc0,_0x3de601);}function _0x516d(){const _0x459ab8=['Coded\x20by\x20Tharindu\x20Liyanage','sender','76QrECtN','130eKosJu','595224XHWWFP','map','9513gsuScK','989814GjQihL','length','floor','263340PWCilw','356064uAYVQG','4407lOIfCP','4KgbrVI','6890SIVDzh','sendButtonText','chat','group'];_0x516d=function(){return _0x459ab8;};return _0x516d();}const _0x2d984a=_0x1404;(function(_0x351151,_0x3eefd1){const _0x303644=_0x1404,_0x2fc45c=_0x351151();while(!![]){try{const _0x30fcc6=-parseInt(_0x303644(0x1cb))/0x1+-parseInt(_0x303644(0x1d2))/0x2*(parseInt(_0x303644(0x1d1))/0x3)+parseInt(_0x303644(0x1d9))/0x4*(parseInt(_0x303644(0x1d3))/0x5)+-parseInt(_0x303644(0x1db))/0x6+-parseInt(_0x303644(0x1cc))/0x7+-parseInt(_0x303644(0x1d0))/0x8+-parseInt(_0x303644(0x1cf))/0x9*(-parseInt(_0x303644(0x1da))/0xa);if(_0x30fcc6===_0x3eefd1)break;else _0x2fc45c['push'](_0x2fc45c['shift']());}catch(_0x1567f1){_0x2fc45c['push'](_0x2fc45c['shift']());}}}(_0x516d,0x1a9c5));if(!m['isGroup'])return replay(''+mess[_0x2d984a(0x1d6)]);let member=participants[_0x2d984a(0x1ca)](_0xbbb289=>_0xbbb289['id']),me=m[_0x2d984a(0x1d8)],jodoh=member[Math[_0x2d984a(0x1ce)](Math['random']()*member[_0x2d984a(0x1cd)])],jawab='*You\x20are\x20welcome\x20💙*',ments=[me,jodoh],buttons=[{'buttonId':'👀','buttonText':{'displayText':'💙'},'type':0x1}];await GarfieldNeural[_0x2d984a(0x1d4)](m[_0x2d984a(0x1d5)],buttons,jawab,_0x2d984a(0x1d7),m,{'mentions':ments}); }
            break
            case 'gm': {  const _0x22c4c0=_0x2a0f;function _0x18d6(){const _0x23b8eb=['35ZbbRpW','Good\x20Morning','Neural\x20Ai','sendButtonText','100936BNPmof','Hello','8716030yZQgig','sender','45vtAoNV','chat','3271416bZyxyc','random','𝙂𝙤𝙤𝙙\x20𝙈𝙤𝙧𝙣𝙞𝙣𝙜\x20🌻','40495hZHlec','120zxaROm','523182TYKVun','map','5147118hfZyBD','1766961uZUXNb','floor'];_0x18d6=function(){return _0x23b8eb;};return _0x18d6();}(function(_0x224fa1,_0x1fdc37){const _0x192c0a=_0x2a0f,_0x5c1def=_0x224fa1();while(!![]){try{const _0x4ccdc1=-parseInt(_0x192c0a(0x1d9))/0x1+-parseInt(_0x192c0a(0x1d6))/0x2+-parseInt(_0x192c0a(0x1d8))/0x3+parseInt(_0x192c0a(0x1d5))/0x4*(-parseInt(_0x192c0a(0x1d4))/0x5)+parseInt(_0x192c0a(0x1d1))/0x6+parseInt(_0x192c0a(0x1c7))/0x7*(parseInt(_0x192c0a(0x1cb))/0x8)+-parseInt(_0x192c0a(0x1cf))/0x9*(-parseInt(_0x192c0a(0x1cd))/0xa);if(_0x4ccdc1===_0x1fdc37)break;else _0x5c1def['push'](_0x5c1def['shift']());}catch(_0x466823){_0x5c1def['push'](_0x5c1def['shift']());}}}(_0x18d6,0xef0a4));if(!m['isGroup'])return replay(''+mess['group']);function _0x2a0f(_0x4f7d01,_0x5445a2){const _0x18d6f5=_0x18d6();return _0x2a0f=function(_0x2a0f91,_0x263269){_0x2a0f91=_0x2a0f91-0x1c7;let _0x22eb96=_0x18d6f5[_0x2a0f91];return _0x22eb96;},_0x2a0f(_0x4f7d01,_0x5445a2);}let member=participants[_0x22c4c0(0x1d7)](_0x151a1e=>_0x151a1e['id']),me=m[_0x22c4c0(0x1ce)],jodoh=member[Math[_0x22c4c0(0x1da)](Math[_0x22c4c0(0x1d2)]()*member['length'])],jawab=_0x22c4c0(0x1d3),ments=[me,jodoh],buttons=[{'buttonId':_0x22c4c0(0x1cc),'buttonText':{'displayText':_0x22c4c0(0x1c8)},'type':0x1}];await GarfieldNeural[_0x22c4c0(0x1ca)](m[_0x22c4c0(0x1d0)],buttons,jawab,_0x22c4c0(0x1c9),m,{'mentions':ments});  }
            break
            case 'gn': {     const _0x6872ac=_0x5821;(function(_0x8d5e5e,_0x4fcb31){const _0x164f67=_0x5821,_0x4d8eb6=_0x8d5e5e();while(!![]){try{const _0x21c00=parseInt(_0x164f67(0x19a))/0x1*(-parseInt(_0x164f67(0x1a9))/0x2)+-parseInt(_0x164f67(0x1a2))/0x3+parseInt(_0x164f67(0x1ac))/0x4*(-parseInt(_0x164f67(0x1a8))/0x5)+parseInt(_0x164f67(0x19c))/0x6+parseInt(_0x164f67(0x1ab))/0x7*(parseInt(_0x164f67(0x1a4))/0x8)+-parseInt(_0x164f67(0x1aa))/0x9*(-parseInt(_0x164f67(0x1a5))/0xa)+-parseInt(_0x164f67(0x1a3))/0xb;if(_0x21c00===_0x4fcb31)break;else _0x4d8eb6['push'](_0x4d8eb6['shift']());}catch(_0x404303){_0x4d8eb6['push'](_0x4d8eb6['shift']());}}}(_0x20ce,0xf097b));if(!m[_0x6872ac(0x199)])return replay(''+mess[_0x6872ac(0x1a0)]);function _0x5821(_0x2dc021,_0x3772f8){const _0x20ce2a=_0x20ce();return _0x5821=function(_0x582107,_0x51a2ad){_0x582107=_0x582107-0x199;let _0x4852ab=_0x20ce2a[_0x582107];return _0x4852ab;},_0x5821(_0x2dc021,_0x3772f8);}let member=participants['map'](_0x34a8f9=>_0x34a8f9['id']),me=m[_0x6872ac(0x1a7)],jodoh=member[Math['floor'](Math[_0x6872ac(0x1a6)]()*member[_0x6872ac(0x19f)])],jawab=_0x6872ac(0x19d),ments=[me,jodoh],buttons=[{'buttonId':_0x6872ac(0x19e),'buttonText':{'displayText':_0x6872ac(0x1a1)},'type':0x1}];function _0x20ce(){const _0x3f2bbb=['length','group','Good\x20Night','1664823yBywet','1523236aYdGwH','1998440TNktjn','61770BHtrME','random','sender','4672345rUDYvR','6PygSjY','2025NShsXs','49blykCJ','8QwCAip','sendButtonText','isGroup','403757CCAWQh','chat','9723798efpQrs','𝙂𝙤𝙤𝙙\x20𝙉𝙞𝙜𝙝𝙩\x20🌃\x20','Hello'];_0x20ce=function(){return _0x3f2bbb;};return _0x20ce();}await GarfieldNeural[_0x6872ac(0x1ad)](m[_0x6872ac(0x19b)],buttons,jawab,'Neural\x20Ai',m,{'mentions':ments});    }
            break            

case 'when':
				if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
					const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
GarfieldNeural.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!text) return replay(`Use Text, Example : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
             reply(awikwok)
              break
case 'checkdeath':
             if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} nexus`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'react': {
                if (!isCreator) return replay(`${mess.owner}`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                GarfieldNeural.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await GarfieldNeural.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return replay(`${mess.owner}`)
                await GarfieldNeural.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n${global.emoji01} Packname : ${global.packname}\n${global.emoji01} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldNeural.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await GarfieldNeural.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await GarfieldNeural.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                await GarfieldNeural.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                await GarfieldNeural.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `╚»˙·٠•●${global.emoji02} Tag All ${global.emoji02}●•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${global.emoji01} @${mem.id.split('@')[0]}\n`
                }
                GarfieldNeural.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            GarfieldNeural.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `${global.emoji01} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: GarfieldNeural.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            GarfieldNeural.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: GarfieldNeural.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            GarfieldNeural.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: GarfieldNeural.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            GarfieldNeural.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ
`
GarfieldNeural.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await GarfieldNeural.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await GarfieldNeural.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `Group Mode`, GarfieldNeural.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await GarfieldNeural.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await GarfieldNeural.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `Mode Edit Info`, GarfieldNeural.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Activated`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Deactivated`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `Antilink Mode`, GarfieldNeural.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${GarfieldNeural.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${GarfieldNeural.user.name} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `Mute Bot`, GarfieldNeural.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await GarfieldNeural.groupInviteCode(m.chat)
                GarfieldNeural.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`Enter The enable/disable Values`)
                if (args[0] === 'enable') {
                    await GarfieldNeural.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await GarfieldNeural.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                GarfieldNeural.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus Handsome`)
                let getGroups = await GarfieldNeural.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sent Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} Seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Script 🌈',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Follow Us ℹ️ ',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu 🦋',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'owner 🦋',
                                    id: 'owner'
                                }
                            }]
                      let txt = `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ\n\n${text}`
                      GarfieldNeural.send5ButImg(i, txt, GarfieldNeural.user.name, global.thumb, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus`)
                let anu = await store.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nFinish Time ${anu.length * 1.5} Seconds`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script 🌈',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Follow Us ℹ️ ',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu 🦋',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'owner 🦋',
                                    id: 'owner'
                                }
                            }]
                      let txt = `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ\n\n${text}`
                      GarfieldNeural.send5ButImg(yoi, txt, GarfieldNeural.user.name, global.thumb, btn)
		}
		reply('Broadcast Success')
            }
            break
            case 'chatinfo': case 'infochat': {
                if (!m.quoted) return reply(`Reply Message`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `${global.emoji01} @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━${global.emoji01} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.emoji01} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                GarfieldNeural.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await GarfieldNeural.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The Message You Replied To Does Not Contain A Reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': case 'pclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${global.emoji02} *Name :* ${nama}\n${global.emoji02} *User :* @${i.split('@')[0]}\n${global.emoji02} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 GarfieldNeural.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': case 'gclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await GarfieldNeural.groupMetadata(i)
                     teks += `${global.emoji02} *Name :* ${metadata.subject}\n${global.emoji02} *Owner :* @${metadata.owner.split('@')[0]}\n${global.emoji02} *ID :* ${metadata.id}\n${global.emoji02} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${global.emoji02} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 GarfieldNeural.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    GarfieldNeural.sendText(m.chat, 'Online List:\n\n' + online.map(v => '🦋 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + command}`)
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await GarfieldNeural.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                let media = await quoted.download()
                let encmedia = await GarfieldNeural.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
case 'meme': case 'stickermemex': case 'stickmemex': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
reply(mess.wait)
mee = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await GarfieldNeural.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) return replay(`Example : ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await GarfieldNeural.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'image': case 'img': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    GarfieldNeural.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'mp4': case 'video': {
                if (!quoted) reply(`Reply Image`)
                if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GarfieldNeural.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'aud': case 'audio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
            if (!quoted) return reply(`Send/Reply Video/Audio You Want To Convert To Audio With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GarfieldNeural.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'mp3': {
            if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GarfieldNeural.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${GarfieldNeural.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'vn': case 'ptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            GarfieldNeural.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'gif': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) return reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GarfieldNeural.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'url': {
                reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['dwyboZDpuSSgbKSgMpwKbXxa','dwyboZDpuSSgbKSgMpwKbXxa']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await GarfieldNeural.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    GarfieldNeural.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
 case 'google': {
if (!args[0]) return reply(`Example: google Sri Lanka`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `#️⃣ *Title* : ${g.title}\n`
teks += `#️⃣ *Description* : ${g.snippet}\n`
teks += `#️⃣ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
           case 'photo': case 'googleimage': {
        if (!text) return reply(`Example : ${prefix + command} Sri Lanka`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * 1)].url
        let buttons = [
                    {buttonId: `photon ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*${global.botname} Image Search Engine*
🦋 *Query* : ${text}
🔗 *Media URL* : ${images}`,
                    footer: `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
               case 'photon':  {
        if (!text) return reply(`Example : ${prefix + command} Sri Lanka`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `photo ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*${global.botname} Image Search Engine*
🦋 *Query* : ${text}
🔗 *Media URL* : ${images}`,
                    footer: `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
        
	    case 'song': case 'ytplay': {  function _0x42bd(_0x399ac3,_0x44b04e){const _0x30a223=_0x30a2();return _0x42bd=function(_0x42bd59,_0xa6bc04){_0x42bd59=_0x42bd59-0xab;let _0x286579=_0x30a223[_0x42bd59];return _0x286579;},_0x42bd(_0x399ac3,_0x44b04e);}const _0x4098be=_0x42bd;function _0x30a2(){const _0x1c7dcb=['1423645PVsAZk','url','ytaudio\x20','sendMessage','ago','thumbnail','*\x0a```Duration```\x20-\x20*','*\x0a```Author```\x20-\x20*','title','1058ufINvx','videos','description','3070900acnTzW','views','1882821uZtYax','1579onxHKr','timestamp','chat','ytmp4\x20','\x20kuweni','*\x0a```Viewes```\x20-\x20*','name','*\x0a```Channel```\x20-\x20*','*\x0a```Description```\x20-\x20*','random','\x20```Title```\x20-\x20*','941311cIFOas','author','Example\x20:\x20','𝖭Ξ𝖴𝖱Λ𝖫\x20ΛＩ','3962097MMhOfk','🎶\x20Audio','18sPOjGU','16vripJq','457440joxRBZ'];_0x30a2=function(){return _0x1c7dcb;};return _0x30a2();}(function(_0x209c52,_0x4afc88){const _0x2e696e=_0x42bd,_0x5da1fa=_0x209c52();while(!![]){try{const _0x548072=-parseInt(_0x2e696e(0xb9))/0x1*(-parseInt(_0x2e696e(0xb3))/0x2)+-parseInt(_0x2e696e(0xb8))/0x3+-parseInt(_0x2e696e(0xcc))/0x4+-parseInt(_0x2e696e(0xcd))/0x5*(-parseInt(_0x2e696e(0xca))/0x6)+-parseInt(_0x2e696e(0xc4))/0x7*(parseInt(_0x2e696e(0xcb))/0x8)+-parseInt(_0x2e696e(0xc8))/0x9+parseInt(_0x2e696e(0xb6))/0xa;if(_0x548072===_0x4afc88)break;else _0x5da1fa['push'](_0x5da1fa['shift']());}catch(_0x2bfc4a){_0x5da1fa['push'](_0x5da1fa['shift']());}}}(_0x30a2,0x8528e));if(!text)return reply(_0x4098be(0xc6)+(prefix+command)+_0x4098be(0xbd));let yts=require('yt-search'),search=await yts(text),anu=search[_0x4098be(0xb4)][Math['floor'](Math[_0x4098be(0xc2)]()*0x1)],buttons=[{'buttonId':_0x4098be(0xac)+anu[_0x4098be(0xab)],'buttonText':{'displayText':_0x4098be(0xc9)},'type':0x1},{'buttonId':_0x4098be(0xbc)+anu[_0x4098be(0xab)],'buttonText':{'displayText':'Video\x20📽️'},'type':0x1}],buttonMessage={'image':{'url':anu[_0x4098be(0xaf)]},'caption':_0x4098be(0xc3)+anu[_0x4098be(0xb2)]+_0x4098be(0xb0)+anu[_0x4098be(0xba)]+_0x4098be(0xbe)+anu[_0x4098be(0xb7)]+'*\x0a```Uploaded\x20On```\x20-\x20*'+anu[_0x4098be(0xae)]+_0x4098be(0xb1)+anu['author'][_0x4098be(0xbf)]+_0x4098be(0xc0)+anu[_0x4098be(0xc5)][_0x4098be(0xab)]+_0x4098be(0xc1)+anu[_0x4098be(0xb5)]+'*\x0a```URL```\x20-\x20*'+anu[_0x4098be(0xab)]+'*\x20','footer':_0x4098be(0xc7),'buttons':buttons,'headerType':0x4};GarfieldNeural[_0x4098be(0xad)](m[_0x4098be(0xbb)],buttonMessage,{'quoted':m});  }
            break
            
                         case 'play':  { const _0x4b4573=_0x9532;function _0x1593(){const _0x41a744=['*\x0a```Uploaded\x20On```\x20-\x20*','18SXgouR','5293288dNKxFM','name','*\x0a```URL```\x20-\x20*','ytmp4720\x20','\x20```Title```\x20-\x20*','timestamp','ytmp41080\x20','author','videos','132ZZXWgT','chat','ytmp4360\x20','𝖭Ξ𝖴𝖱Λ𝖫\x20ΛＩ','720p\x20📽️','5024652hdKdSH','title','*\x0a```Description```\x20-\x20*','*\x0a```Author```\x20-\x20*','2079850YwhIFb','*\x0a```Channel```\x20-\x20*','49719TnIlkm','6098260nSuyhs','thumbnail','44kxQiHQ','1080p\x20📽','floor','*\x0a```Viewes```\x20-\x20*','360p\x20📽️','description','ago','228yciOqU','10yMAizQ','1461792UqFzqA','url','\x20kuweni','2404dGESXL'];_0x1593=function(){return _0x41a744;};return _0x1593();}(function(_0x55c6e2,_0x2009d8){const _0x310c38=_0x9532,_0x52a0e7=_0x55c6e2();while(!![]){try{const _0x19e402=-parseInt(_0x310c38(0x1af))/0x1*(-parseInt(_0x310c38(0x1a3))/0x2)+-parseInt(_0x310c38(0x1ba))/0x3*(parseInt(_0x310c38(0x19e))/0x4)+-parseInt(_0x310c38(0x19f))/0x5*(parseInt(_0x310c38(0x1a0))/0x6)+-parseInt(_0x310c38(0x195))/0x7+parseInt(_0x310c38(0x1a6))/0x8+-parseInt(_0x310c38(0x1a5))/0x9*(-parseInt(_0x310c38(0x1b8))/0xa)+-parseInt(_0x310c38(0x197))/0xb*(-parseInt(_0x310c38(0x1b4))/0xc);if(_0x19e402===_0x2009d8)break;else _0x52a0e7['push'](_0x52a0e7['shift']());}catch(_0x1ad618){_0x52a0e7['push'](_0x52a0e7['shift']());}}}(_0x1593,0x9474a));if(!text)return reply('Example\x20:\x20'+(prefix+command)+_0x4b4573(0x1a2));let yts=require('yt-search'),search=await yts(text),anu=search[_0x4b4573(0x1ae)][Math[_0x4b4573(0x199)](Math['random']()*0x1)],buttons=[{'buttonId':_0x4b4573(0x1ac)+anu[_0x4b4573(0x1a1)],'buttonText':{'displayText':_0x4b4573(0x198)},'type':0x1},{'buttonId':_0x4b4573(0x1a9)+anu[_0x4b4573(0x1a1)],'buttonText':{'displayText':_0x4b4573(0x1b3)},'type':0x1},{'buttonId':_0x4b4573(0x1b1)+anu[_0x4b4573(0x1a1)],'buttonText':{'displayText':_0x4b4573(0x19b)},'type':0x1}],buttonMessage={'image':{'url':anu[_0x4b4573(0x196)]},'caption':_0x4b4573(0x1aa)+anu[_0x4b4573(0x1b5)]+'*\x0a```Duration```\x20-\x20*'+anu[_0x4b4573(0x1ab)]+_0x4b4573(0x19a)+anu['views']+_0x4b4573(0x1a4)+anu[_0x4b4573(0x19d)]+_0x4b4573(0x1b7)+anu[_0x4b4573(0x1ad)][_0x4b4573(0x1a7)]+_0x4b4573(0x1b9)+anu[_0x4b4573(0x1ad)][_0x4b4573(0x1a1)]+_0x4b4573(0x1b6)+anu[_0x4b4573(0x19c)]+_0x4b4573(0x1a8)+anu[_0x4b4573(0x1a1)]+'*\x20','footer':_0x4b4573(0x1b2),'buttons':buttons,'headerType':0x4};function _0x9532(_0x121526,_0x1ada4e){const _0x159375=_0x1593();return _0x9532=function(_0x95321,_0xd71334){_0x95321=_0x95321-0x195;let _0x520aef=_0x159375[_0x95321];return _0x520aef;},_0x9532(_0x121526,_0x1ada4e);}GarfieldNeural['sendMessage'](m[_0x4b4573(0x1b0)],buttonMessage,{'quoted':m});  }
            break
	    case 'ytmp3': case 'getmusic': case 'ytaudio': {
                let { tharinduaudio } = require('./lib/ytmp3')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await tharinduaudio(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendImage(m.chat, media.thumb,  '```Title :``` *' + media.title + '*\n```URL :``` *' + isUrl(text) + '*\n```Quality :``` *320Kbps*\n', m)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *480p*\n' }, { quoted: m })
            }
            break
            // Hi  I m
// ＮＯＩＺ Ξ
// I am 16 years old developer...
// From Sri Lanka
// I am a Learning. 
// Not more..
// Also I am Student
// Follow My Facebook - https://www.facebook.com/zenoixnoize
case 'ytmp41080': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '1080p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *1080p*\n' }, { quoted: m })
            }
            break
            case 'ytmp4720': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '720p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *720p*\n' }, { quoted: m })
            }
            break
            case 'ytmp480': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '480p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *480p*\n' }, { quoted: m })
            }
            break
            case 'ytmp4360': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *360p*\n' }, { quoted: m })
            }
            break
            case 'ytmp4240': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *240p*\n' }, { quoted: m })
            }
            break
	
		    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendImage(m.chat, media.thumb, `${global.emoji01} Title : ${media.title}\n${global.emoji01} File Size : ${media.filesizeF}\n${global.emoji01} URL : ${urls[text - 1]}\n${global.emoji01} Ext : MP3\n${global.emoji01} Resolution : ${args[1] || '128kbps'}`, m)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) throw 'Reply Message'
                if (!m.quoted.isBaileys) throw `Can Only Reply To Meessages From Bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw`Maybe The Message You Replied Does Not Contain The Video Search Result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${global.emoji01} Title : ${media.title}\n${global.emoji01} File Size : ${media.filesizeF}\n${global.emoji01} URL : ${urls[text - 1]}\n${global.emoji01} Ext : MP3\n${global.emoji01} Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'tts' :{ const _0x30a236=_0x2595;(function(_0x4eb309,_0x49f364){const _0x2c844e=_0x2595,_0x4c6071=_0x4eb309();while(!![]){try{const _0x2d3a6f=-parseInt(_0x2c844e(0xd8))/0x1+parseInt(_0x2c844e(0xe3))/0x2*(parseInt(_0x2c844e(0xe7))/0x3)+-parseInt(_0x2c844e(0xdb))/0x4*(-parseInt(_0x2c844e(0xe6))/0x5)+-parseInt(_0x2c844e(0xd9))/0x6*(-parseInt(_0x2c844e(0xe5))/0x7)+-parseInt(_0x2c844e(0xe8))/0x8*(-parseInt(_0x2c844e(0xe4))/0x9)+parseInt(_0x2c844e(0xdc))/0xa+-parseInt(_0x2c844e(0xdd))/0xb*(parseInt(_0x2c844e(0xe0))/0xc);if(_0x2d3a6f===_0x49f364)break;else _0x4c6071['push'](_0x4c6071['shift']());}catch(_0x1016c2){_0x4c6071['push'](_0x4c6071['shift']());}}}(_0x5054,0x6e04c));if(!text)return reply('Example\x20:\x20'+(prefix+command)+_0x30a236(0xdf));let LANG='en',ttsMessage=text,SPEED=0x1;function _0x2595(_0x44b8f7,_0x2c190e){const _0x505452=_0x5054();return _0x2595=function(_0x2595af,_0x2d6d05){_0x2595af=_0x2595af-0xd8;let _0x19a78a=_0x505452[_0x2595af];return _0x19a78a;},_0x2595(_0x44b8f7,_0x2c190e);}function _0x5054(){const _0x11fb36=['8SCqvTx','13698OswNcP','21aBxpLd','95BkVHKv','98931APxqeF','3216hoDoaW','53791QvaoFR','901206QTcWnN','replace','174884VQqrpJ','5103760DGXBcK','190949mSyzxw','match','\x20kuweni','1404bJfwhJ','sendMessage','audio/mp4'];_0x5054=function(){return _0x11fb36;};return _0x5054();}(langMatch=text[_0x30a236(0xde)]('\x5c{([a-z]{2})\x5c}'))&&(LANG=lang(text),ttsMessage=ttsMessage[_0x30a236(0xda)](langMatch[0x0],''));(speedMatch=text[_0x30a236(0xde)]('\x5c{([0].[0-9]+)\x5c}'))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage[_0x30a236(0xda)](speedMatch[0x0],''));var buffer=await googleTTS['synthesize']({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x30a236(0xe1)](m['chat'],{'audio':buffer,'mimetype':_0x30a236(0xe2),'ptt':!![]},{'quoted':m}); }
    
    break
    case 'stext' :{ const _0x1fba6d=_0x2d0a;(function(_0x5dce2e,_0x5ef983){const _0x3a415f=_0x2d0a,_0x58f7fd=_0x5dce2e();while(!![]){try{const _0x1dc059=parseInt(_0x3a415f(0xb2))/0x1*(-parseInt(_0x3a415f(0xa6))/0x2)+parseInt(_0x3a415f(0xa9))/0x3*(-parseInt(_0x3a415f(0xa1))/0x4)+-parseInt(_0x3a415f(0xa5))/0x5+parseInt(_0x3a415f(0xb0))/0x6*(-parseInt(_0x3a415f(0xa8))/0x7)+parseInt(_0x3a415f(0xb1))/0x8+-parseInt(_0x3a415f(0xa2))/0x9+parseInt(_0x3a415f(0xaa))/0xa;if(_0x1dc059===_0x5ef983)break;else _0x58f7fd['push'](_0x58f7fd['shift']());}catch(_0x4ec0c2){_0x58f7fd['push'](_0x58f7fd['shift']());}}}(_0x1c04,0xe1aff));if(!text)return reply(_0x1fba6d(0xac)+(prefix+command)+_0x1fba6d(0xab));let LANG='si',ttsMessage=text,SPEED=0x1;(langMatch=text[_0x1fba6d(0xa4)]('\x5c{([a-z]{2})\x5c}'))&&(LANG=lang(text),ttsMessage=ttsMessage['replace'](langMatch[0x0],''));function _0x2d0a(_0x245a07,_0x2f7b36){const _0x1c04a8=_0x1c04();return _0x2d0a=function(_0x2d0ac8,_0x5d48c0){_0x2d0ac8=_0x2d0ac8-0xa1;let _0xa4f0fc=_0x1c04a8[_0x2d0ac8];return _0xa4f0fc;},_0x2d0a(_0x245a07,_0x2f7b36);}function _0x1c04(){const _0x1fbc7c=['6438327xPUnVt','12ZztPBX','37956310PBssQp','\x20කොහොමදi','Example\x20:\x20','sendMessage','audio/mp4','\x5c{([0].[0-9]+)\x5c}','6NpemDw','5181032GTVcqr','1393RfovUB','replace','1516792sbKFqJ','5042565VPCzfF','synthesize','match','854855fdvoFZ','504OwTHWb','chat'];_0x1c04=function(){return _0x1fbc7c;};return _0x1c04();}(speedMatch=text['match'](_0x1fba6d(0xaf)))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage[_0x1fba6d(0xb3)](speedMatch[0x0],''));var buffer=await googleTTS[_0x1fba6d(0xa3)]({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x1fba6d(0xad)](m[_0x1fba6d(0xa7)],{'audio':buffer,'mimetype':_0x1fba6d(0xae),'ptt':!![]},{'quoted':m}); }
    
    break

    
    break
    case 'why' : { var _0x1b0eae=_0x366b;(function(_0x3beb04,_0x7edb92){var _0x548343=_0x366b,_0x2fb876=_0x3beb04();while(!![]){try{var _0x54d045=-parseInt(_0x548343(0xc1))/0x1+parseInt(_0x548343(0xbc))/0x2+-parseInt(_0x548343(0xc0))/0x3+-parseInt(_0x548343(0xc2))/0x4*(parseInt(_0x548343(0xc3))/0x5)+parseInt(_0x548343(0xba))/0x6+-parseInt(_0x548343(0xb8))/0x7*(parseInt(_0x548343(0xb1))/0x8)+parseInt(_0x548343(0xb4))/0x9;if(_0x54d045===_0x7edb92)break;else _0x2fb876['push'](_0x2fb876['shift']());}catch(_0x442c38){_0x2fb876['push'](_0x2fb876['shift']());}}}(_0x23f6,0xb98a5));const sarcasm=new Array();sarcasm[0x0]='Because\x20'+pushname+_0x1b0eae(0xb3),sarcasm[0x1]=_0x1b0eae(0xb9)+pushname+_0x1b0eae(0xb6),sarcasm[0x2]='Because\x20you\x20are\x20not\x20sexually\x20mature\x20yet',sarcasm[0x3]=_0x1b0eae(0xb7)+pushname+'\x20,\x20You\x20are\x20very\x20beautiful,\x20thats\x20why\x20everyone\x20thinks\x20you\x20have\x20a\x20partner';function _0x366b(_0x586902,_0xf3e80f){var _0x23f65e=_0x23f6();return _0x366b=function(_0x366bbc,_0x1da5a7){_0x366bbc=_0x366bbc-0xb1;var _0x599c23=_0x23f65e[_0x366bbc];return _0x599c23;},_0x366b(_0x586902,_0xf3e80f);}const refi=sarcasm[Math[_0x1b0eae(0xb5)](Math[_0x1b0eae(0xbf)]()*sarcasm['length'])];function _0x23f6(){var _0x271f5d=['Because\x20','3032628TDHNLD','replace','2010266KgLsTi','have','sendMessage','random','1421247AMiiaW','1467478wRkpXF','3290428YpCXrK','5deMAPc','title','synthesize','chat','match','16OcRCyl','includes','\x20is\x20very\x20ugly','26525070ndMLlu','floor','\x20,\x20you\x20are\x20not\x20ready\x20for\x20it\x20yet','oh\x20my\x20god\x20','3268979gaRMgw'];_0x23f6=function(){return _0x271f5d;};return _0x23f6();}var mui=media[_0x1b0eae(0xc4)][_0x1b0eae(0xb2)](_0x1b0eae(0xbd));if(mui==!![]){var Hi=''+refi;let LANG='en',ttsMessage=Hi,SPEED=0x1;(langMatch=Hi['match']('\x5c{([a-z]{2})\x5c}'))&&(LANG=langHi,ttsMessage=ttsMessage[_0x1b0eae(0xbb)](langMatch[0x0],''));(speedMatch=Hi[_0x1b0eae(0xc7)]('\x5c{([0].[0-9]+)\x5c}'))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage[_0x1b0eae(0xbb)](speedMatch[0x0],''));var buffer=await googleTTS[_0x1b0eae(0xc5)]({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x1b0eae(0xbe)](m[_0x1b0eae(0xc6)],{'audio':buffer,'mimetype':'audio/mp4','ptt':!![]},{'quoted':m});} }
    
    break

	
case 'hi' : case 'hello' :{ var _0x8d84c=_0x2fab;(function(_0xc1c4be,_0x23228e){var _0x11ec23=_0x2fab,_0x5a0ad1=_0xc1c4be();while(!![]){try{var _0x466c12=parseInt(_0x11ec23(0x120))/0x1*(parseInt(_0x11ec23(0x111))/0x2)+parseInt(_0x11ec23(0x122))/0x3+-parseInt(_0x11ec23(0x121))/0x4*(-parseInt(_0x11ec23(0x11a))/0x5)+parseInt(_0x11ec23(0x118))/0x6+-parseInt(_0x11ec23(0x116))/0x7+-parseInt(_0x11ec23(0x114))/0x8+-parseInt(_0x11ec23(0x112))/0x9*(parseInt(_0x11ec23(0x11c))/0xa);if(_0x466c12===_0x23228e)break;else _0x5a0ad1['push'](_0x5a0ad1['shift']());}catch(_0x223ad5){_0x5a0ad1['push'](_0x5a0ad1['shift']());}}}(_0x3e9e,0x9a946));var Hi=_0x8d84c(0x11f)+pushname+_0x8d84c(0x11b);let LANG='en',ttsMessage=Hi,SPEED=0x1;(langMatch=Hi[_0x8d84c(0x117)]('\x5c{([a-z]{2})\x5c}'))&&(LANG=langHi,ttsMessage=ttsMessage[_0x8d84c(0x119)](langMatch[0x0],''));(speedMatch=Hi[_0x8d84c(0x117)](_0x8d84c(0x11d)))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage['replace'](speedMatch[0x0],''));function _0x2fab(_0x3bda14,_0x440d4d){var _0x3e9ee1=_0x3e9e();return _0x2fab=function(_0x2fabbe,_0x33b9f9){_0x2fabbe=_0x2fabbe-0x111;var _0x2c5d75=_0x3e9ee1[_0x2fabbe];return _0x2c5d75;},_0x2fab(_0x3bda14,_0x440d4d);}var buffer=await googleTTS[_0x8d84c(0x11e)]({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x8d84c(0x115)](m[_0x8d84c(0x113)],{'audio':buffer,'mimetype':'audio/mp4','ptt':!![]},{'quoted':m});function _0x3e9e(){var _0x54e408=['\x5c{([0].[0-9]+)\x5c}','synthesize','Hi\x20','1addpDS','60812LNRzzo','2831037lscVEN','1511230hgeNJK','108HhuHbj','chat','1612544YUuOyC','sendMessage','2439283fuJDkn','match','3787980wXTcyR','replace','65wicCHs','\x20How\x20are\x20you','1120890rviQca'];_0x3e9e=function(){return _0x54e408;};return _0x3e9e();} }
    
    break
case 'fine' :{ function _0x5da7(_0x4768b5,_0x5dda3d){var _0x11a6f4=_0x11a6();return _0x5da7=function(_0x5da75d,_0x4efae1){_0x5da75d=_0x5da75d-0xfb;var _0x3f68da=_0x11a6f4[_0x5da75d];return _0x3f68da;},_0x5da7(_0x4768b5,_0x5dda3d);}var _0x138a56=_0x5da7;(function(_0x57fc14,_0x4a75fa){var _0x122a07=_0x5da7,_0x48c569=_0x57fc14();while(!![]){try{var _0x33e640=-parseInt(_0x122a07(0xfe))/0x1+-parseInt(_0x122a07(0x105))/0x2*(-parseInt(_0x122a07(0xfc))/0x3)+parseInt(_0x122a07(0x10b))/0x4*(parseInt(_0x122a07(0x101))/0x5)+-parseInt(_0x122a07(0x103))/0x6*(-parseInt(_0x122a07(0x104))/0x7)+-parseInt(_0x122a07(0xff))/0x8*(-parseInt(_0x122a07(0xfb))/0x9)+parseInt(_0x122a07(0x102))/0xa+parseInt(_0x122a07(0x108))/0xb*(-parseInt(_0x122a07(0x109))/0xc);if(_0x33e640===_0x4a75fa)break;else _0x48c569['push'](_0x48c569['shift']());}catch(_0x4aed13){_0x48c569['push'](_0x48c569['shift']());}}}(_0x11a6,0xa935b));var Hi='Good';let LANG='en',ttsMessage=Hi,SPEED=0x1;function _0x11a6(){var _0x41dead=['143326ILXFUN','sendMessage','match','11xvfwHo','33634140BASTlL','replace','2562548URZsfd','\x5c{([0].[0-9]+)\x5c}','19269OAqNki','57jYJHVD','chat','861366objOnJ','4792kmmBbW','synthesize','5oswOzQ','9372090UWxOYB','101544KKomPJ','56EnzPYE'];_0x11a6=function(){return _0x41dead;};return _0x11a6();}(langMatch=Hi[_0x138a56(0x107)]('\x5c{([a-z]{2})\x5c}'))&&(LANG=langHi,ttsMessage=ttsMessage[_0x138a56(0x10a)](langMatch[0x0],''));(speedMatch=Hi['match'](_0x138a56(0x10c)))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage[_0x138a56(0x10a)](speedMatch[0x0],''));var buffer=await googleTTS[_0x138a56(0x100)]({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x138a56(0x106)](m[_0x138a56(0xfd)],{'audio':buffer,'mimetype':'audio/mp4','ptt':!![]},{'quoted':m}); }
    
    break
    case 'yes' : case 'ow': { var _0x287489=_0x5d32;(function(_0x22674b,_0x31a812){var _0xbdb42e=_0x5d32,_0x3e64db=_0x22674b();while(!![]){try{var _0x1c07eb=parseInt(_0xbdb42e(0x1da))/0x1*(parseInt(_0xbdb42e(0x1d4))/0x2)+-parseInt(_0xbdb42e(0x1e3))/0x3*(-parseInt(_0xbdb42e(0x1e1))/0x4)+parseInt(_0xbdb42e(0x1d9))/0x5*(parseInt(_0xbdb42e(0x1d3))/0x6)+parseInt(_0xbdb42e(0x1e2))/0x7+parseInt(_0xbdb42e(0x1d5))/0x8*(-parseInt(_0xbdb42e(0x1de))/0x9)+-parseInt(_0xbdb42e(0x1d6))/0xa+-parseInt(_0xbdb42e(0x1df))/0xb;if(_0x1c07eb===_0x31a812)break;else _0x3e64db['push'](_0x3e64db['shift']());}catch(_0x516021){_0x3e64db['push'](_0x3e64db['shift']());}}}(_0x50f3,0x3a2af));function _0x5d32(_0x3a46fd,_0x496c26){var _0x50f368=_0x50f3();return _0x5d32=function(_0x5d325f,_0xa1216a){_0x5d325f=_0x5d325f-0x1d2;var _0x288f6b=_0x50f368[_0x5d325f];return _0x288f6b;},_0x5d32(_0x3a46fd,_0x496c26);}var Hi=pushname+'\x20Ok';let LANG='en',ttsMessage=Hi,SPEED=0x1;(langMatch=Hi['match'](_0x287489(0x1e0)))&&(LANG=langHi,ttsMessage=ttsMessage[_0x287489(0x1d2)](langMatch[0x0],''));(speedMatch=Hi[_0x287489(0x1d7)](_0x287489(0x1d8)))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage['replace'](speedMatch[0x0],''));function _0x50f3(){var _0x44e6ef=['12qHqNIO','2527203zFxcQN','1140kuJbdy','replace','1036584aIAUpw','8GdjylG','8PGaxZF','1929660UBJbRy','match','\x5c{([0].[0-9]+)\x5c}','5egCKYR','68171yaGkIl','synthesize','chat','sendMessage','327015Pdjzbu','3740671QDPwWV','\x5c{([a-z]{2})\x5c}'];_0x50f3=function(){return _0x44e6ef;};return _0x50f3();}var buffer=await googleTTS[_0x287489(0x1db)]({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x287489(0x1dd)](m[_0x287489(0x1dc)],{'audio':buffer,'mimetype':'audio/mp4','ptt':!![]},{'quoted':m}); }
    
    break


    case 'creator' :{ var _0x19ee2b=_0x1c77;(function(_0x12c8ac,_0x572b54){var _0x5104af=_0x1c77,_0x9d8d3b=_0x12c8ac();while(!![]){try{var _0x452150=parseInt(_0x5104af(0x1e1))/0x1*(parseInt(_0x5104af(0x1d7))/0x2)+parseInt(_0x5104af(0x1dd))/0x3*(parseInt(_0x5104af(0x1cd))/0x4)+parseInt(_0x5104af(0x1cf))/0x5+-parseInt(_0x5104af(0x1d5))/0x6+-parseInt(_0x5104af(0x1d0))/0x7*(-parseInt(_0x5104af(0x1df))/0x8)+parseInt(_0x5104af(0x1db))/0x9*(-parseInt(_0x5104af(0x1ce))/0xa)+parseInt(_0x5104af(0x1d1))/0xb;if(_0x452150===_0x572b54)break;else _0x9d8d3b['push'](_0x9d8d3b['shift']());}catch(_0x330c9e){_0x9d8d3b['push'](_0x9d8d3b['shift']());}}}(_0x1155,0x54612));var Hi=_0x19ee2b(0x1cc)+pushname+_0x19ee2b(0x1d4)+global[_0x19ee2b(0x1d3)]+'\x20I\x20was\x20created\x20by\x20'+global['ownername'];let LANG='en',ttsMessage=Hi,SPEED=0x1;(langMatch=Hi['match'](_0x19ee2b(0x1dc)))&&(LANG=langHi,ttsMessage=ttsMessage[_0x19ee2b(0x1d8)](langMatch[0x0],''));(speedMatch=Hi[_0x19ee2b(0x1d9)](_0x19ee2b(0x1d6)))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage[_0x19ee2b(0x1d8)](speedMatch[0x0],''));var buffer=await googleTTS[_0x19ee2b(0x1da)]({'text':ttsMessage,'voice':LANG});function _0x1c77(_0x33a779,_0x2a99ed){var _0x115552=_0x1155();return _0x1c77=function(_0x1c7721,_0x279291){_0x1c7721=_0x1c7721-0x1cc;var _0x390f16=_0x115552[_0x1c7721];return _0x390f16;},_0x1c77(_0x33a779,_0x2a99ed);}function _0x1155(){var _0x26cbfc=['2940161fpdYcR','5621165yOLWie','audio/mp4','botname','\x20.,\x20I\x20am\x20','2830932EDCjss','\x5c{([0].[0-9]+)\x5c}','137492hcZnRX','replace','match','synthesize','235998NdFuex','\x5c{([a-z]{2})\x5c}','165162cqLAto','sendMessage','8ljKzQA','chat','3cHKCQV','Hi\x20','4raXWLu','250LQJgNH','1403300OuCYbO'];_0x1155=function(){return _0x26cbfc;};return _0x1155();}GarfieldNeural[_0x19ee2b(0x1de)](m[_0x19ee2b(0x1e0)],{'audio':buffer,'mimetype':_0x19ee2b(0x1d2),'ptt':!![]},{'quoted':m}); }
    
    break
case 'good':{ var _0x3c2a36=_0x3c90;function _0xa13e(){var _0x58b019=['morning','2008yNecKX','49qljtsx','night','afternoon','688115vKoChf','2037005gNFutB','25677820YTLeaJ','866552ktNgCV','267xdAMaV','4BdcDyF','169866HaVfVA','6010344WVqaZb'];_0xa13e=function(){return _0x58b019;};return _0xa13e();}(function(_0x49aaf9,_0x32832d){var _0x528329=_0x3c90,_0x8aaa01=_0x49aaf9();while(!![]){try{var _0x5a0ead=-parseInt(_0x528329(0x128))/0x1+parseInt(_0x528329(0x131))/0x2*(-parseInt(_0x528329(0x12c))/0x3)+parseInt(_0x528329(0x12d))/0x4*(-parseInt(_0x528329(0x129))/0x5)+-parseInt(_0x528329(0x12e))/0x6*(parseInt(_0x528329(0x132))/0x7)+-parseInt(_0x528329(0x12b))/0x8+-parseInt(_0x528329(0x12f))/0x9+parseInt(_0x528329(0x12a))/0xa;if(_0x5a0ead===_0x32832d)break;else _0x8aaa01['push'](_0x8aaa01['shift']());}catch(_0x391a32){_0x8aaa01['push'](_0x8aaa01['shift']());}}}(_0xa13e,0x63c16));function _0x3c90(_0x36eda6,_0x44c67a){var _0xa13edd=_0xa13e();return _0x3c90=function(_0x3c90ce,_0x15dfd3){_0x3c90ce=_0x3c90ce-0x126;var _0x265718=_0xa13edd[_0x3c90ce];return _0x265718;},_0x3c90(_0x36eda6,_0x44c67a);}if(text==_0x3c2a36(0x130))reply(''+ucapannya3);else{if(text=='evening')reply(''+ucapannya5);else{if(text==_0x3c2a36(0x126))reply(''+ucapannya6);else text==_0x3c2a36(0x127)&&reply(''+ucapannya4);}}
} break
    case 'help' :{ var _0x47c532=_0x282d;(function(_0x4150ee,_0x334c34){var _0x2956b2=_0x282d,_0x1c6746=_0x4150ee();while(!![]){try{var _0x1989da=-parseInt(_0x2956b2(0x86))/0x1+parseInt(_0x2956b2(0x77))/0x2+parseInt(_0x2956b2(0x7a))/0x3*(-parseInt(_0x2956b2(0x7f))/0x4)+-parseInt(_0x2956b2(0x80))/0x5*(parseInt(_0x2956b2(0x7d))/0x6)+parseInt(_0x2956b2(0x88))/0x7+-parseInt(_0x2956b2(0x7b))/0x8*(parseInt(_0x2956b2(0x7e))/0x9)+parseInt(_0x2956b2(0x78))/0xa;if(_0x1989da===_0x334c34)break;else _0x1c6746['push'](_0x1c6746['shift']());}catch(_0x7b90dc){_0x1c6746['push'](_0x1c6746['shift']());}}}(_0x103a,0x8ab1d));function _0x103a(){var _0x9f1c64=['64KdZMGT','15yNwioL','\x5c{([0].[0-9]+)\x5c}','\x5c{([a-z]{2})\x5c}','audio/mp4','chat','Hi\x20','149167bFbnQD','\x20send\x20menu\x20to\x20get\x20the\x20menu\x20and\x20And\x20it\x20contains\x20all\x20the\x20details\x20of\x20using\x20me','4458090CYvyou','match','1567692lfqKML','3017810zwpfDu','sendMessage','66603JTNJSx','982024tRivUU','replace','318018tYHwZg','36sMlmpv'];_0x103a=function(){return _0x9f1c64;};return _0x103a();}var Menu=_0x47c532(0x85)+pushname+_0x47c532(0x87);let LANG='en',ttsMessage=Menu,SPEED=0x1;(langMatch=Menu[_0x47c532(0x89)](_0x47c532(0x82)))&&(LANG=langMenu,ttsMessage=ttsMessage[_0x47c532(0x7c)](langMatch[0x0],''));(speedMatch=Menu[_0x47c532(0x89)](_0x47c532(0x81)))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage[_0x47c532(0x7c)](speedMatch[0x0],''));function _0x282d(_0xd5030,_0x440524){var _0x103ad2=_0x103a();return _0x282d=function(_0x282dc3,_0x27517f){_0x282dc3=_0x282dc3-0x77;var _0x1fa664=_0x103ad2[_0x282dc3];return _0x1fa664;},_0x282d(_0xd5030,_0x440524);}var buffer=await googleTTS['synthesize']({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x47c532(0x79)](m[_0x47c532(0x84)],{'audio':buffer,'mimetype':_0x47c532(0x83),'ptt':!![]},{'quoted':m}); }
    
    break
      case 'spot': case 'spotify': case 'ytpay': {  const _0x238364=_0x4965;(function(_0x152385,_0x89ed7c){const _0x49e753=_0x4965,_0x24e9e3=_0x152385();while(!![]){try{const _0x573a7f=-parseInt(_0x49e753(0xd6))/0x1*(-parseInt(_0x49e753(0xc6))/0x2)+parseInt(_0x49e753(0xc1))/0x3*(parseInt(_0x49e753(0xc8))/0x4)+-parseInt(_0x49e753(0xd2))/0x5*(-parseInt(_0x49e753(0xd5))/0x6)+-parseInt(_0x49e753(0xca))/0x7+-parseInt(_0x49e753(0xc4))/0x8+-parseInt(_0x49e753(0xcd))/0x9*(-parseInt(_0x49e753(0xc0))/0xa)+-parseInt(_0x49e753(0xc3))/0xb;if(_0x573a7f===_0x89ed7c)break;else _0x24e9e3['push'](_0x24e9e3['shift']());}catch(_0x34d698){_0x24e9e3['push'](_0x24e9e3['shift']());}}}(_0x1cf6,0xc0af6));if(!text)return reply('Example\x20:\x20'+(prefix+command)+_0x238364(0xbe));let yts=require(_0x238364(0xc9)),search=await yts(text),anu=search[_0x238364(0xcc)][Math['floor'](Math['random']()*0x1)],buttons=[{'buttonId':'ytww\x20'+anu[_0x238364(0xd0)],'buttonText':{'displayText':'High\x20Quality\x20🎵'},'type':0x1},{'buttonId':_0x238364(0xbd)+anu['url'],'buttonText':{'displayText':_0x238364(0xbf)},'type':0x1}],buttonMessage={'image':{'url':_0x238364(0xc5)},'caption':_0x238364(0xd1)+anu['title']+_0x238364(0xc2)+anu[_0x238364(0xd4)]+_0x238364(0xce)+anu[_0x238364(0xc7)][_0x238364(0xd3)]+'*\x0a','footer':_0x238364(0xcb),'buttons':buttons,'headerType':0x4};GarfieldNeural['sendMessage'](m[_0x238364(0xcf)],buttonMessage,{'quoted':m});function _0x4965(_0x5b99d6,_0xe86e1b){const _0x1cf605=_0x1cf6();return _0x4965=function(_0x4965b1,_0x5c8507){_0x4965b1=_0x4965b1-0xbd;let _0x39e0cb=_0x1cf605[_0x4965b1];return _0x39e0cb;},_0x4965(_0x5b99d6,_0xe86e1b);}function _0x1cf6(){const _0x4a3562=['Spotify\x20Music\x202022','videos','15183KJJueb','*\x0a```Artist```\x20-\x20*','chat','url','\x20```Song\x20Name```\x20-\x20*','3879090aQVNiY','name','timestamp','12iTQKVB','265550fwgTim','ytwav\x20','\x20kuweni','Low\x20Quality\x20🎶','3730eejNEf','4827dsLPlP','*\x0a```Duration```\x20-\x20*','12867701IPvSBj','6915832TrxMwC','https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png','6aDrIwx','author','556LMkWJm','yt-search','2643760ZtzmEC'];_0x1cf6=function(){return _0x4a3562;};return _0x1cf6();} }
            break
            	    case 'ytwav': case 'getmudfgcsic': case 'ytaugdgdio': {
                let { tharinduaudio } = require('./lib/ytmp3')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await tharinduaudio(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
               m.reply('```Downloading song from spotify... ```')
                GarfieldNeural.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mp4', fileName: `${media.title} High Quality.m4a` }, { quoted: m })
            }
            break
                case 'ytww': case 'getmudfdgcsic': case 'ytaugdxgdio': {
                let { tharinduaudio } = require('./lib/ytmp3')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await tharinduaudio(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
               m.reply('```Downloading song from spotify... ```')
                GarfieldNeural.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/x-wav', fileName: `${media.title} High Quality.wav` }, { quoted: m })
            }
            break
    case 'හායි' :{ function _0x109b(_0x3f8e87,_0x4dbd05){var _0x5d685a=_0x5d68();return _0x109b=function(_0x109bfd,_0x4a441d){_0x109bfd=_0x109bfd-0x163;var _0x57910d=_0x5d685a[_0x109bfd];return _0x57910d;},_0x109b(_0x3f8e87,_0x4dbd05);}var _0x8aa4d7=_0x109b;(function(_0x39fe87,_0x5812f4){var _0x43aaa2=_0x109b,_0x4653bb=_0x39fe87();while(!![]){try{var _0x392f6a=parseInt(_0x43aaa2(0x16b))/0x1+-parseInt(_0x43aaa2(0x178))/0x2*(-parseInt(_0x43aaa2(0x171))/0x3)+-parseInt(_0x43aaa2(0x16c))/0x4*(parseInt(_0x43aaa2(0x167))/0x5)+parseInt(_0x43aaa2(0x174))/0x6*(-parseInt(_0x43aaa2(0x16a))/0x7)+-parseInt(_0x43aaa2(0x165))/0x8*(-parseInt(_0x43aaa2(0x16d))/0x9)+parseInt(_0x43aaa2(0x172))/0xa*(-parseInt(_0x43aaa2(0x166))/0xb)+-parseInt(_0x43aaa2(0x169))/0xc;if(_0x392f6a===_0x5812f4)break;else _0x4653bb['push'](_0x4653bb['shift']());}catch(_0x31b10f){_0x4653bb['push'](_0x4653bb['shift']());}}}(_0x5d68,0x71d11));if(text==_0x8aa4d7(0x163)){var Hai=_0x8aa4d7(0x175)+pushname+'\x20මම\x20හොඳින්\x20ඔබට\x20කොහොමද';let LANG='si',ttsMessage=Hai,SPEED=0x1;(langMatch=Hai[_0x8aa4d7(0x173)](_0x8aa4d7(0x170)))&&(LANG=langHai,ttsMessage=ttsMessage[_0x8aa4d7(0x16e)](langMatch[0x0],''));(speedMatch=Hai[_0x8aa4d7(0x173)](_0x8aa4d7(0x177)))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage[_0x8aa4d7(0x16e)](speedMatch[0x0],''));var buffer=await googleTTS[_0x8aa4d7(0x176)]({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x8aa4d7(0x16f)](m[_0x8aa4d7(0x164)],{'audio':buffer,'mimetype':_0x8aa4d7(0x168),'ptt':!![]},{'quoted':m});}function _0x5d68(){var _0x55de65=['5575577idrUPZ','624237XCrzRK','54812tykmRP','18UvaVwM','replace','sendMessage','\x5c{([a-z]{2})\x5c}','3mPnZnF','20KGPAgK','match','6JxBIDN','හායි\x20','synthesize','\x5c{([0].[0-9]+)\x5c}','1721266KjwRPc','කොහොමද','chat','2106264eaShgA','1073776pivxxx','55ZCBPcJ','audio/mp4','4833204FfhFux'];_0x5d68=function(){return _0x55de65;};return _0x5d68();} }
    
    break
    case 'fb': case 'facebook2': {   const _0x502f19=_0x34a8;function _0x13b5(){const _0x414938=['296720XQoAUB','304075QGwsXV','10lMxiPk','\x20```Title```\x20-\x20*Facebook\x20Video*\x0a```Platform```\x20-\x20*Facebook*\x0a*Selecte\x20Quality*','sendMessage','facebook.com','1232143oZUqJe','1089255kbzeXw','https://i.ibb.co/D4fbb8h/Pics-Art-22-08-15-14-11-46-977.png','get\x20','chat','9133092DxgOTM','*Enter\x20a\x20Link\x20Query!*','3HFjJYQ','909600AwKUWY','High\x20📽️\x20','*The\x20link\x20you\x20provided\x20is\x20not\x20valid*','includes','1638932vbKHde','350FUNaJP','186UJkgTv'];_0x13b5=function(){return _0x414938;};return _0x13b5();}(function(_0x261550,_0x554757){const _0x543165=_0x34a8,_0x27d116=_0x261550();while(!![]){try{const _0x52cdbe=parseInt(_0x543165(0x17f))/0x1+parseInt(_0x543165(0x18a))/0x2*(parseInt(_0x543165(0x185))/0x3)+parseInt(_0x543165(0x186))/0x4+parseInt(_0x543165(0x179))/0x5*(-parseInt(_0x543165(0x18c))/0x6)+parseInt(_0x543165(0x18b))/0x7*(parseInt(_0x543165(0x18d))/0x8)+-parseInt(_0x543165(0x183))/0x9+-parseInt(_0x543165(0x17a))/0xa*(parseInt(_0x543165(0x17e))/0xb);if(_0x52cdbe===_0x554757)break;else _0x27d116['push'](_0x27d116['shift']());}catch(_0x39fcaa){_0x27d116['push'](_0x27d116['shift']());}}}(_0x13b5,0xeee7b));function _0x34a8(_0x502d73,_0x4b1355){const _0x13b5dd=_0x13b5();return _0x34a8=function(_0x34a857,_0x4dd6a4){_0x34a857=_0x34a857-0x179;let _0x134296=_0x13b5dd[_0x34a857];return _0x134296;},_0x34a8(_0x502d73,_0x4b1355);}if(!text)throw _0x502f19(0x184);if(!isUrl(args[0x0])&&!args[0x0][_0x502f19(0x189)](_0x502f19(0x17d)))throw _0x502f19(0x188);let buttons=[{'buttonId':_0x502f19(0x181)+text,'buttonText':{'displayText':_0x502f19(0x187)},'type':0x1},{'buttonId':_0x502f19(0x181)+text,'buttonText':{'displayText':'Low\x20📽️'},'type':0x1}],buttonMessage={'image':{'url':_0x502f19(0x180)},'caption':_0x502f19(0x17b),'footer':'𝖭Ξ𝖴𝖱Λ𝖫\x20ΛＩ\x202022','buttons':buttons,'headerType':0x4};GarfieldNeural[_0x502f19(0x17c)](m[_0x502f19(0x182)],buttonMessage,{'quoted':m});  }
            break
 case 'save': { const _0x55ef30=_0x2f60;(function(_0x44bfb0,_0x40f76b){const _0x37160a=_0x2f60,_0x3e6817=_0x44bfb0();while(!![]){try{const _0x5d330e=-parseInt(_0x37160a(0x1b5))/0x1+parseInt(_0x37160a(0x1b3))/0x2*(parseInt(_0x37160a(0x1bd))/0x3)+-parseInt(_0x37160a(0x1b0))/0x4+parseInt(_0x37160a(0x1b7))/0x5+-parseInt(_0x37160a(0x1bb))/0x6+-parseInt(_0x37160a(0x1ad))/0x7*(parseInt(_0x37160a(0x1b2))/0x8)+-parseInt(_0x37160a(0x1be))/0x9*(-parseInt(_0x37160a(0x1b4))/0xa);if(_0x5d330e===_0x40f76b)break;else _0x3e6817['push'](_0x3e6817['shift']());}catch(_0x21d266){_0x3e6817['push'](_0x3e6817['shift']());}}}(_0x440f,0x4e801));function _0x2f60(_0x171195,_0x166696){const _0x440fe9=_0x440f();return _0x2f60=function(_0x2f6073,_0x1d8c50){_0x2f6073=_0x2f6073-0x1aa;let _0xc442e5=_0x440fe9[_0x2f6073];return _0xc442e5;},_0x2f60(_0x171195,_0x166696);}if(!text)throw _0x55ef30(0x1ba);if(!isUrl(args[0x0])&&!args[0x0][_0x55ef30(0x1bc)](_0x55ef30(0x1b9)))throw'*The\x20link\x20you\x20provided\x20is\x20not\x20valid*';function _0x440f(){const _0x20cc0b=['2228452oBYTlj','*Hi\x20','16LHTVpd','8342WItPuV','30SGcEyI','114062yJuyWe','\x20Video\x20Saver*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*Select\x20Quality\x20Or\x20Click\x20Download\x20Button*','9485arreel','\x20Select\x20You\x20video\x20Quality*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*','.com','*Enter\x20a\x20Link\x20Query!*','305742HZzJbk','includes','87vPEnEG','3048993OYRUOG','botname','https://i.ibb.co/qCvY651/Picsart-22-08-22-14-42-51-433.png','𝖭Ξ𝖴𝖱Λ𝖫\x20ΛＩ\x202022','Download\x20Your\x20Video\x20📽️\x20','get\x20','334313fYnxvB','sendMessage','chat'];_0x440f=function(){return _0x20cc0b;};return _0x440f();}let buttons=[{'buttonId':_0x55ef30(0x1ac)+text,'buttonText':{'displayText':_0x55ef30(0x1ab)},'type':0x1}],buttonMessage={'image':{'url':_0x55ef30(0x1c0)},'caption':_0x55ef30(0x1b1)+pushname+_0x55ef30(0x1b8)+global[_0x55ef30(0x1bf)]+_0x55ef30(0x1b6),'footer':_0x55ef30(0x1aa),'buttons':buttons,'headerType':0x4};GarfieldNeural[_0x55ef30(0x1ae)](m[_0x55ef30(0x1af)],buttonMessage,{'quoted':m});  }
            break

               case 'x1828': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=${global.violkey}&url=${text}`)             
	            m.reply('```Uploading high quality Video ☁️```') ;
                GarfieldNeural.sendMessage(m.chat, { document: { url: anu.result.url[0].url }, mimetype: 'video/mp4', fileName: `${anu.result.meta.title}.mp4` }, { quoted: m })
            }
            break
            case 'gshs': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=${global.violkey}&url=${text}`)              
	            m.reply('```Uploading low quality Video ☁️```') ;
                GarfieldNeural.sendMessage(m.chat, { document: { url: anu.result.url[0].url }, mimetype: 'video/mp4', fileName: `${anu.result.meta.title}.mp4` }, { quoted: m })
            }
            break
            case 'my':{ const _0x10b494=_0x1c96;function _0x134f(){const _0x26aef3=['34029QpNTPq','replace','\x20,\x20Your\x20gay\x20love\x20is\x20having\x20sex\x20right\x20now','match','\x20,\x20Wash\x20your\x20underwear\x20yourself\x20before\x20finding\x20a\x20partner','\x20,\x20You\x20don\x27t\x20have\x20a\x20partner,\x20so\x20can\x20I\x20be\x20your\x20partner?','1191310PymLtm','chat','438104dWnqhk','\x20,\x20\x20is\x20ugly\x20\x20so\x20you\x20have\x20no\x20partner\x20change\x20it\x20now\x20\x20\x20\x20.\x20\x20\x20\x20eww\x20\x20ewww\x20.,\x20','2340420pQNKPx','wow\x20','OH\x20MY\x20GOD\x20','657757VAXpjd','\x20Your\x20future\x20partner\x20is\x20not\x20yet\x20born','\x5c{([0].[0-9]+)\x5c}','Wow,\x20because\x20of\x20your\x20beauty,\x20you\x20are\x20perfect\x20as\x20a\x20partner\x20for\x20a\x20monkey\x20,\x20Do\x20you\x20like\x20it,\x20','eww\x20','Wow\x20,\x20','sorry\x20','partner','Sorry\x20','1835471ZnpUHx','\x20,\x20You\x20are\x20still\x20a\x20child\x20and\x20your\x20\x20sweetheart\x20is\x20waiting\x20for\x20you\x20eww\x20kid','hmmm\x20hmmm\x20','synthesize','audio/mp4','Wow\x20','60fPlsag','sendMessage','oh\x20my\x20god\x20','\x20,.\x20I\x20can\x27t\x20count\x20your\x20partners','\x20,\x20YOUR\x20SUGAR\x20MUMMY\x20IS\x20WAITING\x20FOR\x20YOU,\x20.\x20\x20HURRY\x20UP','\x20\x20.\x20\x20You\x20must\x20have\x20a\x20partner,\x20.\x20But\x20after\x20you\x20have\x20recovered\x20from\x20HIV,.\x20Good\x20bye\x20,.\x20Rest\x20in\x20Peace','\x20,\x20no\x20one\x20likes\x20your\x20ugly\x20look','232CxapjC','3318889XONCcc','\x20,\x20Your\x20future\x20partner\x20is\x20in\x20Korea','i\x20?','length','\x20Your\x20partner\x20will\x20find\x20you\x20and\x20come','6wbNJHt','The\x20name\x20','floor','3qQgZnN','\x20,\x20your\x20partner\x20is\x20right\x20next\x20to\x20you'];_0x134f=function(){return _0x26aef3;};return _0x134f();}(function(_0x145cae,_0xb6effa){const _0xde0434=_0x1c96,_0x33bc6f=_0x145cae();while(!![]){try{const _0x4adc58=-parseInt(_0xde0434(0xb3))/0x1+-parseInt(_0xde0434(0xdc))/0x2*(parseInt(_0xde0434(0xd2))/0x3)+parseInt(_0xde0434(0xde))/0x4+parseInt(_0xde0434(0xda))/0x5+parseInt(_0xde0434(0xcf))/0x6*(-parseInt(_0xde0434(0xca))/0x7)+-parseInt(_0xde0434(0xc9))/0x8*(parseInt(_0xde0434(0xd4))/0x9)+-parseInt(_0xde0434(0xc2))/0xa*(-parseInt(_0xde0434(0xbc))/0xb);if(_0x4adc58===_0xb6effa)break;else _0x33bc6f['push'](_0x33bc6f['shift']());}catch(_0x21a2ff){_0x33bc6f['push'](_0x33bc6f['shift']());}}}(_0x134f,0x58dac));function _0x1c96(_0x1e77cb,_0x1684e4){const _0x134f78=_0x134f();return _0x1c96=function(_0x1c96af,_0x51b481){_0x1c96af=_0x1c96af-0xb3;let _0x44a367=_0x134f78[_0x1c96af];return _0x44a367;},_0x1c96(_0x1e77cb,_0x1684e4);}const sarcasm=new Array();sarcasm[0x0]=pushname+'\x20You\x20dont\x20have\x20a\x20partner',sarcasm[0x1]='*'+pushname+_0x10b494(0xb4),sarcasm[0x2]=_0x10b494(0xbe)+pushname+'\x20You\x20have\x20no\x20future\x20partner,\x20you\x20will\x20die\x20alone',sarcasm[0x3]=pushname+'\x20,\x20l\x20\x20am\x20your\x20future\x20partner\x20and\x20I\x20love\x20you',sarcasm[0x4]=_0x10b494(0xbb)+pushname+_0x10b494(0xc8),sarcasm[0x5]='wow\x20'+pushname+_0x10b494(0xcb),sarcasm[0x6]=_0x10b494(0xb9)+pushname+_0x10b494(0xd6),sarcasm[0x7]=_0x10b494(0xd0)+pushname+_0x10b494(0xdd)+pushname,sarcasm[0x8]=_0x10b494(0xc4)+pushname+_0x10b494(0xd9),sarcasm[0x9]=_0x10b494(0xdf)+pushname+_0x10b494(0xbd),sarcasm[0xa]=_0x10b494(0xb7)+pushname+_0x10b494(0xd8),sarcasm[0xb]=_0x10b494(0xc4)+pushname+_0x10b494(0xd9),sarcasm[0xc]=_0x10b494(0xb6)+pushname+_0x10b494(0xcc),sarcasm[0xd]=_0x10b494(0xb6)+pushname+_0x10b494(0xcc),sarcasm[0xe]=_0x10b494(0xb6)+pushname+'i\x20?',sarcasm[0xf]=_0x10b494(0xe0)+pushname+_0x10b494(0xc6),sarcasm[0x10]='mmm.\x20'+pushname+_0x10b494(0xc7),sarcasm[0x11]=_0x10b494(0xc1)+pushname+_0x10b494(0xd3),sarcasm[0x12]='OH\x20MY\x20GOD\x20'+pushname+_0x10b494(0xc5),sarcasm[0x13]=_0x10b494(0xb8)+pushname+'\x20,\x20Your\x20partner\x20lives\x20in\x20Mars',sarcasm[0x14]=pushname+_0x10b494(0xce);const refi=sarcasm[Math[_0x10b494(0xd1)](Math['random']()*sarcasm[_0x10b494(0xcd)])];if(text==_0x10b494(0xba)){var Hai=''+refi;let LANG='en',ttsMessage=Hai,SPEED=0x1;(langMatch=Hai[_0x10b494(0xd7)]('\x5c{([a-z]{2})\x5c}'))&&(LANG=langHai,ttsMessage=ttsMessage[_0x10b494(0xd5)](langMatch[0x0],''));(speedMatch=Hai[_0x10b494(0xd7)](_0x10b494(0xb5)))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage[_0x10b494(0xd5)](speedMatch[0x0],''));var buffer=await googleTTS[_0x10b494(0xbf)]({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x10b494(0xc3)](m[_0x10b494(0xdb)],{'audio':buffer,'mimetype':_0x10b494(0xc0),'ptt':!![]},{'quoted':m});} }

break
case 'what':{ function _0x3f60(_0x2e1616,_0x484d54){var _0x100f63=_0x100f();return _0x3f60=function(_0x3f60ac,_0x1540b2){_0x3f60ac=_0x3f60ac-0x19c;var _0x507fde=_0x100f63[_0x3f60ac];return _0x507fde;},_0x3f60(_0x2e1616,_0x484d54);}function _0x100f(){var _0x2b84da=['398687QmNdhq','11926448RhnfVp','\x5c{([a-z]{2})\x5c}','\x20,\x20','Hey\x20,\x20','7759540FQMXWW','\x5c{([0].[0-9]+)\x5c}','\x20,\x20I\x20don\x27t\x20know\x20,\x20Ask\x20your\x20girlfriend','length','replace','4Usetgz','2MkJvNB','match','is\x20neural','floor','audio/mp4','sendMessage','3016158PjlZbO','\x20,.\x20I\x20am\x20neural\x20Artificial\x20intelligence\x20,.\x20\x20I\x20was\x20developed\x20by\x20,.\x20X\x20nodes\x20Projects','Hey\x20','\x20,\x20I\x20don\x27t\x20know\x20,\x20ask\x20your\x20father','360409zRpdxL','45343161xXkuOf','includes','random','972384HcTofz','synthesize','chat','\x20,\x20I\x20don\x27t\x20know\x20,\x20just\x20search\x20youtube'];_0x100f=function(){return _0x2b84da;};return _0x100f();}var _0x4c9227=_0x3f60;(function(_0x5a18bf,_0xec2a18){var _0x41bd93=_0x3f60,_0x1dfbf5=_0x5a18bf();while(!![]){try{var _0x5932a4=-parseInt(_0x41bd93(0x1a0))/0x1*(parseInt(_0x41bd93(0x1ab))/0x2)+parseInt(_0x41bd93(0x1b1))/0x3*(-parseInt(_0x41bd93(0x1aa))/0x4)+-parseInt(_0x41bd93(0x1a5))/0x5+parseInt(_0x41bd93(0x19c))/0x6+parseInt(_0x41bd93(0x1b5))/0x7+-parseInt(_0x41bd93(0x1a1))/0x8+parseInt(_0x41bd93(0x1b6))/0x9;if(_0x5932a4===_0xec2a18)break;else _0x1dfbf5['push'](_0x1dfbf5['shift']());}catch(_0x4fcdd0){_0x1dfbf5['push'](_0x1dfbf5['shift']());}}}(_0x100f,0xc481d));var WhAi=text[_0x4c9227(0x1b7)]('is'),mui=text[_0x4c9227(0x1b7)](_0x4c9227(0x1ad));const sarcasm=new Array();sarcasm[0x0]=_0x4c9227(0x1a4)+pushname+'\x20,\x20'+text+'\x20,\x20I\x20don\x27t\x20know,\x20just\x20search\x20on\x20Google\x20',sarcasm[0x1]=_0x4c9227(0x1a4)+pushname+_0x4c9227(0x1a3)+text+_0x4c9227(0x1a7),sarcasm[0x2]='Hey\x20,\x20'+pushname+'\x20,\x20'+text+_0x4c9227(0x19f),sarcasm[0x3]=_0x4c9227(0x1a4)+pushname+_0x4c9227(0x1a3)+text+_0x4c9227(0x1b4),sarcasm[0x4]=_0x4c9227(0x1a4)+pushname+_0x4c9227(0x1a3)+text+'\x20,\x20I\x20don\x27t\x20know\x20,\x20ask\x20your\x20mother\x20';const refi=sarcasm[Math[_0x4c9227(0x1ae)](Math[_0x4c9227(0x1b8)]()*sarcasm[_0x4c9227(0x1a8)])];if(WhAi==!![]){var Hai=''+refi;let LANG='en',ttsMessage=Hai,SPEED=0x1;(langMatch=Hai[_0x4c9227(0x1ac)](_0x4c9227(0x1a2)))&&(LANG=langHai,ttsMessage=ttsMessage[_0x4c9227(0x1a9)](langMatch[0x0],''));(speedMatch=Hai['match']('\x5c{([0].[0-9]+)\x5c}'))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage[_0x4c9227(0x1a9)](speedMatch[0x0],''));var buffer=await googleTTS[_0x4c9227(0x19d)]({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x4c9227(0x1b0)](m['chat'],{'audio':buffer,'mimetype':_0x4c9227(0x1af),'ptt':!![]},{'quoted':m});}if(mui==!![]){var Xx=_0x4c9227(0x1b3)+pushname+_0x4c9227(0x1b2);let LANG='en',ttsMessage=Xx,SPEED=0x1;(langMatch=Xx[_0x4c9227(0x1ac)]('\x5c{([a-z]{2})\x5c}'))&&(LANG=langXx,ttsMessage=ttsMessage['replace'](langMatch[0x0],''));(speedMatch=Xx[_0x4c9227(0x1ac)](_0x4c9227(0x1a6)))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage[_0x4c9227(0x1a9)](speedMatch[0x0],''));var buffer=await googleTTS[_0x4c9227(0x19d)]({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x4c9227(0x1b0)](m[_0x4c9227(0x19e)],{'audio':buffer,'mimetype':_0x4c9227(0x1af),'ptt':!![]},{'quoted':m});} }

break
case 'sex':{
            let me = m.sender
            let ments = [me]
            let jawab = `*Do you want to have sex with me?*`
                         let buttons = [
                    {buttonId: `tts eww ${pushname} ,  your penis is very small`, buttonText: {displayText: 'Yes️'}, type: 1},
                    {buttonId:  `tts Ok`, buttonText: {displayText: 'No️'}, type: 1}
                ]             
             await GarfieldNeural.sendButtonText(m.chat, buttons, jawab,`Neural Ai` , m, {mentions: ments})
            }
            break

            case 'getsong': {
            
                if (!text) return reply(`Example : ${prefix + command} kuweni`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * 1)]       
                var Linkx = anu.url
               
                let { tharinduaudio } = require('./lib/ytmp3')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await tharinduaudio(Linkx, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendImage(m.chat, media.thumb,  '```Title :``` *' + media.title + '*\n```URL :``` *' + isUrl(Linkx) + '*\n```Quality :``` *320Kbps*\n', m)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `{media.title}.m4a` }, { quoted: m }) 
            
            }
          
            break
      
      
            case 'hellou': {
                let { tharinduaudio } = require('./lib/ytmp3')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await tharinduaudio(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldNeural.sendImage(m.chat, media.thumb,  '```Title :``` *' + media.title + '*\n```URL :``` *' + isUrl(text) + '*\n```Quality :``` *320Kbps*\n', m)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/x-wav', fileName: `${media.title}.wav`}, { quoted: m })
            }
            break
            
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                GarfieldNeural.sendMessage(m.chat, { image: { url: result }, caption: '🦋 Media URL : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
                if (!text) return reply('What Are you Looking For??')
                await reply(mess.wait)
                xmodules.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
              if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
          
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                GarfieldNeural.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}, 𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ ` }, { quoted: m })
             }
             break
            case 'drakor':
                if (!text) return reply('What Are You Looking For??')
                await reply(mess.wait)
                xmodules.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'anime':{
                if (!text) return reply(`What Anime Are You Looking For??`)
                await reply(mess.wait)
                xmodules.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Watch🎥",
						"url": `${myweb}`
						}
					}
				]
				await GarfieldNeural.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                }
            break
            case 'character': case 'karakter':
                if (!text) return reply(`What Anime Character Are You Looking For??`)
                await reply(mess.wait)
                xmodules.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": `${global.fbt}`,
						"url": `${myweb}`
						}
					}
				]
				await GarfieldNeural.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'manga':
                if (!text) return reply(`What Manga Are You Looking For??`)
                await reply(mess.wait)
                xmodules.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": `${global.fbt}`,
						"url": `${myweb}`
						}
					}
				]
				await GarfieldNeural.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
case 'textmaker': {
if (args.length < 1) return reply(`Example :\n${prefix + command} Name`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
GarfieldNeural.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
GarfieldNeural.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
            case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                reply(mess.wait)
                GarfieldNeural.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generated Random ' + command }, { quoted: m })
            }
            break
	    case 'couplepp':  case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                GarfieldNeural.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                GarfieldNeural.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffee`,
                    footer: GarfieldNeural.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return reply(`Enter Query Title`)
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `${global.emoji01} Title : ${result.title}\n${global.emoji01} Category : ${result.type}\n${global.emoji01} Detail : ${result.source}\n${global.emoji01} Media URL : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: GarfieldNeural.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return reply(`Enter Query Title`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${global.emoji01} Title : ${result.title}\n${global.emoji01} Source : ${result.source}\n${global.emoji01} Media URL : ${result.image}`,
                    footer: GarfieldNeural.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'motivationalquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) return reply(`Enter Text, Example : ${prefix + command} Xeon`)
                reply(mess.wait)
                GarfieldNeural.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) return reply(`Example : ${prefix + command} 916909137213`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Phone Number :* ${anu.message.nomer_hp}\n${global.emoji01} *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n${global.emoji01} *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n${global.emoji01} *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) return reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Dream :* ${anu.message.mimpi}\n${global.emoji01} *Meaning :* ${anu.message.arti}\n${global.emoji01} *Solution :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Your Name :* ${anu.message.nama_anda.nama}\n${global.emoji01} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${global.emoji01} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Your Name :* ${anu.message.nama_anda.nama}\n${global.emoji01} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${global.emoji01} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Husband's Name :* ${anu.message.suami.nama}\n${global.emoji01} *Husband Born :* ${anu.message.suami.tgl_lahir}\n${global.emoji01} *Wife's Name :* ${anu.message.istri.nama}\n${global.emoji01} *Born Wife :* ${anu.message.istri.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Your Name :* ${anu.message.nama_anda.nama}\n${global.emoji01} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${global.emoji01} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${global.emoji01} *Positive Side :* ${anu.message.sisi_positif}\n${global.emoji01} *Negative Side :* ${anu.message.sisi_negatif}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Meaning :* ${anu.message.arti}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Life Path :* ${anu.message.life_path}\n${global.emoji01} *Destiny :* ${anu.message.destiny}\n${global.emoji01} *Destiny Desire :* ${anu.message.destiny_desire}\n${global.emoji01} *Personality :* ${anu.message.personality}\n${global.emoji01} *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendImage(m.chat,  anu.message.gambar, `${global.emoji01} *Your Name :* ${anu.message.nama_anda}\n${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan}\n${global.emoji01} *Positive Side :* ${anu.message.sisi_positif}\n${global.emoji01} *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Wedding Date :* ${anu.message.tanggal}\n${global.emoji01} *Characteristics :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.hari_lahir}\n${global.emoji01} *Business :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.hari_lahir}\n${global.emoji01} *Sustenance :* ${anu.message.rejeki}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.hari_lahir}\n${global.emoji01} *Profession :* ${anu.message.pekerjaan}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Analysis :* ${anu.message.analisa}\n${global.emoji01} *Root Number :* ${anu.message.angka_akar}\n${global.emoji01} *Nature :* ${anu.message.sifat}\n${global.emoji01} *Element :* ${anu.message.elemen}\n${global.emoji01} *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Analysis :* ${anu.message.analisa}\n${global.emoji01} *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendImage(m.chat, anu.message.image, `${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Tarot Symbol :* ${anu.message.simbol_tarot}\n${global.emoji01} *Meaning :* ${anu.message.arti}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tahun_lahir}\n${global.emoji01} *Gender :* ${anu.message.jenis_kelamin}\n${global.emoji01} *Kua Number :* ${anu.message.angka_kua}\n${global.emoji01} *Group :* ${anu.message.kelompok}\n${global.emoji01} *Character :* ${anu.message.karakter}\n${global.emoji01} *Good Sector :* ${anu.message.sektor_baik}\n${global.emoji01} *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *When Challenged :* ${anu.message.kala_tinantang}\n${global.emoji01} *Info :* ${anu.message.info}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Info :* ${anu.message.info}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Day Of Birth :* ${anu.message.hari_lahir}\n${global.emoji01} *Date Of Birth :* ${anu.message.tgl_lahir}\n${global.emoji01} *Fateful Day :* ${anu.message.hari_naas}\n${global.emoji01} *Info :* ${anu.message.catatan}\n${global.emoji01} *Notes :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Day Of Birth :* ${anu.message.hari_lahir}\n${global.emoji01} *Date Of Birth :* ${anu.message.tgl_lahir}\n${global.emoji01} *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Day Of Birth :* ${anu.message.hari_lahir}\n${global.emoji01} *Date Of Birth :* ${anu.message.tgl_lahir}\n${global.emoji01} *Sustenance Direction :* ${anu.message.arah_rejeki}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 8, 9, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 8, 9, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Date :* ${anu.message.tanggal}\n${global.emoji01} *Number Of Neptune :* ${anu.message.jumlah_neptu}\n${global.emoji01} *Day Character :* ${anu.message.watak_hari}\n${global.emoji01} *Dragon Day :* ${anu.message.naga_hari}\n${global.emoji01} *Good Hour :* ${anu.message.jam_baik}\n${global.emoji01} *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 8, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Name :* ${anu.message.nama}\n${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n${global.emoji01} *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Date :* ${anu.message.tgl_memancing}\n${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Results :* ${anu.message.result}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Zodiac :* ${anu.message.zodiak}\n${global.emoji01} *Number :* ${anu.message.nomor_keberuntungan}\n${global.emoji01} *Aroma :* ${anu.message.aroma_keberuntungan}\n${global.emoji01} *Planet :* ${anu.message.planet_yang_mengitari}\n${global.emoji01} *Flower :* ${anu.message.bunga_keberuntungan}\n${global.emoji01} *Color :* ${anu.message.warna_keberuntungan}\n${global.emoji01} *Stone :* ${anu.message.batu_keberuntungan}\n${global.emoji01} *Element :* ${anu.message.elemen_keberuntungan}\n${global.emoji01} *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                GarfieldNeural.sendText(m.chat, `${global.emoji01} *Results :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply('Your Daily Limit Has Expired')
                if (!text) return reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} ff 552992060`)
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    if (!zone) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} aov 293306941441181`)
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} cod 6290150021186841472`)
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} pb riio46`)
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} ig josephxeon13`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    GarfieldNeural.sendMedia(m.chat, anu.caption.profile_hd, '', `${global.emoji01} Full Name : ${anu.caption.full_name}\n${global.emoji01} User Name : ${anu.caption.user_name}\n${global.emoji01} ID ${anu.caption.user_id}\n${global.emoji01} Following : ${anu.caption.followers}\n${global.emoji01} Followers : ${anu.caption.following}\n${global.emoji01} Bussines : ${anu.caption.bussines}\n${global.emoji01} Professional : ${anu.caption.profesional}\n${global.emoji01} Verified : ${anu.caption.verified}\n${global.emoji01} Private : ${anu.caption.private}\n${global.emoji01} Bio : ${anu.caption.biography}\n${global.emoji01} Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} npm scrape-primbon`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`${global.emoji01} Name : ${anu.name}\n${global.emoji01} Version : ${Object.keys(anu.versions)}\n${global.emoji01} Created : ${tanggal(anu.time.created)}\n${global.emoji01} Modified : ${tanggal(anu.time.modified)}\n${global.emoji01} Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n${global.emoji01} Description : ${anu.description}\n${global.emoji01} Homepage : ${anu.homepage}\n${global.emoji01} Keywords : ${anu.keywords}\n${global.emoji01} Author : ${anu.author.name}\n${global.emoji01} License : ${anu.license}\n${global.emoji01} Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktokd': case 'tiktoknowmx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '🥬With Watermark🥬'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwmx': case 'tiktokwatermarkx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🥬No Watermark🥬'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3x': case 'tiktokaudiox': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🥬No Watermark🥬'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '🥬With Watermark🥬'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
                GarfieldNeural.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagramx': case 'igx': case 'igdlx': {
                if (!text) return reply(`No Query Url!`)
                reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) GarfieldNeural.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    GarfieldNeural.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
               case 'savef': {
  if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} link url`) 
  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data.url) {
  const list = {title: `${i.type}`,
  rows: [
	    {
	     title: `Quality 🦋 ${i.subname}`, 
	     rowId: `${prefix}get ${text}`,
	     description: `𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗡𝗼𝘄 ⬇️`	     
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  GarfieldNeural.sendMessage(
      m.chat, 
      {
       text: `${data.meta.title} *Here is the list of videos, click the button below to choose, here is the list of videos, click the button below to choose*`,
       footer: `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ`,
       title: "*▊▊▊ SAVER ▊▊▊*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    m.reply(`*Sorry An Error Occurred*`)
                })
            }  
            break

		//Backup, for example, the video above doesn't come out\\
		case 'igeh': case 'instagram2x': case 'ig2': case 'igdl2': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                GarfieldNeural.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await GarfieldNeural.sendImage(m.chat, anu.result.img, `${global.emoji01} Title : ${anu.result.lagu}\n${global.emoji01} Album : ${anu.result.album}\n${global.emoji01} Singer : ${anu.result.penyanyi}\n${global.emoji01} Publish : ${anu.result.publish}\n${global.emoji01} Lyrics :\n${anu.result.lirik.result}`, m)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await GarfieldNeural.sendImage(m.chat, anu.result.thumb, `${global.emoji01} Title : ${anu.result.title}\n${global.emoji01} URL : ${isUrl(text)[0]}`)
                GarfieldNeural.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdlx': case 'twitterx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3x': case 'twitteraudiox': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: 'Video 📽️'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
                GarfieldNeural.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbget': case 'fbx': case 'facebookx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                GarfieldNeural.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `${global.emoji01} Title : ${anu.result.title}`}, { quoted: m })
            }
            break
            case 'fbdl': case 'fbjj': case 'facjjebook': case 'getfb': {     	          
             if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
            let bocil = require('@bochilteam/scraper')  
                bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                    let txt = `*𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖽𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝖾𝗋 𝗏8.3*\n\n`
                    txt += `*${global.emoji02} TITLE :* ${data.title}\n`
                    txt += `*${global.emoji02} QUALITY :* ${data.result[0].quality}\n`
                    txt += `*${global.emoji02} DESCRIPTION :* ${data.description}\n`
                    txt += `*${global.emoji02} URL :* ${text}\n\n`         
                buf = await getBuffer(data.thumbnail)    
                GarfieldNeural.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         

                for (let i of data.result) {     

                GarfieldNeural.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*🎼  Quality :* ${i.quality}`}, { quoted: m })

                }          

                }).catch((err) => {

                    m.reply(`*Failed When Downloading Media and Sending Files*`)

                })

            }

            break

	        case 'pindl': case 'pinterestdl': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                GarfieldNeural.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: 'Audio 🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: 'Video 📽️'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
${global.emoji01} Title : ${anu.title}
${global.emoji01} Author : ${anu.author.name}
${global.emoji01} Like : ${anu.like}
${global.emoji01} Caption : ${anu.caption}
${global.emoji01} URL : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
			footer: GarfieldNeural.user.name,
			buttons,
			headerType: 4
		    }
		    GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        GarfieldNeural.sendMessage(m.chat, { image: { url }, caption: `${global.emoji01} Title : ${anu.title}\n${global.emoji01} Author : ${anu.author.name}\n${global.emoji01} Like : ${anu.like}\n${global.emoji01} Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) return reply(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		GarfieldNeural.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
		if (!text) return reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		GarfieldNeural.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		reply(mess.wait)
		GarfieldNeural.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		GarfieldNeural.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		GarfieldNeural.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		GarfieldNeural.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`What Format Do You Want? ? Example : ${prefix + command} pdf

Available Formats: pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) return reply(`Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options Available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return reply(`Which Hadith??\n\nExample:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadith Not Found !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		GarfieldNeural.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await GarfieldNeural.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                GarfieldNeural.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                GarfieldNeural.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                GarfieldNeural.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `${global.emoji02} *Name :* ${i.nama}\n${global.emoji02} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
	    //Coded by Tharindu Liyanage
	     case 'readmore': {
            
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} *නාකි මයින මැරි*`   
                 anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               m.reply(`${anu.result}`)
            }
            break
              case 'wiki': case 'wikipedia': {       
                if (!text) throw `Example : ${prefix + command} Sri Lanka`          
                anu = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${global.lolkey}&query=${text}`)
                m.reply(`*Wikipedia ${global.emoji02}*\n\n${anu.result}`)
            }
        break
                               case 'bug': case 'report': {
                    	if(!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
                    	GarfieldNeural.sendMessage(`94711502119@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break
     case 'ytshorts': case 'shorts': {
      
  if (!text) return m.reply(`*Use ${prefix + command} enter pin link*`)
  if (!isUrl(args[0]) && !args[0].includes('youtube')) throw '*The link you provided is not valid*'               
                
                   
  xa.Youtube(`${text}`).then(async (data) => {
  if (data.medias[0].formattedSize.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(data)) 
  cap = `
*▊▊▊YOUTUBE SHORTS▊▊▊*

*🎼 ▶━━━━━━━━━2:30*\n\n\n \n*🎼 TITLE:* ${data.title} \n*🎼 QUALITY:* ${data.medias[0].quality} \n*🎼 SIZE:* ${data.medias[0].formattedSize} \n*🎼 DURATION* ${data.duration} \n*🎼 ID:* ${data.medias[0].cached} \n*🎼 LINK:* ${data.url}\n\n`
  buf = await getBuffer(data.thumbnail)
  GarfieldNeural.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  GarfieldNeural.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*🎼 TITLE:* ${data.title} \n*🎼 QUALITY:* ${data.medias[0].quality} \n*🎼 SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    m.reply(`*Failed to download and send media*`)
                })
            }
            break
case 'lyrics': {
    if (!text) return reply(`Use example ${prefix}lyrics sorry`)
m.reply(mess.wait)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
m.reply(`
 *TITLE :* *${result.title}*
 *AUTHOR :* ${result.author}
 *LYRICS* : ${result.lyrics}
 
`.trim())
}
break
            break
            case 'wp': case 'wattpad': case 'wattpadsearch': {

if (!text) throw 'Masukkan query' 

                

                let urlnya = text

	            xa.Wattpad(urlnya)

	            .then(async(result) => {	  	                                	                      	            		                  			    				

				let link = await getBuffer(result[0].thumb)

                GarfieldNeural.sendMessage(m.chat, { image: link, caption: `${result[0].description}\nTitle: ${result[0].judul}\nAuthor: DRIPS\nDibaca: ${result[0].dibaca}\nDivote: ${result[0].divote}\nBab: ${result[0].bab}\nWaktu: ${result[0].waktu}\nUrl: ${result[0].url}` }, { quoted: m })                                              

            }).catch((err) => m.reply(`*feature error*`))

            }		

			break
			case 'fb2': case 'facebook2': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'    
                anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=${global.violkey}&url=${text}`)
                tummb = await getBuffer('https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png')    
                GarfieldNeural.sendMessage(m.chat, { video: { url: anu.result.url[0].url }, jpegThumbnail:tummb, caption: `*📽️ FACEBOOK DOWNLOADER*\n\n*Name* : ${anu.result.meta.title}\n*Quality* : ${anu.result.url[0].subname}\n*Ext* : ${anu.result.url[0].ext}\n`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
            }
            break

            case 'attp': {

           if (!text) throw `*Example : ${prefix + command} drips hi*`
           
            
           await GarfieldNeural.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, '𝖦𝖠𝖱𝖥𝖨𝖤𝖫𝖣 𝗏8.0', m, {asSticker: true}).catch((err) => m.reply('*error while sending sticker*'))
         }
         break
            case 'get': {   const _0x34ae64=_0x4aaf;(function(_0x4f615e,_0xf70260){const _0x4980c5=_0x4aaf,_0x514c17=_0x4f615e();while(!![]){try{const _0x61bb84=-parseInt(_0x4980c5(0x133))/0x1+-parseInt(_0x4980c5(0x125))/0x2+-parseInt(_0x4980c5(0x131))/0x3+parseInt(_0x4980c5(0x122))/0x4*(-parseInt(_0x4980c5(0x12b))/0x5)+-parseInt(_0x4980c5(0x126))/0x6+parseInt(_0x4980c5(0x128))/0x7+parseInt(_0x4980c5(0x134))/0x8;if(_0x61bb84===_0xf70260)break;else _0x514c17['push'](_0x514c17['shift']());}catch(_0x5aaeba){_0x514c17['push'](_0x514c17['shift']());}}}(_0x36e4,0xc3516));function _0x4aaf(_0x1385ee,_0x239b2a){const _0x36e416=_0x36e4();return _0x4aaf=function(_0x4aaf67,_0x34a84b){_0x4aaf67=_0x4aaf67-0x121;let _0x2841d8=_0x36e416[_0x4aaf67];return _0x2841d8;},_0x4aaf(_0x1385ee,_0x239b2a);}if(!text)throw _0x34ae64(0x12e);let bicil=require(_0x34ae64(0x12a)),urlnya=text;function _0x36e4(){const _0x51456b=['reply','*Sorry\x20Future\x20Error*','3138362SiEBiq','8535408BTULSM','sendMessage','2134986aYPBVZ','mp4','@bochilteam/scraper','5URDZQU','url','subname','Enter\x20a\x20Link','savefrom','catch','675768wdljsx','then','717647WxIoQT','36723048vVzWLc','*quality\x20','642820yydbRo'];_0x36e4=function(){return _0x51456b;};return _0x36e4();}bicil[_0x34ae64(0x12f)](urlnya)[_0x34ae64(0x132)](async _0x54076b=>{const _0x5ef13b=_0x34ae64;for(let _0x5ebf71 of _0x54076b[_0x5ef13b(0x12c)]){if(_0x5ebf71[_0x5ef13b(0x12c)]['includes'](_0x5ef13b(0x129))){let _0x2a2818=await getBuffer(_0x5ebf71[_0x5ef13b(0x12c)]);GarfieldNeural[_0x5ef13b(0x127)](m['chat'],{'video':_0x2a2818,'caption':_0x5ef13b(0x121)+_0x5ebf71[_0x5ef13b(0x12d)]+'*'},{'quoted':m});}}})[_0x34ae64(0x130)](_0x31c730=>m[_0x34ae64(0x123)](_0x34ae64(0x124)));  }		

			break

 case 'device': {

                if (!text) throw '*What brand are you looking for, for example? \n device Huawei nova 5T*'   
                 anu = await fetchJson(`https://yx-api.herokuapp.com/api/search/gsmarena?query=${text}`)				
				reply212 = `*ＤＥＶＩＣＥ 🌌*\n\n
*Name* : ${anu.judul}
*Rilis* : ${anu.rilis}
*Ukuran* : ${anu.ukuran}
*Model* : ${anu.type}
*Storage* : ${anu.storage}
*Display* : ${anu.display}
*Inches* : ${anu.inchi}
*Pixel* : ${anu.pixel}
*VideoPixel* : ${anu.videoPixel}
*Ram* : ${anu.ram}
*Chipset* : ${anu.chipset}
*Batteryi* : ${anu.batrai}
*Detail* : ${anu.detail}`			
//var kontoll = await getBuffer(anu.result.owner.profile_pic)	
				//sendButLocation(from, `${reply22}`,`© alyabot`, {jpegThumbnail:kontoll}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'OKE'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
anu = await getBuffer(anu.thumb)
GarfieldNeural.sendMessage(m.chat, { image: anu, caption: `${reply212}` }, { quoted: m}).catch((err) => m.reply('*No search results found*'))
	            }
                break
            case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {
                 if (!text) throw '*Enter a Link Query!*'              
                let bocil = require('@bochilteam/scraper')    
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
                bocil.tiktokdlv3(`${text}`).then(async (video) => {           
                  var hadi = randomNomor(100)        
                   var hadie = randomNomor(200)     
                   var hadir = randomNomor(300)
                    var memek = randomNomor(1000)                      
                  let caption = `
                  *▊▊▊ TIKTOK ▊▊▊*\n\n*AUTHOR* : DRIPS\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*QUALITY* : nowatermark\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKE* : ${hadie}\n*SOURCE* : ${text}\n`
                  buf = await getBuffer(video.author.avatar)                
                  GarfieldNeural.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
                  GarfieldNeural.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
            case 'googledrive': {
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('googledrive.com')) throw '*The link you provided is not valid*'
anu = await fetchJson(`https://xteam.xyz/dl/drive?url=${text}&APIKEY=${global.riy}`)
m.reply(`${util.format(anu)}`)
GarfieldNeural.sendMessage(m.chat, {document: await getBuffer(anu.result.server2), mimetype: 'application/zip', fileName: `${anu.result.title}`}, {quoted:m}).catch ((err) => m.reply('*Failed to download File*'))     
}
break
case 'mediafire': {
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 150) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*▊▊▊ MEDIAFIRE ▊▊▊*				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait processing..._

*ＧＡＲＦＩＥＬＤ ＢＯＴ*`
m.reply(`${result4}`)
GarfieldNeural.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply('*Failed to download File*'))
}
break
case 'music': {
                if (!text) throw `Example : ${prefix + command} Ridma Weerawardena songs`
                let yts = require("yt-search")
                let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
                    let listmenuu = [`VIDEO MP4 🎼 : ${search.all[0].title}`,`SONG MP3 🎼 : ${search.all[1].title}`,`VIDEO MP4 🎼 : ${search.all[2].title}`,`SONG MP3 🎼 : ${search.all[3].title}`,`VIDEO MP4 🎼 : ${search.all[4].title}`,`SONG MP3 🎼 : ${search.all[5].title}`,`VIDEO MP4 🎼 : ${search.all[6].title}`,`SONG MP3 🎼 : ${search.all[7].title}`,`VIDEO MP4 🎼 : ${search.all[8].title}`,`SONG MP3 🎼 : ${search.all[9].title}`,`VIDEO MP4 🎼 : ${search.all[10].title}`,`SONG MP3 🎼 : ${search.all[11].title}`,`VIDEO MP4 🎼 : ${search.all[12].title}`,`SONG MP3 🎼 : ${search.all[13].title}`,`VIDEO MP4 🎼 : ${search.all[14].title}`,`SONG MP3 🎼 : ${search.all[15].title}`,`VIDEO MP4 🎼 : ${search.all[16].title}`,`SONG MP3 🎼 : ${search.all[17].title}`,`VIDEO MP4 🎼 : ${search.all[18].title}`,`SONG MP3 🎼 : ${search.all[19].title}`]
                    let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
                    let nombor = 1
                    let startnum = 0
                    let startnumm = 0
                    for (let x of listmenu) {
                    const list = {title: 'RESULT NUMBER ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `${listmenuuu[startnumm++]}`,
                        rowId: `${prefix}${x}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  GarfieldNeural.sendMessage(
      m.chat, 
      {
       text: "\n\n*Music Downloder 🦋*",
       footer: ` ${global.botname} `,
       title: `HERE IS YOUR RESULTS FROM *${text}* _select song or video below_`,
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })
      }
     break
                   case 'git': case 'gitclone':          
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) throw 'link github  EXAMPLE: https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
    if (!regex1.test(args[0])) throw 'link!'        
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
    m.reply(`*Please wait, sending repository..*`)
    GarfieldNeural.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply('*Sorry, the github link you provided is private, and cant be made into a file*'))
			break
           
case 'yt': case 'ytsearch': case 'youtubesearch': {

	    if (!text) throw `*Example : ${prefix + command} The title of the song you are looking for*`
                let yts = require("yt-search")
                let search = await yts(text)                
                let no = 1
                let sections = []   
                for (let i of search.all) {
                const list = {title: `${i.title}`,
                rows: [
	                  {
	                  title: `SONG MP3 🎼 :`, 
	                  rowId: `${prefix}ytmp3 ${i.url}`,
	                  description: `mimetype: audio/mp3 ${i.description}\n*UPLOAD:* ${i.ago}\n*VIEWS:* ${i.views}\n*DURATION* ${i.timestamp}\n*LINK:* ${i.url}`
	                  },
	                  {
	                  title: `VIDEO MP4 🎼 :`, 
	                  rowId: `${prefix}ytmp4 ${i.url}`,
	                  description: `mimetype: video/mp4 ${i.description}\n*UPLOAD:* ${i.ago}\n*VIEWS:* ${i.views}\n*DURATION* ${i.timestamp}\n*LINK:* ${i.url}`
	                  },
	                  {
	                  title: `SOURCE LINK 🌐`, 
	                  rowId: `${prefix}linkok ${i.url}`,
	                  description: `result: url ${i.description}\n*UPLOAD:* ${i.ago}\n*VIEWS:* ${i.views}\n*DURATION* ${i.timestamp}\n*LINK:* ${i.url}`
	                  }, 
	                  ]
                      }
                      sections.push(list)   
                      }
                      const sendm =  GarfieldNeural.sendMessage(
                      m.chat, 
                      {
                      text: `*Here are the youtube search results from ${text} You can select audio and video media below*`,
                      footer: `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ`,
                      title: `▊▊▊ YT SEARCH ▊▊▊`,
                      buttonText: "YOUTUBE SEARCH RESULTS",
                      sections
                      }, { quoted : m })
                      }
                  break
                  case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "Go to the town and dance to the song of wada karana ape wiruwa",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting room😂",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice note🤣🤣",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice note😂",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice note😂",
    "say i love the bot owner drips through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love you😌",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const dripsdare = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(global.thumb)
              GarfieldNeural.sendMessage(from, { image: buffer, caption: '*DARE*\n'+ dripsdare }, {quoted:m})
              break
                            
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, drips?ðŸ¦„",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day", 
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const dripstruth = truth[Math.floor(Math.random() * truth.length)]
              buffer = await getBuffer(global.thumb)
              GarfieldNeural.sendMessage(from, { image: buffer, caption: ' *TRUTH*\n'+  dripstruth }, {quoted:m})
              break
              case 'ig2': case 'insta': case 'instagram2': {	            
                if (!text) throw '*Enter a Link Query!*'                
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
            anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)
            var oi = 1
            for(let i of anu.medias){                
                var txt = `*▊▊▊ INSTAGRAM ▊▊▊*\n\n*Username:* ${anu.user.username}\n*Fullname:* ${anu.user.fullName}\n*Followers:* ${anu.user.followers}\n*Type:* ${anu.medias[0].type}\n*Tipe:* ${anu.medias[0].fileType}\n*ID:* ${anu.user.id}\n*Jumlah Media:* ${oi++}\n*Url:* ${text}\n\n*${global.botname}*`
                var buf = await getBuffer(anu.user.profilePicUrl)        
                GarfieldNeural.sendMessage(m.chat, { image: { url: anu.user.profilePicUrl }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('error'))
                GarfieldNeural.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m }).catch((err) => m.reply('error'))
               }
            }
            break
            case 'igimage': {	            
                if (!text) throw '*Enter a Link Query!*'
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
               
                instagramdlv3(`${text}`).then(async (data) => {
                for (let f of data) {                                      
                GarfieldNeural.sendMedia(m.chat, f.url, '', `Download Url Instagram From ${text}`, m)
                }
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
            //Coded by Tharindu Liyanage
            
            
            //Coded by Tharindu Liyanage
            case 'igs': case 'story': case 'instagramstory': {

         if (!text) throw 'Type  Username!' 

                let urlnya = text

	            hx.igstory(urlnya)

	            .then(async(result) => {

		        var halo = 0		

	            GarfieldNeural.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*🎼  Username :* ${result.user.username}\n*🎼  Fullname :* ${result.user.fullName}\n*🎼  Followers :* ${result.user.followers}\n*🎼  Following :* ${result.user.following}\n*🎼  ID :* ${result.user.id}\n*🎼  Filetype :* ${result.medias[0].fileType}\n*🎼  Type :* ${result.medias[0].type}\n*🎼  Media :* ${result.medias.length}\n*🎼  Bio :* ${result.user.biography}\n\n*${global.botname}*` }, { quoted: m })	                                  	                      	            

		        for(let i of result.medias) {

			    if(i.url.includes('mp4')){

				let link = await getBuffer(i.url)

                GarfieldNeural.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 

                } else {

                    let link = await getBuffer(i.url)

                  GarfieldNeural.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  

                }

            }

            }).catch((err) => m.reply(`*Sorry Story Instagram ${text} not found*`))

            }		

			break

case 'need': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Kuwebi ft Charitha Attalage`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buf = await getBuffer(anu.thumbnail)
                let caption = `*PLAYING YOUTUBE*
                
*🎼 TITLE :* ${anu.title}
*🎼 DESCRIPTION :* ${anu.description}
*🎼 URL :* ${anu.url}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   GarfieldNeural.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: caption,
                            imageMessage: message.imageMessage,
                            hydratedFooterText: `${botname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SOURCE VIDEO',
                                    url: `${anu.url}`
                                }
                            }, {
                            	urlButton: {
                                displayText: `GITHUB 🦋`, 
                                    url: `https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `${global.video}`,
                                    id: `${prefix}ytmp4 ${anu.url}`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: `${global.song}`,
                                    id: `${prefix}ytmp3 ${anu.url}`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: `${global.yts}`,
                                    id: `${prefix}ytsearch ${anu.title}`
                                }
                            }]
                        }
                    }
                
                }), { userJid: m.chat })
                GarfieldNeural.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {
                if (!text) throw '*Enter a Link Query!*'        
                let bocil = require('@bochilteam/scraper')    
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
                bocil.tiktokdlv3(`${text}`).then(async (video) => {           
                  var hadi = randomNomor(100)        
                   var hadie = randomNomor(200)     
                   var hadir = randomNomor(300)
                    var memek = randomNomor(1000)                      
                  let caption = `
                  *▊▊▊TIKTOK ▊▊▊*\n\n*AUTHOR* : DRIPS\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*QUALITY* : nowatermark\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKE* : ${hadie}\n*SOURCE* : ${text}\n\n\n*${global.botname}*`
                  buf = await getBuffer(video.author.avatar)                
                  GarfieldNeural.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
                  GarfieldNeural.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
case 'searchgroup': {

//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
           if (!text) throw `Example : ${prefix + command} Education`            
            anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)                       
            ini_txt = '*Search Group*\n\n'
            for (let i of anu.result) {      
            ini_txt += `*Name* : *${i.nama}*\n`            
            ini_txt += `*Link* : ${i.link}\n\n`            
            }
            m.reply(`${ini_txt}`)
            }            
            break
case 'playstore': case 'playstoresearch': {

//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} Facebook`            
            x = await fetchJson(`https://api.violetics.pw/api/apk/playstore?apikey=${global.violkey}&apps=${text}`)                       
            ini_txt = '*PLAYSTORE SEARCH*\n\n'
            for (let i of x.result) {       
            ini_txt += `*NAME* : ${i.title}\n`
            ini_txt += `*Rate* : ${i.rate}\n`
            ini_txt += `*PACKAGE* : ${i.package}\n`
            ini_txt += `*URL* : ${i.url}\n`
            ini_txt += `*INFO* : ${i.description}\n\n`         
            }   
            GarfieldNeural.sendImage(m.chat, x.result[0].thumbnail, `${ini_txt}`, m).catch((err) => m.reply(jsonformat('*Sorry there was an error*')))
            }
            break
            case 'translate': case 'terjemahan': case 'tr': {
if (!args.join(" ")) return m.reply("Text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&sin=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
break
        case 'groups':
        if (!q) return m.reply(`Example: ${prefix}searchgroups Education`)
        mel.linkwa(q)
        .then(result => {
        let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
        for (let i of result) {
        res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
        }
        m.reply(res)
        });
        break

	    //Coded by Tharindu Liyanage
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: `${global.play}` }, type: 1 }
                ]
                GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await GarfieldNeural.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, GarfieldNeural.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: `${global.play}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await GarfieldNeural.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: `${global.stop}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, GarfieldNeural.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: `${global.skip}` }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: `${global.stop}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GarfieldNeural.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await GarfieldNeural.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GarfieldNeural.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: `${global.stop}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, GarfieldNeural.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: `${global.play}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await GarfieldNeural.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: `${global.skip}` }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: `${global.stop}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GarfieldNeural.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await GarfieldNeural.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GarfieldNeural.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: `${global.stop}` }, type: 1 }
                    ]
                    await GarfieldNeural.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, GarfieldNeural.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return replay(`${mess.owner}`)
                GarfieldNeural.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return replay(`${mess.owner}`)
                GarfieldNeural.public = false
                reply('Successful Change To Self Usage')
            }
                      break
            case 'contact': {
                GarfieldNeural.sendContact(m.chat, global.owner, m)
            }
            break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						GarfieldNeural.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
				case 'waifu': case 'loli':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					GarfieldNeural.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case "setmenu": 
if (!text) return reply("1. image\n2. list\n3. catalog\n\nExample .setmenu image")
if (q == "image") {
typemenu = 'image'
reply("Success Changing Menu To "+q)
} else if (q == "list") {
typemenu = 'list'
reply("Success Changing Menu To "+q)
} else if (q == "catalog") {
typemenu = 'catalog'
reply("Success Changing Menu To "+q)
}
                    break
                          case 'list': case 'menu': case 'bot' : case 'alive' :{ function _0x3b90(){const _0x1d64bb=['\x20\x0a│\x20','\x20\x20Created\x20by\x20','owner','emoji02','botname','\x0a│\x20','sendMessage','list','allmenu','keys','command','\x20𝗢𝘄𝗻𝗲𝗿\x20𝗡𝗮𝗺𝗲\x20:\x20','8PLXzwM','\x20𝗛𝗼𝘀𝘁\x20𝗡𝗮𝗺𝗲\x20:\x20','data','2007752lPqLvu','ownername','\x20𝗕𝗼𝘁\x20𝗡𝗮𝗺𝗲\x20:\x20','chat','357348dZAZMb','\x20👋\x20\x0a│\x20','30ZDLBho','uptime','ownernomer','2515392vSMowf','810299DrkXTK','308578xQKTVv','5213169qZAMGI','thumb','1058330STPlVv','\x20𝗦𝗽𝗲𝗲𝗱\x20:\x200.00117\x20miliseconds\x0a│\x20','\x0a┌─\x0a│\x20Hi\x20\x20'];_0x3b90=function(){return _0x1d64bb;};return _0x3b90();}const _0x5d5c5a=_0x32d7;(function(_0x1b583d,_0x20d78d){const _0x3298d0=_0x32d7,_0x49d75d=_0x1b583d();while(!![]){try{const _0x40ac07=-parseInt(_0x3298d0(0x13d))/0x1+-parseInt(_0x3298d0(0x156))/0x2+parseInt(_0x3298d0(0x15b))/0x3+parseInt(_0x3298d0(0x152))/0x4+-parseInt(_0x3298d0(0x140))/0x5+parseInt(_0x3298d0(0x158))/0x6*(-parseInt(_0x3298d0(0x15c))/0x7)+parseInt(_0x3298d0(0x14f))/0x8*(parseInt(_0x3298d0(0x13e))/0x9);if(_0x40ac07===_0x20d78d)break;else _0x49d75d['push'](_0x49d75d['shift']());}catch(_0x1c7ff9){_0x49d75d['push'](_0x49d75d['shift']());}}}(_0x3b90,0x9cb94));let buttons=[{'buttonId':_0x5d5c5a(0x14b),'buttonText':{'displayText':''+global['allmenu']},'type':0x1},{'buttonId':_0x5d5c5a(0x14d),'buttonText':{'displayText':''+global[_0x5d5c5a(0x14a)]},'type':0x1},{'buttonId':'owner','buttonText':{'displayText':''+global[_0x5d5c5a(0x145)]},'type':0x1}],buttonMessage={'image':{'url':''+global[_0x5d5c5a(0x13f)]},'caption':_0x5d5c5a(0x142)+pushname+_0x5d5c5a(0x157)+global[_0x5d5c5a(0x147)]+_0x5d5c5a(0x148)+global[_0x5d5c5a(0x146)]+_0x5d5c5a(0x141)+global[_0x5d5c5a(0x146)]+'\x20𝗥𝘂𝗻𝘁𝗶𝗺𝗲\x20:\x20'+runtime(process[_0x5d5c5a(0x159)]())+_0x5d5c5a(0x148)+global[_0x5d5c5a(0x146)]+_0x5d5c5a(0x154)+global[_0x5d5c5a(0x147)]+_0x5d5c5a(0x143)+global[_0x5d5c5a(0x146)]+_0x5d5c5a(0x14e)+global['ownername']+_0x5d5c5a(0x148)+global[_0x5d5c5a(0x146)]+'\x20𝗢𝘄𝗻𝗲𝗿\x20𝗡𝘂𝗺𝗯𝗲𝗿\x20:\x20'+global[_0x5d5c5a(0x15a)]+_0x5d5c5a(0x148)+global['emoji02']+_0x5d5c5a(0x150)+global[_0x5d5c5a(0x153)]+_0x5d5c5a(0x148)+global[_0x5d5c5a(0x146)]+'\x20𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺\x20:\x20'+os['platform']()+_0x5d5c5a(0x148)+global[_0x5d5c5a(0x146)]+'\x20𝗧𝗼𝘁𝗮𝗹\x20𝗨𝘀𝗲𝗿\x20:\x20'+Object[_0x5d5c5a(0x14c)](global['db'][_0x5d5c5a(0x151)]['users'])['length']+'\x0a│\x20️'+global[_0x5d5c5a(0x147)]+_0x5d5c5a(0x144)+global[_0x5d5c5a(0x153)]+'\x20\x20🪁\x0a│\x20ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣\x20𝖡𝖮Т\x20v8.4\x20and\x20\x0a│\x20𝖭Ξ𝖴𝖱Λ𝖫\x20ΛＩ\x20v1.00\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a└┬──────────────\x0a\x20\x20\x20│\x20'+global['botname']+'\x0a\x20\x20\x20└───────────────\x20','footer':''+global['botname'],'buttons':buttons,'headerType':0x4};function _0x32d7(_0x3e8c61,_0x315f12){const _0x3b90fb=_0x3b90();return _0x32d7=function(_0x32d7db,_0x481ecd){_0x32d7db=_0x32d7db-0x13d;let _0x2048fa=_0x3b90fb[_0x32d7db];return _0x2048fa;},_0x32d7(_0x3e8c61,_0x315f12);}GarfieldNeural[_0x5d5c5a(0x149)](m[_0x5d5c5a(0x155)],buttonMessage,{'quoted':m}); }
            break
                 case 'command': { const _0x5d9eaa=_0x2b6c;(function(_0x1c85e2,_0x41a033){const _0x5e0181=_0x2b6c,_0x585746=_0x1c85e2();while(!![]){try{const _0xe18ef2=parseInt(_0x5e0181(0x155))/0x1+parseInt(_0x5e0181(0x154))/0x2+parseInt(_0x5e0181(0x149))/0x3+-parseInt(_0x5e0181(0x148))/0x4+-parseInt(_0x5e0181(0x140))/0x5*(parseInt(_0x5e0181(0x15f))/0x6)+-parseInt(_0x5e0181(0x143))/0x7*(-parseInt(_0x5e0181(0x163))/0x8)+parseInt(_0x5e0181(0x158))/0x9;if(_0xe18ef2===_0x41a033)break;else _0x585746['push'](_0x585746['shift']());}catch(_0x23d607){_0x585746['push'](_0x585746['shift']());}}}(_0x33a7,0x59d9c));function _0x33a7(){const _0xc5f1ac=['All\x20Menu\x20🎉','184GDVRCw','Horoscope\x20Menu\x20🌈','Main\x20Menu\x20🐦','Group\x20Menu\x20🐻','RPG\x20menu\x20🦁','allmenu','TXT\x20PRO\x20MENU\x20☔','randommenu','botname','Thanks\x20To\x20💐','push','20CRKwDP','\x20List\x20Menu\x20🦋*','ownermenu','52829raMJfH','convertmenu','Owner\x20Menu\x20🦋','Hi\x20👋\x20','helps','1897908vShgKn','261462dOowYc','searchmenu','Search\x20Menu\x20🔎','Textpromenu','Voicechangermenu','Fun\x20Menu\x20🪁','Random\x20Menu\x20🍃','rpgmenu','Anonymous\x20Chat\x20Menu\x20💌','GARFIELD-WHATSAPP-BOT-v8\x20','Main\x20Menu\x20🦋\x20Displays\x20The\x20List\x20Of\x20Features\x20of\x20Garfield\x20Bot','646630dPxKTd','71394jBnWvF','Game\x20Menu\x20🎮','chatmenu','4010013aQXNme','Download\x20Menu\x20⬇️','Voice\x20Changer\x20Menu\x20🎙️','chat','downloadmenu','databasemenu','Database\x20Menu\x20📑','387744yydJrO','gamemenu','MENU'];_0x33a7=function(){return _0xc5f1ac;};return _0x33a7();}function _0x2b6c(_0x392811,_0x2e7ba9){const _0x33a78a=_0x33a7();return _0x2b6c=function(_0x2b6c64,_0x4ec3df){_0x2b6c64=_0x2b6c64-0x140;let _0x4f8ab8=_0x33a78a[_0x2b6c64];return _0x4f8ab8;},_0x2b6c(_0x392811,_0x2e7ba9);}let sections=[],listmenu=[_0x5d9eaa(0x168),'mainmenu',_0x5d9eaa(0x142),'groupmenu',_0x5d9eaa(0x15c),_0x5d9eaa(0x144),_0x5d9eaa(0x14a),_0x5d9eaa(0x157),_0x5d9eaa(0x160),'funmenu',_0x5d9eaa(0x14c),_0x5d9eaa(0x150),_0x5d9eaa(0x16a),_0x5d9eaa(0x15d),'horoscopemenu',_0x5d9eaa(0x14d),_0x5d9eaa(0x147)],listmenuu=[_0x5d9eaa(0x162),_0x5d9eaa(0x165),_0x5d9eaa(0x145),_0x5d9eaa(0x166),_0x5d9eaa(0x159),'Convert\x20Menu\x20🔁',_0x5d9eaa(0x14b),_0x5d9eaa(0x151),_0x5d9eaa(0x156),_0x5d9eaa(0x14e),_0x5d9eaa(0x169),_0x5d9eaa(0x167),_0x5d9eaa(0x14f),_0x5d9eaa(0x15e),_0x5d9eaa(0x164),_0x5d9eaa(0x15a),_0x5d9eaa(0x16c)],listmenuuu=['Main\x20Menu\x20🦋\x20Displays\x20The\x20List\x20Of\x20Features\x20of\x20Garfield\x20Bot',_0x5d9eaa(0x153),_0x5d9eaa(0x153),_0x5d9eaa(0x153),_0x5d9eaa(0x153),'Main\x20Menu\x20🦋\x20Displays\x20The\x20List\x20Of\x20Features\x20of\x20Garfield\x20Bot','Main\x20Menu\x20🦋\x20Displays\x20The\x20List\x20Of\x20Features\x20of\x20Garfield\x20Bot',_0x5d9eaa(0x153),_0x5d9eaa(0x153),_0x5d9eaa(0x153),_0x5d9eaa(0x153),_0x5d9eaa(0x153),_0x5d9eaa(0x153),_0x5d9eaa(0x153),_0x5d9eaa(0x153),_0x5d9eaa(0x153),_0x5d9eaa(0x153)],nombor=0x1,startnum=0x0,startnumm=0x0;for(let x of listmenu){const list={'title':_0x5d9eaa(0x152)+nombor++,'rows':[{'title':''+listmenuu[startnum++],'description':''+listmenuuu[startnumm++],'rowId':''+prefix+x}]};sections[_0x5d9eaa(0x16d)](list);}const sendm=GarfieldNeural['sendMessage'](m[_0x5d9eaa(0x15b)],{'text':_0x5d9eaa(0x146)+pushname,'footer':'\x20'+global['botname']+'\x20','title':'*'+global[_0x5d9eaa(0x16b)]+_0x5d9eaa(0x141),'buttonText':_0x5d9eaa(0x161),'sections':sections},{'quoted':m}); }
     break
            
    case 'owner': case 'donate':  { function _0x10e7(_0x5317b7,_0x490662){var _0x4b2594=_0x4b25();return _0x10e7=function(_0x10e737,_0x3a3d1f){_0x10e737=_0x10e737-0x131;var _0x2a8c5b=_0x4b2594[_0x10e737];return _0x2a8c5b;},_0x10e7(_0x5317b7,_0x490662);}var _0x4daac6=_0x10e7;(function(_0x2ade2a,_0x27925b){var _0x51e5ca=_0x10e7,_0x4b4fb7=_0x2ade2a();while(!![]){try{var _0xf26460=parseInt(_0x51e5ca(0x132))/0x1+parseInt(_0x51e5ca(0x134))/0x2*(parseInt(_0x51e5ca(0x137))/0x3)+parseInt(_0x51e5ca(0x139))/0x4*(parseInt(_0x51e5ca(0x144))/0x5)+-parseInt(_0x51e5ca(0x13b))/0x6+-parseInt(_0x51e5ca(0x141))/0x7+parseInt(_0x51e5ca(0x133))/0x8*(-parseInt(_0x51e5ca(0x140))/0x9)+parseInt(_0x51e5ca(0x143))/0xa;if(_0xf26460===_0x27925b)break;else _0x4b4fb7['push'](_0x4b4fb7['shift']());}catch(_0x3a7f16){_0x4b4fb7['push'](_0x4b4fb7['shift']());}}}(_0x4b25,0x7b6b7));var Hi=_0x4daac6(0x148)+pushname+_0x4daac6(0x13a)+global[_0x4daac6(0x135)]+_0x4daac6(0x13f)+global[_0x4daac6(0x145)];let LANG='en',ttsMessage=Hi,SPEED=0x1;(langMatch=Hi[_0x4daac6(0x146)](_0x4daac6(0x142)))&&(LANG=langHi,ttsMessage=ttsMessage['replace'](langMatch[0x0],''));function _0x4b25(){var _0x41ae32=['\x5c{([a-z]{2})\x5c}','8880340HpmEWm','4105KALyOF','ownername','match','sendMessage','Hi\x20','thumb','515017qWKIsD','4848eylHfv','1088pNpbwL','botname','\x5c{([0].[0-9]+)\x5c}','5457baiteb','chat','1872ZsAalW','\x20.,\x20I\x20am\x20','5412684ljwwJA','synthesize','audio/mp4','notice','\x20I\x20was\x20created\x20by\x20','10620tflKTh','4578658btuzcx'];_0x4b25=function(){return _0x41ae32;};return _0x4b25();}(speedMatch=Hi[_0x4daac6(0x146)](_0x4daac6(0x136)))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage['replace'](speedMatch[0x0],''));var buffer=await googleTTS[_0x4daac6(0x13c)]({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x4daac6(0x147)](m[_0x4daac6(0x138)],{'audio':buffer,'mimetype':_0x4daac6(0x13d),'ptt':!![]},{'quoted':m}),GarfieldNeural[_0x4daac6(0x147)](m[_0x4daac6(0x138)],{'image':{'url':global[_0x4daac6(0x131)]},'caption':''+global[_0x4daac6(0x13e)]},{'quoted':m}); }
            break
case 'neural' :
{ const _0x5d6703=_0x250f;(function(_0xa6ef5d,_0x3d3c16){const _0x41afba=_0x250f,_0xe51c5b=_0xa6ef5d();while(!![]){try{const _0x20b202=parseInt(_0x41afba(0xcd))/0x1*(-parseInt(_0x41afba(0xd2))/0x2)+-parseInt(_0x41afba(0xd5))/0x3+parseInt(_0x41afba(0xdd))/0x4+-parseInt(_0x41afba(0xdc))/0x5*(parseInt(_0x41afba(0xd1))/0x6)+-parseInt(_0x41afba(0xcf))/0x7+parseInt(_0x41afba(0xdf))/0x8+parseInt(_0x41afba(0xd7))/0x9;if(_0x20b202===_0x3d3c16)break;else _0xe51c5b['push'](_0xe51c5b['shift']());}catch(_0x5b77cc){_0xe51c5b['push'](_0xe51c5b['shift']());}}}(_0x263a,0x39dd0));var Hi=_0x5d6703(0xda)+pushname+_0x5d6703(0xd3);let LANG='en',ttsMessage=Hi,SPEED=0x1;(langMatch=Hi['match'](_0x5d6703(0xd9)))&&(LANG=langHi,ttsMessage=ttsMessage['replace'](langMatch[0x0],''));function _0x250f(_0x296d48,_0x213b76){const _0x263a29=_0x263a();return _0x250f=function(_0x250fa7,_0x502c75){_0x250fa7=_0x250fa7-0xcd;let _0xff442f=_0x263a29[_0x250fa7];return _0xff442f;},_0x250f(_0x296d48,_0x213b76);}(speedMatch=Hi[_0x5d6703(0xd6)]('\x5c{([0].[0-9]+)\x5c}'))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage[_0x5d6703(0xdb)](speedMatch[0x0],''));var buffer=await googleTTS[_0x5d6703(0xd0)]({'text':ttsMessage,'voice':LANG});GarfieldNeural[_0x5d6703(0xde)](m[_0x5d6703(0xe1)],{'audio':buffer,'mimetype':_0x5d6703(0xe0),'ptt':!![]},{'quoted':m});function _0x263a(){const _0x4adffe=['chat','1GgEgLl','Info\x20🧊','2425682ijXmUB','synthesize','672402TeyKQJ','944156dONLEZ','\x20,\x20I\x20m\x20Neural\x20AI,\x20your\x20artificial\x20intelligence\x20assistant','https://i.ibb.co/TcLVfMZ/Picsart-22-08-22-15-21-41-175.png','889365VaDGBS','match','8265564SNRIAc','𝖭Ξ𝖴𝖱Λ𝖫\x20ΛＩ','\x5c{([a-z]{2})\x5c}','Hi\x20','replace','10GBLTnu','1269768GNEQqt','sendMessage','2722904uRTjyG','audio/mp4'];_0x263a=function(){return _0x4adffe;};return _0x263a();}let buttons=[{'buttonId':'hi','buttonText':{'displayText':'Use\x20Now\x20🌀'},'type':0x1},{'buttonId':'project','buttonText':{'displayText':_0x5d6703(0xce)},'type':0x1}],buttonMessage={'image':{'url':_0x5d6703(0xd4)},'caption':'*Neural\x20Ai\x20is\x20an\x20automated\x20program\x20powered\x20by\x20a\x20tts\x20engine*\x0a*This\x20can\x20currently\x20only\x20be\x20used\x20with\x20Garfeel\x20bots.\x20The\x20deV\x20of\x20this\x20is\x20ZENOI*','footer':_0x5d6703(0xd8),'buttons':buttons,'headerType':0x4};GarfieldNeural['sendMessage'](m[_0x5d6703(0xe1)],buttonMessage,{'quoted':m}); }
            case 'sc': case 'script': {
                reply(`GitHub : *https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8*\n *Dont Forget To Give Star*\n\n*Follow Now* : ${myweb}\n`)
            }
            break
   case 'allmenu': {
                let buttons = [
                    {buttonId: `command`, buttonText: {displayText: `${global.deploy}`}, type: 1},
                    {buttonId: `helps`, buttonText: {displayText: `${global.project}`},  type: 1}
                      ]
                let buttonMessage = {
                    image: { url: global.thumb },
                    caption: `
┏━「 *${global.botname}* 」━━ 
┃╔══「 *MAIN  ${global.emoji02}* 」
┃╠  ${global.emoji01} alive
┃╠  ${global.emoji01} script
┃╠  ${global.emoji01} neural
┃╠  ${global.emoji01} speedtest
┃╠  ${global.emoji01} ping
┃╠  ${global.emoji01} owner
┃╠  ${global.emoji01} menu
┃╠  ${global.emoji01} delete
┃╠  ${global.emoji01} chatinfo
┃╠  ${global.emoji01} quoted
┃╠  ${global.emoji01} listpc
┃╠  ${global.emoji01} listgc
┃╠  ${global.emoji01} donate
┃╠  ${global.emoji01} report [bug]
┃╠══ 「 *OWNER 🪁* 」 
┃╠  ${global.emoji01} chat [option]
┃╠  ${global.emoji01} join [link]
┃╠  ${global.emoji01} leave
┃╠  ${global.emoji01} block [user]
┃╠  ${global.emoji01} unblock [user]
┃╠  ${global.emoji01} bcgroup [text]
┃╠  ${global.emoji01} bcall [text]
┃╠  ${global.emoji01} setppbot [image]
┃╠  ${global.emoji01} setexif
┃╠══ 「 *GROUP ⚙️* 」       
┃╠  ${global.emoji01} grouplink
┃╠  ${global.emoji01} ephemeral [option]
┃╠  ${global.emoji01} setgcpp [image]
┃╠  ${global.emoji01} setname [text]
┃╠  ${global.emoji01} setdesc [text]
┃╠  ${global.emoji01} group [text]
┃╠  ${global.emoji01} editinfo [option]
┃╠  ${global.emoji01} add [user]
┃╠  ${global.emoji01} kick [reply/tag]
┃╠  ${global.emoji01} hidetag [text]
┃╠  ${global.emoji01} tagall [text]
┃╠  ${global.emoji01} antilink [on/off]
┃╠  ${global.emoji01} mute [on/off]
┃╠  ${global.emoji01} promote [reply/tag]
┃╠  ${global.emoji01} demote [reply/tag]
┃╠  ${global.emoji01} vote
┃╠  ${global.emoji01} devote
┃╠  ${global.emoji01} upvote
┃╠  ${global.emoji01} checkvote
┃╠  ${global.emoji01} delvote
┃╠══「 *RPG 🎮* 」 
┃╠  ${global.emoji01} hunting
┃╠  ${global.emoji01} mining
┃╠  ${global.emoji01} heal
┃╠  ${global.emoji01} userlimit
┃╠  ${global.emoji01} profile
┃╠  ${global.emoji01} inventory
┃╠  ${global.emoji01} leaderboard
┃╠  ${global.emoji01} buy [option]
┃╠  ${global.emoji01} sell [option]
┃╠═ ©「 *DOWNLOADER ⬇️* 」
┃╠  ${global.emoji01} ytmp3 [url|quality]
┃╠  ${global.emoji01} ytmp4 [url|quality]
┃╠  ${global.emoji01} insta [Text]
┃╠  ${global.emoji01} spotify [Text]
┃╠  ${global.emoji01} igimage [Insta Link]
┃╠  ${global.emoji01} need [Text]
┃╠  ${global.emoji01} yt [Text]
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} Get [Facebook/Insta/Tiktok/YT]
┃╠  ${global.emoji01} tiktok (Link)
┃╠  ${global.emoji01} save (Video Link)
┃╠  ${global.emoji01} story [insta Username]
┃╠  ${global.emoji01} getmusic [yt link]
┃╠  ${global.emoji01} mediafire (Link)
┃╠  ${global.emoji01} fb(Link)
┃╠  ${global.emoji01} getvideo [yt link]
┃╠  ${global.emoji01} umma [Text]
┃╠  ${global.emoji01} joox [Text]
┃╠  ${global.emoji01} soundcloud [url]
┃╠══ 「 *SEARCHER 🔎* 」 
┃╠  ${global.emoji01} play [Text]
┃╠  ${global.emoji01} need [Text]
┃╠  ${global.emoji01} playstore [Text]
┃╠  ${global.emoji01} groups [Text]
┃╠  ${global.emoji01} spotify [Text]
┃╠  ${global.emoji01} searchgroup [Text]
┃╠  ${global.emoji01} song [Text]
┃╠  ${global.emoji01} insta [Text]
┃╠  ${global.emoji01} music (Text)
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} wattpad (Text)
┃╠  ${global.emoji01} photo (Text)
┃╠  ${global.emoji01} device (device name)
┃╠  ${global.emoji01} shorts (text YT)
┃╠  ${global.emoji01} apkmod (app name)
┃╠  ${global.emoji01} covid (Text)
┃╠  ${global.emoji01} wikipedia (Text)
┃╠  ${global.emoji01} yts [Text]
┃╠  ${global.emoji01} google [Text]
┃╠  ${global.emoji01} gimage [Text]
┃╠  ${global.emoji01} pinterest [Text]
┃╠  ${global.emoji01} wallpaper [Text]
┃╠  ${global.emoji01} wikimedia [Text]
┃╠  ${global.emoji01} ytsearch [Text]
┃╠  ${global.emoji01} ringtone [Text]
┃╠  ${global.emoji01} webtoon [Text]
┃╠══ 「 *RANDOM  ${global.emoji02}* 」
┃╠  ${global.emoji01} coffee
┃╠  ${global.emoji01} animequote (Text)
┃╠  ${global.emoji01} couplepp
┃╠═ ©「 *RANDOM ANIME 🌻* 」
┃╠  ${global.emoji01} loli
┃╠  ${global.emoji01} bully
┃╠  ${global.emoji01} cuddle
┃╠  ${global.emoji01} cry
┃╠  ${global.emoji01} hug
┃╠  ${global.emoji01} awoo
┃╠  ${global.emoji01} kiss
┃╠  ${global.emoji01} lick
┃╠  ${global.emoji01} pat
┃╠  ${global.emoji01} smug
┃╠  ${global.emoji01} bonk
┃╠  ${global.emoji01} yeet
┃╠  ${global.emoji01} blush
┃╠  ${global.emoji01} smile
┃╠  ${global.emoji01} wave
┃╠  ${global.emoji01} highfive
┃╠  ${global.emoji01} handhold
┃╠  ${global.emoji01} nom
┃╠  ${global.emoji01} glomp
┃╠  ${global.emoji01} bite
┃╠  ${global.emoji01} slap
┃╠  ${global.emoji01} kill
┃╠  ${global.emoji01} happy
┃╠  ${global.emoji01} wink
┃╠  ${global.emoji01} poke
┃╠  ${global.emoji01} dance
┃╠  ${global.emoji01} cringe
┃╠══ 「 *FUN 🎮* 」 
┃╠  ${global.emoji01} how [text]
┃╠  ${global.emoji01} truth [Text]
┃╠  ${global.emoji01} dare [Text]
┃╠  ${global.emoji01} when [text]
┃╠  ${global.emoji01} is [text]
┃╠  ${global.emoji01} what [text]
┃╠  ${global.emoji01} can [text]
┃╠  ${global.emoji01} rate [text]
┃╠  ${global.emoji01} wangy [text]
┃╠  ${global.emoji01} beautifulcheck [tag]
┃╠  ${global.emoji01} awesomecheck [tag]
┃╠  ${global.emoji01} prettycheck [tag]
┃╠  ${global.emoji01} lesbiancheck [tag]
┃╠  ${global.emoji01} gaycheck [tag]
┃╠  ${global.emoji01} cutecheck [tag]
┃╠  ${global.emoji01} uglycheck [tag]
┃╠  ${global.emoji01} hornycheck [tag]
┃╠  ${global.emoji01} charactercheck [tag]
┃╠  ${global.emoji01} lovelycheck [tag]
┃╠  ${global.emoji01} couple
┃╠  ${global.emoji01} mysoulmate
┃╠  ${global.emoji01} hot
┃╠  ${global.emoji01} kind
┃╠  ${global.emoji01} idiot
┃╠  ${global.emoji01} handsome
┃╠  ${global.emoji01} beautiful
┃╠  ${global.emoji01} cute
┃╠  ${global.emoji01} pretty
┃╠  ${global.emoji01} lesbian
┃╠  ${global.emoji01} noob
┃╠  ${global.emoji01} bastard
┃╠  ${global.emoji01} foolish
┃╠  ${global.emoji01} nerd
┃╠  ${global.emoji01} asshole
┃╠  ${global.emoji01} gay
┃╠  ${global.emoji01} smart
┃╠  ${global.emoji01} stubble
┃╠  ${global.emoji01} dog
┃╠  ${global.emoji01} horny
┃╠  ${global.emoji01} cunt
┃╠  ${global.emoji01} wibu
┃╠  ${global.emoji01} tictactoe
┃╠  ${global.emoji01} delttt
┃╠  ${global.emoji01} guess [option]
┃╠  ${global.emoji01} math [mode]
┃╠  ${global.emoji01} suitpvp [tag]
┃╠═══ 「 *CONVERTER 🎳* 」 
┃╠  ${global.emoji01} image [reply stick]
┃╠  ${global.emoji01} sticker [reply img|gif]
┃╠  ${global.emoji01} emojimix [moji+moji]
┃╠  ${global.emoji01} video [reply img]
┃╠  ${global.emoji01} gif [reply stick]
┃╠  ${global.emoji01} tts (text)
┃╠  ${global.emoji01} url [reply img]
┃╠  ${global.emoji01} vn [reply aud]
┃╠  ${global.emoji01} meme (reply photo with text)
┃╠  ${global.emoji01} mp3 [reply vn]
┃╠  ${global.emoji01} audio [reply vid]
┃╠  ${global.emoji01} ebinary [reply Text]
┃╠  ${global.emoji01} dbinary [reply Text]
┃╠  ${global.emoji01} styletext [text]
┃╠══ 「 *DATABASE 🧬* 」 
┃╠  ${global.emoji01} setcmd
┃╠  ${global.emoji01} listcmd
┃╠  ${global.emoji01} delcmd
┃╠  ${global.emoji01} lockcmd
┃╠  ${global.emoji01} addmsg
┃╠  ${global.emoji01} listmsg
┃╠  ${global.emoji01} getmsg
┃╠  ${global.emoji01} delmsg
┃╠═ ©「 *ANONYMOUS CHAT 🐥* 」
┃╠  ${global.emoji01} anonymous
┃╠  ${global.emoji01} start
┃╠  ${global.emoji01} next
┃╠  ${global.emoji01} leave
┃╠═ ©「 *VOICE CHANGER 🎙️* 」
┃╠  ${global.emoji01} bass [reply aud]
┃╠  ${global.emoji01} blown [reply aud]
┃╠  ${global.emoji01} deep [reply aud]
┃╠  ${global.emoji01} earrape [reply aud]
┃╠  ${global.emoji01} fast [reply aud]
┃╠  ${global.emoji01} fat [reply aud]
┃╠  ${global.emoji01} nightcore [reply aud]
┃╠  ${global.emoji01} reverse [reply aud]
┃╠  ${global.emoji01} robot [reply aud]
┃╠  ${global.emoji01} slow [reply aud]
┃╠  ${global.emoji01} squirrel [reply aud]
┃╠══ 「 *HOROSCOPE 🔬* 」
┃╠  ${global.emoji01} nomorhoki (Text)
┃╠  ${global.emoji01} artimimpi (Text)
┃╠  ${global.emoji01} artinama (Text)
┃╠  ${global.emoji01} ramaljodoh (Text)
┃╠  ${global.emoji01} ramaljodohbali (Text)
┃╠  ${global.emoji01} suamiistri (Text)
┃╠  ${global.emoji01} ramalcinta (Text)
┃╠  ${global.emoji01} cocoknama (Text)
┃╠  ${global.emoji01} pasangan (Text)
┃╠  ${global.emoji01} jadiannikah (Text)
┃╠  ${global.emoji01} sifatusaha (Text)
┃╠  ${global.emoji01} rezeki (Text)
┃╠  ${global.emoji01} pekerjaan (Text)
┃╠  ${global.emoji01} nasib (Text)
┃╠  ${global.emoji01} penyakit (Text)
┃╠  ${global.emoji01} tarot (Text)
┃╠  ${global.emoji01} fengshui (Text)
┃╠  ${global.emoji01} haribaik (Text)
┃╠  ${global.emoji01} harisangar (Text)
┃╠  ${global.emoji01} harisial (Text)
┃╠  ${global.emoji01} nagahari (Text)
┃╠  ${global.emoji01} arahrezeki (Text)
┃╠  ${global.emoji01} peruntungan (Text)
┃╠  ${global.emoji01} weton (Text)
┃╠  ${global.emoji01} karakter (Text)
┃╠  ${global.emoji01} keberuntungan (Text)
┃╠  ${global.emoji01} memancing (Text)
┃╠  ${global.emoji01} masasubur (Text)
┃╠  ${global.emoji01} zodiak (Text)
┃╠  ${global.emoji01} shio (Text)
┃╚═══════
┗━「 *${pushname} 2022 ©*  」━©`,
                    footer: `𝖭Ξ𝖴𝖱Λ𝖫 ΛＩ`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
              case 'mainmenu': {
                let buttons = [
                    {buttonId: `donate`, buttonText: {displayText: `${global.donate }`}, type: 1},
                    {buttonId:  `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 MAIN  ${global.emoji02}*  」
┃╠  ${global.emoji01} alive
┃╠  ${global.emoji01} script
┃╠  ${global.emoji01} neural
┃╠  ${global.emoji01} speedtest
┃╠  ${global.emoji01} ping
┃╠  ${global.emoji01} owner
┃╠  ${global.emoji01} menu
┃╠  ${global.emoji01} delete
┃╠  ${global.emoji01} chatinfo
┃╠  ${global.emoji01} quoted
┃╠  ${global.emoji01} listpc
┃╠  ${global.emoji01} listgc
┃╠  ${global.emoji01} donate
┃╠  ${global.emoji01} report [bug]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
case 'mainmenu':
var unicorn = await getBuffer(global.thumb)
await GarfieldNeural.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 MAIN  ${global.emoji02}*  」
┃╠  ${global.emoji01} alive
┃╠  ${global.emoji01} script
┃╠  ${global.emoji01} neural
┃╠  ${global.emoji01} speedtest
┃╠  ${global.emoji01} ping
┃╠  ${global.emoji01} owner
┃╠  ${global.emoji01} menu
┃╠  ${global.emoji01} delete
┃╠  ${global.emoji01} chatinfo
┃╠  ${global.emoji01} quoted
┃╠  ${global.emoji01} listpc
┃╠  ${global.emoji01} listgc
┃╠  ${global.emoji01} donate
┃╠  ${global.emoji01} report [bug]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": `${global.fbt}`,"url": `${myweb}`}},{"urlButton": {"displayText": `${global.script}`,"url": `${sc}`}},{"quickReplyButton": {"displayText": `${global.donate}`,"id": 'donate'}},{"quickReplyButton": {"displayText": `${global.owner}`,"id": 'owner'}}] )
break

            case 'mainmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 GROUP 🍿 」	        
┃╠  ${global.emoji01} grouplink
┃╠  ${global.emoji01} ephemeral [option]
┃╠  ${global.emoji01} setgcpp [image]
┃╠  ${global.emoji01} setname [text]
┃╠  ${global.emoji01} setdesc [text]
┃╠  ${global.emoji01} group [text]
┃╠  ${global.emoji01} editinfo [option]
┃╠  ${global.emoji01} add [user]
┃╠  ${global.emoji01} kick [reply/tag]
┃╠  ${global.emoji01} hidetag [text]
┃╠  ${global.emoji01} tagall [text]
┃╠  ${global.emoji01} antilink [on/off]
┃╠  ${global.emoji01} mute [on/off]
┃╠  ${global.emoji01} promote [reply/tag]
┃╠  ${global.emoji01} demote [reply/tag]
┃╠  ${global.emoji01} vote
┃╠  ${global.emoji01} devote
┃╠  ${global.emoji01} upvote
┃╠  ${global.emoji01} checkvote
┃╠  ${global.emoji01} delvote
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'rpgmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 RPG 🎮 」	        
┃╠  ${global.emoji01} hunting
┃╠  ${global.emoji01} mining
┃╠  ${global.emoji01} heal
┃╠  ${global.emoji01} limituser
┃╠  ${global.emoji01} profile
┃╠  ${global.emoji01} inventory
┃╠  ${global.emoji01} leaderboard
┃╠  ${global.emoji01} buy [option]
┃╠  ${global.emoji01} sell [option]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break

            case 'funmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 FUN 🪁 」	        
┃╠  ${global.emoji01} how [text]
┃╠  ${global.emoji01} Dare [Text]
┃╠  ${global.emoji01} Truth [Text]
┃╠  ${global.emoji01} when [text]
┃╠  ${global.emoji01} me(සිංහල)
┃╠  ${global.emoji01} who is @ (සිංහල)
┃╠  ${global.emoji01} is [text]
┃╠  ${global.emoji01} what [text]
┃╠  ${global.emoji01} can [text]
┃╠  ${global.emoji01} read more (text)
┃╠  ${global.emoji01} rate [text]
┃╠  ${global.emoji01} wangy [text]
┃╠  ${global.emoji01} beautifulcheck [tag]
┃╠  ${global.emoji01} awesomecheck [tag]
┃╠  ${global.emoji01} prettycheck [tag]
┃╠  ${global.emoji01} lesbiancheck [tag]
┃╠  ${global.emoji01} gaycheck [tag]
┃╠  ${global.emoji01} cutecheck [tag]
┃╠  ${global.emoji01} uglycheck [tag]
┃╠  ${global.emoji01} hornycheck [tag]
┃╠  ${global.emoji01} charactercheck [tag]
┃╠  ${global.emoji01} lovelycheck [tag]
┃╠  ${global.emoji01} couple
┃╠  ${global.emoji01} mysoulmate
┃╠  ${global.emoji01} dare
┃╠  ${global.emoji01} truth
┃╠  ${global.emoji01} hot
┃╠  ${global.emoji01} sexy
┃╠  ${global.emoji01} kind
┃╠  ${global.emoji01} handsome
┃╠  ${global.emoji01} beautiful
┃╠  ${global.emoji01} cute
┃╠  ${global.emoji01} pretty
┃╠  ${global.emoji01} lesbian
┃╠  ${global.emoji01} noob
┃╠  ${global.emoji01} bastard
┃╠  ${global.emoji01} foolish
┃╠  ${global.emoji01} nerd
┃╠  ${global.emoji01} asshole
┃╠  ${global.emoji01} gay
┃╠  ${global.emoji01} smart
┃╠  ${global.emoji01} stubble
┃╠  ${global.emoji01} dog
┃╠  ${global.emoji01} horny
┃╠  ${global.emoji01} cunt
┃╠  ${global.emoji01} wibu
┃╠  ${global.emoji01} tictactoe
┃╠  ${global.emoji01} delttt
┃╠  ${global.emoji01} guess [option]
┃╠  ${global.emoji01} math [mode]
┃╠  ${global.emoji01} suitpvp [tag]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'ownermenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 OWNER 🐣 」	        
┃╠  ${global.emoji01} grouplink
┃╠  ${global.emoji01} self
┃╠  ${global.emoji01} public
┃╠  ${global.emoji01} ephemeral [option]
┃╠  ${global.emoji01} setgcpp [image]
┃╠  ${global.emoji01} setname [text]
┃╠  ${global.emoji01} setdesc [text]
┃╠  ${global.emoji01} group [text]
┃╠  ${global.emoji01} editinfo [option]
┃╠  ${global.emoji01} add [user]
┃╠  ${global.emoji01} kick [reply/tag]
┃╠  ${global.emoji01} hidetag [text]
┃╠  ${global.emoji01} tagall [text]
┃╠  ${global.emoji01} antilink [on/off]
┃╠  ${global.emoji01} mute [on/off]
┃╠  ${global.emoji01} promote [reply/tag]
┃╠  ${global.emoji01} demote [reply/tag]
┃╠  ${global.emoji01} vote
┃╠  ${global.emoji01} devote
┃╠  ${global.emoji01} upvote
┃╠  ${global.emoji01} checkvote
┃╠  ${global.emoji01} delvote
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
                        case 'downloadmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ 「 DOWNLOADER ⬇️ 」	        
┃╠  ${global.emoji01} ytmp3 [url|quality]
┃╠  ${global.emoji01} ytmp4 [url|quality]
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} apkmod (App Name)
┃╠  ${global.emoji01} photo (Text)
┃╠  ${global.emoji01} tiktok (Link)
┃╠  ${global.emoji01} insta (username)
┃╠  ${global.emoji01} spotify  [Text]
┃╠  ${global.emoji01} music [Text]
┃╠  ${global.emoji01} yt [Text]
┃╠  ${global.emoji01} need [Text]
┃╠  ${global.emoji01} Get [Any Link]
┃╠  ${global.emoji01} play (Text)
┃╠  ${global.emoji01} insta (Text)
┃╠  ${global.emoji01} igimage [Insta Link]
┃╠  ${global.emoji01} save (Video Link)
┃╠  ${global.emoji01} getmusic [yt link]
┃╠  ${global.emoji01} story [insta Username]
┃╠  ${global.emoji01} mediafire (Link)
┃╠  ${global.emoji01} fb(Link)
┃╠  ${global.emoji01} fb2 [URL]
┃╠  ${global.emoji01} getvideo [yt link]
┃╠  ${global.emoji01} umma [Text]
┃╠  ${global.emoji01} joox [Text]
┃╠  ${global.emoji01} soundcloud [URL]
┃╠  ${global.emoji01} googledrive (URL)
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'searchmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `

┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 SEARCHER 🔎 」	        
┃╠  ${global.emoji01} play [Text]
┃╠  ${global.emoji01} song [Text]
┃╠  ${global.emoji01} music (Text)
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} wattpad (Text)
┃╠  ${global.emoji01} photo (Text)
┃╠  ${global.emoji01} device (device name)
┃╠  ${global.emoji01} groups [Text]
┃╠  ${global.emoji01} shorts (text YT)
┃╠  ${global.emoji01} searchgroup [Text]
┃╠  ${global.emoji01} apkmod (app name)
┃╠  ${global.emoji01} translate [Text]
┃╠  ${global.emoji01} story [insta Username]
┃╠  ${global.emoji01} covid (Text)
┃╠  ${global.emoji01} wikipedia (Text)
┃╠  ${global.emoji01} spotify [Text]
┃╠  ${global.emoji01} playstore [Text]
┃╠  ${global.emoji01} yt [Text]
┃╠  ${global.emoji01} yts [Text]
┃╠  ${global.emoji01} insta (Username)
┃╠  ${global.emoji01} need (Text)
┃╠  ${global.emoji01} google [Text]
┃╠  ${global.emoji01} gimage [Text]
┃╠  ${global.emoji01} pinterest [Text]
┃╠  ${global.emoji01} wallpaper [Text]
┃╠  ${global.emoji01} wikimedia [Text]
┃╠  ${global.emoji01} ytsearch [Text]
┃╠  ${global.emoji01} ringtone [Text]
┃╠  ${global.emoji01} webtoon [Text]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©
`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'randommenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `

┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 RANDOM 🎡 」	        
┃╠  ${global.emoji01} coffee
┃╠  ${global.emoji01} animequote (Text)
┃╠  ${global.emoji01} couplepp
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©
`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
                        case 'randomanimenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔ ©「 RANDOM ANIME 🌸 」	        
┃╠  ${global.emoji01} loli
┃╠  ${global.emoji01} bully
┃╠  ${global.emoji01} cuddle
┃╠  ${global.emoji01} cry
┃╠  ${global.emoji01} hug
┃╠  ${global.emoji01} awoo
┃╠  ${global.emoji01} kiss
┃╠  ${global.emoji01} lick
┃╠  ${global.emoji01} pat
┃╠  ${global.emoji01} smug
┃╠  ${global.emoji01} bonk
┃╠  ${global.emoji01} yeet
┃╠  ${global.emoji01} blush
┃╠  ${global.emoji01} smile
┃╠  ${global.emoji01} wave
┃╠  ${global.emoji01} highfive
┃╠  ${global.emoji01} handhold
┃╠  ${global.emoji01} nom
┃╠  ${global.emoji01} glomp
┃╠  ${global.emoji01} bite
┃╠  ${global.emoji01} slap
┃╠  ${global.emoji01} kill
┃╠  ${global.emoji01} happy
┃╠  ${global.emoji01} wink
┃╠  ${global.emoji01} poke
┃╠  ${global.emoji01} dance
┃╠  ${global.emoji01} cringe
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'textpromenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 LOGO MAKER 🦓 」	        
┃╠  ${global.emoji01} 3dchristmas [Text]
┃╠  ${global.emoji01} 3ddeepsea [Text]
┃╠  ${global.emoji01} americanflag [Text]
┃╠  ${global.emoji01} 3dscifi [Text]
┃╠  ${global.emoji01} 3drainbow [Text]
┃╠  ${global.emoji01} 3dwaterpipe [Text]
┃╠  ${global.emoji01} halloweenskeleton [Text]
┃╠  ${global.emoji01} sketch [Text]
┃╠  ${global.emoji01} bluecircuit [Text]
┃╠  ${global.emoji01} space [Text]
┃╠  ${global.emoji01} metallic [Text]
┃╠  ${global.emoji01} fiction [Text]
┃╠  ${global.emoji01} greenhorror [Text]
┃╠  ${global.emoji01} transformer [Text]
┃╠  ${global.emoji01} berry [Text]
┃╠  ${global.emoji01} thunder [Text]
┃╠  ${global.emoji01} magma [Text]
┃╠  ${global.emoji01} 3dcrackedstone [Text]
┃╠  ${global.emoji01} 3dneonlight [Text]
┃╠  ${global.emoji01} impressiveglitch [Text]
┃╠  ${global.emoji01} naturalleaves [Text]
┃╠  ${global.emoji01} fireworksparkle [Text]
┃╠  ${global.emoji01} matrix [Text]
┃╠  ${global.emoji01} dropwater [Text]
┃╠  ${global.emoji01} harrypotter [Text]
┃╠  ${global.emoji01} foggywindow [Text]
┃╠  ${global.emoji01} neondevils [Text]
┃╠  ${global.emoji01} christmasholiday [Text]
┃╠  ${global.emoji01} 3dgradient [Text]
┃╠  ${global.emoji01} blackpink [Text]
┃╠  ${global.emoji01} gluetext [Text]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'convertmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 CONVERTER 🔃 」	        
┃╠  ${global.emoji01} image [reply stick]
┃╠  ${global.emoji01} sticker [reply img|gif]
┃╠  ${global.emoji01} emojimix [moji+moji]
┃╠  ${global.emoji01} emojimix2 [moji+moji]
┃╠  ${global.emoji01} tts (text)
┃╠  ${global.emoji01} video [reply img]
┃╠  ${global.emoji01} gif [reply stick]
┃╠  ${global.emoji01} url [reply media]
┃╠  ${global.emoji01} vn [reply aud]
┃╠  ${global.emoji01} mp3 [reply vn]
┃╠  ${global.emoji01} audio [reply vid]
┃╠  ${global.emoji01} meme(reply img)
┃╠  ${global.emoji01} ebinary [reply Text]
┃╠  ${global.emoji01} dbinary [reply Text]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'databasemenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═══ 「 DATABASE 📎 」	        
┃╠  ${global.emoji01} setcmd
┃╠  ${global.emoji01} listcmd
┃╠  ${global.emoji01} delcmd
┃╠  ${global.emoji01} lockcmd
┃╠  ${global.emoji01} addmsg
┃╠  ${global.emoji01} listmsg
┃╠  ${global.emoji01} getmsg
┃╠  ${global.emoji01} delmsg
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'chatmenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 ANONYMOUS CHAT 🐋 」	        
┃╠  ${global.emoji01} anonymous
┃╠  ${global.emoji01} start
┃╠  ${global.emoji01} next
┃╠  ${global.emoji01} leave
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'voicechangermenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 VOICE CHANGER 🎙️ 」	        
┃╠  ${global.emoji01} bass [reply aud]
┃╠  ${global.emoji01} blown [reply aud]
┃╠  ${global.emoji01} deep [reply aud]
┃╠  ${global.emoji01} earrape [reply aud]
┃╠  ${global.emoji01} fast [reply aud]
┃╠  ${global.emoji01} fat [reply aud]
┃╠  ${global.emoji01} nightcore [reply aud]
┃╠  ${global.emoji01} reverse [reply aud]
┃╠  ${global.emoji01} robot [reply aud]
┃╠  ${global.emoji01} slow [reply aud]
┃╠  ${global.emoji01} squirrel [reply aud]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'horoscopemenu': {
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: `${global.allmenu}`}, type: 1},
                    {buttonId:  `command`, buttonText: {displayText: `${global.list}`}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: `${global.owner}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `${global.thumb}` },
                    caption:  `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 HOROSCOPE 🔬 」	        
┃╠  ${global.emoji01} nomorhoki (Text)
┃╠  ${global.emoji01} artimimpi (Text)
┃╠  ${global.emoji01} artinama (Text)
┃╠  ${global.emoji01} ramaljodoh (Text)
┃╠  ${global.emoji01} ramaljodohbali (Text)
┃╠  ${global.emoji01} suamiistri (Text)
┃╠  ${global.emoji01} ramalcinta (Text)
┃╠  ${global.emoji01} cocoknama (Text)
┃╠  ${global.emoji01} pasangan (Text)
┃╠  ${global.emoji01} jadiannikah (Text)
┃╠  ${global.emoji01} sifatusaha (Text)
┃╠  ${global.emoji01} rezeki (Text)
┃╠  ${global.emoji01} pekerjaan (Text)
┃╠  ${global.emoji01} nasib (Text)
┃╠  ${global.emoji01} penyakit (Text)
┃╠  ${global.emoji01} tarot (Text)
┃╠  ${global.emoji01} fengshui (Text)
┃╠  ${global.emoji01} haribaik (Text)
┃╠  ${global.emoji01} harisangar (Text)
┃╠  ${global.emoji01} harisial (Text)
┃╠  ${global.emoji01} nagahari (Text)
┃╠  ${global.emoji01} arahrezeki (Text)
┃╠  ${global.emoji01} peruntungan (Text)
┃╠  ${global.emoji01} weton (Text)
┃╠  ${global.emoji01} karakter (Text)
┃╠  ${global.emoji01} keberuntungan (Text)
┃╠  ${global.emoji01} memancing (Text)
┃╠  ${global.emoji01} masasubur (Text)
┃╠  ${global.emoji01} zodiak (Text)
┃╠  ${global.emoji01} shio (Text)
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,
                    footer: `${global.botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldNeural.sendMessage(m.chat, buttonMessage, { quoted: m })
           
             }
            break
            case 'project':
            case 'helps': { const _0x5b902e=_0x219e;function _0x129d(){const _0x20b5db=['115336DLCcKF','251688FfOtnW','botname','thumb','allmenu','9092106plfBvO','259tNTgUV','Garfield\x0aWhatsapp\x20Bot\x0a\x20From\x20NOIZE\x20Developers\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0aPowered\x20By\x20X\x20Nodes\x20Servers\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0aAlways\x20On\x20First\x20Whatsapp\x20User\x20Bot\x20in\x20Sri\x20Lanka\x20🇱🇰\x20\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0aCoded\x20by\x20ZENOI\x202022\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0a\x20𝖨\x20𝖺𝗆\x2016\x20𝖸𝖾𝖺𝗋𝗌\x20𝖮𝗅𝖽\x20𝖲𝗍𝗎𝖽𝖾𝗇𝗍\x20𝗂𝗇\x20𝖲𝗋𝗂\x20𝖫𝖺𝗇𝗄𝖺\x20©\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x20\x0aSPECIAL\x20THANKS\x20\x0a-\x20ʜᴀꜱɪɴᴅᴜ\x20ᴅɪɴᴜꜱʜᴀɴ\x20,\x20ʟᴀꜱɪɴᴅᴜ\x20ɴᴇᴛʜꜱᴀʀᴀ,\x20ᴍᴀʟᴇᴇꜱʜᴀ\x20ɴᴇᴛʜꜱᴀʀᴀ\x20,\x20ꜱᴀʀᴀɴɪ\x20ᴍᴇᴛʜꜱᴀᴅᴇᴇ,ꜱᴇᴡᴍɪ\x20ᴍᴀʟᴇᴇꜱʜᴀ\x20,\x20ᴀꜰɴᴀ\x20ᴘᴀʟɪᴋᴋᴀʟ\x20,\x20ꜰᴀʀʜᴀɴ\x20,\x20ᴀᴛᴛɪᴄᴜꜱ\x20,\x20ʙᴀɪʟᴇʏꜱ\x20,\x20ᴛʜɪᴄᴄʏ\x20,ʏᴜꜱᴜꜰᴜꜱᴛᴀ','sendMessage','3hzUUkE','owner','3598608iiBJXp','4975495xhjoJV','61522dxrhdr','71696aodazr'];_0x129d=function(){return _0x20b5db;};return _0x129d();}(function(_0x42553c,_0x203efe){const _0x3eef7b=_0x219e,_0x563187=_0x42553c();while(!![]){try{const _0x48b694=parseInt(_0x3eef7b(0x116))/0x1+-parseInt(_0x3eef7b(0x115))/0x2*(-parseInt(_0x3eef7b(0x111))/0x3)+parseInt(_0x3eef7b(0x113))/0x4+-parseInt(_0x3eef7b(0x114))/0x5+parseInt(_0x3eef7b(0x118))/0x6+-parseInt(_0x3eef7b(0x11d))/0x7*(parseInt(_0x3eef7b(0x117))/0x8)+parseInt(_0x3eef7b(0x11c))/0x9;if(_0x48b694===_0x203efe)break;else _0x563187['push'](_0x563187['shift']());}catch(_0x27ae79){_0x563187['push'](_0x563187['shift']());}}}(_0x129d,0x805c3));let buttons=[{'buttonId':'allmenu','buttonText':{'displayText':''+global[_0x5b902e(0x11b)]},'type':0x1},{'buttonId':'command','buttonText':{'displayText':''+global['list']},'type':0x1},{'buttonId':_0x5b902e(0x112),'buttonText':{'displayText':''+global['owner']},'type':0x1}],buttonMessage={'image':{'url':''+global[_0x5b902e(0x11a)]},'caption':_0x5b902e(0x10f),'footer':''+global[_0x5b902e(0x119)],'buttons':buttons,'headerType':0x4};function _0x219e(_0x1cb086,_0x3b07c6){const _0x129d1d=_0x129d();return _0x219e=function(_0x219ec3,_0x4cf211){_0x219ec3=_0x219ec3-0x10f;let _0x3263a4=_0x129d1d[_0x219ec3];return _0x3263a4;},_0x219e(_0x1cb086,_0x3b07c6);}GarfieldNeural[_0x5b902e(0x110)](m['chat'],buttonMessage,{'quoted':m}); }
            break
            case 'deploy': { const _0x8798e8=_0x4bab;(function(_0x18c6ad,_0x54b353){const _0x3c2759=_0x4bab,_0x16acb7=_0x18c6ad();while(!![]){try{const _0x2dc913=-parseInt(_0x3c2759(0x118))/0x1+parseInt(_0x3c2759(0x120))/0x2+parseInt(_0x3c2759(0x110))/0x3*(parseInt(_0x3c2759(0x113))/0x4)+parseInt(_0x3c2759(0x11b))/0x5*(parseInt(_0x3c2759(0x10e))/0x6)+-parseInt(_0x3c2759(0x108))/0x7+parseInt(_0x3c2759(0x10c))/0x8*(-parseInt(_0x3c2759(0x11f))/0x9)+parseInt(_0x3c2759(0x111))/0xa;if(_0x2dc913===_0x54b353)break;else _0x16acb7['push'](_0x16acb7['shift']());}catch(_0x55f234){_0x16acb7['push'](_0x16acb7['shift']());}}}(_0x3489,0xe1751));let buttons=[{'buttonId':_0x8798e8(0x115),'buttonText':{'displayText':''+global[_0x8798e8(0x115)]},'type':0x1},{'buttonId':_0x8798e8(0x112),'buttonText':{'displayText':''+global[_0x8798e8(0x109)]},'type':0x1},{'buttonId':'owner','buttonText':{'displayText':''+global[_0x8798e8(0x10f)]},'type':0x1}],buttonMessage={'image':{'url':''+global[_0x8798e8(0x10b)]},'caption':'\x0a𝖢𝖱𝖤𝖠𝖳\x20𝖮𝖶𝖭\x20𝖡𝖮Т\x20𝖤𝖠𝖲𝖨𝖫𝖸\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0a'+global[_0x8798e8(0x10a)]+_0x8798e8(0x116)+global[_0x8798e8(0x10a)]+'\x20Step\x2002\x20-\x20Fork\x20Garfield\x20v8.2\x20Repo\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0a'+global['emoji02']+_0x8798e8(0x11a)+global['emoji02']+_0x8798e8(0x10d)+global['emoji02']+_0x8798e8(0x11e)+global[_0x8798e8(0x10a)]+_0x8798e8(0x11d)+global[_0x8798e8(0x10a)]+_0x8798e8(0x119)+global[_0x8798e8(0x10a)]+_0x8798e8(0x11c)+global[_0x8798e8(0x10a)]+_0x8798e8(0x117),'footer':''+global['botname'],'buttons':buttons,'headerType':0x4};GarfieldNeural['sendMessage'](m[_0x8798e8(0x114)],buttonMessage,{'quoted':m});function _0x4bab(_0x577ddc,_0x236114){const _0x3489c2=_0x3489();return _0x4bab=function(_0x4bab23,_0x5b6c7e){_0x4bab23=_0x4bab23-0x108;let _0x4f9103=_0x3489c2[_0x4bab23];return _0x4f9103;},_0x4bab(_0x577ddc,_0x236114);}function _0x3489(){const _0x5061a7=['owner','15eNGjgg','34818810FipzON','command','69964jpVCYD','chat','allmenu','\x20Step\x2001\x20-\x20Creat\x20Heroku\x20Account\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0a','\x20Step\x2007\x20-\x20Then\x20wait\x20forty\x20seconds\x20for\x20the\x20process\x20to\x20take\x20place\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0a\x20Enjoy\x20Now\x20💙\x20\x20','79784awIvwM','\x20Step\x2005\x20-\x20After\x20Click\x20Deploy\x20button\x20\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0a','\x20Step\x2003\x20-\x20Scan\x20Qr\x20and\x20Linked\x20Your\x20Device\x20\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0a','755fLTESU','\x20Step\x2006\x20-\x20Enter\x20Your\x20app\x20name\x20and\x20click\x20deploy\x20now\x20button\x20\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0a','\x20Step\x2004\x20-\x20Creat\x20Heroku\x20Account\x20\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0a','\x20Step\x2005\x20-\x20Modify\x20the\x20Config\x20file\x20as\x20you\x20wish\x20and\x20enter\x20your\x20bot\x27s\x20name\x20and\x20details\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0a','5200533VmHDOa','332698eiegik','12573379cjmCpU','list','emoji02','thumb','24CHCbBg','\x20Step\x2004\x20-\x20Replace\x20Your\x20session\x20file\x0a▰▰▰▰▰▰▰▰▰▰▰▰▰\x0a','31680oXHbBa'];_0x3489=function(){return _0x5061a7;};return _0x3489();} }
            break
 

                default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    GarfieldNeural.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
