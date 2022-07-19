//Coded by Tharindu Liyanage
// Edit This File
// 👈 You Can change this your choice
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
menu.main = `
┌─
│ Hi  ${pushname} 👋 
│ ${global.botname}
│ ${global.emoji02} 𝗦𝗽𝗲𝗲𝗱 : 0.00117 miliseconds
│ ${global.emoji02} 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│ ${global.emoji02} 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname} 
│ ${global.emoji02} 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
│ ${global.emoji02} 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
│ ${global.emoji02} 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${global.ownername}
│ ${global.emoji02} 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│ ${global.emoji02} 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
│ ️${global.botname}  Created by ${global.ownername}  🪁
│  𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽 𝖡𝗈𝗍 v8.3                   
└┬──────────────
   │ Ｘ- ＮＯＤＥＳ
   └───────────────`
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
