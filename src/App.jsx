import { useState } from 'react'
import Login from './components/login/login.jsx'
import Menu from './components/menu/menu.jsx'
import Dashboard from './components/dashboard/dashboard.jsx'
import Chat from './components/chat/chat.jsx'
import './App.css'

function App() {
  const [tela, setTela] = useState('login')
  const [usuario, setUsuario] = useState(null)

  const login = (email) => {
    setUsuario({ email })
    setTela('dashboard')
  }

  const irPara = (novaTela) => setTela(novaTela)
  const sair = () => {
    setUsuario(null)
    setTela('login')
  }

  if (tela === 'login') return <Login onLogin={login} />

  return (
    <>
      <Menu irPara={irPara} sair={sair} usuario={usuario} telaAtual={tela} />
      {tela === 'dashboard' && <Dashboard irParaChat={() => irPara('chat')} />}
      {tela === 'chat' && <Chat voltar={() => irPara('dashboard')} />}
    </>
  )
}

export default App