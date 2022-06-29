// GARFIELD v8.2 BY NOIZE PROJECTS 🐼
var _0x22b3=["\x2E\x2F\x43\x6F\x6E\x66\x69\x67","\x40\x61\x64\x69\x77\x61\x6A\x73\x68\x69\x6E\x67\x2F\x62\x61\x69\x6C\x65\x79\x73","\x2E\x2F","\x2E\x6A\x73\x6F\x6E","\x70\x69\x6E\x6F","\x40\x68\x61\x70\x69\x2F\x62\x6F\x6F\x6D","\x66\x73","\x79\x61\x72\x67\x73\x2F\x79\x61\x72\x67\x73","\x63\x68\x61\x6C\x6B","\x66\x69\x6C\x65\x2D\x74\x79\x70\x65","\x70\x61\x74\x68","\x61\x77\x65\x73\x6F\x6D\x65\x2D\x70\x68\x6F\x6E\x65\x6E\x75\x6D\x62\x65\x72","\x2E\x2F\x6C\x69\x62\x2F\x65\x78\x69\x66","\x2E\x2F\x6C\x69\x62\x2F\x6D\x79\x66\x75\x6E\x63"];require(_0x22b3[0]);const {default:GarfieldFastConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x22b3[1]);const {state,saveState}=useSingleFileAuthState(`${_0x22b3[2]}${sessionName}${_0x22b3[3]}`);const pino=require(_0x22b3[4]);const {Boom}=require(_0x22b3[5]);const fs=require(_0x22b3[6]);const yargs=require(_0x22b3[7]);const chalk=require(_0x22b3[8]);const FileType=require(_0x22b3[9]);const path=require(_0x22b3[10]);const PhoneNumber=require(_0x22b3[11]);const {imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x22b3[12]);const {smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x22b3[13])

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

