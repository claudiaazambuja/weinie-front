import React, { useState } from 'react';
import axios from 'axios'; // Importe o Axios
import '../../styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate()

    const handleLogClick = () => {
        navigate('/signup')
    };

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const VITE_API_URL = import.meta.env.VITE_API_URL

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${VITE_API_URL}/signin`, {
                email,
                password,
            });
            if (response.data.token && response.data.userID) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user_id', response.data.userID);
                alert('Login bem-sucedido!');
                navigate('/dog');
            } else {
                alert('Credenciais inválidas.');
            }
        } catch (error) {
            
              const status = error.response.status;
              if (status === 401) {
                alert('Sem autorização. As credenciais inseridas divergem');
              } else {
                alert('Ocorreu um erro na requisição. Por favor, tente novamente.');
              }}
          
         };


    return (
        <div className="container">
            <div className="login-box">
                <div className="form-group">
                    <h2>Login</h2>

                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="button" onClick={handleLogin}>
                        Entrar
                    </button>
                    <button className="button" onClick={handleLogClick}>
                        Ainda não tem conta? Cadastra-se agora!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;