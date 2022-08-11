// Hi  I m
// Tharindu Liyanage
// I am 16 years old developer...
// From Sri Lanka
// I am a Learning.
// Not more..
// Also I am Student
// Follow My Facebook - https://www.facebook.com/TharinduLiyanages
function _0x318e(_0xc9355a,_0x4b83ef){const _0x2ef590=_0x2ef5();return _0x318e=function(_0x318eb4,_0x165d9a){_0x318eb4=_0x318eb4-0x144;let _0x2b3f50=_0x2ef590[_0x318eb4];return _0x2b3f50;},_0x318e(_0xc9355a,_0x4b83ef);}const _0x1487eb=_0x318e;(function(_0xa0674c,_0x530d2a){const _0x590b44=_0x318e,_0x1e1f9c=_0xa0674c();while(!![]){try{const _0x280c50=-parseInt(_0x590b44(0x150))/0x1*(-parseInt(_0x590b44(0x155))/0x2)+-parseInt(_0x590b44(0x152))/0x3+parseInt(_0x590b44(0x153))/0x4*(-parseInt(_0x590b44(0x156))/0x5)+-parseInt(_0x590b44(0x148))/0x6*(-parseInt(_0x590b44(0x144))/0x7)+parseInt(_0x590b44(0x14c))/0x8*(parseInt(_0x590b44(0x147))/0x9)+parseInt(_0x590b44(0x151))/0xa*(parseInt(_0x590b44(0x158))/0xb)+-parseInt(_0x590b44(0x15b))/0xc*(parseInt(_0x590b44(0x159))/0xd);if(_0x280c50===_0x530d2a)break;else _0x1e1f9c['push'](_0x1e1f9c['shift']());}catch(_0x4b6917){_0x1e1f9c['push'](_0x1e1f9c['shift']());}}}(_0x2ef5,0x5dc2a),require(_0x1487eb(0x14e)));const {default:GarfieldXnodes,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x1487eb(0x154)),{state,saveState}=useSingleFileAuthState('./'+sessionName+_0x1487eb(0x14f)),pino=require(_0x1487eb(0x14a)),{Boom}=require(_0x1487eb(0x15a)),fs=require('fs'),yargs=require(_0x1487eb(0x146)),chalk=require(_0x1487eb(0x14d)),FileType=require(_0x1487eb(0x157)),path=require(_0x1487eb(0x145)),PhoneNumber=require('awesome-phonenumber'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x1487eb(0x14b)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x1487eb(0x149));function _0x2ef5(){const _0x45d63f=['11NFJOrY','533zkELTt','@hapi/boom','65340zsgTXD','7ghbiVR','path','yargs/yargs','148815NeZuBK','1561332CbQUuk','./lib/myfunc','pino','./lib/exif','216NrHysk','chalk','./Config','.json','677723tWZYmn','2582700Lsdhqg','1772748CAOAJs','52upRkvP','@adiwajshing/baileys','2JNczSg','170945qmKtLr','file-type'];_0x2ef5=function(){return _0x45d63f;};return _0x2ef5();}

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
    const GarfieldNeural = GarfieldXnodes({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['GARFIELD','Safari','1.0.0'],
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
function _0x8d00(_0x3a94a3,_0x350a69){const _0x46034f=_0x4603();return _0x8d00=function(_0x8d0035,_0x4f1aa4){_0x8d0035=_0x8d0035-0x86;let _0x587148=_0x46034f[_0x8d0035];return _0x587148;},_0x8d00(_0x3a94a3,_0x350a69);}const _0x575b25=_0x8d00;(function(_0x3bcc57,_0x5e8bb7){const _0x1b9abe=_0x8d00,_0x1a25cd=_0x3bcc57();while(!![]){try{const _0x4d64b0=parseInt(_0x1b9abe(0x94))/0x1*(-parseInt(_0x1b9abe(0x8d))/0x2)+parseInt(_0x1b9abe(0x8c))/0x3+parseInt(_0x1b9abe(0xaa))/0x4*(-parseInt(_0x1b9abe(0xa1))/0x5)+-parseInt(_0x1b9abe(0xac))/0x6+parseInt(_0x1b9abe(0x87))/0x7+parseInt(_0x1b9abe(0x89))/0x8*(-parseInt(_0x1b9abe(0x95))/0x9)+parseInt(_0x1b9abe(0x96))/0xa*(parseInt(_0x1b9abe(0x9a))/0xb);if(_0x4d64b0===_0x5e8bb7)break;else _0x1a25cd['push'](_0x1a25cd['shift']());}catch(_0x44b161){_0x1a25cd['push'](_0x1a25cd['shift']());}}}(_0x4603,0xa841d),GarfieldNeural['ev']['on'](_0x575b25(0x8f),async _0x113d4f=>{const _0x4a64f1=_0x575b25;console[_0x4a64f1(0xa4)](_0x113d4f);try{let _0x8ccee7=await GarfieldNeural[_0x4a64f1(0x97)](_0x113d4f['id']),_0x3d7a0e=_0x113d4f['participants'];for(let _0x57501a of _0x3d7a0e){try{ppuser=await GarfieldNeural[_0x4a64f1(0xa2)](_0x57501a,'image');}catch{ppuser=_0x4a64f1(0xa7);}try{ppgroup=await GarfieldNeural['profilePictureUrl'](_0x113d4f['id'],_0x4a64f1(0x99));}catch{ppgroup=_0x4a64f1(0xa7);}let _0x8d9ad4=await GarfieldNeural[_0x4a64f1(0x88)](_0x57501a);memb=_0x8ccee7[_0x4a64f1(0x9b)][_0x4a64f1(0x98)],Kon=await getBuffer(_0x4a64f1(0xa6)),Tol=await getBuffer(_0x4a64f1(0x92));if(_0x113d4f[_0x4a64f1(0xa5)]=='add')GarfieldNeural['sendMessage'](_0x113d4f['id'],{'image':Kon,'contextInfo':{'mentionedJid':[_0x57501a]},'caption':_0x4a64f1(0x8b)+_0x57501a[_0x4a64f1(0x9f)]('@')[0x0]+',\x0a🦋\x20Welcome\x20To\x20'+_0x8ccee7[_0x4a64f1(0xa0)]+_0x4a64f1(0xa9)+_0x8ccee7[_0x4a64f1(0x9e)]+'\x0a\x0a🦋\x20'+global[_0x4a64f1(0x8a)]});else _0x113d4f[_0x4a64f1(0xa5)]==_0x4a64f1(0xa8)&&GarfieldNeural[_0x4a64f1(0x9d)](_0x113d4f['id'],{'image':Tol,'contextInfo':{'mentionedJid':[_0x57501a]},'caption':_0x4a64f1(0x90)+_0x57501a[_0x4a64f1(0x9f)]('@')[0x0]+_0x4a64f1(0x86)+_0x8ccee7[_0x4a64f1(0xa0)]+'\x0a\x0a'+global['bye']});}}catch(_0x388b2b){console[_0x4a64f1(0xa4)](_0x388b2b);}}),GarfieldNeural[_0x575b25(0x9c)]=_0x1554d1=>{const _0x3c7f32=_0x575b25;if(!_0x1554d1)return _0x1554d1;if(/:\d+@/gi[_0x3c7f32(0x91)](_0x1554d1)){let _0x3eddf6=jidDecode(_0x1554d1)||{};return _0x3eddf6[_0x3c7f32(0x93)]&&_0x3eddf6['server']&&_0x3eddf6[_0x3c7f32(0x93)]+'@'+_0x3eddf6[_0x3c7f32(0x8e)]||_0x1554d1;}else return _0x1554d1;},GarfieldNeural['ev']['on'](_0x575b25(0xab),_0x3a4146=>{const _0x47e8f9=_0x575b25;for(let _0x6a0b1d of _0x3a4146){let _0x34906f=GarfieldNeural[_0x47e8f9(0x9c)](_0x6a0b1d['id']);if(store&&store['contacts'])store[_0x47e8f9(0xa3)][_0x34906f]={'id':_0x34906f,'name':_0x6a0b1d['notify']};}}));function _0x4603(){const _0x1b2af7=['contacts.update','2264010ZgHuzD','\x20Left\x20','3104402PJDomo','getName','40ZKvGbX','welcome','\x0a🦋\x20Hi\x20@','446232TrLzLl','2Xglrrn','server','group-participants.update','🦋\x20@','test','https://i.ibb.co/Hn1cY18/IMG-20220721-155108.jpg','user','580091vjtlrs','2154249VuyDtT','8543720IVJdPa','groupMetadata','length','image','33CrJsPd','participants','decodeJid','sendMessage','desc','split','subject','37135prUYHE','profilePictureUrl','contacts','log','action','https://i.ibb.co/kGd1F8M/istockphoto-1185848117-170667a.jpg','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','remove','\x0a\x0a🦋\x20Description:\x20','168nmlOff'];_0x4603=function(){return _0x1b2af7;};return _0x4603();}
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
	function _0x1366(_0x6b533a,_0x3c0f69){const _0x5cee37=_0x5cee();return _0x1366=function(_0x1366fc,_0x5afe60){_0x1366fc=_0x1366fc-0x165;let _0x49de4b=_0x5cee37[_0x1366fc];return _0x49de4b;},_0x1366(_0x6b533a,_0x3c0f69);}function _0x5cee(){const _0x5c2926=['11228PKivcv','connectionLost','311121EspGGl','close','timedOut','🦋Restart\x20Required,\x20Restarting...','output','1464180wzhXxr','🦋Unknown\x20DisconnectReason:\x20','1095870NLsizm','1571292PzkcWD','55VcuuFK','log','connectionClosed','loggedOut','botname','🦋Connection\x20closed,\x20reconnecting....','1904959MoHCOg','serializeM','error','connection.update','9136bZICiq','public','🦋Connection\x20Lost\x20from\x20Server,\x20reconnecting...','connectionReplaced','creds.update','3303YwiHQB','logout','🦋Connection\x20TimedOut,\x20Reconnecting...','\x20Working\x20Now\x20🦋','badSession','restartRequired'];_0x5cee=function(){return _0x5c2926;};return _0x5cee();}const _0x1fa81c=_0x1366;(function(_0x5c2bff,_0x44e47e){const _0x3cb610=_0x1366,_0x3e1aae=_0x5c2bff();while(!![]){try{const _0x274e9a=parseInt(_0x3cb610(0x17c))/0x1+parseInt(_0x3cb610(0x181))/0x2+parseInt(_0x3cb610(0x183))/0x3+parseInt(_0x3cb610(0x17a))/0x4*(-parseInt(_0x3cb610(0x165))/0x5)+-parseInt(_0x3cb610(0x184))/0x6+-parseInt(_0x3cb610(0x16b))/0x7+parseInt(_0x3cb610(0x16f))/0x8*(-parseInt(_0x3cb610(0x174))/0x9);if(_0x274e9a===_0x44e47e)break;else _0x3e1aae['push'](_0x3e1aae['shift']());}catch(_0x28df49){_0x3e1aae['push'](_0x3e1aae['shift']());}}}(_0x5cee,0x67a2b),GarfieldNeural[_0x1fa81c(0x170)]=!![],GarfieldNeural[_0x1fa81c(0x16c)]=_0xdad58a=>smsg(GarfieldNeural,_0xdad58a,store),GarfieldNeural['ev']['on'](_0x1fa81c(0x16e),async _0x40504c=>{const _0x1f7311=_0x1fa81c,{connection:_0x5de5f9,lastDisconnect:_0x5bc769}=_0x40504c;if(_0x5de5f9===_0x1f7311(0x17d)){let _0x7b121b=new Boom(_0x5bc769?.[_0x1f7311(0x16d)])?.[_0x1f7311(0x180)]['statusCode'];if(_0x7b121b===DisconnectReason[_0x1f7311(0x178)])console[_0x1f7311(0x166)]('Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again'),GarfieldNeural['logout']();else{if(_0x7b121b===DisconnectReason[_0x1f7311(0x167)])console[_0x1f7311(0x166)](_0x1f7311(0x16a)),startGarfieldNeural();else{if(_0x7b121b===DisconnectReason[_0x1f7311(0x17b)])console[_0x1f7311(0x166)](_0x1f7311(0x171)),startGarfieldNeural();else{if(_0x7b121b===DisconnectReason[_0x1f7311(0x172)])console[_0x1f7311(0x166)]('🦋Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'),GarfieldNeural[_0x1f7311(0x175)]();else{if(_0x7b121b===DisconnectReason[_0x1f7311(0x168)])console[_0x1f7311(0x166)]('🦋Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.'),GarfieldNeural[_0x1f7311(0x175)]();else{if(_0x7b121b===DisconnectReason[_0x1f7311(0x179)])console[_0x1f7311(0x166)](_0x1f7311(0x17f)),startGarfieldNeural();else{if(_0x7b121b===DisconnectReason[_0x1f7311(0x17e)])console[_0x1f7311(0x166)](_0x1f7311(0x176)),startGarfieldNeural();else GarfieldNeural['end'](_0x1f7311(0x182)+_0x7b121b+'|'+_0x5de5f9);}}}}}}}console[_0x1f7311(0x166)](global[_0x1f7311(0x169)]+_0x1f7311(0x177),_0x40504c);}),GarfieldNeural['ev']['on'](_0x1fa81c(0x173),saveState));
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
    const _0x1d6e90=_0x452b;(function(_0x468023,_0x129919){const _0x5bb95f=_0x452b,_0x575e92=_0x468023();while(!![]){try{const _0x576829=-parseInt(_0x5bb95f(0x15f))/0x1+-parseInt(_0x5bb95f(0x174))/0x2*(-parseInt(_0x5bb95f(0x173))/0x3)+-parseInt(_0x5bb95f(0x15c))/0x4+-parseInt(_0x5bb95f(0x171))/0x5+parseInt(_0x5bb95f(0x160))/0x6*(-parseInt(_0x5bb95f(0x16e))/0x7)+parseInt(_0x5bb95f(0x161))/0x8+parseInt(_0x5bb95f(0x16f))/0x9*(parseInt(_0x5bb95f(0x15d))/0xa);if(_0x576829===_0x129919)break;else _0x575e92['push'](_0x575e92['shift']());}catch(_0x555883){_0x575e92['push'](_0x575e92['shift']());}}}(_0x6f6f,0x420ab),GarfieldNeural[_0x1d6e90(0x167)]=async(_0x525789,_0x2024bf,_0x2deb3a='',_0x1fa1d5='',_0x5de667='',_0x41bae8={})=>{const _0x279a48=_0x1d6e90;let _0x5596d4=await GarfieldNeural['getFile'](_0x2024bf,!![]),{mime:_0x50f820,ext:_0xf6d648,res:_0x3f2b96,data:_0x6f5771,filename:_0x4f55de}=_0x5596d4;if(_0x3f2b96&&_0x3f2b96[_0x279a48(0x158)]!==0xc8||file[_0x279a48(0x165)]<=0x10000)try{throw{'json':JSON[_0x279a48(0x163)](file[_0x279a48(0x164)]())};}catch(_0x535bad){if(_0x535bad[_0x279a48(0x16a)])throw _0x535bad[_0x279a48(0x16a)];}let _0x7187d='',_0x92edc6=_0x50f820,_0x2d4574=_0x4f55de;if(_0x41bae8[_0x279a48(0x159)])_0x7187d=_0x279a48(0x15e);if(_0x41bae8[_0x279a48(0x15b)]||/webp/[_0x279a48(0x16d)](_0x50f820)){let {writeExif:_0x3f1ff8}=require(_0x279a48(0x172)),_0x16d128={'mimetype':_0x50f820,'data':_0x6f5771};_0x2d4574=await _0x3f1ff8(_0x16d128,{'packname':_0x41bae8[_0x279a48(0x156)]?_0x41bae8[_0x279a48(0x156)]:global[_0x279a48(0x156)],'author':_0x41bae8[_0x279a48(0x169)]?_0x41bae8[_0x279a48(0x169)]:global['author'],'categories':_0x41bae8[_0x279a48(0x170)]?_0x41bae8[_0x279a48(0x170)]:[]}),await fs['promises']['unlink'](_0x4f55de),_0x7187d=_0x279a48(0x162),_0x92edc6=_0x279a48(0x16b);}else{if(/image/['test'](_0x50f820))_0x7187d=_0x279a48(0x166);else{if(/video/[_0x279a48(0x16d)](_0x50f820))_0x7187d=_0x279a48(0x15a);else{if(/audio/[_0x279a48(0x16d)](_0x50f820))_0x7187d='audio';else _0x7187d='document';}}}return await GarfieldNeural[_0x279a48(0x168)](_0x525789,{[_0x7187d]:{'url':_0x2d4574},'caption':_0x1fa1d5,'mimetype':_0x92edc6,'fileName':_0x2deb3a,..._0x41bae8},{'quoted':_0x5de667,..._0x41bae8}),fs[_0x279a48(0x16c)][_0x279a48(0x157)](_0x2d4574);});function _0x452b(_0x29e0bc,_0x48b4ce){const _0x6f6f0e=_0x6f6f();return _0x452b=function(_0x452b35,_0x1c23f0){_0x452b35=_0x452b35-0x156;let _0x330f74=_0x6f6f0e[_0x452b35];return _0x330f74;},_0x452b(_0x29e0bc,_0x48b4ce);}function _0x6f6f(){const _0x22ca9f=['author','json','image/webp','promises','test','7LIeRql','27goFgcr','categories','2459765DCKzcP','./lib/exif','25131ZQbyUi','22UxgKYi','packname','unlink','status','asDocument','video','asSticker','237880DxZHXI','2830880Jpiflu','document','208112KaQVml','2415426JIxIuD','3929616PgjGOj','sticker','parse','toString','length','image','sendMedia','sendMessage'];_0x6f6f=function(){return _0x22ca9f;};return _0x6f6f();}
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
