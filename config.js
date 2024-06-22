const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "MONGODB_URI:mongodb+srv://ZAINi78:ZAIn@786@cluster0.4nhmsti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2cc1f655ee8958399a7a2.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923377081321";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923377081321";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_34_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc5LFxuICAgICAgICA5NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQzLFxuICAgICAgICA5NixcbiAgICAgICAgMTExLFxuICAgICAgICA3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMyxcbiAgICAgICAgMjExLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDk3LFxuICAgICAgICA3MixcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgODIsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcwLFxuICAgICAgICA5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMixcbiAgICAgICAgMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFR2FVbUlhYUVUMGI4ZG5qVElMeTVTTTNKS1FlSVE4YlZhQlJMekVERmE0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTLXZVcGstYlJBU2tTLTRfdV84bXJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk4NTg4ZDRkLTcwZWItNDFmNy1iOTg2LWUwNzFlMjBhYjQwZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDEwNixcbiAgICAgIDYsXG4gICAgICAyNCxcbiAgICAgIDEyMSxcbiAgICAgIDEwOSxcbiAgICAgIDE3MCxcbiAgICAgIDEzOSxcbiAgICAgIDE3MCxcbiAgICAgIDIzOSxcbiAgICAgIDIsXG4gICAgICA3NixcbiAgICAgIDEsXG4gICAgICAyNSxcbiAgICAgIDEwMyxcbiAgICAgIDU4LFxuICAgICAgODYsXG4gICAgICAxODUsXG4gICAgICA3OCxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNCxcbiAgICAgIDEyNCxcbiAgICAgIDEwMyxcbiAgICAgIDE0NSxcbiAgICAgIDIzNCxcbiAgICAgIDE4OCxcbiAgICAgIDI1MyxcbiAgICAgIDExOCxcbiAgICAgIDEwNyxcbiAgICAgIDk3LFxuICAgICAgNTAsXG4gICAgICAxMDksXG4gICAgICAyMSxcbiAgICAgIDc2LFxuICAgICAgMTY3LFxuICAgICAgMTQsXG4gICAgICAxMzAsXG4gICAgICA0NCxcbiAgICAgIDU4LFxuICAgICAgMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlZKNzRWWFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM3NzA4MTMyMTo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTkyMTgyNzQ2MzMzNDo4N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ21vOUFERUwybDI3TUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJGeVFhTXJ1cVpvejd6SFcxcUJYTFdsVEZQdFJNemhXdlB3M3VYMkloV2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSlYwa0oxSGNKbks0dHlwUnNIRWg0UHl2WDJQYU1zcGx2RjJBbUJiTkFkTWwrYXEvUHZLYnZMbWR4ajRBQVFPTWVudXN6Rm8rTnZKdjFvRWtuM0xDQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwickFSaFgyVjZFbElOT1ZtM0RpcDVUQnRYV2g0WE9yemdpT3JTSzVtQjNxUGUvaEI2TE5KaTFUL09TZVl6UWJxUmF3TFhjNmRIQzNEZ1hyNmdHZlNTaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzc3MDgxMzIxOjg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkwNjMyMzJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "𒁍 ☠︎~• ┼།🕊️꯭꯭⃝‌ٖ 𝞛𝞘𝙎𝙎 𝞛𝞓𝙇𝞘𝞖𝞓‣᭄𓆪 𑁍 ̽•››̈" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𒁍 ☠︎~• ┼།🕊️꯭꯭⃝‌ٖ 𝞛𝞘𝙎𝙎 𝞛𝞓𝙇𝞘𝞖𝞓‣᭄𓆪 𑁍 ̽•››̈",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𒁍 ☠︎~• ┼།🕊️꯭꯭⃝‌ٖ 𝞛𝞘𝙎𝙎 𝞛𝞓𝙇𝞘𝞖𝞓‣᭄𓆪 𑁍 ̽•››̈",
  ownername:process.env.OWNER_NAME|| "𒁍 ☠︎~• ┼།🕊️꯭꯭⃝‌ٖ 𝞛𝞘𝙎𝙎 𝞛𝞓𝙇𝞘𝞖𝞓‣᭄𓆪 𑁍 ̽•››̈",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
