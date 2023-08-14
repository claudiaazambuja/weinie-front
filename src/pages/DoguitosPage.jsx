import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/DoguitosPage.css';
import DogDetails from '../components/DogDetails';


function DoguitosPage() {
    const [dogList, setDogList] = useState([]);

    useEffect(() => {
      async function fetchDogList() {
        try {
          const response = await axios.get('http://localhost:5000/dog'); // Faça a requisição para obter os dados
          setDogList(response.data);
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      }
  
      fetchDogList();
    }, []);

  return (
    <div>
      <h1>Lista de Doguitos</h1>
      {dogList.map((dog) => (
        <DogDetails key={dog.id} dog={dog} />
      ))}
    </div>
  );
}


export default DoguitosPage;