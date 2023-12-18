import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Header from '../../components/Header'
import '../../styles/MyDogs.css'
const VITE_API_URL = import.meta.env.VITE_API_URL

function MyAnimalsPage() {
    const navigate = useNavigate()
    const [animals, setAnimals] = useState([])
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('user_id')

    useEffect(() => {
        async function fetchMyDogs() {
            try {
                if (!id) {
                    navigate('/signin')
                    return;
                }
                const response = await axios.get(`${VITE_API_URL}/me/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAnimals(response.data.rows);
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        }

        fetchMyDogs();
    }, [token, id, navigate]);

    const handleUpdateStatus = async (animalId, newStatus) => {
        try {
            await axios.put(
                `${VITE_API_URL}/me/${animalId}`,
                { active: newStatus },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setAnimals(prevAnimals =>
                prevAnimals.map(animal =>
                    animal.id === animalId ? { ...animal, active: newStatus } : animal
                )
            );
            alert(`Status alterado para ${newStatus}`)
        } catch (error) {
            console.error('Erro ao atualizar o status:', error);
        }
    };

    const handleDeleteAnimal = async (animalId) => {
        try {
            await axios.delete(`${VITE_API_URL}/me/${animalId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAnimals(prevAnimals => prevAnimals.filter(animal => animal.id !== animalId));
            alert(`Excluido com sucesso!`)
            navigate('/me')

        } catch (error) {
            console.error('Erro ao deletar o animal:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className="title-and-link">
                <h1 className="title">Meus xashichas</h1>
                <Link className="add-animal-link" to="/me/newdog">
                    Adicionar novo salsicha? Clique aqui
                </Link>
            </div>
            <div className="animal-cards-container">
                {animals.map(animal => (
                    <div className="animal-card" key={animal.id}>
                        <div className="animal-details">
                            <img className="animal-photo" src={animal.photo_url} alt={animal.name} />
                            <div className="animal-info">
                                <h2 className="animal-name">{animal.name}</h2>
                                <p className="animal-status">Status: {animal.active}</p>
                            </div>
                        </div>
                        <div className="animal-buttons"  >
                            <button className="button" onClick={() => handleUpdateStatus(animal.id, 'ativo')}>Ativo</button>
                            <button className="button" onClick={() => handleUpdateStatus(animal.id, 'inativo')}>Inativo</button>
                            <button className="button" onClick={() => handleUpdateStatus(animal.id, 'de_ferias')}>De Férias</button>
                            <button className="danger-Zone" onClick={() => handleDeleteAnimal(animal.id)}>Deletar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyAnimalsPage;
