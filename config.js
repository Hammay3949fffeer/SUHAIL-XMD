const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_24_09_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDk3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODksXG4gICAgICAgIDUzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDM0LFxuICAgICAgICA3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGQTV2SnpURkdocVFMWlYrc3lZUjdOelhzUVgwb21CT2ZKdUhUZ1NIUVg0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSWko4OW9WblJmZW1zcDEzbDR2Q0JnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdmMTlhMGRjLWE1MzgtNDQ2Yi1iZjQzLTlkYjJmMTg0OGJhM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAxMDUsXG4gICAgICA5MSxcbiAgICAgIDEwMyxcbiAgICAgIDIzMixcbiAgICAgIDI0MixcbiAgICAgIDQ3LFxuICAgICAgMjU1LFxuICAgICAgMTE0LFxuICAgICAgODgsXG4gICAgICA5MSxcbiAgICAgIDM5LFxuICAgICAgMjQ4LFxuICAgICAgNzksXG4gICAgICAxOTcsXG4gICAgICAyMixcbiAgICAgIDE2MyxcbiAgICAgIDIxNixcbiAgICAgIDIzMSxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAyMDEsXG4gICAgICAxNjQsXG4gICAgICAxMjMsXG4gICAgICA1OSxcbiAgICAgIDExOCxcbiAgICAgIDEwNyxcbiAgICAgIDQsXG4gICAgICAyNDQsXG4gICAgICAxNTgsXG4gICAgICAyMTUsXG4gICAgICAxNTksXG4gICAgICAyNDYsXG4gICAgICAyOCxcbiAgICAgIDMwLFxuICAgICAgMTg5LFxuICAgICAgMTc5LFxuICAgICAgOTIsXG4gICAgICAxODIsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRV0FLTDU2SFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTY2NTc0MzQyNjA1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMTQ3ODMxODY5MDUyNjoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPWGMwN1VERVBUU2hMY0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndEMjlmSWhuSGtXRjFURFFkT2ZsUmpZdUVQM00xaUVseU9FRWp4ZGszajA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ1hMeWpkUE81RGpIK2RraElsMjVxeXd0M0lGL2orTnk4REpUN2FZeC83MUlGdVpPUS9uaVh0OS95eGxxQk9XV1A0Y2x5UG9DbGNlL0lGQUtiY3JOQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicGxweGhVVnRaWVIxdkx4dVlOeWpWZVJVZTNNWHhpaCtRdmdtUkdoTHE3dFFIdUhUNkEvQ2paa1ZtRUtoYTlrbmQrL1FERXVTWlR0NERBdldqcDNBaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTY2NTc0MzQyNjA1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjAzMjI0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVQYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVBiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL2g5U1REOVRXbFFwUkNxUHdCNHFVc0ZuYTJBRGdub3prWEpqMVdlU1MxYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTc4MjcxNzIsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
