//Coded by Tharindu Liyanage
// GARFIELD v8.2 BY NOIZE PROJECTS 🐼
var _0x9ed9=["\x2E\x2F\x43\x6F\x6E\x66\x69\x67","\x40\x61\x64\x69\x77\x61\x6A\x73\x68\x69\x6E\x67\x2F\x62\x61\x69\x6C\x65\x79\x73","\x2E\x2F","\x2E\x6A\x73\x6F\x6E","\x70\x69\x6E\x6F","\x40\x68\x61\x70\x69\x2F\x62\x6F\x6F\x6D","\x66\x73","\x79\x61\x72\x67\x73\x2F\x79\x61\x72\x67\x73","\x63\x68\x61\x6C\x6B","\x66\x69\x6C\x65\x2D\x74\x79\x70\x65","\x70\x61\x74\x68","\x61\x77\x65\x73\x6F\x6D\x65\x2D\x70\x68\x6F\x6E\x65\x6E\x75\x6D\x62\x65\x72","\x2E\x2F\x6C\x69\x62\x2F\x65\x78\x69\x66","\x2E\x2F\x6C\x69\x62\x2F\x6D\x79\x66\x75\x6E\x63","\x6C\x6F\x77\x64\x62","\x2E\x2F\x6C\x69\x62\x2F\x6C\x6F\x77\x64\x62","\x2E\x2F\x6C\x69\x62\x2F\x6D\x6F\x6E\x67\x6F\x44\x42"];require(_0x9ed9[0]);const {default:GarfieldAddConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x9ed9[1]);const {state,saveState}=useSingleFileAuthState(`${_0x9ed9[2]}${sessionName}${_0x9ed9[3]}`);const pino=require(_0x9ed9[4]);const {Boom}=require(_0x9ed9[5]);const fs=require(_0x9ed9[6]);const yargs=require(_0x9ed9[7]);const chalk=require(_0x9ed9[8]);const FileType=require(_0x9ed9[9]);const path=require(_0x9ed9[10]);const PhoneNumber=require(_0x9ed9[11]);const {imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x9ed9[12]);const {formatp,tanggal,formatDate,getTime,clockString,runtime,jsonformat,format,parseMention,getRandom}=require(_0x9ed9[13]);const {smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x9ed9[13]);var low;try{low= require(_0x9ed9[14])}catch(e){low= require(_0x9ed9[15])};const {Low,JSONFile}=low;const mongoDB=require(_0x9ed9[16])

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`X628/database.json`)
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

async function startGarfieldAdd() {
    const GarfieldAdd = GarfieldAddConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Garfield Bot','Safari','8.0.0'],
        auth: state
    })

    store.bind(GarfieldAdd.ev)
    
    // anticall auto block
    GarfieldAdd.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await GarfieldAdd.sendContact(callerId, global.owner)
    GarfieldAdd.sendMessage(callerId, { text: `*Automatic system block!*\n*Don't call bot!\nPlease contact the owner to UNBLOCK!*`}, { quoted : pa7rick })
    await sleep(8000)
    await GarfieldAdd.updateBlockStatus(callerId, "block")
    }
    })

    GarfieldAdd.ev.on('messages.upsert', async chatUpdate => { var _0xb770=["\x6D\x65\x73\x73\x61\x67\x65\x73","\x6D\x65\x73\x73\x61\x67\x65","\x6B\x65\x79\x73","\x65\x70\x68\x65\x6D\x65\x72\x61\x6C\x4D\x65\x73\x73\x61\x67\x65","\x6B\x65\x79","\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64","\x73\x74\x61\x74\x75\x73\x40\x62\x72\x6F\x61\x64\x63\x61\x73\x74","\x70\x75\x62\x6C\x69\x63","\x66\x72\x6F\x6D\x4D\x65","\x74\x79\x70\x65","\x6E\x6F\x74\x69\x66\x79","\x42\x41\x45\x35","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x69\x64","\x6C\x65\x6E\x67\x74\x68","\x2E\x2F\x47\x61\x72\x66\x69\x65\x6C\x64","\x6C\x6F\x67"];try{mek= chatUpdate[_0xb770[0]][0];if(!mek[_0xb770[1]]){return};mek[_0xb770[1]]= (Object[_0xb770[2]](mek[_0xb770[1]])[0]=== _0xb770[3])?mek[_0xb770[1]][_0xb770[3]][_0xb770[1]]:mek[_0xb770[1]];if(mek[_0xb770[4]]&& mek[_0xb770[4]][_0xb770[5]]=== _0xb770[6]){return};if(!GarfieldAdd[_0xb770[7]]&&  !mek[_0xb770[4]][_0xb770[8]] && chatUpdate[_0xb770[9]]=== _0xb770[10]){return};if(mek[_0xb770[4]][_0xb770[13]][_0xb770[12]](_0xb770[11])&& mek[_0xb770[4]][_0xb770[13]][_0xb770[14]]=== 16){return};m= smsg(GarfieldAdd,mek,store);require(_0xb770[15])(GarfieldAdd,m,chatUpdate,store)}catch(err){console[_0xb770[16]](err)} })
    
    
    
