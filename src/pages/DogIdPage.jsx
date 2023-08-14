import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/DogIdPage.css'; 

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
        const response = await axios.get(`http://localhost:5000/dog/${id}`);
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
      // Lógica para alugar o doguinho
      // Exemplo: Enviar uma requisição para o backend para realizar o aluguel
      alert(`Você alugou o doguinho ${dog.name} para fotos!`);
    } catch (error) {
      console.error('Erro ao alugar o doguinho:', error);
    }
  };

  if (!dog) {
    return  <button className="button" onClick={handleClick}>
                Deu ruim por aqui. Clique aqui para ser redirecionada a pagina anterior
            </button>
  }

  return (
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
  ); 
}

export default DogDetailPage;
