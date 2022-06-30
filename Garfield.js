//Coded by Tharindu Liyanage
// GARFIELD v8.2 BY NOIZE PROJECTS 🐼
var _0x686d=["\x2E\x2F\x43\x6F\x6E\x66\x69\x67","\x40\x61\x64\x69\x77\x61\x6A\x73\x68\x69\x6E\x67\x2F\x62\x61\x69\x6C\x65\x79\x73","\x66\x73","\x75\x74\x69\x6C","\x63\x68\x61\x6C\x6B","\x63\x68\x69\x6C\x64\x5F\x70\x72\x6F\x63\x65\x73\x73","\x61\x78\x69\x6F\x73","\x70\x61\x74\x68","\x6F\x73","\x6E\x6F\x64\x65\x2D\x66\x65\x74\x63\x68","\x67\x6F\x6F\x67\x6C\x65\x2D\x69\x74","\x6B\x69\x74\x73\x75\x6E\x65\x2D\x61\x70\x69","\x78\x66\x61\x72\x72\x2D\x61\x70\x69","\x68\x78\x7A\x2D\x61\x70\x69","\x6D\x6F\x6D\x65\x6E\x74\x2D\x74\x69\x6D\x65\x7A\x6F\x6E\x65","\x6A\x73\x64\x6F\x6D","\x70\x65\x72\x66\x6F\x72\x6D\x61\x6E\x63\x65\x2D\x6E\x6F\x77","\x70\x65\x72\x66\x5F\x68\x6F\x6F\x6B\x73","\x2E\x2F\x6C\x69\x62\x2F\x6D\x65\x64\x69\x61\x66\x69\x72\x65\x2E\x6A\x73","\x73\x63\x72\x61\x70\x65\x2D\x70\x72\x69\x6D\x62\x6F\x6E","\x2E\x2F\x6C\x69\x62\x2F\x6D\x79\x66\x75\x6E\x63"];require(_0x686d[0]);const {BufferJSON,WA_DEFAULT_EPHEMERAL,generateWAMessageFromContent,proto,generateWAMessageContent,generateWAMessage,prepareWAMessageMedia,areJidsSameUser,getContentType}=require(_0x686d[1]);const fs=require(_0x686d[2]);const util=require(_0x686d[3]);const chalk=require(_0x686d[4]);const {exec,spawn,execSync}=require(_0x686d[5]);const axios=require(_0x686d[6]);const path=require(_0x686d[7]);const os=require(_0x686d[8]);const fetch=require(_0x686d[9]);const google=require(_0x686d[10]);const mel=require(_0x686d[11]);const xa=require(_0x686d[12]);const hx=require(_0x686d[13]);const moment=require(_0x686d[14]);const {JSDOM}=require(_0x686d[15]);const speed=require(_0x686d[16]);const {performance}=require(_0x686d[17]);const {mediafireDl}=require(_0x686d[18]);const {Primbon}=require(_0x686d[19]);const primbon= new Primbon();const {smsg,formatp,tanggal,formatDate,getTime,isUrl,sleep,clockString,runtime,fetchJson,getBuffer,jsonformat,format,parseMention,getRandom}=require(_0x686d[20]);const xmodules=require(_0x686d[12])

//rpg function\\
var _0x4511=["\x2E\x2F\x49\x4D\x47\x44\x65\x73\x63\x2F\x75\x73\x65\x72\x2F\x64\x61\x72\x61\x68\x2E\x6A\x73","\x2E\x2F\x49\x4D\x47\x44\x65\x73\x63\x2F\x75\x73\x65\x72\x2F\x61\x6C\x61\x74\x5F\x74\x75\x6B\x61\x72\x2E\x6A\x73","\x2E\x2F\x49\x4D\x47\x44\x65\x73\x63\x2F\x75\x73\x65\x72\x2F\x6D\x6F\x6E\x61\x79\x2E\x6A\x73","\x2E\x2F\x49\x4D\x47\x44\x65\x73\x63\x2F\x75\x73\x65\x72\x2F\x6C\x69\x6D\x69\x74\x2E\x6A\x73","\x2E\x2F\x49\x4D\x47\x44\x65\x73\x63\x2F\x75\x73\x65\x72\x2F\x62\x75\x72\x75\x61\x6E\x2E\x6A\x73","\x64\x61\x72\x61\x68\x61\x77\x61\x6C","\x72\x70\x67","\x73\x65\x6E\x64\x65\x72","\uD83D\uDC3C","\uD83E\uDD8B"];const {addInventoriDarah,cekDuluJoinAdaApaKagaDiJson,addDarah,kurangDarah,getDarah}=require(_0x4511[0]);const {cekInventoryAdaAtauGak,addInventori,addBesi,addEmas,addEmerald,addUmpan,addPotion,kurangBesi,kurangEmas,kurangEmerald,kurangUmpan,kurangPotion,getBesi,getEmas,getEmerald,getUmpan,getPotion}=require(_0x4511[1]);const {addInventoriMonay,cekDuluJoinAdaApaKagaMonaynyaDiJson,addMonay,kurangMonay,getMonay}=require(_0x4511[2]);const {addInventoriLimit,cekDuluJoinAdaApaKagaLimitnyaDiJson,addLimit,kurangLimit,getLimit}=require(_0x4511[3]);const {cekDuluHasilBuruanNya,addInventoriBuruan,addIkan,addAyam,addKelinci,addDomba,addSapi,addGajah,kurangIkan,kurangAyam,kurangKelinci,kurangDomba,kurangSapi,kurangGajah,getIkan,getAyam,getKelinci,getDomba,getSapi,getGajah}=require(_0x4511[4]);let DarahAwal=global[_0x4511[6]][_0x4511[5]];const isDarah=cekDuluJoinAdaApaKagaDiJson(m[_0x4511[7]]);const isCekDarah=getDarah(m[_0x4511[7]]);const isUmpan=getUmpan(m[_0x4511[7]]);const isPotion=getPotion(m[_0x4511[7]]);const isIkan=getIkan(m[_0x4511[7]]);const isAyam=getAyam(m[_0x4511[7]]);const isKelinci=getKelinci(m[_0x4511[7]]);const isDomba=getDomba(m[_0x4511[7]]);const isSapi=getSapi(m[_0x4511[7]]);const isGajah=getGajah(m[_0x4511[7]]);const isMonay=getMonay(m[_0x4511[7]]);const isLimit=getLimit(m[_0x4511[7]]);const isBesi=getBesi(m[_0x4511[7]]);const isEmas=getEmas(m[_0x4511[7]]);const isEmerald=getEmerald(m[_0x4511[7]]);const isInventory=cekInventoryAdaAtauGak(m[_0x4511[7]]);const isInventoriBuruan=cekDuluHasilBuruanNya(m[_0x4511[7]]);const isInventoryLimit=cekDuluJoinAdaApaKagaLimitnyaDiJson(m[_0x4511[7]]);const isInventoryMonay=cekDuluJoinAdaApaKagaMonaynyaDiJson(m[_0x4511[7]]);const ikan=[_0x4511[8],_0x4511[9]]

//rpg database\\
var _0xfbb0=["\x2E\x2F\x49\x4D\x47\x44\x65\x73\x63\x2F\x75\x73\x65\x72\x2F\x6C\x69\x6D\x69\x74\x2E\x6A\x73\x6F\x6E","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x70\x61\x72\x73\x65","\x2E\x2F\x49\x4D\x47\x44\x65\x73\x63\x2F\x75\x73\x65\x72\x2F\x68\x61\x73\x69\x6C\x5F\x62\x75\x72\x75\x61\x6E\x2E\x6A\x73\x6F\x6E","\x2E\x2F\x49\x4D\x47\x44\x65\x73\x63\x2F\x75\x73\x65\x72\x2F\x64\x61\x72\x61\x68\x2E\x6A\x73\x6F\x6E"];let _limit=JSON[_0xfbb0[2]](fs[_0xfbb0[1]](_0xfbb0[0]));let _buruan=JSON[_0xfbb0[2]](fs[_0xfbb0[1]](_0xfbb0[3]));let _darahOrg=JSON[_0xfbb0[2]](fs[_0xfbb0[1]](_0xfbb0[4]))
 //Database\\
 var _0x12af=["\x2E\x2F\x64\x61\x74\x61\x62\x61\x73\x65\x2F\x73\x65\x74\x69\x6B\x2E\x6A\x73\x6F\x6E","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x70\x61\x72\x73\x65","\x2E\x2F\x64\x61\x74\x61\x62\x61\x73\x65\x2F\x76\x69\x65\x6E\x2E\x6A\x73\x6F\x6E","\x2E\x2F\x64\x61\x74\x61\x62\x61\x73\x65\x2F\x69\x6D\x61\x67\x69\x2E\x6A\x73\x6F\x6E","\x2E\x2F\x64\x61\x74\x61\x62\x61\x73\x65\x2F\x76\x69\x64\x65\x6F\x2E\x6A\x73\x6F\x6E"];let setik=JSON[_0x12af[2]](fs[_0x12af[1]](_0x12af[0]));let vien=JSON[_0x12af[2]](fs[_0x12af[1]](_0x12af[3]));let imagi=JSON[_0x12af[2]](fs[_0x12af[1]](_0x12af[4]));let videox=JSON[_0x12af[2]](fs[_0x12af[1]](_0x12af[5]))
//read database\\
var _0x9b0a=["\x74\x65\x62\x61\x6B\x6C\x61\x67\x75","\x67\x61\x6D\x65","\x64\x61\x74\x61","\x66\x61\x6D\x69\x6C\x79\x31\x30\x30","\x6D\x61\x74\x68","\x74\x65\x62\x61\x6B\x67\x61\x6D\x62\x61\x72","\x74\x65\x62\x61\x6B\x6B\x61\x74\x61","\x6C\x6F\x6E\x74\x6F\x6E\x67","\x6C\x6F\x6E\x74\x6F\x6E\x67\x5F\x64\x65\x73\x6B","\x6B\x61\x6C\x69\x6D\x61\x74","\x6C\x69\x72\x69\x6B","\x74\x65\x62\x61\x6B\x61\x6E","\x76\x6F\x74\x65","\x6F\x74\x68\x65\x72\x73"];let tebaklagu=db[_0x9b0a[2]][_0x9b0a[1]][_0x9b0a[0]]= [];let _family100=db[_0x9b0a[2]][_0x9b0a[1]][_0x9b0a[3]]= [];let kuismath=db[_0x9b0a[2]][_0x9b0a[1]][_0x9b0a[4]]= [];let tebakgambar=db[_0x9b0a[2]][_0x9b0a[1]][_0x9b0a[5]]= [];let tebakkata=db[_0x9b0a[2]][_0x9b0a[1]][_0x9b0a[6]]= [];let caklontong=db[_0x9b0a[2]][_0x9b0a[1]][_0x9b0a[7]]= [];let caklontong_desk=db[_0x9b0a[2]][_0x9b0a[1]][_0x9b0a[8]]= [];let tebakkalimat=db[_0x9b0a[2]][_0x9b0a[1]][_0x9b0a[9]]= [];let tebaklirik=db[_0x9b0a[2]][_0x9b0a[1]][_0x9b0a[10]]= [];let tebaktebakan=db[_0x9b0a[2]][_0x9b0a[1]][_0x9b0a[11]]= [];let vote=db[_0x9b0a[2]][_0x9b0a[13]][_0x9b0a[12]]= []

