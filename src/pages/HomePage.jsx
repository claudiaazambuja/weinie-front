import React from 'react';
import '../styles/HomePage.css';
import logo from '../assets/logo.png';
import pegadaPng from '../assets/pegada.png';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    localStorage.clear()
    navigate('/signin')
  };
  return (
    <div className="content-container">
      <img src={logo} alt="Logo da Empresa" className="logo" />

      <button className="auth-button" onClick={handleLoginClick}>
        Descobrir
      </button>
      <div className="paw-container">
        <div className="paw paw-1">
          <img src={pegadaPng} alt="Pegada de cachorro" className="paw-svg" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
