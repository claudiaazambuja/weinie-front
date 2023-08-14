import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import gifLogo from '../assets/load.gif'

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogout = () => {
        localStorage.removeItem('token')    
        setIsLoggedIn(false)
    };
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <img src={gifLogo} alt="Logo da Sua Aplicação" className="logo-gif" />
                </div>
                <nav>
                    <Link to="/dog">Home</Link>
                    <Link to="/me">Meus Animais</Link>
                    {isLoggedIn ? (
                    <button onClick={handleLogout}>Sair</button>
                ) : (
                    <Link to="/signin">Sair</Link>
                )}
                </nav>
            </div>
        </header>
    );
}

export default Header;