module.exports = GarfieldAdd = async (GarfieldAdd, m, chatUpdate, store) => {
    try { var _0x3ac1=["\x6D\x74\x79\x70\x65","\x63\x6F\x6E\x76\x65\x72\x73\x61\x74\x69\x6F\x6E","\x6D\x65\x73\x73\x61\x67\x65","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x63\x61\x70\x74\x69\x6F\x6E","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65","\x65\x78\x74\x65\x6E\x64\x65\x64\x54\x65\x78\x74\x4D\x65\x73\x73\x61\x67\x65","\x74\x65\x78\x74","\x62\x75\x74\x74\x6F\x6E\x73\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x42\x75\x74\x74\x6F\x6E\x49\x64","\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x52\x6F\x77\x49\x64","\x73\x69\x6E\x67\x6C\x65\x53\x65\x6C\x65\x63\x74\x52\x65\x70\x6C\x79","\x74\x65\x6D\x70\x6C\x61\x74\x65\x42\x75\x74\x74\x6F\x6E\x52\x65\x70\x6C\x79\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x49\x64","\x6D\x65\x73\x73\x61\x67\x65\x43\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F",""];var body=(m[_0x3ac1[0]]=== _0x3ac1[1])?m[_0x3ac1[2]][_0x3ac1[1]]:(m[_0x3ac1[0]]== _0x3ac1[3])?m[_0x3ac1[2]][_0x3ac1[3]][_0x3ac1[4]]:(m[_0x3ac1[0]]== _0x3ac1[5])?m[_0x3ac1[2]][_0x3ac1[5]][_0x3ac1[4]]:(m[_0x3ac1[0]]== _0x3ac1[6])?m[_0x3ac1[2]][_0x3ac1[6]][_0x3ac1[7]]:(m[_0x3ac1[0]]== _0x3ac1[8])?m[_0x3ac1[2]][_0x3ac1[8]][_0x3ac1[9]]:(m[_0x3ac1[0]]== _0x3ac1[10])?m[_0x3ac1[2]][_0x3ac1[10]][_0x3ac1[12]][_0x3ac1[11]]:(m[_0x3ac1[0]]== _0x3ac1[13])?m[_0x3ac1[2]][_0x3ac1[13]][_0x3ac1[14]]:(m[_0x3ac1[0]]=== _0x3ac1[15])?(m[_0x3ac1[2]][_0x3ac1[8]][_0x3ac1[9]]|| m[_0x3ac1[2]][_0x3ac1[10]][_0x3ac1[12]][_0x3ac1[11]]|| m[_0x3ac1[7]]):_0x3ac1[16]
        
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
       var _0xc38d=["\x69\x73\x47\x72\x6F\x75\x70","\x63\x61\x74\x63\x68","\x63\x68\x61\x74","\x67\x72\x6F\x75\x70\x4D\x65\x74\x61\x64\x61\x74\x61","","\x73\x75\x62\x6A\x65\x63\x74","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x73","\x69\x64","\x6D\x61\x70","\x61\x64\x6D\x69\x6E","\x66\x69\x6C\x74\x65\x72","\x6F\x77\x6E\x65\x72","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x65\x6E\x64\x65\x72","\x72\x65\x70\x6C\x61\x63\x65","\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x70\x72\x65\x6D\x69\x75\x6D"];const groupMetadata=m[_0xc38d[0]]? await GarfieldAdd[_0xc38d[3]](m[_0xc38d[2]])[_0xc38d[1]]((_0xbe62x2)=>{}):_0xc38d[4];const groupName=m[_0xc38d[0]]?groupMetadata[_0xc38d[5]]:_0xc38d[4];const participants=m[_0xc38d[0]]? await groupMetadata[_0xc38d[6]]:_0xc38d[4];const groupAdmins=m[_0xc38d[0]]? await participants[_0xc38d[10]]((_0xbe62x6)=>{return _0xbe62x6[_0xc38d[9]]!== null})[_0xc38d[8]]((_0xbe62x6)=>{return _0xbe62x6[_0xc38d[7]]}):_0xc38d[4];const groupOwner=m[_0xc38d[0]]?groupMetadata[_0xc38d[11]]:_0xc38d[4];const isBotAdmins=m[_0xc38d[0]]?groupAdmins[_0xc38d[12]](botNumber):false;const isAdmins=m[_0xc38d[0]]?groupAdmins[_0xc38d[12]](m[_0xc38d[13]]):false;const isPremium=isCreator|| global[_0xc38d[16]][_0xc38d[8]]((_0xbe62x6)=>{return _0xbe62x6[_0xc38d[14]](/[^0-9]/g,_0xc38d[4])+ _0xc38d[15]})[_0xc38d[12]](m[_0xc38d[13]])|| false
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try { var _0xe948=["\x6E\x75\x6D\x62\x65\x72","\x70\x72\x65\x6D\x69\x75\x6D","\x6C\x69\x6D\x69\x74\x61\x77\x61\x6C","\x66\x72\x65\x65","\x73\x65\x6E\x64\x65\x72","\x75\x73\x65\x72\x73","\x64\x61\x74\x61","\x64\x62","\x6F\x62\x6A\x65\x63\x74","\x61\x66\x6B\x54\x69\x6D\x65","\x61\x66\x6B\x52\x65\x61\x73\x6F\x6E","","\x6C\x69\x6D\x69\x74","\x63\x68\x61\x74","\x63\x68\x61\x74\x73","\x6D\x75\x74\x65","\x61\x6E\x74\x69\x6C\x69\x6E\x6B","\x73\x65\x74\x74\x69\x6E\x67\x73","\x73\x74\x61\x74\x75\x73","\x61\x75\x74\x6F\x62\x69\x6F"];let isNumber=(_0xb895x2)=>{return  typeof _0xb895x2=== _0xe948[0]&&  !isNaN(_0xb895x2)};let limitUser=isPremium?global[_0xe948[2]][_0xe948[1]]:global[_0xe948[2]][_0xe948[3]];let user=global[_0xe948[7]][_0xe948[6]][_0xe948[5]][m[_0xe948[4]]];if( typeof user!== _0xe948[8]){global[_0xe948[7]][_0xe948[6]][_0xe948[5]][m[_0xe948[4]]]= {}};if(user){if(!isNumber(user[_0xe948[9]])){user[_0xe948[9]]=  -1};if(!(_0xe948[10] in  user)){user[_0xe948[10]]= _0xe948[11]};if(!isNumber(user[_0xe948[12]])){user[_0xe948[12]]= limitUser}}else {global[_0xe948[7]][_0xe948[6]][_0xe948[5]][m[_0xe948[4]]]= {afkTime:-1,afkReason:_0xe948[11],limit:limitUser}};let chats=global[_0xe948[7]][_0xe948[6]][_0xe948[14]][m[_0xe948[13]]];if( typeof chats!== _0xe948[8]){global[_0xe948[7]][_0xe948[6]][_0xe948[14]][m[_0xe948[13]]]= {}};if(chats){if(!(_0xe948[15] in  chats)){chats[_0xe948[15]]= false};if(!(_0xe948[16] in  chats)){chats[_0xe948[16]]= false}}else {global[_0xe948[7]][_0xe948[6]][_0xe948[14]][m[_0xe948[13]]]= {mute:false,antilink:false}};let setting=global[_0xe948[7]][_0xe948[6]][_0xe948[17]][botNumber];if( typeof setting!== _0xe948[8]){global[_0xe948[7]][_0xe948[6]][_0xe948[17]][botNumber]= {}};if(setting){if(!isNumber(setting[_0xe948[18]])){setting[_0xe948[18]]= 0};if(!(_0xe948[19] in  setting)){setting[_0xe948[19]]= false}}else {global[_0xe948[7]][_0xe948[6]][_0xe948[17]][botNumber]= {status:0,autobio:false}}
    } catch (err) {
            console.error(err)
        }
        
	//group target \\
const reply = (teks) => { var _0x9d68=["\x63\x68\x61\x74","\x20\uD835\uDDA6\u039B\uD835\uDDB1\uD835\uDDA5\uD835\uDDA8\u039E\uD835\uDDAB\uD835\uDDA3\x20\uD835\uDDA1\uD835\uDDAE\u0422\x20","\uFF38\uFF2E\uFF2F\uFF24\uFF25\uFF33","\x50\x48\x4F\x54\x4F","","\x2E\x2F\x54\x65\x6D\x70\x43\x6C\x6F\x75\x64\x2F\x6C\x6F\x67\x6F\x2E\x70\x6E\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x68\x74\x74\x70\x3A\x2F\x2F\x57\x61\x2E\x6D\x65\x2F\x2F","\x6F\x77\x6E\x65\x72","\x3F\x74\x65\x78\x74\x3D\x2A\x48\x65\x6C\x6C\x6F\uD83E\uDD8B\x2A","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];GarfieldAdd[_0x9d68[10]](m[_0x9d68[0]],{text:teks,contextInfo:{"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x9d68[1]}`,"\x62\x6F\x64\x79":`${_0x9d68[2]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x9d68[3],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x9d68[4]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x9d68[6]](`${_0x9d68[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x9d68[7]}${global[_0x9d68[8]]}${_0x9d68[9]}`}}},{quoted:m}) }
        
        const replay = (teks) => { var _0xe8e6=["\x63\x68\x61\x74","\x20\uD835\uDDA6\u039B\uD835\uDDB1\uD835\uDDA5\uD835\uDDA8\u039E\uD835\uDDAB\uD835\uDDA3\x20\uD835\uDDA1\uD835\uDDAE\u0422\x20","\uFF38\uFF2E\uFF2F\uFF24\uFF25\uFF33","\x50\x48\x4F\x54\x4F","","\x2E\x2F\x54\x65\x6D\x70\x43\x6C\x6F\x75\x64\x2F\x6C\x6F\x67\x6F\x2E\x70\x6E\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x68\x74\x74\x70\x3A\x2F\x2F\x57\x61\x2E\x6D\x65\x2F\x2F","\x6F\x77\x6E\x65\x72","\x3F\x74\x65\x78\x74\x3D\x2A\x48\x65\x6C\x6C\x6F\uD83E\uDD8B\x2A","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];GarfieldAdd[_0xe8e6[10]](m[_0xe8e6[0]],{text:teks,contextInfo:{"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xe8e6[1]}`,"\x62\x6F\x64\x79":`${_0xe8e6[2]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xe8e6[3],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xe8e6[4]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xe8e6[6]](`${_0xe8e6[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xe8e6[7]}${global[_0xe8e6[8]]}${_0xe8e6[9]}`}}},{quoted:m}) }
	
        //Public & Self\\
        if (!GarfieldAdd.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) { var _0xe120=["\x63\x68\x61\x74","\x73\x65\x6E\x64\x65\x72","\x69\x64","\x6B\x65\x79","\x73\x65\x6E\x64\x52\x65\x61\x64\x52\x65\x63\x65\x69\x70\x74","\x5B\x20\x4D\x45\x53\x53\x41\x47\x45\x20\x5D","\x62\x67\x57\x68\x69\x74\x65","\x62\x6C\x61\x63\x6B","\x62\x67\x47\x72\x65\x65\x6E","\x6D\x74\x79\x70\x65","\x62\x67\x42\x6C\x75\x65","\x0A","\uD83E\uDD8B\x20\x46\x72\x6F\x6D","\x6D\x61\x67\x65\x6E\x74\x61","\x67\x72\x65\x65\x6E","\x79\x65\x6C\x6C\x6F\x77","\uD83D\uDEF0\uFE0F\x20\x49\x6E","\x62\x6C\x75\x65\x42\x72\x69\x67\x68\x74","\x69\x73\x47\x72\x6F\x75\x70","\x50\x72\x69\x76\x61\x74\x65\x20\x43\x68\x61\x74","\x6C\x6F\x67"];GarfieldAdd[_0xe120[4]](m[_0xe120[0]],m[_0xe120[1]],[m[_0xe120[3]][_0xe120[2]]]);console[_0xe120[20]](chalk[_0xe120[7]](chalk[_0xe120[6]](_0xe120[5])),chalk[_0xe120[7]](chalk[_0xe120[8]]( new Date)),chalk[_0xe120[7]](chalk[_0xe120[10]](budy|| m[_0xe120[9]]))+ _0xe120[11]+ chalk[_0xe120[13]](_0xe120[12]),chalk[_0xe120[14]](pushname),chalk[_0xe120[15]](m[_0xe120[1]])+ _0xe120[11]+ chalk[_0xe120[17]](_0xe120[16]),chalk[_0xe120[14]](m[_0xe120[18]]?pushname:_0xe120[19],m[_0xe120[0]])) }
	
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
var _0xb3a0=["\x48\x48\x3A\x6D\x6D\x3A\x73\x73","\x66\x6F\x72\x6D\x61\x74","\x41\x73\x69\x61\x2F\x43\x6F\x6C\x6F\x6D\x62\x6F","\x74\x7A","\x32\x33\x3A\x35\x39\x3A\x30\x30","\x47\x6F\x6F\x64\x20\x4E\x69\x67\x68\x74\x20\uD83C\uDF12","\x31\x39\x3A\x30\x30\x3A\x30\x30","\x47\x6F\x6F\x64\x20\x6E\x69\x67\x68\x74\uD83C\uDF19","\x31\x38\x3A\x30\x30\x3A\x30\x30","\x47\x6F\x6F\x64\x20\x61\x66\x74\x65\x72\x6E\x6F\x6F\x6E\x20\uD83C\uDF05","\x31\x35\x3A\x30\x30\x3A\x30\x30","\x47\x6F\x6F\x64\x20\x61\x66\x74\x65\x72\x6E\x6F\x6F\x6E\x20\uD83C\uDF1E","\x31\x30\x3A\x30\x30\x3A\x30\x30","\x47\x6F\x6F\x64\x20\x6D\x6F\x72\x6E\x69\x6E\x67\x20\uD83C\uDF04","\x30\x35\x3A\x30\x30\x3A\x30\x30","\x47\x6F\x6F\x64\x20\x6D\x6F\x72\x6E\x69\x6E\x67\x20\uD83C\uDF05"];const time2=moment()[_0xb3a0[3]](_0xb3a0[2])[_0xb3a0[1]](_0xb3a0[0]);if(time2< _0xb3a0[4]){var ucapannya2=`${_0xb3a0[5]}`};if(time2< _0xb3a0[6]){var ucapannya2=`${_0xb3a0[7]}`};if(time2< _0xb3a0[8]){var ucapannya2=`${_0xb3a0[9]}`};if(time2< _0xb3a0[10]){var ucapannya2=`${_0xb3a0[11]}`};if(time2< _0xb3a0[12]){var ucapannya2=`${_0xb3a0[13]}`};if(time2< _0xb3a0[14]){var ucapannya2=`${_0xb3a0[15]}`}
	  //antilink\\
        if (db.data.chats[m.chat].antilink) { var _0xa15a=["\x63\x68\x61\x74\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x63\x6F\x6D","\x6D\x61\x74\x63\x68","\u300C\x20\x41\x4E\x54\x49\x20\x4C\x49\x4E\x4B\x20\u300D\x5C\x6E\x5C\x6E\x59\x6F\x75\x20\x68\x61\x76\x65\x20\x62\x65\x65\x6E\x20\x64\x65\x74\x65\x63\x74\x65\x64\x20\x73\x65\x6E\x64\x69\x6E\x67\x20\x61\x20\x67\x72\x6F\x75\x70\x20\x6C\x69\x6E\x6B\x2C\x20\x73\x6F\x72\x72\x79\x20\x79\x6F\x75\x20\x77\x69\x6C\x6C\x20\x62\x65\x20\x6B\x69\x63\x6B\x65\x64\x20\x21","\x49\x20\x41\x6D\x20\x4E\x6F\x74\x20\x41\x6E\x20\x41\x64\x6D\x69\x6E\x2C\x20\x48\x6F\x77\x20\x43\x6F\x75\x6C\x64\x20\x49\x20\x4B\x69\x63\x6B\x20\x53\x6F\x6D\x65\x62\x6F\x64\x79\x20\x57\x68\x6F\x20\x53\x65\x6E\x64\x20\x4C\x69\x6E\x6B\x20\uD83D\uDE12","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x68\x61\x74\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x63\x6F\x6D\x2F","\x63\x68\x61\x74","\x67\x72\x6F\x75\x70\x49\x6E\x76\x69\x74\x65\x43\x6F\x64\x65","\x69","\x74\x65\x78\x74","\x74\x65\x73\x74","\x47\x72\x6F\x75\x70\x20\x49\x73\x20\x49\x6E\x73\x74\x61\x6C\x6C\x65\x64\x20\x57\x69\x74\x68\x20\x41\x6E\x74\x69\x2D\x4C\x69\x6E\x6B\x20\x42\x75\x74\x20\x49\x20\x57\x6F\x6E\x27\x74\x20\x4B\x69\x63\x6B\x20\x59\x6F\x75\x20\uD83D\uDE09\x2C\x20\x42\x65\x63\x61\x75\x73\x65\x20\x59\x6F\x75\x20\x53\x65\x6E\x74\x20\x54\x68\x69\x73\x20\x47\x72\x6F\x75\x70\x20\x4C\x69\x6E\x6B\u2764\uFE0F","\x47\x72\x6F\x75\x70\x20\x49\x73\x20\x49\x6E\x73\x74\x61\x6C\x6C\x65\x64\x20\x57\x69\x74\x68\x20\x41\x6E\x74\x69\x2D\x4C\x69\x6E\x6B\x20\x42\x75\x74\x20\x49\x20\x57\x6F\x6E\x27\x74\x20\x4B\x69\x63\x6B\x20\x59\x6F\x75\x20\uD83D\uDE09\x2C\x20\x42\x65\x63\x61\x75\x73\x65\x20\x59\x6F\x75\x20\x41\x72\x65\x20\x41\x6E\x20\x41\x64\x6D\x69\x6E\x20\x4F\x66\x20\x54\x68\x65\x20\x47\x72\x6F\x75\x70\u2764\uFE0F","\x47\x72\x6F\x75\x70\x20\x49\x73\x20\x49\x6E\x73\x74\x61\x6C\x6C\x65\x64\x20\x57\x69\x74\x68\x20\x41\x6E\x74\x69\x2D\x4C\x69\x6E\x6B\x20\x42\x75\x74\x20\x49\x20\x57\x6F\x6E\x27\x74\x20\x4B\x69\x63\x6B\x20\x59\x6F\x75\x20\uD83D\uDE09\x2C\x20\x42\x65\x63\x61\x75\x73\x65\x20\x59\x6F\x75\x20\x41\x72\x65\x20\x4D\x79\x20\x4F\x77\x6E\x65\x72\x20\x48\x61\x68\x61\x68\x61\x68\x61\x68\uD83E\uDD23\uD83D\uDE18\x2C\x20\x59\x6F\x75\x20\x54\x68\x69\x6E\x6B\x20\x49\x20\x57\x69\x6C\x6C\x20\x42\x65\x74\x72\x61\x79\x20\x59\x6F\x75\x20\x48\x75\x68\x20","\x65\x6D\x6F\x6A\x69\x30\x31","\x20","\x73\x65\x6E\x64\x65\x72","\x72\x65\x6D\x6F\x76\x65","\x67\x72\x6F\x75\x70\x50\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x73\x55\x70\x64\x61\x74\x65"];if(budy[_0xa15a[1]](`${_0xa15a[0]}`)){reply(`${_0xa15a[2]}`);if(!isBotAdmins){return reply(`${_0xa15a[3]}`)};let gclink=(`${_0xa15a[4]}`+  await GarfieldAdd[_0xa15a[6]](m[_0xa15a[5]]));let isLinkThisGc= new RegExp(gclink,_0xa15a[7]);let isgclink=isLinkThisGc[_0xa15a[9]](m[_0xa15a[8]]);if(isgclink){return reply(`${_0xa15a[10]}`)};if(isAdmins){return reply(`${_0xa15a[11]}`)};if(isCreator){return reply(`${_0xa15a[12]}${global[_0xa15a[13]]}${_0xa15a[14]}`)};GarfieldAdd[_0xa15a[17]](m[_0xa15a[5]],[m[_0xa15a[15]]],_0xa15a[16])}  }

        //auto reply 
        var _0x9576=["\x2E\x2F\x54\x65\x6D\x70\x43\x6C\x6F\x75\x64\x2F\x73\x74\x69\x63\x6B\x65\x72\x2F","\x2E\x77\x65\x62\x70","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x2E\x2F\x54\x65\x6D\x70\x43\x6C\x6F\x75\x64\x2F\x76\x6E\x2F\x40\x39\x34\x37\x31\x31\x35\x30\x32\x31\x31\x39\x2E\x6D\x70\x33","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x2E\x2F\x54\x65\x6D\x70\x43\x6C\x6F\x75\x64\x2F\x69\x6D\x61\x67\x65\x2F","\x2E\x6A\x70\x67","\x2E\x2F\x54\x65\x6D\x70\x43\x6C\x6F\x75\x64\x2F\x76\x69\x64\x2F","\x2E\x6D\x70\x34"];for(let anji of setik){if(budy=== anji){result= fs[_0x9576[2]](`${_0x9576[0]}${anji}${_0x9576[1]}`);GarfieldAdd[_0x9576[4]](m[_0x9576[3]],{sticker:result},{quoted:m})}};for(let anju of vien){if(budy=== anju){result= fs[_0x9576[2]](`${_0x9576[5]}`);GarfieldAdd[_0x9576[4]](m[_0x9576[3]],{audio:result,mimetype:_0x9576[6],ptt:true},{quoted:m})}};for(let anjh of imagi){if(budy=== anjh){result= fs[_0x9576[2]](`${_0x9576[7]}${anjh}${_0x9576[8]}`);GarfieldAdd[_0x9576[4]](m[_0x9576[3]],{image:result},{quoted:m})}};for(let anjh of videox){if(budy=== anjh){result= fs[_0x9576[2]](`${_0x9576[9]}${anjh}${_0x9576[10]}`);GarfieldAdd[_0x9576[4]](m[_0x9576[3]],{video:result},{quoted:m})}}
      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
	   var _0xe898=["\x65\x78\x74\x65\x6E\x64\x65\x64\x54\x65\x78\x74\x4D\x65\x73\x73\x61\x67\x65","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65","\x61\x75\x64\x69\x6F\x4D\x65\x73\x73\x61\x67\x65","\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65"];const isQuotedImage=type=== _0xe898[0]&& content[_0xe898[2]](_0xe898[1]);const isQuotedVideo=type=== _0xe898[0]&& content[_0xe898[2]](_0xe898[3]);const isQuotedAudio=type=== _0xe898[0]&& content[_0xe898[2]](_0xe898[4]);const isQuotedSticker=type=== _0xe898[0]&& content[_0xe898[2]](_0xe898[5])    
        //Respon Cmd with media\\
 if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) { var _0x5250=["\x62\x61\x73\x65\x36\x34","\x66\x69\x6C\x65\x53\x68\x61\x32\x35\x36","\x6D\x73\x67","\x73\x74\x69\x63\x6B\x65\x72","\x64\x61\x74\x61","\x64\x62","\x63\x68\x61\x74","\x69\x64","\x75\x73\x65\x72","\x71\x75\x6F\x74\x65\x64","\x66\x61\x6B\x65\x4F\x62\x6A","\x66\x72\x6F\x6D\x4D\x65","\x6B\x65\x79","\x73\x65\x6E\x64\x65\x72","\x70\x75\x73\x68\x4E\x61\x6D\x65","\x69\x73\x47\x72\x6F\x75\x70","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74","\x66\x72\x6F\x6D\x4F\x62\x6A\x65\x63\x74","\x57\x65\x62\x4D\x65\x73\x73\x61\x67\x65\x49\x6E\x66\x6F","\x61\x70\x70\x65\x6E\x64","\x6D\x65\x73\x73\x61\x67\x65\x73\x2E\x75\x70\x73\x65\x72\x74","\x65\x6D\x69\x74","\x65\x76"];let hash=global[_0x5250[5]][_0x5250[4]][_0x5250[3]][m[_0x5250[2]][_0x5250[1]].toString(_0x5250[0])];let {text,mentionedJid}=hash;let messages= await generateWAMessage(m[_0x5250[6]],{text:text,mentions:mentionedJid},{userJid:GarfieldAdd[_0x5250[8]][_0x5250[7]],quoted:m[_0x5250[9]]&& m[_0x5250[9]][_0x5250[10]]});messages[_0x5250[12]][_0x5250[11]]= areJidsSameUser(m[_0x5250[13]],GarfieldAdd[_0x5250[8]][_0x5250[7]]);messages[_0x5250[12]][_0x5250[7]]= m[_0x5250[12]][_0x5250[7]];messages[_0x5250[14]]= m[_0x5250[14]];if(m[_0x5250[15]]){messages[_0x5250[16]]= m[_0x5250[13]]};let msg={...chatUpdate,messages:[proto[_0x5250[18]][_0x5250[17]](messages)],type:_0x5250[19]};GarfieldAdd[_0x5250[22]][_0x5250[21]](_0x5250[20],msg) }
	    
	if (('family100'+m.chat in _family100) && isCmd) { var _0xde3a=["\x66\x61\x6D\x69\x6C\x79\x31\x30\x30","\x63\x68\x61\x74","","\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x74\x65\x78\x74","\x74\x65\x73\x74","\x66\x69\x6E\x64\x49\x6E\x64\x65\x78","\x6A\x61\x77\x61\x62\x61\x6E","\x74\x65\x72\x6A\x61\x77\x61\x62","\x73\x65\x6E\x64\x65\x72","\x6C\x65\x6E\x67\x74\x68","\x66\x69\x6C\x74\x65\x72","\x74\x72\x69\x6D","\x0D\x0A\x41\x6E\x73\x77\x65\x72\x20\x54\x68\x65\x20\x46\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x20\x51\x75\x65\x73\x74\x69\x6F\x6E\x73\x20\x3A\x5C\x6E","\x73\x6F\x61\x6C","\x5C\x6E\x5C\x6E\x5C\x6E\x54\x68\x65\x72\x65\x20\x49\x73\x20","\x20\x41\x6E\x73\x77\x65\x72\x20","\x20","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x66\x69\x6E\x64","\x28\x53\x6F\x6D\x65\x20\x41\x6E\x73\x77\x65\x72\x73\x20\x48\x61\x76\x65\x20\x53\x70\x61\x63\x65\x73\x29","\x0D\x0A","\x41\x6C\x6C\x20\x41\x6E\x73\x77\x65\x72\x73\x20\x41\x6E\x73\x77\x65\x72\x65\x64","\x53\x75\x72\x72\x65\x6E\x64\x65\x72\x21","\x0A","\x6A\x6F\x69\x6E","\x28","\x29\x20","\x40","\x73\x70\x6C\x69\x74","\x66\x72\x6F\x6D","\x0D\x0A\x20\x20\x20\x20","\x50\x65\x72\x66\x65\x63\x74\x20\x50\x6C\x61\x79\x65\x72","\x63\x61\x74\x63\x68","\x70\x65\x73\x61\x6E","\x74\x68\x65\x6E","\x73\x65\x6E\x64\x54\x65\x78\x74"];kuis= true;let room=_family100[_0xde3a[0]+ m[_0xde3a[1]]];let teks=budy[_0xde3a[4]]()[_0xde3a[3]](/[^\w\s\-]+/,_0xde3a[2]);let isSurender=/^((me)?give up|surr?ender)$/i[_0xde3a[6]](m[_0xde3a[5]]);if(!isSurender){let index=room[_0xde3a[8]][_0xde3a[7]]((_0x4e0bx5)=>{return _0x4e0bx5[_0xde3a[4]]()[_0xde3a[3]](/[^\w\s\-]+/,_0xde3a[2])=== teks});if(room[_0xde3a[9]][index]){return !0};room[_0xde3a[9]][index]= m[_0xde3a[10]]};let isWin=room[_0xde3a[9]][_0xde3a[11]]=== room[_0xde3a[9]][_0xde3a[12]]((_0x4e0bx5)=>{return _0x4e0bx5})[_0xde3a[11]];let caption=`${_0xde3a[14]}${room[_0xde3a[15]]}${_0xde3a[16]}${room[_0xde3a[8]][_0xde3a[11]]}${_0xde3a[17]}${room[_0xde3a[8]][_0xde3a[20]]((_0x4e0bx5)=>{return _0x4e0bx5[_0xde3a[19]](_0xde3a[18])})?`${_0xde3a[21]}`:_0xde3a[2]}${_0xde3a[22]}${isWin?`${_0xde3a[23]}`:isSurender?_0xde3a[24]:_0xde3a[2]}${_0xde3a[22]}${Array[_0xde3a[31]](room[_0xde3a[8]],(_0x4e0bx8,index)=>{return isSurender|| room[_0xde3a[9]][index]?`${_0xde3a[27]}${index+ 1}${_0xde3a[28]}${_0x4e0bx8}${_0xde3a[18]}${room[_0xde3a[9]][index]?_0xde3a[29]+ room[_0xde3a[9]][index][_0xde3a[30]](_0xde3a[29])[0]:_0xde3a[2]}${_0xde3a[2]}`[_0xde3a[13]]():false})[_0xde3a[12]]((_0x4e0bx5)=>{return _0x4e0bx5})[_0xde3a[26]](_0xde3a[25])}${_0xde3a[32]}${isSurender?_0xde3a[2]:`${_0xde3a[33]}`}${_0xde3a[2]}`[_0xde3a[13]]();GarfieldAdd[_0xde3a[37]](m[_0xde3a[1]],caption,m,{contextInfo:{mentionedJid:parseMention(caption)}})[_0xde3a[36]]((_0x4e0bxa)=>{return _family100[_0xde3a[0]+ m[_0xde3a[1]]][_0xde3a[35]]= mesg})[_0xde3a[34]]((_0x4e0bx9)=>{return _0x4e0bx9});if(isWin|| isSurender){delete _family100[_0xde3a[0]+ m[_0xde3a[1]]]} }

       var _0x5176=["\x40","\x73\x70\x6C\x69\x74","\x73\x65\x6E\x64\x65\x72","\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x63\x68\x61\x74","\x67\x75\x65\x73\x73\x20\x73\x6F\x6E\x67","\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x53\x6F\x6E\x67","\uD83C\uDFAE\x20\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x4D\x75\x73\x69\x63\x20\uD83C\uDFAE\x5C\x6E\x5C\x6E\x43\x6F\x72\x72\x65\x63\x74\x20\x41\x6E\x73\x77\x65\x72\x20\uD83C\uDF89\x5C\x6E\x5C\x6E\x57\x61\x6E\x74\x20\x54\x6F\x20\x50\x6C\x61\x79\x20\x41\x67\x61\x69\x6E\x3F\x20\x50\x72\x65\x73\x73\x20\x54\x68\x65\x20\x42\x75\x74\x74\x6F\x6E\x20\x42\x65\x6C\x6F\x77","\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x42\x75\x74\x74\x6F\x6E\x54\x65\x78\x74","\x2A\x57\x72\x6F\x6E\x67\x20\x41\x6E\x73\x77\x65\x72\x21\x2A","\uD83C\uDFAE\x20\x4D\x61\x74\x68\x20\x51\x75\x69\x7A\x20\uD83C\uDFAE\x5C\x6E\x5C\x6E\x43\x6F\x72\x72\x65\x63\x74\x20\x41\x6E\x73\x77\x65\x72\x20\uD83C\uDF89\x5C\x6E\x5C\x6E\x57\x61\x6E\x74\x20\x54\x6F\x20\x50\x6C\x61\x79\x20\x41\x67\x61\x69\x6E\x3F\x20\x53\x65\x6E\x64\x20","\x6D\x61\x74\x68\x20\x6D\x6F\x64\x65","\x67\x75\x65\x73\x73\x20\x70\x69\x63\x74\x75\x72\x65","\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x50\x69\x63\x74\x75\x72\x65","\uD83C\uDFAE\x20\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x50\x69\x63\x74\x75\x72\x65\x20\uD83C\uDFAE\x5C\x6E\x5C\x6E\x43\x6F\x72\x72\x65\x63\x74\x20\x41\x6E\x73\x77\x65\x72\x20\uD83C\uDF89\x5C\x6E\x5C\x6E\x57\x61\x6E\x74\x20\x54\x6F\x20\x50\x6C\x61\x79\x20\x41\x67\x61\x69\x6E\x3F\x20\x50\x72\x65\x73\x73\x20\x54\x68\x65\x20\x42\x75\x74\x74\x6F\x6E\x20\x42\x65\x6C\x6F\x77","\x67\x75\x65\x73\x73\x20\x77\x6F\x72\x64","\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x57\x6F\x72\x64","\uD83C\uDFAE\x20\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x57\x6F\x72\x64\x20\uD83C\uDFAE\x5C\x6E\x5C\x6E\x43\x6F\x72\x72\x65\x63\x74\x20\x41\x6E\x73\x77\x65\x72\x20\uD83C\uDF89\x5C\x6E\x5C\x6E\x57\x61\x6E\x74\x20\x54\x6F\x20\x50\x6C\x61\x79\x20\x41\x67\x61\x69\x6E\x3F\x20\x50\x72\x65\x73\x73\x20\x54\x68\x65\x20\x42\x75\x74\x74\x6F\x6E\x20\x42\x65\x6C\x6F\x77","\x67\x75\x65\x73\x73\x20\x62\x6C\x61\x6E\x6B","\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x42\x6C\x61\x6E\x6B","\uD83C\uDFAE\x20\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x42\x6C\x61\x6E\x6B\x20\uD83C\uDFAE\x5C\x6E\x5C\x6E\x43\x6F\x72\x72\x65\x63\x74\x20\x41\x6E\x73\x77\x65\x72\x20\uD83C\uDF89\x5C\x6E\x2A","\x2A\x5C\x6E\x5C\x6E\x57\x61\x6E\x74\x20\x54\x6F\x20\x50\x6C\x61\x79\x20\x41\x67\x61\x69\x6E\x3F\x20\x50\x72\x65\x73\x73\x20\x54\x68\x65\x20\x42\x75\x74\x74\x6F\x6E\x20\x42\x65\x6C\x6F\x77","\x67\x75\x65\x73\x73\x20\x73\x65\x6E\x74\x65\x6E\x63\x65","\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x53\x65\x6E\x74\x65\x6E\x63\x65","\uD83C\uDFAE\x20\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x53\x65\x6E\x74\x65\x6E\x63\x65\x20\uD83C\uDFAE\x5C\x6E\x5C\x6E\x43\x6F\x72\x72\x65\x63\x74\x20\x41\x6E\x73\x77\x65\x72\x20\uD83C\uDF89\x5C\x6E\x5C\x6E\x57\x61\x6E\x74\x20\x54\x6F\x20\x50\x6C\x61\x79\x20\x41\x67\x61\x69\x6E\x3F\x20\x50\x72\x65\x73\x73\x20\x54\x68\x65\x20\x42\x75\x74\x74\x6F\x6E\x20\x42\x65\x6C\x6F\x77","\x67\x75\x65\x73\x73\x20\x6C\x79\x72\x69\x63\x73","\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x4C\x79\x72\x69\x63\x73","\uD83C\uDFAE\x20\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x4C\x79\x72\x69\x63\x73\x20\uD83C\uDFAE\x5C\x6E\x5C\x6E\x43\x6F\x72\x72\x65\x63\x74\x20\x41\x6E\x73\x77\x65\x72\x20\uD83C\uDF89\x5C\x6E\x5C\x6E\x57\x61\x6E\x74\x20\x54\x6F\x20\x50\x6C\x61\x79\x20\x41\x67\x61\x69\x6E\x3F\x20\x50\x72\x65\x73\x73\x20\x54\x68\x65\x20\x42\x75\x74\x74\x6F\x6E\x20\x42\x65\x6C\x6F\x77","\x67\x75\x65\x73\x73\x20\x72\x69\x64\x64\x6C\x65","\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x52\x69\x64\x64\x6C\x65","\uD83C\uDFAE\x20\x47\x75\x65\x73\x73\x20\x54\x68\x65\x20\x52\x69\x64\x64\x6C\x65\x20\uD83C\uDFAE\x5C\x6E\x5C\x6E\x43\x6F\x72\x72\x65\x63\x74\x20\x41\x6E\x73\x77\x65\x72\x20\uD83C\uDF89\x5C\x6E\x5C\x6E\x57\x61\x6E\x74\x20\x54\x6F\x20\x50\x6C\x61\x79\x20\x41\x67\x61\x69\x6E\x3F\x20\x50\x72\x65\x73\x73\x20\x54\x68\x65\x20\x42\x75\x74\x74\x6F\x6E\x20\x42\x65\x6C\x6F\x77"];if(tebaklagu[_0x5176[3]](m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0])&& isCmd){kuis= true;jawaban= tebaklagu[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]];if(budy[_0x5176[4]]()== jawaban){ await GarfieldAdd[_0x5176[11]](m[_0x5176[5]],[{buttonId:_0x5176[6],buttonText:{displayText:_0x5176[7]},type:1}],`${_0x5176[8]}`,`${_0x5176[9]}${global[_0x5176[10]]}${_0x5176[9]}`,m);delete tebaklagu[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]]}else {reply(_0x5176[12])}};if(kuismath[_0x5176[3]](m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0])&& isCmd){kuis= true;jawaban= kuismath[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]];if(budy[_0x5176[4]]()== jawaban){ await reply(`${_0x5176[13]}${prefix}${_0x5176[14]}`);delete kuismath[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]]}else {reply(_0x5176[12])}};if(tebakgambar[_0x5176[3]](m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0])&& isCmd){kuis= true;jawaban= tebakgambar[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]];if(budy[_0x5176[4]]()== jawaban){ await GarfieldAdd[_0x5176[11]](m[_0x5176[5]],[{buttonId:_0x5176[15],buttonText:{displayText:_0x5176[16]},type:1}],`${_0x5176[17]}`,`${_0x5176[9]}${global[_0x5176[10]]}${_0x5176[9]}`,m);delete tebakgambar[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]]}else {reply(_0x5176[12])}};if(tebakkata[_0x5176[3]](m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0])&& isCmd){kuis= true;jawaban= tebakkata[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]];if(budy[_0x5176[4]]()== jawaban){ await GarfieldAdd[_0x5176[11]](m[_0x5176[5]],[{buttonId:_0x5176[18],buttonText:{displayText:_0x5176[19]},type:1}],`${_0x5176[20]}`,`${_0x5176[9]}${global[_0x5176[10]]}${_0x5176[9]}`,m);delete tebakkata[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]]}else {reply(_0x5176[12])}};if(caklontong[_0x5176[3]](m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0])&& isCmd){kuis= true;jawaban= caklontong[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]];deskripsi= caklontong_desk[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]];if(budy[_0x5176[4]]()== jawaban){ await GarfieldAdd[_0x5176[11]](m[_0x5176[5]],[{buttonId:_0x5176[21],buttonText:{displayText:_0x5176[22]},type:1}],`${_0x5176[23]}${deskripsi}${_0x5176[24]}`,`${_0x5176[9]}${global[_0x5176[10]]}${_0x5176[9]}`,m);delete caklontong[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]];delete caklontong_desk[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]]}else {reply(_0x5176[12])}};if(tebakkalimat[_0x5176[3]](m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0])&& isCmd){kuis= true;jawaban= tebakkalimat[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]];if(budy[_0x5176[4]]()== jawaban){ await GarfieldAdd[_0x5176[11]](m[_0x5176[5]],[{buttonId:_0x5176[25],buttonText:{displayText:_0x5176[26]},type:1}],`${_0x5176[27]}`,`${_0x5176[9]}${global[_0x5176[10]]}${_0x5176[9]}`,m);delete tebakkalimat[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]]}else {reply(_0x5176[12])}};if(tebaklirik[_0x5176[3]](m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0])&& isCmd){kuis= true;jawaban= tebaklirik[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]];if(budy[_0x5176[4]]()== jawaban){ await GarfieldAdd[_0x5176[11]](m[_0x5176[5]],[{buttonId:_0x5176[28],buttonText:{displayText:_0x5176[29]},type:1}],`${_0x5176[30]}`,`${_0x5176[9]}${global[_0x5176[10]]}${_0x5176[9]}`,m);delete tebaklirik[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]]}else {reply(_0x5176[12])}};if(tebaktebakan[_0x5176[3]](m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0])&& isCmd){kuis= true;jawaban= tebaktebakan[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]];if(budy[_0x5176[4]]()== jawaban){ await GarfieldAdd[_0x5176[11]](m[_0x5176[5]],[{buttonId:_0x5176[31],buttonText:{displayText:_0x5176[32]},type:1}],`${_0x5176[33]}`,`${_0x5176[9]}${global[_0x5176[10]]}${_0x5176[9]}`,m);delete tebaktebakan[m[_0x5176[2]][_0x5176[1]](_0x5176[0])[0]]}else {reply(_0x5176[12])}}
                       //TicTacToe\\
	    var _0xea78=["\x67\x61\x6D\x65","\x69\x64","\x73\x74\x61\x74\x65","\x74\x69\x63\x74\x61\x63\x74\x6F\x65","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x73\x65\x6E\x64\x65\x72","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x70\x6C\x61\x79\x65\x72\x58","\x70\x6C\x61\x79\x65\x72\x4F","\x50\x4C\x41\x59\x49\x4E\x47","\x66\x69\x6E\x64","\x76\x61\x6C\x75\x65\x73","\x74\x65\x78\x74","\x74\x65\x73\x74","\x63\x75\x72\x72\x65\x6E\x74\x54\x75\x72\x6E","\x74\x75\x72\x6E","\x47\x61\x6D\x65\x20\x48\x61\x73\x20\x45\x6E\x64\x65\x64","\x49\x6E\x76\x61\x6C\x69\x64","\x49\x6E\x76\x61\x6C\x69\x64\x20\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x77\x69\x6E\x6E\x65\x72","\x62\x6F\x61\x72\x64","\u274C","\u2B55","\x31\uFE0F\u20E3","\x32\uFE0F\u20E3","\x33\uFE0F\u20E3","\x34\uFE0F\u20E3","\x35\uFE0F\u20E3","\x36\uFE0F\u20E3","\x37\uFE0F\u20E3","\x38\uFE0F\u20E3","\x39\uFE0F\u20E3","\x6D\x61\x70","\x72\x65\x6E\x64\x65\x72","\x5F\x63\x75\x72\x72\x65\x6E\x74\x54\x75\x72\x6E","\x52\x6F\x6F\x6D\x20\x49\x44\x3A\x20","\x0D\x0A\x0D\x0A","","\x6A\x6F\x69\x6E","\x73\x6C\x69\x63\x65","\x0D\x0A","\x40","\x73\x70\x6C\x69\x74","\x20\x57\x6F\x6E\x21","\x47\x61\x6D\x65\x20\x4F\x76\x65\x72","\x54\x75\x72\x6E\x20","\x20\x28\x40","\x29","\x0D\x0A\u274C\x3A\x20\x40","\x0D\x0A\u2B55\x3A\x20\x40","\x0D\x0A\x0D\x0A\x54\x79\x70\x65\x64\x20\x2A\x73\x75\x72\x72\x65\x6E\x64\x65\x72\x2A\x20\x74\x6F\x20\x73\x75\x72\x72\x65\x6E\x64\x65\x72\x20\x61\x6E\x64\x20\x61\x64\x6D\x69\x74\x65\x64\x20\x64\x65\x66\x65\x61\x74","\x78","\x6F","\x63\x68\x61\x74","\x73\x65\x6E\x64\x54\x65\x78\x74"];this[_0xea78[0]]= this[_0xea78[0]]?this[_0xea78[0]]:{};let room=Object[_0xea78[11]](this[_0xea78[0]])[_0xea78[10]]((room)=>{return room[_0xea78[1]]&& room[_0xea78[0]]&& room[_0xea78[2]]&& room[_0xea78[1]][_0xea78[4]](_0xea78[3])&& [room[_0xea78[0]][_0xea78[7]],room[_0xea78[0]][_0xea78[8]]][_0xea78[6]](m[_0xea78[5]])&& room[_0xea78[2]]== _0xea78[9]});if(room){let ok;let isWin=!1;let isTie=!1;let isSurrender=!1;if(!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i[_0xea78[13]](m[_0xea78[12]])){return};isSurrender=  !/^[1-9]$/[_0xea78[13]](m[_0xea78[12]]);if(m[_0xea78[5]]!== room[_0xea78[0]][_0xea78[14]]){if(!isSurrender){return !0}};if(!isSurrender&& 1> (ok= room[_0xea78[0]][_0xea78[15]](m[_0xea78[5]]=== room[_0xea78[0]][_0xea78[8]],parseInt(m[_0xea78[12]])- 1))){reply({'\x2D\x33':_0xea78[16],'\x2D\x32':_0xea78[17],'\x2D\x31':_0xea78[18],0:_0xea78[18]}[ok]);return !0};if(m[_0xea78[5]]=== room[_0xea78[0]][_0xea78[19]]){isWin= true}else {if(room[_0xea78[0]][_0xea78[20]]=== 511){isTie= true}};let arr=room[_0xea78[0]][_0xea78[33]]()[_0xea78[32]]((_0x896cx7)=>{return {X:_0xea78[21],O:_0xea78[22],1:_0xea78[23],2:_0xea78[24],3:_0xea78[25],4:_0xea78[26],5:_0xea78[27],6:_0xea78[28],7:_0xea78[29],8:_0xea78[30],9:_0xea78[31]}[_0x896cx7]});if(isSurrender){room[_0xea78[0]][_0xea78[34]]= m[_0xea78[5]]=== room[_0xea78[0]][_0xea78[7]];isWin= true};let winner=isSurrender?room[_0xea78[0]][_0xea78[14]]:room[_0xea78[0]][_0xea78[19]];let str=`${_0xea78[35]}${room[_0xea78[1]]}${_0xea78[36]}${arr[_0xea78[39]](0,3)[_0xea78[38]](_0xea78[37])}${_0xea78[40]}${arr[_0xea78[39]](3,6)[_0xea78[38]](_0xea78[37])}${_0xea78[40]}${arr[_0xea78[39]](6)[_0xea78[38]](_0xea78[37])}${_0xea78[36]}${isWin?`${_0xea78[41]}${winner[_0xea78[42]](_0xea78[41])[0]}${_0xea78[43]}`:isTie?`${_0xea78[44]}`:`${_0xea78[45]}${[_0xea78[21],_0xea78[22]][1* room[_0xea78[0]][_0xea78[34]]]}${_0xea78[46]}${room[_0xea78[0]][_0xea78[14]][_0xea78[42]](_0xea78[41])[0]}${_0xea78[47]}`}${_0xea78[48]}${room[_0xea78[0]][_0xea78[7]][_0xea78[42]](_0xea78[41])[0]}${_0xea78[49]}${room[_0xea78[0]][_0xea78[8]][_0xea78[42]](_0xea78[41])[0]}${_0xea78[50]}`;if((room[_0xea78[0]][_0xea78[34]]^ isSurrender?room[_0xea78[51]]:room[_0xea78[52]])!== m[_0xea78[53]]){room[room[_0xea78[0]][_0xea78[34]]^ isSurrender?_0xea78[51]:_0xea78[52]]= m[_0xea78[53]]};if(room[_0xea78[51]]!== room[_0xea78[52]]){ await GarfieldAdd[_0xea78[54]](room[_0xea78[51]],str,m,{mentions:parseMention(str)})}; await GarfieldAdd[_0xea78[54]](room[_0xea78[52]],str,m,{mentions:parseMention(str)});if(isTie|| isWin){delete this[_0xea78[0]][room[_0xea78[1]]]}}
        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) { const _0x1d1509=_0x583a;(function(_0x2ebc13,_0x2c4e6f){const _0x2fba23=_0x583a,_0x8f00ce=_0x2ebc13();while(!![]){try{const _0x17d9a6=-parseInt(_0x2fba23(0x12d))/0x1+-parseInt(_0x2fba23(0x13d))/0x2+parseInt(_0x2fba23(0x14b))/0x3+-parseInt(_0x2fba23(0x138))/0x4+-parseInt(_0x2fba23(0x136))/0x5+parseInt(_0x2fba23(0x129))/0x6+-parseInt(_0x2fba23(0x12b))/0x7*(-parseInt(_0x2fba23(0x148))/0x8);if(_0x17d9a6===_0x2c4e6f)break;else _0x8f00ce['push'](_0x8f00ce['shift']());}catch(_0x25016b){_0x8f00ce['push'](_0x8f00ce['shift']());}}}(_0x4f88,0xbc04a));function _0x583a(_0x5245c1,_0x5635d1){const _0x4f88a6=_0x4f88();return _0x583a=function(_0x583a54,_0x439447){_0x583a54=_0x583a54-0x125;let _0x27fca7=_0x4f88a6[_0x583a54];return _0x27fca7;},_0x583a(_0x5245c1,_0x5635d1);}function _0x4f88(){const _0x14c7e7=['3242460CIvVoC','sendTextWithMentions','14ajujGb','isGroup','1267664yAbKFn','status','waktu','_The\x20Opponent\x20Has\x20Chosen_\x0aNow\x20It\x20Is\x20Your\x20Turn','trim','chat','\x0aSERIES','asal','test','849720TvPozI','sender','229480FIEBhx','\x20Win\x20\x0a','pilih','You\x20Have\x20Chosen\x20','timeout','2092422OmFQUW','Please\x20Select\x20\x0aRock🗿\x0aPaper📄\x0aScissors✂️','\x0a\x0aWaiting\x20For\x20The\x20Opponent\x20To\x20Choose','\x20Lost\x20\x0a','split','Please\x20Select\x20\x0a\x0aRock🗿\x0aPaper📄\x0aScissors✂️','suit','pilih2','wait','text2','Suit\x20Has\x20Been\x20Sent\x20To\x20Chat\x0a\x0a@','5476008laylfe','\x20Refuse\x20Suit,\x20Suit\x20Canceled','toLowerCase','4205697KsFjfy','\x20dan\x20\x0a@','play','waktu_milih','sendText','text','exec'];_0x4f88=function(){return _0x14c7e7;};return _0x4f88();}let win='',tie=![];if(m['sender']==roof['p2']&&/^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i[_0x1d1509(0x135)](m[_0x1d1509(0x127)])&&m['isGroup']&&roof[_0x1d1509(0x12e)]==_0x1d1509(0x145)){if(/^(reject|no|later|n|nope(k.)?yes)/i[_0x1d1509(0x135)](m[_0x1d1509(0x127)]))return GarfieldAdd['sendTextWithMentions'](m[_0x1d1509(0x132)],'@'+roof['p2']['split']`@`[0x0]+_0x1d1509(0x149),m),delete this[_0x1d1509(0x143)][roof['id']],!0x0;roof[_0x1d1509(0x12e)]=_0x1d1509(0x14d),roof[_0x1d1509(0x134)]=m['chat'],clearTimeout(roof[_0x1d1509(0x12f)]),GarfieldAdd['sendText'](m[_0x1d1509(0x132)],_0x1d1509(0x147)+roof['p'][_0x1d1509(0x141)]`@`[0x0]+_0x1d1509(0x14c)+roof['p2'][_0x1d1509(0x141)]`@`[0x0]+'\x0a\x0aPlease\x20Choose\x20A\x20Suit\x20In\x20The\x20Respective\x20Chat\x22\x0aClick\x20https://wa.me/'+botNumber[_0x1d1509(0x141)]`@`[0x0],m,{'mentions':[roof['p'],roof['p2']]});if(!roof[_0x1d1509(0x13a)])GarfieldAdd[_0x1d1509(0x126)](roof['p'],_0x1d1509(0x13e),m);if(!roof[_0x1d1509(0x144)])GarfieldAdd[_0x1d1509(0x126)](roof['p2'],_0x1d1509(0x142),m);roof[_0x1d1509(0x125)]=setTimeout(()=>{const _0x2e6770=_0x1d1509;if(!roof[_0x2e6770(0x13a)]&&!roof[_0x2e6770(0x144)])GarfieldAdd[_0x2e6770(0x126)](m[_0x2e6770(0x132)],'Both\x20Players\x20Don\x27t\x20Want\x20To\x20Play,\x0aSuit\x20Canceled');else(!roof['pilih']||!roof['pilih2'])&&(win=!roof[_0x2e6770(0x13a)]?roof['p2']:roof['p'],GarfieldAdd[_0x2e6770(0x12a)](m[_0x2e6770(0x132)],'@'+(roof[_0x2e6770(0x13a)]?roof['p2']:roof['p'])[_0x2e6770(0x141)]`@`[0x0]+'\x20Didn\x27t\x20Choose\x20Suit,\x20Game\x20Over!',m));return delete this[_0x2e6770(0x143)][roof['id']],!0x0;},roof[_0x1d1509(0x13c)]);}let jwb=m[_0x1d1509(0x137)]==roof['p'],jwb2=m[_0x1d1509(0x137)]==roof['p2'],g=/scissors/i,b=/rock/i,k=/paper/i,reg=/^(scissors|rock|paper)/i;if(jwb&&reg['test'](m['text'])&&!roof[_0x1d1509(0x13a)]&&!m[_0x1d1509(0x12c)]){roof[_0x1d1509(0x13a)]=reg[_0x1d1509(0x128)](m[_0x1d1509(0x127)][_0x1d1509(0x14a)]())[0x0],roof[_0x1d1509(0x127)]=m[_0x1d1509(0x127)],reply(_0x1d1509(0x13b)+m[_0x1d1509(0x127)]+'\x20'+(!roof[_0x1d1509(0x144)]?_0x1d1509(0x13f):''));if(!roof[_0x1d1509(0x144)])GarfieldAdd['sendText'](roof['p2'],_0x1d1509(0x130),0x0);}if(jwb2&&reg[_0x1d1509(0x135)](m['text'])&&!roof[_0x1d1509(0x144)]&&!m[_0x1d1509(0x12c)]){roof[_0x1d1509(0x144)]=reg[_0x1d1509(0x128)](m[_0x1d1509(0x127)]['toLowerCase']())[0x0],roof[_0x1d1509(0x146)]=m[_0x1d1509(0x127)],reply(_0x1d1509(0x13b)+m[_0x1d1509(0x127)]+'\x20'+(!roof['pilih']?_0x1d1509(0x13f):''));if(!roof[_0x1d1509(0x13a)])GarfieldAdd[_0x1d1509(0x126)](roof['p'],'_The\x20Opponent\x20Has\x20Chosen_\x0aNow\x20It\x20Is\x20Your\x20Turn',0x0);}let stage=roof[_0x1d1509(0x13a)],stage2=roof[_0x1d1509(0x144)];if(roof[_0x1d1509(0x13a)]&&roof[_0x1d1509(0x144)]){clearTimeout(roof[_0x1d1509(0x125)]);if(b[_0x1d1509(0x135)](stage)&&g[_0x1d1509(0x135)](stage2))win=roof['p'];else{if(b[_0x1d1509(0x135)](stage)&&k['test'](stage2))win=roof['p2'];else{if(g[_0x1d1509(0x135)](stage)&&k[_0x1d1509(0x135)](stage2))win=roof['p'];else{if(g[_0x1d1509(0x135)](stage)&&b[_0x1d1509(0x135)](stage2))win=roof['p2'];else{if(k[_0x1d1509(0x135)](stage)&&b[_0x1d1509(0x135)](stage2))win=roof['p'];else{if(k[_0x1d1509(0x135)](stage)&&g[_0x1d1509(0x135)](stage2))win=roof['p2'];else{if(stage==stage2)tie=!![];}}}}}}GarfieldAdd[_0x1d1509(0x126)](roof[_0x1d1509(0x134)],('_*Suit\x20Results*_'+(tie?_0x1d1509(0x133):'')+'\x0a\x0a@'+roof['p'][_0x1d1509(0x141)]`@`[0x0]+'\x20('+roof[_0x1d1509(0x127)]+')\x20'+(tie?'':roof['p']==win?'\x20Win\x20\x0a':_0x1d1509(0x140))+'\x0a@'+roof['p2'][_0x1d1509(0x141)]`@`[0x0]+'\x20('+roof[_0x1d1509(0x146)]+')\x20'+(tie?'':roof['p2']==win?_0x1d1509(0x139):_0x1d1509(0x140))+'\x0a')[_0x1d1509(0x131)](),m,{'mentions':[roof['p'],roof['p2']]}),delete this['suit'][roof['id']];}	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) { var _0xc8d6=["\x75\x73\x65\x72\x73","\x64\x61\x74\x61","\x64\x62","\x61\x66\x6B\x54\x69\x6D\x65","\x61\x66\x6B\x52\x65\x61\x73\x6F\x6E","","\x74\x72\x69\x6D","\x0D\x0A\x44\x6F\x6E\x27\x74\x20\x74\x61\x67\x20\x68\x69\x6D\x21\x0D\x0A\x48\x65\x27\x73\x20\x69\x6E\x20\x41\x46\x4B\x2F\x4F\x66\x66\x6C\x69\x6E\x65\x20","\x64\x65\x6E\x67\x61\x6E\x20\x61\x6C\x61\x73\x61\x6E\x20","\x6E\x6F\x20\x72\x65\x61\x73\x6F\x6E","\x0D\x0A\x49\x74\x27\x73\x20\x62\x65\x65\x6E\x20","\x0D\x0A"];let user=global[_0xc8d6[2]][_0xc8d6[1]][_0xc8d6[0]][jid];if(!user){continue};let afkTime=user[_0xc8d6[3]];if(!afkTime|| afkTime< 0){continue};let reason=user[_0xc8d6[4]]|| _0xc8d6[5];reply(`${_0xc8d6[7]}${reason?_0xc8d6[8]+ reason:_0xc8d6[9]}${_0xc8d6[10]}${clockString( new Date- afkTime)}${_0xc8d6[11]}`[_0xc8d6[6]]())
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
        case 'inventori': case 'inventory': case 'profile':{ var _0x9ba3=["\x2D\x2D\x68\x65\x6C\x70","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x65\x6E\x64\x65\x72","\x55\x73\x65\x72\x27\x73\x20\x49\x6E\x76\x65\x6E\x74\x6F\x72\x79","\x5F\x5B\x20\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBC\x49\x4E\x46\x4F\x20\x55\x53\x45\x52\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBC\x20\x5D\x5F\x5C\x6E\x5C\x6E","\x2A\u2764\uFE0F\x59\x6F\x75\x72\x20\x42\x6C\x6F\x6F\x64\x2A\x20\x3A\x20","\x5C\x6E","\x2A\u25FB\uFE0F\uFE0F\x59\x6F\x75\x72\x20\x49\x72\x6F\x6E\x2A\x20\x3A\x20","\x2A\uD83C\uDF1F\x59\x6F\x75\x72\x20\x47\x6F\x6C\x64\x2A\x20\x3A\x20","\x2A\uD83D\uDC8E\x59\x6F\x75\x72\x20\x45\x6D\x65\x72\x61\x6C\x64\x2A\x20\x3A\x20","\x2A\u23FA\uFE0F\x59\x6F\x75\x72\x20\x4C\x69\x6D\x69\x74\x2A\x20\x3A\x20","\x2A\uD83E\uDDEA\x59\x6F\x75\x72\x20\x50\x6F\x74\x69\x6F\x6E\x2A\x20\x3A\x20","\x5C\x6E\x5C\x6E","\x5F\x5B\x20\uD83D\uDC3A\x48\x55\x4E\x54\x20\x52\x45\x53\x55\x4C\x54\uD83D\uDC3A\x20\x5D\x5F\x5C\x6E","\x2A\uD83D\uDC1F\x46\x69\x73\x68\x2A\x20\x3A\x20","\x2A\uD83D\uDC14\x43\x68\x69\x63\x6B\x65\x6E\x2A\x20\x3A\x20","\x2A\uD83D\uDC07\x52\x61\x62\x62\x69\x74\x2A\x20\x3A\x20","\x2A\uD83D\uDC11\x53\x68\x65\x65\x70\x2A\x20\x3A\x20","\x2A\uD83D\uDC04\x43\x6F\x77\x2A\x20\x3A\x20","\x2A\uD83D\uDC18\x45\x6C\x65\x70\x68\x61\x6E\x74\x2A\x20\x3A\x20","\x5F\x2A","\x2A\x5F","","\xA9\x20","\x46\x6F\x6C\x6C\x6F\x77\x20\x55\x73\x20\u2139\uFE0F\x20","\x73\x65\x6E\x64\x35\x42\x75\x74\x49\x6D\x67"];if(q[_0x9ba3[1]](_0x9ba3[0])){return reply(examkosong)};if(!isDarah){addInventoriDarah(m[_0x9ba3[2]],DarahAwal)};if(!isInventory){addInventori(m[_0x9ba3[2]])};if(!isInventoriBuruan){addInventoriBuruan(m[_0x9ba3[2]])};var GarfieldAdd= await getBuffer(picak+ `${_0x9ba3[3]}`);let teksehmazeh=`${_0x9ba3[4]}`;teksehmazeh+= `${_0x9ba3[5]}${getDarah(m[_0x9ba3[2]])}${_0x9ba3[6]}`;teksehmazeh+= `${_0x9ba3[7]}${getBesi(m[_0x9ba3[2]])}${_0x9ba3[6]}`;teksehmazeh+= `${_0x9ba3[8]}${getEmas(m[_0x9ba3[2]])}${_0x9ba3[6]}`;teksehmazeh+= `${_0x9ba3[9]}${getEmerald(m[_0x9ba3[2]])}${_0x9ba3[6]}`;teksehmazeh+= `${_0x9ba3[10]}${getLimit(m[_0x9ba3[2]])}${_0x9ba3[6]}`;teksehmazeh+= `${_0x9ba3[11]}${getPotion(m[_0x9ba3[2]])}${_0x9ba3[12]}`;teksehmazeh+= `${_0x9ba3[13]}`;teksehmazeh+= `${_0x9ba3[14]}${getIkan(m[_0x9ba3[2]])}${_0x9ba3[6]}`;teksehmazeh+= `${_0x9ba3[15]}${getAyam(m[_0x9ba3[2]])}${_0x9ba3[6]}`;teksehmazeh+= `${_0x9ba3[16]}${getKelinci(m[_0x9ba3[2]])}${_0x9ba3[6]}`;teksehmazeh+= `${_0x9ba3[17]}${getDomba(m[_0x9ba3[2]])}${_0x9ba3[6]}`;teksehmazeh+= `${_0x9ba3[18]}${getSapi(m[_0x9ba3[2]])}${_0x9ba3[6]}`;teksehmazeh+= `${_0x9ba3[19]}${getGajah(m[_0x9ba3[2]])}${_0x9ba3[12]}`;teksehmazeh+= `${_0x9ba3[20]}${pushname}${_0x9ba3[21]}`; await GarfieldAdd[_0x9ba3[25]](from,`${_0x9ba3[22]}`+ _0x9ba3[22]+ teksehmazeh,`${_0x9ba3[23]}${footer}${_0x9ba3[22]}`,GarfieldAdd,[{"\x75\x72\x6C\x42\x75\x74\x74\x6F\x6E":{"\x64\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74":_0x9ba3[24],"\x75\x72\x6C":`${_0x9ba3[22]}${myweb}${_0x9ba3[22]}`}}]) }
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
{ var _0xc599=["\u300C\x20\x2A\x4C\x45\x41\x44\x45\x52\x42\x4F\x41\x52\x44\x2A\x20\u300D\x5C\x6E\x5C\x6E","\u27B8\x20\x2A\x49\x44\x20\x3A\x2A\x20","\x69\x64","\x5C\x6E","\x2A\uD83D\uDC1F\x46\x69\x73\x68\x2A\x20\x3A\x20","\x69\x6B\x61\x6E","\x2A\uD83D\uDC14\x43\x68\x69\x63\x6B\x65\x6E\x2A\x20\x3A\x20","\x61\x79\x61\x6D","\x2A\uD83D\uDC07\x52\x61\x62\x62\x69\x74\x2A\x20\x3A\x20","\x6B\x65\x6C\x69\x6E\x63\x69","\x2A\uD83D\uDC11\x53\x68\x65\x65\x70\x2A\x20\x3A\x20","\x64\x6F\x6D\x62\x61","\x2A\uD83D\uDC04\x43\x6F\x77\x2A\x20\x3A\x20","\x73\x61\x70\x69","\x2A\uD83D\uDC18\x45\x6C\x65\x70\x68\x61\x6E\x74\x2A\x20\x3A\x20","\x67\x61\x6A\x61\x68","\x5C\x6E\x5C\x6E"];let txt=`${_0xc599[0]}`;for(let i of _buruan){txt+= `${_0xc599[1]}${i[_0xc599[2]]}${_0xc599[3]}`;txt+= `${_0xc599[4]}${i[_0xc599[5]]}${_0xc599[3]}`;txt+= `${_0xc599[6]}${i[_0xc599[7]]}${_0xc599[3]}`;txt+= `${_0xc599[8]}${i[_0xc599[9]]}${_0xc599[3]}`;txt+= `${_0xc599[10]}${i[_0xc599[11]]}${_0xc599[3]}`;txt+= `${_0xc599[12]}${i[_0xc599[13]]}${_0xc599[3]}`;txt+= `${_0xc599[14]}${i[_0xc599[15]]}${_0xc599[16]}`};reply(txt) }
 break
case 'mining': case 'mine':{ var _0x2553=["\x2D\x2D\x68\x65\x6C\x70","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x65\x6E\x64\x65\x72","\x59\x6F\x75\x27\x72\x65\x20\x54\x69\x72\x65\x64\x21\x2C\x20\x54\x72\x79\x20\x54\x6F\x20\x48\x65\x61\x6C\x20\x55\x73\x69\x6E\x67\x20\x50\x6F\x74\x69\x6F\x6E\x73","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x5B\x20\x4D\x49\x4E\x49\x4E\x47\x20\x52\x45\x53\x55\x4C\x54\x20\x5D\x5C\x6E\x2A\x49\x72\x6F\x6E\x2A\x20\x3A\x20","\x5C\x6E\x2A\x47\x6F\x6C\x64\x2A\x20\x3A\x20","\x5C\x6E\x2A\x45\x6D\x65\x72\x61\x6C\x64\x2A\x20\x3A\x20","","\x4D\x69\x6E\x65\x20\x41\x67\x61\x69\x6E\u26CF\uFE0F","\x2E\x2F\x73\x74\x6F\x72\x61\x67\x65\x2F\x69\x6D\x61\x67\x65\x2F\x74\x61\x6D\x62\x61\x6E\x67\x2E\x6A\x70\x67","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x40","\x73\x70\x6C\x69\x74","\x20\x53\x74\x61\x72\x74\x65\x64\x20\x4D\x69\x6E\x69\x6E\x67\uD83C\uDFA3","\x73\x65\x6E\x64\x65\x64"];if(q[_0x2553[1]](_0x2553[0])){return reply(examkosong)};if(!isInventory){addInventori(m[_0x2553[2]])};if(isCekDarah< 1){return reply(`${_0x2553[3]}`)};let besi=[1,2,5,0,3,0,1,1,4,1,5,0,0];let emas=[0,1,2,3,0,0,0,1,1,0,0,2];let emerald=[0,0,1,0,0,1,0,2,1,0,0,1];var besinya=besi[Math[_0x2553[6]](Math[_0x2553[4]]()* besi[_0x2553[5]])];var emasnya=emas[Math[_0x2553[6]](Math[_0x2553[4]]()* emas[_0x2553[5]])];var emeraldnya=emerald[Math[_0x2553[6]](Math[_0x2553[4]]()* emerald[_0x2553[5]])];setTimeout(()=>{let _0x5ec0x7=`${_0x2553[7]}${besinya}${_0x2553[8]}${emasnya}${_0x2553[9]}${emeraldnya}${_0x2553[10]}`;let _0x5ec0x8=[{buttonId:`${_0x2553[10]}${prefix+ command}${_0x2553[10]}`,buttonText:{displayText:_0x2553[11]},type:1}];let _0x5ec0x9={image:{url:_0x2553[12]},caption:_0x5ec0x7,footer:pushname,buttons:_0x5ec0x8,headerType:4};GarfieldAdd[_0x2553[13]](from,_0x5ec0x9,{quoted:m})},7000);setTimeout(()=>{reply(`${_0x2553[14]}${m[_0x2553[2]][_0x2553[15]](_0x2553[14])[0]}${_0x2553[16]}`)},1500);kurangDarah(m[_0x2553[2]],10);addBesi(m[_0x2553[2]],besinya);addEmas(m[_0x2553[17]],emasnya);addEmerald(m[_0x2553[2]],emeraldnya) }   
  break  
  //transaction\\
 case 'beli': case 'buy':{ var _0x5347=["\x2D\x2D\x68\x65\x6C\x70","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x65\x6E\x64\x65\x72","\x57\x68\x61\x74\x20\x44\x6F\x20\x59\x6F\x75\x20\x57\x61\x6E\x74\x20\x54\x6F\x20\x42\x75\x79\x3F\x5C\x6E\x5C\x6E\x31\x2E\x70\x6F\x74\x69\x6F\x6E\x5C\x6E\x32\x2E\x62\x61\x69\x74\x66\x6F\x6F\x64\x5C\x6E\x33\x2E\x6C\x69\x6D\x69\x74\x5C\x6E\x5C\x6E\x45\x78\x61\x6D\x70\x6C\x65\x3A\x20","\x20\x62\x61\x69\x74\x66\x6F\x6F\x64","\x70\x6F\x74\x69\x6F\x6E","\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x70\x6F\x74\x69\x6F\x6E\x20\x32\x5C\x6E\x20\x31\x20\x50\x6F\x74\x69\x6F\x6E\x20\x3D\x20\x31\x30\x30\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x4D\x6F\x6E\x65\x79\x20\x49\x73\x20\x4E\x6F\x74\x20\x53\x75\x66\x66\x69\x63\x69\x65\x6E\x74\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x50\x75\x72\x63\x68\x61\x73\x65","\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x20\x53\x75\x63\x63\x65\x73\x73\x66\x75\x6C\x20\u2714\uFE0F\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x4D\x6F\x6E\x65\x79\x2A\x20\x3A\x20","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x50\x6F\x74\x69\x6F\x6E\x2A\x20\x3A\x20","","\x62\x61\x69\x74\x66\x6F\x6F\x64","\x20\x62\x61\x69\x74\x66\x6F\x6F\x64\x20\x32\x5C\x6E\x20\x31\x20\x42\x61\x69\x74\x20\x46\x6F\x6F\x64\x20\x3D\x20\x32\x35\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x42\x61\x69\x74\x20\x46\x6F\x6F\x64\x2A\x20\x3A\x20","\x6C\x69\x6D\x69\x74","\x20\x6C\x69\x6D\x69\x74\x20\x32\x5C\x6E\x20\x31\x20\x4C\x69\x6D\x69\x74\x20\x3D\x20\x33\x35\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x4C\x69\x6D\x69\x74\x2A\x20\x3A\x20","\x49\x6E\x63\x6F\x72\x72\x65\x63\x74\x20\x46\x6F\x72\x6D\x61\x74\x21"];if(q[_0x5347[1]](_0x5347[0])){return reply(examkosong)};if(!isInventoriBuruan){addInventoriBuruan(m[_0x5347[2]])};if(!isInventoryMonay){addInventoriMonay(m[_0x5347[2]])};if(!isInventory){addInventori(m[_0x5347[2]])};if(!q){return reply(`${_0x5347[3]}${prefix+ command}${_0x5347[4]}`)};var anu=args[1];if(args[0]=== _0x5347[5]){let noh=100000* anu;if(!args[1]){return reply(`${_0x5347[6]}${prefix+ command}${_0x5347[7]}`)};if(isMonay< noh){return reply(_0x5347[8])};kurangMonay(m[_0x5347[2]],noh);var apalu=anu* 1;addPotion(m[_0x5347[2]],apalu);setTimeout(()=>{reply(`${_0x5347[9]}${getMonay(m[_0x5347[2]])}${_0x5347[10]}${getPotion(m[_0x5347[2]])}${_0x5347[11]}`)},2000)}else {if(args[0]=== _0x5347[12]){let noh=5000* anu;if(!args[1]){return reply(`${_0x5347[6]}${prefix+ command}${_0x5347[13]}`)};if(isMonay< noh){return reply(_0x5347[8])};kurangMonay(m[_0x5347[2]],noh);var apalu=anu* 1;addUmpan(m[_0x5347[2]],apalu);setTimeout(()=>{reply(`${_0x5347[9]}${getMonay(m[_0x5347[2]])}${_0x5347[14]}${getUmpan(m[_0x5347[2]])}${_0x5347[11]}`)},2000)}else {if(args[0]=== _0x5347[15]){let noh=35000* anu;if(!args[1]){return reply(`${_0x5347[6]}${prefix+ command}${_0x5347[16]}`)};if(isMonay< noh){return reply(_0x5347[8])};kurangMonay(m[_0x5347[2]],noh);var apalu=anu* 1;addLimit(m[_0x5347[2]],apalu);setTimeout(()=>{reply(`${_0x5347[9]}${getMonay(m[_0x5347[2]])}${_0x5347[17]}${getLimit(m[_0x5347[2]])}${_0x5347[11]}`)},2000)}else {reply(_0x5347[18])}}} }
 break
 case 'sel': case 'jual':{ var _0x300f=["\x57\x68\x61\x74\x20\x44\x6F\x20\x59\x6F\x75\x20\x57\x61\x6E\x74\x20\x54\x6F\x20\x53\x65\x6C\x6C\x3F\x3F\x5C\x6E\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x66\x69\x73\x68\x20\x32","\x73\x65\x6E\x64\x65\x72","\x66\x69\x73\x68","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x46\x69\x73\x68\x28\x65\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x66\x69\x73\x68\x20\x32\x5C\x6E\x20\x31\x20\x46\x69\x73\x68\x20\x3D\x20\x31\x35\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x20\x53\x75\x63\x63\x65\x73\x73\x66\x75\x6C\x20\u2714\uFE0F\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x4D\x6F\x6E\x65\x79\x2A\x20\x3A\x20","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x46\x69\x73\x68\x28\x65\x73\x29\x2A\x20\x3A\x20","","\x63\x68\x69\x63\x6B\x65\x6E","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x43\x68\x69\x63\x6B\x65\x6E\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x63\x68\x69\x63\x6B\x65\x6E\x20\x32\x5C\x6E\x20\x31\x20\x43\x68\x69\x63\x6B\x65\x6E\x20\x3D\x20\x32\x35\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x43\x68\x69\x63\x6B\x65\x6E\x2A\x20\x3A\x20","\x72\x61\x62\x62\x69\x74","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x52\x61\x62\x62\x69\x74\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x72\x61\x62\x62\x69\x74\x20\x32\x5C\x6E\x20\x31\x20\x52\x61\x62\x62\x69\x74\x20\x3D\x20\x33\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x52\x61\x62\x62\x69\x74\x28\x73\x29\x2A\x20\x3A\x20","\x73\x68\x65\x65\x70","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x53\x68\x65\x65\x70\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x64\x6F\x6D\x62\x61\x20\x32\x5C\x6E\x20\x31\x20\x53\x68\x65\x65\x70\x20\x3D\x20\x35\x30\x30\x30\x20\x6D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x53\x68\x65\x65\x70\x28\x73\x29\x2A\x20\x3A\x20","\x63\x6F\x77","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x43\x6F\x77\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x63\x6F\x77\x20\x32\x5C\x6E\x20\x31\x20\x43\x6F\x77\x20\x3D\x20\x31\x30\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x43\x6F\x77\x28\x73\x29\x2A\x20\x3A\x20","\x65\x6C\x65\x70\x68\x61\x6E\x74","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x45\x6C\x65\x70\x68\x61\x6E\x74\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x65\x6C\x65\x70\x68\x61\x6E\x74\x20\x32\x5C\x6E\x20\x31\x20\x45\x6C\x65\x70\x68\x61\x6E\x74\x20\x3D\x20\x31\x35\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x45\x6C\x65\x70\x68\x61\x6E\x74\x28\x73\x29\x2A\x20\x3A\x20","\x69\x72\x6F\x6E","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x49\x72\x6F\x6E\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x69\x72\x6F\x6E\x20\x32\x5C\x6E\x20\x31\x20\x49\x72\x6F\x6E\x20\x3D\x20\x31\x35\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x49\x72\x6F\x6E\x28\x73\x29\x2A\x20\x3A\x20","\x67\x6F\x6C\x64","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x47\x6F\x6C\x64\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x67\x6F\x6C\x64\x20\x32\x5C\x6E\x20\x31\x20\x47\x6F\x6C\x64\x20\x3D\x20\x35\x30\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x20\x53\x75\x63\x63\x65\x73\x73\x66\x75\x6C\x20\u2714\uFE0F\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x4D\x6F\x6E\x65\x79\x2A\x20\x3A\x20","\x5C\x6E\x2A\x59\x6F\x75\x72\x20\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x47\x6F\x6C\x64\x28\x73\x29\x2A\x20\x3A\x20","\x65\x6D\x65\x72\x61\x6C\x64","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x45\x6D\x65\x72\x61\x6C\x64\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E","\x20\x65\x6D\x65\x72\x61\x6C\x64\x20\x32\x5C\x6E\x20\x31\x20\x45\x6D\x65\x72\x61\x6C\x64\x20\x3D\x20\x31\x30\x30\x30\x30\x30\x20\x4D\x6F\x6E\x65\x79","\x5C\x6E\x2A\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x45\x6E\x6F\x75\x67\x68\x20\x45\x6D\x65\x72\x61\x6C\x64\x28\x73\x29\x20\x46\x6F\x72\x20\x54\x68\x69\x73\x20\x54\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x2A\x20\x3A\x20","\x49\x6E\x63\x6F\x72\x72\x65\x63\x74\x20\x46\x6F\x72\x6D\x61\x74\x21"];if(!q){return reply(`${_0x300f[0]}${prefix+ command}${_0x300f[1]}`)};if(!isInventoriBuruan){addInventoriBuruan(m[_0x300f[2]])};if(!isInventoryMonay){addInventoriMonay(m[_0x300f[2]])};if(!isInventory){addInventori(m[_0x300f[2]])};var anu=args[1];if(args[0]=== _0x300f[3]){if(isIkan< anu){return reply(`${_0x300f[4]}`)};if(!args[1]){return reply(`${_0x300f[5]}${prefix+ command}${_0x300f[6]}`)};kurangIkan(m[_0x300f[2]],anu);let monaynya=1500* anu;addMonay(m[_0x300f[2]],monaynya);setTimeout(()=>{reply(`${_0x300f[7]}${getMonay(m[_0x300f[2]])}${_0x300f[8]}${getIkan(m[_0x300f[2]])}${_0x300f[9]}`)},2000)}else {if(args[0]=== _0x300f[10]){if(isAyam< anu){return reply(`${_0x300f[11]}`)};if(!args[1]){return reply(`${_0x300f[5]}${prefix+ command}${_0x300f[12]}`)};kurangAyam(m[_0x300f[2]],anu);let monaynya=2500* anu;addMonay(m[_0x300f[2]],monaynya);setTimeout(()=>{reply(`${_0x300f[7]}${getMonay(m[_0x300f[2]])}${_0x300f[13]}${getAyam(m[_0x300f[2]])}${_0x300f[9]}`)},2000)}else {if(args[0]=== _0x300f[14]){if(isKelinci< anu){return reply(`${_0x300f[15]}`)};if(!args[1]){return reply(`${_0x300f[5]}${prefix+ command}${_0x300f[16]}`)};kurangKelinci(m[_0x300f[2]],anu);let monaynya=3000* anu;addMonay(m[_0x300f[2]],monaynya);setTimeout(()=>{reply(`${_0x300f[7]}${getMonay(m[_0x300f[2]])}${_0x300f[17]}${getKelinci(m[_0x300f[2]])}${_0x300f[9]}`)},2000)}else {if(args[0]=== _0x300f[18]){if(isDomba< anu){return reply(`${_0x300f[19]}`)};if(!args[1]){return reply(`${_0x300f[5]}${prefix+ command}${_0x300f[20]}`)};kurangDomba(m[_0x300f[2]],anu);let monaynya=5000* anu;addMonay(m[_0x300f[2]],monaynya);setTimeout(()=>{reply(`${_0x300f[7]}${getMonay(m[_0x300f[2]])}${_0x300f[21]}${getDomba(m[_0x300f[2]])}${_0x300f[9]}`)},2000)}else {if(args[0]=== _0x300f[22]){if(isSapi< anu){return reply(`${_0x300f[23]}`)};if(!args[1]){return reply(`${_0x300f[5]}${prefix+ command}${_0x300f[24]}`)};kurangSapi(m[_0x300f[2]],anu);let monaynya=10000* anu;addMonay(m[_0x300f[2]],monaynya);setTimeout(()=>{reply(`${_0x300f[7]}${getMonay(m[_0x300f[2]])}${_0x300f[25]}${getSapi(m[_0x300f[2]])}${_0x300f[9]}`)},2000)}else {if(args[0]=== _0x300f[26]){if(isGajah< anu){return reply(`${_0x300f[27]}`)};if(!args[1]){return reply(`${_0x300f[5]}${prefix+ command}${_0x300f[28]}`)};kurangGajah(m[_0x300f[2]],anu);let monaynya=15000* anu;addMonay(m[_0x300f[2]],monaynya);setTimeout(()=>{reply(`${_0x300f[7]}${getMonay(m[_0x300f[2]])}${_0x300f[29]}${getGajah(m[_0x300f[2]])}${_0x300f[9]}`)},2000)}else {if(args[0]=== _0x300f[30]){if(isBesi< anu){return reply(`${_0x300f[31]}`)};if(!args[1]){return reply(`${_0x300f[5]}${prefix+ command}${_0x300f[32]}`)};kurangBesi(m[_0x300f[2]],anu);let monaynya=16000* anu;addMonay(m[_0x300f[2]],monaynya);setTimeout(()=>{reply(`${_0x300f[7]}${getMonay(m[_0x300f[2]])}${_0x300f[33]}${getBesi(m[_0x300f[2]])}${_0x300f[9]}`)},2000)}else {if(args[0]=== _0x300f[34]){if(isEmas< anu){return reply(`${_0x300f[35]}`)};if(!args[1]){return reply(`${_0x300f[5]}${prefix+ command}${_0x300f[36]}`)};kurangEmas(m[_0x300f[2]],anu);let monaynya=50000* anu;addMonay(m[_0x300f[2]],monaynya);setTimeout(()=>{reply(`${_0x300f[37]}${getMonay(m[_0x300f[2]])}${_0x300f[38]}${getEmas(m[_0x300f[2]])}${_0x300f[9]}`)},2000)}else {if(args[0]=== _0x300f[39]){if(isEmerald< anu){return reply(`${_0x300f[40]}`)};if(!args[1]){return reply(`${_0x300f[5]}${prefix+ command}${_0x300f[41]}`)};kurangEmerald(m[_0x300f[2]],anu);let monaynya=100000* anu;addMonay(m[_0x300f[2]],monaynya);setTimeout(()=>{reply(`${_0x300f[7]}${getMonay(m[_0x300f[2]])}${_0x300f[42]}${getEmerald(m[_0x300f[2]])}${_0x300f[9]}`)},2000)}else {reply(_0x300f[43])}}}}}}}}} }
 break

 case 'heal':{ var _0x497b=["\x2D\x2D\x68\x65\x6C\x70","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x59\x6F\x75\x20\x43\x61\x6E\x20\x4F\x6E\x6C\x79\x20\x48\x65\x61\x6C\x20\x57\x68\x65\x6E\x20\x59\x6F\x75\x72\x20\x42\x6C\x6F\x6F\x64\x20\x49\x73\x20\x30","\x59\x6F\x75\x72\x20\x42\x6C\x6F\x6F\x64\x20\x49\x73\x20\x46\x75\x6C\x6C","\x59\x6F\x75\x20\x44\x6F\x6E\x27\x74\x20\x48\x61\x76\x65\x20\x41\x20\x50\x6F\x74\x69\x6F\x6E\x2C\x20\x54\x72\x79\x20\x42\x75\x79\x69\x6E\x67\x20\x49\x74\x20\x54\x68\x69\x73\x20\x57\x61\x79\x20\x23\x62\x75\x79\x70\x6F\x74\x69\x6F\x6E\x20\x5F\x61\x6D\x6F\x75\x6E\x74\x5F","\x73\x65\x6E\x64\x65\x72","\x53\x75\x63\x63\x65\x73\x73\x21\x20\x59\x6F\x75\x72\x20\x42\x6F\x6F\x64\x20\x49\x73\x20\x46\x75\x6C\x6C"];if(q[_0x497b[1]](_0x497b[0])){return reply(examkosong)};if(!isCekDarah< 1){return reply(_0x497b[2])};if(isCekDarah> 100){return reply(_0x497b[3])};if(isPotion< 1){return reply(`${_0x497b[4]}`)};addDarah(m[_0x497b[5]],100);kurangPotion(m[_0x497b[5]],1);reply(_0x497b[6]) }
 break
 case 'hunt': case 'hunting': { var _0x1ed1=["\x2D\x2D\x68\x65\x6C\x70","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x65\x6E\x64\x65\x72","\x59\x6F\x75\x72\x20\x42\x6C\x6F\x6F\x64\x20\x49\x73\x20\x47\x6F\x6E\x65\x2C\x20\x54\x72\x79\x20\x54\x6F\x20\x48\x65\x61\x6C\x20\x55\x73\x69\x6E\x67\x20\x50\x6F\x74\x69\x6F\x6E\x73","\x50\x69\x65\x72\x63\x65\x64\x20\x62\x79\x20\x61\x20\x74\x68\x6F\x72\x6E\x20\x77\x68\x69\x6C\x65\x20\x68\x75\x6E\x74\x69\x6E\x67","\x53\x6C\x69\x70\x70\x65\x64\x20\x69\x6E\x74\x6F\x20\x74\x68\x65\x20\x61\x62\x79\x73\x73\x20\x77\x68\x69\x6C\x65\x20\x68\x75\x6E\x74\x69\x6E\x67","\x53\x63\x72\x61\x74\x63\x68\x65\x64\x20\x62\x79\x20\x61\x20\x77\x69\x6C\x64\x20\x61\x6E\x69\x6D\x61\x6C","\x4E\x6F\x74\x20\x63\x61\x72\x65\x66\x75\x6C","\x45\x6E\x74\x61\x6E\x67\x6C\x65\x64\x20\x69\x6E\x20\x72\x6F\x6F\x74\x73","\x46\x61\x6C\x6C\x20\x77\x68\x69\x6C\x65\x20\x68\x75\x6E\x74\x69\x6E\x67","\x4A\x75\x6E\x67\x6C\x65","\x41\x6D\x61\x7A\x6F\x6E\x20\x66\x6F\x72\x65\x73\x74","\x54\x72\x6F\x70\x69\x63\x61\x6C\x20\x66\x6F\x72\x65\x73\x74","\x4D\x65\x61\x64\x6F\x77","\x41\x66\x72\x69\x63\x61\x6E\x20\x66\x6F\x72\x65\x73\x74","\x4D\x6F\x75\x6E\x74\x61\x69\x6E\x73","\x72\x61\x6E\x64\x6F\x6D","\x63\x65\x69\x6C","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x2E\x2F\x73\x74\x6F\x72\x61\x67\x65\x2F\x69\x6D\x61\x67\x65\x2F\x72\x69\x6D\x62\x61\x2E\x6A\x70\x67","\x2E\x2F\x73\x74\x6F\x72\x61\x67\x65\x2F\x69\x6D\x61\x67\x65\x2F\x61\x6D\x61\x7A\x6F\x6E\x2E\x6A\x70\x67","\x2E\x2F\x73\x74\x6F\x72\x61\x67\x65\x2F\x69\x6D\x61\x67\x65\x2F\x74\x72\x6F\x70\x69\x73\x2E\x6A\x70\x67","\x2E\x2F\x73\x74\x6F\x72\x61\x67\x65\x2F\x69\x6D\x61\x67\x65\x2F\x70\x61\x64\x61\x6E\x67\x5F\x72\x75\x6D\x70\x75\x74\x2E\x6A\x70\x67","\x2E\x2F\x73\x74\x6F\x72\x61\x67\x65\x2F\x69\x6D\x61\x67\x65\x2F\x61\x66\x72\x69\x6B\x61\x2E\x6A\x70\x67","\x2E\x2F\x73\x74\x6F\x72\x61\x67\x65\x2F\x69\x6D\x61\x67\x65\x2F\x70\x65\x67\x75\x6E\x75\x6E\x67\x61\x6E\x2E\x6A\x70\x67","\x5F\x5B\x20\x48\x55\x4E\x54\x20\x52\x45\x53\x55\x4C\x54\x20\x5D\x5F\x5C\x6E","\x2A\uD83D\uDC1F\x46\x69\x73\x68\x2A\x20\x3A\x20","\x5C\x6E","\x2A\uD83D\uDC14\x43\x68\x69\x63\x6B\x65\x6E\x2A\x20\x3A\x20","\x2A\uD83D\uDC07\x52\x61\x62\x62\x69\x74\x2A\x20\x3A\x20","\x2A\uD83D\uDC11\x53\x68\x65\x65\x70\x2A\x20\x3A\x20","\x2A\uD83D\uDC04\x43\x6F\x77\x2A\x20\x3A\x20","\x2A\uD83D\uDC18\x45\x6C\x65\x70\x68\x61\x6E\x74\x2A\x20\x3A\x20","\x5C\x6E\x5C\x6E","\x5F\x5B\x20\x49\x4E\x46\x4F\x20\x5D\x5F\x5C\x6E","\x2A\x4C\x6F\x63\x61\x74\x69\x6F\x6E\x2A\x20\x3A\x20","\x2A\x57\x6F\x75\x6E\x64\x65\x64\x2A\x20\x3A\x20","\x2C\x20\x62\x6C\x6F\x6F\x64\x20\x2D\x20\x31\x30\x5C\x6E","\x2A\x52\x65\x6D\x61\x69\x6E\x69\x6E\x67\x20\x62\x6C\x6F\x6F\x64\x2A\x20\x3A\x20","","\x48\x75\x6E\x74\x20\x41\x67\x61\x69\x6E\uFE0F\uD83C\uDFF9","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x40","\x73\x70\x6C\x69\x74","\x20\x53\x74\x61\x72\x74\x65\x64\x20\x48\x75\x6E\x74\x69\x6E\x67\x20\x49\x6E\x20"];if(q[_0x1ed1[1]](_0x1ed1[0])){return reply(examkosong)};if(!isDarah){addInventoriDarah(m[_0x1ed1[2]],DarahAwal)};if(isCekDarah< 1){return reply(_0x1ed1[3])};if(!isInventoriBuruan){addInventoriBuruan(m[_0x1ed1[2]])};let luka=[_0x1ed1[4],_0x1ed1[5],_0x1ed1[6],_0x1ed1[7],_0x1ed1[8],_0x1ed1[9]];let location=[_0x1ed1[10],_0x1ed1[11],_0x1ed1[12],_0x1ed1[13],_0x1ed1[14],_0x1ed1[15]];var ikanmu=Math[_0x1ed1[17]](Math[_0x1ed1[16]]()* 10);var ayam=Math[_0x1ed1[17]](Math[_0x1ed1[16]]()* 8);var kelinci=Math[_0x1ed1[17]](Math[_0x1ed1[16]]()* 7);var dombanya=[3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1];var sapinya=[2,0,3,0,4,0,5,0,1,0,2,0,3,0,1];var gajahnya=[1,0,4,0,2,0,1,0,2,1,3,0,1];var domba=dombanya[Math[_0x1ed1[19]](Math[_0x1ed1[16]]()* dombanya[_0x1ed1[18]])];var sapi=sapinya[Math[_0x1ed1[19]](Math[_0x1ed1[16]]()* sapinya[_0x1ed1[18]])];var gajah=gajahnya[Math[_0x1ed1[19]](Math[_0x1ed1[16]]()* gajahnya[_0x1ed1[18]])];var lukanya=luka[Math[_0x1ed1[19]](Math[_0x1ed1[16]]()* luka[_0x1ed1[18]])];var lokasinya=location[Math[_0x1ed1[19]](Math[_0x1ed1[16]]()* location[_0x1ed1[18]])];if(lokasinya=== _0x1ed1[10]){var image=_0x1ed1[20]}else {if(lokasinya=== _0x1ed1[11]){var image=_0x1ed1[21]}else {if(lokasinya=== _0x1ed1[12]){var image=_0x1ed1[22]}else {if(lokasinya=== _0x1ed1[13]){var image=_0x1ed1[23]}else {if(lokasinya=== _0x1ed1[14]){var image=_0x1ed1[24]}else {if(lokasinya=== _0x1ed1[15]){var image=_0x1ed1[25]}}}}}};setTimeout(()=>{let _0x2898xf=`${_0x1ed1[26]}`;_0x2898xf+= `${_0x1ed1[27]}${ikanmu}${_0x1ed1[28]}`;_0x2898xf+= `${_0x1ed1[29]}${ayam}${_0x1ed1[28]}`;_0x2898xf+= `${_0x1ed1[30]}${kelinci}${_0x1ed1[28]}`;_0x2898xf+= `${_0x1ed1[31]}${domba}${_0x1ed1[28]}`;_0x2898xf+= `${_0x1ed1[32]}${sapi}${_0x1ed1[28]}`;_0x2898xf+= `${_0x1ed1[33]}${gajah}${_0x1ed1[34]}`;_0x2898xf+= `${_0x1ed1[35]}`;_0x2898xf+= `${_0x1ed1[36]}${lokasinya}${_0x1ed1[28]}`;_0x2898xf+= `${_0x1ed1[37]}${lukanya}${_0x1ed1[38]}`;_0x2898xf+= `${_0x1ed1[39]}${getDarah(m[_0x1ed1[2]])}${_0x1ed1[28]}`;let _0x2898x10=[{buttonId:`${_0x1ed1[40]}${prefix+ command}${_0x1ed1[40]}`,buttonText:{displayText:_0x1ed1[41]},type:1}];let _0x2898x11={image:{url:image},caption:_0x2898xf,footer:pushname,buttons:_0x2898x10,headerType:4};GarfieldAdd[_0x1ed1[42]](from,_0x2898x11,{quoted:m})},5000);setTimeout(()=>{reply(`${_0x1ed1[43]}${m[_0x1ed1[2]][_0x1ed1[44]](_0x1ed1[43])[0]}${_0x1ed1[45]}${lokasinya}${_0x1ed1[40]}`)},1000);addIkan(m[_0x1ed1[2]],ikanmu);addAyam(m[_0x1ed1[2]],ayam);addKelinci(m[_0x1ed1[2]],kelinci);addDomba(m[_0x1ed1[2]],domba);addSapi(m[_0x1ed1[2]],sapi);addGajah(m[_0x1ed1[2]],gajah);kurangDarah(m[_0x1ed1[2]],10) }
 break
 case 'play': case 'song': case 'ytplay': { var _0x39e2=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x6B\x75\x77\x65\x6E\x69","\x79\x74\x2D\x73\x65\x61\x72\x63\x68","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x76\x69\x64\x65\x6F\x73","\x79\x74\x61\x75\x64\x69\x6F\x20","\x75\x72\x6C","","\uD83C\uDFB6\x20\x41\x75\x64\x69\x6F","\x79\x74\x76\x69\x64\x65\x6F\x20","\x56\x69\x64\x65\x6F\x20\uD83D\uDCFD\uFE0F","\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x20\x60\x60\x60\x54\x69\x74\x6C\x65\x60\x60\x60\x20\x2D\x20\x2A","\x74\x69\x74\x6C\x65","\x2A\x0A\x60\x60\x60\x44\x75\x72\x61\x74\x69\x6F\x6E\x60\x60\x60\x20\x2D\x20\x2A","\x74\x69\x6D\x65\x73\x74\x61\x6D\x70","\x2A\x0A\x60\x60\x60\x56\x69\x65\x77\x65\x73\x60\x60\x60\x20\x2D\x20\x2A","\x76\x69\x65\x77\x73","\x2A\x0A\x60\x60\x60\x55\x70\x6C\x6F\x61\x64\x65\x64\x20\x4F\x6E\x60\x60\x60\x20\x2D\x20\x2A","\x61\x67\x6F","\x2A\x0A\x60\x60\x60\x41\x75\x74\x68\x6F\x72\x60\x60\x60\x20\x2D\x20\x2A","\x6E\x61\x6D\x65","\x61\x75\x74\x68\x6F\x72","\x2A\x0A\x60\x60\x60\x43\x68\x61\x6E\x6E\x65\x6C\x60\x60\x60\x20\x2D\x20\x2A","\x2A\x0A\x60\x60\x60\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x60\x60\x60\x20\x2D\x20\x2A","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x2A\x0A\x60\x60\x60\x55\x52\x4C\x60\x60\x60\x20\x2D\x20\x2A","\x2A\x20","\xA9\x20\x47\x61\x72\x66\x69\x65\x6C\x64\x20\x57\x68\x61\x74\x73\x61\x70\x70\x20\x42\x6F\x74\x20\x32\x30\x32\x32","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){return reply(`${_0x39e2[0]}${prefix+ command}${_0x39e2[1]}`)};let yts=require(_0x39e2[2]);let search= await yts(text);let anu=search[_0x39e2[5]][Math[_0x39e2[4]](Math[_0x39e2[3]]()* 1)];let buttons=[{buttonId:`${_0x39e2[6]}${anu[_0x39e2[7]]}${_0x39e2[8]}`,buttonText:{displayText:_0x39e2[9]},type:1},{buttonId:`${_0x39e2[10]}${anu[_0x39e2[7]]}${_0x39e2[8]}`,buttonText:{displayText:_0x39e2[11]},type:1}];let buttonMessage={image:{url:anu[_0x39e2[12]]},caption:_0x39e2[13]+ anu[_0x39e2[14]]+ _0x39e2[15]+ anu[_0x39e2[16]]+ _0x39e2[17]+ anu[_0x39e2[18]]+ _0x39e2[19]+ anu[_0x39e2[20]]+ _0x39e2[21]+ anu[_0x39e2[23]][_0x39e2[22]]+ _0x39e2[24]+ anu[_0x39e2[23]][_0x39e2[7]]+ _0x39e2[25]+ anu[_0x39e2[26]]+ _0x39e2[27]+ anu[_0x39e2[7]]+ _0x39e2[28],footer:`${_0x39e2[29]}`,buttons:buttons,headerType:4};GarfieldAdd[_0x39e2[31]](m[_0x39e2[30]],buttonMessage,{quoted:m}) }
            break
	    case 'ytmp3': case 'getmusic': case 'ytaudio': {
                let { tharinduaudio } = require('./lib/ytmp3')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                let quality = args[1] ? args[1] : '128kbps'
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
        case 'ttc': case 'ttt': case 'tictactoe': { var _0xa3e9=["\x2E\x2F\x6C\x69\x62\x2F\x74\x69\x63\x74\x61\x63\x74\x6F\x65","\x67\x61\x6D\x65","\x74\x69\x63\x74\x61\x63\x74\x6F\x65","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x69\x64","\x73\x65\x6E\x64\x65\x72","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x70\x6C\x61\x79\x65\x72\x58","\x70\x6C\x61\x79\x65\x72\x4F","\x66\x69\x6E\x64","\x76\x61\x6C\x75\x65\x73","\x59\x6F\x75\x20\x41\x72\x65\x20\x53\x74\x69\x6C\x6C\x20\x49\x6E\x20\x54\x68\x65\x20\x47\x61\x6D\x65","\x73\x74\x61\x74\x65","\x57\x41\x49\x54\x49\x4E\x47","\x6E\x61\x6D\x65","\x50\x61\x72\x74\x6E\x65\x72\x20\x66\x6F\x75\x6E\x64\x21","\x6F","\x63\x68\x61\x74","\x50\x4C\x41\x59\x49\x4E\x47","\u274C","\u2B55","\x31\uFE0F\u20E3","\x32\uFE0F\u20E3","\x33\uFE0F\u20E3","\x34\uFE0F\u20E3","\x35\uFE0F\u20E3","\x36\uFE0F\u20E3","\x37\uFE0F\u20E3","\x38\uFE0F\u20E3","\x39\uFE0F\u20E3","\x6D\x61\x70","\x72\x65\x6E\x64\x65\x72","\x52\x6F\x6F\x6D\x20\x49\x44\x3A\x20","\x0D\x0A\x0D\x0A","","\x6A\x6F\x69\x6E","\x73\x6C\x69\x63\x65","\x0D\x0A","\x0D\x0A\x0D\x0A\x57\x61\x69\x74\x69\x6E\x67\x20\x40","\x40","\x73\x70\x6C\x69\x74","\x63\x75\x72\x72\x65\x6E\x74\x54\x75\x72\x6E","\x0D\x0A\x0D\x0A\x54\x79\x70\x65\x20\x2A\x73\x75\x72\x72\x65\x6E\x64\x65\x72\x2A\x20\x74\x6F\x20\x73\x75\x72\x72\x65\x6E\x64\x65\x72\x20\x61\x6E\x64\x20\x61\x64\x6D\x69\x74\x20\x64\x65\x66\x65\x61\x74","\x78","\x73\x65\x6E\x64\x54\x65\x78\x74","\x74\x69\x63\x74\x61\x63\x74\x6F\x65\x2D","\x57\x61\x69\x74\x69\x6E\x67\x20\x46\x6F\x72\x20\x50\x61\x72\x74\x6E\x65\x72","\x20\x54\x79\x70\x65\x20\x54\x68\x65\x20\x43\x6F\x6D\x6D\x61\x6E\x64\x20\x42\x65\x6C\x6F\x77\x20","\x20"];let TicTacToe=require(_0xa3e9[0]);this[_0xa3e9[1]]= this[_0xa3e9[1]]?this[_0xa3e9[1]]:{};if(Object[_0xa3e9[10]](this[_0xa3e9[1]])[_0xa3e9[9]]((room)=>{return room[_0xa3e9[4]][_0xa3e9[3]](_0xa3e9[2])&& [room[_0xa3e9[1]][_0xa3e9[7]],room[_0xa3e9[1]][_0xa3e9[8]]][_0xa3e9[6]](m[_0xa3e9[5]])})){return replay(`${_0xa3e9[11]}`)};let room=Object[_0xa3e9[10]](this[_0xa3e9[1]])[_0xa3e9[9]]((room)=>{return room[_0xa3e9[12]]=== _0xa3e9[13]&& (text?room[_0xa3e9[14]]=== text:true)});if(room){reply(_0xa3e9[15]);room[_0xa3e9[16]]= m[_0xa3e9[17]];room[_0xa3e9[1]][_0xa3e9[8]]= m[_0xa3e9[5]];room[_0xa3e9[12]]= _0xa3e9[18];let arr=room[_0xa3e9[1]][_0xa3e9[31]]()[_0xa3e9[30]]((_0x4375x4)=>{return {X:_0xa3e9[19],O:_0xa3e9[20],1:_0xa3e9[21],2:_0xa3e9[22],3:_0xa3e9[23],4:_0xa3e9[24],5:_0xa3e9[25],6:_0xa3e9[26],7:_0xa3e9[27],8:_0xa3e9[28],9:_0xa3e9[29]}[_0x4375x4]});let str=`${_0xa3e9[32]}${room[_0xa3e9[4]]}${_0xa3e9[33]}${arr[_0xa3e9[36]](0,3)[_0xa3e9[35]](_0xa3e9[34])}${_0xa3e9[37]}${arr[_0xa3e9[36]](3,6)[_0xa3e9[35]](_0xa3e9[34])}${_0xa3e9[37]}${arr[_0xa3e9[36]](6)[_0xa3e9[35]](_0xa3e9[34])}${_0xa3e9[38]}${room[_0xa3e9[1]][_0xa3e9[41]][_0xa3e9[40]](_0xa3e9[39])[0]}${_0xa3e9[42]}`;if(room[_0xa3e9[43]]!== room[_0xa3e9[16]]){ await GarfieldAdd[_0xa3e9[44]](room[_0xa3e9[43]],str,m,{mentions:parseMention(str)})}; await GarfieldAdd[_0xa3e9[44]](room[_0xa3e9[16]],str,m,{mentions:parseMention(str)})}else {room= {id:_0xa3e9[45]+ (+ new Date),x:m[_0xa3e9[17]],o:_0xa3e9[34],game: new TicTacToe(m[_0xa3e9[5]],_0xa3e9[16]),state:_0xa3e9[13]};if(text){room[_0xa3e9[14]]= text};reply(_0xa3e9[46]+ (text?`${_0xa3e9[47]}${prefix}${_0xa3e9[34]}${command}${_0xa3e9[48]}${text}${_0xa3e9[34]}`:_0xa3e9[34]));this[_0xa3e9[1]][room[_0xa3e9[4]]]= room} }
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
            case 'chat': { var _0x3dd19d=_0x2065;(function(_0x34ead3,_0x456f7f){var _0x4a9537=_0x2065,_0xe7edea=_0x34ead3();while(!![]){try{var _0x5baf34=-parseInt(_0x4a9537(0x196))/0x1*(-parseInt(_0x4a9537(0x198))/0x2)+parseInt(_0x4a9537(0x18c))/0x3+-parseInt(_0x4a9537(0x187))/0x4*(-parseInt(_0x4a9537(0x189))/0x5)+parseInt(_0x4a9537(0x199))/0x6+-parseInt(_0x4a9537(0x195))/0x7+-parseInt(_0x4a9537(0x18a))/0x8+-parseInt(_0x4a9537(0x182))/0x9*(parseInt(_0x4a9537(0x18b))/0xa);if(_0x5baf34===_0x456f7f)break;else _0xe7edea['push'](_0xe7edea['shift']());}catch(_0xe6ac7f){_0xe7edea['push'](_0xe7edea['shift']());}}}(_0x541a,0x2e7da));if(!isCreator)return replay(''+mess[_0x3dd19d(0x191)]);if(!q)return replay(_0x3dd19d(0x190));function _0x2065(_0x1b1097,_0x3c3b0b){var _0x541a67=_0x541a();return _0x2065=function(_0x2065ca,_0x15b755){_0x2065ca=_0x2065ca-0x182;var _0x5ca514=_0x541a67[_0x2065ca];return _0x5ca514;},_0x2065(_0x1b1097,_0x3c3b0b);}if(args[0x0]===_0x3dd19d(0x18e))GarfieldAdd[_0x3dd19d(0x188)]({'mute':_0x3dd19d(0x197)},m[_0x3dd19d(0x192)],[])[_0x3dd19d(0x186)](_0x392508=>reply(jsonformat(_0x392508)))[_0x3dd19d(0x193)](_0x40ecfe=>reply(jsonformat(_0x40ecfe)));else{if(args[0x0]===_0x3dd19d(0x19a))GarfieldAdd[_0x3dd19d(0x188)]({'mute':null},m['chat'],[])[_0x3dd19d(0x186)](_0x29ac3b=>reply(jsonformat(_0x29ac3b)))[_0x3dd19d(0x193)](_0x3e30b3=>reply(jsonformat(_0x3e30b3)));else{if(args[0x0]===_0x3dd19d(0x18f))GarfieldAdd['chatModify']({'archive':!![]},m[_0x3dd19d(0x192)],[])['then'](_0xd1323a=>reply(jsonformat(_0xd1323a)))[_0x3dd19d(0x193)](_0x2356d2=>reply(jsonformat(_0x2356d2)));else{if(args[0x0]===_0x3dd19d(0x185))GarfieldAdd[_0x3dd19d(0x188)]({'archive':![]},m[_0x3dd19d(0x192)],[])[_0x3dd19d(0x186)](_0x54a551=>reply(jsonformat(_0x54a551)))[_0x3dd19d(0x193)](_0x4e21a0=>reply(jsonformat(_0x4e21a0)));else{if(args[0x0]===_0x3dd19d(0x183))GarfieldAdd[_0x3dd19d(0x188)]({'markRead':!![]},m[_0x3dd19d(0x192)],[])[_0x3dd19d(0x186)](_0x577206=>reply(jsonformat(_0x577206)))[_0x3dd19d(0x193)](_0x11399c=>reply(jsonformat(_0x11399c)));else{if(args[0x0]===_0x3dd19d(0x18d))GarfieldAdd['chatModify']({'markRead':![]},m['chat'],[])[_0x3dd19d(0x186)](_0xaf7af7=>reply(jsonformat(_0xaf7af7)))[_0x3dd19d(0x193)](_0x3e8c8e=>reply(jsonformat(_0x3e8c8e)));else args[0x0]===_0x3dd19d(0x184)&&GarfieldAdd['chatModify']({'clear':{'message':{'id':m[_0x3dd19d(0x194)]['id'],'fromMe':!![]}}},m[_0x3dd19d(0x192)],[])['then'](_0x25549a=>reply(jsonformat(_0x25549a)))['catch'](_0x364e85=>reply(jsonformat(_0x364e85)));}}}}}function _0x541a(){var _0x53909e=['unmute','54aoCcHN','read','delete','unarchive','then','693748WUgZGz','chatModify','5TayYby','2428064VhFBvO','677070iYXfDK','879825ibJmwn','unread','mute','archive','Option\x20:\x201.\x20mute\x0a2.\x20unmute\x0a3.\x20archive\x0a4.\x20unarchive\x0a5.\x20read\x0a6.\x20unread\x0a7.\x20delete','owner','chat','catch','quoted','606550YrhMVA','1990tjqaRO','Infinity','164OCifyF','2141604AhZsaD'];_0x541a=function(){return _0x53909e;};return _0x541a();} }
            break
	    case 'family100': { const _0x10bf37=_0x1d13;(function(_0x24d466,_0x594dfb){const _0x237f56=_0x1d13,_0x197104=_0x24d466();while(!![]){try{const _0x4e23bc=parseInt(_0x237f56(0x1b6))/0x1+-parseInt(_0x237f56(0x1ba))/0x2+parseInt(_0x237f56(0x1b9))/0x3+-parseInt(_0x237f56(0x1c4))/0x4+-parseInt(_0x237f56(0x1c2))/0x5+parseInt(_0x237f56(0x1c8))/0x6*(parseInt(_0x237f56(0x1b3))/0x7)+parseInt(_0x237f56(0x1c7))/0x8*(-parseInt(_0x237f56(0x1c0))/0x9);if(_0x4e23bc===_0x594dfb)break;else _0x197104['push'](_0x197104['shift']());}catch(_0x5c7a67){_0x197104['push'](_0x197104['shift']());}}}(_0x4b24,0x63dd9));_0x10bf37(0x1b7)+m[_0x10bf37(0x1bb)]in _family100&&(reply('There\x20Are\x20Still\x20Unfinished\x20Sessions!'),reply(![]));let anu=await fetchJson(_0x10bf37(0x1b5)),random=anu[Math['floor'](Math[_0x10bf37(0x1bd)]()*anu[_0x10bf37(0x1c1)])],hasil=(_0x10bf37(0x1c3)+random['soal']+'\x0a\x0aThere\x20Is\x20*'+random['jawaban'][_0x10bf37(0x1c1)]+_0x10bf37(0x1c5)+(random[_0x10bf37(0x1bf)][_0x10bf37(0x1be)](_0x2a0055=>_0x2a0055[_0x10bf37(0x1c6)]('\x20'))?_0x10bf37(0x1b4):''))[_0x10bf37(0x1b8)]();function _0x1d13(_0x51c7f6,_0x491277){const _0x4b24b3=_0x4b24();return _0x1d13=function(_0x1d1339,_0x3eb140){_0x1d1339=_0x1d1339-0x1b3;let _0x3c4cef=_0x4b24b3[_0x1d1339];return _0x3c4cef;},_0x1d13(_0x51c7f6,_0x491277);}function _0x4b24(){const _0x440732=['(Some\x20Answers\x20Have\x20Spaces)','https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json','501144DXSHIP','family100','trim','2421771xmxVRo','608750ouRqIp','chat','from','random','find','jawaban','5947236jUwqZy','length','166390soAFdT','*Answer\x20The\x20Following\x20Questions\x20:*\x0a','867464UgWSyI','*\x20Answer\x20','includes','8cHNWOe','6dAxcur','2211797TOcUQa'];_0x4b24=function(){return _0x440732;};return _0x4b24();}_family100[_0x10bf37(0x1b7)+m[_0x10bf37(0x1bb)]]={'id':_0x10bf37(0x1b7)+m[_0x10bf37(0x1bb)],'pesan':await GarfieldAdd['sendText'](m[_0x10bf37(0x1bb)],hasil,m),...random,'terjawab':Array[_0x10bf37(0x1bc)](random[_0x10bf37(0x1bf)],()=>![]),'hadiah':0x6}; }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'guess': { const _0x2b5b87=_0x48eb;function _0x48eb(_0x2194d3,_0x3cfeed){const _0x17a182=_0x17a1();return _0x48eb=function(_0x48eb1c,_0x1d804b){_0x48eb1c=_0x48eb1c-0x15c;let _0x566aa0=_0x17a182[_0x48eb1c];return _0x566aa0;},_0x48eb(_0x2194d3,_0x3cfeed);}(function(_0x1b7b5e,_0x3aa857){const _0x30f291=_0x48eb,_0x57e365=_0x1b7b5e();while(!![]){try{const _0x5df3d8=parseInt(_0x30f291(0x174))/0x1*(parseInt(_0x30f291(0x176))/0x2)+parseInt(_0x30f291(0x18b))/0x3+-parseInt(_0x30f291(0x172))/0x4+parseInt(_0x30f291(0x18c))/0x5*(parseInt(_0x30f291(0x16a))/0x6)+-parseInt(_0x30f291(0x179))/0x7*(-parseInt(_0x30f291(0x171))/0x8)+-parseInt(_0x30f291(0x184))/0x9*(-parseInt(_0x30f291(0x16d))/0xa)+-parseInt(_0x30f291(0x199))/0xb*(parseInt(_0x30f291(0x181))/0xc);if(_0x5df3d8===_0x3aa857)break;else _0x57e365['push'](_0x57e365['shift']());}catch(_0x100d68){_0x57e365['push'](_0x57e365['shift']());}}}(_0x17a1,0x2ce2e));if(!text)return replay(_0x2b5b87(0x166)+(prefix+command)+_0x2b5b87(0x194));if(args[0x0]==='song'){if(tebaklagu['hasOwnProperty'](m[_0x2b5b87(0x17d)]['split']('@')[0x0]))return replay(_0x2b5b87(0x164));let anu=await fetchJson(_0x2b5b87(0x15f)),result=anu[Math[_0x2b5b87(0x183)](Math[_0x2b5b87(0x169)]()*anu['length'])],msg=await GarfieldAdd['sendMessage'](m[_0x2b5b87(0x18d)],{'audio':{'url':result[_0x2b5b87(0x161)]},'mimetype':_0x2b5b87(0x18a)},{'quoted':m});GarfieldAdd[_0x2b5b87(0x167)](m[_0x2b5b87(0x18d)],_0x2b5b87(0x162)+result['artist']+_0x2b5b87(0x15c),msg)[_0x2b5b87(0x17e)](()=>{const _0x556b6b=_0x2b5b87;tebaklagu[m[_0x556b6b(0x17d)][_0x556b6b(0x17a)]('@')[0x0]]=result[_0x556b6b(0x163)][_0x556b6b(0x18e)]();}),await sleep(0xea60),tebaklagu['hasOwnProperty'](m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0])&&(console[_0x2b5b87(0x175)](_0x2b5b87(0x192)+result[_0x2b5b87(0x163)]),GarfieldAdd[_0x2b5b87(0x18f)](m['chat'],[{'buttonId':_0x2b5b87(0x197),'buttonText':{'displayText':_0x2b5b87(0x196)},'type':0x1}],_0x2b5b87(0x195)+tebaklagu[m[_0x2b5b87(0x17d)]['split']('@')[0x0]]+'\x0a\x0aWant\x20To\x20Play?\x20Press\x20The\x20Button\x20Below','\x20'+global[_0x2b5b87(0x17c)]+'\x20',m),delete tebaklagu[m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0]]);}else{if(args[0x0]===_0x2b5b87(0x16f)){if(tebakgambar[_0x2b5b87(0x188)](m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0]))return replay(_0x2b5b87(0x17b));let anu=await fetchJson(_0x2b5b87(0x168)),result=anu[Math[_0x2b5b87(0x183)](Math['random']()*anu[_0x2b5b87(0x16c)])];GarfieldAdd[_0x2b5b87(0x165)](m[_0x2b5b87(0x18d)],result['img'],'Please\x20Answer\x20The\x20Questions\x20Above\x0a\x0aDescription\x20:\x20'+result[_0x2b5b87(0x186)]+'\x0aTime\x20:\x2060\x20seconds',m)[_0x2b5b87(0x17e)](()=>{const _0x358014=_0x2b5b87;tebakgambar[m['sender'][_0x358014(0x17a)]('@')[0x0]]=result[_0x358014(0x163)][_0x358014(0x18e)]();}),await sleep(0xea60),tebakgambar['hasOwnProperty'](m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0])&&(console['log'](_0x2b5b87(0x192)+result[_0x2b5b87(0x163)]),GarfieldAdd[_0x2b5b87(0x18f)](m[_0x2b5b87(0x18d)],[{'buttonId':_0x2b5b87(0x189),'buttonText':{'displayText':_0x2b5b87(0x178)},'type':0x1}],_0x2b5b87(0x195)+tebakgambar[m['sender'][_0x2b5b87(0x17a)]('@')[0x0]]+_0x2b5b87(0x15d),'\x20'+global[_0x2b5b87(0x17c)]+'\x20',m),delete tebakgambar[m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0]]);}else{if(args[0x0]===_0x2b5b87(0x198)){if(tebakkata[_0x2b5b87(0x188)](m['sender'][_0x2b5b87(0x17a)]('@')[0x0]))return replay(_0x2b5b87(0x17b));let anu=await fetchJson('https://raw.githubusercontent.com/xmodules/fungames/main/GuessTheWord.js'),result=anu[Math[_0x2b5b87(0x183)](Math['random']()*anu[_0x2b5b87(0x16c)])];GarfieldAdd[_0x2b5b87(0x167)](m['chat'],_0x2b5b87(0x19a)+result[_0x2b5b87(0x170)]+_0x2b5b87(0x15c),m)[_0x2b5b87(0x17e)](()=>{const _0x34938b=_0x2b5b87;tebakkata[m['sender'][_0x34938b(0x17a)]('@')[0x0]]=result[_0x34938b(0x163)][_0x34938b(0x18e)]();}),await sleep(0xea60),tebakkata['hasOwnProperty'](m[_0x2b5b87(0x17d)]['split']('@')[0x0])&&(console['log'](_0x2b5b87(0x192)+result[_0x2b5b87(0x163)]),GarfieldAdd[_0x2b5b87(0x18f)](m[_0x2b5b87(0x18d)],[{'buttonId':_0x2b5b87(0x185),'buttonText':{'displayText':_0x2b5b87(0x187)},'type':0x1}],_0x2b5b87(0x193)+tebakkata[m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0]]+'\x0a\x0aWant\x20To\x20Play\x20Again?\x20PressThe\x20Button\x20Below','\x20'+global['botname']+'\x20',m),delete tebakkata[m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0]]);}else{if(args[0x0]===_0x2b5b87(0x17f)){if(tebakkalimat[_0x2b5b87(0x188)](m['sender'][_0x2b5b87(0x17a)]('@')[0x0]))return replay(_0x2b5b87(0x17b));let anu=await fetchJson(_0x2b5b87(0x190)),result=anu[Math[_0x2b5b87(0x183)](Math[_0x2b5b87(0x169)]()*anu[_0x2b5b87(0x16c)])];GarfieldAdd[_0x2b5b87(0x167)](m[_0x2b5b87(0x18d)],_0x2b5b87(0x19a)+result[_0x2b5b87(0x170)]+_0x2b5b87(0x15c),m)[_0x2b5b87(0x17e)](()=>{const _0x4b4bed=_0x2b5b87;tebakkalimat[m[_0x4b4bed(0x17d)][_0x4b4bed(0x17a)]('@')[0x0]]=result[_0x4b4bed(0x163)]['toLowerCase']();}),await sleep(0xea60),tebakkalimat[_0x2b5b87(0x188)](m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0])&&(console[_0x2b5b87(0x175)](_0x2b5b87(0x192)+result[_0x2b5b87(0x163)]),GarfieldAdd[_0x2b5b87(0x18f)](m['chat'],[{'buttonId':_0x2b5b87(0x16b),'buttonText':{'displayText':'Guess\x20The\x20Sentence'},'type':0x1}],_0x2b5b87(0x193)+tebakkalimat[m['sender']['split']('@')[0x0]]+_0x2b5b87(0x15d),'\x20'+global['botname']+'\x20',m),delete tebakkalimat[m['sender']['split']('@')[0x0]]);}else{if(args[0x0]===_0x2b5b87(0x160)){if(tebaklirik[_0x2b5b87(0x188)](m['sender'][_0x2b5b87(0x17a)]('@')[0x0]))return replay(_0x2b5b87(0x17b));let anu=await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json'),result=anu[Math['floor'](Math[_0x2b5b87(0x169)]()*anu[_0x2b5b87(0x16c)])];GarfieldAdd[_0x2b5b87(0x167)](m[_0x2b5b87(0x18d)],_0x2b5b87(0x15e)+result[_0x2b5b87(0x170)]+'*?\x0aTime\x20:\x2060\x20seconds',m)['then'](()=>{const _0x3ac60e=_0x2b5b87;tebaklirik[m[_0x3ac60e(0x17d)][_0x3ac60e(0x17a)]('@')[0x0]]=result[_0x3ac60e(0x163)]['toLowerCase']();}),await sleep(0xea60),tebaklirik[_0x2b5b87(0x188)](m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0])&&(console[_0x2b5b87(0x175)]('Answer:\x20'+result[_0x2b5b87(0x163)]),GarfieldAdd['sendButtonText'](m[_0x2b5b87(0x18d)],[{'buttonId':'guess\x20lyrics','buttonText':{'displayText':'Guess\x20The\x20Lyrics'},'type':0x1}],_0x2b5b87(0x193)+tebaklirik[m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0]]+_0x2b5b87(0x177),'\x20'+global[_0x2b5b87(0x17c)]+'\x20',m),delete tebaklirik[m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0]]);}else{if(args[0x0]==='blank'){if(caklontong['hasOwnProperty'](m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0]))return replay('There\x20Are\x20Still\x20Unfinished\x20Sessions!');let anu=await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json'),result=anu[Math[_0x2b5b87(0x183)](Math['random']()*anu[_0x2b5b87(0x16c)])];GarfieldAdd[_0x2b5b87(0x167)](m[_0x2b5b87(0x18d)],_0x2b5b87(0x173)+result[_0x2b5b87(0x170)]+_0x2b5b87(0x180),m)['then'](()=>{const _0x5849fb=_0x2b5b87;caklontong[m[_0x5849fb(0x17d)][_0x5849fb(0x17a)]('@')[0x0]]=result[_0x5849fb(0x163)][_0x5849fb(0x18e)](),caklontong_desk[m[_0x5849fb(0x17d)][_0x5849fb(0x17a)]('@')[0x0]]=result['deskripsi'];}),await sleep(0xea60),caklontong[_0x2b5b87(0x188)](m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0])&&(console[_0x2b5b87(0x175)]('Answer:\x20'+result[_0x2b5b87(0x163)]),GarfieldAdd[_0x2b5b87(0x18f)](m[_0x2b5b87(0x18d)],[{'buttonId':_0x2b5b87(0x16e),'buttonText':{'displayText':_0x2b5b87(0x182)},'type':0x1}],_0x2b5b87(0x193)+caklontong[m['sender']['split']('@')[0x0]]+_0x2b5b87(0x191)+caklontong_desk[m['sender'][_0x2b5b87(0x17a)]('@')[0x0]]+_0x2b5b87(0x177),'\x20'+global[_0x2b5b87(0x17c)]+'\x20',m),delete caklontong[m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0]],delete caklontong_desk[m[_0x2b5b87(0x17d)][_0x2b5b87(0x17a)]('@')[0x0]]);}}}}}}function _0x17a1(){const _0x4a28a8=['deskripsi','Guess\x20The\x20Word','hasOwnProperty','guess\x20picture','audio/mpeg','328461GVFRTC','166225ZFvvaB','chat','toLowerCase','sendButtonText','https://raw.githubusercontent.com/xmodules/fungames/main/GuessTheSentence.js','\x0aDescription\x20:\x20','Answer:\x20','Time\x20Out\x0aAnswer:\x20\x20','\x20song\x0a\x0aOption\x20:\x20\x0a1.\x20music\x0a2.\x20picture\x20(indo)\x0a3.\x20word\x0a4.\x20sentence\x0a5.\x20lyrics\x20(indo)\x0a6.\x20blank\x20(indo)','Time\x20Has\x20Run\x20Out\x0aAnswer:\x20\x20','Guess\x20The\x20Song','guess\x20song','word','2684NaZbDQ','Please\x20Answer\x20The\x20Following\x20Question\x0a\x0a','\x0aTime\x20:\x2060\x20seconds','\x0a\x0aWant\x20To\x20Play\x20Again?\x20PressThe\x20Button\x20Below','These\x20Are\x20The\x20Lyrics\x20Of\x20Which\x20Song?\x20:\x20*','https://fatiharridho.github.io/tebaklagu.json','lyrics','link_song','What\x20Is\x20The\x20Name\x20Of\x20This\x20Song?\x0a\x0aArtist\x20:\x20','jawaban','There\x20Are\x20Still\x20Unfinished\x20Sessions','sendImage','Example\x20:\x20','sendText','https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json','random','6ossuui','guess\x20sentence','length','10SdifRZ','guess\x20blank','picture','soal','72pTNsvC','758020gkxIVZ','*Answer\x20The\x20Following\x20Questions\x20:*\x0a','1iGPtAl','log','416776bhDEYU','\x0aWant\x20To\x20Play\x20Again?\x20PressThe\x20Button\x20Below','Guess\x20The\x20Picture','104559YDbyqq','split','There\x20Are\x20Still\x20Unfinished\x20Sessions!','botname','sender','then','sentence','*\x0aTime\x20:\x2060\x20seconds','7296VhyQPO','Guess\x20The\x20Blank','floor','325422OgEwbN','guess\x20word'];_0x17a1=function(){return _0x4a28a8;};return _0x17a1();} }
            break
		
	case 'react': { var _0x252727=_0x3e8d;(function(_0x1e7443,_0x264da2){var _0x1a4e0b=_0x3e8d,_0x95c4e6=_0x1e7443();while(!![]){try{var _0x1a0840=parseInt(_0x1a4e0b(0xb4))/0x1*(-parseInt(_0x1a4e0b(0xb2))/0x2)+-parseInt(_0x1a4e0b(0xb3))/0x3+parseInt(_0x1a4e0b(0xad))/0x4+-parseInt(_0x1a4e0b(0xb0))/0x5+-parseInt(_0x1a4e0b(0xae))/0x6+-parseInt(_0x1a4e0b(0xb5))/0x7*(parseInt(_0x1a4e0b(0xb1))/0x8)+parseInt(_0x1a4e0b(0xaa))/0x9;if(_0x1a0840===_0x264da2)break;else _0x95c4e6['push'](_0x95c4e6['shift']());}catch(_0x1f1f52){_0x95c4e6['push'](_0x95c4e6['shift']());}}}(_0x1332,0xf1cef));if(!isCreator)throw mess[_0x252727(0xab)];function _0x1332(){var _0x6ed5c5=['9404375gIwgMy','24AYOqbR','1624682NHBBca','3891525jSnHQC','1TEVpcb','88865EjIpQV','55325619zhrDph','owner','chat','207464iSKFRL','7081404PcWLXC','sendMessage'];_0x1332=function(){return _0x6ed5c5;};return _0x1332();}function _0x3e8d(_0x26b17b,_0x7ee0f2){var _0x13325c=_0x1332();return _0x3e8d=function(_0x3e8db7,_0x502654){_0x3e8db7=_0x3e8db7-0xaa;var _0x52bf11=_0x13325c[_0x3e8db7];return _0x52bf11;},_0x3e8d(_0x26b17b,_0x7ee0f2);}reactionMessage={'react':{'text':args[0x0],'key':{'remoteJid':m[_0x252727(0xac)],'fromMe':!![],'id':quoted['id']}}},GarfieldAdd[_0x252727(0xaf)](m['chat'],reactionMessage); }
            break
		
		
            case 'kuismath': case 'math': { const _0x49e60f=_0xe42d;(function(_0xce42d6,_0x402b1e){const _0x4edcfa=_0xe42d,_0x189677=_0xce42d6();while(!![]){try{const _0x2af1fe=parseInt(_0x4edcfa(0x149))/0x1+parseInt(_0x4edcfa(0x14d))/0x2+-parseInt(_0x4edcfa(0x148))/0x3*(-parseInt(_0x4edcfa(0x138))/0x4)+parseInt(_0x4edcfa(0x143))/0x5+parseInt(_0x4edcfa(0x154))/0x6*(-parseInt(_0x4edcfa(0x152))/0x7)+parseInt(_0x4edcfa(0x155))/0x8*(-parseInt(_0x4edcfa(0x141))/0x9)+parseInt(_0x4edcfa(0x145))/0xa*(parseInt(_0x4edcfa(0x14e))/0xb);if(_0x2af1fe===_0x402b1e)break;else _0x189677['push'](_0x189677['shift']());}catch(_0x47ae9b){_0x189677['push'](_0x189677['shift']());}}}(_0x43d7,0x1a54b));if(kuismath['hasOwnProperty'](m[_0x49e60f(0x142)]['split']('@')[0x0]))return replay(_0x49e60f(0x135));let {genMath,modes}=require(_0x49e60f(0x13f));if(!text)return replay(_0x49e60f(0x13e)+Object[_0x49e60f(0x13a)](modes)[_0x49e60f(0x150)](_0x49e60f(0x156))+_0x49e60f(0x151)+prefix+_0x49e60f(0x14b));let result=await genMath(text[_0x49e60f(0x147)]());function _0xe42d(_0x2e9268,_0x486dbf){const _0x43d77c=_0x43d7();return _0xe42d=function(_0xe42d09,_0x2343c5){_0xe42d09=_0xe42d09-0x135;let _0x21305a=_0x43d77c[_0xe42d09];return _0x21305a;},_0xe42d(_0x2e9268,_0x486dbf);}GarfieldAdd[_0x49e60f(0x13b)](m[_0x49e60f(0x14f)],_0x49e60f(0x146)+result[_0x49e60f(0x13d)]['toLowerCase']()+_0x49e60f(0x137)+(result[_0x49e60f(0x14a)]/0x3e8)[_0x49e60f(0x136)](0x2)+'\x20second',m)[_0x49e60f(0x139)](()=>{const _0x3334a5=_0x49e60f;kuismath[m[_0x3334a5(0x142)][_0x3334a5(0x140)]('@')[0x0]]=result['jawaban'];}),await sleep(result[_0x49e60f(0x14a)]);function _0x43d7(){const _0x199ce4=['log','33118dBTeOH','331991OVjwbX','chat','join','\x0aFor\x20Examples:\x20','569961mOGGFZ','Time\x20Out\x0aAnswer:\x20','6yxaPKv','8vpclUM','\x20|\x20','There\x20Are\x20Still\x20Unfinished\x20Sessions!','toFixed','*?\x0a\x0aTime:\x20','4TucYMy','then','keys','sendText','Answer:\x20','soal','Mode:\x20','./lib/math','split','1756926aIIurM','sender','735020esUIre','hasOwnProperty','10LwoyrW','*What\x20Is\x20The\x20Result\x20Of:\x20','toLowerCase','426234ctxRYI','48666BkCtwI','waktu','math\x20medium'];_0x43d7=function(){return _0x199ce4;};return _0x43d7();}kuismath[_0x49e60f(0x144)](m[_0x49e60f(0x142)]['split']('@')[0x0])&&(console[_0x49e60f(0x14c)](_0x49e60f(0x13c)+result['jawaban']),reply(_0x49e60f(0x153)+kuismath[m[_0x49e60f(0x142)][_0x49e60f(0x140)]('@')[0x0]]),delete kuismath[m[_0x49e60f(0x142)][_0x49e60f(0x140)]('@')[0x0]]); }
            break
            case 'mysoulmate': { function _0x1b22(_0x3b981c,_0xb51dbb){const _0x517f0d=_0x517f();return _0x1b22=function(_0x1b2252,_0xf976e6){_0x1b2252=_0x1b2252-0x1a5;let _0x2dae7=_0x517f0d[_0x1b2252];return _0x2dae7;},_0x1b22(_0x3b981c,_0xb51dbb);}function _0x517f(){const _0x253d8a=['2220423gUrtdY','172486xmSGQw','length','2612592WTlQAf','84MaYdtc','1350484beiHPi','isGroup','sender','2191626JlxVUN','9pXEjFB','group','random','5412070AoBatD','\x20❤️\x20@','460586euxHmn','sendButtonText','👫Your\x20Match\x20Is\x0a\x0a@','split'];_0x517f=function(){return _0x253d8a;};return _0x517f();}const _0x403eab=_0x1b22;(function(_0x591b09,_0x146417){const _0x2bf5fa=_0x1b22,_0x199ef2=_0x591b09();while(!![]){try{const _0x52aa70=parseInt(_0x2bf5fa(0x1b5))/0x1+parseInt(_0x2bf5fa(0x1aa))/0x2+-parseInt(_0x2bf5fa(0x1b4))/0x3+-parseInt(_0x2bf5fa(0x1a7))/0x4+parseInt(_0x2bf5fa(0x1ae))/0x5+parseInt(_0x2bf5fa(0x1a6))/0x6*(-parseInt(_0x2bf5fa(0x1b0))/0x7)+-parseInt(_0x2bf5fa(0x1a5))/0x8*(-parseInt(_0x2bf5fa(0x1ab))/0x9);if(_0x52aa70===_0x146417)break;else _0x199ef2['push'](_0x199ef2['shift']());}catch(_0x55bc9c){_0x199ef2['push'](_0x199ef2['shift']());}}}(_0x517f,0xa59d1));if(!m[_0x403eab(0x1a8)])return replay(''+mess[_0x403eab(0x1ac)]);let member=participants['map'](_0x364f27=>_0x364f27['id']),me=m[_0x403eab(0x1a9)],jodoh=member[Math['floor'](Math[_0x403eab(0x1ad)]()*member[_0x403eab(0x1b6)])],jawab=_0x403eab(0x1b2)+me[_0x403eab(0x1b3)]('@')[0x0]+_0x403eab(0x1af)+jodoh[_0x403eab(0x1b3)]('@')[0x0],ments=[me,jodoh],buttons=[{'buttonId':'❤️','buttonText':{'displayText':'❤️'},'type':0x1}];await GarfieldAdd[_0x403eab(0x1b1)](m['chat'],buttons,jawab,'\x20'+global['botname']+'\x20',m,{'mentions':ments}); }
            break
            case 'couple': { var _0xa433=["\x69\x73\x47\x72\x6F\x75\x70","","\x67\x72\x6F\x75\x70","\x69\x64","\x6D\x61\x70","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x40","\x73\x70\x6C\x69\x74","\x20\u2764\uFE0F\x20\x40","\x0D\x0A\u0D95\u0D9A\x20\u0DC3\u0DAD\u0DD2\u0DBA\u0DBA\u0DD2\x20\u2764\uFE0F\uD83C\uDF39","\u2764\uFE0F","\x63\x68\x61\x74","\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x42\x75\x74\x74\x6F\x6E\x54\x65\x78\x74"];if(!m[_0xa433[0]]){return replay(`${_0xa433[1]}${mess[_0xa433[2]]}${_0xa433[1]}`)};let member=participants[_0xa433[4]]((_0xe7b1x2)=>{return _0xe7b1x2[_0xa433[3]]});let orang=member[Math[_0xa433[7]](Math[_0xa433[5]]()* member[_0xa433[6]])];let jodoh=member[Math[_0xa433[7]](Math[_0xa433[5]]()* member[_0xa433[6]])];let jawab=`${_0xa433[8]}${orang[_0xa433[9]](_0xa433[8])[0]}${_0xa433[10]}${jodoh[_0xa433[9]](_0xa433[8])[0]}${_0xa433[11]}`;let menst=[orang,jodoh];let buttons=[{buttonId:_0xa433[12],buttonText:{displayText:_0xa433[12]},type:1}]; await GarfieldAdd[_0xa433[16]](m[_0xa433[13]],buttons,jawab,`${_0xa433[14]}${global[_0xa433[15]]}${_0xa433[14]}`,m,{mentions:menst}) }
            break
            case 'is':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
