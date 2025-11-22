import './style.css'

export default function Dashboard({ irParaChat }) {
  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">
        
        {/* Card principal com efeito glassmorphism */}
        <div className="dashboard-card">
          <div className="welcome-section">
            <h1 className="titulo-principal">
              Bem-vindo de avolta!
            </h1>
            <p className="subtitulo">
              Como você está se sentindo hoje?
            </p>
          </div>

          {/* Círculos decorativos animados */}
          <div className="decorative-circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>

          {/* Botão principal com efeito incrível */}
          <button onClick={irParaChat} className="btn-conversar">
            <span className="btn-text">Falar com HealthTalk</span>
            <div className="btn-glow"></div>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 12h8m-4-4v8"/>
            </svg>
          </button>

          {/* Mensagem sutil de apoio */}
          <p className="mensagem-apoio">
            Estou aqui para te ouvir, sempre que precisar
          </p>
        </div>

        {/* Ondas suaves no fundo */}
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
      </div>
    </div>
  )
}