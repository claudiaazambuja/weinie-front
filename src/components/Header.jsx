import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import gifLogo from '../assets/load.gif'

function Header() {
    // const location = useLocation();
    // const excludedRoutes = ['/', '/signin', '/signup'];
    // const shouldShowHeader = !excludedRoutes.includes(location.pathname);

    // if (!shouldShowHeader) {
    //     return null; // Não renderize o Header
    // }
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <img src={gifLogo} alt="Logo da Sua Aplicação" className="logo-gif" />
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/me">Meus Animais</Link>
                    {/* Aqui você pode adicionar mais links de navegação */}
                </nav>
            </div>
        </header>
    );
}

export default Header;
