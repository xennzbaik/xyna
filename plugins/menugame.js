let handler = async (m, { conn }) => {
let info = `
*${htki} 🕹 GAME MENU 🕹 ${htka}*
`
const sections = [
   {
    title: `GAME MENU`,
	rows: [
    {title: "Cak Lontong", rowId: '.caklontong'},
    {title: "Family 100", rowId: '.family100'},
    {title: "Math", rowId: '.math'},
    {title: "Siapakah Aku", rowId: '.siapakahaku'},
    {title: "Susun Kata", rowId: '.susunkata'},
	  {title: "Tebak Gambar", rowId: '.tebakgambar'},
	  {title: "Attack", rowId: '.atk'},
	  {title: "Tebak Kata", rowId: '.tebakkata'},
	  {title: "Tictactoe", rowId: '.ttt'},
	  {title: "Suit", rowId: '.suit'},
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

handler.command = /^menugame$/i
handler.premium = false

export default handler