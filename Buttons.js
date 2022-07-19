//Coded by Tharindu Liyanage
// Edit This File
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons
// 👈 You Can change this your choice
garfieldbutton.list = ('List Menu 🧬')
garfieldbutton.allmenu = ('All Menu 🎉')
garfieldbutton.script = ('Script 🌈')
garfieldbutton.owner = ('Owner 🦋')
garfieldbutton.deploy = ('Deploy 🐥')
garfieldbutton.project = ('Project 🦋')
garfieldbutton.donate = ('Donate 🚀')
garfieldbutton.stop = ('Stop 🛑')
garfieldbutton.skip = ('Skip ⏩')
garfieldbutton.thanks = ('*You are welcome 💙*')
// 👈 You Can change this your choice
garfieldbutton.nextimg = ('Next Image ➡️')
garfieldbutton.audio = ('🎶 Audio')
garfieldbutton.video = ('Video 📽')
garfieldbutton.yts = ('YTSEARCH 🌐')
garfieldbutton.play = ('Start 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