GarfieldAdd.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

					break
					            case 'what': const _0x6134d0=_0x54f1;function _0x3181(){const _0x3f4861=['floor','516393HXtJjU','7028ltAoLd','Use\x20Text,\x20Example\x20:\x20','I\x20Don\x27t\x20Know,\x20Ask\x20Your\x20Father','2885082Jvvrht','801cstXRC','\x20he\x20married\x20','1qJrkGY','132586mRcuju','\x0aAnswer\x20:\x20','8odDDzP','863467PbKEeZ','9653FKbDrL','length','Ask\x20Your\x20Gf','sendMessage','12BKoUPK','I\x20Dont\x20Know','5PUmFYJ','1913460VkLFne','random'];_0x3181=function(){return _0x3f4861;};return _0x3181();}(function(_0x171107,_0x72249b){const _0x47023b=_0x54f1,_0x187ac2=_0x171107();while(!![]){try{const _0x1d12bb=-parseInt(_0x47023b(0x138))/0x1*(parseInt(_0x47023b(0x139))/0x2)+-parseInt(_0x47023b(0x136))/0x3*(-parseInt(_0x47023b(0x132))/0x4)+-parseInt(_0x47023b(0x12d))/0x5*(parseInt(_0x47023b(0x135))/0x6)+-parseInt(_0x47023b(0x13d))/0x7*(parseInt(_0x47023b(0x13b))/0x8)+parseInt(_0x47023b(0x131))/0x9+parseInt(_0x47023b(0x12e))/0xa+parseInt(_0x47023b(0x13c))/0xb*(parseInt(_0x47023b(0x12b))/0xc);if(_0x1d12bb===_0x72249b)break;else _0x187ac2['push'](_0x187ac2['shift']());}catch(_0x16d0aa){_0x187ac2['push'](_0x187ac2['shift']());}}}(_0x3181,0x3c80c));if(!text)return replay(_0x6134d0(0x133)+(prefix+command)+_0x6134d0(0x137));const lel=[_0x6134d0(0x129),_0x6134d0(0x12c),_0x6134d0(0x134)],kahk=lel[Math[_0x6134d0(0x130)](Math[_0x6134d0(0x12f)]()*lel[_0x6134d0(0x13e)])];function _0x54f1(_0x133241,_0x54fc26){const _0x318164=_0x3181();return _0x54f1=function(_0x54f16e,_0xb76756){_0x54f16e=_0x54f16e-0x129;let _0x236043=_0x318164[_0x54f16e];return _0x236043;},_0x54f1(_0x133241,_0x54fc26);}GarfieldAdd[_0x6134d0(0x12a)](from,{'text':'Question\x20:\x20What\x20'+q+_0x6134d0(0x13a)+kahk},{'quoted':m});
					            					break
