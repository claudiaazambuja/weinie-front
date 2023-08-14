import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/DogIdPage.css';
import Header from '../../components/Header';
const VITE_API_URL = import.meta.env.VITE_API_URL
  `${VITE_API_URL}/signin`


function DogDetailPage() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/dog')
  };

  useEffect(() => {
    async function fetchDogDetails() {
      try {
        const response = await axios.get(`${VITE_API_URL}/dog/${id}`);
        setDog(response.data.rows[0]);
        console.log(response)
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }

    fetchDogDetails();
  }, [id]);

  const handleRentClick = async () => {
    try {
      alert(`Parabéns. Estamos quase lá para o doguinho ${dog.name} seja seu! Em  instantes você receberá por email mais informações... Aguarde!`);
    } catch (error) {
      console.error('Erro ao alugar o doguinho:', error);
    }
  };

  if (!dog) {
    return <button className="button" onClick={handleClick}>
      Deu ruim por aqui. Clique aqui para ser redirecionada a pagina anterior
    </button>
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="dog-details">
          <h1>Detalhes do Doguito #{id}</h1>
          <h2>{dog.name}</h2>
          <img src={dog.photo_url} alt={dog.name} />
          <p>Características: {dog.characteristics}</p>
          <p>Valor por hora: R${dog.hourly_rate}</p>
          <button className="button" onClick={handleRentClick}>
            Marcar horário? Clique aqui e fale agora com o tutor
          </button>
          {/* ver como direcionar para o WhatsApp depois */}
        </div>
      </div>
    </div>
  );
}

export default DogDetailPage;
