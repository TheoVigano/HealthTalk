import { useState } from 'react'
import './style.css'

export default function Chat({ voltar }) {
  const [mensagens, setMensagens] = useState([
    { texto: "Oi! Como você está se sentindo hoje?", autor: "bot" }
  ])
  const [nova, setNova] = useState('')

  const respostas = [
    "Entendo... pode me contar mais?",
    "Você é muito forte por estar aqui.",
    "Respira fundo. Você não está sozinho.",
    "Obrigado por confiar em mim."
  ]

  const enviar = (e) => {
    e.preventDefault()
    if (!nova.trim()) return
    setMensagens([...mensagens, { texto: nova, autor: "user" }])
    setNova('')

    setTimeout(() => {
      const resp = respostas[Math.floor(Math.random() * respostas.length)]
      setMensagens(prev => [...prev, { texto: resp, autor: "bot" }])
    }, 1000)
  }

  return (
    <div className="chat-container">
      <div className="chat-card">
        <button onClick={voltar} className="btn-voltar">← Voltar</button>
        <div className="chat-mensagens">
          {mensagens.map((m, i) => (
            <div key={i} className={m.autor === "user" ? "msg-user" : "msg-bot"}>
              {m.texto}
            </div>
          ))}
        </div>
        <form onSubmit={enviar} className="chat-input">
          <input value={nova} onChange={e => setNova(e.target.value)} placeholder="Digite aqui..." />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}