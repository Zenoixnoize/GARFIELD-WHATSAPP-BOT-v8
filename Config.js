/*COPYRIGHT (C) 2022 CODED BY NOIZE */
// Set this up the way you want it
const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz', //Do not change
}

global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01',  // Do not change
}
global.owner = ["+94711502119"] //👈  Enter Your number)
global.premium = ["+94711502119"] // 👈  Enter Your number)
global.emoji01 = ["🐼"] // 👈 Enter your Emoji 
global.emoji02 = ["🦋"] //👈 Enter your Emoji
global.ownernomer = [+94711502119] //👈 Enter Your number
global.ownername = ["ZENOI"] //👈 Enter Your name
global.botname = ["ＧＡＲ ＦＩＥＬＤ ＢＯＴ ｖ8.2"] //👈 Enter Your Bot name
global.footer = ["Coded by Tharindu Liyanage"] //👈 Enter Your Name
global.ig = ["https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8"]
global.region = ["India"] // 👈 Enter Your country
global.sc = ["https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8"]
global.myweb = ["https://www.facebook.com/garfieldbots/"] // 👈 Enter your Social media link to follow now button
global.packname = ["GARFIELD-BOTv8"]  // 👈 You Can change this your choice 
global.author = ["NOIZE DEVELOPMENT"] // 👈 You Can change this your choice 
global.sessionName = 'session'  // 👈 You Can change this your choice 
global.prefa = ['','!','.']  // 👈 You Can change this your choice 
global.sp = ['ZENOI']  // 👈 You Can change this your choice 
global.mess = {
    success: ["Done 🐼"], //👈 Use these in your language of choice
    admin: ["This Feature Is Only For Admin!"], // 👈 Use these in your language of choice
    botAdmin: ["Bot Must Be Admin First!"], // 👈 Use these in your language of choice
    owner: ["This Feature Is Only For Owner!"], // 👈 Use these in your language of choice
    group: ["Feature Used Only For Groups!"], //👈 Use these in your language of choice
    private: ["Features Used Only For Private Chat!"], // 👈 Use these in your language of choice
    bot: ["This Feature Is Only For Bot"], //👈 Use these in your language of choice
    wait: ["```Please Wait 🐼```"], // 👈 Use these in your language of choice
    error: ["Error! Maybe Api Key Is Expired 🐼!"], // 👈 Use these in your language of choice
    endLimit: ["Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours"],
}
    global.limitawal = { 
    premium: "Infinity",
    free: "infinity",
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}  
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' 
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.flaming = 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' //Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.fluming = 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' //Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.flarun = 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' //Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.flasmurf = 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' //Go to https://imgbb.com/, upload a photo of your choice and put its link here

// Do not change 👇 

global.limitAwal =  "99999999999999999",  //Do not Change 🚫
global.lolkey =  "835641f3d2d1b6971e1fd132", //Do not Change 🚫
global.xteam =  "apivproject", //Do not Change 🚫
global.xcodeapi =  "5S3epf7hC2", //Do not Change 🚫
global.dapaapi =  "piceg", //Do not Change 🚫
global.sankey =  "sanuwa", //Do not Change 🚫
global.xteamkey =  "nandowangy", //Do not Change 🚫
global.carkey =  "cakrayp24Q6", //Do not Change 🚫
global.violkey =  "beta", //Do not Change 🚫
global.HunterApi =  "FuckBitch", //Do not Change 🚫
global.neokey =  "V8qnSaTq", //Do not Change 🚫
global.riy =  "RiyGanz" //Do not Change 🚫

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
