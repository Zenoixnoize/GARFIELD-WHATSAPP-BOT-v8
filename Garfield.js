//Coded by Tharindu Liyanage
// GARFIELD v8.2 BY NOIZE PROJECTS 🐼
process.on('uncaughtException', console.error) //Safe Log Error
function _0x273f(){const _0x44cf32=['kitsune-api','moment-timezone','4972682QJtnVE','7883875hwddUR','hxz-api','./Config','node-fetch','120DPrLKU','4LMJuyU','jsdom','4975368JrmsJr','child_process','@adiwajshing/baileys','7FHrrpl','xfarr-api','path','util','1120006CTzgEE','933678bXmFum','performance-now','scrape-primbon','google-it','2fsjicW','9729740RwjvkS','./lib/myfunc','932274aKHEVZ'];_0x273f=function(){return _0x44cf32;};return _0x273f();}function _0x592e(_0x48c994,_0x5d0800){const _0x273fe0=_0x273f();return _0x592e=function(_0x592eae,_0x2c3a0a){_0x592eae=_0x592eae-0x130;let _0x51738e=_0x273fe0[_0x592eae];return _0x51738e;},_0x592e(_0x48c994,_0x5d0800);}const _0x4f6721=_0x592e;(function(_0x3c2625,_0x560225){const _0x24300d=_0x592e,_0x380140=_0x3c2625();while(!![]){try{const _0x983deb=parseInt(_0x24300d(0x143))/0x1*(-parseInt(_0x24300d(0x148))/0x2)+parseInt(_0x24300d(0x13c))/0x3*(parseInt(_0x24300d(0x13a))/0x4)+parseInt(_0x24300d(0x135))/0x5+-parseInt(_0x24300d(0x144))/0x6*(parseInt(_0x24300d(0x13f))/0x7)+parseInt(_0x24300d(0x139))/0x8*(-parseInt(_0x24300d(0x131))/0x9)+parseInt(_0x24300d(0x149))/0xa+-parseInt(_0x24300d(0x134))/0xb;if(_0x983deb===_0x560225)break;else _0x380140['push'](_0x380140['shift']());}catch(_0x203b09){_0x380140['push'](_0x380140['shift']());}}}(_0x273f,0xe240e),require(_0x4f6721(0x137)));const {BufferJSON,WA_DEFAULT_EPHEMERAL,generateWAMessageFromContent,proto,generateWAMessageContent,generateWAMessage,prepareWAMessageMedia,areJidsSameUser,getContentType}=require(_0x4f6721(0x13e)),fs=require('fs'),util=require(_0x4f6721(0x142)),chalk=require('chalk'),{exec,spawn,execSync}=require(_0x4f6721(0x13d)),axios=require('axios'),path=require(_0x4f6721(0x141)),os=require('os'),fetch=require(_0x4f6721(0x138)),google=require(_0x4f6721(0x147)),mel=require(_0x4f6721(0x132)),xa=require(_0x4f6721(0x140)),hx=require(_0x4f6721(0x136)),moment=require(_0x4f6721(0x133)),{JSDOM}=require(_0x4f6721(0x13b)),speed=require(_0x4f6721(0x145)),{performance}=require('perf_hooks'),{mediafireDl}=require('./lib/mediafire.js'),{Primbon}=require(_0x4f6721(0x146)),primbon=new Primbon(),{smsg,formatp,tanggal,formatDate,getTime,isUrl,sleep,clockString,runtime,fetchJson,getBuffer,jsonformat,format,parseMention,getRandom}=require(_0x4f6721(0x130)),xmodules=require('xfarr-api');
//rpg function\\
 const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./IMGDesc/user/darah.js')
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
   } = require('./IMGDesc/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./IMGDesc/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./IMGDesc/user/limit.js')
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
   } = require('./IMGDesc/user/buruan.js')
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
   const ikan = ['🐼','🦋']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./IMGDesc/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./IMGDesc/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./IMGDesc/user/darah.json'))

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

