// Hi  I m
// Tharindu Liyanage 
// I am 16 years old developer...
// From Sri Lanka
// I am a Learning.
// Not more..
// Also I am Student
// Follow My Facebook - https://www.facebook.com/TharinduLiyanages
require('./Config')
const { default: GarfieldNeuralConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const moment = require('moment-timezone')

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database/database.json`)
)
global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

async function startGarfieldNeural() {
    const GarfieldNeural = GarfieldNeuralConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣 𝖡𝖮Т','OPERA','3.0.0'],
        auth: state
    })

    store.bind(GarfieldNeural.ev)
    
    // anticall auto block
    GarfieldNeural.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let Neuralfek = await GarfieldNeural.sendContact(callerId, global.owner)
    GarfieldNeural.sendMessage(callerId, { text: `Automatic Block System!\nDon't Call Bot!\nPlease Ask Or Contact The Owner To Unblock You!`}, { quoted : Neuralfek })
    await sleep(8000)
    await GarfieldNeural.updateBlockStatus(callerId, "block")
    }
    })

    GarfieldNeural.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!GarfieldNeural.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(GarfieldNeural, mek, store)
        require("./Garfield.js")(GarfieldNeural, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    // Group Update
    GarfieldNeural.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await GarfieldNeural.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://shortlink.GarfieldNeuralarridho.my.id/rg1oT'
       }
       let lolNeural = { url : ppgc }
       if (pea[0].announce == true) {
       GarfieldNeural.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Closed By Admin, Now Only Admin Can Send Messages !`, `${botname}`, lolNeural, [])
       } else if(pea[0].announce == false) {
       GarfieldNeural.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Opened By Admin, Now Participants Can Send Messages !`, `${botname}`, lolNeural, [])
       } else if (pea[0].restrict == true) {
       GarfieldNeural.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Restricted, Now Only Admin Can Edit Group Info !`, `${botname}`, lolNeural, [])
       } else if (pea[0].restrict == false) {
       GarfieldNeural.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Opened, Now Participants Can Edit Group Info !`, `${botname}`, lolNeural, [])
       } else {
       GarfieldNeural.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Subject Has Been Changed To *${pea[0].subject}*`, `${botname}`, lolNeural, [])
     }
    })
    

//document randomizer

    GarfieldNeural.ev.on('group-participants.update', async (anu) => { function _0x4663(_0x383b95,_0x571af5){const _0x4d8780=_0x4d87();return _0x4663=function(_0x466336,_0x47e585){_0x466336=_0x466336-0x117;let _0x308fc8=_0x4d8780[_0x466336];return _0x308fc8;},_0x4663(_0x383b95,_0x571af5);}function _0x4d87(){const _0x49e26b=['22129239UngfGn','\x0a𝗛𝗶\x20@','59080JhuLyN','801Barehv','\x20🍃\x0a𝗚𝗿𝗼𝘂𝗽\x20𝗥𝘂𝗹𝗲𝘀\x20❄️\x20\x0a','log','Ｉｎｆｏ\x20🍂','participants','subject','4TJayAn','botname','🍃\x20𝘽𝙮𝙚\x20@','Menu','8990NQQwXr','profilePictureUrl','4962IoRPok','desc','image','split','6622370TRXGEF','tts\x20Bye\x20,\x20good\x20luck','welcome','ＢＹＥ\x20💌\x20','785932flAAOF','\x20\x20🍂\x20\x0a𝗪𝗲𝗹𝗰𝗼𝗺𝗲\x20𝘁𝗼\x20𝘁𝗵𝗲\x20','https://telegra.ph/file/02c9766423058d89ddec2.jpg','Ｗｅｌｃｏｍｅ\x20🦋\x20','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','groupMetadata','3pWumfD','https://telegra.ph/file/8d248491bdfee372c13ca.jpg','sendMessage','512891mMWSBJ','action','script\x20','8803522XkjzNf','bye'];_0x4d87=function(){return _0x49e26b;};return _0x4d87();}const _0x2d75cf=_0x4663;(function(_0x308518,_0x3a8ccf){const _0x22a6f7=_0x4663,_0x1ee660=_0x308518();while(!![]){try{const _0x2a0a38=-parseInt(_0x22a6f7(0x12d))/0x1*(parseInt(_0x22a6f7(0x13b))/0x2)+parseInt(_0x22a6f7(0x12a))/0x3*(-parseInt(_0x22a6f7(0x124))/0x4)+-parseInt(_0x22a6f7(0x11a))/0x5*(-parseInt(_0x22a6f7(0x11c))/0x6)+parseInt(_0x22a6f7(0x130))/0x7+parseInt(_0x22a6f7(0x134))/0x8*(parseInt(_0x22a6f7(0x135))/0x9)+parseInt(_0x22a6f7(0x120))/0xa+-parseInt(_0x22a6f7(0x132))/0xb;if(_0x2a0a38===_0x3a8ccf)break;else _0x1ee660['push'](_0x1ee660['shift']());}catch(_0x4d7d0e){_0x1ee660['push'](_0x1ee660['shift']());}}}(_0x4d87,0xcaa80),console['log'](anu));try{let metadata=await GarfieldNeural[_0x2d75cf(0x129)](anu['id']),participants=anu[_0x2d75cf(0x139)];for(let num of participants){try{ppuser=await GarfieldNeural[_0x2d75cf(0x11b)](num,_0x2d75cf(0x11e));}catch{ppuser=_0x2d75cf(0x128);}try{ppgroup=await GarfieldNeural[_0x2d75cf(0x11b)](anu['id'],_0x2d75cf(0x11e));}catch{ppgroup='https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';}let nama=await GarfieldNeural['getName'](num);memb=metadata[_0x2d75cf(0x139)]['length'];if(anu[_0x2d75cf(0x12e)]=='add'){let buttons=[{'buttonId':'tts\x20Welcome\x20to\x20the\x20'+metadata[_0x2d75cf(0x13a)]+'\x20','buttonText':{'displayText':_0x2d75cf(0x127)},'type':0x1},{'buttonId':_0x2d75cf(0x119),'buttonText':{'displayText':'ＢＯＴ\x20🎊'},'type':0x1}],buttonMessage={'image':{'url':_0x2d75cf(0x12b)},'caption':_0x2d75cf(0x133)+num[_0x2d75cf(0x11f)]('@')[0x0]+_0x2d75cf(0x125)+metadata[_0x2d75cf(0x13a)]+_0x2d75cf(0x136)+metadata[_0x2d75cf(0x11d)]+'\x0a\x0a'+global[_0x2d75cf(0x122)],'footer':''+global[_0x2d75cf(0x117)],'buttons':buttons,'headerType':0x4};GarfieldNeural[_0x2d75cf(0x12c)](anu['id'],buttonMessage);}else{if(anu['action']=='remove'){let buttons=[{'buttonId':_0x2d75cf(0x121),'buttonText':{'displayText':_0x2d75cf(0x123)},'type':0x1},{'buttonId':_0x2d75cf(0x12f),'buttonText':{'displayText':_0x2d75cf(0x138)},'type':0x1}],buttonMessage={'image':{'url':_0x2d75cf(0x126)},'caption':_0x2d75cf(0x118)+num['split']('@')[0x0]+'\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20𝙇𝙚𝙛𝙩\x20𝙏𝙝𝙚\x20'+metadata['subject']+'\x0a'+global[_0x2d75cf(0x131)],'footer':''+global[_0x2d75cf(0x117)],'buttons':buttons,'headerType':0x4};GarfieldNeural[_0x2d75cf(0x12c)](anu['id'],buttonMessage);}}}}catch(_0x2b3317){console[_0x2d75cf(0x137)](_0x2b3317);}   })
	
    //Setting\\
    GarfieldNeural.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    GarfieldNeural.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = GarfieldNeural.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    GarfieldNeural.getName = (jid, withoutContact  = false) => {
        id = GarfieldNeural.decodeJid(jid)
        withoutContact = GarfieldNeural.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = GarfieldNeural.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === GarfieldNeural.decodeJid(GarfieldNeural.user.id) ?
            GarfieldNeural.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    GarfieldNeural.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await GarfieldNeural.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await GarfieldNeural.getName(i + '@s.whatsapp.net')}\nFN:${global.ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.myweb}\nitem2.X-ABLabel:Git\nitem3.URL:${global.myweb}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;Colombo;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    	////////////////////////////////////////////////////////////vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${global.ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click To Chat\nitem2.EMAIL;type=INTERNET:https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8\nitem2.X-ABLabel:Script\nitem3.URL:https://github.com/Zenoixnoize\nitem3.X-ABLabel:Script\nitem4.ADR:;;Mathugama};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	GarfieldNeural.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    GarfieldNeural.setStatus = (status) => {
        GarfieldNeural.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    GarfieldNeural.public = true

    GarfieldNeural.serializeM = (m) => smsg(GarfieldNeural, m, store)

    GarfieldNeural.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); GarfieldNeural.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("🐼Connection closed, reconnecting...."); startGarfieldNeural(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("🐼Connection Lost from Server, reconnecting..."); startGarfieldNeural(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("🐼Connection Replaced, Another New Session Opened, Please Close Current Session First"); GarfieldNeural.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`🐼Device Logged Out, Please Scan Again And Run.`); GarfieldNeural.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("🐼Restart Required, Restarting..."); startGarfieldNeural(); }
            else if (reason === DisconnectReason.timedOut) { console.log("🐼Connection TimedOut, Reconnecting..."); startGarfieldNeural(); }
            else GarfieldNeural.end(`🐼Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log(`${global.botname} Working Now 🦋`, update)
    })

    GarfieldNeural.ev.on('creds.update', saveState)

    // Add Other
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    GarfieldNeural.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: GarfieldNeural.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            GarfieldNeural.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    GarfieldNeural.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        GarfieldNeural.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    GarfieldNeural.sendText = (jid, text, quoted = '', options) => GarfieldNeural.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    GarfieldNeural.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await GarfieldNeural.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    GarfieldNeural.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await GarfieldNeural.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    GarfieldNeural.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await GarfieldNeural.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    GarfieldNeural.sendTextWithMentions = async (jid, text, quoted, options = {}) => GarfieldNeural.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    GarfieldNeural.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await GarfieldNeural.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    GarfieldNeural.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await GarfieldNeural.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    GarfieldNeural.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    GarfieldNeural.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    GarfieldNeural.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await GarfieldNeural.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await GarfieldNeural.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    GarfieldNeural.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await GarfieldNeural.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    GarfieldNeural.cMod = (jid, copy, text = '', sender = GarfieldNeural.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === GarfieldNeural.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


//send 5 button image by Neural
    GarfieldNeural.send5ButImg = async (jid , text = '' , footer = '', img, but = [], thumb, options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail:thumb }, { upload: GarfieldNeural.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            GarfieldNeural.relayMessage(jid, template.message, { messageId: template.key.id })
    }


    //send5butvid by Neural
        GarfieldNeural.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: GarfieldNeural.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            GarfieldNeural.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
    
    //send5butmsg by Neural
            GarfieldNeural.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        GarfieldNeural.sendMessage(jid, templateMessage)
        }


//sendlistmsg by Neural
        GarfieldNeural.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        GarfieldNeural.sendMessage(jid, listMes, { quoted: quoted })
        }


    //send5butgif by Neural
        GarfieldNeural.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: GarfieldNeural.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            GarfieldNeural.relayMessage(jid, template.message, { messageId: template.key.id })
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    GarfieldNeural.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return GarfieldNeural
}

startGarfieldNeural()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
