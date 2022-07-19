
function _0x24f4(){const _0x2ceb7c=['@adiwajshing/baileys','1742024IFHjAy','./lib/exif','.json','return\x20(function()\x20','console','1211680AUQUPK','info','warn','170UndlzM','path','7ZwjWYF','1391LJmLBp','2242602kyhKEl','3056335aUwNte','length','./Config','apply','file-type','prototype','pino','{}.constructor(\x22return\x20this\x22)(\x20)','(((.+)+)+)+$','16205470cebihI','@hapi/boom','toString','trace','bind','constructor','chalk','search','log','9fLlBdN','yargs/yargs','table','2881812jeaQtJ'];_0x24f4=function(){return _0x2ceb7c;};return _0x24f4();}const _0x1b246d=_0x3553;(function(_0x56fedc,_0x34e9ad){const _0x4e8ced=_0x3553,_0x2ec130=_0x56fedc();while(!![]){try{const _0x5d7bb2=parseInt(_0x4e8ced(0x86))/0x1*(parseInt(_0x4e8ced(0x83))/0x2)+-parseInt(_0x4e8ced(0x87))/0x3+-parseInt(_0x4e8ced(0x7b))/0x4+parseInt(_0x4e8ced(0x88))/0x5+-parseInt(_0x4e8ced(0x79))/0x6*(parseInt(_0x4e8ced(0x85))/0x7)+-parseInt(_0x4e8ced(0x80))/0x8+-parseInt(_0x4e8ced(0x9a))/0x9*(-parseInt(_0x4e8ced(0x91))/0xa);if(_0x5d7bb2===_0x34e9ad)break;else _0x2ec130['push'](_0x2ec130['shift']());}catch(_0x155dfa){_0x2ec130['push'](_0x2ec130['shift']());}}}(_0x24f4,0x82acf));const _0x3ec78e=(function(){let _0x1faae2=!![];return function(_0x5c5f54,_0xcf7791){const _0x10c506=_0x1faae2?function(){const _0x111281=_0x3553;if(_0xcf7791){const _0x5d8dd3=_0xcf7791[_0x111281(0x8b)](_0x5c5f54,arguments);return _0xcf7791=null,_0x5d8dd3;}}:function(){};return _0x1faae2=![],_0x10c506;};}()),_0x314724=_0x3ec78e(this,function(){const _0x208c2e=_0x3553;return _0x314724[_0x208c2e(0x93)]()['search'](_0x208c2e(0x90))[_0x208c2e(0x93)]()[_0x208c2e(0x96)](_0x314724)[_0x208c2e(0x98)]('(((.+)+)+)+$');});_0x314724();const _0x18cc33=(function(){let _0x40113c=!![];return function(_0x4a2a9a,_0x9459eb){const _0x15becc=_0x40113c?function(){if(_0x9459eb){const _0x5853ba=_0x9459eb['apply'](_0x4a2a9a,arguments);return _0x9459eb=null,_0x5853ba;}}:function(){};return _0x40113c=![],_0x15becc;};}()),_0xba061d=_0x18cc33(this,function(){const _0x273545=_0x3553;let _0x3f6196;try{const _0x8f9500=Function(_0x273545(0x7e)+_0x273545(0x8f)+');');_0x3f6196=_0x8f9500();}catch(_0x11687b){_0x3f6196=window;}const _0x3b385c=_0x3f6196['console']=_0x3f6196[_0x273545(0x7f)]||{},_0x3811d6=[_0x273545(0x99),_0x273545(0x82),_0x273545(0x81),'error','exception',_0x273545(0x9c),_0x273545(0x94)];for(let _0x54a33b=0x0;_0x54a33b<_0x3811d6[_0x273545(0x89)];_0x54a33b++){const _0x2ba593=_0x18cc33[_0x273545(0x96)][_0x273545(0x8d)][_0x273545(0x95)](_0x18cc33),_0x40f81d=_0x3811d6[_0x54a33b],_0xcc4ef6=_0x3b385c[_0x40f81d]||_0x2ba593;_0x2ba593['__proto__']=_0x18cc33['bind'](_0x18cc33),_0x2ba593[_0x273545(0x93)]=_0xcc4ef6['toString'][_0x273545(0x95)](_0xcc4ef6),_0x3b385c[_0x40f81d]=_0x2ba593;}});function _0x3553(_0xfd164f,_0x361ed4){const _0x2629e7=_0x24f4();return _0x3553=function(_0xba061d,_0x18cc33){_0xba061d=_0xba061d-0x79;let _0x2b52a4=_0x2629e7[_0xba061d];return _0x2b52a4;},_0x3553(_0xfd164f,_0x361ed4);}_0xba061d(),require(_0x1b246d(0x8a));const {default:xnodesIncConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x1b246d(0x7a)),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0x1b246d(0x7d)),pino=require(_0x1b246d(0x8e)),{Boom}=require(_0x1b246d(0x92)),fs=require('fs'),yargs=require(_0x1b246d(0x9b)),chalk=require(_0x1b246d(0x97)),FileType=require(_0x1b246d(0x8c)),path=require(_0x1b246d(0x84)),PhoneNumber=require('awesome-phonenumber'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x1b246d(0x7c)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require('./lib/myfunc');

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
    const GarfieldNeural = xnodesIncConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣 𝖡𝖮Т','Safari','1.0.0'],
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

Kon = await getBuffer('https://i.ibb.co/mBD5T0q/download.gif')

Tol = await getBuffer('https://i.ibb.co/gDRzMmX/IMG-20220720-001723.jpg')
                if (anu.action == 'add') {
                    GarfieldNeural.sendMessage(anu.id, { image: Kon, contextInfo: { mentionedJid: [num] }, caption: `
*🦋 Hi* @${num.split("@")[0]},
*🦋 Welcome To* ${metadata.subject}

*🦋 Description:* ${metadata.desc}
`} )
                } else if (anu.action == 'remove') {
                    GarfieldNeural.sendMessage(anu.id, { image: Tol, contextInfo: { mentionedJid: [num] }, caption: `🦋 @${num.split("@")[0]} Left ${metadata.subject}

*Bye Bye 💐*` })
                }
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

    GarfieldNeural.ev.on('connection.update', async (update) => { function _0x2fef(_0xa02413,_0x125aa7){const _0x514d1a=_0x4449();return _0x2fef=function(_0x2c11be,_0x216f20){_0x2c11be=_0x2c11be-0x1c8;let _0x1161fb=_0x514d1a[_0x2c11be];return _0x1161fb;},_0x2fef(_0xa02413,_0x125aa7);}const _0x10736e=_0x2fef;(function(_0x15ec78,_0x5211e3){const _0x515af2=_0x2fef,_0x37939d=_0x15ec78();while(!![]){try{const _0x289943=-parseInt(_0x515af2(0x1f3))/0x1+parseInt(_0x515af2(0x1d8))/0x2+-parseInt(_0x515af2(0x1de))/0x3+parseInt(_0x515af2(0x1d1))/0x4*(parseInt(_0x515af2(0x1d5))/0x5)+parseInt(_0x515af2(0x1ca))/0x6*(-parseInt(_0x515af2(0x1f4))/0x7)+-parseInt(_0x515af2(0x1d0))/0x8+parseInt(_0x515af2(0x1d3))/0x9;if(_0x289943===_0x5211e3)break;else _0x37939d['push'](_0x37939d['shift']());}catch(_0xc304ed){_0x37939d['push'](_0x37939d['shift']());}}}(_0x4449,0xecfa8));const _0xcebbcc=(function(){let _0x27c361=!![];return function(_0x429cd0,_0x25fbc8){const _0x5d613a=_0x27c361?function(){const _0x4c93ff=_0x2fef;if(_0x25fbc8){const _0x2a3136=_0x25fbc8[_0x4c93ff(0x1f1)](_0x429cd0,arguments);return _0x25fbc8=null,_0x2a3136;}}:function(){};return _0x27c361=![],_0x5d613a;};}()),_0x4d1664=_0xcebbcc(this,function(){const _0x564a90=_0x2fef;return _0x4d1664['toString']()[_0x564a90(0x1e6)](_0x564a90(0x1d4))[_0x564a90(0x1cc)]()[_0x564a90(0x1ef)](_0x4d1664)['search'](_0x564a90(0x1d4));});_0x4d1664();const _0x216f20=(function(){let _0x3ebba4=!![];return function(_0x8b6fc2,_0x5bc4d1){const _0x3572be=_0x3ebba4?function(){if(_0x5bc4d1){const _0x2c1e00=_0x5bc4d1['apply'](_0x8b6fc2,arguments);return _0x5bc4d1=null,_0x2c1e00;}}:function(){};return _0x3ebba4=![],_0x3572be;};}()),_0x2c11be=_0x216f20(this,function(){const _0x14ef18=_0x2fef;let _0x40e9ba;try{const _0x5c5708=Function(_0x14ef18(0x1e7)+_0x14ef18(0x1df)+');');_0x40e9ba=_0x5c5708();}catch(_0x818658){_0x40e9ba=window;}const _0x3d1a7c=_0x40e9ba[_0x14ef18(0x1f5)]=_0x40e9ba[_0x14ef18(0x1f5)]||{},_0x1a31d6=[_0x14ef18(0x1ed),_0x14ef18(0x1e1),_0x14ef18(0x1c8),_0x14ef18(0x1d9),_0x14ef18(0x1eb),_0x14ef18(0x1c9),_0x14ef18(0x1db)];for(let _0x3ad1ad=0x0;_0x3ad1ad<_0x1a31d6[_0x14ef18(0x1e3)];_0x3ad1ad++){const _0x423455=_0x216f20[_0x14ef18(0x1ef)][_0x14ef18(0x1f2)][_0x14ef18(0x1dd)](_0x216f20),_0x39ce0d=_0x1a31d6[_0x3ad1ad],_0x11eae5=_0x3d1a7c[_0x39ce0d]||_0x423455;_0x423455[_0x14ef18(0x1e0)]=_0x216f20['bind'](_0x216f20),_0x423455['toString']=_0x11eae5[_0x14ef18(0x1cc)][_0x14ef18(0x1dd)](_0x11eae5),_0x3d1a7c[_0x39ce0d]=_0x423455;}});_0x2c11be();const {connection,lastDisconnect}=update;function _0x4449(){const _0x3c9c63=['exception','🦋Connection\x20closed,\x20reconnecting....','log','logout','constructor','connectionReplaced','apply','prototype','715750sdlHeP','1225gWxlHy','console','info','table','36678YuuWeU','connectionLost','toString','𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽\x20𝖡𝗈𝗍\x20𝖶𝗈𝗋𝗄𝗂𝗇𝗀\x20𝖭𝗈𝗐\x20🎉\x20🟡🔴🔵🟢','🦋Connection\x20TimedOut,\x20Reconnecting...','restartRequired','5968488AULETS','162512HXRVcd','timedOut','31317300eENWag','(((.+)+)+)+$','85nKEUQH','close','🦋Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','2137582rzVoKq','error','🦋Restart\x20Required,\x20Restarting...','trace','🦋Connection\x20Lost\x20from\x20Server,\x20reconnecting...','bind','5210751WWUABH','{}.constructor(\x22return\x20this\x22)(\x20)','__proto__','warn','🦋Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','length','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','loggedOut','search','return\x20(function()\x20','badSession','statusCode','🦋Unknown\x20DisconnectReason:\x20'];_0x4449=function(){return _0x3c9c63;};return _0x4449();}if(connection===_0x10736e(0x1d6)){let reason=new Boom(lastDisconnect?.[_0x10736e(0x1d9)])?.['output'][_0x10736e(0x1e9)];if(reason===DisconnectReason[_0x10736e(0x1e8)])console[_0x10736e(0x1ed)](_0x10736e(0x1e4)),GarfieldNeural['logout']();else{if(reason===DisconnectReason['connectionClosed'])console[_0x10736e(0x1ed)](_0x10736e(0x1ec)),startGarfieldNeural();else{if(reason===DisconnectReason[_0x10736e(0x1cb)])console[_0x10736e(0x1ed)](_0x10736e(0x1dc)),startGarfieldNeural();else{if(reason===DisconnectReason[_0x10736e(0x1f0)])console['log'](_0x10736e(0x1d7)),GarfieldNeural['logout']();else{if(reason===DisconnectReason[_0x10736e(0x1e5)])console[_0x10736e(0x1ed)](_0x10736e(0x1e2)),GarfieldNeural[_0x10736e(0x1ee)]();else{if(reason===DisconnectReason[_0x10736e(0x1cf)])console[_0x10736e(0x1ed)](_0x10736e(0x1da)),startGarfieldNeural();else{if(reason===DisconnectReason[_0x10736e(0x1d2)])console[_0x10736e(0x1ed)](_0x10736e(0x1ce)),startGarfieldNeural();else GarfieldNeural['end'](_0x10736e(0x1ea)+reason+'|'+connection);}}}}}}}console[_0x10736e(0x1ed)](_0x10736e(0x1cd),update); })

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
