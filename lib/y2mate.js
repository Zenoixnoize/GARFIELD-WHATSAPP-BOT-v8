//Coded by Tharindu Liyanage
//Coded by Tharindu Liyanage
//Coded by Tharindu Liyanage
let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')

function post(url, formdata) {
  return fetch(url, {
    method: 'POST',
    headers: {
      accept: "*/*",
      'accept-language': "en-US,en;q=0.9",
      'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: new URLSearchParams(Object.entries(formdata))
  })
}
//Coded by Tharindu Liyanage
//Coded by Tharindu Liyanage
//Coded by Tharindu Liyanage
//Coded by Tharindu Liyanage
const ytIdRegex = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/

async function yt(url, quality, type, bitrate, server = 'en320') {
  let ytId = ytIdRegex.exec(url)
  url = 'https://youtu.be/' + ytId[1]
  let res = await post(`https://www.y2mate.com/mates/${server}/analyze/ajax`, {
    url,
    q_auto: 0,
    ajax: 1
  })
  let json = await res.json()
  let { document } = (new JSDOM(json.result)).window
  let tables = document.querySelectorAll('table')
  let table = tables[{ mp4: 0, mp3: 1 }[type] || 0]
  let list
  switch (type) {
    case 'mp4':
      list = Object.fromEntries([...table.querySelectorAll('td > a[href="#"]')].filter(v => !/\.3gp/.test(v.innerHTML)).map(v => [v.innerHTML.match(/.*?(?=\()/)[0].trim(), v.parentElement.nextSibling.nextSibling.innerHTML]))
      break
    case 'mp3':
      list = {
        '128kbps': table.querySelector('td > a[href="#"]').parentElement.nextSibling.nextSibling.innerHTML
      }
      break
    default:
      list = {}
  }
  let filesize = list[quality]
  let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
  let thumb = document.querySelector('img').src
  let title = document.querySelector('b').innerHTML
  let res2 = await post(`https://www.y2mate.com/mates/${server}/convert`, {
    type: 'youtube',
    _id: id[1],
    v_id: ytId[1],
    ajax: '1',
    token: '',
    ftype: type,
    fquality: bitrate
  })
  let json2 = await res2.json()
  let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
  let resUrl = /<a.+?href="(.+?)"/.exec(json2.result)[1]
  return {
    dl_link: resUrl.replace(/https/g, 'http'),
    thumb,
    title,
    filesizeF: filesize,
    filesize: KB
  }
}
//Coded by Tharindu Liyanage
//Coded by Tharindu Liyanage
//Coded by Tharindu Liyanage

var _0xf128=["\x65\x78\x70\x6F\x72\x74\x73","\x31\x32\x38\x6B\x62\x70\x73","\x65\x6E\x32\x37\x37","\x6D\x70\x33","\x6B\x62\x70\x73","\x65\x6E\x64\x73\x57\x69\x74\x68","","\x72\x65\x70\x6C\x61\x63\x65","\x33\x36\x30\x70","\x6D\x70\x34","\x70","\x65\x6E\x33\x32\x30","\x65\x6E\x33\x37\x31"];module[_0xf128[0]]= {yt,ytIdRegex,yta:function(_0xf5fex1,_0xf5fex2= _0xf128[1],_0xf5fex3= _0xf128[2]){return yt(_0xf5fex1,_0xf5fex2,_0xf128[3],_0xf5fex2[_0xf128[5]](_0xf128[4])?_0xf5fex2[_0xf128[7]](/kbps/g,_0xf128[6]):_0xf5fex2,_0xf5fex3)},ytv:function(_0xf5fex1,_0xf5fex2= _0xf128[8],_0xf5fex3= _0xf128[2]){return yt(_0xf5fex1,_0xf5fex2,_0xf128[9],_0xf5fex2[_0xf128[5]](_0xf128[10])?_0xf5fex2[_0xf128[7]](/p/g,_0xf128[6]):_0xf5fex2,_0xf5fex3)},servers:[_0xf128[11],_0xf128[6],_0xf128[12],_0xf128[2]]}
