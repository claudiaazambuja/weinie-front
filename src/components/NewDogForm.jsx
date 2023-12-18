import React, { useState } from 'react'
import axios from 'axios'
import joi from 'joi'
import '../styles/NewDogForm.css'
import { useNavigate } from 'react-router-dom'
const VITE_API_URL = import.meta.env.VITE_API_URL

const dogSchema = joi.object({
    name: joi.string().required(),
    photo_url: joi.string().uri().required(),
    characteristics: joi.string().max(300).required(),
    contact_info: joi.string().max(300).required(),
    active: joi.string().valid('ativo', 'inativo', 'de_ferias').required(),
    hourly_rate: joi.number().min(0).required()
});

const NewDogForm = () => {

    const navigate = useNavigate()

    const handleLogClick = () => {
        navigate('/signup')
    };
    const [formData, setFormData] = useState({
        name: '',
        photo_url: '',
        characteristics: '',
        contact_info: '',
        active: 'ativo',
        hourly_rate: 0,
    });

    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validation = dogSchema.validate(formData);
        if (validation.error) {
            setError(validation.error.details[0].message);
            return;
        }

        const token = localStorage.getItem('token')
        if (!token) {
            return;
        }

        try {
            await axios.post(`${VITE_API_URL}/me/newdog`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Adicionado com sucesso!')
            navigate('/me')
        } catch (error) {
            setError('Erro ao adicionar o cachorro. Por favor, tente novamente.');
        }
    };

    return (
        <div>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

                <label>URL da Foto:</label>
                <input type="text" name="photo_url" value={formData.photo_url} onChange={handleInputChange} />

                <label>Características:</label>
                <textarea name="characteristics" value={formData.characteristics} onChange={handleInputChange} />

                <label>Informações de Contato:</label>
                <textarea name="contact_info" value={formData.contact_info} onChange={handleInputChange} />

                <label>Status:</label>
                <select name="active" value={formData.active} onChange={handleInputChange}>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                    <option value="de_ferias">De Férias</option>
                </select>

                <label>Valor por Hora:</label>
                <input type="number" name="hourly_rate" value={formData.hourly_rate} onChange={handleInputChange} />

                <button className="button" type="submit">Adicionar Cachorro</button>
            </form>
        </div>
    );
};

export default NewDogForm;