async function startGarfieldAdd() {
    const GarfieldAdd = GarfieldFastConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['ＸＮＯＤＥＳ(Secured)','Safari','1.0.0'],
        auth: state
    })

    store.bind(GarfieldAdd.ev)
    
    // anticall auto block
    GarfieldAdd.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await GarfieldAdd.sendContact(callerId, global.owner)
    GarfieldAdd.sendMessage(callerId, { text: `Automatic Block System!\nDon't Call Bot!\nPlease Ask Or Contact The Owner To Unblock You!`}, { quoted : pa7rick })
    await sleep(8000)
    await GarfieldAdd.updateBlockStatus(callerId, "block")
    }
    })

    GarfieldAdd.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!GarfieldAdd.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(GarfieldAdd, mek, store)
        require("./Garfield")(GarfieldAdd, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    // Group Update
    GarfieldAdd.ev.on('groups.update', async pea => {
       try {
       ppgc = await GarfieldAdd.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://shortlink.GarfieldAddarridho.my.id/rg1oT'
       }
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       GarfieldAdd.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Closed By Admin, Now Only Admin Can Send Messages !`, `Group Settings Change Message`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       GarfieldAdd.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Opened By Admin, Now Participants Can Send Messages !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       GarfieldAdd.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Restricted, Now Only Admin Can Edit Group Info !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       GarfieldAdd.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Opened, Now Participants Can Edit Group Info !`, `Group Settings Change Message`, wm_fatih, [])
       } else {
       GarfieldAdd.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Subject Has Been Changed To *${pea[0].subject}*`, `Group Settings Change Message`, wm_fatih, [])
     }
    })

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

                //Get Profile Picture Group\\
                try {
                    ppgroup = await GarfieldAdd.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

//welcome\\
        let nama = await GarfieldAdd.getName(num)
memb = metadata.participants.length

Kon = await getBuffer(`https://hardianto.xyz/api/welcome3?profile=${encodeURIComponent(ppuser)}&name=${encodeURIComponent(nama)}&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=${encodeURIComponent(metadata.subject)}&member=${encodeURIComponent(memb)}`)

Tol = await getBuffer(`https://hardianto.xyz/api/goodbye3?profile=${encodeURIComponent(ppuser)}&name=${encodeURIComponent(nama)}&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=${encodeURIComponent(metadata.subject)}&member=${encodeURIComponent(memb)}`)
                if (anu.action == 'add') { var _0x7af9=["\x69\x64","\x0D\x0A\uD83E\uDD8B\x20\x2A\x48\x69\x2A\x20\x40","\x40","\x73\x70\x6C\x69\x74","\x2C\x0D\x0A\uD83E\uDD8B\x20\x2A\x57\x65\x6C\x63\x6F\x6D\x65\x20\x54\x6F\x2A\x20","\x73\x75\x62\x6A\x65\x63\x74","\x0D\x0A\x0D\x0A\uD83E\uDD8B\x20\x2A\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x2A\x3A\x20","\x64\x65\x73\x63","\x20","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];GarfieldAdd[_0x7af9[9]](anu[_0x7af9[0]],{image:Kon,contextInfo:{mentionedJid:[num]},caption:`${_0x7af9[1]}${num[_0x7af9[3]](_0x7af9[2])[0]}${_0x7af9[4]}${metadata[_0x7af9[5]]}${_0x7af9[6]}${metadata[_0x7af9[7]]}${_0x7af9[8]}`})
                
 } else if (anu.action == 'remove') {  var _0xf774=["\x69\x64","\uD83E\uDD8B\x20\x40","\x40","\x73\x70\x6C\x69\x74","\x20\x4C\x65\x66\x74\x20","\x73\x75\x62\x6A\x65\x63\x74","\x0D\x0A\x2A\x42\x79\x65\x20\x42\x79\x65\x20\x4D\x6F\x74\x68\x65\x72\x20\x46\x23\x63\x6B\x65\x72\x20\uD83E\uDD8B\x2A","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];GarfieldAdd[_0xf774[7]](anu[_0xf774[0]],{image:Tol,contextInfo:{mentionedJid:[num]},caption:`${_0xf774[1]}${num[_0xf774[3]](_0xf774[2])[0]}${_0xf774[4]}${metadata[_0xf774[5]]}${_0xf774[6]}`})
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
    //Setting\\
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
    
    GarfieldAdd.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await GarfieldAdd.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click To Chat\nitem2.EMAIL;type=INTERNET:${sc}\nitem2.X-ABLabel:Script\nitem3.URL:${myweb}\nitem3.X-ABLabel:Script\nitem4.ADR:;;${region};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	GarfieldAdd.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
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

    GarfieldAdd.ev.on('connection.update', async (update) => { var _0x2d7f=["\x63\x6C\x6F\x73\x65","\x73\x74\x61\x74\x75\x73\x43\x6F\x64\x65","\x6F\x75\x74\x70\x75\x74","\x65\x72\x72\x6F\x72","\x62\x61\x64\x53\x65\x73\x73\x69\x6F\x6E","\x42\x61\x64\x20\x53\x65\x73\x73\x69\x6F\x6E\x20\x46\x69\x6C\x65\x2C\x20\x50\x6C\x65\x61\x73\x65\x20\x44\x65\x6C\x65\x74\x65\x20\x53\x65\x73\x73\x69\x6F\x6E\x20\x61\x6E\x64\x20\x53\x63\x61\x6E\x20\x41\x67\x61\x69\x6E","\x6C\x6F\x67","\x6C\x6F\x67\x6F\x75\x74","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x43\x6C\x6F\x73\x65\x64","\uD83D\uDC3C\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x20\x63\x6C\x6F\x73\x65\x64\x2C\x20\x72\x65\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67\x2E\x2E\x2E\x2E","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x4C\x6F\x73\x74","\uD83D\uDC3C\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x20\x4C\x6F\x73\x74\x20\x66\x72\x6F\x6D\x20\x53\x65\x72\x76\x65\x72\x2C\x20\x72\x65\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67\x2E\x2E\x2E","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x52\x65\x70\x6C\x61\x63\x65\x64","\uD83D\uDC3C\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x20\x52\x65\x70\x6C\x61\x63\x65\x64\x2C\x20\x41\x6E\x6F\x74\x68\x65\x72\x20\x4E\x65\x77\x20\x53\x65\x73\x73\x69\x6F\x6E\x20\x4F\x70\x65\x6E\x65\x64\x2C\x20\x50\x6C\x65\x61\x73\x65\x20\x43\x6C\x6F\x73\x65\x20\x43\x75\x72\x72\x65\x6E\x74\x20\x53\x65\x73\x73\x69\x6F\x6E\x20\x46\x69\x72\x73\x74","\x6C\x6F\x67\x67\x65\x64\x4F\x75\x74","\uD83D\uDC3C\x44\x65\x76\x69\x63\x65\x20\x4C\x6F\x67\x67\x65\x64\x20\x4F\x75\x74\x2C\x20\x50\x6C\x65\x61\x73\x65\x20\x53\x63\x61\x6E\x20\x41\x67\x61\x69\x6E\x20\x41\x6E\x64\x20\x52\x75\x6E\x2E","\x72\x65\x73\x74\x61\x72\x74\x52\x65\x71\x75\x69\x72\x65\x64","\uD83D\uDC3C\x52\x65\x73\x74\x61\x72\x74\x20\x52\x65\x71\x75\x69\x72\x65\x64\x2C\x20\x52\x65\x73\x74\x61\x72\x74\x69\x6E\x67\x2E\x2E\x2E","\x74\x69\x6D\x65\x64\x4F\x75\x74","\uD83D\uDC3C\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x20\x54\x69\x6D\x65\x64\x4F\x75\x74\x2C\x20\x52\x65\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67\x2E\x2E\x2E","\uD83D\uDC3C\x55\x6E\x6B\x6E\x6F\x77\x6E\x20\x44\x69\x73\x63\x6F\x6E\x6E\x65\x63\x74\x52\x65\x61\x73\x6F\x6E\x3A\x20","\x7C","","\x65\x6E\x64","\x47\x61\x72\x66\x69\x65\x6C\x64\x20\x57\x6F\x72\x6B\x69\x6E\x67\x20\x4E\x6F\x77\x2E\x2E\x20\uD83D\uDC3C\x2E"];const {connection,lastDisconnect}=update;if(connection=== _0x2d7f[0]){let reason= new Boom(lastDisconnect[_0x2d7f[3]])[_0x2d7f[2]][_0x2d7f[1]];if(reason=== DisconnectReason[_0x2d7f[4]]){console[_0x2d7f[6]](`${_0x2d7f[5]}`);GarfieldAdd[_0x2d7f[7]]()}else {if(reason=== DisconnectReason[_0x2d7f[8]]){console[_0x2d7f[6]](_0x2d7f[9]);startGarfieldAdd()}else {if(reason=== DisconnectReason[_0x2d7f[10]]){console[_0x2d7f[6]](_0x2d7f[11]);startGarfieldAdd()}else {if(reason=== DisconnectReason[_0x2d7f[12]]){console[_0x2d7f[6]](_0x2d7f[13]);GarfieldAdd[_0x2d7f[7]]()}else {if(reason=== DisconnectReason[_0x2d7f[14]]){console[_0x2d7f[6]](`${_0x2d7f[15]}`);GarfieldAdd[_0x2d7f[7]]()}else {if(reason=== DisconnectReason[_0x2d7f[16]]){console[_0x2d7f[6]](_0x2d7f[17]);startGarfieldAdd()}else {if(reason=== DisconnectReason[_0x2d7f[18]]){console[_0x2d7f[6]](_0x2d7f[19]);startGarfieldAdd()}else {GarfieldAdd[_0x2d7f[23]](`${_0x2d7f[20]}${reason}${_0x2d7f[21]}${connection}${_0x2d7f[22]}`)}}}}}}}};console[_0x2d7f[6]](_0x2d7f[24],update)  })

    GarfieldAdd.ev.on('creds.update', saveState)

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
    GarfieldAdd.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: GarfieldAdd.waUploadToServer })
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
