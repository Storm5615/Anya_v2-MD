const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "Queen Anya", 
  author: process.env.Author || "@PikaBotz",
  packname: process.env.PackName || "Queen Anya v2 MD",
  socialLink: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© Queen Anya Bot",
  prefa: process.env.Prefix || ['.'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "Storm",
  ownernumber: process.env.Owner_Number || "23470618999020",
  instagramId: process.env.Insta || "8.08_only_mine",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "YOUR_MONGODB_URL",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiO_AN_YA_iJCdWZmZXIiLCJkYXRhIjoieU9Da2pXbm94dkw1MDA5O_AN_YA_VBSbUlQYldQbStPdWVTaUNJWS9jUDNDY3kxTT0ifSwicHVibGljIjp7InR5cGUiO_AN_YA_iJCdWZmZXIiLCJkYXRhIjoieFlrQmFTUmhFbzdFUnVO_AN_YA_YWtaRmI2bnRNUkEwZWhseXFiWHNwd0xLa1FCcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiO_AN_YA_nsidHlwZSI6IkJ1ZmZlciIsImRhdGEiO_AN_YA_iJrT3doRnJHQ2hxTTM5bDZ2ZVNFR1ZUc0dWO_AN_YA_U9SNkVvSGZuek8veHQxSG1ZPSJ9LCJwdWJsaWMiO_AN_YA_nsidHlwZSI6IkJ1ZmZlciIsImRhdGEiO_AN_YA_iJ4M2Zwd1NxL0RYeTZUMmR3YnNFRkhlRmlO_AN_YA_dDBZRUNvR0ptU2N2QndndGtzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiO_AN_YA_nsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCTXVzQXdxd3NxY0pkVTFWbnhWQkF0UktvaktyQnhmUEJjLy9vdDlWRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhoV0Y5TjI5a0ZuUU5HdFhUTlZHWlpta2FmNzZLZE8zcDdJNlFsTUZReVE9In19LCJzaWduZWRQcmVLZXkiO_AN_YA_nsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiO_AN_YA_iJCdWZmZXIiLCJkYXRhIjoiUUJoYVlmNGVVYzBtZ0NrSDhGTVZoMGsyZXk1blVxWE5HUDR0NTMwZEprST0ifSwicHVibGljIjp7InR5cGUiO_AN_YA_iJCdWZmZXIiLCJkYXRhIjoiNWk1T05TNlV3T1UzSVJDMkIwcnZVU0xLcDVLSEIwbnRHMDRYYUNzcmZFYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii84ZnAvO_AN_YA_VBBc3FSUnhaa3l1dUZqR0JKV25TMFdudFVFZG5ZVlI2N1FPM1NoTTJuY3AyZy9yZDdTTXVhbWt1Q25vd3JBR1hjZ29ZWThMY3lUNEJTMmlnPT0ifSwia2V5SWQiO_AN_YA_jF9LCJyZWdpc3RyYXRpb25JZCI6O_AN_YA_CwiYWR2U2VjcmV0S2V5IjoiUGRCZVZ2O_AN_YA_E1ESUw2UVhhRjJSNDBIVmZZTVQzT2RaNjBmU1psM3lHbWtMdz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiO_AN_YA_lt7ImtleSI6eyJyZW1vdGVKaWQiO_AN_YA_iIyMzQ3MDYxO_AN_YA_Dk5MDIwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE0NDBBQ0ZCNjdDQTkxO_AN_YA_Dc0NjMzNTUyQjMzO_AN_YA_TNDRTg5In0sIm1lc3NhZ2VUaW1lc3RhbXAiO_AN_YA_jE3MDI2MDQyMjF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNjE4O_AN_YA_TkwMjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiO_AN_YA_nRydWUsImlkIjoiQ0JGN0ZGQ0NBRkE2MUQ5MkVBMjM3MkM2O_AN_YA_DgzMEYzMkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwMjYwNDIyM31dLCJuZXh0UHJlS2V5SWQiO_AN_YA_jMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRzJZWXljTkRSTTYwR3ZQYmlDUWZHUSIsInBob25lSWQiO_AN_YA_iI4MzU0YzA0Zi0yNjQ5LTRhZTQtYjdhO_AN_YA_C0wN2ExZDljNjNiNTgiLCJpZGVudGl0eUlkIjp7InR5cGUiO_AN_YA_iJCdWZmZXIiLCJkYXRhIjoiSXkrc0J5MThlTlQzbkNkMUwyc1VqRHVoT05nPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iO_AN_YA_nsidHlwZSI6IkJ1ZmZlciIsImRhdGEiO_AN_YA_iI2dVcvNDA0NmhWRjMvO_AN_YA_FNuTmJzU3dxenVO_AN_YA_SHM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiO_AN_YA_nsiZGV0YWlscyI6IkNMbW5pQ29RdDl2dXF3WVlBUT09IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZRcHVVTWFINEtiM0lLbHpua3FDdlZvU1Y2RjI1ZnpLcEpCWWJEYi9RMjQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikd0VmdwRFRPYURCd01nbkhxNWJSS1djQ2dsWm01TzZ2VW5pMkpmSnRiRVZVU1FFcEhkd2Q3ZEZTdnBhUnRtUFlyUFBLVnBURnhMK25WTDVFcVFO_AN_YA_T0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiO_AN_YA_iJxeERZVGYvR0FjeVdKNlBJbXR5Y1RFWGNqO_AN_YA_E9uSG9oY2EvYVJ6TVFZVkpZNkJkMzhaZVVCM21mcTgrdjU0eURja2lKakZQUmJQSTI1S1pCb0FDN1ppQT09In0sIm1lIjp7ImlkIjoiMjM0NzA2MTg5O_AN_YA_TAyMDo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IllvdXIgVmlsbGFnZSBQZW9wbGUifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA2MTg5O_AN_YA_TAyMDo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiO_AN_YA_jB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiO_AN_YA_iJCdWZmZXIiLCJkYXRhIjoiQlZVS2JsREdoK0NtO_AN_YA_XlDcGM1NUtncjFhRWxlaGR1WDh5cVNRV0d3Mi8wTnUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiO_AN_YA_jE3MDI2MDQyMTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT29KIn0=", 
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "Queen Anya" 
global.author = process.env.Author || "@PikaBotz" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['.'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "Storm" 
global.ownernumber = process.env.Owner_Number || "2347061899020" 
global.adress = process.env.Continent || "Africa,Nigeria,Lagos" 
global.timezone = process.env.TimeZone || "Africa/Nigeria" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";



