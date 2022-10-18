import fetch from 'node-fetch'
import axios from 'axios'
import fs from 'fs'

let handler = async (m, { conn, args, command }) => {
	let _pp = './src/avatar_contact.png'
	 let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let url = 'https://telegra.ph/file/13980f9108c3bc300250c.jpg'
	let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
	const text = ` [!] Fitur telah Dinonaktifkan `.trim()
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, text, botdate, fla, [['Back To Menu','.menu']], m, {
contextInfo: { externalAdReply :{
	                    renderLargerThumbnail: true,
                        mediaUrl: sig,
                        containsAutoReply: true,
                        mediaType: 1,
                        description: 'anu',
                        title: 'M A I N T A N I E D',
                        body: 'Tap Disini Untuk Bergabung Grup BOT',          
                        thumbnail: await (await fetch(url)).buffer(),
                        sourceUrl: sgc
                      }}
})
}

handler.command = ['lyrics', 'lyric', 'lirik']
export default handler