//anu
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

// yoi

    GarfieldAdd.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await GarfieldAdd.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await GarfieldAdd.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await GarfieldAdd.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                if (anu.action == 'add') {
                var buffer = await getBuffer(ppuser)
                let fgclink = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                he = `Welcome To ${metadata.subject} @${num.split("@")[0]}\n\n${metadata.desc}`
                let link = `https://www.facebook.com/zenoixnoize`
let buttons = [
{buttonId: `halo`, buttonText: {displayText: 'WELCOME'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: feler,
jpegThumbnail:buffer,
mentions: [num],
fileName: `Welcome To ${metadata.subject}`,
fileLength: 99999999999999,
caption: he,
footer: `©GARFIELD INC 2022`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Don't forget to smile today`,
body: `SUBSCRIBE DRIPS OFC`,
mediaType:2,
thumbnail: buffer,
sourceUrl: link,
mediaUrl: link,
}}
}
GarfieldAdd.sendMessage(anu.id, buttonMessage, {quoted:fgclink})
                } else if (anu.action == 'remove') {
                    let fgclink = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                    he = `He/She is gone bro ${metadata.subject} @${num.split("@")[0]}\n\n${metadata.desc}`
                    let link = `https://www.facebook.com/zenoixnoize`
let buttons = [
{buttonId: `halo`, buttonText: {displayText: 'BYE'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: feler,
jpegThumbnail:buffer,
mentions: [num],
fileName: `He/She is gone bro ${metadata.subject}`,
fileLength: 99999999999999,
caption: he,
footer: `GARFIELD v8.0`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `BYE DONT COME BACK HERE OKAY`,
body: `SUBSCRIBE DRIPS OFC`,
mediaType:2,
thumbnail: buffer,
sourceUrl: link,
mediaUrl: link,
}}
}
GarfieldAdd.sendMessage(anu.id, buttonMessage, {quoted:fgclink})
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
    // Setting
    GarfieldAdd.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    GarfieldAdd.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = GarfieldAdd.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    GarfieldAdd.getName = (jid, withoutContact  = false) => {
        id = GarfieldAdd.decodeJid(jid)
        withoutContact = GarfieldAdd.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = GarfieldAdd.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === GarfieldAdd.decodeJid(GarfieldAdd.user.id) ?
            GarfieldAdd.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    GarfieldAdd.sendContact = async (jid, kon, quoted = '', opts = {}) => { var _0x1a99=["\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x67\x65\x74\x4E\x61\x6D\x65","\x20\x27\x42\x45\x47\x49\x4E\x3A\x56\x43\x41\x52\x44\x5C\x6E\x27\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2B\x20\x27\x56\x45\x52\x53\x49\x4F\x4E\x3A\x33\x2E\x30\x5C\x6E\x27\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2B\x20\x27\x46\x4E\x3A\x27\x20\x2B\x20","\x6F\x77\x6E\x65\x72\x6E\x61\x6D\x65","\x20\x2B\x20\x27\x5C\x6E\x27\x20\x2F\x2F\x63\x72\x65\x61\x74\x65\x64\x20\x61\x66\x6E\x61\x6E\x70\x6C\x6B\x2C\x20\x70\x6C\x65\x61\x73\x65\x20\x63\x6F\x70\x79\x20\x74\x68\x69\x73\x20\x77\x69\x74\x68\x20\x63\x72\x65\x64\x69\x74\x2E\x2E\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2B\x20\x27\x4F\x52\x47\x3A\x43\x6F\x64\x65\x64\x20\x42\x79\x20\x54\x68\x61\x72\x69\x6E\x64\x75\x20\x4C\x69\x79\x61\x6E\x61\x67\x65\x3B\x5C\x6E\x27\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2B\x20\x27\x54\x45\x4C\x3B\x74\x79\x70\x65\x3D\x43\x45\x4C\x4C\x3B\x74\x79\x70\x65\x3D\x56\x4F\x49\x43\x45\x3B\x77\x61\x69\x64\x3D\x27\x20\x2B\x20","\x6F\x77\x6E\x65\x72","\x20\x2B\x20\x27\x3A\x27\x20\x2B\x20","\x20\x2B\x20\x27\x20\x5C\x6E\x27\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2B\x20\x27\x45\x4E\x44\x3A\x56\x43\x41\x52\x44\x27","\x70\x75\x73\x68","","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];let list=[];for(let i of kon){list[_0x1a99[8]]({displayName: await GarfieldAdd[_0x1a99[1]](i+ _0x1a99[0]),vcard:`${_0x1a99[2]}${global[_0x1a99[3]]}${_0x1a99[4]}${global[_0x1a99[5]]}${_0x1a99[6]}${global[_0x1a99[5]]}${_0x1a99[7]}`})};GarfieldAdd[_0x1a99[10]](jid,{contacts:{displayName:`${_0x1a99[9]}${global[_0x1a99[3]]}${_0x1a99[9]}`,contacts:list},...opts},{quoted}) }
    
    GarfieldAdd.setStatus = (status) => {
        GarfieldAdd.query({
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
	
    GarfieldAdd.public = true

    GarfieldAdd.serializeM = (m) => smsg(GarfieldAdd, m, store)

    GarfieldAdd.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); GarfieldAdd.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting 🐼 ...."); startGarfieldAdd(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startGarfieldAdd(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); GarfieldAdd.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); GarfieldAdd.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startGarfieldAdd(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startGarfieldAdd(); }
            else GarfieldAdd.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Garfield working Now... 🐼 .', update)
    })

    GarfieldAdd.ev.on('creds.update', saveState)

    // Add Other
    /** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
        GarfieldAdd.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        GarfieldAdd.sendMessage(jid, listMes, { quoted: quoted })
        }

    /** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
        GarfieldAdd.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        GarfieldAdd.sendMessage(jid, templateMessage)
        }

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
    GarfieldAdd.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: GarfieldAdd.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            GarfieldAdd.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Video
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Video
     * @param [*] button
     * @param {*} options
     * @returns
     */
    GarfieldAdd.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: GarfieldAdd.waUploadToServer })
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
            GarfieldAdd.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Gif
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Gif
     * @param [*] button
     * @param {*} options
     * @returns
     */
    GarfieldAdd.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: GarfieldAdd.waUploadToServer })
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
            GarfieldAdd.relayMessage(jid, template.message, { messageId: template.key.id })
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
    GarfieldAdd.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        GarfieldAdd.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    GarfieldAdd.sendText = (jid, text, quoted = '', options) => GarfieldAdd.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    GarfieldAdd.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await GarfieldAdd.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
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
    GarfieldAdd.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await GarfieldAdd.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
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
    GarfieldAdd.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await GarfieldAdd.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    GarfieldAdd.sendTextWithMentions = async (jid, text, quoted, options = {}) => GarfieldAdd.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    GarfieldAdd.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await GarfieldAdd.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
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
    GarfieldAdd.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await GarfieldAdd.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    GarfieldAdd.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
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

    GarfieldAdd.downloadMediaMessage = async (message) => {
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
    GarfieldAdd.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await GarfieldAdd.getFile(path, true)
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
       await GarfieldAdd.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
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
    GarfieldAdd.copyNForward = async (jid, message, forceForward = false, options = {}) => {
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
        await GarfieldAdd.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    GarfieldAdd.cMod = (jid, copy, text = '', sender = GarfieldAdd.user.id, options = {}) => {
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
		copy.key.fromMe = sender === GarfieldAdd.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    GarfieldAdd.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../X628/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return GarfieldAdd
}

startGarfieldAdd()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
