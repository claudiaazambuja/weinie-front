import React from 'react';
import '../styles/HomePage.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/signin')
  };
  return (
      <div className="content-container">
        <img src={logo} alt="Logo da Empresa" className="logo" />

        <button className="auth-button" onClick={handleLoginClick}>
          Fazer login
        </button>
      </div>
  );
}

export default HomePage;
