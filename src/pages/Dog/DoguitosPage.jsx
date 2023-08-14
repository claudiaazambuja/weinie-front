import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/DoguitosPage.css';
import DogDetails from '../../components/DogDetails';
import Header from '../../components/Header'
const VITE_API_URL = import.meta.env.VITE_API_URL

function DoguitosPage() {
  const [dogList, setDogList] = useState([]);
  const [visibleDogCount, setVisibleDogCount] = useState(12);

  useEffect(() => {
    async function fetchDogList() {
      try {
        const response = await axios.get(`${VITE_API_URL}/dog`);
        setDogList(response.data);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }

    fetchDogList();
  }, []);

  const loadMoreDogs = () => {
    setVisibleDogCount(prevCount => prevCount + 12);
  };
  const reversedDogList = [...dogList].reverse();
  return (

    <div className="doguitos-container">
      <Header />

      <h1>Lista de Doguitos</h1>
      <ul className="card-list">
        {reversedDogList.slice(0, visibleDogCount).map((dog, index) => (
          <DogDetails key={dog.id} dog={dog} />
        ))}
      </ul>
      {visibleDogCount < dogList.length && (
        <button className="load-more-button" onClick={loadMoreDogs}>
          Carregar mais
        </button>
      )}
    </div>

  );
}

export default DoguitosPage;