module.exports = GarfieldAdd = async (GarfieldAdd, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await GarfieldAdd.decodeJid(GarfieldAdd.user.id)
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
        const groupMetadata = m.isGroup ? await GarfieldAdd.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
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
const reply = (teks) => { var _0x28fb65=_0x55d2;function _0x55d2(_0x4a78ec,_0x242e29){var _0x3d2dde=_0x3d2d();return _0x55d2=function(_0x55d2c7,_0x574ff2){_0x55d2c7=_0x55d2c7-0x69;var _0x120c50=_0x3d2dde[_0x55d2c7];return _0x120c50;},_0x55d2(_0x4a78ec,_0x242e29);}(function(_0x2fe422,_0x761f40){var _0x1e15d1=_0x55d2,_0x42be92=_0x2fe422();while(!![]){try{var _0x1be58c=parseInt(_0x1e15d1(0x79))/0x1+parseInt(_0x1e15d1(0x6b))/0x2+parseInt(_0x1e15d1(0x74))/0x3*(-parseInt(_0x1e15d1(0x6c))/0x4)+parseInt(_0x1e15d1(0x72))/0x5+-parseInt(_0x1e15d1(0x6a))/0x6+-parseInt(_0x1e15d1(0x78))/0x7*(parseInt(_0x1e15d1(0x77))/0x8)+parseInt(_0x1e15d1(0x6d))/0x9;if(_0x1be58c===_0x761f40)break;else _0x42be92['push'](_0x42be92['shift']());}catch(_0x3362fa){_0x42be92['push'](_0x42be92['shift']());}}}(_0x3d2d,0xa2ba3),GarfieldAdd[_0x28fb65(0x75)](m[_0x28fb65(0x73)],{'text':teks,'contextInfo':{'externalAdReply':{'title':_0x28fb65(0x76),'body':_0x28fb65(0x6e),'previewType':_0x28fb65(0x70),'thumbnailUrl':'','thumbnail':fs['readFileSync']('./TempCloud/logo.png'),'sourceUrl':_0x28fb65(0x6f)+global[_0x28fb65(0x69)]+_0x28fb65(0x71)}}},{'quoted':m}));function _0x3d2d(){var _0x1f87e3=['\x20𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣\x20𝖡𝖮Т\x20','5006888ncYNht','7bSyrtn','313604drDHpV','owner','4409796CAmKur','807050vvBrvF','556DkvkGv','11626416PYPxts','ＸＮＯＤＥＳ','http://Wa.me//','PHOTO','?text=*Hello🦋*','185155edFXmK','chat','402UNuooH','sendMessage'];_0x3d2d=function(){return _0x1f87e3;};return _0x3d2d();} }
        
        const replay = (teks) => { var _0x1a7e55=_0x4596;function _0x1de3(){var _0x57b682=['4150360yCGOfU','36fCVQtM','132tLJngh','4830ilWAAo','44cpVllz','1104NAafem','5572776vGDbGv','639545kblXHd','readFileSync','3yDxwxT','PHOTO','./TempCloud/logo.png','70588wMEWWY','ＸＮＯＤＥＳ','181358cOOidP','?text=*Hello🦋*','owner','1533580rvVTzb'];_0x1de3=function(){return _0x57b682;};return _0x1de3();}function _0x4596(_0x4ddbd5,_0x53c5be){var _0x1de3a8=_0x1de3();return _0x4596=function(_0x4596b0,_0x13c7fc){_0x4596b0=_0x4596b0-0x184;var _0x52ac11=_0x1de3a8[_0x4596b0];return _0x52ac11;},_0x4596(_0x4ddbd5,_0x53c5be);}(function(_0x219b2c,_0x3a34fc){var _0x13665a=_0x4596,_0x4275e0=_0x219b2c();while(!![]){try{var _0x32d507=-parseInt(_0x13665a(0x184))/0x1+parseInt(_0x13665a(0x18b))/0x2*(-parseInt(_0x13665a(0x186))/0x3)+-parseInt(_0x13665a(0x194))/0x4*(parseInt(_0x13665a(0x192))/0x5)+parseInt(_0x13665a(0x191))/0x6*(-parseInt(_0x13665a(0x189))/0x7)+parseInt(_0x13665a(0x18f))/0x8+parseInt(_0x13665a(0x190))/0x9*(-parseInt(_0x13665a(0x18e))/0xa)+-parseInt(_0x13665a(0x193))/0xb*(-parseInt(_0x13665a(0x195))/0xc);if(_0x32d507===_0x3a34fc)break;else _0x4275e0['push'](_0x4275e0['shift']());}catch(_0x21299b){_0x4275e0['push'](_0x4275e0['shift']());}}}(_0x1de3,0x84e0b),GarfieldAdd['sendMessage'](m['chat'],{'text':teks,'contextInfo':{'externalAdReply':{'title':'\x20𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣\x20𝖡𝖮Т\x20','body':_0x1a7e55(0x18a),'previewType':_0x1a7e55(0x187),'thumbnailUrl':'','thumbnail':fs[_0x1a7e55(0x185)](_0x1a7e55(0x188)),'sourceUrl':'http://Wa.me//'+global[_0x1a7e55(0x18d)]+_0x1a7e55(0x18c)}}},{'quoted':m})); }	
        //Public & Self\\
        if (!GarfieldAdd.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) { var _0x555b53=_0x4e2f;function _0x57f4(){var _0x212150=['12AjXDDb','🦋\x20From','81849hJPiwz','blueBright','5549436OfaDLr','green','155576tSsrtx','log','chat','black','Private\x20Chat','2110HQuRGM','11XqaISx','bgGreen','240290RtcaBl','13815tRlNOZ','418746IwezBM','14RczJXK','10ZyKlUR','sender','bgWhite','[\x20MESSAGE\x20]','mtype','203881EpFYxV','yellow'];_0x57f4=function(){return _0x212150;};return _0x57f4();}function _0x4e2f(_0x37625e,_0x126119){var _0x57f432=_0x57f4();return _0x4e2f=function(_0x4e2fa5,_0x585174){_0x4e2fa5=_0x4e2fa5-0xd4;var _0x242515=_0x57f432[_0x4e2fa5];return _0x242515;},_0x4e2f(_0x37625e,_0x126119);}(function(_0x50d5eb,_0x4cd783){var _0x1f8328=_0x4e2f,_0x117c71=_0x50d5eb();while(!![]){try{var _0x577de9=parseInt(_0x1f8328(0xe2))/0x1+-parseInt(_0x1f8328(0xdd))/0x2*(parseInt(_0x1f8328(0xe6))/0x3)+-parseInt(_0x1f8328(0xe4))/0x4*(parseInt(_0x1f8328(0xd9))/0x5)+parseInt(_0x1f8328(0xdb))/0x6+-parseInt(_0x1f8328(0xdc))/0x7*(-parseInt(_0x1f8328(0xea))/0x8)+parseInt(_0x1f8328(0xda))/0x9*(-parseInt(_0x1f8328(0xd6))/0xa)+parseInt(_0x1f8328(0xd7))/0xb*(parseInt(_0x1f8328(0xe8))/0xc);if(_0x577de9===_0x4cd783)break;else _0x117c71['push'](_0x117c71['shift']());}catch(_0x245773){_0x117c71['push'](_0x117c71['shift']());}}}(_0x57f4,0x29a31),GarfieldAdd['sendReadReceipt'](m['chat'],m[_0x555b53(0xde)],[m['key']['id']]),console[_0x555b53(0xeb)](chalk[_0x555b53(0xd4)](chalk[_0x555b53(0xdf)](_0x555b53(0xe0))),chalk[_0x555b53(0xd4)](chalk[_0x555b53(0xd8)](new Date())),chalk['black'](chalk['bgBlue'](budy||m[_0x555b53(0xe1)]))+'\x0a'+chalk['magenta'](_0x555b53(0xe5)),chalk[_0x555b53(0xe9)](pushname),chalk[_0x555b53(0xe3)](m[_0x555b53(0xde)])+'\x0a'+chalk[_0x555b53(0xe7)]('🛰️\x20In'),chalk[_0x555b53(0xe9)](m['isGroup']?pushname:_0x555b53(0xd5),m[_0x555b53(0xec)]))); }
	
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
        
	// UCAPAN LEMBUT
const time2 = moment().tz('Asia/colombo').format('HH:mm:ss')
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
	  //antilink\\
      if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await GarfieldAdd.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh ${global.emoji01} `)
        GarfieldAdd.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./TempCloud/sticker/${anji}.webp`)
					GarfieldAdd.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){ var _0x5ca9=["\x2E\x2F\x54\x65\x6D\x70\x43\x6C\x6F\x75\x64\x2F\x76\x6E\x2F\x40\x39\x34\x37\x31\x31\x35\x30\x32\x31\x31\x39\x2E\x6D\x70\x33","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x63\x68\x61\x74","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];result= fs[_0x5ca9[1]](`${_0x5ca9[0]}`);GarfieldAdd[_0x5ca9[4]](m[_0x5ca9[2]],{audio:result,mimetype:_0x5ca9[3],ptt:true},{quoted:m}) }
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./TempCloud/image/${anjh}.jpg`)
					GarfieldAdd.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./TempCloud/vid/${anjh}.mp4`)
					GarfieldAdd.sendMessage(m.chat, { video: result }, { quoted: m })
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
            userJid: GarfieldAdd.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, GarfieldAdd.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        GarfieldAdd.ev.emit('messages.upsert', msg)
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
            GarfieldAdd.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ` ${global.botname} `, m)
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
                await GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ` ${global.botname} `, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ` ${global.botname} `, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, ` ${global.botname} `, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ` ${global.botname} `, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ` ${global.botname} `, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ` ${global.botname} `, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    GarfieldAdd.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    GarfieldAdd.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) GarfieldAdd.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) GarfieldAdd.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) GarfieldAdd.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    GarfieldAdd.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
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
	    if (!roof.pilih2) GarfieldAdd.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) GarfieldAdd.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
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
	    GarfieldAdd.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

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
switch(command) {
        case 'inventori': case 'inventory': case 'profile':
        { var _0x71ab=["\x2D\x2D\x68\x65\x6C\x70","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x65\x6E\x64\x65\x72","\x55\x73\x65\x72\x27\x73\x20\x49\x6E\x76\x65\x6E\x74\x6F\x72\x79","\x5F\x5B\x20\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBC\x49\x4E\x46\x4F\x20\x55\x53\x45\x52\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBC\x20\x5D\x5F\x5C\x6E\x5C\x6E","\x2A\u2764\uFE0F\x59\x6F\x75\x72\x20\x42\x6C\x6F\x6F\x64\x2A\x20\x3A\x20","\x5C\x6E","\x2A\u25FB\uFE0F\uFE0F\x59\x6F\x75\x72\x20\x49\x72\x6F\x6E\x2A\x20\x3A\x20","\x2A\uD83C\uDF1F\x59\x6F\x75\x72\x20\x47\x6F\x6C\x64\x2A\x20\x3A\x20","\x2A\uD83D\uDC8E\x59\x6F\x75\x72\x20\x45\x6D\x65\x72\x61\x6C\x64\x2A\x20\x3A\x20","\x2A\u23FA\uFE0F\x59\x6F\x75\x72\x20\x4C\x69\x6D\x69\x74\x2A\x20\x3A\x20","\x2A\uD83E\uDDEA\x59\x6F\x75\x72\x20\x50\x6F\x74\x69\x6F\x6E\x2A\x20\x3A\x20","\x5C\x6E\x5C\x6E","\x5F\x5B\x20\uD83D\uDC3A\x48\x55\x4E\x54\x20\x52\x45\x53\x55\x4C\x54\uD83D\uDC3A\x20\x5D\x5F\x5C\x6E","\x2A\uD83D\uDC1F\x46\x69\x73\x68\x2A\x20\x3A\x20","\x2A\uD83D\uDC14\x43\x68\x69\x63\x6B\x65\x6E\x2A\x20\x3A\x20","\x2A\uD83D\uDC07\x52\x61\x62\x62\x69\x74\x2A\x20\x3A\x20","\x2A\uD83D\uDC11\x53\x68\x65\x65\x70\x2A\x20\x3A\x20","\x2A\uD83D\uDC04\x43\x6F\x77\x2A\x20\x3A\x20","\x2A\uD83D\uDC18\x45\x6C\x65\x70\x68\x61\x6E\x74\x2A\x20\x3A\x20","\x5F\x2A","\x2A\x5F","","\xA9\x20","\x46\x6F\x6C\x6C\x6F\x77\x20\x55\x73\x20\u2139\uFE0F\x20","\x73\x65\x6E\x64\x35\x42\x75\x74\x49\x6D\x67"];if(q[_0x71ab[1]](_0x71ab[0])){return reply(examkosong)};if(!isDarah){addInventoriDarah(m[_0x71ab[2]],DarahAwal)};if(!isInventory){addInventori(m[_0x71ab[2]])};if(!isInventoriBuruan){addInventoriBuruan(m[_0x71ab[2]])};var GarfieldAdd= await getBuffer(picak+ `${_0x71ab[3]}`);let teksehmazeh=`${_0x71ab[4]}`;teksehmazeh+= `${_0x71ab[5]}${getDarah(m[_0x71ab[2]])}${_0x71ab[6]}`;teksehmazeh+= `${_0x71ab[7]}${getBesi(m[_0x71ab[2]])}${_0x71ab[6]}`;teksehmazeh+= `${_0x71ab[8]}${getEmas(m[_0x71ab[2]])}${_0x71ab[6]}`;teksehmazeh+= `${_0x71ab[9]}${getEmerald(m[_0x71ab[2]])}${_0x71ab[6]}`;teksehmazeh+= `${_0x71ab[10]}${getLimit(m[_0x71ab[2]])}${_0x71ab[6]}`;teksehmazeh+= `${_0x71ab[11]}${getPotion(m[_0x71ab[2]])}${_0x71ab[12]}`;teksehmazeh+= `${_0x71ab[13]}`;teksehmazeh+= `${_0x71ab[14]}${getIkan(m[_0x71ab[2]])}${_0x71ab[6]}`;teksehmazeh+= `${_0x71ab[15]}${getAyam(m[_0x71ab[2]])}${_0x71ab[6]}`;teksehmazeh+= `${_0x71ab[16]}${getKelinci(m[_0x71ab[2]])}${_0x71ab[6]}`;teksehmazeh+= `${_0x71ab[17]}${getDomba(m[_0x71ab[2]])}${_0x71ab[6]}`;teksehmazeh+= `${_0x71ab[18]}${getSapi(m[_0x71ab[2]])}${_0x71ab[6]}`;teksehmazeh+= `${_0x71ab[19]}${getGajah(m[_0x71ab[2]])}${_0x71ab[12]}`;teksehmazeh+= `${_0x71ab[20]}${pushname}${_0x71ab[21]}`; await GarfieldAdd[_0x71ab[25]](from,`${_0x71ab[22]}`+ _0x71ab[22]+ teksehmazeh,`${_0x71ab[23]}${footer}${_0x71ab[22]}`,GarfieldAdd,[{"\x75\x72\x6C\x42\x75\x74\x74\x6F\x6E":{"\x64\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74":_0x71ab[24],"\x75\x72\x6C":`${_0x71ab[22]}${myweb}${_0x71ab[22]}`}}]) }
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
{ var _0x8252=["\u300C\x20\x2A\x4C\x45\x41\x44\x45\x52\x42\x4F\x41\x52\x44\x2A\x20\u300D\x5C\x6E\x5C\x6E","\u27B8\x20\x2A\x49\x44\x20\x3A\x2A\x20","\x69\x64","\x5C\x6E","\x2A\uD83D\uDC1F\x46\x69\x73\x68\x2A\x20\x3A\x20","\x69\x6B\x61\x6E","\x2A\uD83D\uDC14\x43\x68\x69\x63\x6B\x65\x6E\x2A\x20\x3A\x20","\x61\x79\x61\x6D","\x2A\uD83D\uDC07\x52\x61\x62\x62\x69\x74\x2A\x20\x3A\x20","\x6B\x65\x6C\x69\x6E\x63\x69","\x2A\uD83D\uDC11\x53\x68\x65\x65\x70\x2A\x20\x3A\x20","\x64\x6F\x6D\x62\x61","\x2A\uD83D\uDC04\x43\x6F\x77\x2A\x20\x3A\x20","\x73\x61\x70\x69","\x2A\uD83D\uDC18\x45\x6C\x65\x70\x68\x61\x6E\x74\x2A\x20\x3A\x20","\x67\x61\x6A\x61\x68","\x5C\x6E\x5C\x6E"];let txt=`${_0x8252[0]}`;for(let i of _buruan){txt+= `${_0x8252[1]}${i[_0x8252[2]]}${_0x8252[3]}`;txt+= `${_0x8252[4]}${i[_0x8252[5]]}${_0x8252[3]}`;txt+= `${_0x8252[6]}${i[_0x8252[7]]}${_0x8252[3]}`;txt+= `${_0x8252[8]}${i[_0x8252[9]]}${_0x8252[3]}`;txt+= `${_0x8252[10]}${i[_0x8252[11]]}${_0x8252[3]}`;txt+= `${_0x8252[12]}${i[_0x8252[13]]}${_0x8252[3]}`;txt+= `${_0x8252[14]}${i[_0x8252[15]]}${_0x8252[16]}`};reply(txt) }
 break
case 'mining': case 'mine':{ var _0x2d4e=["\x2D\x2D\x68\x65\x6C\x70","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x65\x6E\x64\x65\x72","\x59\x6F\x75\x27\x72\x65\x20\x54\x69\x72\x65\x64\x21\x2C\x20\x54\x72\x79\x20\x54\x6F\x20\x48\x65\x61\x6C\x20\x55\x73\x69\x6E\x67\x20\x50\x6F\x74\x69\x6F\x6E\x73","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x5B\x20\x4D\x49\x4E\x49\x4E\x47\x20\x52\x45\x53\x55\x4C\x54\x20\x5D\x5C\x6E\x2A\x49\x72\x6F\x6E\x2A\x20\x3A\x20","\x5C\x6E\x2A\x47\x6F\x6C\x64\x2A\x20\x3A\x20","\x5C\x6E\x2A\x45\x6D\x65\x72\x61\x6C\x64\x2A\x20\x3A\x20","","\x4D\x69\x6E\x65\x20\x41\x67\x61\x69\x6E\u26CF\uFE0F","\x2E\x2F\x73\x74\x6F\x72\x61\x67\x65\x2F\x69\x6D\x61\x67\x65\x2F\x74\x61\x6D\x62\x61\x6E\x67\x2E\x6A\x70\x67","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x40","\x73\x70\x6C\x69\x74","\x20\x53\x74\x61\x72\x74\x65\x64\x20\x4D\x69\x6E\x69\x6E\x67\uD83C\uDFA3","\x73\x65\x6E\x64\x65\x64"];if(q[_0x2d4e[1]](_0x2d4e[0])){return reply(examkosong)};if(!isInventory){addInventori(m[_0x2d4e[2]])};if(isCekDarah< 1){return reply(`${_0x2d4e[3]}`)};let besi=[1,2,5,0,3,0,1,1,4,1,5,0,0];let emas=[0,1,2,3,0,0,0,1,1,0,0,2];let emerald=[0,0,1,0,0,1,0,2,1,0,0,1];var besinya=besi[Math[_0x2d4e[6]](Math[_0x2d4e[4]]()* besi[_0x2d4e[5]])];var emasnya=emas[Math[_0x2d4e[6]](Math[_0x2d4e[4]]()* emas[_0x2d4e[5]])];var emeraldnya=emerald[Math[_0x2d4e[6]](Math[_0x2d4e[4]]()* emerald[_0x2d4e[5]])];setTimeout(()=>{let _0xa3cfx7=`${_0x2d4e[7]}${besinya}${_0x2d4e[8]}${emasnya}${_0x2d4e[9]}${emeraldnya}${_0x2d4e[10]}`;let _0xa3cfx8=[{buttonId:`${_0x2d4e[10]}${prefix+ command}${_0x2d4e[10]}`,buttonText:{displayText:_0x2d4e[11]},type:1}];let _0xa3cfx9={image:{url:_0x2d4e[12]},caption:_0xa3cfx7,footer:pushname,buttons:_0xa3cfx8,headerType:4};GarfieldAdd[_0x2d4e[13]](from,_0xa3cfx9,{quoted:m})},7000);setTimeout(()=>{reply(`${_0x2d4e[14]}${m[_0x2d4e[2]][_0x2d4e[15]](_0x2d4e[14])[0]}${_0x2d4e[16]}`)},1500);kurangDarah(m[_0x2d4e[2]],10);addBesi(m[_0x2d4e[2]],besinya);addEmas(m[_0x2d4e[17]],emasnya);addEmerald(m[_0x2d4e[2]],emeraldnya) }   
  break  
  //transaction\\
 case 'beli': case 'buy':{ var _0xfc3f=["\x2D\x2D\x68\x65\x6C\x70","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x65\x6E\x64\x65\x72","\x57\x68\x61\x74\x20\x44\x6F\x20\x59\x6F\x75\x20\x57\x61\x6E\x74\x20\x54\x6F\x20\x42\x75\x79\x3F\x5C\x6E\x5C\x6E\x31\x2E\x70\x6F\x74\x69\x6F\x6E\x5C\x6E\x32\x2E\x62\x61\x69\x74\x66\x6F\x6F\x64\x5C\x6E\x33\x2E\x6C\x69\x6D\x69\x74\x5C\x6E\x5C\x6E\x45\x78\x61\x6D\x70\x6C\x65\x3A\x20","\x20\x62\x61\x69\x74\x66\x6F\x6F\x64","\x70\x6F\x74\x69\x6F\x6E","\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x70\x6F\x74\x69\x6F\x6E\x20\x32\x5C\x6E\x20\x31\x20\x50\x6F\x74\x69\x6F\x6E\x20\x3D\x20\x31\x30\x30\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x4D\x6F\x6E\x65\x79\x20\x49\x73\x20\x4E\x6F\x74\x20\x53\x75\x66\x66\x69\x63\x69\x65\x6E\x74\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x50\x75\x72\x63\x68\x61\x73\x65","\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x20\x53\x75\x63\x63\x65\x73\x73\x66\x75\x6C\x20\u2714\uFE0F\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x4D\x6F\x6E\x65\x79\x2A\x20\x3A\x20","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x50\x6F\x74\x69\x6F\x6E\x2A\x20\x3A\x20","","\x62\x61\x69\x74\x66\x6F\x6F\x64","\x20\x62\x61\x69\x74\x66\x6F\x6F\x64\x20\x32\x5C\x6E\x20\x31\x20\x42\x61\x69\x74\x20\x46\x6F\x6F\x64\x20\x3D\x20\x32\x35\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x42\x61\x69\x74\x20\x46\x6F\x6F\x64\x2A\x20\x3A\x20","\x6C\x69\x6D\x69\x74","\x20\x6C\x69\x6D\x69\x74\x20\x32\x5C\x6E\x20\x31\x20\x4C\x69\x6D\x69\x74\x20\x3D\x20\x33\x35\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x4C\x69\x6D\x69\x74\x2A\x20\x3A\x20","\x49\x6E\x63\x6F\x72\x72\x65\x63\x74\x20\x46\x6F\x72\x6D\x61\x74\x21"];if(q[_0xfc3f[1]](_0xfc3f[0])){return reply(examkosong)};if(!isInventoriBuruan){addInventoriBuruan(m[_0xfc3f[2]])};if(!isInventoryMonay){addInventoriMonay(m[_0xfc3f[2]])};if(!isInventory){addInventori(m[_0xfc3f[2]])};if(!q){return reply(`${_0xfc3f[3]}${prefix+ command}${_0xfc3f[4]}`)};var anu=args[1];if(args[0]=== _0xfc3f[5]){let noh=100000* anu;if(!args[1]){return reply(`${_0xfc3f[6]}${prefix+ command}${_0xfc3f[7]}`)};if(isMonay< noh){return reply(_0xfc3f[8])};kurangMonay(m[_0xfc3f[2]],noh);var apalu=anu* 1;addPotion(m[_0xfc3f[2]],apalu);setTimeout(()=>{reply(`${_0xfc3f[9]}${getMonay(m[_0xfc3f[2]])}${_0xfc3f[10]}${getPotion(m[_0xfc3f[2]])}${_0xfc3f[11]}`)},2000)}else {if(args[0]=== _0xfc3f[12]){let noh=5000* anu;if(!args[1]){return reply(`${_0xfc3f[6]}${prefix+ command}${_0xfc3f[13]}`)};if(isMonay< noh){return reply(_0xfc3f[8])};kurangMonay(m[_0xfc3f[2]],noh);var apalu=anu* 1;addUmpan(m[_0xfc3f[2]],apalu);setTimeout(()=>{reply(`${_0xfc3f[9]}${getMonay(m[_0xfc3f[2]])}${_0xfc3f[14]}${getUmpan(m[_0xfc3f[2]])}${_0xfc3f[11]}`)},2000)}else {if(args[0]=== _0xfc3f[15]){let noh=35000* anu;if(!args[1]){return reply(`${_0xfc3f[6]}${prefix+ command}${_0xfc3f[16]}`)};if(isMonay< noh){return reply(_0xfc3f[8])};kurangMonay(m[_0xfc3f[2]],noh);var apalu=anu* 1;addLimit(m[_0xfc3f[2]],apalu);setTimeout(()=>{reply(`${_0xfc3f[9]}${getMonay(m[_0xfc3f[2]])}${_0xfc3f[17]}${getLimit(m[_0xfc3f[2]])}${_0xfc3f[11]}`)},2000)}else {reply(_0xfc3f[18])}}} }
 break
 case 'sel': case 'jual':{ var _0x3547=["\x57\x68\x61\x74\x20\x44\x6F\x20\x59\x6F\x75\x20\x57\x61\x6E\x74\x20\x54\x6F\x20\x53\x65\x6C\x6C\x3F\x3F\x5C\x6E\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x66\x69\x73\x68\x20\x32","\x73\x65\x6E\x64\x65\x72","\x66\x69\x73\x68","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x46\x69\x73\x68\x28\x65\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x66\x69\x73\x68\x20\x32\x5C\x6E\x20\x31\x20\x46\x69\x73\x68\x20\x3D\x20\x31\x35\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x20\x53\x75\x63\x63\x65\x73\x73\x66\x75\x6C\x20\u2714\uFE0F\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x4D\x6F\x6E\x65\x79\x2A\x20\x3A\x20","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x46\x69\x73\x68\x28\x65\x73\x29\x2A\x20\x3A\x20","","\x63\x68\x69\x63\x6B\x65\x6E","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x43\x68\x69\x63\x6B\x65\x6E\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x63\x68\x69\x63\x6B\x65\x6E\x20\x32\x5C\x6E\x20\x31\x20\x43\x68\x69\x63\x6B\x65\x6E\x20\x3D\x20\x32\x35\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x43\x68\x69\x63\x6B\x65\x6E\x2A\x20\x3A\x20","\x72\x61\x62\x62\x69\x74","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x52\x61\x62\x62\x69\x74\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x72\x61\x62\x62\x69\x74\x20\x32\x5C\x6E\x20\x31\x20\x52\x61\x62\x62\x69\x74\x20\x3D\x20\x33\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x52\x61\x62\x62\x69\x74\x28\x73\x29\x2A\x20\x3A\x20","\x73\x68\x65\x65\x70","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x53\x68\x65\x65\x70\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x64\x6F\x6D\x62\x61\x20\x32\x5C\x6E\x20\x31\x20\x53\x68\x65\x65\x70\x20\x3D\x20\x35\x30\x30\x30\x20\x6D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x53\x68\x65\x65\x70\x28\x73\x29\x2A\x20\x3A\x20","\x63\x6F\x77","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x43\x6F\x77\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x63\x6F\x77\x20\x32\x5C\x6E\x20\x31\x20\x43\x6F\x77\x20\x3D\x20\x31\x30\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x43\x6F\x77\x28\x73\x29\x2A\x20\x3A\x20","\x65\x6C\x65\x70\x68\x61\x6E\x74","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x45\x6C\x65\x70\x68\x61\x6E\x74\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x65\x6C\x65\x70\x68\x61\x6E\x74\x20\x32\x5C\x6E\x20\x31\x20\x45\x6C\x65\x70\x68\x61\x6E\x74\x20\x3D\x20\x31\x35\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x45\x6C\x65\x70\x68\x61\x6E\x74\x28\x73\x29\x2A\x20\x3A\x20","\x69\x72\x6F\x6E","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x49\x72\x6F\x6E\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x69\x72\x6F\x6E\x20\x32\x5C\x6E\x20\x31\x20\x49\x72\x6F\x6E\x20\x3D\x20\x31\x35\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x49\x72\x6F\x6E\x28\x73\x29\x2A\x20\x3A\x20","\x67\x6F\x6C\x64","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x47\x6F\x6C\x64\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x67\x6F\x6C\x64\x20\x32\x5C\x6E\x20\x31\x20\x47\x6F\x6C\x64\x20\x3D\x20\x35\x30\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x20\x53\x75\x63\x63\x65\x73\x73\x66\x75\x6C\x20\u2714\uFE0F\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x4D\x6F\x6E\x65\x79\x2A\x20\x3A\x20","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x47\x6F\x6C\x64\x28\x73\x29\x2A\x20\x3A\x20","\x65\x6D\x65\x72\x61\x6C\x64","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x45\x6D\x65\x72\x61\x6C\x64\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x65\x6D\x65\x72\x61\x6C\x64\x20\x32\x5C\x6E\x20\x31\x20\x45\x6D\x65\x72\x61\x6C\x64\x20\x3D\x20\x31\x30\x30\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x45\x6D\x65\x72\x61\x6C\x64\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x2A\x20\x3A\x20","\x49\x6E\x63\x6F\x72\x72\x65\x63\x74\x20\x46\x6F\x72\x6D\x61\x74\x21"];if(!q){return reply(`${_0x3547[0]}${prefix+ command}${_0x3547[1]}`)};if(!isInventoriBuruan){addInventoriBuruan(m[_0x3547[2]])};if(!isInventoryMonay){addInventoriMonay(m[_0x3547[2]])};if(!isInventory){addInventori(m[_0x3547[2]])};var anu=args[1];if(args[0]=== _0x3547[3]){if(isIkan< anu){return reply(`${_0x3547[4]}`)};if(!args[1]){return reply(`${_0x3547[5]}${prefix+ command}${_0x3547[6]}`)};kurangIkan(m[_0x3547[2]],anu);let monaynya=1500* anu;addMonay(m[_0x3547[2]],monaynya);setTimeout(()=>{reply(`${_0x3547[7]}${getMonay(m[_0x3547[2]])}${_0x3547[8]}${getIkan(m[_0x3547[2]])}${_0x3547[9]}`)},2000)}else {if(args[0]=== _0x3547[10]){if(isAyam< anu){return reply(`${_0x3547[11]}`)};if(!args[1]){return reply(`${_0x3547[5]}${prefix+ command}${_0x3547[12]}`)};kurangAyam(m[_0x3547[2]],anu);let monaynya=2500* anu;addMonay(m[_0x3547[2]],monaynya);setTimeout(()=>{reply(`${_0x3547[7]}${getMonay(m[_0x3547[2]])}${_0x3547[13]}${getAyam(m[_0x3547[2]])}${_0x3547[9]}`)},2000)}else {if(args[0]=== _0x3547[14]){if(isKelinci< anu){return reply(`${_0x3547[15]}`)};if(!args[1]){return reply(`${_0x3547[5]}${prefix+ command}${_0x3547[16]}`)};kurangKelinci(m[_0x3547[2]],anu);let monaynya=3000* anu;addMonay(m[_0x3547[2]],monaynya);setTimeout(()=>{reply(`${_0x3547[7]}${getMonay(m[_0x3547[2]])}${_0x3547[17]}${getKelinci(m[_0x3547[2]])}${_0x3547[9]}`)},2000)}else {if(args[0]=== _0x3547[18]){if(isDomba< anu){return reply(`${_0x3547[19]}`)};if(!args[1]){return reply(`${_0x3547[5]}${prefix+ command}${_0x3547[20]}`)};kurangDomba(m[_0x3547[2]],anu);let monaynya=5000* anu;addMonay(m[_0x3547[2]],monaynya);setTimeout(()=>{reply(`${_0x3547[7]}${getMonay(m[_0x3547[2]])}${_0x3547[21]}${getDomba(m[_0x3547[2]])}${_0x3547[9]}`)},2000)}else {if(args[0]=== _0x3547[22]){if(isSapi< anu){return reply(`${_0x3547[23]}`)};if(!args[1]){return reply(`${_0x3547[5]}${prefix+ command}${_0x3547[24]}`)};kurangSapi(m[_0x3547[2]],anu);let monaynya=10000* anu;addMonay(m[_0x3547[2]],monaynya);setTimeout(()=>{reply(`${_0x3547[7]}${getMonay(m[_0x3547[2]])}${_0x3547[25]}${getSapi(m[_0x3547[2]])}${_0x3547[9]}`)},2000)}else {if(args[0]=== _0x3547[26]){if(isGajah< anu){return reply(`${_0x3547[27]}`)};if(!args[1]){return reply(`${_0x3547[5]}${prefix+ command}${_0x3547[28]}`)};kurangGajah(m[_0x3547[2]],anu);let monaynya=15000* anu;addMonay(m[_0x3547[2]],monaynya);setTimeout(()=>{reply(`${_0x3547[7]}${getMonay(m[_0x3547[2]])}${_0x3547[29]}${getGajah(m[_0x3547[2]])}${_0x3547[9]}`)},2000)}else {if(args[0]=== _0x3547[30]){if(isBesi< anu){return reply(`${_0x3547[31]}`)};if(!args[1]){return reply(`${_0x3547[5]}${prefix+ command}${_0x3547[32]}`)};kurangBesi(m[_0x3547[2]],anu);let monaynya=16000* anu;addMonay(m[_0x3547[2]],monaynya);setTimeout(()=>{reply(`${_0x3547[7]}${getMonay(m[_0x3547[2]])}${_0x3547[33]}${getBesi(m[_0x3547[2]])}${_0x3547[9]}`)},2000)}else {if(args[0]=== _0x3547[34]){if(isEmas< anu){return reply(`${_0x3547[35]}`)};if(!args[1]){return reply(`${_0x3547[5]}${prefix+ command}${_0x3547[36]}`)};kurangEmas(m[_0x3547[2]],anu);let monaynya=50000* anu;addMonay(m[_0x3547[2]],monaynya);setTimeout(()=>{reply(`${_0x3547[37]}${getMonay(m[_0x3547[2]])}${_0x3547[38]}${getEmas(m[_0x3547[2]])}${_0x3547[9]}`)},2000)}else {if(args[0]=== _0x3547[39]){if(isEmerald< anu){return reply(`${_0x3547[40]}`)};if(!args[1]){return reply(`${_0x3547[5]}${prefix+ command}${_0x3547[41]}`)};kurangEmerald(m[_0x3547[2]],anu);let monaynya=100000* anu;addMonay(m[_0x3547[2]],monaynya);setTimeout(()=>{reply(`${_0x3547[7]}${getMonay(m[_0x3547[2]])}${_0x3547[42]}${getEmerald(m[_0x3547[2]])}${_0x3547[9]}`)},2000)}else {reply(_0x3547[43])}}}}}}}}} }
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

 case 'play': case 'song': case 'ytplay': { function _0x28ea(){const _0x3428cb=['description','Video\x20📽️','name','Example\x20:\x20','ago','\x20kuweni','©\x20Garfield\x20Whatsapp\x20Bot\x202022','*\x0a```Uploaded\x20On```\x20-\x20*','7821650qsKFQG','1082bsURdN','378QbJToj','16374hMaLyt','*\x0a```Description```\x20-\x20*','28296741DOssiK','views','\x20```Title```\x20-\x20*','2715lfgPEL','505uMWWLE','🎶\x20Audio','random','102784hYdTpy','url','title','author','*\x0a```Viewes```\x20-\x20*','*\x0a```Channel```\x20-\x20*','9644fJRyVF','floor','chat','ytaudio\x20','147dHWKKq','timestamp','156993JCkxnT','*\x0a```Author```\x20-\x20*','thumbnail'];_0x28ea=function(){return _0x3428cb;};return _0x28ea();}const _0x1d50df=_0x16d0;function _0x16d0(_0x41c78a,_0x10460e){const _0x28eae4=_0x28ea();return _0x16d0=function(_0x16d056,_0x22ede7){_0x16d056=_0x16d056-0x79;let _0x1b527c=_0x28eae4[_0x16d056];return _0x1b527c;},_0x16d0(_0x41c78a,_0x10460e);}(function(_0x40c49a,_0x3e53dc){const _0x434e11=_0x16d0,_0x43f0c5=_0x40c49a();while(!![]){try{const _0x39b91a=-parseInt(_0x434e11(0x99))/0x1+parseInt(_0x434e11(0x82))/0x2*(-parseInt(_0x434e11(0x89))/0x3)+parseInt(_0x434e11(0x93))/0x4*(-parseInt(_0x434e11(0x8a))/0x5)+-parseInt(_0x434e11(0x84))/0x6*(-parseInt(_0x434e11(0x97))/0x7)+parseInt(_0x434e11(0x8d))/0x8*(-parseInt(_0x434e11(0x83))/0x9)+-parseInt(_0x434e11(0x81))/0xa+parseInt(_0x434e11(0x86))/0xb;if(_0x39b91a===_0x3e53dc)break;else _0x43f0c5['push'](_0x43f0c5['shift']());}catch(_0x294a7e){_0x43f0c5['push'](_0x43f0c5['shift']());}}}(_0x28ea,0x6603a));if(!text)return reply(_0x1d50df(0x7c)+(prefix+command)+_0x1d50df(0x7e));let yts=require('yt-search'),search=await yts(text),anu=search['videos'][Math[_0x1d50df(0x94)](Math[_0x1d50df(0x8c)]()*0x1)],buttons=[{'buttonId':_0x1d50df(0x96)+anu[_0x1d50df(0x8e)],'buttonText':{'displayText':_0x1d50df(0x8b)},'type':0x1},{'buttonId':'ytvideo\x20'+anu[_0x1d50df(0x8e)],'buttonText':{'displayText':_0x1d50df(0x7a)},'type':0x1}],buttonMessage={'image':{'url':anu[_0x1d50df(0x9b)]},'caption':_0x1d50df(0x88)+anu[_0x1d50df(0x8f)]+'*\x0a```Duration```\x20-\x20*'+anu[_0x1d50df(0x98)]+_0x1d50df(0x91)+anu[_0x1d50df(0x87)]+_0x1d50df(0x80)+anu[_0x1d50df(0x7d)]+_0x1d50df(0x9a)+anu[_0x1d50df(0x90)][_0x1d50df(0x7b)]+_0x1d50df(0x92)+anu['author'][_0x1d50df(0x8e)]+_0x1d50df(0x85)+anu[_0x1d50df(0x79)]+'*\x0a```URL```\x20-\x20*'+anu[_0x1d50df(0x8e)]+'*\x20','footer':_0x1d50df(0x7f),'buttons':buttons,'headerType':0x4};GarfieldAdd['sendMessage'](m[_0x1d50df(0x95)],buttonMessage,{'quoted':m}); }
            break
	    case 'ytmp3': case 'getmusic': case 'ytaudio': {
                let { tharinduaudio } = require('./lib/ytmp3')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await tharinduaudio(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldAdd.sendImage(m.chat, media.thumb,  '```Title :``` *' + media.title + '*\n```URL :``` *' + isUrl(text) + '*\n```Quality :``` : *320Kbps*\n', m)
                GarfieldAdd.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.m4a` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'getvideo': case 'ytvideo': {
                let { tharinduyt } = require('./lib/ytmp4')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await tharinduyt(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                GarfieldAdd.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption:'```Title :``` *' + media.title +'*\n```File Size :``` *' + media.filesizeF + '*\n```URL :``` *' + isUrl(text) + '*\n ```Quality  :``` *480p*\n' }, { quoted: m })
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
            if (room.x !== room.o) await GarfieldAdd.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await GarfieldAdd.sendText(room.o, str, m, { mentions: parseMention(str) } )
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
            GarfieldAdd.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
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
            chat: await GarfieldAdd.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) GarfieldAdd.sendText(m.chat, `_Suit Time Out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    GarfieldAdd.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    GarfieldAdd.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    GarfieldAdd.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    GarfieldAdd.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    GarfieldAdd.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    GarfieldAdd.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    GarfieldAdd.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
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
                    pesan: await GarfieldAdd.sendText(m.chat, hasil, m),
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
                    let msg = await GarfieldAdd.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    GarfieldAdd.sendText(m.chat, `What Is The Name Of This Song?\n\nArtist : ${result.artist}\nTime : 60 seconds`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant To Play? Press The Button Below`, ` ${global.botname} `, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'picture') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldAdd.sendImage(m.chat, result.img, `Please Answer The Questions Above\n\nDescription : ${result.deskripsi}\nTime : 60 seconds`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, ` ${global.botname} `, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'word') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/xmodules/fungames/main/GuessTheWord.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldAdd.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, ` ${global.botname} `, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'sentence') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/xmodules/fungames/main/GuessTheSentence.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldAdd.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, ` ${global.botname} `, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lyrics') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldAdd.sendText(m.chat, `These Are The Lyrics Of Which Song? : *${result.soal}*?\nTime : 60 seconds`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, ` ${global.botname} `, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'blank') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GarfieldAdd.sendText(m.chat, `*Answer The Following Questions :*\n${result.soal}*\nTime : 60 seconds`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GarfieldAdd.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, ` ${global.botname} `, m)
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
                GarfieldAdd.sendMessage(m.chat, reactionMessage)
            }
            break
		
		
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                GarfieldAdd.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
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
                    await GarfieldAdd.sendButtonText(m.chat, buttons, jawab, ` ${global.botname} `, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
ඕක සතියයි ❤️🌹`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(m.chat, buttons, jawab, ` ${global.botname} `, m, {mentions: menst})
            }
            break
            case 'is':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
GarfieldAdd.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

					break
					            case 'what':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
GarfieldAdd.sendMessage(from, { text: `Question : What ${q}\nAnswer : ${kahk}` }, { quoted: m })

					break
case 'can':
				if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
					const bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
GarfieldAdd.sendMessage(from, { text: `Question : Can ${q}\nAnswer : ${ga}` }, { quoted: m })

					break
case 'how':
				if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
					const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
GarfieldAdd.sendMessage(from, { text: `Question : ${q}\nAnswer : How ${ya}` }, { quoted: m })

					break
case 'rate':
				if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
GarfieldAdd.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

					break
  case 'handsomecheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @ZENOI`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
GarfieldAdd.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @ZENOI`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
GarfieldAdd.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })

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
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @ZENOI`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
GarfieldAdd.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
										break
case 'when':
				if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
					const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','morrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
GarfieldAdd.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					break
case 'wandhdhdhdgy':
              if (!text) return replay(`Use Text, Example : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
             reply(awikwok)
              break
case 'checkdeath':
             if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} Hasindu `)
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
                GarfieldAdd.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'restart': {
             if (!isCreator) throw mess.owner              
             exec(`npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs`)
             m.reply('*Restarting Garfield bot v8.2....*')
             }
break

            case 'join': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await GarfieldAdd.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return replay(`${mess.owner}`)
                await GarfieldAdd.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n ${global.emoji01} Packname : ${global.packname}\n ${global.emoji01} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldAdd.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldAdd.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldAdd.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldAdd.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldAdd.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GarfieldAdd.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await GarfieldAdd.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await GarfieldAdd.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await GarfieldAdd.downloadAndSaveMediaMessage(quoted)
                await GarfieldAdd.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await GarfieldAdd.downloadAndSaveMediaMessage(quoted)
                await GarfieldAdd.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `╚»˙·٠•● ${global.emoji02} Tag All  ${global.emoji02}●•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += ` ${global.emoji01} @${mem.id.split('@')[0]}\n`
                }
                GarfieldAdd.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            GarfieldAdd.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
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
                    teks += ` ${global.emoji01} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session \n    - coded by Tharindu Liyanage`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE ❇️ 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE ⛔〕
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
                footer: `© Coded by Tharindu Liyanage`,
                buttons: buttonsVote,
                headerType: 1
            }
            GarfieldAdd.sendMessage(m.chat, buttonMessageVote)
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
                footer: `© Coded by Tharindu Liyanage`,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            GarfieldAdd.sendMessage(m.chat, buttonMessageUpvote)
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
                footer: `© Coded by Tharindu Liyanage`,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            GarfieldAdd.sendMessage(m.chat, buttonMessageDevote)
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


©${GarfieldAdd.user.id}
`
GarfieldAdd.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
            case 'fbdl': case 'fb': case 'facebook': case 'getfb': {     	    
                      
             if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                
                     
            let bocil = require('@bochilteam/scraper')  
                bocil.facebookdlv2(`${text}`).then(async (data) => {                   

                    let txt = `*ＦＢ ＶＩＤＥＯ 𝖽𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝖾𝗋*\n\n`

                    txt += `*${global.emoji02} TITLE :* ${data.title}\n`

                    txt += `*${global.emoji02} QUALITY :* ${data.result[0].quality}\n`

                    txt += `*${global.emoji02} DESCRIPTION :* ${data.description}\n`

                    txt += `*${global.emoji02} URL :* ${text}\n\n`         

                buf = await getBuffer(data.thumbnail)    

                GarfieldAdd.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         

                for (let i of data.result) {     

                GarfieldAdd.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `* 🎼  Quality :* ${i.quality}`}, { quoted: m })

                }          

                }).catch((err) => {

                    m.reply(`*Failed When Downloading Media and Sending Files*`)

                })

            }

            break
                 case 'lyrics': { var _0x616e=["\x55\x73\x65\x20\x65\x78\x61\x6D\x70\x6C\x65\x20","\x6C\x79\x72\x69\x63\x73\x20\x73\x6F\x72\x72\x79","\x77\x61\x69\x74","\x72\x65\x70\x6C\x79","\x40\x62\x6F\x63\x68\x69\x6C\x74\x65\x61\x6D\x2F\x73\x63\x72\x61\x70\x65\x72","\x63\x61\x74\x63\x68","\x74\x72\x69\x6D","\x0D\x0A\x20\x2A\x54\x49\x54\x4C\x45\x20\x3A\x2A\x20\x2A","\x74\x69\x74\x6C\x65","\x2A\x0D\x0A\x20\x2A\x41\x55\x54\x48\x4F\x52\x20\x3A\x2A\x20","\x61\x75\x74\x68\x6F\x72","\x0D\x0A\x20\x4C\x59\x52\x49\x43\x53\x20\x3A\x20","\x6C\x79\x72\x69\x63\x73","\x0D\x0A\x20\x0D\x0A"];if(!text){return reply(`${_0x616e[0]}${prefix}${_0x616e[1]}`)};m[_0x616e[3]](mess[_0x616e[2]]);const {lyrics,lyricsv2}=require(_0x616e[4]);const result= await lyricsv2(text)[_0x616e[5]](async (_0xd2fax2)=>{return  await lyrics(text)});m[_0x616e[3]](`${_0x616e[7]}${result[_0x616e[8]]}${_0x616e[9]}${result[_0x616e[10]]}${_0x616e[11]}${result[_0x616e[12]]}${_0x616e[13]}`[_0x616e[6]]()) }
break
               case 'group': case 'grup': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await GarfieldAdd.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await GarfieldAdd.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(m.chat, buttons, `Group Mode`, ` ${global.botname} `, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await GarfieldAdd.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await GarfieldAdd.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(m.chat, buttons, `Mode Edit Info`, ` ${global.botname} `, m)

            }
            }
            break
              case 'git': case 'gitclone':
           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                       
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) throw 'link github  EXAMPLE: https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
    if (!regex1.test(args[0])) throw 'link!'
    
            
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
    m.reply(`*Please wait, sending repository..*`)
    GarfieldAdd.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply('*Sorry, the github link you provided is private, and cant be made into a file*'))
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
                    await GarfieldAdd.sendButtonText(m.chat, buttons, `Antilink Mode`, ` ${global.botname} `, m)
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
                reply(`${` ${global.botname} `} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${` ${global.botname} `} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(m.chat, buttons, `Mute Bot`, ` ${global.botname} `, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await GarfieldAdd.groupInviteCode(m.chat)
                GarfieldAdd.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`Enter The enable/disable Values`)
                if (args[0] === 'enable') {
                    await GarfieldAdd.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await GarfieldAdd.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
             case 'save': { var _0xd9c9=["\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x6D\x65\x64\x69\x61\x20\x61\x6E\x64\x20\x73\x65\x6E\x64\x20\x61\x75\x64\x69\x6F\x20","\x20\x6C\x69\x6E\x6B\x20\x75\x72\x6C","\x72\x65\x70\x6C\x79","\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x2A\x54\x68\x65\x20\x6C\x69\x6E\x6B\x20\x79\x6F\x75\x20\x70\x72\x6F\x76\x69\x64\x65\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x2A","\x40\x62\x6F\x63\x68\x69\x6C\x74\x65\x61\x6D\x2F\x73\x63\x72\x61\x70\x65\x72","\x2A\x53\x6F\x72\x72\x79\x20\x41\x6E\x20\x45\x72\x72\x6F\x72\x20\x4F\x63\x63\x75\x72\x72\x65\x64\x2A","\x63\x61\x74\x63\x68","\x75\x72\x6C","","\x74\x79\x70\x65","\x51\x75\x61\x6C\x69\x74\x79\x20","\x73\x75\x62\x6E\x61\x6D\x65","\x67\x65\x74\x20","\x68\x6F\x73\x74\x69\x6E\x67","\x70\x75\x73\x68","\x63\x68\x61\x74","\x74\x69\x74\x6C\x65","\x6D\x65\x74\x61","\x20\x2A\x48\x65\x72\x65\x20\x69\x73\x20\x74\x68\x65\x20\x6C\x69\x73\x74\x20\x6F\x66\x20\x76\x69\x64\x65\x6F\x73\x2C\x20\x63\x6C\x69\x63\x6B\x20\x74\x68\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x62\x65\x6C\x6F\x77\x20\x74\x6F\x20\x63\x68\x6F\x6F\x73\x65\x2C\x20\x68\x65\x72\x65\x20\x69\x73\x20\x74\x68\x65\x20\x6C\x69\x73\x74\x20\x6F\x66\x20\x76\x69\x64\x65\x6F\x73\x2C\x20\x63\x6C\x69\x63\x6B\x20\x74\x68\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x62\x65\x6C\x6F\x77\x20\x74\x6F\x20\x63\x68\x6F\x6F\x73\x65\x2A","\xA9\x43\x6F\x64\x65\x64\x20\x62\x79\x20\x54\x68\x61\x72\x69\x6E\x64\x75\x20\x4C\x69\x79\x61\x6E\x61\x67\x65","\x2A\u258A\u258A\u258A\x20\x53\x41\x56\x45\x52\x20\u258A\u258A\u258A\x2A","\x43\x4C\x49\x43\x4B\x20\x48\x45\x52\x45","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x74\x68\x65\x6E","\x73\x61\x76\x65\x66\x72\x6F\x6D"];if(!text){return m[_0xd9c9[2]](`${_0xd9c9[0]}${prefix+ command}${_0xd9c9[1]}`)};if(!isUrl(args[0])&&  !args[0][_0xd9c9[4]](_0xd9c9[3])){throw _0xd9c9[5]};let noh=require(_0xd9c9[6]);noh[_0xd9c9[26]](`${_0xd9c9[10]}${text}${_0xd9c9[10]}`)[_0xd9c9[25]](async (_0xba7fx3)=>{let _0xba7fx4=[];for(let _0xba7fx5 of _0xba7fx3[_0xd9c9[9]]){const _0xba7fx6={title:`${_0xd9c9[10]}${_0xba7fx5[_0xd9c9[11]]}${_0xd9c9[10]}`,rows:[{title:`${_0xd9c9[12]}${_0xba7fx5[_0xd9c9[13]]}${_0xd9c9[10]}`,rowId:`${_0xd9c9[10]}${prefix}${_0xd9c9[14]}${text}${_0xd9c9[10]}`,description:`${_0xd9c9[10]}${_0xba7fx3[_0xd9c9[15]]}${_0xd9c9[10]}`}]};_0xba7fx4[_0xd9c9[16]](_0xba7fx6)};const _0xba7fx7=GarfieldAdd[_0xd9c9[24]](m[_0xd9c9[17]],{text:`${_0xd9c9[10]}${_0xba7fx3[_0xd9c9[19]][_0xd9c9[18]]}${_0xd9c9[20]}`,footer:`${_0xd9c9[21]}`,title:_0xd9c9[22],buttonText:_0xd9c9[23],sections},{quoted:m})})[_0xd9c9[8]]((_0xba7fx2)=>{m[_0xd9c9[2]](`${_0xd9c9[7]}`)}) }

         
            break
case 'mediafire': { var _0xa52a=["\x2A\x45\x6E\x74\x65\x72\x20\x61\x20\x4C\x69\x6E\x6B\x20\x51\x75\x65\x72\x79\x21\x2A","\x6D\x65\x64\x69\x61\x66\x69\x72\x65\x2E\x63\x6F\x6D","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x2A\x54\x68\x65\x20\x6C\x69\x6E\x6B\x20\x79\x6F\x75\x20\x70\x72\x6F\x76\x69\x64\x65\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x2A","\x4D\x42","\x73\x70\x6C\x69\x74","\x73\x69\x7A\x65","\x2A\x46\x69\x6C\x65\x20\x4F\x76\x65\x72\x20\x4C\x69\x6D\x69\x74\x2A\x20","\x66\x6F\x72\x6D\x61\x74","\x72\x65\x70\x6C\x79","\x2A\u258A\u258A\u258A\x20\x4D\x45\x44\x49\x41\x46\x49\x52\x45\x20\u258A\u258A\u258A\x2A\x0D\x0A\x09\x09\x09\x09\x0D\x0A\x2A\x4E\x61\x6D\x65\x2A\x20\x3A\x20","\x6E\x61\x6D\x61","\x0D\x0A\x2A\x53\x69\x7A\x65\x2A\x20\x3A\x20","\x0D\x0A\x2A\x4D\x69\x6D\x65\x2A\x20\x3A\x20","\x6D\x69\x6D\x65","\x0D\x0A\x2A\x4C\x69\x6E\x6B\x2A\x20\x3A\x20","\x6C\x69\x6E\x6B","\x5C\x6E\x0D\x0A\x5F\x77\x68\x6F\x61\x20\x77\x61\x69\x74\x20\x70\x72\x6F\x63\x65\x73\x73\x69\x6E\x67\x2E\x2E\x2E\x5F\x0D\x0A\x0D\x0A\x2A\uFF27\uFF21\uFF32\uFF26\uFF29\uFF25\uFF2C\uFF24\x20\uFF22\uFF2F\uFF34\x2A","","\x2A\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x46\x69\x6C\x65\x2A","\x63\x61\x74\x63\x68","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){throw _0xa52a[0]};if(!isUrl(args[0])&&  !args[0][_0xa52a[2]](_0xa52a[1])){throw _0xa52a[3]};const baby1= await mediafireDl(text);if(baby1[0][_0xa52a[6]][_0xa52a[5]](_0xa52a[4])[0]>= 150){return m[_0xa52a[9]](_0xa52a[7]+ util[_0xa52a[8]](baby1))};const result4=`${_0xa52a[10]}${baby1[0][_0xa52a[11]]}${_0xa52a[12]}${baby1[0][_0xa52a[6]]}${_0xa52a[13]}${baby1[0][_0xa52a[14]]}${_0xa52a[15]}${baby1[0][_0xa52a[16]]}${_0xa52a[17]}`;m[_0xa52a[9]](`${_0xa52a[18]}${result4}${_0xa52a[18]}`);GarfieldAdd[_0xa52a[22]](m[_0xa52a[21]],{document:{url:baby1[0][_0xa52a[16]]},fileName:baby1[0][_0xa52a[11]],mimetype:baby1[0][_0xa52a[14]]},{quoted:m})[_0xa52a[20]]((_0x1975x3)=>{return m[_0xa52a[9]](_0xa52a[19])}) }
break
case 'fb2': case 'facebook2': { var _0x856f=["\x2A\x45\x6E\x74\x65\x72\x20\x61\x20\x4C\x69\x6E\x6B\x20\x51\x75\x65\x72\x79\x21\x2A","\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x2A\x54\x68\x65\x20\x6C\x69\x6E\x6B\x20\x79\x6F\x75\x20\x70\x72\x6F\x76\x69\x64\x65\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x76\x69\x6F\x6C\x65\x74\x69\x63\x73\x2E\x70\x77\x2F\x61\x70\x69\x2F\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x65\x72\x2F\x66\x61\x63\x65\x62\x6F\x6F\x6B\x3F\x61\x70\x69\x6B\x65\x79\x3D","\x76\x69\x6F\x6C\x6B\x65\x79","\x26\x75\x72\x6C\x3D","","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x62\x62\x2E\x63\x6F\x2F\x4A\x7A\x30\x6D\x4D\x6E\x43\x2F\x50\x69\x63\x73\x2D\x41\x72\x74\x2D\x32\x32\x2D\x30\x36\x2D\x30\x33\x2D\x30\x31\x2D\x30\x31\x2D\x34\x36\x2D\x38\x37\x36\x2E\x70\x6E\x67","\x2A\x53\x6F\x72\x72\x79\x2C\x20\x74\x68\x65\x20\x66\x65\x61\x74\x75\x72\x65\x20\x69\x73\x20\x69\x6E\x20\x65\x72\x72\x6F\x72\x2A","\x72\x65\x70\x6C\x79","\x63\x61\x74\x63\x68","\x63\x68\x61\x74","\x75\x72\x6C","\x72\x65\x73\x75\x6C\x74","\x2A\uD83D\uDCFD\uFE0F\x20\x46\x41\x43\x45\x42\x4F\x4F\x4B\x20\x44\x4F\x57\x4E\x4C\x4F\x41\x44\x45\x52\x2A\x5C\x6E\x5C\x6E\x2A\x4E\x61\x6D\x65\x2A\x20\x3A\x20","\x74\x69\x74\x6C\x65","\x6D\x65\x74\x61","\x5C\x6E\x2A\x51\x75\x61\x6C\x69\x74\x79\x2A\x20\x3A\x20","\x73\x75\x62\x6E\x61\x6D\x65","\x5C\x6E\x2A\x45\x78\x74\x2A\x20\x3A\x20","\x65\x78\x74","\x5C\x6E","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){throw _0x856f[0]};if(!isUrl(args[0])&&  !args[0][_0x856f[2]](_0x856f[1])){throw _0x856f[3]};anu=  await fetchJson(`${_0x856f[4]}${global[_0x856f[5]]}${_0x856f[6]}${text}${_0x856f[7]}`);tummb=  await getBuffer(_0x856f[8]);GarfieldAdd[_0x856f[23]](m[_0x856f[12]],{video:{url:anu[_0x856f[14]][_0x856f[13]][0][_0x856f[13]]},jpegThumbnail:tummb,caption:`${_0x856f[15]}${anu[_0x856f[14]][_0x856f[17]][_0x856f[16]]}${_0x856f[18]}${anu[_0x856f[14]][_0x856f[13]][0][_0x856f[19]]}${_0x856f[20]}${anu[_0x856f[14]][_0x856f[13]][0][_0x856f[21]]}${_0x856f[22]}`},{quoted:m})[_0x856f[11]]((_0xa0bex1)=>{return m[_0x856f[10]](_0x856f[9])}) }
            break
case 'music': { var _0x3ac5=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x52\x69\x64\x6D\x61\x20\x57\x65\x65\x72\x61\x77\x61\x72\x64\x65\x6E\x61\x20\x73\x6F\x6E\x67\x73","\x79\x74\x2D\x73\x65\x61\x72\x63\x68","\x79\x74\x6D\x70\x34\x20","\x75\x72\x6C","\x61\x6C\x6C","","\x79\x74\x6D\x70\x33\x20","\x56\x49\x44\x45\x4F\x20\x4D\x50\x34\x20\uD83C\uDFBC\x20\x3A\x20","\x74\x69\x74\x6C\x65","\x53\x4F\x4E\x47\x20\x4D\x50\x33\x20\uD83C\uDFBC\x20\x3A\x20","\x5C\x6E","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x52\x45\x53\x55\x4C\x54\x20\x4E\x55\x4D\x42\x45\x52\x20","\x70\x75\x73\x68","\x63\x68\x61\x74","\x0A\x0A\x2A\x4D\x75\x73\x69\x63\x20\x44\x6F\x77\x6E\x6C\x6F\x64\x65\x72\x20\uD83E\uDD8B\x2A","\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x48\x45\x52\x45\x20\x49\x53\x20\x59\x4F\x55\x52\x20\x52\x45\x53\x55\x4C\x54\x53\x20\x46\x52\x4F\x4D\x20\x2A","\x2A\x20\x5F\x73\x65\x6C\x65\x63\x74\x20\x73\x6F\x6E\x67\x20\x6F\x72\x20\x76\x69\x64\x65\x6F\x20\x62\x65\x6C\x6F\x77\x5F","\x43\x4C\x49\x43\x4B\x20\x48\x45\x52\x45","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){throw `${_0x3ac5[0]}${prefix+ command}${_0x3ac5[1]}`};let yts=require(_0x3ac5[2]);let search= await yts(text);let sections=[];let listmenu=[`${_0x3ac5[3]}${search[_0x3ac5[5]][0][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[7]}${search[_0x3ac5[5]][1][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[3]}${search[_0x3ac5[5]][2][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[7]}${search[_0x3ac5[5]][3][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[3]}${search[_0x3ac5[5]][4][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[7]}${search[_0x3ac5[5]][5][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[3]}${search[_0x3ac5[5]][6][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[7]}${search[_0x3ac5[5]][7][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[3]}${search[_0x3ac5[5]][8][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[7]}${search[_0x3ac5[5]][9][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[3]}${search[_0x3ac5[5]][10][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[7]}${search[_0x3ac5[5]][11][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[3]}${search[_0x3ac5[5]][12][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[7]}${search[_0x3ac5[5]][13][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[3]}${search[_0x3ac5[5]][14][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[7]}${search[_0x3ac5[5]][15][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[3]}${search[_0x3ac5[5]][16][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[7]}${search[_0x3ac5[5]][17][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[3]}${search[_0x3ac5[5]][18][_0x3ac5[4]]}${_0x3ac5[6]}`,`${_0x3ac5[7]}${search[_0x3ac5[5]][19][_0x3ac5[4]]}${_0x3ac5[6]}`];let listmenuu=[`${_0x3ac5[8]}${search[_0x3ac5[5]][0][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[10]}${search[_0x3ac5[5]][1][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[8]}${search[_0x3ac5[5]][2][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[10]}${search[_0x3ac5[5]][3][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[8]}${search[_0x3ac5[5]][4][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[10]}${search[_0x3ac5[5]][5][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[8]}${search[_0x3ac5[5]][6][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[10]}${search[_0x3ac5[5]][7][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[8]}${search[_0x3ac5[5]][8][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[10]}${search[_0x3ac5[5]][9][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[8]}${search[_0x3ac5[5]][10][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[10]}${search[_0x3ac5[5]][11][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[8]}${search[_0x3ac5[5]][12][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[10]}${search[_0x3ac5[5]][13][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[8]}${search[_0x3ac5[5]][14][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[10]}${search[_0x3ac5[5]][15][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[8]}${search[_0x3ac5[5]][16][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[10]}${search[_0x3ac5[5]][17][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[8]}${search[_0x3ac5[5]][18][_0x3ac5[9]]}${_0x3ac5[6]}`,`${_0x3ac5[10]}${search[_0x3ac5[5]][19][_0x3ac5[9]]}${_0x3ac5[6]}`];let listmenuuu=[`${_0x3ac5[11]}${search[_0x3ac5[5]][0][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][1][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][2][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][3][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][4][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][5][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][6][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][7][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][8][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][9][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][10][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][11][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][12][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][13][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][14][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][15][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][16][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][17][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][18][_0x3ac5[12]]}${_0x3ac5[6]}`,`${_0x3ac5[11]}${search[_0x3ac5[5]][19][_0x3ac5[12]]}${_0x3ac5[6]}`];let nombor=1;let startnum=0;let startnumm=0;for(let x of listmenu){const list={title:_0x3ac5[13]+ nombor++,rows:[{title:`${_0x3ac5[6]}${listmenuu[startnum++]}${_0x3ac5[6]}`,description:`${_0x3ac5[6]}${listmenuuu[startnumm++]}${_0x3ac5[6]}`,rowId:`${_0x3ac5[6]}${prefix}${_0x3ac5[6]}${x}${_0x3ac5[6]}`}]};sections[_0x3ac5[14]](list)};const sendm=GarfieldAdd[_0x3ac5[22]](m[_0x3ac5[15]],{text:_0x3ac5[16],footer:`${_0x3ac5[17]}${global[_0x3ac5[18]]}${_0x3ac5[17]}`,title:`${_0x3ac5[19]}${text}${_0x3ac5[20]}`,buttonText:_0x3ac5[21],sections},{quoted:m}) }
     break
     break
        case 'gimage': case 'photo': {
        if (!text) return reply(`Example : ${prefix + command} Sri Lanka`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「  ${global.botname}   ＳＥＡＲＣＨ  ＥＮＧＩＮＥ」-------*
 ${global.emoji01} *Query* : ${text}
🔗 *URL* : ${images}`,
                    footer: `© Coded by Tharindu Liyanage`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
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
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {      var _0x3c52=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20","\x6F\x77\x6E\x65\x72\x6E\x61\x6D\x65","","\x74\x65\x73\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x63\x68\x72\x69\x73\x74\x6D\x61\x73\x2D\x63\x61\x6E\x64\x79\x2D\x63\x61\x6E\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x35\x36\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x68\x72\x69\x73\x74\x6D\x61\x73\x2D\x74\x72\x65\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x66\x72\x65\x65\x2D\x31\x30\x35\x37\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x33\x64\x2D\x63\x68\x72\x69\x73\x74\x6D\x61\x73\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x62\x79\x2D\x6E\x61\x6D\x65\x2D\x31\x30\x35\x35\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x73\x70\x61\x72\x6B\x6C\x65\x73\x2D\x6D\x65\x72\x72\x79\x2D\x63\x68\x72\x69\x73\x74\x6D\x61\x73\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x35\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x33\x64\x2D\x64\x65\x65\x70\x2D\x73\x65\x61\x2D\x6D\x65\x74\x61\x6C\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x35\x33\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x33\x64\x2D\x73\x63\x69\x2D\x66\x69\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x35\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x33\x64\x2D\x72\x61\x69\x6E\x62\x6F\x77\x2D\x63\x6F\x6C\x6F\x72\x2D\x63\x61\x6C\x6C\x69\x67\x72\x61\x70\x68\x79\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x34\x39\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x33\x64\x2D\x77\x61\x74\x65\x72\x2D\x70\x69\x70\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x73\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x34\x38\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x68\x61\x6C\x6C\x6F\x77\x65\x65\x6E\x2D\x73\x6B\x65\x6C\x65\x74\x6F\x6E\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x34\x37\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x61\x2D\x73\x6B\x65\x74\x63\x68\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x34\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x62\x6C\x75\x65\x2D\x63\x69\x72\x63\x75\x69\x74\x2D\x73\x74\x79\x6C\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x34\x33\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x73\x70\x61\x63\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x73\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x66\x72\x65\x65\x2D\x31\x30\x34\x32\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x2D\x67\x6C\x6F\x73\x73\x79\x2D\x6D\x65\x74\x61\x6C\x69\x63\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x66\x72\x65\x65\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x34\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x73\x63\x69\x65\x6E\x63\x65\x2D\x66\x69\x63\x74\x69\x6F\x6E\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x66\x72\x65\x65\x2D\x31\x30\x33\x38\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x67\x72\x65\x65\x6E\x2D\x68\x6F\x72\x72\x6F\x72\x2D\x73\x74\x79\x6C\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x33\x36\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x61\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x65\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x33\x35\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x62\x65\x72\x72\x79\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x66\x72\x65\x65\x2D\x31\x30\x33\x33\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x6F\x6E\x6C\x69\x6E\x65\x2D\x74\x68\x75\x6E\x64\x65\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x67\x65\x6E\x65\x72\x61\x74\x6F\x72\x2D\x31\x30\x33\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x61\x2D\x6D\x61\x67\x6D\x61\x2D\x68\x6F\x74\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x33\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x33\x64\x2D\x73\x74\x6F\x6E\x65\x2D\x63\x72\x61\x63\x6B\x65\x64\x2D\x63\x6F\x6F\x6C\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x32\x39\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x33\x64\x2D\x6E\x65\x6F\x6E\x2D\x6C\x69\x67\x68\x74\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x32\x38\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x69\x6D\x70\x72\x65\x73\x73\x69\x76\x65\x2D\x67\x6C\x69\x74\x63\x68\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x73\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x32\x37\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x68\x61\x72\x72\x79\x2D\x70\x6F\x74\x74\x65\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x32\x35\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x62\x72\x6F\x6B\x65\x6E\x2D\x67\x6C\x61\x73\x73\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x66\x72\x65\x65\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x32\x33\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x61\x72\x74\x2D\x70\x61\x70\x65\x72\x2D\x63\x75\x74\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x32\x32\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x61\x2D\x66\x72\x65\x65\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x77\x61\x74\x65\x72\x63\x6F\x6C\x6F\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x31\x37\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x6F\x6E\x6C\x69\x6E\x65\x2D\x6D\x75\x6C\x74\x69\x63\x6F\x6C\x6F\x72\x2D\x33\x64\x2D\x70\x61\x70\x65\x72\x2D\x63\x75\x74\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x31\x36\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x6E\x65\x6F\x6E\x2D\x64\x65\x76\x69\x6C\x2D\x77\x69\x6E\x67\x73\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x66\x72\x65\x65\x2D\x31\x30\x31\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x33\x64\x2D\x75\x6E\x64\x65\x72\x77\x61\x74\x65\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x67\x65\x6E\x65\x72\x61\x74\x6F\x72\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x31\x33\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x77\x6F\x6E\x64\x65\x72\x66\x75\x6C\x2D\x67\x72\x61\x66\x66\x69\x74\x69\x2D\x61\x72\x74\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x31\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x73\x6E\x6F\x77\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x73\x2D\x66\x6F\x72\x2D\x77\x69\x6E\x74\x65\x72\x2D\x68\x6F\x6C\x69\x64\x61\x79\x73\x2D\x31\x30\x30\x35\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x61\x2D\x63\x6C\x6F\x75\x64\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x2D\x74\x68\x65\x2D\x73\x6B\x79\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x30\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x68\x6F\x6E\x65\x79\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x36\x38\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x69\x63\x65\x2D\x63\x6F\x6C\x64\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x36\x32\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x66\x72\x75\x69\x74\x2D\x6A\x75\x69\x63\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x36\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x62\x69\x73\x63\x75\x69\x74\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x35\x38\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x77\x6F\x6F\x64\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x35\x36\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x68\x6F\x63\x6F\x6C\x61\x74\x65\x2D\x63\x61\x6B\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x39\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x73\x74\x72\x61\x77\x62\x65\x72\x72\x79\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x38\x38\x39\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x6D\x61\x74\x72\x69\x78\x2D\x73\x74\x79\x6C\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x38\x38\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x68\x6F\x72\x72\x6F\x72\x2D\x62\x6C\x6F\x6F\x64\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x38\x38\x33\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x64\x72\x6F\x70\x77\x61\x74\x65\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x37\x32\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x74\x6F\x78\x69\x63\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x30\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x6C\x61\x76\x61\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x31\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x72\x6F\x63\x6B\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x31\x35\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x62\x6C\x6F\x6F\x64\x2D\x74\x65\x78\x74\x2D\x6F\x6E\x2D\x74\x68\x65\x2D\x66\x72\x6F\x73\x74\x65\x64\x2D\x67\x6C\x61\x73\x73\x2D\x39\x34\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x68\x61\x6C\x6C\x6F\x77\x65\x65\x6E\x2D\x66\x69\x72\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x39\x34\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x6D\x65\x74\x61\x6C\x2D\x64\x61\x72\x6B\x2D\x67\x6F\x6C\x64\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x33\x39\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x6C\x6F\x67\x6F\x2D\x6A\x6F\x6B\x65\x72\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x33\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x77\x69\x63\x6B\x65\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x33\x32\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x66\x69\x72\x65\x77\x6F\x72\x6B\x2D\x73\x70\x61\x72\x6B\x6C\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x39\x33\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x73\x6B\x65\x6C\x65\x74\x6F\x6E\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x32\x39\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x62\x6C\x61\x63\x6B\x70\x69\x6E\x6B\x2D\x6C\x6F\x67\x6F\x2D\x73\x74\x79\x6C\x65\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x30\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x77\x72\x69\x74\x65\x2D\x69\x6E\x2D\x73\x61\x6E\x64\x2D\x73\x75\x6D\x6D\x65\x72\x2D\x62\x65\x61\x63\x68\x2D\x66\x72\x65\x65\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x39\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x33\x64\x2D\x67\x6C\x75\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x77\x69\x74\x68\x2D\x72\x65\x61\x6C\x69\x73\x74\x69\x63\x2D\x73\x74\x79\x6C\x65\x2D\x39\x38\x36\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x31\x39\x31\x37\x2D\x73\x74\x79\x6C\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x38\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x6E\x61\x74\x75\x72\x61\x6C\x2D\x6C\x65\x61\x76\x65\x73\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x39\x33\x31\x2E\x68\x74\x6D\x6C","\x74\x65\x78\x74\x70\x72\x6F","\x63\x68\x61\x74","\x4D\x61\x64\x65\x20\x62\x79\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x20\x5C\x6E\xA9\x20\u1D18\u1D0F\u1D21\u1D07\u0280\u1D07\u1D05\x20\u0299\u028F\x20\u0262\u1D00\u0280\uA730\u026A\u1D07\u029F\u1D05\x20\u0299\u1D0F\u1D1B","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!q){return reply(`${_0x3c52[0]}${prefix+ command}${_0x3c52[1]}${global[_0x3c52[2]]}${_0x3c52[3]}`)};let link;if(/candy/[_0x3c52[4]](command)){link= _0x3c52[5]};if(/christmas/[_0x3c52[4]](command)){link= _0x3c52[6]};if(/3dchristmas/[_0x3c52[4]](command)){link= _0x3c52[7]};if(/sparklechristmas/[_0x3c52[4]](command)){link= _0x3c52[8]};if(/deepsea/[_0x3c52[4]](command)){link= _0x3c52[9]};if(/scifi/[_0x3c52[4]](command)){link= _0x3c52[10]};if(/rainbow/[_0x3c52[4]](command)){link= _0x3c52[11]};if(/waterpipe/[_0x3c52[4]](command)){link= _0x3c52[12]};if(/spooky/[_0x3c52[4]](command)){link= _0x3c52[13]};if(/pencil/[_0x3c52[4]](command)){link= _0x3c52[14]};if(/circuit/[_0x3c52[4]](command)){link= _0x3c52[15]};if(/discovery/[_0x3c52[4]](command)){link= _0x3c52[16]};if(/metalic/[_0x3c52[4]](command)){link= _0x3c52[17]};if(/fiction/[_0x3c52[4]](command)){link= _0x3c52[18]};if(/demon/[_0x3c52[4]](command)){link= _0x3c52[19]};if(/transformer/[_0x3c52[4]](command)){link= _0x3c52[20]};if(/berry/[_0x3c52[4]](command)){link= _0x3c52[21]};if(/thunder/[_0x3c52[4]](command)){link= _0x3c52[22]};if(/magma/[_0x3c52[4]](command)){link= _0x3c52[23]};if(/3dstone/[_0x3c52[4]](command)){link= _0x3c52[24]};if(/neonlight/[_0x3c52[4]](command)){link= _0x3c52[25]};if(/glitch/[_0x3c52[4]](command)){link= _0x3c52[26]};if(/harrypotter/[_0x3c52[4]](command)){link= _0x3c52[27]};if(/brokenglass/[_0x3c52[4]](command)){link= _0x3c52[28]};if(/papercut/[_0x3c52[4]](command)){link= _0x3c52[29]};if(/watercolor/[_0x3c52[4]](command)){link= _0x3c52[30]};if(/multicolor/[_0x3c52[4]](command)){link= _0x3c52[31]};if(/neondevil/[_0x3c52[4]](command)){link= _0x3c52[32]};if(/underwater/[_0x3c52[4]](command)){link= _0x3c52[33]};if(/graffitibike/[_0x3c52[4]](command)){link= _0x3c52[34]};if(/snow/[_0x3c52[4]](command)){link= _0x3c52[35]};if(/cloud/[_0x3c52[4]](command)){link= _0x3c52[36]};if(/honey/[_0x3c52[4]](command)){link= _0x3c52[37]};if(/ice/[_0x3c52[4]](command)){link= _0x3c52[38]};if(/fruitjuice/[_0x3c52[4]](command)){link= _0x3c52[39]};if(/biscuit/[_0x3c52[4]](command)){link= _0x3c52[40]};if(/wood/[_0x3c52[4]](command)){link= _0x3c52[41]};if(/chocolate/[_0x3c52[4]](command)){link= _0x3c52[42]};if(/strawberry/[_0x3c52[4]](command)){link= _0x3c52[43]};if(/matrix/[_0x3c52[4]](command)){link= _0x3c52[44]};if(/blood/[_0x3c52[4]](command)){link= _0x3c52[45]};if(/dropwater/[_0x3c52[4]](command)){link= _0x3c52[46]};if(/toxic/[_0x3c52[4]](command)){link= _0x3c52[47]};if(/lava/[_0x3c52[4]](command)){link= _0x3c52[48]};if(/rock/[_0x3c52[4]](command)){link= _0x3c52[49]};if(/bloodglas/[_0x3c52[4]](command)){link= _0x3c52[50]};if(/hallowen/[_0x3c52[4]](command)){link= _0x3c52[51]};if(/darkgold/[_0x3c52[4]](command)){link= _0x3c52[52]};if(/joker/[_0x3c52[4]](command)){link= _0x3c52[53]};if(/wicker/[_0x3c52[4]](command)){link= _0x3c52[54]};if(/firework/[_0x3c52[4]](command)){link= _0x3c52[55]};if(/skeleton/[_0x3c52[4]](command)){link= _0x3c52[56]};if(/blackpink/[_0x3c52[4]](command)){link= _0x3c52[57]};if(/sand/[_0x3c52[4]](command)){link= _0x3c52[58]};if(/glue/[_0x3c52[4]](command)){link= _0x3c52[59]};if(/1917/[_0x3c52[4]](command)){link= _0x3c52[60]};if(/leaves/[_0x3c52[4]](command)){link= _0x3c52[61]};let anu= await maker[_0x3c52[62]](link,q);GarfieldAdd[_0x3c52[67]](m[_0x3c52[63]],{image:{url:anu},caption:`${_0x3c52[64]}${global[_0x3c52[65]]}${_0x3c52[66]}`},{quoted:m})   }
             break
case 'fbdl': case 'fb': case 'facebook': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                GarfieldAdd.sendMessage(m.chat, { video: { url: anu.result.url }, caption: ` ${global.emoji01} Title : ${anu.result.title}`}, { quoted: m })
            }
            break
            case 'emojimix': {
	        if (!text) return replay(`Example : ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await GarfieldAdd.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'image': case 'img': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await GarfieldAdd.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    GarfieldAdd.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'googledrive': { var _0xd526=["\x2A\x45\x6E\x74\x65\x72\x20\x61\x20\x4C\x69\x6E\x6B\x20\x51\x75\x65\x72\x79\x21\x2A","\x67\x6F\x6F\x67\x6C\x65\x64\x72\x69\x76\x65\x2E\x63\x6F\x6D","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x2A\x54\x68\x65\x20\x6C\x69\x6E\x6B\x20\x79\x6F\x75\x20\x70\x72\x6F\x76\x69\x64\x65\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x78\x74\x65\x61\x6D\x2E\x78\x79\x7A\x2F\x64\x6C\x2F\x64\x72\x69\x76\x65\x3F\x75\x72\x6C\x3D","\x26\x41\x50\x49\x4B\x45\x59\x3D","\x72\x69\x79","","\x66\x6F\x72\x6D\x61\x74","\x72\x65\x70\x6C\x79","\x2A\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x46\x69\x6C\x65\x2A","\x63\x61\x74\x63\x68","\x63\x68\x61\x74","\x73\x65\x72\x76\x65\x72\x32","\x72\x65\x73\x75\x6C\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x7A\x69\x70","\x74\x69\x74\x6C\x65","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){throw _0xd526[0]};if(!isUrl(args[0])&&  !args[0][_0xd526[2]](_0xd526[1])){throw _0xd526[3]};anu=  await fetchJson(`${_0xd526[4]}${text}${_0xd526[5]}${global[_0xd526[6]]}${_0xd526[7]}`);m[_0xd526[9]](`${_0xd526[7]}${util[_0xd526[8]](anu)}${_0xd526[7]}`);GarfieldAdd[_0xd526[17]](m[_0xd526[12]],{document: await getBuffer(anu[_0xd526[14]][_0xd526[13]]),mimetype:_0xd526[15],fileName:`${_0xd526[7]}${anu[_0xd526[14]][_0xd526[16]]}${_0xd526[7]}`},{quoted:m})[_0xd526[11]]((_0x14bfx1)=>{return m[_0xd526[9]](_0xd526[10])}) }
break
	        case 'mp4': case 'video': {
                if (!quoted) reply(`Reply Image`)
                if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GarfieldAdd.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GarfieldAdd.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
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
            GarfieldAdd.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
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
            GarfieldAdd.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${` ${global.botname} `}.mp3`}, { quoted : m })
            }
            break
            case 'vn': case 'ptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            GarfieldAdd.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'gif': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) return reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GarfieldAdd.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GarfieldAdd.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'url': {
                reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await GarfieldAdd.downloadAndSaveMediaMessage(quoted)
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
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './X628/remobg-'+getRandom('')
	    localFile = await GarfieldAdd.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './X628/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    GarfieldAdd.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
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
  GarfieldAdd.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  GarfieldAdd.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*🎼 TITLE:* ${data.title} \n*🎼 QUALITY:* ${data.medias[0].quality} \n*🎼 SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    m.reply(`*Failed to download and send media*`)
                })
            }
            break
	    case 'yts': case 'ytsearch': {
                if (!text) return replay(`Example : ${prefix + command} Anime Story Whatsapp`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += ` ${global.emoji01} No : ${no++}\n ${global.emoji01} Type : ${i.type}\n ${global.emoji01} Video ID : ${i.videoId}\n ${global.emoji01} Title : ${i.title}\n ${global.emoji01} Views : ${i.views}\n ${global.emoji01} Duration : ${i.timestamp}\n ${global.emoji01} Uploaded On : ${i.ago}\n ${global.emoji01} Url : ${i.url}\n\n─────────────────\n\n `
                }
                GarfieldAdd.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            case 'device': { var _0xb2dd=["\x2A\x57\x68\x61\x74\x20\x62\x72\x61\x6E\x64\x20\x61\x72\x65\x20\x79\x6F\x75\x20\x6C\x6F\x6F\x6B\x69\x6E\x67\x20\x66\x6F\x72\x2C\x20\x66\x6F\x72\x20\x65\x78\x61\x6D\x70\x6C\x65\x3F\x20\x0A\x20\x64\x65\x76\x69\x63\x65\x20\x48\x75\x61\x77\x65\x69\x20\x6E\x6F\x76\x61\x20\x35\x54\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x78\x2D\x61\x70\x69\x2E\x68\x65\x72\x6F\x6B\x75\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x73\x65\x61\x72\x63\x68\x2F\x67\x73\x6D\x61\x72\x65\x6E\x61\x3F\x71\x75\x65\x72\x79\x3D","","\x2A\uFF24\uFF25\uFF36\uFF29\uFF23\uFF25\x20\uD83C\uDF0C\x2A\x5C\x6E\x5C\x6E\x0D\x0A\x2A\x4E\x61\x6D\x65\x2A\x20\x3A\x20","\x6A\x75\x64\x75\x6C","\x0D\x0A\x2A\x52\x69\x6C\x69\x73\x2A\x20\x3A\x20","\x72\x69\x6C\x69\x73","\x0D\x0A\x2A\x55\x6B\x75\x72\x61\x6E\x2A\x20\x3A\x20","\x75\x6B\x75\x72\x61\x6E","\x0D\x0A\x2A\x4D\x6F\x64\x65\x6C\x2A\x20\x3A\x20","\x74\x79\x70\x65","\x0D\x0A\x2A\x53\x74\x6F\x72\x61\x67\x65\x2A\x20\x3A\x20","\x73\x74\x6F\x72\x61\x67\x65","\x0D\x0A\x2A\x44\x69\x73\x70\x6C\x61\x79\x2A\x20\x3A\x20","\x64\x69\x73\x70\x6C\x61\x79","\x0D\x0A\x2A\x49\x6E\x63\x68\x65\x73\x2A\x20\x3A\x20","\x69\x6E\x63\x68\x69","\x0D\x0A\x2A\x50\x69\x78\x65\x6C\x2A\x20\x3A\x20","\x70\x69\x78\x65\x6C","\x0D\x0A\x2A\x56\x69\x64\x65\x6F\x50\x69\x78\x65\x6C\x2A\x20\x3A\x20","\x76\x69\x64\x65\x6F\x50\x69\x78\x65\x6C","\x0D\x0A\x2A\x52\x61\x6D\x2A\x20\x3A\x20","\x72\x61\x6D","\x0D\x0A\x2A\x43\x68\x69\x70\x73\x65\x74\x2A\x20\x3A\x20","\x63\x68\x69\x70\x73\x65\x74","\x0D\x0A\x2A\x42\x61\x74\x74\x65\x72\x79\x69\x2A\x20\x3A\x20","\x62\x61\x74\x72\x61\x69","\x0D\x0A\x2A\x44\x65\x74\x61\x69\x6C\x2A\x20\x3A\x20","\x64\x65\x74\x61\x69\x6C","\x74\x68\x75\x6D\x62","\x2A\x4E\x6F\x20\x73\x65\x61\x72\x63\x68\x20\x72\x65\x73\x75\x6C\x74\x73\x20\x66\x6F\x75\x6E\x64\x2A","\x72\x65\x70\x6C\x79","\x63\x61\x74\x63\x68","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){throw _0xb2dd[0]};anu=  await fetchJson(`${_0xb2dd[1]}${text}${_0xb2dd[2]}`);reply212= `${_0xb2dd[3]}${anu[_0xb2dd[4]]}${_0xb2dd[5]}${anu[_0xb2dd[6]]}${_0xb2dd[7]}${anu[_0xb2dd[8]]}${_0xb2dd[9]}${anu[_0xb2dd[10]]}${_0xb2dd[11]}${anu[_0xb2dd[12]]}${_0xb2dd[13]}${anu[_0xb2dd[14]]}${_0xb2dd[15]}${anu[_0xb2dd[16]]}${_0xb2dd[17]}${anu[_0xb2dd[18]]}${_0xb2dd[19]}${anu[_0xb2dd[20]]}${_0xb2dd[21]}${anu[_0xb2dd[22]]}${_0xb2dd[23]}${anu[_0xb2dd[24]]}${_0xb2dd[25]}${anu[_0xb2dd[26]]}${_0xb2dd[27]}${anu[_0xb2dd[28]]}${_0xb2dd[2]}`;anu=  await getBuffer(anu[_0xb2dd[29]]);GarfieldAdd[_0xb2dd[34]](m[_0xb2dd[33]],{image:anu,caption:`${_0xb2dd[2]}${reply212}${_0xb2dd[2]}`},{quoted:m})[_0xb2dd[32]]((_0x7359x1)=>{return m[_0xb2dd[31]](_0xb2dd[30])}) }
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
                  GarfieldAdd.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
                  GarfieldAdd.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break

            case 'delete': case 'del': {
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                GarfieldAdd.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} ZENOI `)
                let getGroups = await GarfieldAdd.groupFetchAllParticipating()
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
                                    displayText: 'Menu 🎉',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner 🦋',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「  ${global.botname}  © 」\n\n${text}`
                      GarfieldAdd.send5ButImg(i, txt, ` ${global.botname} `, global.thumb, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case 'wp': case 'wattpad': case 'wattpadsearch': {

if (!text) throw 'Masukkan query' 

                

                let urlnya = text

	            xa.Wattpad(urlnya)

	            .then(async(result) => {	  	                                	                      	            		                  			    				

				let link = await getBuffer(result[0].thumb)

                GarfieldAdd.sendMessage(m.chat, { image: link, caption: `${result[0].description}\nTitle: ${result[0].judul}\nAuthor: DRIPS\nDibaca: ${result[0].dibaca}\nDivote: ${result[0].divote}\nBab: ${result[0].bab}\nWaktu: ${result[0].waktu}\nUrl: ${result[0].url}` }, { quoted: m })                                              

            }).catch((err) => m.reply(`*feature error*`))

            }		

			break
            case 'attp': {

           if (!text) throw `*Example : ${prefix + command} drips hi*`
           
            
           await GarfieldAdd.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, '𝖦𝖠𝖱𝖥𝖨𝖤𝖫𝖣 𝗏8.0', m, {asSticker: true}).catch((err) => m.reply('*error while sending sticker*'))
         }
         break
case 'attp4': {

           if (!text) throw `*Example : ${prefix + command} drips hi*`
           await GarfieldAdd.sendMedia(m.chat, `https://api.xteam.xyz/attp?file&teks=${text}`, '𝖦𝖠𝖱𝖥𝖨𝖤𝖫𝖣 𝗏8.0', m, {asSticker: true}).catch((err) => m.reply('*error while sending sticker*'))
                     }
                     break
case 'ttp1': {

if (!text) return m.reply(`*NEED TEXT*`)

            
GarfieldAdd.sendMessage(m.chat, { sticker : { url : `https://cililitan.herokuapp.com/api/texttopng?teks=${text}`}, quoted: m }).catch((err) => m.reply('*error while sending sticker*'))
} 
break
case 'ttp2': {

           if (!text) throw `Example : ${prefix + command} text`
           await GarfieldAdd.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, '𝖦𝖠𝖱𝖥𝖨𝖤𝖫𝖣', m, {asSticker: true})
         }
break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Hasindu `)
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
                                    displayText: 'Menu 🎉',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner 🦋',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「  ${global.botname}  」\n\n${text}`
                      GarfieldAdd.send5ButImg(yoi, txt, ` ${global.botname} `, global.thumb, btn)
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
                    teks += ` ${global.emoji01} @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━ ${global.emoji01} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}  ${global.emoji01} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                GarfieldAdd.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await GarfieldAdd.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The Message You Replied To Does Not Contain A Reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': case 'pclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `🐤 *Name :* ${nama}\n🐤 *User :* @${i.split('@')[0]}\n🐤 *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 GarfieldAdd.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': case 'gclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await GarfieldAdd.groupMetadata(i)
                     teks += `🐤 *Name :* ${metadata.subject}\n🐤 *Owner :* @${metadata.owner.split('@')[0]}\n🐤 *ID :* ${metadata.id}\n🐤 *Made :* ${moment(metadata.creation * 1000).tz('Asia/Colombo').format('DD/MM/YYYY HH:mm:ss')}\n🐤 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 GarfieldAdd.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    GarfieldAdd.sendText(m.chat, 'Online List:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + command}`)
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await GarfieldAdd.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 30) return reply('Maximum 30 Seconds!')
                let media = await quoted.download()
                let encmedia = await GarfieldAdd.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
case 'meme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
reply(mess.wait)
mee = await GarfieldAdd.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await GarfieldAdd.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
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
                    case 'google': {
                if (!text) return reply(`Example : ${prefix + command} google Sri Lanka`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search Title : ${text}\n\n`
                for (let g of res) {
                teks += ` *Title* : ${g.title}\n`
                teks += ` *Description* : ${g.snippet}\n`
                teks += ` *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                	    case 'needaudio': {
                let { yta } = require('./lib/y2mate')
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                GarfieldAdd.sendImage(m.chat, media.thumb, '```Title``` : *' + media.title + '*\n ```File Size``` : *' + media.filesizeF + '*\n```URL``` : *' + isUrl(text) + '*\n```Quality``` : *High*\n', m)
                GarfieldAdd.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.m4a` }, { quoted: m })
            }
            break
               case 'readmore': {
            
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} *නාකි මයින මැරි*`   
                 anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               m.reply(`${anu.result}`)
            }
            break
            case 'needvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) throw 'Reply Message'
                if (!m.quoted.isBaileys) throw `Can Only Reply To Meessages From Bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw`Maybe The Message You Replied Does Not Contain The Video Search Result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                GarfieldAdd.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: '```Title``` : *' + media.title + '*\n ```File Size``` : *' + media.filesizeF + '*\n```URL``` : *' + isUrl(text) + '*\n```Quality``` : *High*\n' }, { quoted: m })
            }
            break
            case 'apk': case 'apkmod': case 'apkdl': {      
  if (!text) return m.reply(`Use${prefix + command} vpn`) 
  let noh = require('./lib/myfunc2')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `CATEGORY: ${i.kategori}\nPUBLISH: ${i.upload_date}\nINFORMATION: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  GarfieldAdd.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
       footer: `©ɢᴀʀꜰɪᴇʟᴅ ʙᴏᴛ ʟᴀᴛᴇꜱᴛ`,
       title: "*▊▊▊ APK DOWNLOAD ▊▊▊*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    m.reply(`*${text} Not found*`)
                })
            }
            break
case 'donlod': {                

                if (!text) return m.reply(`Use${prefix + command} whatsapp`)
                if (!isUrl(args[0]) && !args[0].includes('rexdl.com')) throw '*The link you provided is not valid*'
           let rex = require('./lib/ApkDown.js')
           rex.ApkDown(`${text}`).then(async (anu) => {        
           if (anu[0].size.split('MB')[0] >= 150) return m.reply('*File Over Limit* '+util.format(anu))
           for (let i of anu) {    
           linkye = `*▊▊▊APK DOWNLOAD▊▊▊*\n\n* ${global.emoji02} TITLE:* ${i.title}\n* ${global.emoji02} UPDATE:* ${i.up}\n* ${global.emoji02} VERSION:* ${i.vers}\n* ${global.emoji02} FILESIZE:* ${i.size}\n* ${global.emoji02} URL:* \n* ${global.emoji02} DESCRIPTION:* ${i.desc}\n\n*ᴄᴏᴅᴇᴅ ʙʏ ᴛʜᴀʀɪɴᴅᴜ ʟɪʏᴀɴᴀɢᴇ*`         
                GarfieldAdd.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                GarfieldAdd.sendMessage(m.chat, {document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}`}, {quoted:m})  
                }  
                }).catch((err) => {
                    m.reply(`*Failed When Downloading Media and Sending Files*`)
                }) 
                }                          
                break
case 'tagme': {
GarfieldAdd.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}

break
       case 'wiki': case 'wikipedia': {
                if (!text) throw `Example : ${prefix + command} Sri Lanka`
                anu = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${global.lolkey}&query=${text}`)
                m.reply(`*Wikipedia 🦋*\n\n${anu.result}`)
            }
        break
        case 'covidglobal': {	                        
					ngtod = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${global.lolkey}`)
					m.reply(`*Total corona global*\n*Positif* : ${ngtod.result.positif}\n*Sembuh* : ${ngtod.result.sembuh}\n*Dirawat* : ${ngtod.result.dirawat}\n*Meninggal* : ${ngtod.result.meninggal}`)
					}
	    break
        case 'jadwaltv': {				  
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                      
					ngtod = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${global.lolkey}`)
					m.reply(`*Jadwal Tv Hari Ini*\n*ANTV* : ${ngtod.result.antv}\n*GTV* : ${ngtod.result.gtv}\n*INDOSIAR* : ${ngtod.result.indosiar}\n*KOMPASTV* : ${ngtod.result.kompastv}\n*INEWSTV* : ${ngtod.result.inewstv}\n*MNCTV* : ${ngtod.result.mnctv}\*RCTI* : ${ngtod.result.rcti}\n*SCTV* : ${ngtod.result.sctv}\n*TRANSTV* : ${ngtod.result.transtv}\n*TVRI* : ${ngtod.result.tvri}\n*TRANS7* : ${ngtod.result.trans7}\n*NETTV* : ${ngtod.result.nettv}`)
					}
	    break
        case 'cuaca': {
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
				if (!text) throw `Example : ${prefix + command} Jawatimur`
				
            
					anu = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=${global.lolkey}`)
					m.reply(`*Tempat* : ${anu.result.tempat}\n*Cuaca* : ${anu.result.cuaca}\n*Angin* ${anu.result.angin}\n*Kelembapan* : ${anu.result.kelembapan}\n*Suhu* ${anu.result.suhu}\n*Permukaan_Laut* : ${anu.result.permukaan_laut}\n*Latitude* : ${anu.result.latitude}\n*Longitude* : ${anu.result.longitude}`)
					}
        break

            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                GarfieldAdd.sendMessage(m.chat, { image: { url: result }, caption: ' ${global.emoji01} Media Url : '+result }, { quoted: m })
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
						"displayText": "Watch 🎥",
						"url": `${myweb}`
						}
					}
				]
				await GarfieldAdd.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
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
						"displayText": "Follow Us ℹ️ ",
						"url": `${myweb}`
						}
					}
				]
				await GarfieldAdd.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
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
						"displayText": "Follow Us ℹ️ ",
						"url": `${myweb}`
						}
					}
				]
				await GarfieldAdd.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                reply(mess.wait)
                GarfieldAdd.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generated Random ' + command }, { quoted: m })
            }
            break
	    case 'couplepp':  case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                GarfieldAdd.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                GarfieldAdd.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffee`,
                    footer: `© Coded by Tharindu Liyanage`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
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
                    caption: ` ${global.emoji01} Title : ${result.title}\n ${global.emoji01} Category : ${result.type}\n ${global.emoji01} Detail : ${result.source}\n ${global.emoji01} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `© Coded by Tharindu Liyanage`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
             case 'wikimedia': {
                if (!text) return reply(`Enter Query Title`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `*${global.emoji02} Title :* ${result.title}\n*${global.emoji02} Source :* ${result.source}\n*${global.emoji02} Media URL :* ${result.image}`,
                    footer: ` ${global.botname} ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢᴀʀꜰɪᴇʟᴅ ʙᴏᴛ `,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
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
                GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
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
                GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matri': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) return reply(`Enter Text, Example : ${prefix + command} Xeon`)
                reply(mess.wait)
                GarfieldAdd.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) return reply(`Example : ${prefix + command} 94711502119`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Phone Number :* ${anu.message.nomer_hp}\n ${global.emoji01} *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n ${global.emoji01} *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n ${global.emoji01} *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) return reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Dream :* ${anu.message.mimpi}\n ${global.emoji01} *Meaning :* ${anu.message.arti}\n ${global.emoji01} *Solution :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Tharindu 8, 9, 2005, කැමති නමක් දාන්න 🥲, 16, 09, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Your Name :* ${anu.message.nama_anda.nama}\n ${global.emoji01} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n ${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan.nama}\n ${global.emoji01} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n ${global.emoji01} *Results :* ${anu.message.result}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Tharindu 8, 9, 2005, කැමති නමක් දාන්න 🥲, 16, 09, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Your Name :* ${anu.message.nama_anda.nama}\n ${global.emoji01} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n ${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan.nama}\n ${global.emoji01} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n ${global.emoji01} *Results :* ${anu.message.result}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
          
            case 'get': {

            

                if (!text) throw 'Enter a Link' 

                let bicil = require('@bochilteam/scraper')

                let urlnya = text

	            bicil.savefrom(urlnya)

	            .then(async(result) => {	  	                                	                      	            

		        for(let i of result.url) {		

		        if(i.url.includes('mp4')){		           			    				

				let link = await getBuffer(i.url)

                GarfieldAdd.sendMessage(m.chat, { video: link, caption: `*quality ${i.subname}*` }, { quoted: m })                  

               }

              }

            }).catch((err) => m.reply(`*Sorry Future Error*`))

            }		

			break
            case 'years': {
                if (!text) throw `Example : ${prefix + command} X, 08, 09, 2005, Y,`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Husband's Name :* ${anu.message.suami.nama}\n ${global.emoji01} *Husband Born :* ${anu.message.suami.tgl_lahir}\n ${global.emoji01} *Wife's Name :* ${anu.message.istri.nama}\n ${global.emoji01} *Born Wife :* ${anu.message.istri.tgl_lahir}\n ${global.emoji01} *Results :* ${anu.message.result}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Zenoi 8, 9, 2005, කැමති නමක් දාන්න 🥲, 16, 09, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Your Name :* ${anu.message.nama_anda.nama}\n ${global.emoji01} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n ${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan.nama}\n ${global.emoji01} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n ${global.emoji01} *Positive Side :* ${anu.message.sisi_positif}\n ${global.emoji01} *Negative Side :* ${anu.message.sisi_negatif}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} කැමති නමක් `
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Name :* ${anu.message.nama}\n ${global.emoji01} *Meaning :* ${anu.message.arti}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} කැමති නමක් , 8, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Name :* ${anu.message.nama}\n ${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n ${global.emoji01} *Life Path :* ${anu.message.life_path}\n ${global.emoji01} *Destiny :* ${anu.message.destiny}\n ${global.emoji01} *Destiny Desire :* ${anu.message.destiny_desire}\n ${global.emoji01} *Personality :* ${anu.message.personality}\n ${global.emoji01} *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} කැමති නමක් |Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendImage(m.chat,  anu.message.gambar, ` ${global.emoji01} *Your Name :* ${anu.message.nama_anda}\n ${global.emoji01} *Couple Name :* ${anu.message.nama_pasangan}\n ${global.emoji01} *Positive Side :* ${anu.message.sisi_positif}\n ${global.emoji01} *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Wedding Date :* ${anu.message.tanggal}\n ${global.emoji01} *Characteristics :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Born :* ${anu.message.hari_lahir}\n ${global.emoji01} *Business :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Born :* ${anu.message.hari_lahir}\n ${global.emoji01} *Sustenance :* ${anu.message.rejeki}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Born :* ${anu.message.hari_lahir}\n ${global.emoji01} *Profession :* ${anu.message.pekerjaan}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Analysis :* ${anu.message.analisa}\n ${global.emoji01} *Root Number :* ${anu.message.angka_akar}\n ${global.emoji01} *Nature :* ${anu.message.sifat}\n ${global.emoji01} *Element :* ${anu.message.elemen}\n ${global.emoji01} *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Analysis :* ${anu.message.analisa}\n ${global.emoji01} *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendImage(m.chat, anu.message.image, ` ${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n ${global.emoji01} *Tarot Symbol :* ${anu.message.simbol_tarot}\n ${global.emoji01} *Meaning :* ${anu.message.arti}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} කැමති නමක් , 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Name :* ${anu.message.nama}\n ${global.emoji01} *Born :* ${anu.message.tahun_lahir}\n ${global.emoji01} *Gender :* ${anu.message.jenis_kelamin}\n ${global.emoji01} *Kua Number :* ${anu.message.angka_kua}\n ${global.emoji01} *Group :* ${anu.message.kelompok}\n ${global.emoji01} *Character :* ${anu.message.karakter}\n ${global.emoji01} *Good Sector :* ${anu.message.sektor_baik}\n ${global.emoji01} *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n ${global.emoji01} *When Challenged :* ${anu.message.kala_tinantang}\n ${global.emoji01} *Info :* ${anu.message.info}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n ${global.emoji01} *Results :* ${anu.message.result}\n ${global.emoji01} *Info :* ${anu.message.info}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Day Of Birth :* ${anu.message.hari_lahir}\n ${global.emoji01} *Date Of Birth :* ${anu.message.tgl_lahir}\n ${global.emoji01} *Fateful Day :* ${anu.message.hari_naas}\n ${global.emoji01} *Info :* ${anu.message.catatan}\n ${global.emoji01} *Notes :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Day Of Birth :* ${anu.message.hari_lahir}\n ${global.emoji01} *Date Of Birth :* ${anu.message.tgl_lahir}\n ${global.emoji01} *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Day Of Birth :* ${anu.message.hari_lahir}\n ${global.emoji01} *Date Of Birth :* ${anu.message.tgl_lahir}\n ${global.emoji01} *Sustenance Direction :* ${anu.message.arah_rejeki}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} කැමති නමක් , 8, 9, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Name :* ${anu.message.nama}\n ${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n ${global.emoji01} *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n ${global.emoji01} *Results :* ${anu.message.result}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Date :* ${anu.message.tanggal}\n ${global.emoji01} *Number Of Neptune :* ${anu.message.jumlah_neptu}\n ${global.emoji01} *Day Character :* ${anu.message.watak_hari}\n ${global.emoji01} *Dragon Day :* ${anu.message.naga_hari}\n ${global.emoji01} *Good Hour :* ${anu.message.jam_baik}\n ${global.emoji01} *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} කැමති නමක් , 8, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Name :* ${anu.message.nama}\n ${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n ${global.emoji01} *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'age': {
                if (!text) throw `Example : ${prefix + command} කැමති නමක් , 8, 9, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Name :* ${anu.message.nama}\n ${global.emoji01} *Born :* ${anu.message.tgl_lahir}\n ${global.emoji01} *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Date :* ${anu.message.tgl_memancing}\n ${global.emoji01} *Results :* ${anu.message.result}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'amor': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Results :* ${anu.message.result}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
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
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Zodiac :* ${anu.message.zodiak}\n ${global.emoji01} *Number :* ${anu.message.nomor_keberuntungan}\n ${global.emoji01} *Aroma :* ${anu.message.aroma_keberuntungan}\n ${global.emoji01} *Planet :* ${anu.message.planet_yang_mengitari}\n ${global.emoji01} *Flower :* ${anu.message.bunga_keberuntungan}\n ${global.emoji01} *Color :* ${anu.message.warna_keberuntungan}\n ${global.emoji01} *Stone :* ${anu.message.batu_keberuntungan}\n ${global.emoji01} *Element :* ${anu.message.elemen_keberuntungan}\n ${global.emoji01} *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n ${global.emoji01} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                GarfieldAdd.sendText(m.chat, ` ${global.emoji01} *Results :* ${anu.message}`, m)
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
                    GarfieldAdd.sendMedia(m.chat, anu.caption.profile_hd, '', ` ${global.emoji01} Full Name : ${anu.caption.full_name}\n ${global.emoji01} User Name : ${anu.caption.user_name}\n ${global.emoji01} ID ${anu.caption.user_id}\n ${global.emoji01} Following : ${anu.caption.followers}\n ${global.emoji01} Followers : ${anu.caption.following}\n ${global.emoji01} Bussines : ${anu.caption.bussines}\n ${global.emoji01} Professional : ${anu.caption.profesional}\n ${global.emoji01} Verified : ${anu.caption.verified}\n ${global.emoji01} Private : ${anu.caption.private}\n ${global.emoji01} Bio : ${anu.caption.biography}\n ${global.emoji01} Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} npm scrape-primbon`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(` ${global.emoji01} Name : ${anu.name}\n ${global.emoji01} Version : ${Object.keys(anu.versions)}\n ${global.emoji01} Created : ${tanggal(anu.time.created)}\n ${global.emoji01} Modified : ${tanggal(anu.time.modified)}\n ${global.emoji01} Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n ${global.emoji01} Description : ${anu.description}\n ${global.emoji01} Homepage : ${anu.homepage}\n ${global.emoji01} Keywords : ${anu.keywords}\n ${global.emoji01} Author : ${anu.author.name}\n ${global.emoji01} License : ${anu.license}\n ${global.emoji01} Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktokd': case 'tiktoknowm': {
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
                GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
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
                GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
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
                let msg = await GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
                GarfieldAdd.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) return reply(`No Query Url!`)
                reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) GarfieldAdd.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    GarfieldAdd.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
		//Backup, for example, the video above doesn't come out\\
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                GarfieldAdd.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joo': case 'jooxdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await GarfieldAdd.sendImage(m.chat, anu.result.img, ` ${global.emoji01} Title : ${anu.result.lagu}\n ${global.emoji01} Album : ${anu.result.album}\n ${global.emoji01} Singer : ${anu.result.penyanyi}\n ${global.emoji01} Publish : ${anu.result.publish}\n ${global.emoji01} Lyrics :\n${anu.result.lirik.result}`, m)
                GarfieldAdd.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await GarfieldAdd.sendImage(m.chat, anu.result.thumb, ` ${global.emoji01} Title : ${anu.result.title}\n ${global.emoji01} Url : ${isUrl(text)[0]}`)
                GarfieldAdd.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
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
                GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
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
                let msg = await GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
                GarfieldAdd.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        
	        case 'pindl': case 'pinterestdl': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                GarfieldAdd.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 320kbps`, buttonText: {displayText: 'Audio 🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: 'Video 📽️'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
* ${global.emoji01} Title* : ${anu.title}
* ${global.emoji01} Author* : ${anu.author.name}
* ${global.emoji01} Like* : ${anu.like}
* ${global.emoji01} Caption* : ${anu.caption}
* ${global.emoji01} URL* : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
			footer: `© Coded by Tharindu Liyanage`,
			buttons,
			headerType: 4
		    }
		    GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        GarfieldAdd.sendMessage(m.chat, { image: { url }, caption: ` ${global.emoji01} Title : ${anu.title}\n ${global.emoji01} Author : ${anu.author.name}\n ${global.emoji01} Like : ${anu.like}\n ${global.emoji01} Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) return reply(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		GarfieldAdd.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
		if (!text) return reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		GarfieldAdd.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		reply(mess.wait)
		GarfieldAdd.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		GarfieldAdd.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		GarfieldAdd.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		GarfieldAdd.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
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
		GarfieldAdd.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
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
                let media = await GarfieldAdd.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                GarfieldAdd.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
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
            //Coded by Tharindu Liyanage
               
            //Coded by Tharindu Liyanage
            
            
            
            
            
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'textmaker': {
if (args.length < 1) return reply(`Example :\n${prefix + command} Name`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
GarfieldAdd.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
GarfieldAdd.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
            case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                reply(mess.wait)
                GarfieldAdd.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generated Random ' + command }, { quoted: m })
            }
            break
	    case 'couplepp':  case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                GarfieldAdd.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                GarfieldAdd.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                GarfieldAdd.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
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
                GarfieldAdd.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `🐤 *Name :* ${i.nama}\n🐤 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
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
                    { buttonId: 'Start', buttonText: { displayText: 'Start  ${global.emoji02}' }, type: 1 }
                ]
                GarfieldAdd.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await GarfieldAdd.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, ` ${global.botname} `, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start  ${global.emoji02}' }, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await GarfieldAdd.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, ` ${global.botname} `, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip ⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, ` ${global.botname} `, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await GarfieldAdd.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, ` ${global.botname} `, m)
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
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, ` ${global.botname} `, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start  ${global.emoji02}' }, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await GarfieldAdd.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip ⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, ` ${global.botname} `, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await GarfieldAdd.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, ` ${global.botname} `, m)
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
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, ` ${global.botname} `, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return replay(`${mess.owner}`)
                GarfieldAdd.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return replay(`${mess.owner}`)
                GarfieldAdd.public = false
                reply('Successful Change To Self Usage')
            }
            break
       case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						GarfieldAdd.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
				case 'waifu': case 'loli':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					GarfieldAdd.sendImage(m.chat, data.url, mess.success, m)
					})
					break
					break
     
case "setmenuxxx": 
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
                    case 'bug': case 'report': {
                    	if(!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
                    	GarfieldAdd.sendMessage(`94711502119@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break
                    

//Coded by Tharindu Liyanage
case 'me':
case 'who is me':
case 'who':
			const _0xb2e191=_0x2562;(function(_0x1a767e,_0x407f85){const _0x261436=_0x2562,_0x5c6d81=_0x1a767e();while(!![]){try{const _0xd054ac=parseInt(_0x261436(0x149))/0x1+parseInt(_0x261436(0x141))/0x2*(-parseInt(_0x261436(0x144))/0x3)+parseInt(_0x261436(0x146))/0x4*(-parseInt(_0x261436(0x13b))/0x5)+-parseInt(_0x261436(0x153))/0x6+parseInt(_0x261436(0x14d))/0x7+-parseInt(_0x261436(0x145))/0x8*(-parseInt(_0x261436(0x155))/0x9)+parseInt(_0x261436(0x15a))/0xa;if(_0xd054ac===_0x407f85)break;else _0x5c6d81['push'](_0x5c6d81['shift']());}catch(_0x2c8268){_0x5c6d81['push'](_0x5c6d81['shift']());}}}(_0x39de,0xec5b6));if(!text)return replay(_0xb2e191(0x14f)+(prefix+command));const sarcasm=new Array();sarcasm[0x0]='*ලිංගික\x20හැසිරීමකදි\x20හෝ\x20මුත්‍රා\x20කිරීමේදී\x20වේදනාවට\x20පත්වන්නෙක්\x20🐖*',sarcasm[0x1]='*HIV\x20ආසාදිතයෙක්\x20🐮*',sarcasm[0x2]=_0xb2e191(0x13e),sarcasm[0x3]='*පිස්සෙක\x20🌼*',sarcasm[0x4]=_0xb2e191(0x151),sarcasm[0x5]=_0xb2e191(0x14e),sarcasm[0x6]=_0xb2e191(0x13d),sarcasm[0x6]=_0xb2e191(0x15d),sarcasm[0x7]=_0xb2e191(0x158),sarcasm[0x8]=_0xb2e191(0x139),sarcasm[0xa]=_0xb2e191(0x150),sarcasm[0xb]=_0xb2e191(0x148),sarcasm[0xc]=_0xb2e191(0x14a),sarcasm[0xd]=_0xb2e191(0x157),sarcasm[0xe]=_0xb2e191(0x13f),sarcasm[0xf]='*පෙට්‍රල්\x20ජාවාරම්කාරයෙක්\x20🐖*',sarcasm[0x10]='*බැසිල්ගෙ\x20කපුට\x20නාවන\x20කෙනා\x20🦨*',sarcasm[0x11]=_0xb2e191(0x140),sarcasm[0x14]='*බෝ\x20ගහක්\x20🦢*',sarcasm[0x15]=_0xb2e191(0x13f),sarcasm[0x16]=_0xb2e191(0x152),sarcasm[0x17]=_0xb2e191(0x142),sarcasm[0x18]=_0xb2e191(0x13c),sarcasm[0x19]=_0xb2e191(0x15c),sarcasm[0x1a]=_0xb2e191(0x14c),sarcasm[0x1b]=_0xb2e191(0x159),sarcasm[0x1c]=_0xb2e191(0x138),sarcasm[0x1d]='*Zombie\x20කෙනෙක්\x20\x20🧟‍♂️*',sarcasm[0x1e]=_0xb2e191(0x154),sarcasm[0x1f]=_0xb2e191(0x15b);const refi=sarcasm[Math[_0xb2e191(0x156)](Math[_0xb2e191(0x143)]()*sarcasm[_0xb2e191(0x147)])];function _0x2562(_0x38f6e8,_0x50acb0){const _0x39de8a=_0x39de();return _0x2562=function(_0x256248,_0x3960c2){_0x256248=_0x256248-0x138;let _0x4c544e=_0x39de8a[_0x256248];return _0x4c544e;},_0x2562(_0x38f6e8,_0x50acb0);}GarfieldAdd[_0xb2e191(0x13a)](from,{'text':'*'+pushname+_0xb2e191(0x14b)+refi},{'quoted':m});function _0x39de(){const _0x45d7e0=['\x20ඔයා*\x20','*සිෆිලිස්\x20ආසාදිතයෙක්\x20(RIP)\x20💐*','13535879YCnafL','*ලිංගික\x20බෙලහීනතාවයෙන්\x20පෙලෙන්නෙක්\x20🦒*','Tag\x20Someone,\x20Example\x20:\x20','*හොරෙක්\x20🎗️*','*අර්බුදයට\x20වගකිය\x20යුත්තා\x20👴🏻*','*පෙට්‍රල්\x20ජාවාරම්කාරයෙක්\x20🐖*','10296168IWVINw','*මම\x20වගේ\x20program\x20එකක්\x20👽*','405cbEXOW','floor','*බෝම්බයක්\x20💣*','*පිරිමි\x20ගණිකාවක්\x20👤*','*ට්‍රයිකොමෝනියාසිස්\x20ආසාදිතයෙක්(RIP)\x20🏳️*','19785870WGTqYE','*මැරෙන්න\x20හිතුනට\x20කවදාවත්\x20මැරෙන්න\x20එපා\x20👽*','*ගොනෝරියා\x20ආසාදිතයෙක්\x20💧*','*කුක්කු\x20පෙරේතයෙක්\x20(කිරි\x20පිටි)🐽*','*පුරුෂ\x20යට\x20ඇඳුම්\x20හොරෙක්\x20🩳','*නාකි\x20මයිනගෙ\x20ලඟම\x20ඥාතියෙක්\x20🐧*','sendMessage','320zdAGps','*HIV\x20ආසාදිතයෙක්\x20💦*','*සමලිංගිකයෙක්\x20🏳️‍🌈*','*ලිංගික\x20ව්‍යවසායකයෙක්*','*ලිංගික\x20ව්‍යවසායකයෙක්\x20💧*','*තෙල්\x20නැවක\x20අයිතිකාරයෙක්\x20🐱*','1246UNFeQh','*වැඩිපුර\x20පිහිටා\x20ඇති\x20ලිංගික\x20අවයව\x20නිසා\x20මානසික\x20පීඩනයෙක්\x20පෙලෙන්නෙක්\x20🐎*','random','6279WoVuOF','66472dkcUUR','53888BfsWfa','length','*මුට\x20රිලව\x20කිව්වත්\x20එකයි\x20රිලවට\x20මුගෙ\x20නම\x20කිව්වත්\x20එකයි\x20🐒*','564104IrImhu','*මහබැංකුව\x20හොරාකන්න\x20රනිල්ට\x20උදව්\x20කරපු\x20කෙනා\x20🐗*'];_0x39de=function(){return _0x45d7e0;};return _0x39de();}
					break
					case 'charactercheck':
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @ZENOI`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','p, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					GarfieldAdd.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
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
      case 'hot': {function _0x4f53(_0x47b215,_0x1c2961){const _0x3dc965=_0x3dc9();return _0x4f53=function(_0x4f530c,_0x7e2068){_0x4f530c=_0x4f530c-0xf4;let _0x488ab3=_0x3dc965[_0x4f530c];return _0x488ab3;},_0x4f53(_0x47b215,_0x1c2961);}const _0x4d9e0f=_0x4f53;(function(_0x31c539,_0x4d4a98){const _0x188895=_0x4f53,_0x5a0573=_0x31c539();while(!![]){try{const _0xeceef4=-parseInt(_0x188895(0xf4))/0x1*(parseInt(_0x188895(0x103))/0x2)+parseInt(_0x188895(0xff))/0x3*(parseInt(_0x188895(0x100))/0x4)+-parseInt(_0x188895(0xf7))/0x5+-parseInt(_0x188895(0xfd))/0x6+-parseInt(_0x188895(0x108))/0x7+parseInt(_0x188895(0x109))/0x8*(parseInt(_0x188895(0x10a))/0x9)+parseInt(_0x188895(0xf5))/0xa*(parseInt(_0x188895(0x105))/0xb);if(_0xeceef4===_0x4d4a98)break;else _0x5a0573['push'](_0x5a0573['shift']());}catch(_0x14c653){_0x5a0573['push'](_0x5a0573['shift']());}}}(_0x3dc9,0x1a711));if(!m[_0x4d9e0f(0xf9)])return replay(''+mess[_0x4d9e0f(0xfb)]);let member=participants[_0x4d9e0f(0x102)](_0x3a69f7=>_0x3a69f7['id']),me=m[_0x4d9e0f(0x107)],jodoh=member[Math[_0x4d9e0f(0x101)](Math[_0x4d9e0f(0xf8)]()*member[_0x4d9e0f(0xfe)])],jawab=_0x4d9e0f(0x106)+command+_0x4d9e0f(0x10b),ments=[me,jodoh],buttons=[{'buttonId':'👀','buttonText':{'displayText':_0x4d9e0f(0x104)+command+_0x4d9e0f(0xfa)},'type':0x1}];function _0x3dc9(){const _0x5c0598=['chat','212855iyYIvU','random','isGroup','\x20\x20is\x20his\x20father\x20💩','group','Coded\x20by\x20Tharindu\x20Liyanage','705864RLXMzn','length','60690IOtTAu','24dmzCCX','floor','map','117590FJTYEE','Yes\x20','11RGhDAa','The\x20*','sender','139370LxPEAY','16XizJnl','611352SUpyyu','*\x20Here\x20Is\x20Your\x20dad','1rROadB','899890qEXxNg'];_0x3dc9=function(){return _0x5c0598;};return _0x3dc9();}await GarfieldAdd['sendButtonText'](m[_0x4d9e0f(0xf6)],buttons,jawab,_0x4d9e0f(0xfc),m,{'mentions':ments}); }
            break
      case 'thanks':
      case 'tnx':
      case 'තෑන්ක්ස්':
      case 'බොහොම ස්තූතියි':
      case 'thank':
      case 'tnks':{const _0x98aa19=_0x2c7f;(function(_0x40c16e,_0x1dea76){const _0x564e2f=_0x2c7f,_0x12a6f4=_0x40c16e();while(!![]){try{const _0x44f8fb=-parseInt(_0x564e2f(0xb5))/0x1*(parseInt(_0x564e2f(0xa8))/0x2)+parseInt(_0x564e2f(0xb1))/0x3*(parseInt(_0x564e2f(0xad))/0x4)+parseInt(_0x564e2f(0xa7))/0x5+-parseInt(_0x564e2f(0xaf))/0x6*(parseInt(_0x564e2f(0xab))/0x7)+-parseInt(_0x564e2f(0xb3))/0x8*(-parseInt(_0x564e2f(0xa9))/0x9)+-parseInt(_0x564e2f(0xa5))/0xa+parseInt(_0x564e2f(0xae))/0xb;if(_0x44f8fb===_0x1dea76)break;else _0x12a6f4['push'](_0x12a6f4['shift']());}catch(_0x7e235c){_0x12a6f4['push'](_0x12a6f4['shift']());}}}(_0x23bd,0x640ab));function _0x2c7f(_0x1ca481,_0x2824c5){const _0x23bd12=_0x23bd();return _0x2c7f=function(_0x2c7f74,_0x55e3ec){_0x2c7f74=_0x2c7f74-0xa5;let _0x495fde=_0x23bd12[_0x2c7f74];return _0x495fde;},_0x2c7f(_0x1ca481,_0x2824c5);}if(!m[_0x98aa19(0xb4)])return replay(''+mess['group']);let member=participants['map'](_0x417ee4=>_0x417ee4['id']),me=m[_0x98aa19(0xaa)],jodoh=member[Math[_0x98aa19(0xb2)](Math[_0x98aa19(0xb0)]()*member[_0x98aa19(0xac)])],jawab='*You\x20are\x20welcome\x20💙*',ments=[me,jodoh],buttons=[{'buttonId':'👀','buttonText':{'displayText':'💙'},'type':0x1}];await GarfieldAdd[_0x98aa19(0xa6)](m[_0x98aa19(0xb6)],buttons,jawab,'Coded\x20by\x20Tharindu\x20Liyanage',m,{'mentions':ments});function _0x23bd(){const _0x138f94=['7183422MWTeHV','sender','678881Twpivr','length','136ODmLVx','1222408BnPNfc','30ooIkUn','random','12909jFeLig','floor','8PzvpnZ','isGroup','170nLVCTw','chat','6750750IWeKhL','sendButtonText','3006065FWlEdH','1024yJHHCf'];_0x23bd=function(){return _0x138f94;};return _0x23bd();} }
            break
            
            case 'list': case 'menu': case 'bot' : case 'alive' :
           var _0x6fa0c0=_0x1176;function _0x1176(_0x1574a6,_0x36ca75){var _0x195a3f=_0x195a();return _0x1176=function(_0x117670,_0x3698d4){_0x117670=_0x117670-0x1d8;var _0x2ba620=_0x195a3f[_0x117670];return _0x2ba620;},_0x1176(_0x1574a6,_0x36ca75);}(function(_0x5ec9c8,_0x1df6aa){var _0x13fb6b=_0x1176,_0x1485f6=_0x5ec9c8();while(!![]){try{var _0x2c120b=parseInt(_0x13fb6b(0x1e7))/0x1+-parseInt(_0x13fb6b(0x1ea))/0x2*(parseInt(_0x13fb6b(0x1f4))/0x3)+parseInt(_0x13fb6b(0x1da))/0x4*(-parseInt(_0x13fb6b(0x1e0))/0x5)+parseInt(_0x13fb6b(0x1d9))/0x6*(-parseInt(_0x13fb6b(0x1f5))/0x7)+-parseInt(_0x13fb6b(0x1ef))/0x8+parseInt(_0x13fb6b(0x1d8))/0x9*(parseInt(_0x13fb6b(0x1fe))/0xa)+parseInt(_0x13fb6b(0x1f8))/0xb*(parseInt(_0x13fb6b(0x1e8))/0xc);if(_0x2c120b===_0x1df6aa)break;else _0x1485f6['push'](_0x1485f6['shift']());}catch(_0x570efd){_0x1485f6['push'](_0x1485f6['shift']());}}}(_0x195a,0x7c931));var unicorn=await getBuffer(global[_0x6fa0c0(0x1f0)]);await GarfieldAdd[_0x6fa0c0(0x1fc)](from,''+''+'\x20',_0x6fa0c0(0x1e9)+pushname+_0x6fa0c0(0x1f7)+global[_0x6fa0c0(0x1e2)]+_0x6fa0c0(0x1fb)+global['emoji02']+_0x6fa0c0(0x1ed)+global[_0x6fa0c0(0x1dc)]+_0x6fa0c0(0x1eb)+runtime(process[_0x6fa0c0(0x1e3)]())+'\x0a│\x20'+global[_0x6fa0c0(0x1dc)]+_0x6fa0c0(0x1ec)+global[_0x6fa0c0(0x1e2)]+_0x6fa0c0(0x1f2)+global['emoji02']+'\x20𝗢𝘄𝗻𝗲𝗿\x20𝗡𝗮𝗺𝗲\x20:\x20'+global['ownername']+_0x6fa0c0(0x1fb)+global[_0x6fa0c0(0x1dc)]+_0x6fa0c0(0x1de)+global[_0x6fa0c0(0x1dd)]+_0x6fa0c0(0x1fb)+global[_0x6fa0c0(0x1dc)]+_0x6fa0c0(0x1df)+global[_0x6fa0c0(0x1f1)]+'\x0a│\x20'+global[_0x6fa0c0(0x1dc)]+'\x20𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺\x20:\x20'+os[_0x6fa0c0(0x1fd)]()+_0x6fa0c0(0x1fb)+global[_0x6fa0c0(0x1dc)]+_0x6fa0c0(0x1ee)+Object[_0x6fa0c0(0x1f3)](global['db'][_0x6fa0c0(0x1f9)][_0x6fa0c0(0x1db)])[_0x6fa0c0(0x1e1)]+_0x6fa0c0(0x1e4)+global[_0x6fa0c0(0x1e2)]+'\x20\x20Created\x20by\x20'+global['ownername']+_0x6fa0c0(0x1e5),unicorn,[{'urlButton':{'displayText':_0x6fa0c0(0x1e6),'url':''+myweb}},{'urlButton':{'displayText':'Script\x20🌈','url':''+sc}},{'quickReplyButton':{'displayText':'All\x20Menu\x20🎉','id':_0x6fa0c0(0x1f6)}},{'quickReplyButton':{'displayText':_0x6fa0c0(0x1fa),'id':'command'}},{'quickReplyButton':{'displayText':'Owner\x20🦋','id':_0x6fa0c0(0x1dd)}}]);function _0x195a(){var _0x2405fb=['17899wmFSMf','allmenu','\x20👋\x20\x0a│\x20','5368iCHuOh','data','List\x20Menu\x20🧬','\x0a│\x20','send5ButImg','platform','20QKCotV','2982132LiPBCo','1308wIEEDE','16KkUSQW','users','emoji02','owner','\x20𝗢𝘄𝗻𝗲𝗿\x20𝗡𝘂𝗺𝗯𝗲𝗿\x20:\x20','\x20𝗛𝗼𝘀𝘁\x20𝗡𝗮𝗺𝗲\x20:\x20','862880cYeuOH','length','botname','uptime','\x0a│\x20️','\x20\x20🪁\x0a│\x20\x20𝖯𝗈𝗐𝖾𝗋𝖾𝖽\x20𝖻𝗒\x20𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽\x20𝖡𝗈𝗍\x20𝗏8.2\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a└┬──────────────\x0a\x20\x20\x20│\x20Ｘ-\x20ＮＯＤＥＳ\x0a\x20\x20\x20└───────────────','Follow\x20Us\x20ℹ️\x20','974908axwmDm','34332XdypPe','\x0a┌─\x0a│\x20Hi\x20\x20','535012mFpLUe','\x20𝗥𝘂𝗻𝘁𝗶𝗺𝗲\x20:\x20','\x20𝗕𝗼𝘁\x20𝗡𝗮𝗺𝗲\x20:\x20','\x20𝗦𝗽𝗲𝗲𝗱\x20:\x200.00117\x20miliseconds\x0a│\x20','\x20𝗧𝗼𝘁𝗮𝗹\x20𝗨𝘀𝗲𝗿\x20:\x20','3786136uRjxYH','thumb','ownername','\x20\x0a│\x20','keys','9UjKltV'];_0x195a=function(){return _0x2405fb;};return _0x195a();}
                                                           break
                      break
                case 'command': {   var _0x1b04=["\x63\x68\x61\x74","\x48\x69\x20","","\x50\x6C\x65\x61\x73\x65\x20\x43\x68\x6F\x6F\x73\x65\x20\x54\x68\x65\x20\x4D\x65\x6E\x75\x20\uD83E\uDD8B\x0A\x0A","\x4D\x65\x6E\x75","\xA9\x20\uD835\uDDAF\uD835\uDDC8\uD835\uDDD0\uD835\uDDBE\uD835\uDDCB\uD835\uDDBE\uD835\uDDBD\x20\uD835\uDDA1\uD835\uDDD2\x20\uD835\uDDA6\uD835\uDDBA\uD835\uDDCB\uD835\uDDBF\uD835\uDDC2\uD835\uDDBE\uD835\uDDC5\uD835\uDDBD\x20\uD835\uDDA1\uD835\uDDC8\uD835\uDDCD","\x53\x49\x4E\x47\x4C\x45\x5F\x53\x45\x4C\x45\x43\x54","\x4D\x61\x69\x6E\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x4D\x61\x69\x6E\x20\x4D\x65\x6E\x75\x20\uD83E\uDD8B","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x4D\x61\x69\x6E\x20\x46\x65\x61\x74\x75\x72\x65\x73\x20\x6F\x66\x20\x47\x61\x72\x66\x69\x65\x6C\x64\x20\x42\x6F\x74","\x6D\x61\x69\x6E\x6D\x65\x6E\x75","\x47\x61\x72\x66\x69\x65\x6C\x64\x42\x6F\x74\x20\x46\x65\x61\x74\x75\x72\x65\x73\x20\uD83C\uDF3B","\x41\x6C\x6C\x20\x4D\x65\x6E\x75\x20\uD83E\uDD81","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x41\x6C\x6C\x20\x54\x68\x65\x20\x46\x65\x61\x74\x75\x72\x65\x73\x21","\x61\x6C\x6C\x6D\x65\x6E\x75","\x4F\x77\x6E\x65\x72\x20\x4D\x65\x6E\x75\x20\uD83D\uDC23","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x4F\x77\x6E\x65\x72\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75","\x47\x72\x6F\x75\x70\x20\x4D\x65\x6E\x75\x20\uD83D\uDC3B","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x4D\x61\x69\x6E\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x67\x72\x6F\x75\x70\x6D\x65\x6E\x75","\x52\x50\x47\x20\x4D\x65\x6E\x75\x20\uD83C\uDF44","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x52\x70\x67\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x72\x70\x67\x6D\x65\x6E\x75","\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x4D\x65\x6E\x75\x20\u2B07\uFE0F","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75","\x53\x65\x61\x72\x63\x68\x20\x4D\x65\x6E\x75\x20\uD83D\uDD0D","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x53\x65\x61\x72\x63\x68\x69\x6E\x67\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x73\x65\x61\x72\x63\x68\x6D\x65\x6E\x75","\x52\x61\x6E\x64\x6F\x6D\x20\x4D\x65\x6E\x75\x20\uD83C\uDFAF","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x52\x61\x6E\x64\x6F\x6D\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x72\x61\x6E\x64\x6F\x6D\x6D\x65\x6E\x75","\x52\x61\x6E\x64\x6F\x6D\x20\x41\x6E\x69\x6D\x65\x20\x4D\x65\x6E\x75\x20\uD83E\uDD40","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x52\x61\x6E\x64\x6F\x6D\x20\x41\x6E\x69\x6D\x65\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x72\x61\x6E\x64\x6F\x6D\x61\x6E\x69\x6D\x65\x6D\x65\x6E\x75","\x46\x75\x6E\x20\x4D\x65\x6E\x75\x20\uD83E\uDE81","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x46\x75\x6E\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x66\x75\x6E\x6D\x65\x6E\x75","\x43\x6F\x6E\x76\x65\x72\x74\x20\x4D\x65\x6E\x75\x20\uD83D\uDD04","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x43\x6F\x6E\x76\x65\x72\x74\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75","\x44\x61\x74\x61\x62\x61\x73\x65\x20\x4D\x65\x6E\x75\x20\uD83D\uDCE1","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x44\x61\x74\x61\x62\x61\x73\x65\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x64\x61\x74\x61\x62\x61\x73\x65\x6D\x65\x6E\x75","\x56\x6F\x69\x63\x65\x20\x43\x68\x61\x6E\x67\x65\x72\x20\x4D\x65\x6E\x75\x20\uD83C\uDF99\uFE0F","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x56\x6F\x69\x63\x65\x20\x43\x68\x61\x6E\x67\x69\x6E\x67\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x76\x6F\x69\x63\x65\x63\x68\x61\x6E\x67\x65\x72\x6D\x65\x6E\x75","\x54\x58\x54\x2D\x74\x6F\x2D\x49\x4D\x47\x20\x4D\x65\x6E\x75\x20\uD83D\uDCF0","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x54\x65\x78\x74\x70\x72\x6F\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x74\x65\x78\x74\x70\x72\x6F\x6D\x65\x6E\x75","\x52\x65\x6C\x69\x67\x69\x6F\x75\x73\x20\x4D\x65\x6E\x75\x20\uD83D\uDEAE","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x49\x73\x6C\x61\x6D\x69\x63\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x69\x73\x6C\x61\x6D\x69\x63\x6D\x65\x6E\x75","\x48\x6F\x72\x6F\x73\x63\x6F\x70\x65\x20\x4D\x65\x6E\x75\x20\uD83D\uDC3B","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x48\x6F\x72\x6F\x73\x63\x6F\x70\x65\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x68\x6F\x72\x6F\x73\x63\x6F\x70\x65\x6D\x65\x6E\x75","\x43\x68\x61\x74\x20\x57\x69\x74\x68\x20\x46\x65\x6C\x6C\x6F\x77\x20\x55\x73\x65\x72\x73\x20\uD83E\uDD8B","\x41\x6E\x6F\x6E\x79\x6D\x6F\x75\x73\x20\x43\x68\x61\x74\x20\x4D\x65\x6E\x75\x20\uD83D\uDC3C","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x41\x6E\x6F\x6E\x79\x6D\x6F\x75\x73\x20\x43\x68\x61\x74\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x61\x6E\x6F\x6E\x79\x6D\x6F\x75\x73\x63\x68\x61\x74\x6D\x65\x6E\x75","\x43\x72\x65\x64\x69\x74\x20\uD83D\uDC1E","\x54\x68\x61\x6E\x6B\x73\x20\x54\x6F\x20\uD83D\uDC90","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x43\x72\x65\x64\x69\x74\x20\x4F\x66\x20\x54\x68\x65\x20\x42\x6F\x74\x20\x21\x21","\x74\x71\x74\x74","\x66\x72\x6F\x6D\x4F\x62\x6A\x65\x63\x74","\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x69\x64","\x6B\x65\x79","\x72\x65\x6C\x61\x79\x4D\x65\x73\x73\x61\x67\x65"];let template= await generateWAMessageFromContent(m[_0x1b04[0]],proto[_0x1b04[66]][_0x1b04[65]]({listMessage:{title:`${_0x1b04[1]}${pushname}${_0x1b04[2]}`,description:_0x1b04[3],buttonText:_0x1b04[4],footerText:`${_0x1b04[5]}`,listType:_0x1b04[6],sections:[{"\x74\x69\x74\x6C\x65":_0x1b04[7],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x1b04[8],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[9],"\x72\x6F\x77\x49\x64":`${_0x1b04[10]}`}]},{"\x74\x69\x74\x6C\x65":_0x1b04[11],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x1b04[12],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[13],"\x72\x6F\x77\x49\x64":`${_0x1b04[2]}${prefix}${_0x1b04[14]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[15],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[16],"\x72\x6F\x77\x49\x64":`${_0x1b04[2]}${prefix}${_0x1b04[17]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[18],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[19],"\x72\x6F\x77\x49\x64":`${_0x1b04[2]}${prefix}${_0x1b04[20]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[21],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[22],"\x72\x6F\x77\x49\x64":`${_0x1b04[2]}${prefix}${_0x1b04[23]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[24],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[25],"\x72\x6F\x77\x49\x64":`${_0x1b04[26]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[27],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[28],"\x72\x6F\x77\x49\x64":`${_0x1b04[29]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[30],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[31],"\x72\x6F\x77\x49\x64":`${_0x1b04[32]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[33],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[34],"\x72\x6F\x77\x49\x64":`${_0x1b04[35]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[36],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[37],"\x72\x6F\x77\x49\x64":`${_0x1b04[38]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[39],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[40],"\x72\x6F\x77\x49\x64":`${_0x1b04[2]}${prefix}${_0x1b04[41]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[42],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[43],"\x72\x6F\x77\x49\x64":`${_0x1b04[2]}${prefix}${_0x1b04[44]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[45],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[46],"\x72\x6F\x77\x49\x64":`${_0x1b04[2]}${prefix}${_0x1b04[47]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[48],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[49],"\x72\x6F\x77\x49\x64":`${_0x1b04[2]}${prefix}${_0x1b04[50]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[51],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[52],"\x72\x6F\x77\x49\x64":`${_0x1b04[2]}${prefix}${_0x1b04[53]}`},{"\x74\x69\x74\x6C\x65":_0x1b04[54],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[55],"\x72\x6F\x77\x49\x64":`${_0x1b04[2]}${prefix}${_0x1b04[56]}`}]},{"\x74\x69\x74\x6C\x65":_0x1b04[57],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x1b04[58],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[59],"\x72\x6F\x77\x49\x64":`${_0x1b04[2]}${prefix}${_0x1b04[60]}`}]},{"\x74\x69\x74\x6C\x65":_0x1b04[61],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x1b04[62],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x1b04[63],"\x72\x6F\x77\x49\x64":`${_0x1b04[2]}${prefix}${_0x1b04[64]}`}]}],listType:1}}),{});GarfieldAdd[_0x1b04[70]](m[_0x1b04[0]],template[_0x1b04[67]],{messageId:template[_0x1b04[69]][_0x1b04[68]]})  }
            break
                      case 'dev': case 'donate': case 'owner': case 'coder': { var _0xd4cf=["\x63\x68\x61\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x62\x62\x2E\x63\x6F\x2F\x4A\x7A\x30\x6D\x4D\x6E\x43\x2F\x50\x69\x63\x73\x2D\x41\x72\x74\x2D\x32\x32\x2D\x30\x36\x2D\x30\x33\x2D\x30\x31\x2D\x30\x31\x2D\x34\x36\x2D\x38\x37\x36\x2E\x70\x6E\x67","\x2D\x20\x2A\x48\x69\x20\uD83E\uDD70\x20\x49\x20\x6D\x2A\x0A\x2A\uFF2E\uFF2F\uFF29\uFF3A\x20\u039E\x2A\x0A\x2A\x49\x20\x61\x6D\x20\x31\x36\x20\x79\x65\x61\x72\x73\x20\x6F\x6C\x64\x20\x64\x65\x76\x65\x6C\x6F\x70\x65\x72\x2E\x2E\x2E\x2A\x0A\x2A\x46\x72\x6F\x6D\x20\x53\x72\x69\x20\x4C\x61\x6E\x6B\x61\x20\uD83C\uDDF1\uD83C\uDDF0\x2A\x0A\x2A\x49\x20\x61\x6D\x20\x61\x20\x4C\x65\x61\x72\x6E\x69\x6E\x67\x2E\x2A\x0A\x2A\x4E\x6F\x74\x20\x6D\x6F\x72\x65\x2E\x2E\x2A\x0A\x2A\x41\x6C\x73\x6F\x20\x49\x20\x61\x6D\x20\x53\x74\x75\x64\x65\x6E\x74\x2A\x0A\x2A\x46\x6F\x6C\x6C\x6F\x77\x20\x4D\x79\x20\x46\x61\x63\x65\x62\x6F\x6F\x6B\x20\x2D\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x7A\x65\x6E\x6F\x69\x78\x6E\x6F\x69\x7A\x65\x2A","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];GarfieldAdd[_0xd4cf[3]](m[_0xd4cf[0]],{image:{url:_0xd4cf[1]},caption:_0xd4cf[2]},{quoted:m})
            }
            break
            case 'sc': case 'script': { var _0xf207=["\x47\x69\x74\x48\x75\x62\x20\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x5A\x65\x6E\x6F\x69\x78\x6E\x6F\x69\x7A\x65\x2F\x47\x41\x52\x46\x49\x45\x4C\x44\x2D\x57\x48\x41\x54\x53\x41\x50\x50\x2D\x42\x4F\x54\x2D\x76\x38\x5C\x6E\x20\x44\x6F\x6E\x74\x20\x46\x6F\x72\x67\x65\x74\x20\x54\x6F\x20\x47\x69\x76\x65\x20\x53\x74\x61\x72\x5C\x6E\x5C\x6E\x46\x61\x63\x65\x62\x6F\x6F\x6B\x20\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x67\x61\x72\x66\x69\x65\x6C\x64\x62\x6F\x74\x73\x2F\x20\x5C\x6E\x44\x6F\x6E\x74\x20\x46\x6F\x72\x67\x65\x74\x20\x54\x6F\x20\x4C\x69\x6B\x65\x20\x70\x61\x67\x65"];reply(`${_0xf207[0]}`) }
            break
case 'allmenu': { var _0x3f60=["\x63\x6F\x6D\x6D\x61\x6E\x64","\x4C\x69\x73\x74\x20\x4D\x65\x6E\x75\x20\uD83C\uDF89","\x68\x65\x6C\x70","\x50\x72\x6F\x6A\x65\x63\x74\x20\uD83E\uDD8B","\x74\x68\x75\x6D\x62","\x0D\x0A\u250F\u2501\u300C\x20\x2A","\x62\x6F\x74\x6E\x61\x6D\x65","\x2A\x20\u300D\u2501\u2501\x20\x0D\x0A\u2503\u2554\u2550\u2550\u300C\x20\x2A\x4D\x41\x49\x4E\x20\x20","\x65\x6D\x6F\x6A\x69\x30\x32","\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x65\x6D\x6F\x6A\x69\x30\x31","\x20\x61\x6C\x69\x76\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x63\x72\x69\x70\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x70\x65\x65\x64\x74\x65\x73\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x69\x6E\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x6F\x77\x6E\x65\x72\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x65\x6E\x75\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x65\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x68\x61\x74\x69\x6E\x66\x6F\x0D\x0A\u2503\u2560\x20\x20","\x20\x71\x75\x6F\x74\x65\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x73\x74\x70\x63\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x73\x74\x67\x63\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x6F\x6E\x61\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x65\x70\x6F\x72\x74\x20\x5B\x62\x75\x67\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x4F\x57\x4E\x45\x52\x20\uD83E\uDE81\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x68\x61\x74\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6A\x6F\x69\x6E\x20\x5B\x6C\x69\x6E\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x61\x76\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x6C\x6F\x63\x6B\x20\x5B\x75\x73\x65\x72\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x6E\x62\x6C\x6F\x63\x6B\x20\x5B\x75\x73\x65\x72\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x63\x67\x72\x6F\x75\x70\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x63\x61\x6C\x6C\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x70\x70\x62\x6F\x74\x20\x5B\x69\x6D\x61\x67\x65\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x65\x78\x69\x66\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x47\x52\x4F\x55\x50\x20\u2699\uFE0F\x2A\x20\u300D\x20\x20\x20\x20\x20\x20\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x72\x6F\x75\x70\x6C\x69\x6E\x6B\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x70\x68\x65\x6D\x65\x72\x61\x6C\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x67\x63\x70\x70\x20\x5B\x69\x6D\x61\x67\x65\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x6E\x61\x6D\x65\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x64\x65\x73\x63\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x72\x6F\x75\x70\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x64\x69\x74\x69\x6E\x66\x6F\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x64\x64\x20\x5B\x75\x73\x65\x72\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x69\x63\x6B\x20\x5B\x72\x65\x70\x6C\x79\x2F\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x69\x64\x65\x74\x61\x67\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x61\x67\x61\x6C\x6C\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x6E\x74\x69\x6C\x69\x6E\x6B\x20\x5B\x6F\x6E\x2F\x6F\x66\x66\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x75\x74\x65\x20\x5B\x6F\x6E\x2F\x6F\x66\x66\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x72\x6F\x6D\x6F\x74\x65\x20\x5B\x72\x65\x70\x6C\x79\x2F\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6D\x6F\x74\x65\x20\x5B\x72\x65\x70\x6C\x79\x2F\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x70\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x68\x65\x63\x6B\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\u2550\u2550\u300C\x20\x2A\x52\x50\x47\x20\uD83C\uDFAE\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x75\x6E\x74\x69\x6E\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x69\x6E\x69\x6E\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x65\x61\x6C\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x73\x65\x72\x6C\x69\x6D\x69\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x72\x6F\x66\x69\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x6E\x76\x65\x6E\x74\x6F\x72\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x61\x64\x65\x72\x62\x6F\x61\x72\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x75\x79\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x6C\x6C\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\u2550\x20\xA9\u300C\x20\x2A\x44\x4F\x57\x4E\x4C\x4F\x41\x44\x45\x52\x20\u2B07\uFE0F\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x6D\x70\x33\x20\x5B\x75\x72\x6C\x7C\x71\x75\x61\x6C\x69\x74\x79\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x6D\x70\x34\x20\x5B\x75\x72\x6C\x7C\x71\x75\x61\x6C\x69\x74\x79\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x70\x6B\x20\x28\x61\x70\x70\x20\x6E\x61\x6D\x65\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x69\x6B\x74\x6F\x6B\x20\x28\x4C\x69\x6E\x6B\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x61\x76\x65\x20\x28\x56\x69\x64\x65\x6F\x20\x4C\x69\x6E\x6B\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x65\x74\x6D\x75\x73\x69\x63\x20\x5B\x79\x74\x20\x6C\x69\x6E\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x65\x64\x69\x61\x66\x69\x72\x65\x20\x28\x4C\x69\x6E\x6B\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x62\x28\x4C\x69\x6E\x6B\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x65\x74\x76\x69\x64\x65\x6F\x20\x5B\x79\x74\x20\x6C\x69\x6E\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x6D\x6D\x61\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6A\x6F\x6F\x78\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6F\x75\x6E\x64\x63\x6C\x6F\x75\x64\x20\x5B\x75\x72\x6C\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x53\x45\x41\x52\x43\x48\x45\x52\x20\uD83D\uDD0E\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x6C\x61\x79\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6F\x6E\x67\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x75\x73\x69\x63\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x61\x74\x74\x70\x61\x64\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x68\x6F\x74\x6F\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x76\x69\x63\x65\x20\x28\x64\x65\x76\x69\x63\x65\x20\x6E\x61\x6D\x65\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x68\x6F\x72\x74\x73\x20\x28\x74\x65\x78\x74\x20\x59\x54\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x70\x6B\x6D\x6F\x64\x20\x28\x61\x70\x70\x20\x6E\x61\x6D\x65\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x6F\x76\x69\x64\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x69\x6B\x69\x70\x65\x64\x69\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x73\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x6F\x6F\x67\x6C\x65\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x69\x6D\x61\x67\x65\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x69\x6E\x74\x65\x72\x65\x73\x74\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x61\x6C\x6C\x70\x61\x70\x65\x72\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x69\x6B\x69\x6D\x65\x64\x69\x61\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x73\x65\x61\x72\x63\x68\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x69\x6E\x67\x74\x6F\x6E\x65\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x65\x62\x74\x6F\x6F\x6E\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x52\x41\x4E\x44\x4F\x4D\x20\x20","\x20\x63\x6F\x66\x66\x65\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x6E\x69\x6D\x65\x71\x75\x6F\x74\x65\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x6F\x75\x70\x6C\x65\x70\x70\x0D\x0A\u2503\u2560\u2550\x20\xA9\u300C\x20\x2A\x52\x41\x4E\x44\x4F\x4D\x20\x41\x4E\x49\x4D\x45\x20\uD83C\uDF3B\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x6F\x6C\x69\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x75\x6C\x6C\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x75\x64\x64\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x72\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x75\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x77\x6F\x6F\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x69\x73\x73\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x63\x6B\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x61\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6D\x75\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x6F\x6E\x6B\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x65\x65\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x6C\x75\x73\x68\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6D\x69\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x61\x76\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x69\x67\x68\x66\x69\x76\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x6E\x64\x68\x6F\x6C\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x6F\x6D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x6C\x6F\x6D\x70\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x69\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6C\x61\x70\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x69\x6C\x6C\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x70\x70\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x69\x6E\x6B\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x6F\x6B\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x61\x6E\x63\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x72\x69\x6E\x67\x65\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x46\x55\x4E\x20\uD83C\uDFAE\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x6F\x77\x20\x5B\x74\x65\x78\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x68\x65\x6E\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x73\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x68\x61\x74\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x61\x6E\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x61\x74\x65\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x61\x6E\x67\x79\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x65\x61\x75\x74\x69\x66\x75\x6C\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x77\x65\x73\x6F\x6D\x65\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x72\x65\x74\x74\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x73\x62\x69\x61\x6E\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x61\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x75\x74\x65\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x67\x6C\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x6F\x72\x6E\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x68\x61\x72\x61\x63\x74\x65\x72\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x6F\x76\x65\x6C\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x6F\x75\x70\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x79\x73\x6F\x75\x6C\x6D\x61\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x6F\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x69\x6E\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x64\x69\x6F\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x6E\x64\x73\x6F\x6D\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x65\x61\x75\x74\x69\x66\x75\x6C\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x75\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x72\x65\x74\x74\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x73\x62\x69\x61\x6E\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x6F\x6F\x62\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x61\x73\x74\x61\x72\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x6F\x6F\x6C\x69\x73\x68\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x65\x72\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x73\x73\x68\x6F\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x61\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6D\x61\x72\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x75\x62\x62\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x6F\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x6F\x72\x6E\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x75\x6E\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x69\x62\x75\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x69\x63\x74\x61\x63\x74\x6F\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x74\x74\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x75\x65\x73\x73\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x61\x74\x68\x20\x5B\x6D\x6F\x64\x65\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x75\x69\x74\x70\x76\x70\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\u2550\u2550\u2550\x20\u300C\x20\x2A\x43\x4F\x4E\x56\x45\x52\x54\x45\x52\x20\uD83C\uDFB3\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x6D\x61\x67\x65\x20\x5B\x72\x65\x70\x6C\x79\x20\x73\x74\x69\x63\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x69\x63\x6B\x65\x72\x20\x5B\x72\x65\x70\x6C\x79\x20\x69\x6D\x67\x7C\x67\x69\x66\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x6D\x6F\x6A\x69\x6D\x69\x78\x20\x5B\x6D\x6F\x6A\x69\x2B\x6D\x6F\x6A\x69\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x76\x69\x64\x65\x6F\x20\x5B\x72\x65\x70\x6C\x79\x20\x69\x6D\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x69\x66\x20\x5B\x72\x65\x70\x6C\x79\x20\x73\x74\x69\x63\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x72\x6C\x20\x5B\x72\x65\x70\x6C\x79\x20\x69\x6D\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x76\x6E\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x65\x6D\x65\x20\x28\x72\x65\x70\x6C\x79\x20\x70\x68\x6F\x74\x6F\x20\x77\x69\x74\x68\x20\x74\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x70\x33\x20\x5B\x72\x65\x70\x6C\x79\x20\x76\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x75\x64\x69\x6F\x20\x5B\x72\x65\x70\x6C\x79\x20\x76\x69\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x62\x69\x6E\x61\x72\x79\x20\x5B\x72\x65\x70\x6C\x79\x20\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x62\x69\x6E\x61\x72\x79\x20\x5B\x72\x65\x70\x6C\x79\x20\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x79\x6C\x65\x74\x65\x78\x74\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x44\x41\x54\x41\x42\x41\x53\x45\x20\uD83E\uDDEC\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x63\x6D\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x73\x74\x63\x6D\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x63\x6D\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x6F\x63\x6B\x63\x6D\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x64\x64\x6D\x73\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x73\x74\x6D\x73\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x65\x74\x6D\x73\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x6D\x73\x67\x0D\x0A\u2503\u2560\u2550\x20\xA9\u300C\x20\x2A\x41\x4E\x4F\x4E\x59\x4D\x4F\x55\x53\x20\x43\x48\x41\x54\x20\uD83D\uDC25\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x6E\x6F\x6E\x79\x6D\x6F\x75\x73\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x61\x72\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x65\x78\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x61\x76\x65\x0D\x0A\u2503\u2560\u2550\x20\xA9\u300C\x20\x2A\x56\x4F\x49\x43\x45\x20\x43\x48\x41\x4E\x47\x45\x52\x20\uD83C\uDF99\uFE0F\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x61\x73\x73\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x6C\x6F\x77\x6E\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x65\x70\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x61\x72\x72\x61\x70\x65\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x61\x73\x74\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x61\x74\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x69\x67\x68\x74\x63\x6F\x72\x65\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x65\x76\x65\x72\x73\x65\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x6F\x62\x6F\x74\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6C\x6F\x77\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x71\x75\x69\x72\x72\x65\x6C\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x48\x4F\x52\x4F\x53\x43\x4F\x50\x45\x20\uD83D\uDD2C\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x6F\x6D\x6F\x72\x68\x6F\x6B\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x72\x74\x69\x6D\x69\x6D\x70\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x72\x74\x69\x6E\x61\x6D\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x61\x6D\x61\x6C\x6A\x6F\x64\x6F\x68\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x61\x6D\x61\x6C\x6A\x6F\x64\x6F\x68\x62\x61\x6C\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x75\x61\x6D\x69\x69\x73\x74\x72\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x61\x6D\x61\x6C\x63\x69\x6E\x74\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x6F\x63\x6F\x6B\x6E\x61\x6D\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x61\x73\x61\x6E\x67\x61\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6A\x61\x64\x69\x61\x6E\x6E\x69\x6B\x61\x68\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x69\x66\x61\x74\x75\x73\x61\x68\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x65\x7A\x65\x6B\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x65\x6B\x65\x72\x6A\x61\x61\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x61\x73\x69\x62\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x65\x6E\x79\x61\x6B\x69\x74\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x61\x72\x6F\x74\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x65\x6E\x67\x73\x68\x75\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x72\x69\x62\x61\x69\x6B\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x72\x69\x73\x61\x6E\x67\x61\x72\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x72\x69\x73\x69\x61\x6C\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x61\x67\x61\x68\x61\x72\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x72\x61\x68\x72\x65\x7A\x65\x6B\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x65\x72\x75\x6E\x74\x75\x6E\x67\x61\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x65\x74\x6F\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x61\x72\x61\x6B\x74\x65\x72\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x65\x62\x65\x72\x75\x6E\x74\x75\x6E\x67\x61\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x65\x6D\x61\x6E\x63\x69\x6E\x67\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x61\x73\x61\x73\x75\x62\x75\x72\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x7A\x6F\x64\x69\x61\x6B\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x68\x69\x6F\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\x0D\x0A\u2517\u2501\u300C\x20\x2A","\x20\x32\x30\x32\x32\x20\xA9\x2A\x20\x20\u300D\u2501\xA9","\xA9\x20\uD835\uDDAF\uD835\uDDC8\uD835\uDDD0\uD835\uDDBE\uD835\uDDCB\uD835\uDDBE\uD835\uDDBD\x20\uD835\uDDA1\uD835\uDDD2\x20\uD835\uDDA6\uD835\uDDBA\uD835\uDDCB\uD835\uDDBF\uD835\uDDC2\uD835\uDDBE\uD835\uDDC5\uD835\uDDBD\x20\uD835\uDDA1\uD835\uDDC8\uD835\uDDCD","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];let buttons=[{buttonId:`${_0x3f60[0]}`,buttonText:{displayText:_0x3f60[1]},type:1},{buttonId:`${_0x3f60[2]}`,buttonText:{displayText:_0x3f60[3]},type:1}];let buttonMessage={image:{url:global[_0x3f60[4]]},caption:`${_0x3f60[5]}${global[_0x3f60[6]]}${_0x3f60[7]}${global[_0x3f60[8]]}${_0x3f60[9]}${global[_0x3f60[10]]}${_0x3f60[11]}${global[_0x3f60[10]]}${_0x3f60[12]}${global[_0x3f60[10]]}${_0x3f60[13]}${global[_0x3f60[10]]}${_0x3f60[14]}${global[_0x3f60[10]]}${_0x3f60[15]}${global[_0x3f60[10]]}${_0x3f60[16]}${global[_0x3f60[10]]}${_0x3f60[17]}${global[_0x3f60[10]]}${_0x3f60[18]}${global[_0x3f60[10]]}${_0x3f60[19]}${global[_0x3f60[10]]}${_0x3f60[20]}${global[_0x3f60[10]]}${_0x3f60[21]}${global[_0x3f60[10]]}${_0x3f60[22]}${global[_0x3f60[10]]}${_0x3f60[23]}${global[_0x3f60[10]]}${_0x3f60[24]}${global[_0x3f60[10]]}${_0x3f60[25]}${global[_0x3f60[10]]}${_0x3f60[26]}${global[_0x3f60[10]]}${_0x3f60[27]}${global[_0x3f60[10]]}${_0x3f60[28]}${global[_0x3f60[10]]}${_0x3f60[29]}${global[_0x3f60[10]]}${_0x3f60[30]}${global[_0x3f60[10]]}${_0x3f60[31]}${global[_0x3f60[10]]}${_0x3f60[32]}${global[_0x3f60[10]]}${_0x3f60[33]}${global[_0x3f60[10]]}${_0x3f60[34]}${global[_0x3f60[10]]}${_0x3f60[35]}${global[_0x3f60[10]]}${_0x3f60[36]}${global[_0x3f60[10]]}${_0x3f60[37]}${global[_0x3f60[10]]}${_0x3f60[38]}${global[_0x3f60[10]]}${_0x3f60[39]}${global[_0x3f60[10]]}${_0x3f60[40]}${global[_0x3f60[10]]}${_0x3f60[41]}${global[_0x3f60[10]]}${_0x3f60[42]}${global[_0x3f60[10]]}${_0x3f60[43]}${global[_0x3f60[10]]}${_0x3f60[44]}${global[_0x3f60[10]]}${_0x3f60[45]}${global[_0x3f60[10]]}${_0x3f60[46]}${global[_0x3f60[10]]}${_0x3f60[47]}${global[_0x3f60[10]]}${_0x3f60[48]}${global[_0x3f60[10]]}${_0x3f60[49]}${global[_0x3f60[10]]}${_0x3f60[50]}${global[_0x3f60[10]]}${_0x3f60[51]}${global[_0x3f60[10]]}${_0x3f60[52]}${global[_0x3f60[10]]}${_0x3f60[53]}${global[_0x3f60[10]]}${_0x3f60[54]}${global[_0x3f60[10]]}${_0x3f60[55]}${global[_0x3f60[10]]}${_0x3f60[56]}${global[_0x3f60[10]]}${_0x3f60[57]}${global[_0x3f60[10]]}${_0x3f60[58]}${global[_0x3f60[10]]}${_0x3f60[59]}${global[_0x3f60[10]]}${_0x3f60[60]}${global[_0x3f60[10]]}${_0x3f60[61]}${global[_0x3f60[10]]}${_0x3f60[62]}${global[_0x3f60[10]]}${_0x3f60[63]}${global[_0x3f60[10]]}${_0x3f60[64]}${global[_0x3f60[10]]}${_0x3f60[65]}${global[_0x3f60[10]]}${_0x3f60[66]}${global[_0x3f60[10]]}${_0x3f60[67]}${global[_0x3f60[10]]}${_0x3f60[68]}${global[_0x3f60[10]]}${_0x3f60[69]}${global[_0x3f60[10]]}${_0x3f60[70]}${global[_0x3f60[10]]}${_0x3f60[71]}${global[_0x3f60[10]]}${_0x3f60[72]}${global[_0x3f60[10]]}${_0x3f60[73]}${global[_0x3f60[10]]}${_0x3f60[74]}${global[_0x3f60[10]]}${_0x3f60[75]}${global[_0x3f60[10]]}${_0x3f60[76]}${global[_0x3f60[10]]}${_0x3f60[64]}${global[_0x3f60[10]]}${_0x3f60[77]}${global[_0x3f60[10]]}${_0x3f60[78]}${global[_0x3f60[10]]}${_0x3f60[79]}${global[_0x3f60[10]]}${_0x3f60[80]}${global[_0x3f60[10]]}${_0x3f60[81]}${global[_0x3f60[10]]}${_0x3f60[82]}${global[_0x3f60[10]]}${_0x3f60[83]}${global[_0x3f60[10]]}${_0x3f60[84]}${global[_0x3f60[10]]}${_0x3f60[85]}${global[_0x3f60[10]]}${_0x3f60[86]}${global[_0x3f60[10]]}${_0x3f60[87]}${global[_0x3f60[10]]}${_0x3f60[88]}${global[_0x3f60[10]]}${_0x3f60[89]}${global[_0x3f60[10]]}${_0x3f60[90]}${global[_0x3f60[10]]}${_0x3f60[91]}${global[_0x3f60[10]]}${_0x3f60[92]}${global[_0x3f60[8]]}${_0x3f60[9]}${global[_0x3f60[10]]}${_0x3f60[93]}${global[_0x3f60[10]]}${_0x3f60[94]}${global[_0x3f60[10]]}${_0x3f60[95]}${global[_0x3f60[10]]}${_0x3f60[96]}${global[_0x3f60[10]]}${_0x3f60[97]}${global[_0x3f60[10]]}${_0x3f60[98]}${global[_0x3f60[10]]}${_0x3f60[99]}${global[_0x3f60[10]]}${_0x3f60[100]}${global[_0x3f60[10]]}${_0x3f60[101]}${global[_0x3f60[10]]}${_0x3f60[102]}${global[_0x3f60[10]]}${_0x3f60[103]}${global[_0x3f60[10]]}${_0x3f60[104]}${global[_0x3f60[10]]}${_0x3f60[105]}${global[_0x3f60[10]]}${_0x3f60[106]}${global[_0x3f60[10]]}${_0x3f60[107]}${global[_0x3f60[10]]}${_0x3f60[108]}${global[_0x3f60[10]]}${_0x3f60[109]}${global[_0x3f60[10]]}${_0x3f60[110]}${global[_0x3f60[10]]}${_0x3f60[111]}${global[_0x3f60[10]]}${_0x3f60[112]}${global[_0x3f60[10]]}${_0x3f60[113]}${global[_0x3f60[10]]}${_0x3f60[114]}${global[_0x3f60[10]]}${_0x3f60[115]}${global[_0x3f60[10]]}${_0x3f60[116]}${global[_0x3f60[10]]}${_0x3f60[117]}${global[_0x3f60[10]]}${_0x3f60[118]}${global[_0x3f60[10]]}${_0x3f60[119]}${global[_0x3f60[10]]}${_0x3f60[120]}${global[_0x3f60[10]]}${_0x3f60[121]}${global[_0x3f60[10]]}${_0x3f60[122]}${global[_0x3f60[10]]}${_0x3f60[123]}${global[_0x3f60[10]]}${_0x3f60[124]}${global[_0x3f60[10]]}${_0x3f60[125]}${global[_0x3f60[10]]}${_0x3f60[126]}${global[_0x3f60[10]]}${_0x3f60[127]}${global[_0x3f60[10]]}${_0x3f60[128]}${global[_0x3f60[10]]}${_0x3f60[129]}${global[_0x3f60[10]]}${_0x3f60[130]}${global[_0x3f60[10]]}${_0x3f60[131]}${global[_0x3f60[10]]}${_0x3f60[132]}${global[_0x3f60[10]]}${_0x3f60[133]}${global[_0x3f60[10]]}${_0x3f60[134]}${global[_0x3f60[10]]}${_0x3f60[135]}${global[_0x3f60[10]]}${_0x3f60[136]}${global[_0x3f60[10]]}${_0x3f60[137]}${global[_0x3f60[10]]}${_0x3f60[138]}${global[_0x3f60[10]]}${_0x3f60[139]}${global[_0x3f60[10]]}${_0x3f60[140]}${global[_0x3f60[10]]}${_0x3f60[141]}${global[_0x3f60[10]]}${_0x3f60[142]}${global[_0x3f60[10]]}${_0x3f60[143]}${global[_0x3f60[10]]}${_0x3f60[144]}${global[_0x3f60[10]]}${_0x3f60[145]}${global[_0x3f60[10]]}${_0x3f60[146]}${global[_0x3f60[10]]}${_0x3f60[147]}${global[_0x3f60[10]]}${_0x3f60[148]}${global[_0x3f60[10]]}${_0x3f60[149]}${global[_0x3f60[10]]}${_0x3f60[150]}${global[_0x3f60[10]]}${_0x3f60[151]}${global[_0x3f60[10]]}${_0x3f60[152]}${global[_0x3f60[10]]}${_0x3f60[153]}${global[_0x3f60[10]]}${_0x3f60[154]}${global[_0x3f60[10]]}${_0x3f60[155]}${global[_0x3f60[10]]}${_0x3f60[156]}${global[_0x3f60[10]]}${_0x3f60[157]}${global[_0x3f60[10]]}${_0x3f60[158]}${global[_0x3f60[10]]}${_0x3f60[159]}${global[_0x3f60[10]]}${_0x3f60[160]}${global[_0x3f60[10]]}${_0x3f60[161]}${global[_0x3f60[10]]}${_0x3f60[162]}${global[_0x3f60[10]]}${_0x3f60[163]}${global[_0x3f60[10]]}${_0x3f60[164]}${global[_0x3f60[10]]}${_0x3f60[165]}${global[_0x3f60[10]]}${_0x3f60[166]}${global[_0x3f60[10]]}${_0x3f60[167]}${global[_0x3f60[10]]}${_0x3f60[168]}${global[_0x3f60[10]]}${_0x3f60[169]}${global[_0x3f60[10]]}${_0x3f60[170]}${global[_0x3f60[10]]}${_0x3f60[171]}${global[_0x3f60[10]]}${_0x3f60[172]}${global[_0x3f60[10]]}${_0x3f60[173]}${global[_0x3f60[10]]}${_0x3f60[174]}${global[_0x3f60[10]]}${_0x3f60[175]}${global[_0x3f60[10]]}${_0x3f60[176]}${global[_0x3f60[10]]}${_0x3f60[177]}${global[_0x3f60[10]]}${_0x3f60[178]}${global[_0x3f60[10]]}${_0x3f60[179]}${global[_0x3f60[10]]}${_0x3f60[180]}${global[_0x3f60[10]]}${_0x3f60[181]}${global[_0x3f60[10]]}${_0x3f60[182]}${global[_0x3f60[10]]}${_0x3f60[183]}${global[_0x3f60[10]]}${_0x3f60[184]}${global[_0x3f60[10]]}${_0x3f60[185]}${global[_0x3f60[10]]}${_0x3f60[186]}${global[_0x3f60[10]]}${_0x3f60[187]}${global[_0x3f60[10]]}${_0x3f60[188]}${global[_0x3f60[10]]}${_0x3f60[189]}${global[_0x3f60[10]]}${_0x3f60[190]}${global[_0x3f60[10]]}${_0x3f60[191]}${global[_0x3f60[10]]}${_0x3f60[192]}${global[_0x3f60[10]]}${_0x3f60[193]}${global[_0x3f60[10]]}${_0x3f60[194]}${global[_0x3f60[10]]}${_0x3f60[195]}${global[_0x3f60[10]]}${_0x3f60[196]}${global[_0x3f60[10]]}${_0x3f60[197]}${global[_0x3f60[10]]}${_0x3f60[198]}${global[_0x3f60[10]]}${_0x3f60[199]}${global[_0x3f60[10]]}${_0x3f60[200]}${global[_0x3f60[10]]}${_0x3f60[201]}${global[_0x3f60[10]]}${_0x3f60[202]}${global[_0x3f60[10]]}${_0x3f60[203]}${global[_0x3f60[10]]}${_0x3f60[204]}${global[_0x3f60[10]]}${_0x3f60[205]}${global[_0x3f60[10]]}${_0x3f60[206]}${global[_0x3f60[10]]}${_0x3f60[207]}${global[_0x3f60[10]]}${_0x3f60[208]}${global[_0x3f60[10]]}${_0x3f60[209]}${global[_0x3f60[10]]}${_0x3f60[210]}${global[_0x3f60[10]]}${_0x3f60[211]}${global[_0x3f60[10]]}${_0x3f60[212]}${global[_0x3f60[10]]}${_0x3f60[213]}${global[_0x3f60[10]]}${_0x3f60[214]}${global[_0x3f60[10]]}${_0x3f60[215]}${global[_0x3f60[10]]}${_0x3f60[216]}${global[_0x3f60[10]]}${_0x3f60[217]}${global[_0x3f60[10]]}${_0x3f60[218]}${global[_0x3f60[10]]}${_0x3f60[219]}${global[_0x3f60[10]]}${_0x3f60[220]}${global[_0x3f60[10]]}${_0x3f60[221]}${global[_0x3f60[10]]}${_0x3f60[222]}${global[_0x3f60[10]]}${_0x3f60[223]}${global[_0x3f60[10]]}${_0x3f60[224]}${global[_0x3f60[10]]}${_0x3f60[225]}${global[_0x3f60[10]]}${_0x3f60[226]}${global[_0x3f60[10]]}${_0x3f60[227]}${global[_0x3f60[10]]}${_0x3f60[228]}${global[_0x3f60[10]]}${_0x3f60[229]}${global[_0x3f60[10]]}${_0x3f60[230]}${global[_0x3f60[10]]}${_0x3f60[231]}${global[_0x3f60[10]]}${_0x3f60[232]}${pushname}${_0x3f60[233]}`,footer:`${_0x3f60[234]}`,buttons:buttons,headerType:4};GarfieldAdd[_0x3f60[236]](m[_0x3f60[235]],buttonMessage,{quoted:m})   }
break
case 'mainmenu':
var unicorn = await getBuffer(picak+'Main Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 MAIN  ${global.emoji02}*  」
┃╠  ${global.emoji01} alive
┃╠  ${global.emoji01} script
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
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break

case 'grupmenu': case 'groupmenu':
var unicorn = await getBuffer(picak+'Group Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
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
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break

case 'rpgmenu':
var unicorn = await getBuffer(picak+'Rpg Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
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
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break

case 'funmenu':
var unicorn = await getBuffer(picak+'Fun Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 FUN 🪁 」	        
┃╠  ${global.emoji01} how [text
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
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break

case 'ownermenu':
var unicorn = await getBuffer(global.flaming)
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 OWNER 🐣 」	        
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
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'downloadmenu':
var unicorn = await getBuffer(picak+'Downloader Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ 「 DOWNLOADER ⬇️ 」	        
┃╠  ${global.emoji01} ytmp3 [url|quality]
┃╠  ${global.emoji01} ytmp4 [url|quality]
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} apkmod (App Name)
┃╠  ${global.emoji01} photo (Text)
┃╠  ${global.emoji01} tiktok (Link)
┃╠  ${global.emoji01} play (Text)
┃╠  ${global.emoji01} insta (Text)
┃╠  ${global.emoji01} save (Video Link)
┃╠  ${global.emoji01} getmusic [yt link]
┃╠  ${global.emoji01} mediafire (Link)
┃╠  ${global.emoji01} fb(Link)
┃╠  ${global.emoji01} getvideo [yt link]
┃╠  ${global.emoji01} umma [Text]
┃╠  ${global.emoji01} joox [Text]
┃╠  ${global.emoji01} soundcloud [URL]
┃╠  ${global.emoji01} googledrive (URL)
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'searchmenu':
var unicorn = await getBuffer(picak+'Search Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 SEARCHER 🔎 」	        
┃╠  ${global.emoji01} play [Text]
┃╠  ${global.emoji01} song [Text]
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
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'randommenu':
var unicorn = await getBuffer(picak+'Random Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 RANDOM 🎡 」	        
┃╠  ${global.emoji01} coffee
┃╠  ${global.emoji01} animequote (Text)
┃╠  ${global.emoji01} couplepp
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'randomanimemenu':
var unicorn = await getBuffer(picak+'Random Anime Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
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
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'textpromenu':
var unicorn = await getBuffer(picak+'Text Pro Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
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
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'convertmenu':
var unicorn = await getBuffer(picak+'Converter Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 CONVERTER 🔃 」	        
┃╠  ${global.emoji01} image [reply stick]
┃╠  ${global.emoji01} sticker [reply img|gif]
┃╠  ${global.emoji01} emojimix [moji+moji]
┃╠  ${global.emoji01} emojimix2 [moji+moji]
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
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'databasemenu':
var unicorn = await getBuffer(picak+'Database Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
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
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'databasemenu':
var unicorn = await getBuffer(picak+'Database Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 ANONYMOUS CHAT 🐋 」	        
┃╠  ${global.emoji01} anonymous
┃╠  ${global.emoji01} start
┃╠  ${global.emoji01} next
┃╠  ${global.emoji01} leave
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'islamicmenu':
var unicorn = await getBuffer(picak+'Islamic Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 RELIGIOUS 🚮 」	        
┃╠  ${global.emoji01} juzamma
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'voicechangermenu':
var unicorn = await getBuffer(picak+'Voice Changer Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
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
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'horoscopemenu':
var unicorn = await getBuffer(picak+'Horoscope Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
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
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'helpers': case 'help': case 'project':
var _0xc099=["","\x20","\x47\x61\x72\x66\x69\x65\x6C\x64\x0A\x57\x68\x61\x74\x73\x61\x70\x70\x20\x42\x6F\x74\x0A\x20\x46\x72\x6F\x6D\x20\x4E\x4F\x49\x5A\x45\x20\x44\x65\x76\x65\x6C\x6F\x70\x65\x72\x73\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0A\x50\x6F\x77\x65\x72\x65\x64\x20\x42\x79\x20\x58\x20\x4E\x6F\x64\x65\x73\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0A\x41\x6C\x77\x61\x79\x73\x20\x4F\x6E\x20\x46\x69\x72\x73\x74\x20\x57\x68\x61\x74\x73\x61\x70\x70\x20\x55\x73\x65\x72\x20\x42\x6F\x74\x20\x69\x6E\x20\x53\x72\x69\x20\x4C\x61\x6E\x6B\x61\x20\uD83C\uDDF1\uD83C\uDDF0\x20\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0A\x43\x6F\x64\x65\x64\x20\x62\x79\x20\x5A\x45\x4E\x4F\x49\x20\x32\x30\x32\x32\x20\xA9\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x20\x0A\x53\x50\x45\x43\x49\x41\x4C\x20\x54\x48\x41\x4E\x4B\x53\x20\x0A\x2D\x20\u029C\u1D00\uA731\u026A\u0274\u1D05\u1D1C\x20\u1D05\u026A\u0274\u1D1C\uA731\u029C\u1D00\u0274\x20\x2C\x20\u029F\u1D00\uA731\u026A\u0274\u1D05\u1D1C\x20\u0274\u1D07\u1D1B\u029C\uA731\u1D00\u0280\u1D00\x2C\x20\u1D0D\u1D00\u029F\u1D07\u1D07\uA731\u029C\u1D00\x20\u0274\u1D07\u1D1B\u029C\uA731\u1D00\u0280\u1D00\x20\x2C\x20\uA731\u1D00\u0280\u1D00\u0274\u026A\x20\u1D0D\u1D07\u1D1B\u029C\uA731\u1D00\u1D05\u1D07\u1D07\x2C\uA731\u1D07\u1D21\u1D0D\u026A\x20\u1D0D\u1D00\u029F\u1D07\u1D07\uA731\u029C\u1D00\x20\x2C\x20\u1D00\uA730\u0274\u1D00\x20\u1D18\u1D00\u029F\u026A\u1D0B\u1D0B\u1D00\u029F\x20\x2C\x20\uA730\u1D00\u0280\u029C\u1D00\u0274\x20\x2C\x20\u1D00\u1D1B\u1D1B\u026A\u1D04\u1D1C\uA731\x20\x2C\x20\u0299\u1D00\u026A\u029F\u1D07\u028F\uA731\x20\x2C\x20\u1D1B\u029C\u026A\u1D04\u1D04\u028F\x20\x2C\u028F\u1D1C\uA731\u1D1C\uA730\u1D1C\uA731\u1D1B\u1D00\x20\x20","\x46\x6F\x6C\x6C\x6F\x77\x20\x4D\x79\x20\x46\x61\x63\x65\x62\x6F\x6F\x6B\x20\uD83D\uDC3C\x20","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x7A\x65\x6E\x6F\x69\x78\x6E\x6F\x69\x7A\x65","\x53\x63\x72\x69\x70\x74\x20\uD83C\uDF08","\x44\x6F\x6E\x61\x74\x65\x20\uD83D\uDE80","\x64\x6F\x6E\x61\x74\x65","\x4F\x77\x6E\x65\x72\x20\uD83E\uDD8B","\x6F\x77\x6E\x65\x72","\x73\x65\x6E\x64\x35\x42\x75\x74\x49\x6D\x67"];var unicorn= await getBuffer(picak); await GarfieldAdd[_0xc099[10]](from,`${_0xc099[0]}`+ _0xc099[0]+ _0xc099[1],_0xc099[2],unicorn,[{"\x75\x72\x6C\x42\x75\x74\x74\x6F\x6E":{"\x64\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74":_0xc099[3],"\x75\x72\x6C":`${_0xc099[4]}`}},{"\x75\x72\x6C\x42\x75\x74\x74\x6F\x6E":{"\x64\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74":_0xc099[5],"\x75\x72\x6C":`${_0xc099[0]}${sc}${_0xc099[0]}`}},{"\x71\x75\x69\x63\x6B\x52\x65\x70\x6C\x79\x42\x75\x74\x74\x6F\x6E":{"\x64\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74":_0xc099[6],"\x69\x64":_0xc099[7]}},{"\x71\x75\x69\x63\x6B\x52\x65\x70\x6C\x79\x42\x75\x74\x74\x6F\x6E":{"\x64\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74":_0xc099[8],"\x69\x64":_0xc099[9]}}])
break
 //Coded by Tharindu Liyanage
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
		    GarfieldAdd.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
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
