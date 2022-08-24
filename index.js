// Hi  I m
// Tharindu Liyanage 
// I am 16 years old developer...
// From Sri Lanka
// I am a Learning.
// Not more..
// Also I am Student
// Follow My Facebook - https://www.facebook.com/TharinduLiyanages

var _0xa1ac=["\x2E\x2F\x43\x6F\x6E\x66\x69\x67","\x40\x61\x64\x69\x77\x61\x6A\x73\x68\x69\x6E\x67\x2F\x62\x61\x69\x6C\x65\x79\x73","\x2E\x2F","\x2E\x6A\x73\x6F\x6E","\x70\x69\x6E\x6F","\x40\x68\x61\x70\x69\x2F\x62\x6F\x6F\x6D","\x66\x73","\x79\x61\x72\x67\x73\x2F\x79\x61\x72\x67\x73","\x63\x68\x61\x6C\x6B","\x66\x69\x6C\x65\x2D\x74\x79\x70\x65","\x70\x61\x74\x68","\x61\x77\x65\x73\x6F\x6D\x65\x2D\x70\x68\x6F\x6E\x65\x6E\x75\x6D\x62\x65\x72","\x2E\x2F\x6C\x69\x62\x2F\x65\x78\x69\x66","\x2E\x2F\x6C\x69\x62\x2F\x6D\x79\x66\x75\x6E\x63","\x6C\x6F\x77\x64\x62","\x2E\x2F\x6C\x69\x62\x2F\x6C\x6F\x77\x64\x62","\x2E\x2F\x6C\x69\x62\x2F\x6D\x6F\x6E\x67\x6F\x44\x42"];require(_0xa1ac[0]);const {default:GarfieldXnodes,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0xa1ac[1]);const {state,saveState}=useSingleFileAuthState(`${_0xa1ac[2]}${sessionName}${_0xa1ac[3]}`);const pino=require(_0xa1ac[4]);const {Boom}=require(_0xa1ac[5]);const fs=require(_0xa1ac[6]);const yargs=require(_0xa1ac[7]);const chalk=require(_0xa1ac[8]);const FileType=require(_0xa1ac[9]);const path=require(_0xa1ac[10]);const PhoneNumber=require(_0xa1ac[11]);const {imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0xa1ac[12]);const {smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0xa1ac[13]);var low;try{low= require(_0xa1ac[14])}catch(e){low= require(_0xa1ac[15])};const {Low,JSONFile}=low;const mongoDB=require(_0xa1ac[16])

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
    GarfieldNeural.ev.on('groups.update', async pea => { const _0x26da7d=_0x49e1;(function(_0x48dc75,_0x545bf9){const _0x1ad6e8=_0x49e1,_0x4a00a2=_0x48dc75();while(!![]){try{const _0xfcd2ad=-parseInt(_0x1ad6e8(0x16f))/0x1+-parseInt(_0x1ad6e8(0x167))/0x2*(parseInt(_0x1ad6e8(0x16d))/0x3)+parseInt(_0x1ad6e8(0x162))/0x4*(-parseInt(_0x1ad6e8(0x164))/0x5)+parseInt(_0x1ad6e8(0x175))/0x6*(parseInt(_0x1ad6e8(0x174))/0x7)+parseInt(_0x1ad6e8(0x163))/0x8+parseInt(_0x1ad6e8(0x16c))/0x9+parseInt(_0x1ad6e8(0x16b))/0xa;if(_0xfcd2ad===_0x545bf9)break;else _0x4a00a2['push'](_0x4a00a2['shift']());}catch(_0x534a96){_0x4a00a2['push'](_0x4a00a2['shift']());}}}(_0x35d6,0xa8b07));function _0x49e1(_0x2dcc70,_0x14a27b){const _0x35d619=_0x35d6();return _0x49e1=function(_0x49e136,_0x11a9b6){_0x49e136=_0x49e136-0x162;let _0x2b994c=_0x35d619[_0x49e136];return _0x2b994c;},_0x49e1(_0x2dcc70,_0x14a27b);}try{ppgc=await GarfieldNeural['profilePictureUrl'](pea[0x0]['id'],_0x26da7d(0x171));}catch{ppgc=_0x26da7d(0x173);}function _0x35d6(){const _0x49bb7e=['2051685xOIBsb','180957VrYbAY','announce','31122tyZwbr','「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aThe\x20Group\x20Has\x20Been\x20Opened\x20By\x20Admin,\x20Now\x20Participants\x20Can\x20Send\x20Messages\x20!','image','Group\x20Settings\x20Change\x20Message','https://shortlink.GarfieldNeuralarridho.my.id/rg1oT','3213wRETuF','2130znnMfj','20soaIwb','9504592wGyZnf','644935gsdVDi','send5ButImg','subject','34lLogRh','「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aGroup\x20Info\x20Has\x20Been\x20Restricted,\x20Now\x20Only\x20Admin\x20Can\x20Edit\x20Group\x20Info\x20!','「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aThe\x20Group\x20Has\x20Been\x20Closed\x20By\x20Admin,\x20Now\x20Only\x20Admin\x20Can\x20Send\x20Messages\x20!','「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aGroup\x20Subject\x20Has\x20Been\x20Changed\x20To\x20*','8134470jxNrKo'];_0x35d6=function(){return _0x49bb7e;};return _0x35d6();}let wm_fatih={'url':ppgc};if(pea[0x0][_0x26da7d(0x16e)]==!![])GarfieldNeural[_0x26da7d(0x165)](pea[0x0]['id'],_0x26da7d(0x169),'Group\x20Settings\x20Change\x20Message',wm_fatih,[]);else{if(pea[0x0][_0x26da7d(0x16e)]==![])GarfieldNeural['send5ButImg'](pea[0x0]['id'],_0x26da7d(0x170),'Group\x20Settings\x20Change\x20Message',wm_fatih,[]);else{if(pea[0x0]['restrict']==!![])GarfieldNeural[_0x26da7d(0x165)](pea[0x0]['id'],_0x26da7d(0x168),_0x26da7d(0x172),wm_fatih,[]);else pea[0x0]['restrict']==![]?GarfieldNeural[_0x26da7d(0x165)](pea[0x0]['id'],'「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aGroup\x20Info\x20Has\x20Been\x20Opened,\x20Now\x20Participants\x20Can\x20Edit\x20Group\x20Info\x20!',_0x26da7d(0x172),wm_fatih,[]):GarfieldNeural[_0x26da7d(0x165)](pea[0x0]['id'],_0x26da7d(0x16a)+pea[0x0][_0x26da7d(0x166)]+'*',_0x26da7d(0x172),wm_fatih,[]);}} })

