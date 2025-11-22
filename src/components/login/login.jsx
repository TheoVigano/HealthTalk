import { useState } from 'react'
import './style.css'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const entrar = (e) => {
    e.preventDefault()
    if (email && senha) onLogin(email)
  }

  return (
    <div className="fundo">
      <div className="card">
        <h1>HealthTalk</h1>
        <div className="icone">
          <svg viewBox="0 0 24 24" width="90" height="90" fill="none" stroke="#333" strokeWidth="1.5">
            <circle cx="12" cy="7" r="4"/>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <path d="M12 14c-3 2.5-6 6-6 6h12s-3-3.5-6-6z"/>
          </svg>
        </div>
        <form onSubmit={entrar}>
          <label>E-mail</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label>Senha</label>
          <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  )
}