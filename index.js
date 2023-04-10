// Hi  I m
// Tharindu Liyanage 
// I am 16 years old developer...
// From Sri Lanka
// I am a Learning.
// Not more..
// Also I am Student
// Follow My Facebook - https://www.facebook.com/TharinduLiyanages
function _0x5a7e(){const _0x3b8e80=['373YGgZlF','.json','yargs/yargs','garfield-bot-db','4246744ebNogY','./DataFile','file-type','3zimNWm','5406624sqCxoU','5486wIbacC','5320ZsBudf','@hapi/boom','pino','chalk','awesome-phonenumber','2616VqQVsZ','4110520AgoXZB','7378452AqwOOU','5234905mrPmHN','./lib/myfunc'];_0x5a7e=function(){return _0x3b8e80;};return _0x5a7e();}function _0x281d(_0xfa4db7,_0x41cdfe){const _0x5a7e9b=_0x5a7e();return _0x281d=function(_0x281d11,_0x21baa9){_0x281d11=_0x281d11-0x1c4;let _0x3bdd15=_0x5a7e9b[_0x281d11];return _0x3bdd15;},_0x281d(_0xfa4db7,_0x41cdfe);}const _0xe0e397=_0x281d;(function(_0x15ef10,_0x32d190){const _0x117b48=_0x281d,_0x5853fd=_0x15ef10();while(!![]){try{const _0x4c6078=-parseInt(_0x117b48(0x1d4))/0x1*(parseInt(_0x117b48(0x1c9))/0x2)+-parseInt(_0x117b48(0x1c7))/0x3*(-parseInt(_0x117b48(0x1c4))/0x4)+-parseInt(_0x117b48(0x1d2))/0x5+parseInt(_0x117b48(0x1cf))/0x6*(-parseInt(_0x117b48(0x1ca))/0x7)+parseInt(_0x117b48(0x1c8))/0x8+parseInt(_0x117b48(0x1d1))/0x9+parseInt(_0x117b48(0x1d0))/0xa;if(_0x4c6078===_0x32d190)break;else _0x5853fd['push'](_0x5853fd['shift']());}catch(_0x196014){_0x5853fd['push'](_0x5853fd['shift']());}}}(_0x5a7e,0x8a682),require(_0xe0e397(0x1c5)));const {default:NeuralDBConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0xe0e397(0x1d7)),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0xe0e397(0x1d5)),pino=require(_0xe0e397(0x1cc)),{Boom}=require(_0xe0e397(0x1cb)),fs=require('fs'),yargs=require(_0xe0e397(0x1d6)),chalk=require(_0xe0e397(0x1cd)),FileType=require(_0xe0e397(0x1c6)),path=require('path'),PhoneNumber=require(_0xe0e397(0x1ce)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require('./lib/exif'),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0xe0e397(0x1d3));
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
    const GarfieldNeural = NeuralDBConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Neural Ai','OPERA','3.0.0'],
        auth: state
    })

    store.bind(GarfieldNeural.ev)
    
    // anticall auto block
    GarfieldNeural.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await GarfieldNeural.sendContact(callerId, global.owner)
    GarfieldNeural.sendMessage(callerId, { text: `Automatic Block System!\nDon't Call Bot!\nPlease Ask Or Contact The Owner To Unblock You!`}, { quoted : pa7rick })
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
        require("./Garfield")(GarfieldNeural, m, chatUpdate, store)
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
       let wm_fatih = { url : ppgc }
       if (pea[0].announce == true) {
       GarfieldNeural.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Closed By Admin, Now Only Admin Can Send Messages !`, `Group Settings Change Message`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       GarfieldNeural.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nThe Group Has Been Opened By Admin, Now Participants Can Send Messages !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       GarfieldNeural.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Restricted, Now Only Admin Can Edit Group Info !`, `Group Settings Change Message`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       GarfieldNeural.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Info Has Been Opened, Now Participants Can Edit Group Info !`, `Group Settings Change Message`, wm_fatih, [])
       } else {
       GarfieldNeural.send5ButImg(pea[0].id, `「 Group Settings Changed 」\n\nGroup Subject Has Been Changed To *${pea[0].subject}*`, `Group Settings Change Message`, wm_fatih, [])
     }
    })

    GarfieldNeural.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await GarfieldNeural.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await GarfieldNeural.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                //Get Profile Picture Group\\
                try {
                    ppgroup = await GarfieldNeural.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

//welcome\\
            let nama = await GarfieldNeural.getName(num)
memb = metadata.participants.length
                if (anu.action == 'add') { const _0x3215b5=_0x13da;(function(_0x374023,_0x5bf3e2){const _0x358c71=_0x13da,_0x128ba6=_0x374023();while(!![]){try{const _0xa4804f=-parseInt(_0x358c71(0x12f))/0x1*(-parseInt(_0x358c71(0x138))/0x2)+parseInt(_0x358c71(0x135))/0x3+-parseInt(_0x358c71(0x132))/0x4+-parseInt(_0x358c71(0x134))/0x5+parseInt(_0x358c71(0x139))/0x6*(parseInt(_0x358c71(0x12a))/0x7)+-parseInt(_0x358c71(0x133))/0x8+parseInt(_0x358c71(0x136))/0x9;if(_0xa4804f===_0x5bf3e2)break;else _0x128ba6['push'](_0x128ba6['shift']());}catch(_0x15f319){_0x128ba6['push'](_0x128ba6['shift']());}}}(_0x4dfd,0x6029e));function _0x13da(_0xb1405,_0x412d93){const _0x4dfdb3=_0x4dfd();return _0x13da=function(_0x13da95,_0x11b24d){_0x13da95=_0x13da95-0x12a;let _0x99463=_0x4dfdb3[_0x13da95];return _0x99463;},_0x13da(_0xb1405,_0x412d93);}let buttons=[{'buttonId':_0x3215b5(0x12e)+metadata[_0x3215b5(0x12d)]+'\x20','buttonText':{'displayText':'Ｗｅｌｃｏｍｅ\x20🦋\x20'},'type':0x1},{'buttonId':_0x3215b5(0x12b),'buttonText':{'displayText':_0x3215b5(0x130)},'type':0x1}],buttonMessage={'image':{'url':_0x3215b5(0x13a)},'caption':_0x3215b5(0x131)+num[_0x3215b5(0x12c)]('@')[0x0]+'\x20\x20🍂\x20\x0a𝗪𝗲𝗹𝗰𝗼𝗺𝗲\x20𝘁𝗼\x20𝘁𝗵𝗲\x20'+metadata['subject']+_0x3215b5(0x137)+metadata['desc']+'\x0a\x0a'+global['welcome'],'footer':''+global['botname'],'buttons':buttons,'headerType':0x4};GarfieldNeural['sendMessage'](anu['id'],buttonMessage);function _0x4dfd(){const _0x4562d0=['tts\x20Welcome\x20to\x20the\x20','39847Womcgz','ＢＯＴ\x20🎊','\x0a𝗛𝗶\x20@','745852QoDhIv','3917384kUnBXK','3188750MyslLo','634782DFIVNh','2516976xjbGtj','\x20🍃\x0a𝗚𝗿𝗼𝘂𝗽\x20𝗥𝘂𝗹𝗲𝘀\x20❄️\x20\x0a','28Sfgjoo','13722JbZVza','https://telegra.ph/file/8d248491bdfee372c13ca.jpg','2016npxAsB','Menu','split','subject'];_0x4dfd=function(){return _0x4562d0;};return _0x4dfd();} } else if (anu.action == 'remove') {   function _0x3df0(){const _0x7ff816=['botname','2536338dLlbsL','2695302xnuQwn','subject','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20𝙇𝙚𝙛𝙩\x20𝙏𝙝𝙚\x20','127555maGHav','split','2992936XidPrM','ＢＹＥ\x20💌\x20','6179860VSGrvF','bye','4693152wWzALo','script\x20','8689387OXihTO','🍃\x20𝘽𝙮𝙚\x20@'];_0x3df0=function(){return _0x7ff816;};return _0x3df0();}const _0x3b5278=_0x3d6b;function _0x3d6b(_0x2dacbd,_0x2b32fb){const _0x3df095=_0x3df0();return _0x3d6b=function(_0x3d6bec,_0x20de61){_0x3d6bec=_0x3d6bec-0x1f1;let _0x34140d=_0x3df095[_0x3d6bec];return _0x34140d;},_0x3d6b(_0x2dacbd,_0x2b32fb);}(function(_0x1a9a3d,_0x38db6e){const _0x7a3347=_0x3d6b,_0xf07731=_0x1a9a3d();while(!![]){try{const _0x1898e9=-parseInt(_0x7a3347(0x1fe))/0x1+parseInt(_0x7a3347(0x1fa))/0x2+-parseInt(_0x7a3347(0x1f5))/0x3+-parseInt(_0x7a3347(0x1f1))/0x4+parseInt(_0x7a3347(0x1f3))/0x5+-parseInt(_0x7a3347(0x1fb))/0x6+parseInt(_0x7a3347(0x1f7))/0x7;if(_0x1898e9===_0x38db6e)break;else _0xf07731['push'](_0xf07731['shift']());}catch(_0x3557ef){_0xf07731['push'](_0xf07731['shift']());}}}(_0x3df0,0xd101c));let buttons=[{'buttonId':'tts\x20Bye\x20,\x20good\x20luck','buttonText':{'displayText':_0x3b5278(0x1f2)},'type':0x1},{'buttonId':_0x3b5278(0x1f6),'buttonText':{'displayText':'Ｉｎｆｏ\x20🍂'},'type':0x1}],buttonMessage={'image':{'url':'https://telegra.ph/file/02c9766423058d89ddec2.jpg'},'caption':_0x3b5278(0x1f8)+num[_0x3b5278(0x1ff)]('@')[0x0]+_0x3b5278(0x1fd)+metadata[_0x3b5278(0x1fc)]+'\x0a'+global[_0x3b5278(0x1f4)],'footer':''+global[_0x3b5278(0x1f9)],'buttons':buttons,'headerType':0x4};GarfieldNeural['sendMessage'](anu['id'],buttonMessage);  }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
	
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
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click To Chat\nitem2.EMAIL;type=INTERNET:${sc}\nitem2.X-ABLabel:Script\nitem3.URL:${myweb}\nitem3.X-ABLabel:Script\nitem4.ADR:;;${region};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
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

  GarfieldNeural.ev.on('connection.update', async (update) => { const _0x1a8152=_0x2563;function _0x2563(_0x134cce,_0x48e987){const _0x5cc190=_0x5cc1();return _0x2563=function(_0x256301,_0x4dcdd7){_0x256301=_0x256301-0x1af;let _0x2d828e=_0x5cc190[_0x256301];return _0x2d828e;},_0x2563(_0x134cce,_0x48e987);}(function(_0x51e57a,_0x13f960){const _0x370a36=_0x2563,_0x2a1064=_0x51e57a();while(!![]){try{const _0x359a69=parseInt(_0x370a36(0x1c0))/0x1+parseInt(_0x370a36(0x1c9))/0x2+parseInt(_0x370a36(0x1b9))/0x3+parseInt(_0x370a36(0x1b0))/0x4*(-parseInt(_0x370a36(0x1b2))/0x5)+-parseInt(_0x370a36(0x1bd))/0x6+-parseInt(_0x370a36(0x1b5))/0x7+parseInt(_0x370a36(0x1c1))/0x8;if(_0x359a69===_0x13f960)break;else _0x2a1064['push'](_0x2a1064['shift']());}catch(_0x37c56b){_0x2a1064['push'](_0x2a1064['shift']());}}}(_0x5cc1,0x56405));const {connection,lastDisconnect}=update;if(connection===_0x1a8152(0x1c2)){let reason=new Boom(lastDisconnect?.[_0x1a8152(0x1b7)])?.[_0x1a8152(0x1bc)][_0x1a8152(0x1c3)];if(reason===DisconnectReason['badSession'])console[_0x1a8152(0x1ba)](_0x1a8152(0x1c6)),GarfieldNeural[_0x1a8152(0x1b8)]();else{if(reason===DisconnectReason[_0x1a8152(0x1c4)])console['log'](_0x1a8152(0x1b3)),startGarfieldNeural();else{if(reason===DisconnectReason[_0x1a8152(0x1c5)])console[_0x1a8152(0x1ba)](_0x1a8152(0x1b6)),startGarfieldNeural();else{if(reason===DisconnectReason['connectionReplaced'])console['log'](_0x1a8152(0x1af)),GarfieldNeural[_0x1a8152(0x1b8)]();else{if(reason===DisconnectReason['loggedOut'])console[_0x1a8152(0x1ba)]('\x20'+global[_0x1a8152(0x1c8)]+_0x1a8152(0x1b4)),GarfieldNeural[_0x1a8152(0x1b8)]();else{if(reason===DisconnectReason[_0x1a8152(0x1b1)])console['log']('🦋Restart\x20Required,\x20Restarting...'),startGarfieldNeural();else{if(reason===DisconnectReason[_0x1a8152(0x1bf)])console[_0x1a8152(0x1ba)](_0x1a8152(0x1bb)),startGarfieldNeural();else GarfieldNeural['end']('\x20'+global[_0x1a8152(0x1c8)]+_0x1a8152(0x1c7)+reason+'|'+connection);}}}}}}}console[_0x1a8152(0x1ba)](global[_0x1a8152(0x1be)]+'\x20Working\x20Now\x20'+global['emoji02']+'\x20',update);function _0x5cc1(){const _0x56b4bf=['9370riMmqG','🦋Connection\x20closed,\x20reconnecting....','\x20Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','676634PLHdvj','🦋Connection\x20Lost\x20from\x20Server,\x20reconnecting...','error','logout','505125JBNTSY','log','🦋Connection\x20TimedOut,\x20Reconnecting...','output','2895552hUtAVs','botname','timedOut','58968VOtIUZ','8582896noOPIt','close','statusCode','connectionClosed','connectionLost','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','\x20Unknown\x20DisconnectReason:\x20','emoji02','553980YKcOME','🦋Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','1376bePWCy','restartRequired'];_0x5cc1=function(){return _0x56b4bf;};return _0x5cc1();}})

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
