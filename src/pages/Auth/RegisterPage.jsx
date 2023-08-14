import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/RegisterPage.css';
import { useNavigate } from 'react-router-dom'
const VITE_API_URL = import.meta.env.VITE_API_URL

function RegisterPage() {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/signin')
    };
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    function isCPFValid(cpf) {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return cpfRegex.test(cpf);
        }
      
    function isPhoneValid(phone) {
        const phoneRegex = /^\d{2} \d{5}-\d{4}$/;
        return phoneRegex.test(phone);
      }

    const handleRegister = async () => {
        if (!isCPFValid(cpf)) {
            alert('Formato de CPF inválido. Use o formato XXX.XXX.XXX-XX');
            return;
          }
        
          if (!isPhoneValid(phone)) {
            alert('Formato de telefone inválido. Use o formato XX XXXXX-XXXX');
            return;
          }
      try {

        const response = await axios.post(`${VITE_API_URL}/signup`, {
          name,
          cpf,
          phone,
          email,
          password,
          confirmPassword,
        });
        
        if (response.status === 201) {
            setIsSuccess(true); // Atualiza o estado para sucesso
            alert('Usuário cadastrado com sucesso. Faça login.')
            navigate('/signin')
          }
      
       } catch (error) {
        if (error.response) {
          const status = error.response.status;
          if (status === 400) {
            alert('Usuário já foi cadastrado. Faça login.');
          } else {
            alert('Ocorreu um erro na requisição. Por favor, tente novamente.');
          }
        } else {
          alert('Erro ao se conectar ao servidor. Verifique sua conexão de rede.');
        }
      }
    };
  return (
    <div className="container">
      <div className="login-box">
        <h2>Cadastre-se</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="text"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="button" onClick={handleRegister}>
            Cadastrar
          </button>
          <button className="button" onClick={handleLoginClick }>
            Já tem conta? Faça Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;