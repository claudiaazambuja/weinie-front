import React from 'react';
import NewDogForm from '../../components/NewDogForm';
import Header from '../../components/Header';

function NewDoguitosPage() {
    return (
        <div className="container">
            <Header/>
            <div className="form-box">
            <h1>Adicionar Novo Aumigo</h1>
            <NewDogForm />
            </div>
        </div>
    );
}

export default NewDoguitosPage;



