let handler = async (m, { conn }) => {
let info = `
*${htki} 📥 DOWNLOADER 📥 ${htka}*
`
const sections = [
   {
    title: `DOWNLOADER MENU`,
	rows: [
	  {title: "Google Drive", rowId: '.gdrive'},
	  {title: "Facebook", rowId: '.fb'},
    {title: "instagram", rowId: '.ig'},
    {title: "Mediafire", rowId: '.mediafire'},
    {title: "Pixiv", rowId: '.pixiv'},
    {title: "Play", rowId: '.play'},
    {title: "TikTok", rowId: '.tiktok'},
    {title: "Twitter", rowId: '.twitter'},
    {title: "Youtube Audio", rowId: '.ytmp3'},
	  {title: "Youtube Video", rowId: '.ytmp4'},
	]
    }, 
    
]
const listMessage = {
  text: info,
  footer: global.wm,
  title: null,
  buttonText: "HERE!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}

handler.command = /^menudownload$/i
handler.premium = false

export default handler