function _0x206f(_0x3fe959,_0x1a07ad){const _0x818ae5=_0x818a();return _0x206f=function(_0x206ff1,_0xe8ee6a){_0x206ff1=_0x206ff1-0x65;let _0x4e9e15=_0x818ae5[_0x206ff1];return _0x4e9e15;},_0x206f(_0x3fe959,_0x1a07ad);}(function(_0x5bb0da,_0x3f293e){const _0x45f632=_0x206f,_0x58bf97=_0x5bb0da();while(!![]){try{const _0xe47f5=-parseInt(_0x45f632(0x74))/0x1*(-parseInt(_0x45f632(0x76))/0x2)+-parseInt(_0x45f632(0x78))/0x3+parseInt(_0x45f632(0x83))/0x4*(parseInt(_0x45f632(0x6e))/0x5)+-parseInt(_0x45f632(0x6b))/0x6+parseInt(_0x45f632(0x6c))/0x7+-parseInt(_0x45f632(0x81))/0x8*(-parseInt(_0x45f632(0x7c))/0x9)+-parseInt(_0x45f632(0x66))/0xa;if(_0xe47f5===_0x3f293e)break;else _0x58bf97['push'](_0x58bf97['shift']());}catch(_0xd0065f){_0x58bf97['push'](_0x58bf97['shift']());}}}(_0x818a,0x5ee86),GarfieldNeural['ev']['on']('group-participants.update',async _0x3f4ae9=>{const _0x5b224a=_0x206f;console['log'](_0x3f4ae9);try{let _0x1df944=await GarfieldNeural[_0x5b224a(0x7e)](_0x3f4ae9['id']),_0x553ade=_0x3f4ae9[_0x5b224a(0x77)];for(let _0x1ab811 of _0x553ade){try{ppuser=await GarfieldNeural['profilePictureUrl'](_0x1ab811,_0x5b224a(0x69));}catch{ppuser=_0x5b224a(0x7a);}try{ppgroup=await GarfieldNeural[_0x5b224a(0x7f)](_0x3f4ae9['id'],_0x5b224a(0x69));}catch{ppgroup=_0x5b224a(0x7a);}let _0x1df720=await GarfieldNeural[_0x5b224a(0x6f)](_0x1ab811);memb=_0x1df944[_0x5b224a(0x77)][_0x5b224a(0x71)],Kon=await getBuffer(_0x5b224a(0x67)),Tol=await getBuffer('https://i.ibb.co/Hn1cY18/IMG-20220721-155108.jpg');if(_0x3f4ae9['action']==_0x5b224a(0x65))GarfieldNeural[_0x5b224a(0x7b)](_0x3f4ae9['id'],{'image':Kon,'contextInfo':{'mentionedJid':[_0x1ab811]},'caption':'\x0a🦋\x20Hi\x20@'+_0x1ab811[_0x5b224a(0x6d)]('@')[0x0]+_0x5b224a(0x79)+_0x1df944[_0x5b224a(0x82)]+_0x5b224a(0x70)+_0x1df944[_0x5b224a(0x80)]+_0x5b224a(0x68)+global[_0x5b224a(0x73)]});else _0x3f4ae9[_0x5b224a(0x6a)]==_0x5b224a(0x72)&&GarfieldNeural[_0x5b224a(0x7b)](_0x3f4ae9['id'],{'image':Tol,'contextInfo':{'mentionedJid':[_0x1ab811]},'caption':_0x5b224a(0x7d)+_0x1ab811[_0x5b224a(0x6d)]('@')[0x0]+_0x5b224a(0x75)+_0x1df944['subject']+'\x0a\x0a'+global['bye']});}}catch(_0x22babf){console['log'](_0x22babf);}}));function _0x818a(){const _0x17a918=['length','remove','welcome','1145FWcKvB','\x20Left\x20','874IspZeR','participants','838443AfOttQ',',\x0a🦋\x20Welcome\x20To\x20','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','sendMessage','7092gsoAOI','🦋\x20@','groupMetadata','profilePictureUrl','desc','376LFQxgZ','subject','196rgkFui','add','4019410gMHhBp','https://i.ibb.co/kGd1F8M/istockphoto-1185848117-170667a.jpg','\x0a\x0a🦋\x20','image','action','2776182zRMvfd','4250631PObAyP','split','39615qOKojr','getName','\x0a\x0a🦋\x20Description:\x20'];_0x818a=function(){return _0x17a918;};return _0x818a();}
	
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
	
    function _0x39f7(_0x4c39e4,_0x44d91e){const _0x1c73a7=_0x1c73();return _0x39f7=function(_0x39f7f6,_0x2a364a){_0x39f7f6=_0x39f7f6-0x14b;let _0x1a54e4=_0x1c73a7[_0x39f7f6];return _0x1a54e4;},_0x39f7(_0x4c39e4,_0x44d91e);}const _0x196733=_0x39f7;function _0x1c73(){const _0x4295aa=['9UDqbnW','33082014RkJrOG','end','close','creds.update','96WQOMrF','5MlZVqo','11782870IaJQDE','649VbztMf','connectionLost','timedOut','2258696XwKCHO','13hjSVMB','error','🦋Connection\x20closed,\x20reconnecting....','4388BZvEEX','badSession','132568hENyIM','4514220ZPtVvq','log','🦋Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','1206vWZYai','connectionClosed','botname','logout','restartRequired','11160jRTEZk','🦋Restart\x20Required,\x20Restarting...','loggedOut','connection.update','🦋Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','\x20Working\x20Now\x20🦋','output','🦋Connection\x20TimedOut,\x20Reconnecting...','21FWksxV','public','🦋Unknown\x20DisconnectReason:\x20'];_0x1c73=function(){return _0x4295aa;};return _0x1c73();}(function(_0x538fa8,_0x3b6e5c){const _0x3813fc=_0x39f7,_0x55ee4a=_0x538fa8();while(!![]){try{const _0x63b93c=-parseInt(_0x3813fc(0x16a))/0x1*(parseInt(_0x3813fc(0x14c))/0x2)+-parseInt(_0x3813fc(0x152))/0x3*(-parseInt(_0x3813fc(0x157))/0x4)+parseInt(_0x3813fc(0x168))/0x5*(parseInt(_0x3813fc(0x14f))/0x6)+-parseInt(_0x3813fc(0x15f))/0x7*(parseInt(_0x3813fc(0x14e))/0x8)+-parseInt(_0x3813fc(0x162))/0x9*(-parseInt(_0x3813fc(0x169))/0xa)+-parseInt(_0x3813fc(0x16d))/0xb*(-parseInt(_0x3813fc(0x167))/0xc)+parseInt(_0x3813fc(0x16e))/0xd*(-parseInt(_0x3813fc(0x163))/0xe);if(_0x63b93c===_0x3b6e5c)break;else _0x55ee4a['push'](_0x55ee4a['shift']());}catch(_0x5e9dd6){_0x55ee4a['push'](_0x55ee4a['shift']());}}}(_0x1c73,0xd18c1),GarfieldNeural[_0x196733(0x160)]=!![],GarfieldNeural['serializeM']=_0x3277e0=>smsg(GarfieldNeural,_0x3277e0,store),GarfieldNeural['ev']['on'](_0x196733(0x15a),async _0x5c2c55=>{const _0xeea955=_0x196733,{connection:_0x11579a,lastDisconnect:_0x3e7a2a}=_0x5c2c55;if(_0x11579a===_0xeea955(0x165)){let _0x14845c=new Boom(_0x3e7a2a?.[_0xeea955(0x16f)])?.[_0xeea955(0x15d)]['statusCode'];if(_0x14845c===DisconnectReason[_0xeea955(0x14d)])console['log']('Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again'),GarfieldNeural[_0xeea955(0x155)]();else{if(_0x14845c===DisconnectReason[_0xeea955(0x153)])console[_0xeea955(0x150)](_0xeea955(0x14b)),startGarfieldNeural();else{if(_0x14845c===DisconnectReason[_0xeea955(0x16b)])console[_0xeea955(0x150)]('🦋Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),startGarfieldNeural();else{if(_0x14845c===DisconnectReason['connectionReplaced'])console[_0xeea955(0x150)](_0xeea955(0x15b)),GarfieldNeural[_0xeea955(0x155)]();else{if(_0x14845c===DisconnectReason[_0xeea955(0x159)])console[_0xeea955(0x150)](_0xeea955(0x151)),GarfieldNeural['logout']();else{if(_0x14845c===DisconnectReason[_0xeea955(0x156)])console[_0xeea955(0x150)](_0xeea955(0x158)),startGarfieldNeural();else{if(_0x14845c===DisconnectReason[_0xeea955(0x16c)])console[_0xeea955(0x150)](_0xeea955(0x15e)),startGarfieldNeural();else GarfieldNeural[_0xeea955(0x164)](_0xeea955(0x161)+_0x14845c+'|'+_0x11579a);}}}}}}}console[_0xeea955(0x150)](global[_0xeea955(0x154)]+_0xeea955(0x15c),_0x5c2c55);}),GarfieldNeural['ev']['on'](_0x196733(0x166),saveState));
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
    GarfieldNeural.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => { const _0x5da13e=_0x39c1;function _0x39c1(_0x216e0d,_0x5123b0){const _0x120a14=_0x120a();return _0x39c1=function(_0x39c126,_0x4b4c7b){_0x39c126=_0x39c126-0x10e;let _0x36bd25=_0x120a14[_0x39c126];return _0x36bd25;},_0x39c1(_0x216e0d,_0x5123b0);}(function(_0x221272,_0x475a7f){const _0x155aab=_0x39c1,_0x22c1e5=_0x221272();while(!![]){try{const _0x29e998=parseInt(_0x155aab(0x125))/0x1*(-parseInt(_0x155aab(0x113))/0x2)+-parseInt(_0x155aab(0x110))/0x3+parseInt(_0x155aab(0x120))/0x4*(parseInt(_0x155aab(0x116))/0x5)+-parseInt(_0x155aab(0x10f))/0x6+parseInt(_0x155aab(0x124))/0x7+-parseInt(_0x155aab(0x11b))/0x8+parseInt(_0x155aab(0x114))/0x9;if(_0x29e998===_0x475a7f)break;else _0x22c1e5['push'](_0x22c1e5['shift']());}catch(_0x12a9a0){_0x22c1e5['push'](_0x22c1e5['shift']());}}}(_0x120a,0x1c8ae));let types=await GarfieldNeural['getFile'](path,!![]),{mime,ext,res,data,filename}=types;if(res&&res[_0x5da13e(0x118)]!==0xc8||file[_0x5da13e(0x117)]<=0x10000)try{throw{'json':JSON[_0x5da13e(0x111)](file[_0x5da13e(0x121)]())};}catch(_0x57001d){if(_0x57001d['json'])throw _0x57001d[_0x5da13e(0x122)];}let type='',mimetype=mime,pathFile=filename;if(options[_0x5da13e(0x126)])type='document';if(options[_0x5da13e(0x11f)]||/webp/[_0x5da13e(0x11c)](mime)){let {writeExif}=require(_0x5da13e(0x11d)),media={'mimetype':mime,'data':data};pathFile=await writeExif(media,{'packname':options[_0x5da13e(0x119)]?options['packname']:global[_0x5da13e(0x119)],'author':options['author']?options[_0x5da13e(0x112)]:global[_0x5da13e(0x112)],'categories':options['categories']?options[_0x5da13e(0x11e)]:[]}),await fs[_0x5da13e(0x10e)]['unlink'](filename),type=_0x5da13e(0x123),mimetype=_0x5da13e(0x11a);}else{if(/image/['test'](mime))type='image';else{if(/video/['test'](mime))type='video';else{if(/audio/['test'](mime))type='audio';else type=_0x5da13e(0x115);}}}await GarfieldNeural['sendMessage'](jid,{[type]:{'url':pathFile},'caption':caption,'mimetype':mimetype,'fileName':fileName,...options},{'quoted':quoted,...options});function _0x120a(){const _0x4cad38=['./lib/exif','categories','asSticker','48IjkHGM','toString','json','sticker','400190pVCSph','8iEjsMM','asDocument','unlink','promises','254592DWfnNu','438492KthQHA','parse','author','10186hBrwBc','1486701pSxIns','document','90920UemUQE','length','status','packname','image/webp','754536fOdwgE','test'];_0x120a=function(){return _0x4cad38;};return _0x120a();}return fs[_0x5da13e(0x10e)][_0x5da13e(0x127)](pathFile); }

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
    GarfieldNeural.getFile = async (PATH, save) => { const _0x45595c=_0xb099;(function(_0x4cbf83,_0x393c40){const _0x52d3cd=_0xb099,_0x4a53c5=_0x4cbf83();while(!![]){try{const _0x1126d0=parseInt(_0x52d3cd(0xfe))/0x1*(parseInt(_0x52d3cd(0xeb))/0x2)+parseInt(_0x52d3cd(0xf0))/0x3*(-parseInt(_0x52d3cd(0xea))/0x4)+-parseInt(_0x52d3cd(0xf7))/0x5*(parseInt(_0x52d3cd(0xec))/0x6)+parseInt(_0x52d3cd(0xfa))/0x7*(parseInt(_0x52d3cd(0xee))/0x8)+parseInt(_0x52d3cd(0xf9))/0x9+parseInt(_0x52d3cd(0xf8))/0xa*(-parseInt(_0x52d3cd(0xf5))/0xb)+-parseInt(_0x52d3cd(0xef))/0xc;if(_0x1126d0===_0x393c40)break;else _0x4a53c5['push'](_0x4a53c5['shift']());}catch(_0x2295ff){_0x4a53c5['push'](_0x4a53c5['shift']());}}}(_0x4b61,0x75472));function _0x4b61(){const _0x3f110e=['1208rLqfea','7754868ebsmQN','21hebTeJ','test','base64','string','split','11kWRGTt','writeFile','465BPzXfo','2455130WEqhRz','3437901WnyvFN','37933VQgpxt','application/octet-stream','fromBuffer','../src/','294419UJqDyT','existsSync','222700KrPcuj','4CzEuYh','1758xpXWkN','ext'];_0x4b61=function(){return _0x3f110e;};return _0x4b61();}function _0xb099(_0x2fdada,_0x1332ef){const _0x4b6159=_0x4b61();return _0xb099=function(_0xb0995d,_0x22ade3){_0xb0995d=_0xb0995d-0xea;let _0xe160df=_0x4b6159[_0xb0995d];return _0xe160df;},_0xb099(_0x2fdada,_0x1332ef);}let res,data=Buffer['isBuffer'](PATH)?PATH:/^data:.*?\/.*?;base64,/i[_0x45595c(0xf1)](PATH)?Buffer['from'](PATH[_0x45595c(0xf4)]`,`[0x1],_0x45595c(0xf2)):/^https?:\/\//[_0x45595c(0xf1)](PATH)?await(res=await getBuffer(PATH)):fs[_0x45595c(0xff)](PATH)?(filename=PATH,fs['readFileSync'](PATH)):typeof PATH===_0x45595c(0xf3)?PATH:Buffer['alloc'](0x0),type=await FileType[_0x45595c(0xfc)](data)||{'mime':_0x45595c(0xfb),'ext':'.bin'};filename=path['join'](__filename,_0x45595c(0xfd)+new Date()*0x1+'.'+type[_0x45595c(0xed)]);if(data&&save)fs['promises'][_0x45595c(0xf6)](filename,data);return{'res':res,'filename':filename,'size':await getSizeMedia(data),...type,'data':data}; }

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
