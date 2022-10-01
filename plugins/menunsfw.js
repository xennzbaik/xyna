let handler = async (m, { conn }) => {
let info = `
*${htki} 🔞 NSFW MENU 🔞 ${htka}*
`
const sections = [
   {
    title: `NSFW MENU`,
	rows: [
    {title: "NSFW", rowId: '.nsfw', description: "Random NSFW pict" },
    {title: "Nhentai Downloader", rowId: '.nhentai', description: "Download PDF from nhentai"},
	{title: "Rule34", rowId: '.rule34', description: "Search any anime NSFW pict"},
	{title: "Realshit", rowId: '.realshit', description: "NSFW Real"},
	{title: "Bokep", rowId: '.bkp', description: "video bokep"},
	{title: "File Bokep", rowId: '.filebokep', description: "Random File Bokep Rare"},
	{title: "Onlyfans", rowId: '.onlyfans', description: "Random File Onlyfans"},
	]
    }, 
    
]
let vn = `https://raw.githubusercontent.com/saipulanuar/Api-Github/main/audio/owner-sange.mp3`
const listMessage = {
  text: info,
  footer: global.wm,
  title: null,
  buttonText: "HERE!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})

conn.sendFile(m.chat, vn, m)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}

handler.command = /^menunsfw$/i
handler.premium = false

export default handler