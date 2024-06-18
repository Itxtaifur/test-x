const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const api = require("caliph-api")
let { img2url } = require('@blackamda/telegram-image-url')
const fs = require('fs')
const fg = require('api-dylux')

cmd({
    pattern: "hmods",
    react: "🔎",
    alias: ["happymods"],
    desc: "Happymod apk Searcher",
    category: "search",
    use: '.hmods < Query >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply('🖊️ *Please type a App name for search*')
const vid = await api.search.happymod(q)
    let yt = '\n❍⚯────────────────────⚯❍\n   🎲 *𝙷𝙰𝙿𝙿𝚈 𝙼𝙾𝙳𝚂 𝙰𝙿𝙺 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🎲\n      ⚡ *ᴄʏʙᴇʀ x ʜ ᴍᴏᴅꜱ ꜱᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ* ⚡\n❍⚯────────────────────⚯❍\n\n\n'
    for (let i of vid.result ) {
        yt += `📬 *Title - ${i.title}* \n🔗 _Url : ${i.link}_\n\n\n`
    }
 await conn.sendMessage(from,{image:{url: vid.result[0].thumb },caption: yt + "*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*" },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*')
l(e)
}
})



cmd({
    pattern: "url",
    react: "🌏",
    alias: ["img2url","tourl"],
    desc: "Img to Url Coverter",
    category: "extra",
    use: '.url',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Replay a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
const imgURL = await img2url(media)
reply(`\n${imgURL}\n`)

await fs.unlinkSync(media)
} else return reply('❗ *Please mention a Image to Continue*')


} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "midjourney",
    react: "🧠",
    alias: ["midimage"] ,
    desc: "Midjourney Image generator",
    category: "extra",
    use: '.apk < Target >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const img = await getBuffer(`https://vihangayt.me/tools/midjourney?q=${q}`)
await conn.sendMessage(from, { image: img , caption: "☘ *Generated by MidjourneyAi*" }, { quoted: mek })

} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})

cmd({
    pattern: "npmjs",
    react: "🥏",
    alias: ["npm"],
    desc: "Developing command.",
    category: "search",
    use: '.checkjson',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply('❗ *Please enter Valid npm Name*')
const duka = await fg.npmSearch(q)
let yt =`
ℹ️ *TAIFUR-X  NPM Informations ( From - npmjs.com )*

 Name -:  *${duka.name}*

 Description  -:  ${duka.description}

 Version   -:  ${duka.version}

 Url  -:  ${duka.packageLink}

 Latest Updated on  -:  ${duka.publishedDate}

 Home Page  -:  ${duka.homepage}
 
 License  -:  ${duka.license}
 
 Keywords :-
`
 
   for (let i of duka.keywords  ) {
        yt += `${i}  `
    }
    
    const cap = yt + "\n\n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰᴄ*"
  await conn.sendMessage(from,{image:{url: "https://telegra.ph/file/27cb87015d418abde1bf4.jpg" },caption: cap },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*'+ e )
l(e)
}
})