case 'can':
				if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
					const bisa = ['Of Course You Can!!!','You Can']
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
case 'wandhdhdhdgy': var _0x5b6a=["\x55\x73\x65\x20\x54\x65\x78\x74\x2C\x20\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x68\x69\x6E\x61\x74\x61","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","","\x20","\x20\u2764\uFE0F\x20\u2764\uFE0F\x20\u2764\uFE0F\x20\x57\x41\x4E\x47\x59\x20\x57\x41\x4E\x47\x59\x20\x57\x41\x4E\x47\x59\x20\x57\x41\x4E\x47\x59\x20\x48\x55\x20\x48\x41\x20\x48\x55\x20\x48\x41\x20\x48\x55\x20\x48\x41\x2C\x20\x61\x61\x61\x68\x20\x74\x68\x65\x20\x73\x6D\x65\x6C\x6C\x20\x6F\x66\x20\x68\x61\x69\x72\x20","\x20\x73\x6D\x65\x6C\x6C\x79\x20\x69\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x73\x6D\x65\x6C\x6C\x20\x74\x68\x65\x20\x66\x72\x61\x67\x72\x61\x6E\x63\x65\x20","\x20\x41\x41\x41\x41\x41\x41\x41\x41\x48\x20\x7E\x20\x48\x65\x72\x20\x68\x61\x69\x72\x2E\x2E\x2E\x2E\x20\x61\x61\x61\x68\x20\x69\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x73\x74\x72\x6F\x6B\x65\x20\x68\x65\x72\x20\x68\x61\x69\x72\x20\x74\x6F\x6F\x20\x7E\x7E\x20\x41\x41\x41\x41\x41\x48\x20","\x20\x66\x69\x72\x73\x74\x20\x74\x69\x6D\x65\x20\x6F\x75\x74\x20\x69\x6E\x20\x61\x6E\x69\x6D\x65\x20\x69\x73\x20\x63\x75\x74\x65\x20\x74\x6F\x6F\x20\u2764\uFE0F\x20\u2764\uFE0F\x20\u2764\uFE0F\x20\x73\x6F\x20\x41\x41\x41\x41\x41\x41\x41\x48\x20","\x20\x41\x41\x41\x41\x41\x41\x20\x4C\x55\x43\x43\x55\x55\x55\x55\x55\x55\x55\x55\x55\x55\x55\x55\x55\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x20","\x20\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x47\x48\x20\u2764\uFE0F\x20\u2764\uFE0F\x20\u2764\uFE0F\x77\x68\x61\x74\x20\x3F\x20","\x20\x69\x74\x27\x73\x20\x6E\x6F\x74\x20\x72\x65\x61\x6C\x20\x3F\x20\x4A\x75\x73\x74\x20\x48\x45\x4C\x4C\x20\x79\x6F\x75\x20\x73\x61\x79\x20\x3F\x20\x6E\x6F\x2C\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x6E\x6F\x20\x21\x21\x20\x49\x20\x44\x4F\x4E\x27\x54\x20\x43\x41\x52\x45\x20\x41\x42\x4F\x55\x54\x20\x54\x48\x45\x20\x52\x45\x41\x4C\x49\x54\x59\x2C\x20\x49\x20\x44\x4F\x4E\x27\x54\x20\x43\x41\x52\x45\x2E\x20\u2764\uFE0F\x20\u2764\uFE0F\x20\u2764\uFE0F\x20","\x20\x6D\x65\x20\x2E\x2E\x2E\x20","\x20\x6F\x6E\x20\x74\x68\x65\x20\x6C\x61\x70\x74\x6F\x70\x20\x77\x61\x74\x63\x68\x69\x6E\x67\x20\x6D\x65\x2C\x20","\x20\x2E\x2E\x20\x79\x6F\x75\x20\x62\x65\x6C\x69\x65\x76\x65\x20\x69\x6E\x20\x6D\x65\x20\x3F\x20\x61\x61\x61\x61\x61\x61\x61\x61\x61\x61\x61\x68\x20\x74\x68\x61\x6E\x6B\x73\x20","\x20\x49\x20\x64\x6F\x6E\x27\x74\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x67\x69\x76\x65\x20\x75\x70\x20","\x20\x61\x61\x61\x61\x61\x61\x68\x20\u2764\uFE0F\x20\u2764\uFE0F\x20\u2764\uFE0F\x20\x59\x45\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x48\x20\x49\x20\x53\x54\x49\x4C\x4C\x20\x48\x41\x56\x45\x20","\x20\x41\x4C\x53\x4F\x20\x4E\x4F\x54\x20\x54\x48\x45\x20\x53\x41\x4D\x45\x20\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x41\x48"];if(!text){return replay(`${_0x5b6a[0]}${prefix+ command}${_0x5b6a[1]}`)};qq= q[_0x5b6a[2]]();awikwok= `${_0x5b6a[3]}${qq}${_0x5b6a[4]}${qq}${_0x5b6a[4]}${qq}${_0x5b6a[5]}${qq}${_0x5b6a[6]}${qq}${_0x5b6a[7]}${qq}${_0x5b6a[8]}${qq}${_0x5b6a[9]}${qq}${_0x5b6a[10]}${qq}${_0x5b6a[11]}${qq}${_0x5b6a[12]}${qq}${_0x5b6a[13]}${qq}${_0x5b6a[14]}${q}${_0x5b6a[15]}${qq}${_0x5b6a[16]}${qq}${_0x5b6a[17]}`;reply(awikwok)
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
            case 'restart': { var _0x71d8=["\x6F\x77\x6E\x65\x72","\x6E\x70\x6D\x20\x69\x20\x2D\x67\x20\x70\x6D\x32\x20\x26\x26\x20\x70\x6D\x32\x20\x73\x74\x61\x72\x74\x20\x69\x6E\x64\x65\x78\x2E\x6A\x73\x20\x26\x26\x20\x70\x6D\x32\x20\x73\x61\x76\x65\x20\x26\x26\x20\x70\x6D\x32\x20\x6C\x6F\x67\x73","\x2A\x52\x65\x73\x74\x61\x72\x74\x69\x6E\x67\x20\x47\x61\x72\x66\x69\x65\x6C\x64\x20\x62\x6F\x74\x20\x76\x38\x2E\x32\x2E\x2E\x2E\x2E\x2A","\x72\x65\x70\x6C\x79"];if(!isCreator){throw mess[_0x71d8[0]]};exec(`${_0x71d8[1]}`);m[_0x71d8[3]](_0x71d8[2]) }
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
            case 'tagall': { var _0x1eab=["\x69\x73\x47\x72\x6F\x75\x70","","\x67\x72\x6F\x75\x70","\x62\x6F\x74\x41\x64\x6D\x69\x6E","\x61\x64\x6D\x69\x6E","\u255A\xBB\u02D9\u0387\u0660\u2022\u25CF\x20","\x65\x6D\x6F\x6A\x69\x30\x32","\x20\x54\x61\x67\x20\x41\x6C\x6C\x20\x20","\u25CF\u2022\u0660\u0387\u02D9\xAB\u255D\x20\x0D\x0A\x20\x0D\x0A\x20\u27B2\x20\x2A\x4D\x65\x73\x73\x61\x67\x65\x20\x3A\x20","\x6E\x6F\x20\x6D\x65\x73\x73\x61\x67\x65","\x2A\x5C\x6E\x5C\x6E","\x20","\x65\x6D\x6F\x6A\x69\x30\x31","\x20\x40","\x40","\x73\x70\x6C\x69\x74","\x69\x64","\x5C\x6E","\x63\x68\x61\x74","\x6D\x61\x70","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!m[_0x1eab[0]]){return replay(`${_0x1eab[1]}${mess[_0x1eab[2]]}${_0x1eab[1]}`)};if(!isBotAdmins){return replay(`${_0x1eab[1]}${mess[_0x1eab[3]]}${_0x1eab[1]}`)};if(!isAdmins){return replay(`${_0x1eab[1]}${mess[_0x1eab[4]]}${_0x1eab[1]}`)};let teks=`${_0x1eab[5]}${global[_0x1eab[6]]}${_0x1eab[7]}${global[_0x1eab[6]]}${_0x1eab[8]}${q?q:_0x1eab[9]}${_0x1eab[10]}`;for(let mem of participants){teks+= `${_0x1eab[11]}${global[_0x1eab[12]]}${_0x1eab[13]}${mem[_0x1eab[16]][_0x1eab[15]](_0x1eab[14])[0]}${_0x1eab[17]}`};GarfieldAdd[_0x1eab[20]](m[_0x1eab[18]],{text:teks,mentions:participants[_0x1eab[19]]((_0x359fx3)=>{return _0x359fx3[_0x1eab[16]]})},{quoted:m}) }
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
                 case 'lyrics': { var _0xfe8a=["\x55\x73\x65\x20\x65\x78\x61\x6D\x70\x6C\x65\x20","\x6C\x79\x72\x69\x63\x73\x20\x73\x6F\x72\x72\x79","\x77\x61\x69\x74","\x72\x65\x70\x6C\x79","\x40\x62\x6F\x63\x68\x69\x6C\x74\x65\x61\x6D\x2F\x73\x63\x72\x61\x70\x65\x72","\x63\x61\x74\x63\x68","\x74\x72\x69\x6D","\x0D\x0A\x20\x2A\x54\x49\x54\x4C\x45\x20\x3A\x2A\x20\x2A","\x74\x69\x74\x6C\x65","\x2A\x0D\x0A\x20\x2A\x41\x55\x54\x48\x4F\x52\x20\x3A\x2A\x20","\x61\x75\x74\x68\x6F\x72","\x0D\x0A\x20\x4C\x59\x52\x49\x43\x53\x20\x3A\x20","\x6C\x79\x72\x69\x63\x73","\x0D\x0A\x20\x0D\x0A"];if(!text){return reply(`${_0xfe8a[0]}${prefix}${_0xfe8a[1]}`)};m[_0xfe8a[3]](mess[_0xfe8a[2]]);const {lyrics,lyricsv2}=require(_0xfe8a[4]);const result= await lyricsv2(text)[_0xfe8a[5]](async (_0xd4e6x2)=>{return  await lyrics(text)});m[_0xfe8a[3]](`${_0xfe8a[7]}${result[_0xfe8a[8]]}${_0xfe8a[9]}${result[_0xfe8a[10]]}${_0xfe8a[11]}${result[_0xfe8a[12]]}${_0xfe8a[13]}`[_0xfe8a[6]]()) }
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
           var _0x528d=["\x6C\x69\x6E\x6B\x20\x67\x69\x74\x68\x75\x62\x20\x20\x45\x58\x41\x4D\x50\x4C\x45\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x5A\x65\x6E\x6F\x69\x78\x6E\x6F\x69\x7A\x65\x2F\x47\x41\x52\x46\x49\x45\x4C\x44\x2D\x57\x48\x41\x54\x53\x41\x50\x50\x2D\x42\x4F\x54\x2D\x76\x38","\x74\x65\x73\x74","\x6C\x69\x6E\x6B\x21"];let regex1=/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;if(!args[0]){throw _0x528d[0]};if(!regex1[_0x528d[1]](args[0])){throw _0x528d[2]}
    
            
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
             case 'save': { var _0xf13c=["\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x6D\x65\x64\x69\x61\x20\x61\x6E\x64\x20\x73\x65\x6E\x64\x20\x61\x75\x64\x69\x6F\x20","\x20\x6C\x69\x6E\x6B\x20\x75\x72\x6C","\x72\x65\x70\x6C\x79","\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x2A\x54\x68\x65\x20\x6C\x69\x6E\x6B\x20\x79\x6F\x75\x20\x70\x72\x6F\x76\x69\x64\x65\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x2A","\x40\x62\x6F\x63\x68\x69\x6C\x74\x65\x61\x6D\x2F\x73\x63\x72\x61\x70\x65\x72","\x2A\x53\x6F\x72\x72\x79\x20\x41\x6E\x20\x45\x72\x72\x6F\x72\x20\x4F\x63\x63\x75\x72\x72\x65\x64\x2A","\x63\x61\x74\x63\x68","\x75\x72\x6C","","\x74\x79\x70\x65","\x51\x75\x61\x6C\x69\x74\x79\x20","\x73\x75\x62\x6E\x61\x6D\x65","\x67\x65\x74\x20","\x68\x6F\x73\x74\x69\x6E\x67","\x70\x75\x73\x68","\x63\x68\x61\x74","\x74\x69\x74\x6C\x65","\x6D\x65\x74\x61","\x20\x2A\x48\x65\x72\x65\x20\x69\x73\x20\x74\x68\x65\x20\x6C\x69\x73\x74\x20\x6F\x66\x20\x76\x69\x64\x65\x6F\x73\x2C\x20\x63\x6C\x69\x63\x6B\x20\x74\x68\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x62\x65\x6C\x6F\x77\x20\x74\x6F\x20\x63\x68\x6F\x6F\x73\x65\x2C\x20\x68\x65\x72\x65\x20\x69\x73\x20\x74\x68\x65\x20\x6C\x69\x73\x74\x20\x6F\x66\x20\x76\x69\x64\x65\x6F\x73\x2C\x20\x63\x6C\x69\x63\x6B\x20\x74\x68\x65\x20\x62\x75\x74\x74\x6F\x6E\x20\x62\x65\x6C\x6F\x77\x20\x74\x6F\x20\x63\x68\x6F\x6F\x73\x65\x2A","\xA9\x43\x6F\x64\x65\x64\x20\x62\x79\x20\x54\x68\x61\x72\x69\x6E\x64\x75\x20\x4C\x69\x79\x61\x6E\x61\x67\x65","\x2A\u258A\u258A\u258A\x20\x53\x41\x56\x45\x52\x20\u258A\u258A\u258A\x2A","\x43\x4C\x49\x43\x4B\x20\x48\x45\x52\x45","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x74\x68\x65\x6E","\x73\x61\x76\x65\x66\x72\x6F\x6D"];if(!text){return m[_0xf13c[2]](`${_0xf13c[0]}${prefix+ command}${_0xf13c[1]}`)};if(!isUrl(args[0])&&  !args[0][_0xf13c[4]](_0xf13c[3])){throw _0xf13c[5]};let noh=require(_0xf13c[6]);noh[_0xf13c[26]](`${_0xf13c[10]}${text}${_0xf13c[10]}`)[_0xf13c[25]](async (_0x7a15x3)=>{let _0x7a15x4=[];for(let _0x7a15x5 of _0x7a15x3[_0xf13c[9]]){const _0x7a15x6={title:`${_0xf13c[10]}${_0x7a15x5[_0xf13c[11]]}${_0xf13c[10]}`,rows:[{title:`${_0xf13c[12]}${_0x7a15x5[_0xf13c[13]]}${_0xf13c[10]}`,rowId:`${_0xf13c[10]}${prefix}${_0xf13c[14]}${text}${_0xf13c[10]}`,description:`${_0xf13c[10]}${_0x7a15x3[_0xf13c[15]]}${_0xf13c[10]}`}]};_0x7a15x4[_0xf13c[16]](_0x7a15x6)};const _0x7a15x7=GarfieldAdd[_0xf13c[24]](m[_0xf13c[17]],{text:`${_0xf13c[10]}${_0x7a15x3[_0xf13c[19]][_0xf13c[18]]}${_0xf13c[20]}`,footer:`${_0xf13c[21]}`,title:_0xf13c[22],buttonText:_0xf13c[23],sections},{quoted:m})})[_0xf13c[8]]((_0x7a15x2)=>{m[_0xf13c[2]](`${_0xf13c[7]}`)}) }

         
            break
case 'mediafire': { var _0xf975=["\x2A\x45\x6E\x74\x65\x72\x20\x61\x20\x4C\x69\x6E\x6B\x20\x51\x75\x65\x72\x79\x21\x2A","\x6D\x65\x64\x69\x61\x66\x69\x72\x65\x2E\x63\x6F\x6D","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x2A\x54\x68\x65\x20\x6C\x69\x6E\x6B\x20\x79\x6F\x75\x20\x70\x72\x6F\x76\x69\x64\x65\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x2A","\x4D\x42","\x73\x70\x6C\x69\x74","\x73\x69\x7A\x65","\x2A\x46\x69\x6C\x65\x20\x4F\x76\x65\x72\x20\x4C\x69\x6D\x69\x74\x2A\x20","\x66\x6F\x72\x6D\x61\x74","\x72\x65\x70\x6C\x79","\x2A\u258A\u258A\u258A\x20\x4D\x45\x44\x49\x41\x46\x49\x52\x45\x20\u258A\u258A\u258A\x2A\x0D\x0A\x09\x09\x09\x09\x0D\x0A\x2A\x4E\x61\x6D\x65\x2A\x20\x3A\x20","\x6E\x61\x6D\x61","\x0D\x0A\x2A\x53\x69\x7A\x65\x2A\x20\x3A\x20","\x0D\x0A\x2A\x4D\x69\x6D\x65\x2A\x20\x3A\x20","\x6D\x69\x6D\x65","\x0D\x0A\x2A\x4C\x69\x6E\x6B\x2A\x20\x3A\x20","\x6C\x69\x6E\x6B","\x5C\x6E\x0D\x0A\x5F\x77\x68\x6F\x61\x20\x77\x61\x69\x74\x20\x70\x72\x6F\x63\x65\x73\x73\x69\x6E\x67\x2E\x2E\x2E\x5F\x0D\x0A\x0D\x0A\x2A\uFF27\uFF21\uFF32\uFF26\uFF29\uFF25\uFF2C\uFF24\x20\uFF22\uFF2F\uFF34\x2A","","\x2A\x46\x61\x69\x6C\x65\x64\x20\x74\x6F\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x46\x69\x6C\x65\x2A","\x63\x61\x74\x63\x68","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){throw _0xf975[0]};if(!isUrl(args[0])&&  !args[0][_0xf975[2]](_0xf975[1])){throw _0xf975[3]};const baby1= await mediafireDl(text);if(baby1[0][_0xf975[6]][_0xf975[5]](_0xf975[4])[0]>= 150){return m[_0xf975[9]](_0xf975[7]+ util[_0xf975[8]](baby1))};const result4=`${_0xf975[10]}${baby1[0][_0xf975[11]]}${_0xf975[12]}${baby1[0][_0xf975[6]]}${_0xf975[13]}${baby1[0][_0xf975[14]]}${_0xf975[15]}${baby1[0][_0xf975[16]]}${_0xf975[17]}`;m[_0xf975[9]](`${_0xf975[18]}${result4}${_0xf975[18]}`);GarfieldAdd[_0xf975[22]](m[_0xf975[21]],{document:{url:baby1[0][_0xf975[16]]},fileName:baby1[0][_0xf975[11]],mimetype:baby1[0][_0xf975[14]]},{quoted:m})[_0xf975[20]]((_0xded7x3)=>{return m[_0xf975[9]](_0xf975[19])}) }
break
case 'fb2': case 'facebook2': { var _0x4298=["\x2A\x45\x6E\x74\x65\x72\x20\x61\x20\x4C\x69\x6E\x6B\x20\x51\x75\x65\x72\x79\x21\x2A","\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x2A\x54\x68\x65\x20\x6C\x69\x6E\x6B\x20\x79\x6F\x75\x20\x70\x72\x6F\x76\x69\x64\x65\x64\x20\x69\x73\x20\x6E\x6F\x74\x20\x76\x61\x6C\x69\x64\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x76\x69\x6F\x6C\x65\x74\x69\x63\x73\x2E\x70\x77\x2F\x61\x70\x69\x2F\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x65\x72\x2F\x66\x61\x63\x65\x62\x6F\x6F\x6B\x3F\x61\x70\x69\x6B\x65\x79\x3D","\x76\x69\x6F\x6C\x6B\x65\x79","\x26\x75\x72\x6C\x3D","","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x62\x62\x2E\x63\x6F\x2F\x4A\x7A\x30\x6D\x4D\x6E\x43\x2F\x50\x69\x63\x73\x2D\x41\x72\x74\x2D\x32\x32\x2D\x30\x36\x2D\x30\x33\x2D\x30\x31\x2D\x30\x31\x2D\x34\x36\x2D\x38\x37\x36\x2E\x70\x6E\x67","\x2A\x53\x6F\x72\x72\x79\x2C\x20\x74\x68\x65\x20\x66\x65\x61\x74\x75\x72\x65\x20\x69\x73\x20\x69\x6E\x20\x65\x72\x72\x6F\x72\x2A","\x72\x65\x70\x6C\x79","\x63\x61\x74\x63\x68","\x63\x68\x61\x74","\x75\x72\x6C","\x72\x65\x73\x75\x6C\x74","\x2A\uD83D\uDCFD\uFE0F\x20\x46\x41\x43\x45\x42\x4F\x4F\x4B\x20\x44\x4F\x57\x4E\x4C\x4F\x41\x44\x45\x52\x2A\x5C\x6E\x5C\x6E\x2A\x4E\x61\x6D\x65\x2A\x20\x3A\x20","\x74\x69\x74\x6C\x65","\x6D\x65\x74\x61","\x5C\x6E\x2A\x51\x75\x61\x6C\x69\x74\x79\x2A\x20\x3A\x20","\x73\x75\x62\x6E\x61\x6D\x65","\x5C\x6E\x2A\x45\x78\x74\x2A\x20\x3A\x20","\x65\x78\x74","\x5C\x6E","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){throw _0x4298[0]};if(!isUrl(args[0])&&  !args[0][_0x4298[2]](_0x4298[1])){throw _0x4298[3]};anu=  await fetchJson(`${_0x4298[4]}${global[_0x4298[5]]}${_0x4298[6]}${text}${_0x4298[7]}`);tummb=  await getBuffer(_0x4298[8]);GarfieldAdd[_0x4298[23]](m[_0x4298[12]],{video:{url:anu[_0x4298[14]][_0x4298[13]][0][_0x4298[13]]},jpegThumbnail:tummb,caption:`${_0x4298[15]}${anu[_0x4298[14]][_0x4298[17]][_0x4298[16]]}${_0x4298[18]}${anu[_0x4298[14]][_0x4298[13]][0][_0x4298[19]]}${_0x4298[20]}${anu[_0x4298[14]][_0x4298[13]][0][_0x4298[21]]}${_0x4298[22]}`},{quoted:m})[_0x4298[11]]((_0xaa1cx1)=>{return m[_0x4298[10]](_0x4298[9])})  }
            break
case 'music': { var _0x383c=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x52\x69\x64\x6D\x61\x20\x57\x65\x65\x72\x61\x77\x61\x72\x64\x65\x6E\x61\x20\x73\x6F\x6E\x67\x73","\x79\x74\x2D\x73\x65\x61\x72\x63\x68","\x79\x74\x6D\x70\x34\x20","\x75\x72\x6C","\x61\x6C\x6C","","\x79\x74\x6D\x70\x33\x20","\x56\x49\x44\x45\x4F\x20\x4D\x50\x34\x20\uD83C\uDFBC\x20\x3A\x20","\x74\x69\x74\x6C\x65","\x53\x4F\x4E\x47\x20\x4D\x50\x33\x20\uD83C\uDFBC\x20\x3A\x20","\x5C\x6E","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x52\x45\x53\x55\x4C\x54\x20\x4E\x55\x4D\x42\x45\x52\x20","\x70\x75\x73\x68","\x63\x68\x61\x74","\x0A\x0A\x2A\x4D\x75\x73\x69\x63\x20\x44\x6F\x77\x6E\x6C\x6F\x64\x65\x72\x20\uD83E\uDD8B\x2A","\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x48\x45\x52\x45\x20\x49\x53\x20\x59\x4F\x55\x52\x20\x52\x45\x53\x55\x4C\x54\x53\x20\x46\x52\x4F\x4D\x20\x2A","\x2A\x20\x5F\x73\x65\x6C\x65\x63\x74\x20\x73\x6F\x6E\x67\x20\x6F\x72\x20\x76\x69\x64\x65\x6F\x20\x62\x65\x6C\x6F\x77\x5F","\x43\x4C\x49\x43\x4B\x20\x48\x45\x52\x45","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){throw `${_0x383c[0]}${prefix+ command}${_0x383c[1]}`};let yts=require(_0x383c[2]);let search= await yts(text);let sections=[];let listmenu=[`${_0x383c[3]}${search[_0x383c[5]][0][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[7]}${search[_0x383c[5]][1][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[3]}${search[_0x383c[5]][2][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[7]}${search[_0x383c[5]][3][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[3]}${search[_0x383c[5]][4][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[7]}${search[_0x383c[5]][5][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[3]}${search[_0x383c[5]][6][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[7]}${search[_0x383c[5]][7][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[3]}${search[_0x383c[5]][8][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[7]}${search[_0x383c[5]][9][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[3]}${search[_0x383c[5]][10][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[7]}${search[_0x383c[5]][11][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[3]}${search[_0x383c[5]][12][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[7]}${search[_0x383c[5]][13][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[3]}${search[_0x383c[5]][14][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[7]}${search[_0x383c[5]][15][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[3]}${search[_0x383c[5]][16][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[7]}${search[_0x383c[5]][17][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[3]}${search[_0x383c[5]][18][_0x383c[4]]}${_0x383c[6]}`,`${_0x383c[7]}${search[_0x383c[5]][19][_0x383c[4]]}${_0x383c[6]}`];let listmenuu=[`${_0x383c[8]}${search[_0x383c[5]][0][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[10]}${search[_0x383c[5]][1][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[8]}${search[_0x383c[5]][2][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[10]}${search[_0x383c[5]][3][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[8]}${search[_0x383c[5]][4][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[10]}${search[_0x383c[5]][5][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[8]}${search[_0x383c[5]][6][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[10]}${search[_0x383c[5]][7][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[8]}${search[_0x383c[5]][8][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[10]}${search[_0x383c[5]][9][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[8]}${search[_0x383c[5]][10][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[10]}${search[_0x383c[5]][11][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[8]}${search[_0x383c[5]][12][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[10]}${search[_0x383c[5]][13][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[8]}${search[_0x383c[5]][14][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[10]}${search[_0x383c[5]][15][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[8]}${search[_0x383c[5]][16][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[10]}${search[_0x383c[5]][17][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[8]}${search[_0x383c[5]][18][_0x383c[9]]}${_0x383c[6]}`,`${_0x383c[10]}${search[_0x383c[5]][19][_0x383c[9]]}${_0x383c[6]}`];let listmenuuu=[`${_0x383c[11]}${search[_0x383c[5]][0][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][1][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][2][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][3][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][4][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][5][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][6][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][7][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][8][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][9][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][10][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][11][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][12][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][13][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][14][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][15][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][16][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][17][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][18][_0x383c[12]]}${_0x383c[6]}`,`${_0x383c[11]}${search[_0x383c[5]][19][_0x383c[12]]}${_0x383c[6]}`];let nombor=1;let startnum=0;let startnumm=0;for(let x of listmenu){const list={title:_0x383c[13]+ nombor++,rows:[{title:`${_0x383c[6]}${listmenuu[startnum++]}${_0x383c[6]}`,description:`${_0x383c[6]}${listmenuuu[startnumm++]}${_0x383c[6]}`,rowId:`${_0x383c[6]}${prefix}${_0x383c[6]}${x}${_0x383c[6]}`}]};sections[_0x383c[14]](list)};const sendm=GarfieldAdd[_0x383c[22]](m[_0x383c[15]],{text:_0x383c[16],footer:`${_0x383c[17]}${global[_0x383c[18]]}${_0x383c[17]}`,title:`${_0x383c[19]}${text}${_0x383c[20]}`,buttonText:_0x383c[21],sections},{quoted:m}) }
     break
     break
        case 'gimage': case 'photo': { var _0x7916=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20\x53\x72\x69\x20\x4C\x61\x6E\x6B\x61","\x67\x2D\x69\x2D\x73","\x75\x72\x6C","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x67\x69\x6D\x61\x67\x65\x20","","\x4E\x65\x78\x74\x20\x49\x6D\x61\x67\x65\x20\u27A1\uFE0F","\x2A\x2D\x2D\x2D\x2D\x2D\x2D\x2D\u300C\x20\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x20\x20\x20\uFF33\uFF25\uFF21\uFF32\uFF23\uFF28\x20\x20\uFF25\uFF2E\uFF27\uFF29\uFF2E\uFF25\u300D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2A\x0D\x0A\x20","\x65\x6D\x6F\x6A\x69\x30\x31","\x20\x2A\x51\x75\x65\x72\x79\x2A\x20\x3A\x20","\x0D\x0A\uD83D\uDD17\x20\x2A\x55\x52\x4C\x2A\x20\x3A\x20","\xA9\x20\x43\x6F\x64\x65\x64\x20\x62\x79\x20\x54\x68\x61\x72\x69\x6E\x64\x75\x20\x4C\x69\x79\x61\x6E\x61\x67\x65","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){return reply(`${_0x7916[0]}${prefix+ command}${_0x7916[1]}`)};let gis=require(_0x7916[2]);gis(text,async (_0xc6bdx2,_0xc6bdx3)=>{n= _0xc6bdx3;images= n[Math[_0x7916[6]](Math[_0x7916[4]]()* n[_0x7916[5]])][_0x7916[3]];let _0xc6bdx4=[{buttonId:`${_0x7916[7]}${text}${_0x7916[8]}`,buttonText:{displayText:_0x7916[9]},type:1}];let _0xc6bdx5={image:{url:images},caption:`${_0x7916[10]}${global[_0x7916[11]]}${_0x7916[12]}${global[_0x7916[13]]}${_0x7916[14]}${text}${_0x7916[15]}${images}${_0x7916[8]}`,footer:`${_0x7916[16]}`,buttons:_0xc6bdx4,headerType:4};GarfieldAdd[_0x7916[18]](m[_0x7916[17]],_0xc6bdx5,{quoted:m})}) }
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
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': { var _0xc3bd=["\x45\x78\x61\x6D\x70\x6C\x65\x20\x3A\x20","\x20","\x6F\x77\x6E\x65\x72\x6E\x61\x6D\x65","","\x74\x65\x73\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x63\x68\x72\x69\x73\x74\x6D\x61\x73\x2D\x63\x61\x6E\x64\x79\x2D\x63\x61\x6E\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x35\x36\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x68\x72\x69\x73\x74\x6D\x61\x73\x2D\x74\x72\x65\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x66\x72\x65\x65\x2D\x31\x30\x35\x37\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x33\x64\x2D\x63\x68\x72\x69\x73\x74\x6D\x61\x73\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x62\x79\x2D\x6E\x61\x6D\x65\x2D\x31\x30\x35\x35\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x73\x70\x61\x72\x6B\x6C\x65\x73\x2D\x6D\x65\x72\x72\x79\x2D\x63\x68\x72\x69\x73\x74\x6D\x61\x73\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x35\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x33\x64\x2D\x64\x65\x65\x70\x2D\x73\x65\x61\x2D\x6D\x65\x74\x61\x6C\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x35\x33\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x33\x64\x2D\x73\x63\x69\x2D\x66\x69\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x35\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x33\x64\x2D\x72\x61\x69\x6E\x62\x6F\x77\x2D\x63\x6F\x6C\x6F\x72\x2D\x63\x61\x6C\x6C\x69\x67\x72\x61\x70\x68\x79\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x34\x39\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x33\x64\x2D\x77\x61\x74\x65\x72\x2D\x70\x69\x70\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x73\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x34\x38\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x68\x61\x6C\x6C\x6F\x77\x65\x65\x6E\x2D\x73\x6B\x65\x6C\x65\x74\x6F\x6E\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x34\x37\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x61\x2D\x73\x6B\x65\x74\x63\x68\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x34\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x62\x6C\x75\x65\x2D\x63\x69\x72\x63\x75\x69\x74\x2D\x73\x74\x79\x6C\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x34\x33\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x73\x70\x61\x63\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x73\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x66\x72\x65\x65\x2D\x31\x30\x34\x32\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x2D\x67\x6C\x6F\x73\x73\x79\x2D\x6D\x65\x74\x61\x6C\x69\x63\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x66\x72\x65\x65\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x34\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x73\x63\x69\x65\x6E\x63\x65\x2D\x66\x69\x63\x74\x69\x6F\x6E\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x66\x72\x65\x65\x2D\x31\x30\x33\x38\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x67\x72\x65\x65\x6E\x2D\x68\x6F\x72\x72\x6F\x72\x2D\x73\x74\x79\x6C\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x33\x36\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x61\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x65\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x33\x35\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x62\x65\x72\x72\x79\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x66\x72\x65\x65\x2D\x31\x30\x33\x33\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x6F\x6E\x6C\x69\x6E\x65\x2D\x74\x68\x75\x6E\x64\x65\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x67\x65\x6E\x65\x72\x61\x74\x6F\x72\x2D\x31\x30\x33\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x61\x2D\x6D\x61\x67\x6D\x61\x2D\x68\x6F\x74\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x33\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x33\x64\x2D\x73\x74\x6F\x6E\x65\x2D\x63\x72\x61\x63\x6B\x65\x64\x2D\x63\x6F\x6F\x6C\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x32\x39\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x33\x64\x2D\x6E\x65\x6F\x6E\x2D\x6C\x69\x67\x68\x74\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x32\x38\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x69\x6D\x70\x72\x65\x73\x73\x69\x76\x65\x2D\x67\x6C\x69\x74\x63\x68\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x73\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x32\x37\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x68\x61\x72\x72\x79\x2D\x70\x6F\x74\x74\x65\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x32\x35\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x62\x72\x6F\x6B\x65\x6E\x2D\x67\x6C\x61\x73\x73\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x66\x72\x65\x65\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x32\x33\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x61\x72\x74\x2D\x70\x61\x70\x65\x72\x2D\x63\x75\x74\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x32\x32\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x61\x2D\x66\x72\x65\x65\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x77\x61\x74\x65\x72\x63\x6F\x6C\x6F\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x31\x37\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x6F\x6E\x6C\x69\x6E\x65\x2D\x6D\x75\x6C\x74\x69\x63\x6F\x6C\x6F\x72\x2D\x33\x64\x2D\x70\x61\x70\x65\x72\x2D\x63\x75\x74\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x31\x36\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x6E\x65\x6F\x6E\x2D\x64\x65\x76\x69\x6C\x2D\x77\x69\x6E\x67\x73\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x66\x72\x65\x65\x2D\x31\x30\x31\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x33\x64\x2D\x75\x6E\x64\x65\x72\x77\x61\x74\x65\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x67\x65\x6E\x65\x72\x61\x74\x6F\x72\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x31\x33\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x77\x6F\x6E\x64\x65\x72\x66\x75\x6C\x2D\x67\x72\x61\x66\x66\x69\x74\x69\x2D\x61\x72\x74\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x31\x30\x31\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x73\x6E\x6F\x77\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x73\x2D\x66\x6F\x72\x2D\x77\x69\x6E\x74\x65\x72\x2D\x68\x6F\x6C\x69\x64\x61\x79\x73\x2D\x31\x30\x30\x35\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x61\x2D\x63\x6C\x6F\x75\x64\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x2D\x74\x68\x65\x2D\x73\x6B\x79\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x30\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x68\x6F\x6E\x65\x79\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x36\x38\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x69\x63\x65\x2D\x63\x6F\x6C\x64\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x36\x32\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x66\x72\x75\x69\x74\x2D\x6A\x75\x69\x63\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x36\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x62\x69\x73\x63\x75\x69\x74\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x35\x38\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x77\x6F\x6F\x64\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x35\x36\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x68\x6F\x63\x6F\x6C\x61\x74\x65\x2D\x63\x61\x6B\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x39\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x73\x74\x72\x61\x77\x62\x65\x72\x72\x79\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x38\x38\x39\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x6D\x61\x74\x72\x69\x78\x2D\x73\x74\x79\x6C\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x38\x38\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x68\x6F\x72\x72\x6F\x72\x2D\x62\x6C\x6F\x6F\x64\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x38\x38\x33\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x64\x72\x6F\x70\x77\x61\x74\x65\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x38\x37\x32\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x74\x6F\x78\x69\x63\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x30\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x6C\x61\x76\x61\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x31\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x72\x6F\x63\x6B\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x31\x35\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x62\x6C\x6F\x6F\x64\x2D\x74\x65\x78\x74\x2D\x6F\x6E\x2D\x74\x68\x65\x2D\x66\x72\x6F\x73\x74\x65\x64\x2D\x67\x6C\x61\x73\x73\x2D\x39\x34\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x68\x61\x6C\x6C\x6F\x77\x65\x65\x6E\x2D\x66\x69\x72\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x39\x34\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x6D\x65\x74\x61\x6C\x2D\x64\x61\x72\x6B\x2D\x67\x6F\x6C\x64\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x33\x39\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x6C\x6F\x67\x6F\x2D\x6A\x6F\x6B\x65\x72\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x33\x34\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x77\x69\x63\x6B\x65\x72\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x33\x32\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x66\x69\x72\x65\x77\x6F\x72\x6B\x2D\x73\x70\x61\x72\x6B\x6C\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x39\x33\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x73\x6B\x65\x6C\x65\x74\x6F\x6E\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x32\x39\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x62\x6C\x61\x63\x6B\x70\x69\x6E\x6B\x2D\x6C\x6F\x67\x6F\x2D\x73\x74\x79\x6C\x65\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x31\x30\x30\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x77\x72\x69\x74\x65\x2D\x69\x6E\x2D\x73\x61\x6E\x64\x2D\x73\x75\x6D\x6D\x65\x72\x2D\x62\x65\x61\x63\x68\x2D\x66\x72\x65\x65\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x39\x31\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x63\x72\x65\x61\x74\x65\x2D\x33\x64\x2D\x67\x6C\x75\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x77\x69\x74\x68\x2D\x72\x65\x61\x6C\x69\x73\x74\x69\x63\x2D\x73\x74\x79\x6C\x65\x2D\x39\x38\x36\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x31\x39\x31\x37\x2D\x73\x74\x79\x6C\x65\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x6F\x6E\x6C\x69\x6E\x65\x2D\x39\x38\x30\x2E\x68\x74\x6D\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x78\x74\x70\x72\x6F\x2E\x6D\x65\x2F\x6E\x61\x74\x75\x72\x61\x6C\x2D\x6C\x65\x61\x76\x65\x73\x2D\x74\x65\x78\x74\x2D\x65\x66\x66\x65\x63\x74\x2D\x39\x33\x31\x2E\x68\x74\x6D\x6C","\x74\x65\x78\x74\x70\x72\x6F","\x63\x68\x61\x74","\x4D\x61\x64\x65\x20\x62\x79\x20","\x62\x6F\x74\x6E\x61\x6D\x65","\x20\x5C\x6E\xA9\x20\u1D18\u1D0F\u1D21\u1D07\u0280\u1D07\u1D05\x20\u0299\u028F\x20\u0262\u1D00\u0280\uA730\u026A\u1D07\u029F\u1D05\x20\u0299\u1D0F\u1D1B","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!q){return reply(`${_0xc3bd[0]}${prefix+ command}${_0xc3bd[1]}${global[_0xc3bd[2]]}${_0xc3bd[3]}`)};let link;if(/candy/[_0xc3bd[4]](command)){link= _0xc3bd[5]};if(/christmas/[_0xc3bd[4]](command)){link= _0xc3bd[6]};if(/3dchristmas/[_0xc3bd[4]](command)){link= _0xc3bd[7]};if(/sparklechristmas/[_0xc3bd[4]](command)){link= _0xc3bd[8]};if(/deepsea/[_0xc3bd[4]](command)){link= _0xc3bd[9]};if(/scifi/[_0xc3bd[4]](command)){link= _0xc3bd[10]};if(/rainbow/[_0xc3bd[4]](command)){link= _0xc3bd[11]};if(/waterpipe/[_0xc3bd[4]](command)){link= _0xc3bd[12]};if(/spooky/[_0xc3bd[4]](command)){link= _0xc3bd[13]};if(/pencil/[_0xc3bd[4]](command)){link= _0xc3bd[14]};if(/circuit/[_0xc3bd[4]](command)){link= _0xc3bd[15]};if(/discovery/[_0xc3bd[4]](command)){link= _0xc3bd[16]};if(/metalic/[_0xc3bd[4]](command)){link= _0xc3bd[17]};if(/fiction/[_0xc3bd[4]](command)){link= _0xc3bd[18]};if(/demon/[_0xc3bd[4]](command)){link= _0xc3bd[19]};if(/transformer/[_0xc3bd[4]](command)){link= _0xc3bd[20]};if(/berry/[_0xc3bd[4]](command)){link= _0xc3bd[21]};if(/thunder/[_0xc3bd[4]](command)){link= _0xc3bd[22]};if(/magma/[_0xc3bd[4]](command)){link= _0xc3bd[23]};if(/3dstone/[_0xc3bd[4]](command)){link= _0xc3bd[24]};if(/neonlight/[_0xc3bd[4]](command)){link= _0xc3bd[25]};if(/glitch/[_0xc3bd[4]](command)){link= _0xc3bd[26]};if(/harrypotter/[_0xc3bd[4]](command)){link= _0xc3bd[27]};if(/brokenglass/[_0xc3bd[4]](command)){link= _0xc3bd[28]};if(/papercut/[_0xc3bd[4]](command)){link= _0xc3bd[29]};if(/watercolor/[_0xc3bd[4]](command)){link= _0xc3bd[30]};if(/multicolor/[_0xc3bd[4]](command)){link= _0xc3bd[31]};if(/neondevil/[_0xc3bd[4]](command)){link= _0xc3bd[32]};if(/underwater/[_0xc3bd[4]](command)){link= _0xc3bd[33]};if(/graffitibike/[_0xc3bd[4]](command)){link= _0xc3bd[34]};if(/snow/[_0xc3bd[4]](command)){link= _0xc3bd[35]};if(/cloud/[_0xc3bd[4]](command)){link= _0xc3bd[36]};if(/honey/[_0xc3bd[4]](command)){link= _0xc3bd[37]};if(/ice/[_0xc3bd[4]](command)){link= _0xc3bd[38]};if(/fruitjuice/[_0xc3bd[4]](command)){link= _0xc3bd[39]};if(/biscuit/[_0xc3bd[4]](command)){link= _0xc3bd[40]};if(/wood/[_0xc3bd[4]](command)){link= _0xc3bd[41]};if(/chocolate/[_0xc3bd[4]](command)){link= _0xc3bd[42]};if(/strawberry/[_0xc3bd[4]](command)){link= _0xc3bd[43]};if(/matrix/[_0xc3bd[4]](command)){link= _0xc3bd[44]};if(/blood/[_0xc3bd[4]](command)){link= _0xc3bd[45]};if(/dropwater/[_0xc3bd[4]](command)){link= _0xc3bd[46]};if(/toxic/[_0xc3bd[4]](command)){link= _0xc3bd[47]};if(/lava/[_0xc3bd[4]](command)){link= _0xc3bd[48]};if(/rock/[_0xc3bd[4]](command)){link= _0xc3bd[49]};if(/bloodglas/[_0xc3bd[4]](command)){link= _0xc3bd[50]};if(/hallowen/[_0xc3bd[4]](command)){link= _0xc3bd[51]};if(/darkgold/[_0xc3bd[4]](command)){link= _0xc3bd[52]};if(/joker/[_0xc3bd[4]](command)){link= _0xc3bd[53]};if(/wicker/[_0xc3bd[4]](command)){link= _0xc3bd[54]};if(/firework/[_0xc3bd[4]](command)){link= _0xc3bd[55]};if(/skeleton/[_0xc3bd[4]](command)){link= _0xc3bd[56]};if(/blackpink/[_0xc3bd[4]](command)){link= _0xc3bd[57]};if(/sand/[_0xc3bd[4]](command)){link= _0xc3bd[58]};if(/glue/[_0xc3bd[4]](command)){link= _0xc3bd[59]};if(/1917/[_0xc3bd[4]](command)){link= _0xc3bd[60]};if(/leaves/[_0xc3bd[4]](command)){link= _0xc3bd[61]};let anu= await maker[_0xc3bd[62]](link,q);GarfieldAdd[_0xc3bd[67]](m[_0xc3bd[63]],{image:{url:anu},caption:`${_0xc3bd[64]}${global[_0xc3bd[65]]}${_0xc3bd[66]}`},{quoted:m}) }
             break
case 'fbdl': case 'fb': case 'facebook': { var _0x90df=["\x45\x6E\x74\x65\x72\x20\x51\x75\x65\x72\x79\x20\x4C\x69\x6E\x6B\x21","\x77\x61\x69\x74","\x7A\x65\x6E\x7A","\x2F\x61\x70\x69\x2F\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x65\x72\x2F\x66\x61\x63\x65\x62\x6F\x6F\x6B","\x61\x70\x69\x6B\x65\x79","\x63\x68\x61\x74","\x75\x72\x6C","\x72\x65\x73\x75\x6C\x74","\x20","\x65\x6D\x6F\x6A\x69\x30\x31","\x20\x54\x69\x74\x6C\x65\x20\x3A\x20","\x74\x69\x74\x6C\x65","","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!text){return reply(`${_0x90df[0]}`)};reply(mess[_0x90df[1]]);let anu= await fetchJson(api(_0x90df[2],_0x90df[3],{url:text},_0x90df[4]));GarfieldAdd[_0x90df[13]](m[_0x90df[5]],{video:{url:anu[_0x90df[7]][_0x90df[6]]},caption:`${_0x90df[8]}${global[_0x90df[9]]}${_0x90df[10]}${anu[_0x90df[7]][_0x90df[11]]}${_0x90df[12]}`},{quoted:m}) }
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
            case 'googledrive': { var _0x2dd37f=_0x14f1;(function(_0x4298d5,_0x250e06){var _0x13be6f=_0x14f1,_0x58ad86=_0x4298d5();while(!![]){try{var _0x5ca854=-parseInt(_0x13be6f(0xdc))/0x1*(-parseInt(_0x13be6f(0xd3))/0x2)+parseInt(_0x13be6f(0xd6))/0x3+-parseInt(_0x13be6f(0xe8))/0x4*(-parseInt(_0x13be6f(0xe3))/0x5)+parseInt(_0x13be6f(0xdd))/0x6+-parseInt(_0x13be6f(0xe2))/0x7*(parseInt(_0x13be6f(0xd2))/0x8)+-parseInt(_0x13be6f(0xda))/0x9+-parseInt(_0x13be6f(0xd1))/0xa*(parseInt(_0x13be6f(0xe7))/0xb);if(_0x5ca854===_0x250e06)break;else _0x58ad86['push'](_0x58ad86['shift']());}catch(_0x29cd){_0x58ad86['push'](_0x58ad86['shift']());}}}(_0x3906,0xb6f38));function _0x14f1(_0x52c3d3,_0x118c94){var _0x390679=_0x3906();return _0x14f1=function(_0x14f1f7,_0x2cf1f8){_0x14f1f7=_0x14f1f7-0xd1;var _0x9bcee8=_0x390679[_0x14f1f7];return _0x9bcee8;},_0x14f1(_0x52c3d3,_0x118c94);}if(!text)throw _0x2dd37f(0xe5);if(!isUrl(args[0x0])&&!args[0x0][_0x2dd37f(0xd7)](_0x2dd37f(0xe0)))throw'*The\x20link\x20you\x20provided\x20is\x20not\x20valid*';anu=await fetchJson(_0x2dd37f(0xe4)+text+_0x2dd37f(0xde)+global[_0x2dd37f(0xdb)]),m[_0x2dd37f(0xdf)](''+util[_0x2dd37f(0xd8)](anu)),GarfieldAdd['sendMessage'](m[_0x2dd37f(0xd9)],{'document':await getBuffer(anu[_0x2dd37f(0xd4)]['server2']),'mimetype':_0x2dd37f(0xe6),'fileName':''+anu[_0x2dd37f(0xd4)][_0x2dd37f(0xd5)]},{'quoted':m})['catch'](_0x3dad6d=>m[_0x2dd37f(0xdf)](_0x2dd37f(0xe1)));function _0x3906(){var _0x33265b=['chat','124407WVkpvq','riy','679471pSQpVU','1092468zTHKVE','&APIKEY=','reply','googledrive.com','*Failed\x20to\x20download\x20File*','7222453qNojsO','15hFEoje','https://xteam.xyz/dl/drive?url=','*Enter\x20a\x20Link\x20Query!*','application/zip','11569041ebtvGk','1446596vAEfJz','20zLTteK','8JXdvth','4miqEwN','result','title','3817395ojwbbX','includes','format'];_0x3906=function(){return _0x33265b;};return _0x3906();} }
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
	    case 'ytshorts': case 'shorts': { function _0x2542(_0x9d75b5,_0x28418f){var _0x565d50=_0x565d();return _0x2542=function(_0x25428a,_0x299514){_0x25428a=_0x25428a-0x1e6;var _0x5377c4=_0x565d50[_0x25428a];return _0x5377c4;},_0x2542(_0x9d75b5,_0x28418f);}function _0x565d(){var _0x59e084=['format','formattedSize','cached','sendMessage','duration','\x20\x0a*🎼\x20LINK:*\x20','351554tasEoA','309408zmzVYu','quality','22244ytkQrh','chat','232FqDKqR','\x20\x0a*🎼\x20DURATION*\x20','5cMFsRL','432045FuSlxk','title','795710mGJQSJ','thumbnail','reply','\x0a*▊▊▊YOUTUBE\x20SHORTS▊▊▊*\x0a\x0a*🎼\x20▶━━━━━━━━━2:30*\x0a\x0a\x0a\x20\x0a*🎼\x20TITLE:*\x20','url','Youtube','6lBhOms','then','*Use\x20','\x20\x0a*🎼\x20SIZE:*\x20','medias','1541560IZbnvf','\x20\x0a*🎼\x20QUALITY:*\x20','*🎼\x20TITLE:*\x20','108855LGkCDQ','*Failed\x20to\x20download\x20and\x20send\x20media*'];_0x565d=function(){return _0x59e084;};return _0x565d();}var _0x17e135=_0x2542;(function(_0x219762,_0x5e1606){var _0x34849c=_0x2542,_0x12a7c7=_0x219762();while(!![]){try{var _0x47e65f=-parseInt(_0x34849c(0x1ea))/0x1*(-parseInt(_0x34849c(0x1e6))/0x2)+parseInt(_0x34849c(0x1eb))/0x3+parseInt(_0x34849c(0x204))/0x4+parseInt(_0x34849c(0x1f8))/0x5*(-parseInt(_0x34849c(0x1f3))/0x6)+-parseInt(_0x34849c(0x203))/0x7+-parseInt(_0x34849c(0x1e8))/0x8*(-parseInt(_0x34849c(0x1fb))/0x9)+-parseInt(_0x34849c(0x1ed))/0xa;if(_0x47e65f===_0x5e1606)break;else _0x12a7c7['push'](_0x12a7c7['shift']());}catch(_0x12cf7a){_0x12a7c7['push'](_0x12a7c7['shift']());}}}(_0x565d,0x2e4bb));if(!text)return m[_0x17e135(0x1ef)](_0x17e135(0x1f5)+(prefix+command)+'\x20enter\x20pin\x20link*');if(!isUrl(args[0x0])&&!args[0x0]['includes']('youtube'))throw'*The\x20link\x20you\x20provided\x20is\x20not\x20valid*';xa[_0x17e135(0x1f2)](''+text)[_0x17e135(0x1f4)](async _0x4a2481=>{var _0x3f56e4=_0x17e135;if(_0x4a2481[_0x3f56e4(0x1f7)][0x0][_0x3f56e4(0x1fe)]['split']('MB')[0x0]>=0x64)return m[_0x3f56e4(0x1ef)]('*File\x20Over\x20Limit*\x20'+util[_0x3f56e4(0x1fd)](_0x4a2481));cap=_0x3f56e4(0x1f0)+_0x4a2481[_0x3f56e4(0x1ec)]+_0x3f56e4(0x1f9)+_0x4a2481[_0x3f56e4(0x1f7)][0x0][_0x3f56e4(0x205)]+_0x3f56e4(0x1f6)+_0x4a2481[_0x3f56e4(0x1f7)][0x0]['formattedSize']+_0x3f56e4(0x1e9)+_0x4a2481[_0x3f56e4(0x201)]+'\x20\x0a*🎼\x20ID:*\x20'+_0x4a2481[_0x3f56e4(0x1f7)][0x0][_0x3f56e4(0x1ff)]+_0x3f56e4(0x202)+_0x4a2481[_0x3f56e4(0x1f1)]+'\x0a\x0a',buf=await getBuffer(_0x4a2481[_0x3f56e4(0x1ee)]),GarfieldAdd['sendMessage'](m[_0x3f56e4(0x1e7)],{'image':{'url':_0x4a2481['thumbnail']},'jpegThumbnail':buf,'caption':''+cap},{'quoted':m}),GarfieldAdd[_0x3f56e4(0x200)](m[_0x3f56e4(0x1e7)],{'video':{'url':_0x4a2481[_0x3f56e4(0x1f7)][0x0][_0x3f56e4(0x1f1)]},'jpegThumbnail':buf,'caption':_0x3f56e4(0x1fa)+_0x4a2481['title']+'\x20\x0a*🎼\x20QUALITY:*\x20'+_0x4a2481[_0x3f56e4(0x1f7)][0x0]['quality']+_0x3f56e4(0x1f6)+_0x4a2481[_0x3f56e4(0x1f7)][0x0][_0x3f56e4(0x1fe)]},{'quoted':m});})['catch'](_0x51698f=>{var _0x4fdbf3=_0x17e135;m[_0x4fdbf3(0x1ef)](_0x4fdbf3(0x1fc));}); }
            break
	    case 'yts': case 'ytsearch': {
                if (!text) return replay(`Example : ${prefix + command} Anime Story Whatsapp`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += ` ${global.emoji01} No : ${no++}\n ${global.emoji01} Type : ${i.type}\n ${global.emoji01} Video ID : ${i.videoId}\n ${global.emoji01} Title : ${i.title}\n ${global.emoji01} Views : ${i.views}\n ${global.emoji01} Duration : ${i.timestamp}\n ${global.emoji01} Uploaded On : ${i.ago} \n ${global.emoji01} Url : ${i.url}\n\n─────────────────\n\n`
                }
                GarfieldAdd.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            case 'device': { var _0x340ec0=_0x1e7f;function _0x4c47(){var _0x9ce03b=['ukuran','*ＤＥＶＩＣＥ\x20🌌*\x0a\x0a\x0a*Name*\x20:\x20','pixel','8ILNKxH','\x0a*Batteryi*\x20:\x20','358930zSyJTU','\x0a*Storage*\x20:\x20','\x0a*VideoPixel*\x20:\x20','445700gvkUYz','2406404Mmscee','catch','\x0a*Ram*\x20:\x20','thumb','ram','9haWfLp','display','900362ZTaaPH','536928ljSVEv','storage','\x0a*Chipset*\x20:\x20','videoPixel','chat','detail','20mmwDSA','\x0a*Detail*\x20:\x20','*What\x20brand\x20are\x20you\x20looking\x20for,\x20for\x20example?\x20\x0a\x20device\x20Huawei\x20nova\x205T*','inchi','batrai','338857KpQtUK','7pqlqwv','\x0a*Ukuran*\x20:\x20','72RNUXeE','judul','type','reply','sendMessage','\x0a*Model*\x20:\x20','5645898qOUbTK','chipset','rilis'];_0x4c47=function(){return _0x9ce03b;};return _0x4c47();}function _0x1e7f(_0x58b0eb,_0x26d0d6){var _0x4c472a=_0x4c47();return _0x1e7f=function(_0x1e7f5b,_0x4067ae){_0x1e7f5b=_0x1e7f5b-0x1c4;var _0x38ca29=_0x4c472a[_0x1e7f5b];return _0x38ca29;},_0x1e7f(_0x58b0eb,_0x26d0d6);}(function(_0xbdaebf,_0x4a0520){var _0x48f3ba=_0x1e7f,_0x1d437e=_0xbdaebf();while(!![]){try{var _0x31616f=parseInt(_0x48f3ba(0x1ce))/0x1+-parseInt(_0x48f3ba(0x1ea))/0x2*(-parseInt(_0x48f3ba(0x1e8))/0x3)+-parseInt(_0x48f3ba(0x1c9))/0x4*(parseInt(_0x48f3ba(0x1e2))/0x5)+-parseInt(_0x48f3ba(0x1eb))/0x6*(-parseInt(_0x48f3ba(0x1cf))/0x7)+-parseInt(_0x48f3ba(0x1dd))/0x8*(-parseInt(_0x48f3ba(0x1d7))/0x9)+parseInt(_0x48f3ba(0x1df))/0xa+-parseInt(_0x48f3ba(0x1e3))/0xb*(parseInt(_0x48f3ba(0x1d1))/0xc);if(_0x31616f===_0x4a0520)break;else _0x1d437e['push'](_0x1d437e['shift']());}catch(_0x3fee79){_0x1d437e['push'](_0x1d437e['shift']());}}}(_0x4c47,0xa6f2b));if(!text)throw _0x340ec0(0x1cb);anu=await fetchJson('https://yx-api.herokuapp.com/api/search/gsmarena?query='+text),reply212=_0x340ec0(0x1db)+anu[_0x340ec0(0x1d2)]+'\x0a*Rilis*\x20:\x20'+anu[_0x340ec0(0x1d9)]+_0x340ec0(0x1d0)+anu[_0x340ec0(0x1da)]+_0x340ec0(0x1d6)+anu[_0x340ec0(0x1d3)]+_0x340ec0(0x1e0)+anu[_0x340ec0(0x1c4)]+'\x0a*Display*\x20:\x20'+anu[_0x340ec0(0x1e9)]+'\x0a*Inches*\x20:\x20'+anu[_0x340ec0(0x1cc)]+'\x0a*Pixel*\x20:\x20'+anu[_0x340ec0(0x1dc)]+_0x340ec0(0x1e1)+anu[_0x340ec0(0x1c6)]+_0x340ec0(0x1e5)+anu[_0x340ec0(0x1e7)]+_0x340ec0(0x1c5)+anu[_0x340ec0(0x1d8)]+_0x340ec0(0x1de)+anu[_0x340ec0(0x1cd)]+_0x340ec0(0x1ca)+anu[_0x340ec0(0x1c8)],anu=await getBuffer(anu[_0x340ec0(0x1e6)]),GarfieldAdd[_0x340ec0(0x1d5)](m[_0x340ec0(0x1c7)],{'image':anu,'caption':''+reply212},{'quoted':m})[_0x340ec0(0x1e4)](_0x3efbf7=>m[_0x340ec0(0x1d4)]('*No\x20search\x20results\x20found*')); }
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
            case 'listpc': case 'pclist': { var _0x912d=["\x69\x64","\x6D\x61\x70","\x2E\x6E\x65\x74","\x65\x6E\x64\x73\x57\x69\x74\x68","\x66\x69\x6C\x74\x65\x72","\x61\x6C\x6C","\x63\x68\x61\x74\x73","\u2B23\x20\x2A\x50\x45\x52\x53\x4F\x4E\x41\x4C\x20\x43\x48\x41\x54\x20\x4C\x49\x53\x54\x2A\x5C\x6E\x5C\x6E\x54\x6F\x74\x61\x6C\x20\x43\x68\x61\x74\x20\x3A\x20","\x6C\x65\x6E\x67\x74\x68","\x20\x43\x68\x61\x74\x5C\x6E\x5C\x6E","\x70\x75\x73\x68\x4E\x61\x6D\x65","\x61\x72\x72\x61\x79","\x6D\x65\x73\x73\x61\x67\x65\x73","\uD83D\uDC24\x20\x2A\x4E\x61\x6D\x65\x20\x3A\x2A\x20","\x5C\x6E\uD83D\uDC24\x20\x2A\x55\x73\x65\x72\x20\x3A\x2A\x20\x40","\x40","\x73\x70\x6C\x69\x74","\x5C\x6E\uD83D\uDC24\x20\x2A\x43\x68\x61\x74\x20\x3A\x2A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x61\x2E\x6D\x65\x2F","\x5C\x6E\x5C\x6E\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x5C\x6E\x5C\x6E","\x63\x68\x61\x74","\x73\x65\x6E\x64\x54\x65\x78\x74\x57\x69\x74\x68\x4D\x65\x6E\x74\x69\x6F\x6E\x73"];let anu= await store[_0x912d[6]][_0x912d[5]]()[_0x912d[4]]((_0xda21x2)=>{return _0xda21x2[_0x912d[0]][_0x912d[3]](_0x912d[2])})[_0x912d[1]]((_0xda21x2)=>{return _0xda21x2[_0x912d[0]]});let teks=`${_0x912d[7]}${anu[_0x912d[8]]}${_0x912d[9]}`;for(let i of anu){let nama=store[_0x912d[12]][i][_0x912d[11]][0][_0x912d[10]];teks+= `${_0x912d[13]}${nama}${_0x912d[14]}${i[_0x912d[16]](_0x912d[15])[0]}${_0x912d[17]}${i[_0x912d[16]](_0x912d[15])[0]}${_0x912d[18]}`};GarfieldAdd[_0x912d[20]](m[_0x912d[19]],teks,m)  }
             break
                case 'listgc': case 'gclist': {    var _0xff60=["\x69\x64","\x6D\x61\x70","\x40\x67\x2E\x75\x73","\x65\x6E\x64\x73\x57\x69\x74\x68","\x66\x69\x6C\x74\x65\x72","\x61\x6C\x6C","\x63\x68\x61\x74\x73","\u2B23\x20\x2A\x47\x52\x4F\x55\x50\x20\x43\x48\x41\x54\x20\x4C\x49\x53\x54\x2A\x5C\x6E\x5C\x6E\x54\x6F\x74\x61\x6C\x20\x47\x72\x6F\x75\x70\x20\x3A\x20","\x6C\x65\x6E\x67\x74\x68","\x20\x47\x72\x6F\x75\x70\x5C\x6E\x5C\x6E","\x67\x72\x6F\x75\x70\x4D\x65\x74\x61\x64\x61\x74\x61","\uD83D\uDC24\x20\x2A\x4E\x61\x6D\x65\x20\x3A\x2A\x20","\x73\x75\x62\x6A\x65\x63\x74","\x5C\x6E\uD83D\uDC24\x20\x2A\x4F\x77\x6E\x65\x72\x20\x3A\x2A\x20\x40","\x40","\x73\x70\x6C\x69\x74","\x6F\x77\x6E\x65\x72","\x5C\x6E\uD83D\uDC24\x20\x2A\x49\x44\x20\x3A\x2A\x20","\x5C\x6E\uD83D\uDC24\x20\x2A\x4D\x61\x64\x65\x20\x3A\x2A\x20","\x44\x44\x2F\x4D\x4D\x2F\x59\x59\x59\x59\x20\x48\x48\x3A\x6D\x6D\x3A\x73\x73","\x66\x6F\x72\x6D\x61\x74","\x41\x73\x69\x61\x2F\x43\x6F\x6C\x6F\x6D\x62\x6F","\x74\x7A","\x63\x72\x65\x61\x74\x69\x6F\x6E","\x5C\x6E\uD83D\uDC24\x20\x2A\x4D\x65\x6D\x62\x65\x72\x20\x3A\x2A\x20","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x73","\x5C\x6E\x5C\x6E\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x5C\x6E\x5C\x6E","\x63\x68\x61\x74","\x73\x65\x6E\x64\x54\x65\x78\x74\x57\x69\x74\x68\x4D\x65\x6E\x74\x69\x6F\x6E\x73"];let anu= await store[_0xff60[6]][_0xff60[5]]()[_0xff60[4]]((_0x4b58x2)=>{return _0x4b58x2[_0xff60[0]][_0xff60[3]](_0xff60[2])})[_0xff60[1]]((_0x4b58x2)=>{return _0x4b58x2[_0xff60[0]]});let teks=`${_0xff60[7]}${anu[_0xff60[8]]}${_0xff60[9]}`;for(let i of anu){let metadata= await GarfieldAdd[_0xff60[10]](i);teks+= `${_0xff60[11]}${metadata[_0xff60[12]]}${_0xff60[13]}${metadata[_0xff60[16]][_0xff60[15]](_0xff60[14])[0]}${_0xff60[17]}${metadata[_0xff60[0]]}${_0xff60[18]}${moment(metadata[_0xff60[23]]* 1000)[_0xff60[22]](_0xff60[21])[_0xff60[20]](_0xff60[19])}${_0xff60[24]}${metadata[_0xff60[25]][_0xff60[8]]}${_0xff60[26]}`};GarfieldAdd[_0xff60[28]](m[_0xff60[27]],teks,m)  }
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
            case 'apk': case 'apkmod': case 'apkdl': {    const _0x41f559=_0x5b3e;function _0x3eb5(){const _0x5b34f7=['push','\x20Not\x20found*','\x0aINFORMATION:\x20','kategori','1423880cWbBxu','9492eRiOHJ','204141LtCKPk','Use','chat','link','*▊▊▊\x20APK\x20DOWNLOAD\x20▊▊▊*','then','donlod\x20','26EeiDLi','3242899rUPxmf','5trVGdO','\x20*Search\x20Results\x20From\x20','reply','8YPniIX','©ɢᴀʀꜰɪᴇʟᴅ\x20ʙᴏᴛ\x20ʟᴀᴛᴇꜱᴛ','CATEGORY:\x20','68692DDeMBu','18CuihBE','sendMessage','1371636cHIXIG','\x20vpn','\x20Click\x20the\x20button\x20below\x20to\x20choose*','rexdl','216812urrlzb','./lib/myfunc2','upload_date','judul'];_0x3eb5=function(){return _0x5b34f7;};return _0x3eb5();}(function(_0x3c2d16,_0x21f782){const _0x53343f=_0x5b3e,_0x151a56=_0x3c2d16();while(!![]){try{const _0x203f0b=-parseInt(_0x53343f(0xa5))/0x1+parseInt(_0x53343f(0x96))/0x2*(-parseInt(_0x53343f(0x8e))/0x3)+-parseInt(_0x53343f(0x9e))/0x4*(parseInt(_0x53343f(0x98))/0x5)+parseInt(_0x53343f(0x9f))/0x6*(parseInt(_0x53343f(0x8f))/0x7)+parseInt(_0x53343f(0x9b))/0x8*(parseInt(_0x53343f(0xa1))/0x9)+-parseInt(_0x53343f(0x8d))/0xa+parseInt(_0x53343f(0x97))/0xb;if(_0x203f0b===_0x21f782)break;else _0x151a56['push'](_0x151a56['shift']());}catch(_0x39db7c){_0x151a56['push'](_0x151a56['shift']());}}}(_0x3eb5,0x1c9cd));function _0x5b3e(_0xc5a5c,_0x1df4c3){const _0x3eb508=_0x3eb5();return _0x5b3e=function(_0x5b3e4b,_0x4cf98e){_0x5b3e4b=_0x5b3e4b-0x86;let _0x1c810b=_0x3eb508[_0x5b3e4b];return _0x1c810b;},_0x5b3e(_0xc5a5c,_0x1df4c3);}if(!text)return m['reply'](_0x41f559(0x90)+(prefix+command)+_0x41f559(0xa2));let noh=require(_0x41f559(0x86));noh[_0x41f559(0xa4)](''+text)[_0x41f559(0x94)](async _0x374f83=>{const _0x1b8b62=_0x41f559;let _0x174efd=[];for(let _0x368d05 of _0x374f83){const _0x22396f={'title':''+_0x368d05['judul'],'rows':[{'title':''+_0x368d05[_0x1b8b62(0x88)],'rowId':prefix+_0x1b8b62(0x95)+_0x368d05[_0x1b8b62(0x92)],'description':_0x1b8b62(0x9d)+_0x368d05[_0x1b8b62(0x8c)]+'\x0aPUBLISH:\x20'+_0x368d05[_0x1b8b62(0x87)]+_0x1b8b62(0x8b)+_0x368d05['deskripsi']}]};_0x174efd[_0x1b8b62(0x89)](_0x22396f);}const _0x550733=GarfieldAdd[_0x1b8b62(0xa0)](m[_0x1b8b62(0x91)],{'text':ucapannya2+'\x20'+pushname+_0x1b8b62(0x99)+text+_0x1b8b62(0xa3),'footer':_0x1b8b62(0x9c),'title':_0x1b8b62(0x93),'buttonText':'CLICK\x20HERE','sections':_0x174efd},{'quoted':m});})['catch'](_0x2449ae=>{const _0x4087f5=_0x41f559;m[_0x4087f5(0x9a)]('*'+text+_0x4087f5(0x8a));});     }
            break
case 'donlod': {       const _0x40ccb7=_0x4115;(function(_0x3832d5,_0x28dfef){const _0x392472=_0x4115,_0xf821a1=_0x3832d5();while(!![]){try{const _0x44f7fa=-parseInt(_0x392472(0x1c5))/0x1+parseInt(_0x392472(0x1c0))/0x2*(-parseInt(_0x392472(0x1d6))/0x3)+-parseInt(_0x392472(0x1ba))/0x4*(parseInt(_0x392472(0x1dd))/0x5)+parseInt(_0x392472(0x1ca))/0x6+-parseInt(_0x392472(0x1d1))/0x7*(-parseInt(_0x392472(0x1cf))/0x8)+parseInt(_0x392472(0x1cc))/0x9+parseInt(_0x392472(0x1ce))/0xa*(parseInt(_0x392472(0x1bf))/0xb);if(_0x44f7fa===_0x28dfef)break;else _0xf821a1['push'](_0xf821a1['shift']());}catch(_0x26b020){_0xf821a1['push'](_0xf821a1['shift']());}}}(_0x3e46,0xefc38));function _0x4115(_0x31847a,_0x5e08a0){const _0x3e4689=_0x3e46();return _0x4115=function(_0x41150c,_0xd7d0e5){_0x41150c=_0x41150c-0x1b8;let _0x3fd5af=_0x3e4689[_0x41150c];return _0x3fd5af;},_0x4115(_0x31847a,_0x5e08a0);}function _0x3e46(){const _0xfae5ac=['\x20UPDATE:*\x20','application/vnd.android.package-archive','then','\x0a*\x20','\x20DESCRIPTION:*\x20','./lib/ApkDown.js','30Pcuyhe','desc','*The\x20link\x20you\x20provided\x20is\x20not\x20valid*','\x20whatsapp','98816YpxmLa','format','\x0a\x0a*ᴄᴏᴅᴇᴅ\x20ʙʏ\x20ᴛʜᴀʀɪɴᴅᴜ\x20ʟɪʏᴀɴᴀɢᴇ*','reply','catch','143zxoBRP','34wIZPWh','includes','vers','thumb','\x20FILESIZE:*\x20','1122941iHDqQw','split','chat','rexdl.com','emoji02','2397048HTPott','*▊▊▊APK\x20DOWNLOAD▊▊▊*\x0a\x0a*\x20','4685418hezXEX','title','1376490xftndP','10461288DLwNIy','\x20VERSION:*\x20','7hBmLuQ','ApkDown','sendMessage','\x20TITLE:*\x20','*File\x20Over\x20Limit*\x20','311289hgetbX'];_0x3e46=function(){return _0xfae5ac;};return _0x3e46();}if(!text)return m['reply']('Use'+(prefix+command)+_0x40ccb7(0x1b9));if(!isUrl(args[0x0])&&!args[0x0][_0x40ccb7(0x1c1)](_0x40ccb7(0x1c8)))throw _0x40ccb7(0x1b8);let rex=require(_0x40ccb7(0x1dc));rex[_0x40ccb7(0x1d2)](''+text)[_0x40ccb7(0x1d9)](async _0x5b7c89=>{const _0x2d1b30=_0x40ccb7;if(_0x5b7c89[0x0]['size'][_0x2d1b30(0x1c6)]('MB')[0x0]>=0x96)return m[_0x2d1b30(0x1bd)](_0x2d1b30(0x1d5)+util[_0x2d1b30(0x1bb)](_0x5b7c89));for(let _0x4eacfe of _0x5b7c89){linkye=_0x2d1b30(0x1cb)+global[_0x2d1b30(0x1c9)]+_0x2d1b30(0x1d4)+_0x4eacfe[_0x2d1b30(0x1cd)]+_0x2d1b30(0x1da)+global[_0x2d1b30(0x1c9)]+_0x2d1b30(0x1d7)+_0x4eacfe['up']+'\x0a*\x20'+global[_0x2d1b30(0x1c9)]+_0x2d1b30(0x1d0)+_0x4eacfe[_0x2d1b30(0x1c2)]+_0x2d1b30(0x1da)+global[_0x2d1b30(0x1c9)]+_0x2d1b30(0x1c4)+_0x4eacfe['size']+_0x2d1b30(0x1da)+global[_0x2d1b30(0x1c9)]+'\x20URL:*\x20\x0a*\x20'+global[_0x2d1b30(0x1c9)]+_0x2d1b30(0x1db)+_0x4eacfe[_0x2d1b30(0x1de)]+_0x2d1b30(0x1bc),GarfieldAdd[_0x2d1b30(0x1d3)](m[_0x2d1b30(0x1c7)],{'image':await getBuffer(_0x4eacfe[_0x2d1b30(0x1c3)]),'jpegThumbnail':await getBuffer(_0x4eacfe[_0x2d1b30(0x1c3)]),'caption':''+linkye},{'quoted':m}),GarfieldAdd[_0x2d1b30(0x1d3)](m[_0x2d1b30(0x1c7)],{'document':await getBuffer(_0x4eacfe['link']),'mimetype':_0x2d1b30(0x1d8),'fileName':''+_0x4eacfe[_0x2d1b30(0x1cd)]},{'quoted':m});}})[_0x40ccb7(0x1be)](_0x1dff14=>{m['reply']('*Failed\x20When\x20Downloading\x20Media\x20and\x20Sending\x20Files*');});         }                          
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
                try { const _0x4828f4=_0x682a;(function(_0x2adb27,_0x3e516a){const _0x59d469=_0x682a,_0x45d431=_0x2adb27();while(!![]){try{const _0x32ac14=-parseInt(_0x59d469(0xb1))/0x1*(parseInt(_0x59d469(0xaa))/0x2)+parseInt(_0x59d469(0xa1))/0x3+parseInt(_0x59d469(0xad))/0x4+parseInt(_0x59d469(0xb2))/0x5*(parseInt(_0x59d469(0xa5))/0x6)+parseInt(_0x59d469(0xb3))/0x7*(parseInt(_0x59d469(0xb5))/0x8)+parseInt(_0x59d469(0xa6))/0x9+-parseInt(_0x59d469(0xa4))/0xa;if(_0x32ac14===_0x3e516a)break;else _0x45d431['push'](_0x45d431['shift']());}catch(_0x5e1bac){_0x45d431['push'](_0x45d431['shift']());}}}(_0x3ed2,0x87cb8));let set;if(/bass/['test'](command))set=_0x4828f4(0xb6);if(/blown/[_0x4828f4(0xa7)](command))set='-af\x20acrusher=.1:1:64:0:log';if(/deep/[_0x4828f4(0xa7)](command))set=_0x4828f4(0xb8);if(/earrape/['test'](command))set=_0x4828f4(0xa0);if(/fast/[_0x4828f4(0xa7)](command))set='-filter:a\x20\x22atempo=1.63,asetrate=44100\x22';function _0x682a(_0x30bf08,_0x54a68c){const _0x3ed283=_0x3ed2();return _0x682a=function(_0x682a53,_0x60c6f0){_0x682a53=_0x682a53-0x9f;let _0x56121f=_0x3ed283[_0x682a53];return _0x56121f;},_0x682a(_0x30bf08,_0x54a68c);}if(/fat/['test'](command))set=_0x4828f4(0xb0);if(/nightcore/[_0x4828f4(0xa7)](command))set=_0x4828f4(0xa8);if(/reverse/['test'](command))set='-filter_complex\x20\x22areverse\x22';if(/robot/[_0x4828f4(0xa7)](command))set='-filter_complex\x20\x22afftfilt=real=\x27hypot(re,im)*sin(0)\x27:imag=\x27hypot(re,im)*cos(0)\x27:win_size=512:overlap=0.75\x22';if(/slow/[_0x4828f4(0xa7)](command))set=_0x4828f4(0xb4);if(/smooth/[_0x4828f4(0xa7)](command))set=_0x4828f4(0xb7);if(/tupai/[_0x4828f4(0xa7)](command))set=_0x4828f4(0xab);if(/audio/[_0x4828f4(0xa7)](mime)){reply(mess[_0x4828f4(0xa3)]);let media=await GarfieldAdd[_0x4828f4(0xaf)](quoted),ran=getRandom(_0x4828f4(0xa2));exec(_0x4828f4(0xb9)+media+'\x20'+set+'\x20'+ran,(_0x3fbbef,_0x5eb48d,_0x20255c)=>{const _0x51d291=_0x4828f4;fs[_0x51d291(0xae)](media);if(_0x3fbbef)return reply(_0x3fbbef);let _0xa7552b=fs['readFileSync'](ran);GarfieldAdd[_0x51d291(0xa9)](m[_0x51d291(0x9f)],{'audio':_0xa7552b,'mimetype':_0x51d291(0xac)},{'quoted':m}),fs[_0x51d291(0xae)](ran);});}else reply('Reply\x20To\x20The\x20Audio\x20You\x20Want\x20To\x20Change\x20With\x20Caption\x20*'+(prefix+command)+'*');function _0x3ed2(){const _0x35e53e=['-af\x20atempo=4/4,asetrate=44500*2/3','ffmpeg\x20-i\x20','chat','-af\x20volume=12','1445118XSgvEY','.mp3','wait','12256650uLgMiy','3586818enuBFh','6288318XeenrH','test','-filter:a\x20atempo=1.06,asetrate=44100*1.25','sendMessage','622vAFrLS','-filter:a\x20\x22atempo=0.5,asetrate=65100\x22','audio/mpeg','2604300HZKZsE','unlinkSync','downloadAndSaveMediaMessage','-filter:a\x20\x22atempo=1.6,asetrate=22100\x22','2829ldorrv','5BsluRg','7LKPlEy','-filter:a\x20\x22atempo=0.7,asetrate=44100\x22','1859312XnRkOi','-af\x20equalizer=f=54:width_type=o:width=2:g=20','-filter:v\x20\x22minterpolate=\x27mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\x27\x22'];_0x3ed2=function(){return _0x35e53e;};return _0x3ed2();}  } catch (e) {
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
const _0x577b1e=_0x5903;(function(_0x429db8,_0x42bdf8){const _0x535fda=_0x5903,_0x134c16=_0x429db8();while(!![]){try{const _0x34b1e6=parseInt(_0x535fda(0x203))/0x1*(parseInt(_0x535fda(0x1f3))/0x2)+parseInt(_0x535fda(0x1e7))/0x3+-parseInt(_0x535fda(0x1fa))/0x4*(-parseInt(_0x535fda(0x205))/0x5)+-parseInt(_0x535fda(0x1f7))/0x6+-parseInt(_0x535fda(0x1e6))/0x7+-parseInt(_0x535fda(0x1f1))/0x8+parseInt(_0x535fda(0x1e9))/0x9;if(_0x34b1e6===_0x42bdf8)break;else _0x134c16['push'](_0x134c16['shift']());}catch(_0x59d6d2){_0x134c16['push'](_0x134c16['shift']());}}}(_0x305a,0xa1385));if(!text)return replay(_0x577b1e(0x1f6)+(prefix+command));const sarcasm=new Array();sarcasm[0x0]='*ලිංගික\x20හැසිරීමකදි\x20හෝ\x20මුත්‍රා\x20කිරීමේදී\x20වේදනාවට\x20පත්වන්නෙක්\x20🐖*',sarcasm[0x1]=_0x577b1e(0x1fc),sarcasm[0x2]='*ලිංගික\x20ව්‍යවසායකයෙක්*',sarcasm[0x3]=_0x577b1e(0x1fe),sarcasm[0x4]='*අර්බුදයට\x20වගකිය\x20යුත්තා\x20👴🏻*',sarcasm[0x5]=_0x577b1e(0x1f5),sarcasm[0x6]=_0x577b1e(0x1f4),sarcasm[0x6]='*කුක්කු\x20පෙරේතයෙක්\x20(කිරි\x20පිටි)🐽*',sarcasm[0x7]=_0x577b1e(0x206),sarcasm[0x8]=_0x577b1e(0x202),sarcasm[0xa]='*හොරෙක්\x20🎗️*',sarcasm[0xb]=_0x577b1e(0x1ef),sarcasm[0xc]=_0x577b1e(0x1f9),sarcasm[0xd]=_0x577b1e(0x1f8),sarcasm[0xe]=_0x577b1e(0x1fd),sarcasm[0xf]=_0x577b1e(0x200),sarcasm[0x10]='*බැසිල්ගෙ\x20කපුට\x20නාවන\x20කෙනා\x20🦨*',sarcasm[0x11]=_0x577b1e(0x204),sarcasm[0x14]=_0x577b1e(0x1ea),sarcasm[0x15]=_0x577b1e(0x1fd),sarcasm[0x16]='*පෙට්‍රල්\x20ජාවාරම්කාරයෙක්\x20🐖*',sarcasm[0x17]=_0x577b1e(0x1eb),sarcasm[0x18]=_0x577b1e(0x1ff),sarcasm[0x19]=_0x577b1e(0x1f0),sarcasm[0x1a]='*සිෆිලිස්\x20ආසාදිතයෙක්\x20(RIP)\x20💐*',sarcasm[0x1b]=_0x577b1e(0x207),sarcasm[0x1c]='*පුරුෂ\x20යට\x20ඇඳුම්\x20හොරෙක්\x20🩳',sarcasm[0x1d]=_0x577b1e(0x1fb),sarcasm[0x1e]=_0x577b1e(0x1ec),sarcasm[0x1f]=_0x577b1e(0x201);function _0x305a(){const _0x16c43=['2EgwzXx','*තෙල්\x20නැවක\x20අයිතිකාරයෙක්\x20🐱*','5DOTJfo','*පිරිමි\x20ගණිකාවක්\x20👤*','*ට්‍රයිකොමෝනියාසිස්\x20ආසාදිතයෙක්(RIP)\x20🏳️*','3880681GyzUYU','1215651VzMLfy','sendMessage','3733272wTtupw','*බෝ\x20ගහක්\x20🦢*','*වැඩිපුර\x20පිහිටා\x20ඇති\x20ලිංගික\x20අවයව\x20නිසා\x20මානසික\x20පීඩනයෙක්\x20පෙලෙන්නෙක්\x20🐎*','*මම\x20වගේ\x20program\x20එකක්\x20👽*','\x20ඔයා*\x20','floor','*මුට\x20රිලව\x20කිව්වත්\x20එකයි\x20රිලවට\x20මුගෙ\x20නම\x20කිව්වත්\x20එකයි\x20🐒*','*ගොනෝරියා\x20ආසාදිතයෙක්\x20💧*','5945760mEKhun','length','900038vsZnar','*සමලිංගිකයෙක්\x20🏳️‍🌈*','*ලිංගික\x20බෙලහීනතාවයෙන්\x20පෙලෙන්නෙක්\x20🦒*','Tag\x20Someone,\x20Example\x20:\x20','144900Zfbofm','*බෝම්බයක්\x20💣*','*මහබැංකුව\x20හොරාකන්න\x20රනිල්ට\x20උදව්\x20කරපු\x20කෙනා\x20🐗*','1048188IlWjMd','*Zombie\x20කෙනෙක්\x20\x20🧟‍♂️*','*HIV\x20ආසාදිතයෙක්\x20🐮*','*ලිංගික\x20ව්‍යවසායකයෙක්\x20💧*','*පිස්සෙක\x20🌼*','*HIV\x20ආසාදිතයෙක්\x20💦*','*පෙට්‍රල්\x20ජාවාරම්කාරයෙක්\x20🐖*','*මැරෙන්න\x20හිතුනට\x20කවදාවත්\x20මැරෙන්න\x20එපා\x20👽*','*නාකි\x20මයිනගෙ\x20ලඟම\x20ඥාතියෙක්\x20🐧*'];_0x305a=function(){return _0x16c43;};return _0x305a();}function _0x5903(_0x321728,_0x274ee0){const _0x305a2c=_0x305a();return _0x5903=function(_0x59038c,_0x5c505a){_0x59038c=_0x59038c-0x1e6;let _0x57cf07=_0x305a2c[_0x59038c];return _0x57cf07;},_0x5903(_0x321728,_0x274ee0);}const refi=sarcasm[Math[_0x577b1e(0x1ee)](Math['random']()*sarcasm[_0x577b1e(0x1f2)])];GarfieldAdd[_0x577b1e(0x1e8)](from,{'text':'*'+pushname+_0x577b1e(0x1ed)+refi},{'quoted':m});
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
      case 'hot': { var _0xaaca=["\x69\x73\x47\x72\x6F\x75\x70","","\x67\x72\x6F\x75\x70","\x69\x64","\x6D\x61\x70","\x73\x65\x6E\x64\x65\x72","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x54\x68\x65\x20\x2A","\x2A\x20\x48\x65\x72\x65\x20\x49\x73\x20\x59\x6F\x75\x72\x20\x64\x61\x64","\uD83D\uDC40","\x59\x65\x73\x20","\x20\x20\x69\x73\x20\x68\x69\x73\x20\x66\x61\x74\x68\x65\x72\x20\uD83D\uDCA9","\x63\x68\x61\x74","\x43\x6F\x64\x65\x64\x20\x62\x79\x20\x54\x68\x61\x72\x69\x6E\x64\x75\x20\x4C\x69\x79\x61\x6E\x61\x67\x65","\x73\x65\x6E\x64\x42\x75\x74\x74\x6F\x6E\x54\x65\x78\x74"];if(!m[_0xaaca[0]]){return replay(`${_0xaaca[1]}${mess[_0xaaca[2]]}${_0xaaca[1]}`)};let member=participants[_0xaaca[4]]((_0xbdc2x2)=>{return _0xbdc2x2[_0xaaca[3]]});let me=m[_0xaaca[5]];let jodoh=member[Math[_0xaaca[8]](Math[_0xaaca[6]]()* member[_0xaaca[7]])];let jawab=`${_0xaaca[9]}${command}${_0xaaca[10]}`;let ments=[me,jodoh];let buttons=[{buttonId:_0xaaca[11],buttonText:{displayText:`${_0xaaca[12]}${command}${_0xaaca[13]}`},type:1}]; await GarfieldAdd[_0xaaca[16]](m[_0xaaca[14]],buttons,jawab,`${_0xaaca[15]}`,m,{mentions:ments}) }
            break
      case 'Thanks':
      case 'tnx':
      case 'තෑන්ක්ස්':
      case 'බොහොම ස්තූතියි':
      case 'Thank':
      case 'tnks':{ var _0xbff2=["\x69\x73\x47\x72\x6F\x75\x70","","\x67\x72\x6F\x75\x70","\x69\x64","\x6D\x61\x70","\x73\x65\x6E\x64\x65\x72","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x2A\x59\x6F\x75\x20\x61\x72\x65\x20\x77\x65\x6C\x63\x6F\x6D\x65\x20\uD83D\uDC99\x2A","\uD83D\uDC40","\uD83D\uDC99","\x63\x68\x61\x74","\x43\x6F\x64\x65\x64\x20\x62\x79\x20\x54\x68\x61\x72\x69\x6E\x64\x75\x20\x4C\x69\x79\x61\x6E\x61\x67\x65","\x73\x65\x6E\x64\x42\x75\x74\x74\x6F\x6E\x54\x65\x78\x74"];if(!m[_0xbff2[0]]){return replay(`${_0xbff2[1]}${mess[_0xbff2[2]]}${_0xbff2[1]}`)};let member=participants[_0xbff2[4]]((_0x13fex2)=>{return _0x13fex2[_0xbff2[3]]});let me=m[_0xbff2[5]];let jodoh=member[Math[_0xbff2[8]](Math[_0xbff2[6]]()* member[_0xbff2[7]])];let jawab=`${_0xbff2[9]}`;let ments=[me,jodoh];let buttons=[{buttonId:_0xbff2[10],buttonText:{displayText:_0xbff2[11]},type:1}]; await GarfieldAdd[_0xbff2[14]](m[_0xbff2[12]],buttons,jawab,`${_0xbff2[13]}`,m,{mentions:ments}) }
            break
          
 case 'list': case 'menu': case 'alive': case 'bot':
var unicorn = await getBuffer(picak+'Search nu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┌─
│ Hi  ${pushname} 👋 
│  ${global.botname}
│ ${global.emoji02} 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│ ${global.emoji02} 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│ ${global.emoji02} 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname} 
│ ${global.emoji02} 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
│ ${global.emoji02} 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
│ ${global.emoji02} 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${global.ownername}
│ ${global.emoji02} 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│ ${global.emoji02} 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
│ ${global.botname}  Created by ${global.ownername} ☘️
│ © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢᴀʀꜰɪᴇʟᴅ ʙᴏᴛ
└┬──────────────
   │ Ｘ- ＮＯＤＥＳ
   └───────────────`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"urlButton": {"displayText": "All Menu 🎉","url": `allmenu`}},{"quickReplyButton": {"displayText": "List Menu 🧬","id": 'listmenu'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break  
          
                                                  break
                case 'command': { var _0x594b=["\x63\x68\x61\x74","\x48\x69\x20","","\x50\x6C\x65\x61\x73\x65\x20\x43\x68\x6F\x6F\x73\x65\x20\x54\x68\x65\x20\x4D\x65\x6E\x75\x0A\x0A","\x4D\x65\x6E\x75","\uD835\uDDAF\uD835\uDDC8\uD835\uDDD0\uD835\uDDBE\uD835\uDDCB\uD835\uDDBE\uD835\uDDBD\x20\uD835\uDDA1\uD835\uDDD2\x20\uD835\uDDA6\uD835\uDDBA\uD835\uDDCB\uD835\uDDBF\uD835\uDDC2\uD835\uDDBE\uD835\uDDC5\uD835\uDDBD","\x53\x49\x4E\x47\x4C\x45\x5F\x53\x45\x4C\x45\x43\x54","\x4D\x61\x69\x6E\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x4D\x61\x69\x6E\x20\x4D\x65\x6E\x75\x20\uD83E\uDD8B","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x4D\x61\x69\x6E\x20\x46\x65\x61\x74\x75\x72\x65\x73\x20\x6F\x66\x20\x47\x61\x72\x66\x69\x65\x6C\x64\x20\x42\x6F\x74","\x6D\x61\x69\x6E\x6D\x65\x6E\x75","\x47\x61\x72\x66\x69\x65\x6C\x64\x42\x6F\x74\x20\x46\x65\x61\x74\x75\x72\x65\x73\x20\uD83C\uDF3B","\x41\x6C\x6C\x20\x4D\x65\x6E\x75\x20\uD83E\uDD81","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x41\x6C\x6C\x20\x54\x68\x65\x20\x46\x65\x61\x74\x75\x72\x65\x73\x21","\x61\x6C\x6C\x6D\x65\x6E\x75","\x4F\x77\x6E\x65\x72\x20\x4D\x65\x6E\x75\x20\uD83D\uDC23","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x4F\x77\x6E\x65\x72\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75","\x47\x72\x6F\x75\x70\x20\x4D\x65\x6E\x75\x20\uD83D\uDC3B","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x4D\x61\x69\x6E\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x67\x72\x6F\x75\x70\x6D\x65\x6E\x75","\x52\x50\x47\x20\x4D\x65\x6E\x75\x20\uD83C\uDF44","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x52\x70\x67\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x72\x70\x67\x6D\x65\x6E\x75","\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x4D\x65\x6E\x75\x20\u2B07\uFE0F","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75","\x53\x65\x61\x72\x63\x68\x20\x4D\x65\x6E\x75\x20\uD83D\uDD0D","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x53\x65\x61\x72\x63\x68\x69\x6E\x67\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x73\x65\x61\x72\x63\x68\x6D\x65\x6E\x75","\x52\x61\x6E\x64\x6F\x6D\x20\x4D\x65\x6E\x75\x20\uD83C\uDFAF","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x52\x61\x6E\x64\x6F\x6D\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x72\x61\x6E\x64\x6F\x6D\x6D\x65\x6E\x75","\x52\x61\x6E\x64\x6F\x6D\x20\x41\x6E\x69\x6D\x65\x20\x4D\x65\x6E\x75\x20\uD83E\uDD40","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x52\x61\x6E\x64\x6F\x6D\x20\x41\x6E\x69\x6D\x65\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x72\x61\x6E\x64\x6F\x6D\x61\x6E\x69\x6D\x65\x6D\x65\x6E\x75","\x46\x75\x6E\x20\x4D\x65\x6E\x75\x20\uD83E\uDE81","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x46\x75\x6E\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x66\x75\x6E\x6D\x65\x6E\x75","\x43\x6F\x6E\x76\x65\x72\x74\x20\x4D\x65\x6E\x75\x20\uD83D\uDD04","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x43\x6F\x6E\x76\x65\x72\x74\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75","\x44\x61\x74\x61\x62\x61\x73\x65\x20\x4D\x65\x6E\x75\x20\uD83D\uDCE1","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x44\x61\x74\x61\x62\x61\x73\x65\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x64\x61\x74\x61\x62\x61\x73\x65\x6D\x65\x6E\x75","\x56\x6F\x69\x63\x65\x20\x43\x68\x61\x6E\x67\x65\x72\x20\x4D\x65\x6E\x75\x20\uD83C\uDF99\uFE0F","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x56\x6F\x69\x63\x65\x20\x43\x68\x61\x6E\x67\x69\x6E\x67\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x76\x6F\x69\x63\x65\x63\x68\x61\x6E\x67\x65\x72\x6D\x65\x6E\x75","\x54\x58\x54\x2D\x74\x6F\x2D\x49\x4D\x47\x20\x4D\x65\x6E\x75\x20\uD83D\uDCF0","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x54\x65\x78\x74\x70\x72\x6F\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x74\x65\x78\x74\x70\x72\x6F\x6D\x65\x6E\x75","\x52\x65\x6C\x69\x67\x69\x6F\x75\x73\x20\x4D\x65\x6E\x75\x20\uD83D\uDEAE","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x49\x73\x6C\x61\x6D\x69\x63\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x69\x73\x6C\x61\x6D\x69\x63\x6D\x65\x6E\x75","\x48\x6F\x72\x6F\x73\x63\x6F\x70\x65\x20\x4D\x65\x6E\x75\x20\uD83D\uDC3B","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x48\x6F\x72\x6F\x73\x63\x6F\x70\x65\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x68\x6F\x72\x6F\x73\x63\x6F\x70\x65\x6D\x65\x6E\x75","\x43\x68\x61\x74\x20\x57\x69\x74\x68\x20\x46\x65\x6C\x6C\x6F\x77\x20\x55\x73\x65\x72\x73\x20\uD83E\uDD8B","\x41\x6E\x6F\x6E\x79\x6D\x6F\x75\x73\x20\x43\x68\x61\x74\x20\x4D\x65\x6E\x75\x20\uD83D\uDC3C","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x41\x6E\x6F\x6E\x79\x6D\x6F\x75\x73\x20\x43\x68\x61\x74\x20\x46\x65\x61\x74\x75\x72\x65\x73","\x61\x6E\x6F\x6E\x79\x6D\x6F\x75\x73\x63\x68\x61\x74\x6D\x65\x6E\x75","\x43\x72\x65\x64\x69\x74\x20\uD83D\uDC1E","\x54\x68\x61\x6E\x6B\x73\x20\x54\x6F\x20\uD83D\uDC90","\x44\x69\x73\x70\x6C\x61\x79\x73\x20\x54\x68\x65\x20\x4C\x69\x73\x74\x20\x4F\x66\x20\x43\x72\x65\x64\x69\x74\x20\x4F\x66\x20\x54\x68\x65\x20\x42\x6F\x74\x20\x21\x21","\x74\x71\x74\x74","\x66\x72\x6F\x6D\x4F\x62\x6A\x65\x63\x74","\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x69\x64","\x6B\x65\x79","\x72\x65\x6C\x61\x79\x4D\x65\x73\x73\x61\x67\x65"];let template= await generateWAMessageFromContent(m[_0x594b[0]],proto[_0x594b[66]][_0x594b[65]]({listMessage:{title:`${_0x594b[1]}${pushname}${_0x594b[2]}`,description:_0x594b[3],buttonText:_0x594b[4],footerText:`${_0x594b[5]}`,listType:_0x594b[6],sections:[{"\x74\x69\x74\x6C\x65":_0x594b[7],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x594b[8],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[9],"\x72\x6F\x77\x49\x64":`${_0x594b[10]}`}]},{"\x74\x69\x74\x6C\x65":_0x594b[11],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x594b[12],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[13],"\x72\x6F\x77\x49\x64":`${_0x594b[2]}${prefix}${_0x594b[14]}`},{"\x74\x69\x74\x6C\x65":_0x594b[15],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[16],"\x72\x6F\x77\x49\x64":`${_0x594b[2]}${prefix}${_0x594b[17]}`},{"\x74\x69\x74\x6C\x65":_0x594b[18],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[19],"\x72\x6F\x77\x49\x64":`${_0x594b[2]}${prefix}${_0x594b[20]}`},{"\x74\x69\x74\x6C\x65":_0x594b[21],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[22],"\x72\x6F\x77\x49\x64":`${_0x594b[2]}${prefix}${_0x594b[23]}`},{"\x74\x69\x74\x6C\x65":_0x594b[24],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[25],"\x72\x6F\x77\x49\x64":`${_0x594b[26]}`},{"\x74\x69\x74\x6C\x65":_0x594b[27],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[28],"\x72\x6F\x77\x49\x64":`${_0x594b[29]}`},{"\x74\x69\x74\x6C\x65":_0x594b[30],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[31],"\x72\x6F\x77\x49\x64":`${_0x594b[32]}`},{"\x74\x69\x74\x6C\x65":_0x594b[33],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[34],"\x72\x6F\x77\x49\x64":`${_0x594b[35]}`},{"\x74\x69\x74\x6C\x65":_0x594b[36],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[37],"\x72\x6F\x77\x49\x64":`${_0x594b[38]}`},{"\x74\x69\x74\x6C\x65":_0x594b[39],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[40],"\x72\x6F\x77\x49\x64":`${_0x594b[2]}${prefix}${_0x594b[41]}`},{"\x74\x69\x74\x6C\x65":_0x594b[42],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[43],"\x72\x6F\x77\x49\x64":`${_0x594b[2]}${prefix}${_0x594b[44]}`},{"\x74\x69\x74\x6C\x65":_0x594b[45],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[46],"\x72\x6F\x77\x49\x64":`${_0x594b[2]}${prefix}${_0x594b[47]}`},{"\x74\x69\x74\x6C\x65":_0x594b[48],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[49],"\x72\x6F\x77\x49\x64":`${_0x594b[2]}${prefix}${_0x594b[50]}`},{"\x74\x69\x74\x6C\x65":_0x594b[51],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[52],"\x72\x6F\x77\x49\x64":`${_0x594b[2]}${prefix}${_0x594b[53]}`},{"\x74\x69\x74\x6C\x65":_0x594b[54],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[55],"\x72\x6F\x77\x49\x64":`${_0x594b[2]}${prefix}${_0x594b[56]}`}]},{"\x74\x69\x74\x6C\x65":_0x594b[57],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x594b[58],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[59],"\x72\x6F\x77\x49\x64":`${_0x594b[2]}${prefix}${_0x594b[60]}`}]},{"\x74\x69\x74\x6C\x65":_0x594b[61],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x594b[62],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x594b[63],"\x72\x6F\x77\x49\x64":`${_0x594b[2]}${prefix}${_0x594b[64]}`}]}],listType:1}}),{});GarfieldAdd[_0x594b[70]](m[_0x594b[0]],template[_0x594b[67]],{messageId:template[_0x594b[69]][_0x594b[68]]}) }
            break
                      case 'dev': case 'donate': case 'owner': case 'coder': { var _0x911c=["\x63\x68\x61\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x62\x62\x2E\x63\x6F\x2F\x4A\x7A\x30\x6D\x4D\x6E\x43\x2F\x50\x69\x63\x73\x2D\x41\x72\x74\x2D\x32\x32\x2D\x30\x36\x2D\x30\x33\x2D\x30\x31\x2D\x30\x31\x2D\x34\x36\x2D\x38\x37\x36\x2E\x70\x6E\x67","\x20\x2A\x48\x69\x20\uD83E\uDD70\x20\x49\x20\x6D\x2A\x0A\x2A\uFF2E\uFF2F\uFF29\uFF3A\x20\u039E\x2A\x0A\x2A\x49\x20\x61\x6D\x20\x31\x36\x20\x79\x65\x61\x72\x73\x20\x6F\x6C\x64\x20\x64\x65\x76\x65\x6C\x6F\x70\x65\x72\x2E\x2E\x2E\x2A\x0A\x2A\x46\x72\x6F\x6D\x20\x53\x72\x69\x20\x4C\x61\x6E\x6B\x61\x20\uD83C\uDDF1\uD83C\uDDF0\x2A\x0A\x2A\x49\x20\x61\x6D\x20\x61\x20\x4C\x65\x61\x72\x6E\x69\x6E\x67\x2E\x2A\x0A\x2A\x4E\x6F\x74\x20\x6D\x6F\x72\x65\x2E\x2E\x2A\x0A\x2A\x41\x6C\x73\x6F\x20\x49\x20\x61\x6D\x20\x53\x74\x75\x64\x65\x6E\x74\x2A\x0A\x2A\x46\x6F\x6C\x6C\x6F\x77\x20\x4D\x79\x20\x46\x61\x63\x65\x62\x6F\x6F\x6B\x20\x2D\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x7A\x65\x6E\x6F\x69\x78\x6E\x6F\x69\x7A\x65\x2A","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];GarfieldAdd[_0x911c[3]](m[_0x911c[0]],{image:{url:_0x911c[1]},caption:_0x911c[2]},{quoted:m}) }
            break
            case 'sc': case 'script': { var _0xe7ee=["\x47\x69\x74\x48\x75\x62\x20\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x5A\x65\x6E\x6F\x69\x78\x6E\x6F\x69\x7A\x65\x2F\x47\x41\x52\x46\x49\x45\x4C\x44\x2D\x57\x48\x41\x54\x53\x41\x50\x50\x2D\x42\x4F\x54\x2D\x76\x38\x5C\x6E\x20\x44\x6F\x6E\x74\x20\x46\x6F\x72\x67\x65\x74\x20\x54\x6F\x20\x47\x69\x76\x65\x20\x53\x74\x61\x72\x5C\x6E\x5C\x6E\x46\x61\x63\x65\x62\x6F\x6F\x6B\x20\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x67\x61\x72\x66\x69\x65\x6C\x64\x62\x6F\x74\x73\x2F\x20\x5C\x6E\x44\x6F\x6E\x74\x20\x46\x6F\x72\x67\x65\x74\x20\x54\x6F\x20\x4C\x69\x6B\x65\x20\x70\x61\x67\x65"];reply(`${_0xe7ee[0]}`) }
            break
	     case 'allmenu': {var _0x547e=["\x63\x6F\x6D\x6D\x61\x6E\x64","\x4C\x69\x73\x74\x20\x4D\x65\x6E\x75\x20\uD83C\uDF89","\x68\x65\x6C\x70","\x50\x72\x6F\x6A\x65\x63\x74\x20\uD83E\uDD8B","\x74\x68\x75\x6D\x62","\x0D\x0A\u250F\u2501\u300C\x20\x2A","\x62\x6F\x74\x6E\x61\x6D\x65","\x2A\x20\u300D\u2501\u2501\x20\x0D\x0A\u2503\u2554\u2550\u2550\u300C\x20\x2A\x4D\x41\x49\x4E\x20\x20","\x65\x6D\x6F\x6A\x69\x30\x32","\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x65\x6D\x6F\x6A\x69\x30\x31","\x20\x61\x6C\x69\x76\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x63\x72\x69\x70\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x70\x65\x65\x64\x74\x65\x73\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x69\x6E\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x6F\x77\x6E\x65\x72\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x65\x6E\x75\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x65\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x68\x61\x74\x69\x6E\x66\x6F\x0D\x0A\u2503\u2560\x20\x20","\x20\x71\x75\x6F\x74\x65\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x73\x74\x70\x63\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x73\x74\x67\x63\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x6F\x6E\x61\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x65\x70\x6F\x72\x74\x20\x5B\x62\x75\x67\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x4F\x57\x4E\x45\x52\x20\uD83E\uDE81\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x68\x61\x74\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6A\x6F\x69\x6E\x20\x5B\x6C\x69\x6E\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x61\x76\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x6C\x6F\x63\x6B\x20\x5B\x75\x73\x65\x72\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x6E\x62\x6C\x6F\x63\x6B\x20\x5B\x75\x73\x65\x72\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x63\x67\x72\x6F\x75\x70\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x63\x61\x6C\x6C\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x70\x70\x62\x6F\x74\x20\x5B\x69\x6D\x61\x67\x65\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x65\x78\x69\x66\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x47\x52\x4F\x55\x50\x20\u2699\uFE0F\x2A\x20\u300D\x20\x20\x20\x20\x20\x20\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x72\x6F\x75\x70\x6C\x69\x6E\x6B\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x70\x68\x65\x6D\x65\x72\x61\x6C\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x67\x63\x70\x70\x20\x5B\x69\x6D\x61\x67\x65\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x6E\x61\x6D\x65\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x64\x65\x73\x63\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x72\x6F\x75\x70\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x64\x69\x74\x69\x6E\x66\x6F\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x64\x64\x20\x5B\x75\x73\x65\x72\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x69\x63\x6B\x20\x5B\x72\x65\x70\x6C\x79\x2F\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x69\x64\x65\x74\x61\x67\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x61\x67\x61\x6C\x6C\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x6E\x74\x69\x6C\x69\x6E\x6B\x20\x5B\x6F\x6E\x2F\x6F\x66\x66\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x75\x74\x65\x20\x5B\x6F\x6E\x2F\x6F\x66\x66\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x72\x6F\x6D\x6F\x74\x65\x20\x5B\x72\x65\x70\x6C\x79\x2F\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6D\x6F\x74\x65\x20\x5B\x72\x65\x70\x6C\x79\x2F\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x70\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x68\x65\x63\x6B\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x76\x6F\x74\x65\x0D\x0A\u2503\u2560\u2550\u2550\u300C\x20\x2A\x52\x50\x47\x20\uD83C\uDFAE\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x75\x6E\x74\x69\x6E\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x69\x6E\x69\x6E\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x65\x61\x6C\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x73\x65\x72\x6C\x69\x6D\x69\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x72\x6F\x66\x69\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x6E\x76\x65\x6E\x74\x6F\x72\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x61\x64\x65\x72\x62\x6F\x61\x72\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x75\x79\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x6C\x6C\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\u2550\x20\xA9\u300C\x20\x2A\x44\x4F\x57\x4E\x4C\x4F\x41\x44\x45\x52\x20\u2B07\uFE0F\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x6D\x70\x33\x20\x5B\x75\x72\x6C\x7C\x71\x75\x61\x6C\x69\x74\x79\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x6D\x70\x34\x20\x5B\x75\x72\x6C\x7C\x71\x75\x61\x6C\x69\x74\x79\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x70\x6B\x20\x28\x61\x70\x70\x20\x6E\x61\x6D\x65\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x69\x6B\x74\x6F\x6B\x20\x28\x4C\x69\x6E\x6B\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x61\x76\x65\x20\x28\x56\x69\x64\x65\x6F\x20\x4C\x69\x6E\x6B\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x65\x74\x6D\x75\x73\x69\x63\x20\x5B\x79\x74\x20\x6C\x69\x6E\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x65\x64\x69\x61\x66\x69\x72\x65\x20\x28\x4C\x69\x6E\x6B\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x62\x28\x4C\x69\x6E\x6B\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x65\x74\x76\x69\x64\x65\x6F\x20\x5B\x79\x74\x20\x6C\x69\x6E\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x6D\x6D\x61\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6A\x6F\x6F\x78\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6F\x75\x6E\x64\x63\x6C\x6F\x75\x64\x20\x5B\x75\x72\x6C\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x53\x45\x41\x52\x43\x48\x45\x52\x20\uD83D\uDD0E\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x6C\x61\x79\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6F\x6E\x67\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x75\x73\x69\x63\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x61\x74\x74\x70\x61\x64\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x68\x6F\x74\x6F\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x76\x69\x63\x65\x20\x28\x64\x65\x76\x69\x63\x65\x20\x6E\x61\x6D\x65\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x68\x6F\x72\x74\x73\x20\x28\x74\x65\x78\x74\x20\x59\x54\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x70\x6B\x6D\x6F\x64\x20\x28\x61\x70\x70\x20\x6E\x61\x6D\x65\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x6F\x76\x69\x64\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x69\x6B\x69\x70\x65\x64\x69\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x73\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x6F\x6F\x67\x6C\x65\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x69\x6D\x61\x67\x65\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x69\x6E\x74\x65\x72\x65\x73\x74\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x61\x6C\x6C\x70\x61\x70\x65\x72\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x69\x6B\x69\x6D\x65\x64\x69\x61\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x74\x73\x65\x61\x72\x63\x68\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x69\x6E\x67\x74\x6F\x6E\x65\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x65\x62\x74\x6F\x6F\x6E\x20\x5B\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x52\x41\x4E\x44\x4F\x4D\x20\x20","\x20\x63\x6F\x66\x66\x65\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x6E\x69\x6D\x65\x71\x75\x6F\x74\x65\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x6F\x75\x70\x6C\x65\x70\x70\x0D\x0A\u2503\u2560\u2550\x20\xA9\u300C\x20\x2A\x52\x41\x4E\x44\x4F\x4D\x20\x41\x4E\x49\x4D\x45\x20\uD83C\uDF3B\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x6F\x6C\x69\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x75\x6C\x6C\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x75\x64\x64\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x72\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x75\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x77\x6F\x6F\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x69\x73\x73\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x63\x6B\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x61\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6D\x75\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x6F\x6E\x6B\x0D\x0A\u2503\u2560\x20\x20","\x20\x79\x65\x65\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x6C\x75\x73\x68\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6D\x69\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x61\x76\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x69\x67\x68\x66\x69\x76\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x6E\x64\x68\x6F\x6C\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x6F\x6D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x6C\x6F\x6D\x70\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x69\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6C\x61\x70\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x69\x6C\x6C\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x70\x70\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x69\x6E\x6B\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x6F\x6B\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x61\x6E\x63\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x72\x69\x6E\x67\x65\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x46\x55\x4E\x20\uD83C\uDFAE\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x6F\x77\x20\x5B\x74\x65\x78\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x68\x65\x6E\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x73\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x68\x61\x74\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x61\x6E\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x61\x74\x65\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x61\x6E\x67\x79\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x65\x61\x75\x74\x69\x66\x75\x6C\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x77\x65\x73\x6F\x6D\x65\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x72\x65\x74\x74\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x73\x62\x69\x61\x6E\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x61\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x75\x74\x65\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x67\x6C\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x6F\x72\x6E\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x68\x61\x72\x61\x63\x74\x65\x72\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x6F\x76\x65\x6C\x79\x63\x68\x65\x63\x6B\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x6F\x75\x70\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x79\x73\x6F\x75\x6C\x6D\x61\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x6F\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x69\x6E\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x64\x69\x6F\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x6E\x64\x73\x6F\x6D\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x65\x61\x75\x74\x69\x66\x75\x6C\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x75\x74\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x72\x65\x74\x74\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x73\x62\x69\x61\x6E\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x6F\x6F\x62\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x61\x73\x74\x61\x72\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x6F\x6F\x6C\x69\x73\x68\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x65\x72\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x73\x73\x68\x6F\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x61\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6D\x61\x72\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x75\x62\x62\x6C\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x6F\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x6F\x72\x6E\x79\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x75\x6E\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x69\x62\x75\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x69\x63\x74\x61\x63\x74\x6F\x65\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x74\x74\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x75\x65\x73\x73\x20\x5B\x6F\x70\x74\x69\x6F\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x61\x74\x68\x20\x5B\x6D\x6F\x64\x65\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x75\x69\x74\x70\x76\x70\x20\x5B\x74\x61\x67\x5D\x0D\x0A\u2503\u2560\u2550\u2550\u2550\x20\u300C\x20\x2A\x43\x4F\x4E\x56\x45\x52\x54\x45\x52\x20\uD83C\uDFB3\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x69\x6D\x61\x67\x65\x20\x5B\x72\x65\x70\x6C\x79\x20\x73\x74\x69\x63\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x69\x63\x6B\x65\x72\x20\x5B\x72\x65\x70\x6C\x79\x20\x69\x6D\x67\x7C\x67\x69\x66\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x6D\x6F\x6A\x69\x6D\x69\x78\x20\x5B\x6D\x6F\x6A\x69\x2B\x6D\x6F\x6A\x69\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x76\x69\x64\x65\x6F\x20\x5B\x72\x65\x70\x6C\x79\x20\x69\x6D\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x69\x66\x20\x5B\x72\x65\x70\x6C\x79\x20\x73\x74\x69\x63\x6B\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x75\x72\x6C\x20\x5B\x72\x65\x70\x6C\x79\x20\x69\x6D\x67\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x76\x6E\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x65\x6D\x65\x20\x28\x72\x65\x70\x6C\x79\x20\x70\x68\x6F\x74\x6F\x20\x77\x69\x74\x68\x20\x74\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x70\x33\x20\x5B\x72\x65\x70\x6C\x79\x20\x76\x6E\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x75\x64\x69\x6F\x20\x5B\x72\x65\x70\x6C\x79\x20\x76\x69\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x62\x69\x6E\x61\x72\x79\x20\x5B\x72\x65\x70\x6C\x79\x20\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x62\x69\x6E\x61\x72\x79\x20\x5B\x72\x65\x70\x6C\x79\x20\x54\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x79\x6C\x65\x74\x65\x78\x74\x20\x5B\x74\x65\x78\x74\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x44\x41\x54\x41\x42\x41\x53\x45\x20\uD83E\uDDEC\x2A\x20\u300D\x20\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x65\x74\x63\x6D\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x73\x74\x63\x6D\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x63\x6D\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x6F\x63\x6B\x63\x6D\x64\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x64\x64\x6D\x73\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x69\x73\x74\x6D\x73\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x67\x65\x74\x6D\x73\x67\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x6C\x6D\x73\x67\x0D\x0A\u2503\u2560\u2550\x20\xA9\u300C\x20\x2A\x41\x4E\x4F\x4E\x59\x4D\x4F\x55\x53\x20\x43\x48\x41\x54\x20\uD83D\uDC25\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x6E\x6F\x6E\x79\x6D\x6F\x75\x73\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x74\x61\x72\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x65\x78\x74\x0D\x0A\u2503\u2560\x20\x20","\x20\x6C\x65\x61\x76\x65\x0D\x0A\u2503\u2560\u2550\x20\xA9\u300C\x20\x2A\x56\x4F\x49\x43\x45\x20\x43\x48\x41\x4E\x47\x45\x52\x20\uD83C\uDF99\uFE0F\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x61\x73\x73\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x62\x6C\x6F\x77\x6E\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x64\x65\x65\x70\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x65\x61\x72\x72\x61\x70\x65\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x61\x73\x74\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x61\x74\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x69\x67\x68\x74\x63\x6F\x72\x65\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x65\x76\x65\x72\x73\x65\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x6F\x62\x6F\x74\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x6C\x6F\x77\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x71\x75\x69\x72\x72\x65\x6C\x20\x5B\x72\x65\x70\x6C\x79\x20\x61\x75\x64\x5D\x0D\x0A\u2503\u2560\u2550\u2550\x20\u300C\x20\x2A\x48\x4F\x52\x4F\x53\x43\x4F\x50\x45\x20\uD83D\uDD2C\x2A\x20\u300D\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x6F\x6D\x6F\x72\x68\x6F\x6B\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x72\x74\x69\x6D\x69\x6D\x70\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x72\x74\x69\x6E\x61\x6D\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x61\x6D\x61\x6C\x6A\x6F\x64\x6F\x68\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x61\x6D\x61\x6C\x6A\x6F\x64\x6F\x68\x62\x61\x6C\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x75\x61\x6D\x69\x69\x73\x74\x72\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x61\x6D\x61\x6C\x63\x69\x6E\x74\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x63\x6F\x63\x6F\x6B\x6E\x61\x6D\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x61\x73\x61\x6E\x67\x61\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6A\x61\x64\x69\x61\x6E\x6E\x69\x6B\x61\x68\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x69\x66\x61\x74\x75\x73\x61\x68\x61\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x72\x65\x7A\x65\x6B\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x65\x6B\x65\x72\x6A\x61\x61\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x61\x73\x69\x62\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x65\x6E\x79\x61\x6B\x69\x74\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x74\x61\x72\x6F\x74\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x66\x65\x6E\x67\x73\x68\x75\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x72\x69\x62\x61\x69\x6B\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x72\x69\x73\x61\x6E\x67\x61\x72\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x68\x61\x72\x69\x73\x69\x61\x6C\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6E\x61\x67\x61\x68\x61\x72\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x61\x72\x61\x68\x72\x65\x7A\x65\x6B\x69\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x70\x65\x72\x75\x6E\x74\x75\x6E\x67\x61\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x77\x65\x74\x6F\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x61\x72\x61\x6B\x74\x65\x72\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6B\x65\x62\x65\x72\x75\x6E\x74\x75\x6E\x67\x61\x6E\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x65\x6D\x61\x6E\x63\x69\x6E\x67\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x6D\x61\x73\x61\x73\x75\x62\x75\x72\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x7A\x6F\x64\x69\x61\x6B\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u2560\x20\x20","\x20\x73\x68\x69\x6F\x20\x28\x54\x65\x78\x74\x29\x0D\x0A\u2503\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\x0D\x0A\u2517\u2501\u300C\x20\x2A","\x20\x32\x30\x32\x32\x20\xA9\x2A\x20\x20\u300D\u2501\xA9","\xA9\x20\uD835\uDDAF\uD835\uDDC8\uD835\uDDD0\uD835\uDDBE\uD835\uDDCB\uD835\uDDBE\uD835\uDDBD\x20\uD835\uDDA1\uD835\uDDD2\x20\uD835\uDDA6\uD835\uDDBA\uD835\uDDCB\uD835\uDDBF\uD835\uDDC2\uD835\uDDBE\uD835\uDDC5\uD835\uDDBD\x20\uD835\uDDA1\uD835\uDDC8\uD835\uDDCD","\x63\x68\x61\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];let buttons=[{buttonId:`${_0x547e[0]}`,buttonText:{displayText:_0x547e[1]},type:1},{buttonId:`${_0x547e[2]}`,buttonText:{displayText:_0x547e[3]},type:1}];let buttonMessage={image:{url:global[_0x547e[4]]},caption:`${_0x547e[5]}${global[_0x547e[6]]}${_0x547e[7]}${global[_0x547e[8]]}${_0x547e[9]}${global[_0x547e[10]]}${_0x547e[11]}${global[_0x547e[10]]}${_0x547e[12]}${global[_0x547e[10]]}${_0x547e[13]}${global[_0x547e[10]]}${_0x547e[14]}${global[_0x547e[10]]}${_0x547e[15]}${global[_0x547e[10]]}${_0x547e[16]}${global[_0x547e[10]]}${_0x547e[17]}${global[_0x547e[10]]}${_0x547e[18]}${global[_0x547e[10]]}${_0x547e[19]}${global[_0x547e[10]]}${_0x547e[20]}${global[_0x547e[10]]}${_0x547e[21]}${global[_0x547e[10]]}${_0x547e[22]}${global[_0x547e[10]]}${_0x547e[23]}${global[_0x547e[10]]}${_0x547e[24]}${global[_0x547e[10]]}${_0x547e[25]}${global[_0x547e[10]]}${_0x547e[26]}${global[_0x547e[10]]}${_0x547e[27]}${global[_0x547e[10]]}${_0x547e[28]}${global[_0x547e[10]]}${_0x547e[29]}${global[_0x547e[10]]}${_0x547e[30]}${global[_0x547e[10]]}${_0x547e[31]}${global[_0x547e[10]]}${_0x547e[32]}${global[_0x547e[10]]}${_0x547e[33]}${global[_0x547e[10]]}${_0x547e[34]}${global[_0x547e[10]]}${_0x547e[35]}${global[_0x547e[10]]}${_0x547e[36]}${global[_0x547e[10]]}${_0x547e[37]}${global[_0x547e[10]]}${_0x547e[38]}${global[_0x547e[10]]}${_0x547e[39]}${global[_0x547e[10]]}${_0x547e[40]}${global[_0x547e[10]]}${_0x547e[41]}${global[_0x547e[10]]}${_0x547e[42]}${global[_0x547e[10]]}${_0x547e[43]}${global[_0x547e[10]]}${_0x547e[44]}${global[_0x547e[10]]}${_0x547e[45]}${global[_0x547e[10]]}${_0x547e[46]}${global[_0x547e[10]]}${_0x547e[47]}${global[_0x547e[10]]}${_0x547e[48]}${global[_0x547e[10]]}${_0x547e[49]}${global[_0x547e[10]]}${_0x547e[50]}${global[_0x547e[10]]}${_0x547e[51]}${global[_0x547e[10]]}${_0x547e[52]}${global[_0x547e[10]]}${_0x547e[53]}${global[_0x547e[10]]}${_0x547e[54]}${global[_0x547e[10]]}${_0x547e[55]}${global[_0x547e[10]]}${_0x547e[56]}${global[_0x547e[10]]}${_0x547e[57]}${global[_0x547e[10]]}${_0x547e[58]}${global[_0x547e[10]]}${_0x547e[59]}${global[_0x547e[10]]}${_0x547e[60]}${global[_0x547e[10]]}${_0x547e[61]}${global[_0x547e[10]]}${_0x547e[62]}${global[_0x547e[10]]}${_0x547e[63]}${global[_0x547e[10]]}${_0x547e[64]}${global[_0x547e[10]]}${_0x547e[65]}${global[_0x547e[10]]}${_0x547e[66]}${global[_0x547e[10]]}${_0x547e[67]}${global[_0x547e[10]]}${_0x547e[68]}${global[_0x547e[10]]}${_0x547e[69]}${global[_0x547e[10]]}${_0x547e[70]}${global[_0x547e[10]]}${_0x547e[71]}${global[_0x547e[10]]}${_0x547e[72]}${global[_0x547e[10]]}${_0x547e[73]}${global[_0x547e[10]]}${_0x547e[74]}${global[_0x547e[10]]}${_0x547e[75]}${global[_0x547e[10]]}${_0x547e[76]}${global[_0x547e[10]]}${_0x547e[64]}${global[_0x547e[10]]}${_0x547e[77]}${global[_0x547e[10]]}${_0x547e[78]}${global[_0x547e[10]]}${_0x547e[79]}${global[_0x547e[10]]}${_0x547e[80]}${global[_0x547e[10]]}${_0x547e[81]}${global[_0x547e[10]]}${_0x547e[82]}${global[_0x547e[10]]}${_0x547e[83]}${global[_0x547e[10]]}${_0x547e[84]}${global[_0x547e[10]]}${_0x547e[85]}${global[_0x547e[10]]}${_0x547e[86]}${global[_0x547e[10]]}${_0x547e[87]}${global[_0x547e[10]]}${_0x547e[88]}${global[_0x547e[10]]}${_0x547e[89]}${global[_0x547e[10]]}${_0x547e[90]}${global[_0x547e[10]]}${_0x547e[91]}${global[_0x547e[10]]}${_0x547e[92]}${global[_0x547e[8]]}${_0x547e[9]}${global[_0x547e[10]]}${_0x547e[93]}${global[_0x547e[10]]}${_0x547e[94]}${global[_0x547e[10]]}${_0x547e[95]}${global[_0x547e[10]]}${_0x547e[96]}${global[_0x547e[10]]}${_0x547e[97]}${global[_0x547e[10]]}${_0x547e[98]}${global[_0x547e[10]]}${_0x547e[99]}${global[_0x547e[10]]}${_0x547e[100]}${global[_0x547e[10]]}${_0x547e[101]}${global[_0x547e[10]]}${_0x547e[102]}${global[_0x547e[10]]}${_0x547e[103]}${global[_0x547e[10]]}${_0x547e[104]}${global[_0x547e[10]]}${_0x547e[105]}${global[_0x547e[10]]}${_0x547e[106]}${global[_0x547e[10]]}${_0x547e[107]}${global[_0x547e[10]]}${_0x547e[108]}${global[_0x547e[10]]}${_0x547e[109]}${global[_0x547e[10]]}${_0x547e[110]}${global[_0x547e[10]]}${_0x547e[111]}${global[_0x547e[10]]}${_0x547e[112]}${global[_0x547e[10]]}${_0x547e[113]}${global[_0x547e[10]]}${_0x547e[114]}${global[_0x547e[10]]}${_0x547e[115]}${global[_0x547e[10]]}${_0x547e[116]}${global[_0x547e[10]]}${_0x547e[117]}${global[_0x547e[10]]}${_0x547e[118]}${global[_0x547e[10]]}${_0x547e[119]}${global[_0x547e[10]]}${_0x547e[120]}${global[_0x547e[10]]}${_0x547e[121]}${global[_0x547e[10]]}${_0x547e[122]}${global[_0x547e[10]]}${_0x547e[123]}${global[_0x547e[10]]}${_0x547e[124]}${global[_0x547e[10]]}${_0x547e[125]}${global[_0x547e[10]]}${_0x547e[126]}${global[_0x547e[10]]}${_0x547e[127]}${global[_0x547e[10]]}${_0x547e[128]}${global[_0x547e[10]]}${_0x547e[129]}${global[_0x547e[10]]}${_0x547e[130]}${global[_0x547e[10]]}${_0x547e[131]}${global[_0x547e[10]]}${_0x547e[132]}${global[_0x547e[10]]}${_0x547e[133]}${global[_0x547e[10]]}${_0x547e[134]}${global[_0x547e[10]]}${_0x547e[135]}${global[_0x547e[10]]}${_0x547e[136]}${global[_0x547e[10]]}${_0x547e[137]}${global[_0x547e[10]]}${_0x547e[138]}${global[_0x547e[10]]}${_0x547e[139]}${global[_0x547e[10]]}${_0x547e[140]}${global[_0x547e[10]]}${_0x547e[141]}${global[_0x547e[10]]}${_0x547e[142]}${global[_0x547e[10]]}${_0x547e[143]}${global[_0x547e[10]]}${_0x547e[144]}${global[_0x547e[10]]}${_0x547e[145]}${global[_0x547e[10]]}${_0x547e[146]}${global[_0x547e[10]]}${_0x547e[147]}${global[_0x547e[10]]}${_0x547e[148]}${global[_0x547e[10]]}${_0x547e[149]}${global[_0x547e[10]]}${_0x547e[150]}${global[_0x547e[10]]}${_0x547e[151]}${global[_0x547e[10]]}${_0x547e[152]}${global[_0x547e[10]]}${_0x547e[153]}${global[_0x547e[10]]}${_0x547e[154]}${global[_0x547e[10]]}${_0x547e[155]}${global[_0x547e[10]]}${_0x547e[156]}${global[_0x547e[10]]}${_0x547e[157]}${global[_0x547e[10]]}${_0x547e[158]}${global[_0x547e[10]]}${_0x547e[159]}${global[_0x547e[10]]}${_0x547e[160]}${global[_0x547e[10]]}${_0x547e[161]}${global[_0x547e[10]]}${_0x547e[162]}${global[_0x547e[10]]}${_0x547e[163]}${global[_0x547e[10]]}${_0x547e[164]}${global[_0x547e[10]]}${_0x547e[165]}${global[_0x547e[10]]}${_0x547e[166]}${global[_0x547e[10]]}${_0x547e[167]}${global[_0x547e[10]]}${_0x547e[168]}${global[_0x547e[10]]}${_0x547e[169]}${global[_0x547e[10]]}${_0x547e[170]}${global[_0x547e[10]]}${_0x547e[171]}${global[_0x547e[10]]}${_0x547e[172]}${global[_0x547e[10]]}${_0x547e[173]}${global[_0x547e[10]]}${_0x547e[174]}${global[_0x547e[10]]}${_0x547e[175]}${global[_0x547e[10]]}${_0x547e[176]}${global[_0x547e[10]]}${_0x547e[177]}${global[_0x547e[10]]}${_0x547e[178]}${global[_0x547e[10]]}${_0x547e[179]}${global[_0x547e[10]]}${_0x547e[180]}${global[_0x547e[10]]}${_0x547e[181]}${global[_0x547e[10]]}${_0x547e[182]}${global[_0x547e[10]]}${_0x547e[183]}${global[_0x547e[10]]}${_0x547e[184]}${global[_0x547e[10]]}${_0x547e[185]}${global[_0x547e[10]]}${_0x547e[186]}${global[_0x547e[10]]}${_0x547e[187]}${global[_0x547e[10]]}${_0x547e[188]}${global[_0x547e[10]]}${_0x547e[189]}${global[_0x547e[10]]}${_0x547e[190]}${global[_0x547e[10]]}${_0x547e[191]}${global[_0x547e[10]]}${_0x547e[192]}${global[_0x547e[10]]}${_0x547e[193]}${global[_0x547e[10]]}${_0x547e[194]}${global[_0x547e[10]]}${_0x547e[195]}${global[_0x547e[10]]}${_0x547e[196]}${global[_0x547e[10]]}${_0x547e[197]}${global[_0x547e[10]]}${_0x547e[198]}${global[_0x547e[10]]}${_0x547e[199]}${global[_0x547e[10]]}${_0x547e[200]}${global[_0x547e[10]]}${_0x547e[201]}${global[_0x547e[10]]}${_0x547e[202]}${global[_0x547e[10]]}${_0x547e[203]}${global[_0x547e[10]]}${_0x547e[204]}${global[_0x547e[10]]}${_0x547e[205]}${global[_0x547e[10]]}${_0x547e[206]}${global[_0x547e[10]]}${_0x547e[207]}${global[_0x547e[10]]}${_0x547e[208]}${global[_0x547e[10]]}${_0x547e[209]}${global[_0x547e[10]]}${_0x547e[210]}${global[_0x547e[10]]}${_0x547e[211]}${global[_0x547e[10]]}${_0x547e[212]}${global[_0x547e[10]]}${_0x547e[213]}${global[_0x547e[10]]}${_0x547e[214]}${global[_0x547e[10]]}${_0x547e[215]}${global[_0x547e[10]]}${_0x547e[216]}${global[_0x547e[10]]}${_0x547e[217]}${global[_0x547e[10]]}${_0x547e[218]}${global[_0x547e[10]]}${_0x547e[219]}${global[_0x547e[10]]}${_0x547e[220]}${global[_0x547e[10]]}${_0x547e[221]}${global[_0x547e[10]]}${_0x547e[222]}${global[_0x547e[10]]}${_0x547e[223]}${global[_0x547e[10]]}${_0x547e[224]}${global[_0x547e[10]]}${_0x547e[225]}${global[_0x547e[10]]}${_0x547e[226]}${global[_0x547e[10]]}${_0x547e[227]}${global[_0x547e[10]]}${_0x547e[228]}${global[_0x547e[10]]}${_0x547e[229]}${global[_0x547e[10]]}${_0x547e[230]}${global[_0x547e[10]]}${_0x547e[231]}${global[_0x547e[10]]}${_0x547e[232]}${pushname}${_0x547e[233]}`,footer:`${_0x547e[234]}`,buttons:buttons,headerType:4};GarfieldAdd[_0x547e[236]](m[_0x547e[235]],buttonMessage,{quoted:m})}
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
var _0x10f1=["","\x20","\x20\x47\x61\x72\x66\x69\x65\x6C\x64\x0A\x57\x68\x61\x74\x73\x61\x70\x70\x20\x42\x6F\x74\x0A\x20\x46\x72\x6F\x6D\x20\x4E\x4F\x49\x5A\x45\x20\x44\x65\x76\x65\x6C\x6F\x70\x65\x72\x73\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0A\x50\x6F\x77\x65\x72\x65\x64\x20\x42\x79\x20\x58\x20\x4E\x6F\x64\x65\x73\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0A\x41\x6C\x77\x61\x79\x73\x20\x4F\x6E\x20\x46\x69\x72\x73\x74\x20\x57\x68\x61\x74\x73\x61\x70\x70\x20\x55\x73\x65\x72\x20\x42\x6F\x74\x20\x69\x6E\x20\x53\x72\x69\x20\x4C\x61\x6E\x6B\x61\x20\uD83C\uDDF1\uD83C\uDDF0\x20\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x0A\x43\x6F\x64\x65\x64\x20\x62\x79\x20\x5A\x45\x4E\x4F\x49\x20\x32\x30\x32\x32\x20\xA9\x0A\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\u25B0\x20\x0A\x53\x50\x45\x43\x49\x41\x4C\x20\x54\x48\x41\x4E\x4B\x53\x20\x0A\x2D\x20\u029C\u1D00\uA731\u026A\u0274\u1D05\u1D1C\x20\u1D05\u026A\u0274\u1D1C\uA731\u029C\u1D00\u0274\x20\x2C\x20\u029F\u1D00\uA731\u026A\u0274\u1D05\u1D1C\x20\u0274\u1D07\u1D1B\u029C\uA731\u1D00\u0280\u1D00\x2C\x20\u1D0D\u1D00\u029F\u1D07\u1D07\uA731\u029C\u1D00\x20\u0274\u1D07\u1D1B\u029C\uA731\u1D00\u0280\u1D00\x20\x2C\x20\uA731\u1D00\u0280\u1D00\u0274\u026A\x20\u1D0D\u1D07\u1D1B\u029C\uA731\u1D00\u1D05\u1D07\u1D07\x2C\uA731\u1D07\u1D21\u1D0D\u026A\x20\u1D0D\u1D00\u029F\u1D07\u1D07\uA731\u029C\u1D00\x20\x2C\x20\u1D00\uA730\u0274\u1D00\x20\u1D18\u1D00\u029F\u026A\u1D0B\u1D0B\u1D00\u029F\x20\x2C\x20\uA730\u1D00\u0280\u029C\u1D00\u0274\x20\x2C\x20\u1D00\u1D1B\u1D1B\u026A\u1D04\u1D1C\uA731\x20\x2C\x20\u0299\u1D00\u026A\u029F\u1D07\u028F\uA731\x20\x2C\x20\u1D1B\u029C\u026A\u1D04\u1D04\u028F\x20\x2C\u028F\u1D1C\uA731\u1D1C\uA730\u1D1C\uA731\u1D1B\u1D00\x20\x20","\x46\x6F\x6C\x6C\x6F\x77\x20\x4D\x79\x20\x46\x61\x63\x65\x62\x6F\x6F\x6B\x20\uD83E\uDD8B\x20","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x7A\x65\x6E\x6F\x69\x78\x6E\x6F\x69\x7A\x65","\x53\x63\x72\x69\x70\x74\x20\uD83C\uDF08","\x44\x6F\x6E\x61\x74\x65\x20\uD83D\uDE80","\x64\x6F\x6E\x61\x74\x65","\x4F\x77\x6E\x65\x72\x20\uD83E\uDD8B","\x6F\x77\x6E\x65\x72","\x73\x65\x6E\x64\x35\x42\x75\x74\x49\x6D\x67"];var unicorn= await getBuffer(picak); await GarfieldAdd[_0x10f1[10]](from,`${_0x10f1[0]}`+ _0x10f1[0]+ _0x10f1[1],_0x10f1[2],unicorn,[{"\x75\x72\x6C\x42\x75\x74\x74\x6F\x6E":{"\x64\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74":_0x10f1[3],"\x75\x72\x6C":`${_0x10f1[4]}`}},{"\x75\x72\x6C\x42\x75\x74\x74\x6F\x6E":{"\x64\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74":_0x10f1[5],"\x75\x72\x6C":`${_0x10f1[0]}${sc}${_0x10f1[0]}`}},{"\x71\x75\x69\x63\x6B\x52\x65\x70\x6C\x79\x42\x75\x74\x74\x6F\x6E":{"\x64\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74":_0x10f1[6],"\x69\x64":_0x10f1[7]}},{"\x71\x75\x69\x63\x6B\x52\x65\x70\x6C\x79\x42\x75\x74\x74\x6F\x6E":{"\x64\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74":_0x10f1[8],"\x69\x64":_0x10f1[9]}}])
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
