import './style.css'

export default function Menu({ sair, usuario, telaAtual, irPara }) {
  const nome = usuario?.email?.split('@')[0] || 'Amigo'

  return (
    <div className="menu-container">
      {/* Fundo com gradiente animado */}
      <div className="menu-bg"></div>

      <div className="menu-content">
        {/* Lado esquerdo - Logo + Saudação */}
        <div className="menu-left">
          <div className="logo-area">
            <div className="logo-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <div>
              <h2 className="menu-title">HealthTalk</h2>
              <p className="greeting">
                Olá, <span className="user-name">{nome}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Lado direito - Navegação */}
        <div className="menu-right">
          <nav className="nav-buttons">
            <button
              onClick={() => irPara('dashboard')}
              className={`nav-btn ${telaAtual === 'dashboard' ? 'active' : ''}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Início</span>
            </button>

            <button
              onClick={() => irPara('chat')}
              className={`nav-btn ${telaAtual === 'chat' ? 'active' : ''}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span>Chat</span>
            </button>

            <button onClick={sair} className="nav-btn logout-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              <span>Sair</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Partícula flutuante decorativa */}
      <div className="floating-orb"></div>
    </div>
  )
}