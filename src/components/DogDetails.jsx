import React from 'react';
import { Link } from 'react-router-dom'

function DogDetails({ dog }) {
  return (
    <div className="dog-details">
      <h2>{dog.name}</h2>
      <img className="dog-image" src={dog.photo_url} alt={dog.name} />
      <p>Características: {dog.characteristics}</p>
      <Link to={`/dog/${dog.id}`} className="button">
        Saiba mais
      </Link>
    </div>
  );
}

export default DogDetails;